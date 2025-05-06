import { Request, Response, NextFunction } from 'express';
import prisma from './prisma';
import bcrypt from 'bcryptjs';
import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { Strategy as FacebookStrategy } from 'passport-facebook';

// Initialize passport with local strategy
export function setupAuth(app: any) {
  // Configure passport local strategy
  passport.use(
    new LocalStrategy(async (username, password, done) => {
      try {
        const user = await prisma.user.findFirst({
          where: {
            username: username
          },
        });

        if (!user) {
          return done(null, false, { message: 'Incorrect username.' });
        }

        const isValid = await bcrypt.compare(password, user.password);
        if (!isValid) {
          return done(null, false, { message: 'Incorrect password.' });
        }

        return done(null, user);
      } catch (error) {
        return done(error);
      }
    })
  );

  // Configure Google OAuth strategy if credentials are provided
  if (process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET) {
    passport.use(
      new GoogleStrategy(
        {
          clientID: process.env.GOOGLE_CLIENT_ID,
          clientSecret: process.env.GOOGLE_CLIENT_SECRET,
          callbackURL: '/api/auth/google/callback',
        },
        async (accessToken, refreshToken, profile, done) => {
          try {
            const email = profile.emails?.[0]?.value;
            
            if (!email) {
              return done(new Error('Email not provided by Google'), false);
            }
            
            // Get profile photo if available
            const avatar = profile.photos?.[0]?.value || null;
            
            // Check if user exists with this email
            let user = await prisma.user.findFirst({
              where: {
                email: email
              },
            });

            // If user doesn't exist, create a new one
            if (!user) {
              user = await prisma.user.create({
                data: {
                  username: email || `google_${profile.id}`,
                  email: email,
                  password: await bcrypt.hash(Math.random().toString(36).slice(-8), 10),
                  name: profile.displayName,
                  avatar: avatar,
                  isAdmin: false,
                },
              });
            } 
            // If user exists but doesn't have an avatar, update with the Google avatar
            else if (!user.avatar && avatar) {
              user = await prisma.user.update({
                where: { id: user.id },
                data: { avatar }
              });
            }

            return done(null, user);
          } catch (error) {
            return done(error);
          }
        }
      )
    );
  }

  // Configure Facebook OAuth strategy if credentials are provided
  if (process.env.FACEBOOK_APP_ID && process.env.FACEBOOK_APP_SECRET) {
    passport.use(
      new FacebookStrategy(
        {
          clientID: process.env.FACEBOOK_APP_ID,
          clientSecret: process.env.FACEBOOK_APP_SECRET,
          callbackURL: '/api/auth/facebook/callback',
          profileFields: ['id', 'emails', 'name', 'displayName'],
          enableProof: true
        },
        async (accessToken, refreshToken, profile, done) => {
          try {
            const email = profile.emails?.[0]?.value;
            
            if (!email) {
              return done(new Error('Email not provided by Facebook'), false);
            }
            
            // Get profile photo if available
            const avatar = profile.photos?.[0]?.value || 
                          `https://graph.facebook.com/${profile.id}/picture?type=large`;
            
            // Check if user exists with this email
            let user = await prisma.user.findFirst({
              where: {
                email: email
              },
            });

            // If user doesn't exist, create a new one
            if (!user) {
              user = await prisma.user.create({
                data: {
                  username: email || `fb_${profile.id}`,
                  email: email,
                  password: await bcrypt.hash(Math.random().toString(36).slice(-8), 10),
                  name: profile.displayName,
                  avatar: avatar,
                  isAdmin: false,
                },
              });
            }
            // If user exists but doesn't have an avatar, update with the Facebook avatar
            else if (!user.avatar && avatar) {
              user = await prisma.user.update({
                where: { id: user.id },
                data: { avatar }
              });
            }

            return done(null, user);
          } catch (error) {
            return done(error);
          }
        }
      )
    );
  }

  // Serialize and deserialize user
  passport.serializeUser((user: any, done) => {
    done(null, user.id);
  });

  passport.deserializeUser(async (id: number, done) => {
    try {
      const user = await prisma.user.findFirst({
        where: {
          id: id
        },
      });
      done(null, user);
    } catch (error) {
      done(error);
    }
  });

  // Initialize passport middleware
  app.use(passport.initialize());
  app.use(passport.session());
}

// Middleware to check if user is authenticated
export function isAuthenticated(req: Request, res: Response, next: NextFunction) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.status(401).json({ message: 'Unauthorized' });
}

// Middleware to check if user is admin
export function isAdmin(req: Request, res: Response, next: NextFunction) {
  if (req.isAuthenticated() && (req.user as any)?.isAdmin) {
    return next();
  }
  res.status(403).json({ message: 'Forbidden' });
}
