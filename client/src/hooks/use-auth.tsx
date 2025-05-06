import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { useQuery } from "@tanstack/react-query";

export interface User {
  id: number;
  username: string;
  name?: string;
  email: string;
  avatar?: string;
  isAdmin: boolean;
}

interface RegisterData {
  username: string;
  email: string;
  password: string;
  name?: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isAdmin: boolean;
  isAuthenticating: boolean;
  error: string | null;
  login: (username: string, password: string) => Promise<User | null>;
  register: (username: string, email: string, password: string, name?: string) => Promise<User | null>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function useAuth() {
  return useContext(AuthContext) as AuthContextType;
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Use React Query to fetch the current user
  const { data, isLoading: isAuthenticating, refetch } = useQuery<User | null>({
    queryKey: ['/api/auth/me'],
    queryFn: async () => {
      const response = await fetch('/api/auth/me');
      if (!response.ok) return null;
      return response.json();
    },
    retry: false
  });

  useEffect(() => {
    if (data) {
      setUser(data);
    }
  }, [data]);
  
  const login = async (username: string, password: string) => {
    setIsLoading(true);
    setError(null);
    
    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Login failed");
      }
      
      const userData = await response.json();
      setUser(userData.user);
      await refetch(); // Refresh the auth state
      return userData.user;
    } catch (error) {
      setError(error instanceof Error ? error.message : "An unknown error occurred");
      return null;
    } finally {
      setIsLoading(false);
    }
  };
  
  const register = async (username: string, email: string, password: string, name?: string) => {
    setIsLoading(true);
    setError(null);
    
    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password, name }),
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Registration failed");
      }
      
      // Automatically log in the user after successful registration
      return login(username, password);
    } catch (error) {
      setError(error instanceof Error ? error.message : "An unknown error occurred");
      return null;
    } finally {
      setIsLoading(false);
    }
  };
  
  const logout = async () => {
    setIsLoading(true);
    
    try {
      const response = await fetch("/api/auth/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Logout failed");
      }
      
      setUser(null);
      await refetch(); // Refresh the auth state
    } catch (error) {
      setError(error instanceof Error ? error.message : "An unknown error occurred");
    } finally {
      setIsLoading(false);
    }
  };
  
  const value = {
    user,
    error,
    isAuthenticated: !!user,
    isAdmin: user?.isAdmin || false,
    isAuthenticating: isAuthenticating || isLoading,
    login,
    register,
    logout
  };
  
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}