
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Property
 * 
 */
export type Property = $Result.DefaultSelection<Prisma.$PropertyPayload>
/**
 * Model PropertyImage
 * 
 */
export type PropertyImage = $Result.DefaultSelection<Prisma.$PropertyImagePayload>
/**
 * Model EmailSubscription
 * 
 */
export type EmailSubscription = $Result.DefaultSelection<Prisma.$EmailSubscriptionPayload>
/**
 * Model CashOfferRequest
 * 
 */
export type CashOfferRequest = $Result.DefaultSelection<Prisma.$CashOfferRequestPayload>
/**
 * Model Testimonial
 * 
 */
export type Testimonial = $Result.DefaultSelection<Prisma.$TestimonialPayload>
/**
 * Model RentalApplication
 * 
 */
export type RentalApplication = $Result.DefaultSelection<Prisma.$RentalApplicationPayload>
/**
 * Model ApplicationSubmission
 * 
 */
export type ApplicationSubmission = $Result.DefaultSelection<Prisma.$ApplicationSubmissionPayload>
/**
 * Model ApplicationDocument
 * 
 */
export type ApplicationDocument = $Result.DefaultSelection<Prisma.$ApplicationDocumentPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.property`: Exposes CRUD operations for the **Property** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Properties
    * const properties = await prisma.property.findMany()
    * ```
    */
  get property(): Prisma.PropertyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.propertyImage`: Exposes CRUD operations for the **PropertyImage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PropertyImages
    * const propertyImages = await prisma.propertyImage.findMany()
    * ```
    */
  get propertyImage(): Prisma.PropertyImageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.emailSubscription`: Exposes CRUD operations for the **EmailSubscription** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EmailSubscriptions
    * const emailSubscriptions = await prisma.emailSubscription.findMany()
    * ```
    */
  get emailSubscription(): Prisma.EmailSubscriptionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cashOfferRequest`: Exposes CRUD operations for the **CashOfferRequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CashOfferRequests
    * const cashOfferRequests = await prisma.cashOfferRequest.findMany()
    * ```
    */
  get cashOfferRequest(): Prisma.CashOfferRequestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.testimonial`: Exposes CRUD operations for the **Testimonial** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Testimonials
    * const testimonials = await prisma.testimonial.findMany()
    * ```
    */
  get testimonial(): Prisma.TestimonialDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rentalApplication`: Exposes CRUD operations for the **RentalApplication** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RentalApplications
    * const rentalApplications = await prisma.rentalApplication.findMany()
    * ```
    */
  get rentalApplication(): Prisma.RentalApplicationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.applicationSubmission`: Exposes CRUD operations for the **ApplicationSubmission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ApplicationSubmissions
    * const applicationSubmissions = await prisma.applicationSubmission.findMany()
    * ```
    */
  get applicationSubmission(): Prisma.ApplicationSubmissionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.applicationDocument`: Exposes CRUD operations for the **ApplicationDocument** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ApplicationDocuments
    * const applicationDocuments = await prisma.applicationDocument.findMany()
    * ```
    */
  get applicationDocument(): Prisma.ApplicationDocumentDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Property: 'Property',
    PropertyImage: 'PropertyImage',
    EmailSubscription: 'EmailSubscription',
    CashOfferRequest: 'CashOfferRequest',
    Testimonial: 'Testimonial',
    RentalApplication: 'RentalApplication',
    ApplicationSubmission: 'ApplicationSubmission',
    ApplicationDocument: 'ApplicationDocument'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "property" | "propertyImage" | "emailSubscription" | "cashOfferRequest" | "testimonial" | "rentalApplication" | "applicationSubmission" | "applicationDocument"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Property: {
        payload: Prisma.$PropertyPayload<ExtArgs>
        fields: Prisma.PropertyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PropertyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PropertyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>
          }
          findFirst: {
            args: Prisma.PropertyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PropertyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>
          }
          findMany: {
            args: Prisma.PropertyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>[]
          }
          create: {
            args: Prisma.PropertyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>
          }
          createMany: {
            args: Prisma.PropertyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PropertyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>[]
          }
          delete: {
            args: Prisma.PropertyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>
          }
          update: {
            args: Prisma.PropertyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>
          }
          deleteMany: {
            args: Prisma.PropertyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PropertyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PropertyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>[]
          }
          upsert: {
            args: Prisma.PropertyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>
          }
          aggregate: {
            args: Prisma.PropertyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProperty>
          }
          groupBy: {
            args: Prisma.PropertyGroupByArgs<ExtArgs>
            result: $Utils.Optional<PropertyGroupByOutputType>[]
          }
          count: {
            args: Prisma.PropertyCountArgs<ExtArgs>
            result: $Utils.Optional<PropertyCountAggregateOutputType> | number
          }
        }
      }
      PropertyImage: {
        payload: Prisma.$PropertyImagePayload<ExtArgs>
        fields: Prisma.PropertyImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PropertyImageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PropertyImageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyImagePayload>
          }
          findFirst: {
            args: Prisma.PropertyImageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PropertyImageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyImagePayload>
          }
          findMany: {
            args: Prisma.PropertyImageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyImagePayload>[]
          }
          create: {
            args: Prisma.PropertyImageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyImagePayload>
          }
          createMany: {
            args: Prisma.PropertyImageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PropertyImageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyImagePayload>[]
          }
          delete: {
            args: Prisma.PropertyImageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyImagePayload>
          }
          update: {
            args: Prisma.PropertyImageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyImagePayload>
          }
          deleteMany: {
            args: Prisma.PropertyImageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PropertyImageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PropertyImageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyImagePayload>[]
          }
          upsert: {
            args: Prisma.PropertyImageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyImagePayload>
          }
          aggregate: {
            args: Prisma.PropertyImageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePropertyImage>
          }
          groupBy: {
            args: Prisma.PropertyImageGroupByArgs<ExtArgs>
            result: $Utils.Optional<PropertyImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.PropertyImageCountArgs<ExtArgs>
            result: $Utils.Optional<PropertyImageCountAggregateOutputType> | number
          }
        }
      }
      EmailSubscription: {
        payload: Prisma.$EmailSubscriptionPayload<ExtArgs>
        fields: Prisma.EmailSubscriptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmailSubscriptionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailSubscriptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmailSubscriptionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailSubscriptionPayload>
          }
          findFirst: {
            args: Prisma.EmailSubscriptionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailSubscriptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmailSubscriptionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailSubscriptionPayload>
          }
          findMany: {
            args: Prisma.EmailSubscriptionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailSubscriptionPayload>[]
          }
          create: {
            args: Prisma.EmailSubscriptionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailSubscriptionPayload>
          }
          createMany: {
            args: Prisma.EmailSubscriptionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EmailSubscriptionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailSubscriptionPayload>[]
          }
          delete: {
            args: Prisma.EmailSubscriptionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailSubscriptionPayload>
          }
          update: {
            args: Prisma.EmailSubscriptionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailSubscriptionPayload>
          }
          deleteMany: {
            args: Prisma.EmailSubscriptionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmailSubscriptionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EmailSubscriptionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailSubscriptionPayload>[]
          }
          upsert: {
            args: Prisma.EmailSubscriptionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailSubscriptionPayload>
          }
          aggregate: {
            args: Prisma.EmailSubscriptionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmailSubscription>
          }
          groupBy: {
            args: Prisma.EmailSubscriptionGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmailSubscriptionGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmailSubscriptionCountArgs<ExtArgs>
            result: $Utils.Optional<EmailSubscriptionCountAggregateOutputType> | number
          }
        }
      }
      CashOfferRequest: {
        payload: Prisma.$CashOfferRequestPayload<ExtArgs>
        fields: Prisma.CashOfferRequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CashOfferRequestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CashOfferRequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CashOfferRequestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CashOfferRequestPayload>
          }
          findFirst: {
            args: Prisma.CashOfferRequestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CashOfferRequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CashOfferRequestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CashOfferRequestPayload>
          }
          findMany: {
            args: Prisma.CashOfferRequestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CashOfferRequestPayload>[]
          }
          create: {
            args: Prisma.CashOfferRequestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CashOfferRequestPayload>
          }
          createMany: {
            args: Prisma.CashOfferRequestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CashOfferRequestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CashOfferRequestPayload>[]
          }
          delete: {
            args: Prisma.CashOfferRequestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CashOfferRequestPayload>
          }
          update: {
            args: Prisma.CashOfferRequestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CashOfferRequestPayload>
          }
          deleteMany: {
            args: Prisma.CashOfferRequestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CashOfferRequestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CashOfferRequestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CashOfferRequestPayload>[]
          }
          upsert: {
            args: Prisma.CashOfferRequestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CashOfferRequestPayload>
          }
          aggregate: {
            args: Prisma.CashOfferRequestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCashOfferRequest>
          }
          groupBy: {
            args: Prisma.CashOfferRequestGroupByArgs<ExtArgs>
            result: $Utils.Optional<CashOfferRequestGroupByOutputType>[]
          }
          count: {
            args: Prisma.CashOfferRequestCountArgs<ExtArgs>
            result: $Utils.Optional<CashOfferRequestCountAggregateOutputType> | number
          }
        }
      }
      Testimonial: {
        payload: Prisma.$TestimonialPayload<ExtArgs>
        fields: Prisma.TestimonialFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TestimonialFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestimonialPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TestimonialFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestimonialPayload>
          }
          findFirst: {
            args: Prisma.TestimonialFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestimonialPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TestimonialFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestimonialPayload>
          }
          findMany: {
            args: Prisma.TestimonialFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestimonialPayload>[]
          }
          create: {
            args: Prisma.TestimonialCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestimonialPayload>
          }
          createMany: {
            args: Prisma.TestimonialCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TestimonialCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestimonialPayload>[]
          }
          delete: {
            args: Prisma.TestimonialDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestimonialPayload>
          }
          update: {
            args: Prisma.TestimonialUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestimonialPayload>
          }
          deleteMany: {
            args: Prisma.TestimonialDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TestimonialUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TestimonialUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestimonialPayload>[]
          }
          upsert: {
            args: Prisma.TestimonialUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestimonialPayload>
          }
          aggregate: {
            args: Prisma.TestimonialAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTestimonial>
          }
          groupBy: {
            args: Prisma.TestimonialGroupByArgs<ExtArgs>
            result: $Utils.Optional<TestimonialGroupByOutputType>[]
          }
          count: {
            args: Prisma.TestimonialCountArgs<ExtArgs>
            result: $Utils.Optional<TestimonialCountAggregateOutputType> | number
          }
        }
      }
      RentalApplication: {
        payload: Prisma.$RentalApplicationPayload<ExtArgs>
        fields: Prisma.RentalApplicationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RentalApplicationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentalApplicationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RentalApplicationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentalApplicationPayload>
          }
          findFirst: {
            args: Prisma.RentalApplicationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentalApplicationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RentalApplicationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentalApplicationPayload>
          }
          findMany: {
            args: Prisma.RentalApplicationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentalApplicationPayload>[]
          }
          create: {
            args: Prisma.RentalApplicationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentalApplicationPayload>
          }
          createMany: {
            args: Prisma.RentalApplicationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RentalApplicationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentalApplicationPayload>[]
          }
          delete: {
            args: Prisma.RentalApplicationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentalApplicationPayload>
          }
          update: {
            args: Prisma.RentalApplicationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentalApplicationPayload>
          }
          deleteMany: {
            args: Prisma.RentalApplicationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RentalApplicationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RentalApplicationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentalApplicationPayload>[]
          }
          upsert: {
            args: Prisma.RentalApplicationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentalApplicationPayload>
          }
          aggregate: {
            args: Prisma.RentalApplicationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRentalApplication>
          }
          groupBy: {
            args: Prisma.RentalApplicationGroupByArgs<ExtArgs>
            result: $Utils.Optional<RentalApplicationGroupByOutputType>[]
          }
          count: {
            args: Prisma.RentalApplicationCountArgs<ExtArgs>
            result: $Utils.Optional<RentalApplicationCountAggregateOutputType> | number
          }
        }
      }
      ApplicationSubmission: {
        payload: Prisma.$ApplicationSubmissionPayload<ExtArgs>
        fields: Prisma.ApplicationSubmissionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ApplicationSubmissionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationSubmissionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ApplicationSubmissionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationSubmissionPayload>
          }
          findFirst: {
            args: Prisma.ApplicationSubmissionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationSubmissionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ApplicationSubmissionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationSubmissionPayload>
          }
          findMany: {
            args: Prisma.ApplicationSubmissionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationSubmissionPayload>[]
          }
          create: {
            args: Prisma.ApplicationSubmissionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationSubmissionPayload>
          }
          createMany: {
            args: Prisma.ApplicationSubmissionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ApplicationSubmissionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationSubmissionPayload>[]
          }
          delete: {
            args: Prisma.ApplicationSubmissionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationSubmissionPayload>
          }
          update: {
            args: Prisma.ApplicationSubmissionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationSubmissionPayload>
          }
          deleteMany: {
            args: Prisma.ApplicationSubmissionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ApplicationSubmissionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ApplicationSubmissionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationSubmissionPayload>[]
          }
          upsert: {
            args: Prisma.ApplicationSubmissionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationSubmissionPayload>
          }
          aggregate: {
            args: Prisma.ApplicationSubmissionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateApplicationSubmission>
          }
          groupBy: {
            args: Prisma.ApplicationSubmissionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ApplicationSubmissionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ApplicationSubmissionCountArgs<ExtArgs>
            result: $Utils.Optional<ApplicationSubmissionCountAggregateOutputType> | number
          }
        }
      }
      ApplicationDocument: {
        payload: Prisma.$ApplicationDocumentPayload<ExtArgs>
        fields: Prisma.ApplicationDocumentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ApplicationDocumentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationDocumentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ApplicationDocumentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationDocumentPayload>
          }
          findFirst: {
            args: Prisma.ApplicationDocumentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationDocumentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ApplicationDocumentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationDocumentPayload>
          }
          findMany: {
            args: Prisma.ApplicationDocumentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationDocumentPayload>[]
          }
          create: {
            args: Prisma.ApplicationDocumentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationDocumentPayload>
          }
          createMany: {
            args: Prisma.ApplicationDocumentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ApplicationDocumentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationDocumentPayload>[]
          }
          delete: {
            args: Prisma.ApplicationDocumentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationDocumentPayload>
          }
          update: {
            args: Prisma.ApplicationDocumentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationDocumentPayload>
          }
          deleteMany: {
            args: Prisma.ApplicationDocumentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ApplicationDocumentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ApplicationDocumentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationDocumentPayload>[]
          }
          upsert: {
            args: Prisma.ApplicationDocumentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationDocumentPayload>
          }
          aggregate: {
            args: Prisma.ApplicationDocumentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateApplicationDocument>
          }
          groupBy: {
            args: Prisma.ApplicationDocumentGroupByArgs<ExtArgs>
            result: $Utils.Optional<ApplicationDocumentGroupByOutputType>[]
          }
          count: {
            args: Prisma.ApplicationDocumentCountArgs<ExtArgs>
            result: $Utils.Optional<ApplicationDocumentCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    property?: PropertyOmit
    propertyImage?: PropertyImageOmit
    emailSubscription?: EmailSubscriptionOmit
    cashOfferRequest?: CashOfferRequestOmit
    testimonial?: TestimonialOmit
    rentalApplication?: RentalApplicationOmit
    applicationSubmission?: ApplicationSubmissionOmit
    applicationDocument?: ApplicationDocumentOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    properties: number
    rentalApplications: number
    reviewedSubmissions: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    properties?: boolean | UserCountOutputTypeCountPropertiesArgs
    rentalApplications?: boolean | UserCountOutputTypeCountRentalApplicationsArgs
    reviewedSubmissions?: boolean | UserCountOutputTypeCountReviewedSubmissionsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPropertiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PropertyWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRentalApplicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RentalApplicationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReviewedSubmissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApplicationSubmissionWhereInput
  }


  /**
   * Count Type PropertyCountOutputType
   */

  export type PropertyCountOutputType = {
    images: number
  }

  export type PropertyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    images?: boolean | PropertyCountOutputTypeCountImagesArgs
  }

  // Custom InputTypes
  /**
   * PropertyCountOutputType without action
   */
  export type PropertyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyCountOutputType
     */
    select?: PropertyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PropertyCountOutputType without action
   */
  export type PropertyCountOutputTypeCountImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PropertyImageWhereInput
  }


  /**
   * Count Type RentalApplicationCountOutputType
   */

  export type RentalApplicationCountOutputType = {
    submissions: number
    documents: number
  }

  export type RentalApplicationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    submissions?: boolean | RentalApplicationCountOutputTypeCountSubmissionsArgs
    documents?: boolean | RentalApplicationCountOutputTypeCountDocumentsArgs
  }

  // Custom InputTypes
  /**
   * RentalApplicationCountOutputType without action
   */
  export type RentalApplicationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalApplicationCountOutputType
     */
    select?: RentalApplicationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RentalApplicationCountOutputType without action
   */
  export type RentalApplicationCountOutputTypeCountSubmissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApplicationSubmissionWhereInput
  }

  /**
   * RentalApplicationCountOutputType without action
   */
  export type RentalApplicationCountOutputTypeCountDocumentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApplicationDocumentWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    username: string | null
    password: string | null
    email: string | null
    name: string | null
    avatar: string | null
    isAdmin: boolean | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    username: string | null
    password: string | null
    email: string | null
    name: string | null
    avatar: string | null
    isAdmin: boolean | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    password: number
    email: number
    name: number
    avatar: number
    isAdmin: number
    createdAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    password?: true
    email?: true
    name?: true
    avatar?: true
    isAdmin?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    password?: true
    email?: true
    name?: true
    avatar?: true
    isAdmin?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    password?: true
    email?: true
    name?: true
    avatar?: true
    isAdmin?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    username: string
    password: string
    email: string
    name: string | null
    avatar: string | null
    isAdmin: boolean
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    email?: boolean
    name?: boolean
    avatar?: boolean
    isAdmin?: boolean
    createdAt?: boolean
    properties?: boolean | User$propertiesArgs<ExtArgs>
    rentalApplications?: boolean | User$rentalApplicationsArgs<ExtArgs>
    reviewedSubmissions?: boolean | User$reviewedSubmissionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    email?: boolean
    name?: boolean
    avatar?: boolean
    isAdmin?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    email?: boolean
    name?: boolean
    avatar?: boolean
    isAdmin?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    password?: boolean
    email?: boolean
    name?: boolean
    avatar?: boolean
    isAdmin?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "password" | "email" | "name" | "avatar" | "isAdmin" | "createdAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    properties?: boolean | User$propertiesArgs<ExtArgs>
    rentalApplications?: boolean | User$rentalApplicationsArgs<ExtArgs>
    reviewedSubmissions?: boolean | User$reviewedSubmissionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      properties: Prisma.$PropertyPayload<ExtArgs>[]
      rentalApplications: Prisma.$RentalApplicationPayload<ExtArgs>[]
      reviewedSubmissions: Prisma.$ApplicationSubmissionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      password: string
      email: string
      name: string | null
      avatar: string | null
      isAdmin: boolean
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    properties<T extends User$propertiesArgs<ExtArgs> = {}>(args?: Subset<T, User$propertiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    rentalApplications<T extends User$rentalApplicationsArgs<ExtArgs> = {}>(args?: Subset<T, User$rentalApplicationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RentalApplicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reviewedSubmissions<T extends User$reviewedSubmissionsArgs<ExtArgs> = {}>(args?: Subset<T, User$reviewedSubmissionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationSubmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly username: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly avatar: FieldRef<"User", 'String'>
    readonly isAdmin: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.properties
   */
  export type User$propertiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    where?: PropertyWhereInput
    orderBy?: PropertyOrderByWithRelationInput | PropertyOrderByWithRelationInput[]
    cursor?: PropertyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PropertyScalarFieldEnum | PropertyScalarFieldEnum[]
  }

  /**
   * User.rentalApplications
   */
  export type User$rentalApplicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalApplication
     */
    select?: RentalApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RentalApplication
     */
    omit?: RentalApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalApplicationInclude<ExtArgs> | null
    where?: RentalApplicationWhereInput
    orderBy?: RentalApplicationOrderByWithRelationInput | RentalApplicationOrderByWithRelationInput[]
    cursor?: RentalApplicationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RentalApplicationScalarFieldEnum | RentalApplicationScalarFieldEnum[]
  }

  /**
   * User.reviewedSubmissions
   */
  export type User$reviewedSubmissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationSubmission
     */
    select?: ApplicationSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApplicationSubmission
     */
    omit?: ApplicationSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationSubmissionInclude<ExtArgs> | null
    where?: ApplicationSubmissionWhereInput
    orderBy?: ApplicationSubmissionOrderByWithRelationInput | ApplicationSubmissionOrderByWithRelationInput[]
    cursor?: ApplicationSubmissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ApplicationSubmissionScalarFieldEnum | ApplicationSubmissionScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Property
   */

  export type AggregateProperty = {
    _count: PropertyCountAggregateOutputType | null
    _avg: PropertyAvgAggregateOutputType | null
    _sum: PropertySumAggregateOutputType | null
    _min: PropertyMinAggregateOutputType | null
    _max: PropertyMaxAggregateOutputType | null
  }

  export type PropertyAvgAggregateOutputType = {
    id: number | null
    price: number | null
    bedrooms: number | null
    bathrooms: number | null
    squareFeet: number | null
    rentalPrice: number | null
    createdById: number | null
    yearBuilt: number | null
  }

  export type PropertySumAggregateOutputType = {
    id: number | null
    price: number | null
    bedrooms: number | null
    bathrooms: number | null
    squareFeet: number | null
    rentalPrice: number | null
    createdById: number | null
    yearBuilt: number | null
  }

  export type PropertyMinAggregateOutputType = {
    id: number | null
    title: string | null
    address: string | null
    city: string | null
    state: string | null
    zipCode: string | null
    price: number | null
    bedrooms: number | null
    bathrooms: number | null
    squareFeet: number | null
    description: string | null
    propertyType: string | null
    status: string | null
    isRental: boolean | null
    rentalPrice: number | null
    featuredImage: string | null
    createdAt: Date | null
    updatedAt: Date | null
    createdById: number | null
    acres: string | null
    yearBuilt: number | null
    displayOnHomepage: boolean | null
  }

  export type PropertyMaxAggregateOutputType = {
    id: number | null
    title: string | null
    address: string | null
    city: string | null
    state: string | null
    zipCode: string | null
    price: number | null
    bedrooms: number | null
    bathrooms: number | null
    squareFeet: number | null
    description: string | null
    propertyType: string | null
    status: string | null
    isRental: boolean | null
    rentalPrice: number | null
    featuredImage: string | null
    createdAt: Date | null
    updatedAt: Date | null
    createdById: number | null
    acres: string | null
    yearBuilt: number | null
    displayOnHomepage: boolean | null
  }

  export type PropertyCountAggregateOutputType = {
    id: number
    title: number
    address: number
    city: number
    state: number
    zipCode: number
    price: number
    bedrooms: number
    bathrooms: number
    squareFeet: number
    description: number
    propertyType: number
    status: number
    isRental: number
    rentalPrice: number
    featuredImage: number
    createdAt: number
    updatedAt: number
    createdById: number
    acres: number
    yearBuilt: number
    displayOnHomepage: number
    _all: number
  }


  export type PropertyAvgAggregateInputType = {
    id?: true
    price?: true
    bedrooms?: true
    bathrooms?: true
    squareFeet?: true
    rentalPrice?: true
    createdById?: true
    yearBuilt?: true
  }

  export type PropertySumAggregateInputType = {
    id?: true
    price?: true
    bedrooms?: true
    bathrooms?: true
    squareFeet?: true
    rentalPrice?: true
    createdById?: true
    yearBuilt?: true
  }

  export type PropertyMinAggregateInputType = {
    id?: true
    title?: true
    address?: true
    city?: true
    state?: true
    zipCode?: true
    price?: true
    bedrooms?: true
    bathrooms?: true
    squareFeet?: true
    description?: true
    propertyType?: true
    status?: true
    isRental?: true
    rentalPrice?: true
    featuredImage?: true
    createdAt?: true
    updatedAt?: true
    createdById?: true
    acres?: true
    yearBuilt?: true
    displayOnHomepage?: true
  }

  export type PropertyMaxAggregateInputType = {
    id?: true
    title?: true
    address?: true
    city?: true
    state?: true
    zipCode?: true
    price?: true
    bedrooms?: true
    bathrooms?: true
    squareFeet?: true
    description?: true
    propertyType?: true
    status?: true
    isRental?: true
    rentalPrice?: true
    featuredImage?: true
    createdAt?: true
    updatedAt?: true
    createdById?: true
    acres?: true
    yearBuilt?: true
    displayOnHomepage?: true
  }

  export type PropertyCountAggregateInputType = {
    id?: true
    title?: true
    address?: true
    city?: true
    state?: true
    zipCode?: true
    price?: true
    bedrooms?: true
    bathrooms?: true
    squareFeet?: true
    description?: true
    propertyType?: true
    status?: true
    isRental?: true
    rentalPrice?: true
    featuredImage?: true
    createdAt?: true
    updatedAt?: true
    createdById?: true
    acres?: true
    yearBuilt?: true
    displayOnHomepage?: true
    _all?: true
  }

  export type PropertyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Property to aggregate.
     */
    where?: PropertyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Properties to fetch.
     */
    orderBy?: PropertyOrderByWithRelationInput | PropertyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PropertyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Properties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Properties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Properties
    **/
    _count?: true | PropertyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PropertyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PropertySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PropertyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PropertyMaxAggregateInputType
  }

  export type GetPropertyAggregateType<T extends PropertyAggregateArgs> = {
        [P in keyof T & keyof AggregateProperty]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProperty[P]>
      : GetScalarType<T[P], AggregateProperty[P]>
  }




  export type PropertyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PropertyWhereInput
    orderBy?: PropertyOrderByWithAggregationInput | PropertyOrderByWithAggregationInput[]
    by: PropertyScalarFieldEnum[] | PropertyScalarFieldEnum
    having?: PropertyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PropertyCountAggregateInputType | true
    _avg?: PropertyAvgAggregateInputType
    _sum?: PropertySumAggregateInputType
    _min?: PropertyMinAggregateInputType
    _max?: PropertyMaxAggregateInputType
  }

  export type PropertyGroupByOutputType = {
    id: number
    title: string
    address: string
    city: string
    state: string
    zipCode: string
    price: number
    bedrooms: number
    bathrooms: number
    squareFeet: number
    description: string
    propertyType: string
    status: string
    isRental: boolean
    rentalPrice: number | null
    featuredImage: string | null
    createdAt: Date
    updatedAt: Date
    createdById: number | null
    acres: string | null
    yearBuilt: number | null
    displayOnHomepage: boolean
    _count: PropertyCountAggregateOutputType | null
    _avg: PropertyAvgAggregateOutputType | null
    _sum: PropertySumAggregateOutputType | null
    _min: PropertyMinAggregateOutputType | null
    _max: PropertyMaxAggregateOutputType | null
  }

  type GetPropertyGroupByPayload<T extends PropertyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PropertyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PropertyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PropertyGroupByOutputType[P]>
            : GetScalarType<T[P], PropertyGroupByOutputType[P]>
        }
      >
    >


  export type PropertySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    address?: boolean
    city?: boolean
    state?: boolean
    zipCode?: boolean
    price?: boolean
    bedrooms?: boolean
    bathrooms?: boolean
    squareFeet?: boolean
    description?: boolean
    propertyType?: boolean
    status?: boolean
    isRental?: boolean
    rentalPrice?: boolean
    featuredImage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdById?: boolean
    acres?: boolean
    yearBuilt?: boolean
    displayOnHomepage?: boolean
    createdBy?: boolean | Property$createdByArgs<ExtArgs>
    images?: boolean | Property$imagesArgs<ExtArgs>
    _count?: boolean | PropertyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["property"]>

  export type PropertySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    address?: boolean
    city?: boolean
    state?: boolean
    zipCode?: boolean
    price?: boolean
    bedrooms?: boolean
    bathrooms?: boolean
    squareFeet?: boolean
    description?: boolean
    propertyType?: boolean
    status?: boolean
    isRental?: boolean
    rentalPrice?: boolean
    featuredImage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdById?: boolean
    acres?: boolean
    yearBuilt?: boolean
    displayOnHomepage?: boolean
    createdBy?: boolean | Property$createdByArgs<ExtArgs>
  }, ExtArgs["result"]["property"]>

  export type PropertySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    address?: boolean
    city?: boolean
    state?: boolean
    zipCode?: boolean
    price?: boolean
    bedrooms?: boolean
    bathrooms?: boolean
    squareFeet?: boolean
    description?: boolean
    propertyType?: boolean
    status?: boolean
    isRental?: boolean
    rentalPrice?: boolean
    featuredImage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdById?: boolean
    acres?: boolean
    yearBuilt?: boolean
    displayOnHomepage?: boolean
    createdBy?: boolean | Property$createdByArgs<ExtArgs>
  }, ExtArgs["result"]["property"]>

  export type PropertySelectScalar = {
    id?: boolean
    title?: boolean
    address?: boolean
    city?: boolean
    state?: boolean
    zipCode?: boolean
    price?: boolean
    bedrooms?: boolean
    bathrooms?: boolean
    squareFeet?: boolean
    description?: boolean
    propertyType?: boolean
    status?: boolean
    isRental?: boolean
    rentalPrice?: boolean
    featuredImage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdById?: boolean
    acres?: boolean
    yearBuilt?: boolean
    displayOnHomepage?: boolean
  }

  export type PropertyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "address" | "city" | "state" | "zipCode" | "price" | "bedrooms" | "bathrooms" | "squareFeet" | "description" | "propertyType" | "status" | "isRental" | "rentalPrice" | "featuredImage" | "createdAt" | "updatedAt" | "createdById" | "acres" | "yearBuilt" | "displayOnHomepage", ExtArgs["result"]["property"]>
  export type PropertyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | Property$createdByArgs<ExtArgs>
    images?: boolean | Property$imagesArgs<ExtArgs>
    _count?: boolean | PropertyCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PropertyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | Property$createdByArgs<ExtArgs>
  }
  export type PropertyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | Property$createdByArgs<ExtArgs>
  }

  export type $PropertyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Property"
    objects: {
      createdBy: Prisma.$UserPayload<ExtArgs> | null
      images: Prisma.$PropertyImagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      address: string
      city: string
      state: string
      zipCode: string
      price: number
      bedrooms: number
      bathrooms: number
      squareFeet: number
      description: string
      propertyType: string
      status: string
      isRental: boolean
      rentalPrice: number | null
      featuredImage: string | null
      createdAt: Date
      updatedAt: Date
      createdById: number | null
      acres: string | null
      yearBuilt: number | null
      displayOnHomepage: boolean
    }, ExtArgs["result"]["property"]>
    composites: {}
  }

  type PropertyGetPayload<S extends boolean | null | undefined | PropertyDefaultArgs> = $Result.GetResult<Prisma.$PropertyPayload, S>

  type PropertyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PropertyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PropertyCountAggregateInputType | true
    }

  export interface PropertyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Property'], meta: { name: 'Property' } }
    /**
     * Find zero or one Property that matches the filter.
     * @param {PropertyFindUniqueArgs} args - Arguments to find a Property
     * @example
     * // Get one Property
     * const property = await prisma.property.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PropertyFindUniqueArgs>(args: SelectSubset<T, PropertyFindUniqueArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Property that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PropertyFindUniqueOrThrowArgs} args - Arguments to find a Property
     * @example
     * // Get one Property
     * const property = await prisma.property.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PropertyFindUniqueOrThrowArgs>(args: SelectSubset<T, PropertyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Property that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyFindFirstArgs} args - Arguments to find a Property
     * @example
     * // Get one Property
     * const property = await prisma.property.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PropertyFindFirstArgs>(args?: SelectSubset<T, PropertyFindFirstArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Property that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyFindFirstOrThrowArgs} args - Arguments to find a Property
     * @example
     * // Get one Property
     * const property = await prisma.property.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PropertyFindFirstOrThrowArgs>(args?: SelectSubset<T, PropertyFindFirstOrThrowArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Properties that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Properties
     * const properties = await prisma.property.findMany()
     * 
     * // Get first 10 Properties
     * const properties = await prisma.property.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const propertyWithIdOnly = await prisma.property.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PropertyFindManyArgs>(args?: SelectSubset<T, PropertyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Property.
     * @param {PropertyCreateArgs} args - Arguments to create a Property.
     * @example
     * // Create one Property
     * const Property = await prisma.property.create({
     *   data: {
     *     // ... data to create a Property
     *   }
     * })
     * 
     */
    create<T extends PropertyCreateArgs>(args: SelectSubset<T, PropertyCreateArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Properties.
     * @param {PropertyCreateManyArgs} args - Arguments to create many Properties.
     * @example
     * // Create many Properties
     * const property = await prisma.property.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PropertyCreateManyArgs>(args?: SelectSubset<T, PropertyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Properties and returns the data saved in the database.
     * @param {PropertyCreateManyAndReturnArgs} args - Arguments to create many Properties.
     * @example
     * // Create many Properties
     * const property = await prisma.property.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Properties and only return the `id`
     * const propertyWithIdOnly = await prisma.property.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PropertyCreateManyAndReturnArgs>(args?: SelectSubset<T, PropertyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Property.
     * @param {PropertyDeleteArgs} args - Arguments to delete one Property.
     * @example
     * // Delete one Property
     * const Property = await prisma.property.delete({
     *   where: {
     *     // ... filter to delete one Property
     *   }
     * })
     * 
     */
    delete<T extends PropertyDeleteArgs>(args: SelectSubset<T, PropertyDeleteArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Property.
     * @param {PropertyUpdateArgs} args - Arguments to update one Property.
     * @example
     * // Update one Property
     * const property = await prisma.property.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PropertyUpdateArgs>(args: SelectSubset<T, PropertyUpdateArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Properties.
     * @param {PropertyDeleteManyArgs} args - Arguments to filter Properties to delete.
     * @example
     * // Delete a few Properties
     * const { count } = await prisma.property.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PropertyDeleteManyArgs>(args?: SelectSubset<T, PropertyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Properties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Properties
     * const property = await prisma.property.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PropertyUpdateManyArgs>(args: SelectSubset<T, PropertyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Properties and returns the data updated in the database.
     * @param {PropertyUpdateManyAndReturnArgs} args - Arguments to update many Properties.
     * @example
     * // Update many Properties
     * const property = await prisma.property.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Properties and only return the `id`
     * const propertyWithIdOnly = await prisma.property.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PropertyUpdateManyAndReturnArgs>(args: SelectSubset<T, PropertyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Property.
     * @param {PropertyUpsertArgs} args - Arguments to update or create a Property.
     * @example
     * // Update or create a Property
     * const property = await prisma.property.upsert({
     *   create: {
     *     // ... data to create a Property
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Property we want to update
     *   }
     * })
     */
    upsert<T extends PropertyUpsertArgs>(args: SelectSubset<T, PropertyUpsertArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Properties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyCountArgs} args - Arguments to filter Properties to count.
     * @example
     * // Count the number of Properties
     * const count = await prisma.property.count({
     *   where: {
     *     // ... the filter for the Properties we want to count
     *   }
     * })
    **/
    count<T extends PropertyCountArgs>(
      args?: Subset<T, PropertyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PropertyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Property.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PropertyAggregateArgs>(args: Subset<T, PropertyAggregateArgs>): Prisma.PrismaPromise<GetPropertyAggregateType<T>>

    /**
     * Group by Property.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PropertyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PropertyGroupByArgs['orderBy'] }
        : { orderBy?: PropertyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PropertyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPropertyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Property model
   */
  readonly fields: PropertyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Property.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PropertyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    createdBy<T extends Property$createdByArgs<ExtArgs> = {}>(args?: Subset<T, Property$createdByArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    images<T extends Property$imagesArgs<ExtArgs> = {}>(args?: Subset<T, Property$imagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Property model
   */
  interface PropertyFieldRefs {
    readonly id: FieldRef<"Property", 'Int'>
    readonly title: FieldRef<"Property", 'String'>
    readonly address: FieldRef<"Property", 'String'>
    readonly city: FieldRef<"Property", 'String'>
    readonly state: FieldRef<"Property", 'String'>
    readonly zipCode: FieldRef<"Property", 'String'>
    readonly price: FieldRef<"Property", 'Int'>
    readonly bedrooms: FieldRef<"Property", 'Int'>
    readonly bathrooms: FieldRef<"Property", 'Int'>
    readonly squareFeet: FieldRef<"Property", 'Int'>
    readonly description: FieldRef<"Property", 'String'>
    readonly propertyType: FieldRef<"Property", 'String'>
    readonly status: FieldRef<"Property", 'String'>
    readonly isRental: FieldRef<"Property", 'Boolean'>
    readonly rentalPrice: FieldRef<"Property", 'Int'>
    readonly featuredImage: FieldRef<"Property", 'String'>
    readonly createdAt: FieldRef<"Property", 'DateTime'>
    readonly updatedAt: FieldRef<"Property", 'DateTime'>
    readonly createdById: FieldRef<"Property", 'Int'>
    readonly acres: FieldRef<"Property", 'String'>
    readonly yearBuilt: FieldRef<"Property", 'Int'>
    readonly displayOnHomepage: FieldRef<"Property", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Property findUnique
   */
  export type PropertyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * Filter, which Property to fetch.
     */
    where: PropertyWhereUniqueInput
  }

  /**
   * Property findUniqueOrThrow
   */
  export type PropertyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * Filter, which Property to fetch.
     */
    where: PropertyWhereUniqueInput
  }

  /**
   * Property findFirst
   */
  export type PropertyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * Filter, which Property to fetch.
     */
    where?: PropertyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Properties to fetch.
     */
    orderBy?: PropertyOrderByWithRelationInput | PropertyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Properties.
     */
    cursor?: PropertyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Properties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Properties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Properties.
     */
    distinct?: PropertyScalarFieldEnum | PropertyScalarFieldEnum[]
  }

  /**
   * Property findFirstOrThrow
   */
  export type PropertyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * Filter, which Property to fetch.
     */
    where?: PropertyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Properties to fetch.
     */
    orderBy?: PropertyOrderByWithRelationInput | PropertyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Properties.
     */
    cursor?: PropertyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Properties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Properties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Properties.
     */
    distinct?: PropertyScalarFieldEnum | PropertyScalarFieldEnum[]
  }

  /**
   * Property findMany
   */
  export type PropertyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * Filter, which Properties to fetch.
     */
    where?: PropertyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Properties to fetch.
     */
    orderBy?: PropertyOrderByWithRelationInput | PropertyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Properties.
     */
    cursor?: PropertyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Properties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Properties.
     */
    skip?: number
    distinct?: PropertyScalarFieldEnum | PropertyScalarFieldEnum[]
  }

  /**
   * Property create
   */
  export type PropertyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * The data needed to create a Property.
     */
    data: XOR<PropertyCreateInput, PropertyUncheckedCreateInput>
  }

  /**
   * Property createMany
   */
  export type PropertyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Properties.
     */
    data: PropertyCreateManyInput | PropertyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Property createManyAndReturn
   */
  export type PropertyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * The data used to create many Properties.
     */
    data: PropertyCreateManyInput | PropertyCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Property update
   */
  export type PropertyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * The data needed to update a Property.
     */
    data: XOR<PropertyUpdateInput, PropertyUncheckedUpdateInput>
    /**
     * Choose, which Property to update.
     */
    where: PropertyWhereUniqueInput
  }

  /**
   * Property updateMany
   */
  export type PropertyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Properties.
     */
    data: XOR<PropertyUpdateManyMutationInput, PropertyUncheckedUpdateManyInput>
    /**
     * Filter which Properties to update
     */
    where?: PropertyWhereInput
    /**
     * Limit how many Properties to update.
     */
    limit?: number
  }

  /**
   * Property updateManyAndReturn
   */
  export type PropertyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * The data used to update Properties.
     */
    data: XOR<PropertyUpdateManyMutationInput, PropertyUncheckedUpdateManyInput>
    /**
     * Filter which Properties to update
     */
    where?: PropertyWhereInput
    /**
     * Limit how many Properties to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Property upsert
   */
  export type PropertyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * The filter to search for the Property to update in case it exists.
     */
    where: PropertyWhereUniqueInput
    /**
     * In case the Property found by the `where` argument doesn't exist, create a new Property with this data.
     */
    create: XOR<PropertyCreateInput, PropertyUncheckedCreateInput>
    /**
     * In case the Property was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PropertyUpdateInput, PropertyUncheckedUpdateInput>
  }

  /**
   * Property delete
   */
  export type PropertyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * Filter which Property to delete.
     */
    where: PropertyWhereUniqueInput
  }

  /**
   * Property deleteMany
   */
  export type PropertyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Properties to delete
     */
    where?: PropertyWhereInput
    /**
     * Limit how many Properties to delete.
     */
    limit?: number
  }

  /**
   * Property.createdBy
   */
  export type Property$createdByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Property.images
   */
  export type Property$imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyImage
     */
    select?: PropertyImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyImage
     */
    omit?: PropertyImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyImageInclude<ExtArgs> | null
    where?: PropertyImageWhereInput
    orderBy?: PropertyImageOrderByWithRelationInput | PropertyImageOrderByWithRelationInput[]
    cursor?: PropertyImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PropertyImageScalarFieldEnum | PropertyImageScalarFieldEnum[]
  }

  /**
   * Property without action
   */
  export type PropertyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
  }


  /**
   * Model PropertyImage
   */

  export type AggregatePropertyImage = {
    _count: PropertyImageCountAggregateOutputType | null
    _avg: PropertyImageAvgAggregateOutputType | null
    _sum: PropertyImageSumAggregateOutputType | null
    _min: PropertyImageMinAggregateOutputType | null
    _max: PropertyImageMaxAggregateOutputType | null
  }

  export type PropertyImageAvgAggregateOutputType = {
    id: number | null
    propertyId: number | null
    displayOrder: number | null
  }

  export type PropertyImageSumAggregateOutputType = {
    id: number | null
    propertyId: number | null
    displayOrder: number | null
  }

  export type PropertyImageMinAggregateOutputType = {
    id: number | null
    propertyId: number | null
    imageUrl: string | null
    caption: string | null
    displayOrder: number | null
    createdAt: Date | null
  }

  export type PropertyImageMaxAggregateOutputType = {
    id: number | null
    propertyId: number | null
    imageUrl: string | null
    caption: string | null
    displayOrder: number | null
    createdAt: Date | null
  }

  export type PropertyImageCountAggregateOutputType = {
    id: number
    propertyId: number
    imageUrl: number
    caption: number
    displayOrder: number
    createdAt: number
    _all: number
  }


  export type PropertyImageAvgAggregateInputType = {
    id?: true
    propertyId?: true
    displayOrder?: true
  }

  export type PropertyImageSumAggregateInputType = {
    id?: true
    propertyId?: true
    displayOrder?: true
  }

  export type PropertyImageMinAggregateInputType = {
    id?: true
    propertyId?: true
    imageUrl?: true
    caption?: true
    displayOrder?: true
    createdAt?: true
  }

  export type PropertyImageMaxAggregateInputType = {
    id?: true
    propertyId?: true
    imageUrl?: true
    caption?: true
    displayOrder?: true
    createdAt?: true
  }

  export type PropertyImageCountAggregateInputType = {
    id?: true
    propertyId?: true
    imageUrl?: true
    caption?: true
    displayOrder?: true
    createdAt?: true
    _all?: true
  }

  export type PropertyImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PropertyImage to aggregate.
     */
    where?: PropertyImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PropertyImages to fetch.
     */
    orderBy?: PropertyImageOrderByWithRelationInput | PropertyImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PropertyImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PropertyImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PropertyImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PropertyImages
    **/
    _count?: true | PropertyImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PropertyImageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PropertyImageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PropertyImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PropertyImageMaxAggregateInputType
  }

  export type GetPropertyImageAggregateType<T extends PropertyImageAggregateArgs> = {
        [P in keyof T & keyof AggregatePropertyImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePropertyImage[P]>
      : GetScalarType<T[P], AggregatePropertyImage[P]>
  }




  export type PropertyImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PropertyImageWhereInput
    orderBy?: PropertyImageOrderByWithAggregationInput | PropertyImageOrderByWithAggregationInput[]
    by: PropertyImageScalarFieldEnum[] | PropertyImageScalarFieldEnum
    having?: PropertyImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PropertyImageCountAggregateInputType | true
    _avg?: PropertyImageAvgAggregateInputType
    _sum?: PropertyImageSumAggregateInputType
    _min?: PropertyImageMinAggregateInputType
    _max?: PropertyImageMaxAggregateInputType
  }

  export type PropertyImageGroupByOutputType = {
    id: number
    propertyId: number
    imageUrl: string
    caption: string | null
    displayOrder: number
    createdAt: Date
    _count: PropertyImageCountAggregateOutputType | null
    _avg: PropertyImageAvgAggregateOutputType | null
    _sum: PropertyImageSumAggregateOutputType | null
    _min: PropertyImageMinAggregateOutputType | null
    _max: PropertyImageMaxAggregateOutputType | null
  }

  type GetPropertyImageGroupByPayload<T extends PropertyImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PropertyImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PropertyImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PropertyImageGroupByOutputType[P]>
            : GetScalarType<T[P], PropertyImageGroupByOutputType[P]>
        }
      >
    >


  export type PropertyImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    propertyId?: boolean
    imageUrl?: boolean
    caption?: boolean
    displayOrder?: boolean
    createdAt?: boolean
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["propertyImage"]>

  export type PropertyImageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    propertyId?: boolean
    imageUrl?: boolean
    caption?: boolean
    displayOrder?: boolean
    createdAt?: boolean
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["propertyImage"]>

  export type PropertyImageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    propertyId?: boolean
    imageUrl?: boolean
    caption?: boolean
    displayOrder?: boolean
    createdAt?: boolean
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["propertyImage"]>

  export type PropertyImageSelectScalar = {
    id?: boolean
    propertyId?: boolean
    imageUrl?: boolean
    caption?: boolean
    displayOrder?: boolean
    createdAt?: boolean
  }

  export type PropertyImageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "propertyId" | "imageUrl" | "caption" | "displayOrder" | "createdAt", ExtArgs["result"]["propertyImage"]>
  export type PropertyImageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }
  export type PropertyImageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }
  export type PropertyImageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }

  export type $PropertyImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PropertyImage"
    objects: {
      property: Prisma.$PropertyPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      propertyId: number
      imageUrl: string
      caption: string | null
      displayOrder: number
      createdAt: Date
    }, ExtArgs["result"]["propertyImage"]>
    composites: {}
  }

  type PropertyImageGetPayload<S extends boolean | null | undefined | PropertyImageDefaultArgs> = $Result.GetResult<Prisma.$PropertyImagePayload, S>

  type PropertyImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PropertyImageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PropertyImageCountAggregateInputType | true
    }

  export interface PropertyImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PropertyImage'], meta: { name: 'PropertyImage' } }
    /**
     * Find zero or one PropertyImage that matches the filter.
     * @param {PropertyImageFindUniqueArgs} args - Arguments to find a PropertyImage
     * @example
     * // Get one PropertyImage
     * const propertyImage = await prisma.propertyImage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PropertyImageFindUniqueArgs>(args: SelectSubset<T, PropertyImageFindUniqueArgs<ExtArgs>>): Prisma__PropertyImageClient<$Result.GetResult<Prisma.$PropertyImagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PropertyImage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PropertyImageFindUniqueOrThrowArgs} args - Arguments to find a PropertyImage
     * @example
     * // Get one PropertyImage
     * const propertyImage = await prisma.propertyImage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PropertyImageFindUniqueOrThrowArgs>(args: SelectSubset<T, PropertyImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PropertyImageClient<$Result.GetResult<Prisma.$PropertyImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PropertyImage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyImageFindFirstArgs} args - Arguments to find a PropertyImage
     * @example
     * // Get one PropertyImage
     * const propertyImage = await prisma.propertyImage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PropertyImageFindFirstArgs>(args?: SelectSubset<T, PropertyImageFindFirstArgs<ExtArgs>>): Prisma__PropertyImageClient<$Result.GetResult<Prisma.$PropertyImagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PropertyImage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyImageFindFirstOrThrowArgs} args - Arguments to find a PropertyImage
     * @example
     * // Get one PropertyImage
     * const propertyImage = await prisma.propertyImage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PropertyImageFindFirstOrThrowArgs>(args?: SelectSubset<T, PropertyImageFindFirstOrThrowArgs<ExtArgs>>): Prisma__PropertyImageClient<$Result.GetResult<Prisma.$PropertyImagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PropertyImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PropertyImages
     * const propertyImages = await prisma.propertyImage.findMany()
     * 
     * // Get first 10 PropertyImages
     * const propertyImages = await prisma.propertyImage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const propertyImageWithIdOnly = await prisma.propertyImage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PropertyImageFindManyArgs>(args?: SelectSubset<T, PropertyImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PropertyImage.
     * @param {PropertyImageCreateArgs} args - Arguments to create a PropertyImage.
     * @example
     * // Create one PropertyImage
     * const PropertyImage = await prisma.propertyImage.create({
     *   data: {
     *     // ... data to create a PropertyImage
     *   }
     * })
     * 
     */
    create<T extends PropertyImageCreateArgs>(args: SelectSubset<T, PropertyImageCreateArgs<ExtArgs>>): Prisma__PropertyImageClient<$Result.GetResult<Prisma.$PropertyImagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PropertyImages.
     * @param {PropertyImageCreateManyArgs} args - Arguments to create many PropertyImages.
     * @example
     * // Create many PropertyImages
     * const propertyImage = await prisma.propertyImage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PropertyImageCreateManyArgs>(args?: SelectSubset<T, PropertyImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PropertyImages and returns the data saved in the database.
     * @param {PropertyImageCreateManyAndReturnArgs} args - Arguments to create many PropertyImages.
     * @example
     * // Create many PropertyImages
     * const propertyImage = await prisma.propertyImage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PropertyImages and only return the `id`
     * const propertyImageWithIdOnly = await prisma.propertyImage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PropertyImageCreateManyAndReturnArgs>(args?: SelectSubset<T, PropertyImageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyImagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PropertyImage.
     * @param {PropertyImageDeleteArgs} args - Arguments to delete one PropertyImage.
     * @example
     * // Delete one PropertyImage
     * const PropertyImage = await prisma.propertyImage.delete({
     *   where: {
     *     // ... filter to delete one PropertyImage
     *   }
     * })
     * 
     */
    delete<T extends PropertyImageDeleteArgs>(args: SelectSubset<T, PropertyImageDeleteArgs<ExtArgs>>): Prisma__PropertyImageClient<$Result.GetResult<Prisma.$PropertyImagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PropertyImage.
     * @param {PropertyImageUpdateArgs} args - Arguments to update one PropertyImage.
     * @example
     * // Update one PropertyImage
     * const propertyImage = await prisma.propertyImage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PropertyImageUpdateArgs>(args: SelectSubset<T, PropertyImageUpdateArgs<ExtArgs>>): Prisma__PropertyImageClient<$Result.GetResult<Prisma.$PropertyImagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PropertyImages.
     * @param {PropertyImageDeleteManyArgs} args - Arguments to filter PropertyImages to delete.
     * @example
     * // Delete a few PropertyImages
     * const { count } = await prisma.propertyImage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PropertyImageDeleteManyArgs>(args?: SelectSubset<T, PropertyImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PropertyImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PropertyImages
     * const propertyImage = await prisma.propertyImage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PropertyImageUpdateManyArgs>(args: SelectSubset<T, PropertyImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PropertyImages and returns the data updated in the database.
     * @param {PropertyImageUpdateManyAndReturnArgs} args - Arguments to update many PropertyImages.
     * @example
     * // Update many PropertyImages
     * const propertyImage = await prisma.propertyImage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PropertyImages and only return the `id`
     * const propertyImageWithIdOnly = await prisma.propertyImage.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PropertyImageUpdateManyAndReturnArgs>(args: SelectSubset<T, PropertyImageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyImagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PropertyImage.
     * @param {PropertyImageUpsertArgs} args - Arguments to update or create a PropertyImage.
     * @example
     * // Update or create a PropertyImage
     * const propertyImage = await prisma.propertyImage.upsert({
     *   create: {
     *     // ... data to create a PropertyImage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PropertyImage we want to update
     *   }
     * })
     */
    upsert<T extends PropertyImageUpsertArgs>(args: SelectSubset<T, PropertyImageUpsertArgs<ExtArgs>>): Prisma__PropertyImageClient<$Result.GetResult<Prisma.$PropertyImagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PropertyImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyImageCountArgs} args - Arguments to filter PropertyImages to count.
     * @example
     * // Count the number of PropertyImages
     * const count = await prisma.propertyImage.count({
     *   where: {
     *     // ... the filter for the PropertyImages we want to count
     *   }
     * })
    **/
    count<T extends PropertyImageCountArgs>(
      args?: Subset<T, PropertyImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PropertyImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PropertyImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PropertyImageAggregateArgs>(args: Subset<T, PropertyImageAggregateArgs>): Prisma.PrismaPromise<GetPropertyImageAggregateType<T>>

    /**
     * Group by PropertyImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyImageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PropertyImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PropertyImageGroupByArgs['orderBy'] }
        : { orderBy?: PropertyImageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PropertyImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPropertyImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PropertyImage model
   */
  readonly fields: PropertyImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PropertyImage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PropertyImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    property<T extends PropertyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PropertyDefaultArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PropertyImage model
   */
  interface PropertyImageFieldRefs {
    readonly id: FieldRef<"PropertyImage", 'Int'>
    readonly propertyId: FieldRef<"PropertyImage", 'Int'>
    readonly imageUrl: FieldRef<"PropertyImage", 'String'>
    readonly caption: FieldRef<"PropertyImage", 'String'>
    readonly displayOrder: FieldRef<"PropertyImage", 'Int'>
    readonly createdAt: FieldRef<"PropertyImage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PropertyImage findUnique
   */
  export type PropertyImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyImage
     */
    select?: PropertyImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyImage
     */
    omit?: PropertyImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyImageInclude<ExtArgs> | null
    /**
     * Filter, which PropertyImage to fetch.
     */
    where: PropertyImageWhereUniqueInput
  }

  /**
   * PropertyImage findUniqueOrThrow
   */
  export type PropertyImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyImage
     */
    select?: PropertyImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyImage
     */
    omit?: PropertyImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyImageInclude<ExtArgs> | null
    /**
     * Filter, which PropertyImage to fetch.
     */
    where: PropertyImageWhereUniqueInput
  }

  /**
   * PropertyImage findFirst
   */
  export type PropertyImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyImage
     */
    select?: PropertyImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyImage
     */
    omit?: PropertyImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyImageInclude<ExtArgs> | null
    /**
     * Filter, which PropertyImage to fetch.
     */
    where?: PropertyImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PropertyImages to fetch.
     */
    orderBy?: PropertyImageOrderByWithRelationInput | PropertyImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PropertyImages.
     */
    cursor?: PropertyImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PropertyImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PropertyImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PropertyImages.
     */
    distinct?: PropertyImageScalarFieldEnum | PropertyImageScalarFieldEnum[]
  }

  /**
   * PropertyImage findFirstOrThrow
   */
  export type PropertyImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyImage
     */
    select?: PropertyImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyImage
     */
    omit?: PropertyImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyImageInclude<ExtArgs> | null
    /**
     * Filter, which PropertyImage to fetch.
     */
    where?: PropertyImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PropertyImages to fetch.
     */
    orderBy?: PropertyImageOrderByWithRelationInput | PropertyImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PropertyImages.
     */
    cursor?: PropertyImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PropertyImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PropertyImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PropertyImages.
     */
    distinct?: PropertyImageScalarFieldEnum | PropertyImageScalarFieldEnum[]
  }

  /**
   * PropertyImage findMany
   */
  export type PropertyImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyImage
     */
    select?: PropertyImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyImage
     */
    omit?: PropertyImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyImageInclude<ExtArgs> | null
    /**
     * Filter, which PropertyImages to fetch.
     */
    where?: PropertyImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PropertyImages to fetch.
     */
    orderBy?: PropertyImageOrderByWithRelationInput | PropertyImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PropertyImages.
     */
    cursor?: PropertyImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PropertyImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PropertyImages.
     */
    skip?: number
    distinct?: PropertyImageScalarFieldEnum | PropertyImageScalarFieldEnum[]
  }

  /**
   * PropertyImage create
   */
  export type PropertyImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyImage
     */
    select?: PropertyImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyImage
     */
    omit?: PropertyImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyImageInclude<ExtArgs> | null
    /**
     * The data needed to create a PropertyImage.
     */
    data: XOR<PropertyImageCreateInput, PropertyImageUncheckedCreateInput>
  }

  /**
   * PropertyImage createMany
   */
  export type PropertyImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PropertyImages.
     */
    data: PropertyImageCreateManyInput | PropertyImageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PropertyImage createManyAndReturn
   */
  export type PropertyImageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyImage
     */
    select?: PropertyImageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyImage
     */
    omit?: PropertyImageOmit<ExtArgs> | null
    /**
     * The data used to create many PropertyImages.
     */
    data: PropertyImageCreateManyInput | PropertyImageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyImageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PropertyImage update
   */
  export type PropertyImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyImage
     */
    select?: PropertyImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyImage
     */
    omit?: PropertyImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyImageInclude<ExtArgs> | null
    /**
     * The data needed to update a PropertyImage.
     */
    data: XOR<PropertyImageUpdateInput, PropertyImageUncheckedUpdateInput>
    /**
     * Choose, which PropertyImage to update.
     */
    where: PropertyImageWhereUniqueInput
  }

  /**
   * PropertyImage updateMany
   */
  export type PropertyImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PropertyImages.
     */
    data: XOR<PropertyImageUpdateManyMutationInput, PropertyImageUncheckedUpdateManyInput>
    /**
     * Filter which PropertyImages to update
     */
    where?: PropertyImageWhereInput
    /**
     * Limit how many PropertyImages to update.
     */
    limit?: number
  }

  /**
   * PropertyImage updateManyAndReturn
   */
  export type PropertyImageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyImage
     */
    select?: PropertyImageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyImage
     */
    omit?: PropertyImageOmit<ExtArgs> | null
    /**
     * The data used to update PropertyImages.
     */
    data: XOR<PropertyImageUpdateManyMutationInput, PropertyImageUncheckedUpdateManyInput>
    /**
     * Filter which PropertyImages to update
     */
    where?: PropertyImageWhereInput
    /**
     * Limit how many PropertyImages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyImageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PropertyImage upsert
   */
  export type PropertyImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyImage
     */
    select?: PropertyImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyImage
     */
    omit?: PropertyImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyImageInclude<ExtArgs> | null
    /**
     * The filter to search for the PropertyImage to update in case it exists.
     */
    where: PropertyImageWhereUniqueInput
    /**
     * In case the PropertyImage found by the `where` argument doesn't exist, create a new PropertyImage with this data.
     */
    create: XOR<PropertyImageCreateInput, PropertyImageUncheckedCreateInput>
    /**
     * In case the PropertyImage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PropertyImageUpdateInput, PropertyImageUncheckedUpdateInput>
  }

  /**
   * PropertyImage delete
   */
  export type PropertyImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyImage
     */
    select?: PropertyImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyImage
     */
    omit?: PropertyImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyImageInclude<ExtArgs> | null
    /**
     * Filter which PropertyImage to delete.
     */
    where: PropertyImageWhereUniqueInput
  }

  /**
   * PropertyImage deleteMany
   */
  export type PropertyImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PropertyImages to delete
     */
    where?: PropertyImageWhereInput
    /**
     * Limit how many PropertyImages to delete.
     */
    limit?: number
  }

  /**
   * PropertyImage without action
   */
  export type PropertyImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyImage
     */
    select?: PropertyImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyImage
     */
    omit?: PropertyImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyImageInclude<ExtArgs> | null
  }


  /**
   * Model EmailSubscription
   */

  export type AggregateEmailSubscription = {
    _count: EmailSubscriptionCountAggregateOutputType | null
    _avg: EmailSubscriptionAvgAggregateOutputType | null
    _sum: EmailSubscriptionSumAggregateOutputType | null
    _min: EmailSubscriptionMinAggregateOutputType | null
    _max: EmailSubscriptionMaxAggregateOutputType | null
  }

  export type EmailSubscriptionAvgAggregateOutputType = {
    id: number | null
  }

  export type EmailSubscriptionSumAggregateOutputType = {
    id: number | null
  }

  export type EmailSubscriptionMinAggregateOutputType = {
    id: number | null
    email: string | null
    createdAt: Date | null
    isActive: boolean | null
  }

  export type EmailSubscriptionMaxAggregateOutputType = {
    id: number | null
    email: string | null
    createdAt: Date | null
    isActive: boolean | null
  }

  export type EmailSubscriptionCountAggregateOutputType = {
    id: number
    email: number
    createdAt: number
    isActive: number
    _all: number
  }


  export type EmailSubscriptionAvgAggregateInputType = {
    id?: true
  }

  export type EmailSubscriptionSumAggregateInputType = {
    id?: true
  }

  export type EmailSubscriptionMinAggregateInputType = {
    id?: true
    email?: true
    createdAt?: true
    isActive?: true
  }

  export type EmailSubscriptionMaxAggregateInputType = {
    id?: true
    email?: true
    createdAt?: true
    isActive?: true
  }

  export type EmailSubscriptionCountAggregateInputType = {
    id?: true
    email?: true
    createdAt?: true
    isActive?: true
    _all?: true
  }

  export type EmailSubscriptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmailSubscription to aggregate.
     */
    where?: EmailSubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailSubscriptions to fetch.
     */
    orderBy?: EmailSubscriptionOrderByWithRelationInput | EmailSubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmailSubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailSubscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailSubscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EmailSubscriptions
    **/
    _count?: true | EmailSubscriptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EmailSubscriptionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EmailSubscriptionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmailSubscriptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmailSubscriptionMaxAggregateInputType
  }

  export type GetEmailSubscriptionAggregateType<T extends EmailSubscriptionAggregateArgs> = {
        [P in keyof T & keyof AggregateEmailSubscription]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmailSubscription[P]>
      : GetScalarType<T[P], AggregateEmailSubscription[P]>
  }




  export type EmailSubscriptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmailSubscriptionWhereInput
    orderBy?: EmailSubscriptionOrderByWithAggregationInput | EmailSubscriptionOrderByWithAggregationInput[]
    by: EmailSubscriptionScalarFieldEnum[] | EmailSubscriptionScalarFieldEnum
    having?: EmailSubscriptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmailSubscriptionCountAggregateInputType | true
    _avg?: EmailSubscriptionAvgAggregateInputType
    _sum?: EmailSubscriptionSumAggregateInputType
    _min?: EmailSubscriptionMinAggregateInputType
    _max?: EmailSubscriptionMaxAggregateInputType
  }

  export type EmailSubscriptionGroupByOutputType = {
    id: number
    email: string
    createdAt: Date
    isActive: boolean
    _count: EmailSubscriptionCountAggregateOutputType | null
    _avg: EmailSubscriptionAvgAggregateOutputType | null
    _sum: EmailSubscriptionSumAggregateOutputType | null
    _min: EmailSubscriptionMinAggregateOutputType | null
    _max: EmailSubscriptionMaxAggregateOutputType | null
  }

  type GetEmailSubscriptionGroupByPayload<T extends EmailSubscriptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmailSubscriptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmailSubscriptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmailSubscriptionGroupByOutputType[P]>
            : GetScalarType<T[P], EmailSubscriptionGroupByOutputType[P]>
        }
      >
    >


  export type EmailSubscriptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    createdAt?: boolean
    isActive?: boolean
  }, ExtArgs["result"]["emailSubscription"]>

  export type EmailSubscriptionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    createdAt?: boolean
    isActive?: boolean
  }, ExtArgs["result"]["emailSubscription"]>

  export type EmailSubscriptionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    createdAt?: boolean
    isActive?: boolean
  }, ExtArgs["result"]["emailSubscription"]>

  export type EmailSubscriptionSelectScalar = {
    id?: boolean
    email?: boolean
    createdAt?: boolean
    isActive?: boolean
  }

  export type EmailSubscriptionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "createdAt" | "isActive", ExtArgs["result"]["emailSubscription"]>

  export type $EmailSubscriptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EmailSubscription"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      createdAt: Date
      isActive: boolean
    }, ExtArgs["result"]["emailSubscription"]>
    composites: {}
  }

  type EmailSubscriptionGetPayload<S extends boolean | null | undefined | EmailSubscriptionDefaultArgs> = $Result.GetResult<Prisma.$EmailSubscriptionPayload, S>

  type EmailSubscriptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmailSubscriptionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmailSubscriptionCountAggregateInputType | true
    }

  export interface EmailSubscriptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EmailSubscription'], meta: { name: 'EmailSubscription' } }
    /**
     * Find zero or one EmailSubscription that matches the filter.
     * @param {EmailSubscriptionFindUniqueArgs} args - Arguments to find a EmailSubscription
     * @example
     * // Get one EmailSubscription
     * const emailSubscription = await prisma.emailSubscription.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmailSubscriptionFindUniqueArgs>(args: SelectSubset<T, EmailSubscriptionFindUniqueArgs<ExtArgs>>): Prisma__EmailSubscriptionClient<$Result.GetResult<Prisma.$EmailSubscriptionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EmailSubscription that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmailSubscriptionFindUniqueOrThrowArgs} args - Arguments to find a EmailSubscription
     * @example
     * // Get one EmailSubscription
     * const emailSubscription = await prisma.emailSubscription.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmailSubscriptionFindUniqueOrThrowArgs>(args: SelectSubset<T, EmailSubscriptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmailSubscriptionClient<$Result.GetResult<Prisma.$EmailSubscriptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EmailSubscription that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailSubscriptionFindFirstArgs} args - Arguments to find a EmailSubscription
     * @example
     * // Get one EmailSubscription
     * const emailSubscription = await prisma.emailSubscription.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmailSubscriptionFindFirstArgs>(args?: SelectSubset<T, EmailSubscriptionFindFirstArgs<ExtArgs>>): Prisma__EmailSubscriptionClient<$Result.GetResult<Prisma.$EmailSubscriptionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EmailSubscription that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailSubscriptionFindFirstOrThrowArgs} args - Arguments to find a EmailSubscription
     * @example
     * // Get one EmailSubscription
     * const emailSubscription = await prisma.emailSubscription.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmailSubscriptionFindFirstOrThrowArgs>(args?: SelectSubset<T, EmailSubscriptionFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmailSubscriptionClient<$Result.GetResult<Prisma.$EmailSubscriptionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EmailSubscriptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailSubscriptionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EmailSubscriptions
     * const emailSubscriptions = await prisma.emailSubscription.findMany()
     * 
     * // Get first 10 EmailSubscriptions
     * const emailSubscriptions = await prisma.emailSubscription.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const emailSubscriptionWithIdOnly = await prisma.emailSubscription.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EmailSubscriptionFindManyArgs>(args?: SelectSubset<T, EmailSubscriptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailSubscriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EmailSubscription.
     * @param {EmailSubscriptionCreateArgs} args - Arguments to create a EmailSubscription.
     * @example
     * // Create one EmailSubscription
     * const EmailSubscription = await prisma.emailSubscription.create({
     *   data: {
     *     // ... data to create a EmailSubscription
     *   }
     * })
     * 
     */
    create<T extends EmailSubscriptionCreateArgs>(args: SelectSubset<T, EmailSubscriptionCreateArgs<ExtArgs>>): Prisma__EmailSubscriptionClient<$Result.GetResult<Prisma.$EmailSubscriptionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EmailSubscriptions.
     * @param {EmailSubscriptionCreateManyArgs} args - Arguments to create many EmailSubscriptions.
     * @example
     * // Create many EmailSubscriptions
     * const emailSubscription = await prisma.emailSubscription.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmailSubscriptionCreateManyArgs>(args?: SelectSubset<T, EmailSubscriptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EmailSubscriptions and returns the data saved in the database.
     * @param {EmailSubscriptionCreateManyAndReturnArgs} args - Arguments to create many EmailSubscriptions.
     * @example
     * // Create many EmailSubscriptions
     * const emailSubscription = await prisma.emailSubscription.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EmailSubscriptions and only return the `id`
     * const emailSubscriptionWithIdOnly = await prisma.emailSubscription.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EmailSubscriptionCreateManyAndReturnArgs>(args?: SelectSubset<T, EmailSubscriptionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailSubscriptionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EmailSubscription.
     * @param {EmailSubscriptionDeleteArgs} args - Arguments to delete one EmailSubscription.
     * @example
     * // Delete one EmailSubscription
     * const EmailSubscription = await prisma.emailSubscription.delete({
     *   where: {
     *     // ... filter to delete one EmailSubscription
     *   }
     * })
     * 
     */
    delete<T extends EmailSubscriptionDeleteArgs>(args: SelectSubset<T, EmailSubscriptionDeleteArgs<ExtArgs>>): Prisma__EmailSubscriptionClient<$Result.GetResult<Prisma.$EmailSubscriptionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EmailSubscription.
     * @param {EmailSubscriptionUpdateArgs} args - Arguments to update one EmailSubscription.
     * @example
     * // Update one EmailSubscription
     * const emailSubscription = await prisma.emailSubscription.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmailSubscriptionUpdateArgs>(args: SelectSubset<T, EmailSubscriptionUpdateArgs<ExtArgs>>): Prisma__EmailSubscriptionClient<$Result.GetResult<Prisma.$EmailSubscriptionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EmailSubscriptions.
     * @param {EmailSubscriptionDeleteManyArgs} args - Arguments to filter EmailSubscriptions to delete.
     * @example
     * // Delete a few EmailSubscriptions
     * const { count } = await prisma.emailSubscription.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmailSubscriptionDeleteManyArgs>(args?: SelectSubset<T, EmailSubscriptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EmailSubscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailSubscriptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EmailSubscriptions
     * const emailSubscription = await prisma.emailSubscription.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmailSubscriptionUpdateManyArgs>(args: SelectSubset<T, EmailSubscriptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EmailSubscriptions and returns the data updated in the database.
     * @param {EmailSubscriptionUpdateManyAndReturnArgs} args - Arguments to update many EmailSubscriptions.
     * @example
     * // Update many EmailSubscriptions
     * const emailSubscription = await prisma.emailSubscription.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EmailSubscriptions and only return the `id`
     * const emailSubscriptionWithIdOnly = await prisma.emailSubscription.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EmailSubscriptionUpdateManyAndReturnArgs>(args: SelectSubset<T, EmailSubscriptionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailSubscriptionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EmailSubscription.
     * @param {EmailSubscriptionUpsertArgs} args - Arguments to update or create a EmailSubscription.
     * @example
     * // Update or create a EmailSubscription
     * const emailSubscription = await prisma.emailSubscription.upsert({
     *   create: {
     *     // ... data to create a EmailSubscription
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EmailSubscription we want to update
     *   }
     * })
     */
    upsert<T extends EmailSubscriptionUpsertArgs>(args: SelectSubset<T, EmailSubscriptionUpsertArgs<ExtArgs>>): Prisma__EmailSubscriptionClient<$Result.GetResult<Prisma.$EmailSubscriptionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EmailSubscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailSubscriptionCountArgs} args - Arguments to filter EmailSubscriptions to count.
     * @example
     * // Count the number of EmailSubscriptions
     * const count = await prisma.emailSubscription.count({
     *   where: {
     *     // ... the filter for the EmailSubscriptions we want to count
     *   }
     * })
    **/
    count<T extends EmailSubscriptionCountArgs>(
      args?: Subset<T, EmailSubscriptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmailSubscriptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EmailSubscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailSubscriptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EmailSubscriptionAggregateArgs>(args: Subset<T, EmailSubscriptionAggregateArgs>): Prisma.PrismaPromise<GetEmailSubscriptionAggregateType<T>>

    /**
     * Group by EmailSubscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailSubscriptionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EmailSubscriptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmailSubscriptionGroupByArgs['orderBy'] }
        : { orderBy?: EmailSubscriptionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EmailSubscriptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmailSubscriptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EmailSubscription model
   */
  readonly fields: EmailSubscriptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EmailSubscription.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmailSubscriptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the EmailSubscription model
   */
  interface EmailSubscriptionFieldRefs {
    readonly id: FieldRef<"EmailSubscription", 'Int'>
    readonly email: FieldRef<"EmailSubscription", 'String'>
    readonly createdAt: FieldRef<"EmailSubscription", 'DateTime'>
    readonly isActive: FieldRef<"EmailSubscription", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * EmailSubscription findUnique
   */
  export type EmailSubscriptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailSubscription
     */
    select?: EmailSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailSubscription
     */
    omit?: EmailSubscriptionOmit<ExtArgs> | null
    /**
     * Filter, which EmailSubscription to fetch.
     */
    where: EmailSubscriptionWhereUniqueInput
  }

  /**
   * EmailSubscription findUniqueOrThrow
   */
  export type EmailSubscriptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailSubscription
     */
    select?: EmailSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailSubscription
     */
    omit?: EmailSubscriptionOmit<ExtArgs> | null
    /**
     * Filter, which EmailSubscription to fetch.
     */
    where: EmailSubscriptionWhereUniqueInput
  }

  /**
   * EmailSubscription findFirst
   */
  export type EmailSubscriptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailSubscription
     */
    select?: EmailSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailSubscription
     */
    omit?: EmailSubscriptionOmit<ExtArgs> | null
    /**
     * Filter, which EmailSubscription to fetch.
     */
    where?: EmailSubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailSubscriptions to fetch.
     */
    orderBy?: EmailSubscriptionOrderByWithRelationInput | EmailSubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmailSubscriptions.
     */
    cursor?: EmailSubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailSubscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailSubscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmailSubscriptions.
     */
    distinct?: EmailSubscriptionScalarFieldEnum | EmailSubscriptionScalarFieldEnum[]
  }

  /**
   * EmailSubscription findFirstOrThrow
   */
  export type EmailSubscriptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailSubscription
     */
    select?: EmailSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailSubscription
     */
    omit?: EmailSubscriptionOmit<ExtArgs> | null
    /**
     * Filter, which EmailSubscription to fetch.
     */
    where?: EmailSubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailSubscriptions to fetch.
     */
    orderBy?: EmailSubscriptionOrderByWithRelationInput | EmailSubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmailSubscriptions.
     */
    cursor?: EmailSubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailSubscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailSubscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmailSubscriptions.
     */
    distinct?: EmailSubscriptionScalarFieldEnum | EmailSubscriptionScalarFieldEnum[]
  }

  /**
   * EmailSubscription findMany
   */
  export type EmailSubscriptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailSubscription
     */
    select?: EmailSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailSubscription
     */
    omit?: EmailSubscriptionOmit<ExtArgs> | null
    /**
     * Filter, which EmailSubscriptions to fetch.
     */
    where?: EmailSubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailSubscriptions to fetch.
     */
    orderBy?: EmailSubscriptionOrderByWithRelationInput | EmailSubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EmailSubscriptions.
     */
    cursor?: EmailSubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailSubscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailSubscriptions.
     */
    skip?: number
    distinct?: EmailSubscriptionScalarFieldEnum | EmailSubscriptionScalarFieldEnum[]
  }

  /**
   * EmailSubscription create
   */
  export type EmailSubscriptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailSubscription
     */
    select?: EmailSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailSubscription
     */
    omit?: EmailSubscriptionOmit<ExtArgs> | null
    /**
     * The data needed to create a EmailSubscription.
     */
    data: XOR<EmailSubscriptionCreateInput, EmailSubscriptionUncheckedCreateInput>
  }

  /**
   * EmailSubscription createMany
   */
  export type EmailSubscriptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EmailSubscriptions.
     */
    data: EmailSubscriptionCreateManyInput | EmailSubscriptionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EmailSubscription createManyAndReturn
   */
  export type EmailSubscriptionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailSubscription
     */
    select?: EmailSubscriptionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EmailSubscription
     */
    omit?: EmailSubscriptionOmit<ExtArgs> | null
    /**
     * The data used to create many EmailSubscriptions.
     */
    data: EmailSubscriptionCreateManyInput | EmailSubscriptionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EmailSubscription update
   */
  export type EmailSubscriptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailSubscription
     */
    select?: EmailSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailSubscription
     */
    omit?: EmailSubscriptionOmit<ExtArgs> | null
    /**
     * The data needed to update a EmailSubscription.
     */
    data: XOR<EmailSubscriptionUpdateInput, EmailSubscriptionUncheckedUpdateInput>
    /**
     * Choose, which EmailSubscription to update.
     */
    where: EmailSubscriptionWhereUniqueInput
  }

  /**
   * EmailSubscription updateMany
   */
  export type EmailSubscriptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EmailSubscriptions.
     */
    data: XOR<EmailSubscriptionUpdateManyMutationInput, EmailSubscriptionUncheckedUpdateManyInput>
    /**
     * Filter which EmailSubscriptions to update
     */
    where?: EmailSubscriptionWhereInput
    /**
     * Limit how many EmailSubscriptions to update.
     */
    limit?: number
  }

  /**
   * EmailSubscription updateManyAndReturn
   */
  export type EmailSubscriptionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailSubscription
     */
    select?: EmailSubscriptionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EmailSubscription
     */
    omit?: EmailSubscriptionOmit<ExtArgs> | null
    /**
     * The data used to update EmailSubscriptions.
     */
    data: XOR<EmailSubscriptionUpdateManyMutationInput, EmailSubscriptionUncheckedUpdateManyInput>
    /**
     * Filter which EmailSubscriptions to update
     */
    where?: EmailSubscriptionWhereInput
    /**
     * Limit how many EmailSubscriptions to update.
     */
    limit?: number
  }

  /**
   * EmailSubscription upsert
   */
  export type EmailSubscriptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailSubscription
     */
    select?: EmailSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailSubscription
     */
    omit?: EmailSubscriptionOmit<ExtArgs> | null
    /**
     * The filter to search for the EmailSubscription to update in case it exists.
     */
    where: EmailSubscriptionWhereUniqueInput
    /**
     * In case the EmailSubscription found by the `where` argument doesn't exist, create a new EmailSubscription with this data.
     */
    create: XOR<EmailSubscriptionCreateInput, EmailSubscriptionUncheckedCreateInput>
    /**
     * In case the EmailSubscription was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmailSubscriptionUpdateInput, EmailSubscriptionUncheckedUpdateInput>
  }

  /**
   * EmailSubscription delete
   */
  export type EmailSubscriptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailSubscription
     */
    select?: EmailSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailSubscription
     */
    omit?: EmailSubscriptionOmit<ExtArgs> | null
    /**
     * Filter which EmailSubscription to delete.
     */
    where: EmailSubscriptionWhereUniqueInput
  }

  /**
   * EmailSubscription deleteMany
   */
  export type EmailSubscriptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmailSubscriptions to delete
     */
    where?: EmailSubscriptionWhereInput
    /**
     * Limit how many EmailSubscriptions to delete.
     */
    limit?: number
  }

  /**
   * EmailSubscription without action
   */
  export type EmailSubscriptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailSubscription
     */
    select?: EmailSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailSubscription
     */
    omit?: EmailSubscriptionOmit<ExtArgs> | null
  }


  /**
   * Model CashOfferRequest
   */

  export type AggregateCashOfferRequest = {
    _count: CashOfferRequestCountAggregateOutputType | null
    _avg: CashOfferRequestAvgAggregateOutputType | null
    _sum: CashOfferRequestSumAggregateOutputType | null
    _min: CashOfferRequestMinAggregateOutputType | null
    _max: CashOfferRequestMaxAggregateOutputType | null
  }

  export type CashOfferRequestAvgAggregateOutputType = {
    id: number | null
  }

  export type CashOfferRequestSumAggregateOutputType = {
    id: number | null
  }

  export type CashOfferRequestMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    phone: string | null
    address: string | null
    city: string | null
    state: string | null
    zipCode: string | null
    propertyType: string | null
    condition: string | null
    timeframe: string | null
    additionalInfo: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CashOfferRequestMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    phone: string | null
    address: string | null
    city: string | null
    state: string | null
    zipCode: string | null
    propertyType: string | null
    condition: string | null
    timeframe: string | null
    additionalInfo: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CashOfferRequestCountAggregateOutputType = {
    id: number
    name: number
    email: number
    phone: number
    address: number
    city: number
    state: number
    zipCode: number
    propertyType: number
    condition: number
    timeframe: number
    additionalInfo: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CashOfferRequestAvgAggregateInputType = {
    id?: true
  }

  export type CashOfferRequestSumAggregateInputType = {
    id?: true
  }

  export type CashOfferRequestMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    address?: true
    city?: true
    state?: true
    zipCode?: true
    propertyType?: true
    condition?: true
    timeframe?: true
    additionalInfo?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CashOfferRequestMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    address?: true
    city?: true
    state?: true
    zipCode?: true
    propertyType?: true
    condition?: true
    timeframe?: true
    additionalInfo?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CashOfferRequestCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    address?: true
    city?: true
    state?: true
    zipCode?: true
    propertyType?: true
    condition?: true
    timeframe?: true
    additionalInfo?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CashOfferRequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CashOfferRequest to aggregate.
     */
    where?: CashOfferRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CashOfferRequests to fetch.
     */
    orderBy?: CashOfferRequestOrderByWithRelationInput | CashOfferRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CashOfferRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CashOfferRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CashOfferRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CashOfferRequests
    **/
    _count?: true | CashOfferRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CashOfferRequestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CashOfferRequestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CashOfferRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CashOfferRequestMaxAggregateInputType
  }

  export type GetCashOfferRequestAggregateType<T extends CashOfferRequestAggregateArgs> = {
        [P in keyof T & keyof AggregateCashOfferRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCashOfferRequest[P]>
      : GetScalarType<T[P], AggregateCashOfferRequest[P]>
  }




  export type CashOfferRequestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CashOfferRequestWhereInput
    orderBy?: CashOfferRequestOrderByWithAggregationInput | CashOfferRequestOrderByWithAggregationInput[]
    by: CashOfferRequestScalarFieldEnum[] | CashOfferRequestScalarFieldEnum
    having?: CashOfferRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CashOfferRequestCountAggregateInputType | true
    _avg?: CashOfferRequestAvgAggregateInputType
    _sum?: CashOfferRequestSumAggregateInputType
    _min?: CashOfferRequestMinAggregateInputType
    _max?: CashOfferRequestMaxAggregateInputType
  }

  export type CashOfferRequestGroupByOutputType = {
    id: number
    name: string
    email: string
    phone: string
    address: string
    city: string
    state: string
    zipCode: string
    propertyType: string
    condition: string
    timeframe: string
    additionalInfo: string | null
    status: string
    createdAt: Date
    updatedAt: Date
    _count: CashOfferRequestCountAggregateOutputType | null
    _avg: CashOfferRequestAvgAggregateOutputType | null
    _sum: CashOfferRequestSumAggregateOutputType | null
    _min: CashOfferRequestMinAggregateOutputType | null
    _max: CashOfferRequestMaxAggregateOutputType | null
  }

  type GetCashOfferRequestGroupByPayload<T extends CashOfferRequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CashOfferRequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CashOfferRequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CashOfferRequestGroupByOutputType[P]>
            : GetScalarType<T[P], CashOfferRequestGroupByOutputType[P]>
        }
      >
    >


  export type CashOfferRequestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    city?: boolean
    state?: boolean
    zipCode?: boolean
    propertyType?: boolean
    condition?: boolean
    timeframe?: boolean
    additionalInfo?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["cashOfferRequest"]>

  export type CashOfferRequestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    city?: boolean
    state?: boolean
    zipCode?: boolean
    propertyType?: boolean
    condition?: boolean
    timeframe?: boolean
    additionalInfo?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["cashOfferRequest"]>

  export type CashOfferRequestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    city?: boolean
    state?: boolean
    zipCode?: boolean
    propertyType?: boolean
    condition?: boolean
    timeframe?: boolean
    additionalInfo?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["cashOfferRequest"]>

  export type CashOfferRequestSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    city?: boolean
    state?: boolean
    zipCode?: boolean
    propertyType?: boolean
    condition?: boolean
    timeframe?: boolean
    additionalInfo?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CashOfferRequestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "phone" | "address" | "city" | "state" | "zipCode" | "propertyType" | "condition" | "timeframe" | "additionalInfo" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["cashOfferRequest"]>

  export type $CashOfferRequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CashOfferRequest"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      phone: string
      address: string
      city: string
      state: string
      zipCode: string
      propertyType: string
      condition: string
      timeframe: string
      additionalInfo: string | null
      status: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["cashOfferRequest"]>
    composites: {}
  }

  type CashOfferRequestGetPayload<S extends boolean | null | undefined | CashOfferRequestDefaultArgs> = $Result.GetResult<Prisma.$CashOfferRequestPayload, S>

  type CashOfferRequestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CashOfferRequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CashOfferRequestCountAggregateInputType | true
    }

  export interface CashOfferRequestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CashOfferRequest'], meta: { name: 'CashOfferRequest' } }
    /**
     * Find zero or one CashOfferRequest that matches the filter.
     * @param {CashOfferRequestFindUniqueArgs} args - Arguments to find a CashOfferRequest
     * @example
     * // Get one CashOfferRequest
     * const cashOfferRequest = await prisma.cashOfferRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CashOfferRequestFindUniqueArgs>(args: SelectSubset<T, CashOfferRequestFindUniqueArgs<ExtArgs>>): Prisma__CashOfferRequestClient<$Result.GetResult<Prisma.$CashOfferRequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CashOfferRequest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CashOfferRequestFindUniqueOrThrowArgs} args - Arguments to find a CashOfferRequest
     * @example
     * // Get one CashOfferRequest
     * const cashOfferRequest = await prisma.cashOfferRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CashOfferRequestFindUniqueOrThrowArgs>(args: SelectSubset<T, CashOfferRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CashOfferRequestClient<$Result.GetResult<Prisma.$CashOfferRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CashOfferRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CashOfferRequestFindFirstArgs} args - Arguments to find a CashOfferRequest
     * @example
     * // Get one CashOfferRequest
     * const cashOfferRequest = await prisma.cashOfferRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CashOfferRequestFindFirstArgs>(args?: SelectSubset<T, CashOfferRequestFindFirstArgs<ExtArgs>>): Prisma__CashOfferRequestClient<$Result.GetResult<Prisma.$CashOfferRequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CashOfferRequest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CashOfferRequestFindFirstOrThrowArgs} args - Arguments to find a CashOfferRequest
     * @example
     * // Get one CashOfferRequest
     * const cashOfferRequest = await prisma.cashOfferRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CashOfferRequestFindFirstOrThrowArgs>(args?: SelectSubset<T, CashOfferRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma__CashOfferRequestClient<$Result.GetResult<Prisma.$CashOfferRequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CashOfferRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CashOfferRequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CashOfferRequests
     * const cashOfferRequests = await prisma.cashOfferRequest.findMany()
     * 
     * // Get first 10 CashOfferRequests
     * const cashOfferRequests = await prisma.cashOfferRequest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cashOfferRequestWithIdOnly = await prisma.cashOfferRequest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CashOfferRequestFindManyArgs>(args?: SelectSubset<T, CashOfferRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CashOfferRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CashOfferRequest.
     * @param {CashOfferRequestCreateArgs} args - Arguments to create a CashOfferRequest.
     * @example
     * // Create one CashOfferRequest
     * const CashOfferRequest = await prisma.cashOfferRequest.create({
     *   data: {
     *     // ... data to create a CashOfferRequest
     *   }
     * })
     * 
     */
    create<T extends CashOfferRequestCreateArgs>(args: SelectSubset<T, CashOfferRequestCreateArgs<ExtArgs>>): Prisma__CashOfferRequestClient<$Result.GetResult<Prisma.$CashOfferRequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CashOfferRequests.
     * @param {CashOfferRequestCreateManyArgs} args - Arguments to create many CashOfferRequests.
     * @example
     * // Create many CashOfferRequests
     * const cashOfferRequest = await prisma.cashOfferRequest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CashOfferRequestCreateManyArgs>(args?: SelectSubset<T, CashOfferRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CashOfferRequests and returns the data saved in the database.
     * @param {CashOfferRequestCreateManyAndReturnArgs} args - Arguments to create many CashOfferRequests.
     * @example
     * // Create many CashOfferRequests
     * const cashOfferRequest = await prisma.cashOfferRequest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CashOfferRequests and only return the `id`
     * const cashOfferRequestWithIdOnly = await prisma.cashOfferRequest.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CashOfferRequestCreateManyAndReturnArgs>(args?: SelectSubset<T, CashOfferRequestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CashOfferRequestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CashOfferRequest.
     * @param {CashOfferRequestDeleteArgs} args - Arguments to delete one CashOfferRequest.
     * @example
     * // Delete one CashOfferRequest
     * const CashOfferRequest = await prisma.cashOfferRequest.delete({
     *   where: {
     *     // ... filter to delete one CashOfferRequest
     *   }
     * })
     * 
     */
    delete<T extends CashOfferRequestDeleteArgs>(args: SelectSubset<T, CashOfferRequestDeleteArgs<ExtArgs>>): Prisma__CashOfferRequestClient<$Result.GetResult<Prisma.$CashOfferRequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CashOfferRequest.
     * @param {CashOfferRequestUpdateArgs} args - Arguments to update one CashOfferRequest.
     * @example
     * // Update one CashOfferRequest
     * const cashOfferRequest = await prisma.cashOfferRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CashOfferRequestUpdateArgs>(args: SelectSubset<T, CashOfferRequestUpdateArgs<ExtArgs>>): Prisma__CashOfferRequestClient<$Result.GetResult<Prisma.$CashOfferRequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CashOfferRequests.
     * @param {CashOfferRequestDeleteManyArgs} args - Arguments to filter CashOfferRequests to delete.
     * @example
     * // Delete a few CashOfferRequests
     * const { count } = await prisma.cashOfferRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CashOfferRequestDeleteManyArgs>(args?: SelectSubset<T, CashOfferRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CashOfferRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CashOfferRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CashOfferRequests
     * const cashOfferRequest = await prisma.cashOfferRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CashOfferRequestUpdateManyArgs>(args: SelectSubset<T, CashOfferRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CashOfferRequests and returns the data updated in the database.
     * @param {CashOfferRequestUpdateManyAndReturnArgs} args - Arguments to update many CashOfferRequests.
     * @example
     * // Update many CashOfferRequests
     * const cashOfferRequest = await prisma.cashOfferRequest.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CashOfferRequests and only return the `id`
     * const cashOfferRequestWithIdOnly = await prisma.cashOfferRequest.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CashOfferRequestUpdateManyAndReturnArgs>(args: SelectSubset<T, CashOfferRequestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CashOfferRequestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CashOfferRequest.
     * @param {CashOfferRequestUpsertArgs} args - Arguments to update or create a CashOfferRequest.
     * @example
     * // Update or create a CashOfferRequest
     * const cashOfferRequest = await prisma.cashOfferRequest.upsert({
     *   create: {
     *     // ... data to create a CashOfferRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CashOfferRequest we want to update
     *   }
     * })
     */
    upsert<T extends CashOfferRequestUpsertArgs>(args: SelectSubset<T, CashOfferRequestUpsertArgs<ExtArgs>>): Prisma__CashOfferRequestClient<$Result.GetResult<Prisma.$CashOfferRequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CashOfferRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CashOfferRequestCountArgs} args - Arguments to filter CashOfferRequests to count.
     * @example
     * // Count the number of CashOfferRequests
     * const count = await prisma.cashOfferRequest.count({
     *   where: {
     *     // ... the filter for the CashOfferRequests we want to count
     *   }
     * })
    **/
    count<T extends CashOfferRequestCountArgs>(
      args?: Subset<T, CashOfferRequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CashOfferRequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CashOfferRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CashOfferRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CashOfferRequestAggregateArgs>(args: Subset<T, CashOfferRequestAggregateArgs>): Prisma.PrismaPromise<GetCashOfferRequestAggregateType<T>>

    /**
     * Group by CashOfferRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CashOfferRequestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CashOfferRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CashOfferRequestGroupByArgs['orderBy'] }
        : { orderBy?: CashOfferRequestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CashOfferRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCashOfferRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CashOfferRequest model
   */
  readonly fields: CashOfferRequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CashOfferRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CashOfferRequestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CashOfferRequest model
   */
  interface CashOfferRequestFieldRefs {
    readonly id: FieldRef<"CashOfferRequest", 'Int'>
    readonly name: FieldRef<"CashOfferRequest", 'String'>
    readonly email: FieldRef<"CashOfferRequest", 'String'>
    readonly phone: FieldRef<"CashOfferRequest", 'String'>
    readonly address: FieldRef<"CashOfferRequest", 'String'>
    readonly city: FieldRef<"CashOfferRequest", 'String'>
    readonly state: FieldRef<"CashOfferRequest", 'String'>
    readonly zipCode: FieldRef<"CashOfferRequest", 'String'>
    readonly propertyType: FieldRef<"CashOfferRequest", 'String'>
    readonly condition: FieldRef<"CashOfferRequest", 'String'>
    readonly timeframe: FieldRef<"CashOfferRequest", 'String'>
    readonly additionalInfo: FieldRef<"CashOfferRequest", 'String'>
    readonly status: FieldRef<"CashOfferRequest", 'String'>
    readonly createdAt: FieldRef<"CashOfferRequest", 'DateTime'>
    readonly updatedAt: FieldRef<"CashOfferRequest", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CashOfferRequest findUnique
   */
  export type CashOfferRequestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CashOfferRequest
     */
    select?: CashOfferRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CashOfferRequest
     */
    omit?: CashOfferRequestOmit<ExtArgs> | null
    /**
     * Filter, which CashOfferRequest to fetch.
     */
    where: CashOfferRequestWhereUniqueInput
  }

  /**
   * CashOfferRequest findUniqueOrThrow
   */
  export type CashOfferRequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CashOfferRequest
     */
    select?: CashOfferRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CashOfferRequest
     */
    omit?: CashOfferRequestOmit<ExtArgs> | null
    /**
     * Filter, which CashOfferRequest to fetch.
     */
    where: CashOfferRequestWhereUniqueInput
  }

  /**
   * CashOfferRequest findFirst
   */
  export type CashOfferRequestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CashOfferRequest
     */
    select?: CashOfferRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CashOfferRequest
     */
    omit?: CashOfferRequestOmit<ExtArgs> | null
    /**
     * Filter, which CashOfferRequest to fetch.
     */
    where?: CashOfferRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CashOfferRequests to fetch.
     */
    orderBy?: CashOfferRequestOrderByWithRelationInput | CashOfferRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CashOfferRequests.
     */
    cursor?: CashOfferRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CashOfferRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CashOfferRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CashOfferRequests.
     */
    distinct?: CashOfferRequestScalarFieldEnum | CashOfferRequestScalarFieldEnum[]
  }

  /**
   * CashOfferRequest findFirstOrThrow
   */
  export type CashOfferRequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CashOfferRequest
     */
    select?: CashOfferRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CashOfferRequest
     */
    omit?: CashOfferRequestOmit<ExtArgs> | null
    /**
     * Filter, which CashOfferRequest to fetch.
     */
    where?: CashOfferRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CashOfferRequests to fetch.
     */
    orderBy?: CashOfferRequestOrderByWithRelationInput | CashOfferRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CashOfferRequests.
     */
    cursor?: CashOfferRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CashOfferRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CashOfferRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CashOfferRequests.
     */
    distinct?: CashOfferRequestScalarFieldEnum | CashOfferRequestScalarFieldEnum[]
  }

  /**
   * CashOfferRequest findMany
   */
  export type CashOfferRequestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CashOfferRequest
     */
    select?: CashOfferRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CashOfferRequest
     */
    omit?: CashOfferRequestOmit<ExtArgs> | null
    /**
     * Filter, which CashOfferRequests to fetch.
     */
    where?: CashOfferRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CashOfferRequests to fetch.
     */
    orderBy?: CashOfferRequestOrderByWithRelationInput | CashOfferRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CashOfferRequests.
     */
    cursor?: CashOfferRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CashOfferRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CashOfferRequests.
     */
    skip?: number
    distinct?: CashOfferRequestScalarFieldEnum | CashOfferRequestScalarFieldEnum[]
  }

  /**
   * CashOfferRequest create
   */
  export type CashOfferRequestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CashOfferRequest
     */
    select?: CashOfferRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CashOfferRequest
     */
    omit?: CashOfferRequestOmit<ExtArgs> | null
    /**
     * The data needed to create a CashOfferRequest.
     */
    data: XOR<CashOfferRequestCreateInput, CashOfferRequestUncheckedCreateInput>
  }

  /**
   * CashOfferRequest createMany
   */
  export type CashOfferRequestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CashOfferRequests.
     */
    data: CashOfferRequestCreateManyInput | CashOfferRequestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CashOfferRequest createManyAndReturn
   */
  export type CashOfferRequestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CashOfferRequest
     */
    select?: CashOfferRequestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CashOfferRequest
     */
    omit?: CashOfferRequestOmit<ExtArgs> | null
    /**
     * The data used to create many CashOfferRequests.
     */
    data: CashOfferRequestCreateManyInput | CashOfferRequestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CashOfferRequest update
   */
  export type CashOfferRequestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CashOfferRequest
     */
    select?: CashOfferRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CashOfferRequest
     */
    omit?: CashOfferRequestOmit<ExtArgs> | null
    /**
     * The data needed to update a CashOfferRequest.
     */
    data: XOR<CashOfferRequestUpdateInput, CashOfferRequestUncheckedUpdateInput>
    /**
     * Choose, which CashOfferRequest to update.
     */
    where: CashOfferRequestWhereUniqueInput
  }

  /**
   * CashOfferRequest updateMany
   */
  export type CashOfferRequestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CashOfferRequests.
     */
    data: XOR<CashOfferRequestUpdateManyMutationInput, CashOfferRequestUncheckedUpdateManyInput>
    /**
     * Filter which CashOfferRequests to update
     */
    where?: CashOfferRequestWhereInput
    /**
     * Limit how many CashOfferRequests to update.
     */
    limit?: number
  }

  /**
   * CashOfferRequest updateManyAndReturn
   */
  export type CashOfferRequestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CashOfferRequest
     */
    select?: CashOfferRequestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CashOfferRequest
     */
    omit?: CashOfferRequestOmit<ExtArgs> | null
    /**
     * The data used to update CashOfferRequests.
     */
    data: XOR<CashOfferRequestUpdateManyMutationInput, CashOfferRequestUncheckedUpdateManyInput>
    /**
     * Filter which CashOfferRequests to update
     */
    where?: CashOfferRequestWhereInput
    /**
     * Limit how many CashOfferRequests to update.
     */
    limit?: number
  }

  /**
   * CashOfferRequest upsert
   */
  export type CashOfferRequestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CashOfferRequest
     */
    select?: CashOfferRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CashOfferRequest
     */
    omit?: CashOfferRequestOmit<ExtArgs> | null
    /**
     * The filter to search for the CashOfferRequest to update in case it exists.
     */
    where: CashOfferRequestWhereUniqueInput
    /**
     * In case the CashOfferRequest found by the `where` argument doesn't exist, create a new CashOfferRequest with this data.
     */
    create: XOR<CashOfferRequestCreateInput, CashOfferRequestUncheckedCreateInput>
    /**
     * In case the CashOfferRequest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CashOfferRequestUpdateInput, CashOfferRequestUncheckedUpdateInput>
  }

  /**
   * CashOfferRequest delete
   */
  export type CashOfferRequestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CashOfferRequest
     */
    select?: CashOfferRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CashOfferRequest
     */
    omit?: CashOfferRequestOmit<ExtArgs> | null
    /**
     * Filter which CashOfferRequest to delete.
     */
    where: CashOfferRequestWhereUniqueInput
  }

  /**
   * CashOfferRequest deleteMany
   */
  export type CashOfferRequestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CashOfferRequests to delete
     */
    where?: CashOfferRequestWhereInput
    /**
     * Limit how many CashOfferRequests to delete.
     */
    limit?: number
  }

  /**
   * CashOfferRequest without action
   */
  export type CashOfferRequestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CashOfferRequest
     */
    select?: CashOfferRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CashOfferRequest
     */
    omit?: CashOfferRequestOmit<ExtArgs> | null
  }


  /**
   * Model Testimonial
   */

  export type AggregateTestimonial = {
    _count: TestimonialCountAggregateOutputType | null
    _avg: TestimonialAvgAggregateOutputType | null
    _sum: TestimonialSumAggregateOutputType | null
    _min: TestimonialMinAggregateOutputType | null
    _max: TestimonialMaxAggregateOutputType | null
  }

  export type TestimonialAvgAggregateOutputType = {
    id: number | null
    rating: number | null
  }

  export type TestimonialSumAggregateOutputType = {
    id: number | null
    rating: number | null
  }

  export type TestimonialMinAggregateOutputType = {
    id: number | null
    name: string | null
    location: string | null
    rating: number | null
    comment: string | null
    isActive: boolean | null
    createdAt: Date | null
  }

  export type TestimonialMaxAggregateOutputType = {
    id: number | null
    name: string | null
    location: string | null
    rating: number | null
    comment: string | null
    isActive: boolean | null
    createdAt: Date | null
  }

  export type TestimonialCountAggregateOutputType = {
    id: number
    name: number
    location: number
    rating: number
    comment: number
    isActive: number
    createdAt: number
    _all: number
  }


  export type TestimonialAvgAggregateInputType = {
    id?: true
    rating?: true
  }

  export type TestimonialSumAggregateInputType = {
    id?: true
    rating?: true
  }

  export type TestimonialMinAggregateInputType = {
    id?: true
    name?: true
    location?: true
    rating?: true
    comment?: true
    isActive?: true
    createdAt?: true
  }

  export type TestimonialMaxAggregateInputType = {
    id?: true
    name?: true
    location?: true
    rating?: true
    comment?: true
    isActive?: true
    createdAt?: true
  }

  export type TestimonialCountAggregateInputType = {
    id?: true
    name?: true
    location?: true
    rating?: true
    comment?: true
    isActive?: true
    createdAt?: true
    _all?: true
  }

  export type TestimonialAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Testimonial to aggregate.
     */
    where?: TestimonialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Testimonials to fetch.
     */
    orderBy?: TestimonialOrderByWithRelationInput | TestimonialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TestimonialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Testimonials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Testimonials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Testimonials
    **/
    _count?: true | TestimonialCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TestimonialAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TestimonialSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TestimonialMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TestimonialMaxAggregateInputType
  }

  export type GetTestimonialAggregateType<T extends TestimonialAggregateArgs> = {
        [P in keyof T & keyof AggregateTestimonial]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTestimonial[P]>
      : GetScalarType<T[P], AggregateTestimonial[P]>
  }




  export type TestimonialGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TestimonialWhereInput
    orderBy?: TestimonialOrderByWithAggregationInput | TestimonialOrderByWithAggregationInput[]
    by: TestimonialScalarFieldEnum[] | TestimonialScalarFieldEnum
    having?: TestimonialScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TestimonialCountAggregateInputType | true
    _avg?: TestimonialAvgAggregateInputType
    _sum?: TestimonialSumAggregateInputType
    _min?: TestimonialMinAggregateInputType
    _max?: TestimonialMaxAggregateInputType
  }

  export type TestimonialGroupByOutputType = {
    id: number
    name: string
    location: string | null
    rating: number
    comment: string
    isActive: boolean
    createdAt: Date
    _count: TestimonialCountAggregateOutputType | null
    _avg: TestimonialAvgAggregateOutputType | null
    _sum: TestimonialSumAggregateOutputType | null
    _min: TestimonialMinAggregateOutputType | null
    _max: TestimonialMaxAggregateOutputType | null
  }

  type GetTestimonialGroupByPayload<T extends TestimonialGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TestimonialGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TestimonialGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TestimonialGroupByOutputType[P]>
            : GetScalarType<T[P], TestimonialGroupByOutputType[P]>
        }
      >
    >


  export type TestimonialSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    location?: boolean
    rating?: boolean
    comment?: boolean
    isActive?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["testimonial"]>

  export type TestimonialSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    location?: boolean
    rating?: boolean
    comment?: boolean
    isActive?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["testimonial"]>

  export type TestimonialSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    location?: boolean
    rating?: boolean
    comment?: boolean
    isActive?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["testimonial"]>

  export type TestimonialSelectScalar = {
    id?: boolean
    name?: boolean
    location?: boolean
    rating?: boolean
    comment?: boolean
    isActive?: boolean
    createdAt?: boolean
  }

  export type TestimonialOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "location" | "rating" | "comment" | "isActive" | "createdAt", ExtArgs["result"]["testimonial"]>

  export type $TestimonialPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Testimonial"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      location: string | null
      rating: number
      comment: string
      isActive: boolean
      createdAt: Date
    }, ExtArgs["result"]["testimonial"]>
    composites: {}
  }

  type TestimonialGetPayload<S extends boolean | null | undefined | TestimonialDefaultArgs> = $Result.GetResult<Prisma.$TestimonialPayload, S>

  type TestimonialCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TestimonialFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TestimonialCountAggregateInputType | true
    }

  export interface TestimonialDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Testimonial'], meta: { name: 'Testimonial' } }
    /**
     * Find zero or one Testimonial that matches the filter.
     * @param {TestimonialFindUniqueArgs} args - Arguments to find a Testimonial
     * @example
     * // Get one Testimonial
     * const testimonial = await prisma.testimonial.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TestimonialFindUniqueArgs>(args: SelectSubset<T, TestimonialFindUniqueArgs<ExtArgs>>): Prisma__TestimonialClient<$Result.GetResult<Prisma.$TestimonialPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Testimonial that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TestimonialFindUniqueOrThrowArgs} args - Arguments to find a Testimonial
     * @example
     * // Get one Testimonial
     * const testimonial = await prisma.testimonial.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TestimonialFindUniqueOrThrowArgs>(args: SelectSubset<T, TestimonialFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TestimonialClient<$Result.GetResult<Prisma.$TestimonialPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Testimonial that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestimonialFindFirstArgs} args - Arguments to find a Testimonial
     * @example
     * // Get one Testimonial
     * const testimonial = await prisma.testimonial.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TestimonialFindFirstArgs>(args?: SelectSubset<T, TestimonialFindFirstArgs<ExtArgs>>): Prisma__TestimonialClient<$Result.GetResult<Prisma.$TestimonialPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Testimonial that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestimonialFindFirstOrThrowArgs} args - Arguments to find a Testimonial
     * @example
     * // Get one Testimonial
     * const testimonial = await prisma.testimonial.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TestimonialFindFirstOrThrowArgs>(args?: SelectSubset<T, TestimonialFindFirstOrThrowArgs<ExtArgs>>): Prisma__TestimonialClient<$Result.GetResult<Prisma.$TestimonialPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Testimonials that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestimonialFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Testimonials
     * const testimonials = await prisma.testimonial.findMany()
     * 
     * // Get first 10 Testimonials
     * const testimonials = await prisma.testimonial.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const testimonialWithIdOnly = await prisma.testimonial.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TestimonialFindManyArgs>(args?: SelectSubset<T, TestimonialFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestimonialPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Testimonial.
     * @param {TestimonialCreateArgs} args - Arguments to create a Testimonial.
     * @example
     * // Create one Testimonial
     * const Testimonial = await prisma.testimonial.create({
     *   data: {
     *     // ... data to create a Testimonial
     *   }
     * })
     * 
     */
    create<T extends TestimonialCreateArgs>(args: SelectSubset<T, TestimonialCreateArgs<ExtArgs>>): Prisma__TestimonialClient<$Result.GetResult<Prisma.$TestimonialPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Testimonials.
     * @param {TestimonialCreateManyArgs} args - Arguments to create many Testimonials.
     * @example
     * // Create many Testimonials
     * const testimonial = await prisma.testimonial.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TestimonialCreateManyArgs>(args?: SelectSubset<T, TestimonialCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Testimonials and returns the data saved in the database.
     * @param {TestimonialCreateManyAndReturnArgs} args - Arguments to create many Testimonials.
     * @example
     * // Create many Testimonials
     * const testimonial = await prisma.testimonial.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Testimonials and only return the `id`
     * const testimonialWithIdOnly = await prisma.testimonial.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TestimonialCreateManyAndReturnArgs>(args?: SelectSubset<T, TestimonialCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestimonialPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Testimonial.
     * @param {TestimonialDeleteArgs} args - Arguments to delete one Testimonial.
     * @example
     * // Delete one Testimonial
     * const Testimonial = await prisma.testimonial.delete({
     *   where: {
     *     // ... filter to delete one Testimonial
     *   }
     * })
     * 
     */
    delete<T extends TestimonialDeleteArgs>(args: SelectSubset<T, TestimonialDeleteArgs<ExtArgs>>): Prisma__TestimonialClient<$Result.GetResult<Prisma.$TestimonialPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Testimonial.
     * @param {TestimonialUpdateArgs} args - Arguments to update one Testimonial.
     * @example
     * // Update one Testimonial
     * const testimonial = await prisma.testimonial.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TestimonialUpdateArgs>(args: SelectSubset<T, TestimonialUpdateArgs<ExtArgs>>): Prisma__TestimonialClient<$Result.GetResult<Prisma.$TestimonialPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Testimonials.
     * @param {TestimonialDeleteManyArgs} args - Arguments to filter Testimonials to delete.
     * @example
     * // Delete a few Testimonials
     * const { count } = await prisma.testimonial.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TestimonialDeleteManyArgs>(args?: SelectSubset<T, TestimonialDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Testimonials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestimonialUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Testimonials
     * const testimonial = await prisma.testimonial.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TestimonialUpdateManyArgs>(args: SelectSubset<T, TestimonialUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Testimonials and returns the data updated in the database.
     * @param {TestimonialUpdateManyAndReturnArgs} args - Arguments to update many Testimonials.
     * @example
     * // Update many Testimonials
     * const testimonial = await prisma.testimonial.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Testimonials and only return the `id`
     * const testimonialWithIdOnly = await prisma.testimonial.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TestimonialUpdateManyAndReturnArgs>(args: SelectSubset<T, TestimonialUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestimonialPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Testimonial.
     * @param {TestimonialUpsertArgs} args - Arguments to update or create a Testimonial.
     * @example
     * // Update or create a Testimonial
     * const testimonial = await prisma.testimonial.upsert({
     *   create: {
     *     // ... data to create a Testimonial
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Testimonial we want to update
     *   }
     * })
     */
    upsert<T extends TestimonialUpsertArgs>(args: SelectSubset<T, TestimonialUpsertArgs<ExtArgs>>): Prisma__TestimonialClient<$Result.GetResult<Prisma.$TestimonialPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Testimonials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestimonialCountArgs} args - Arguments to filter Testimonials to count.
     * @example
     * // Count the number of Testimonials
     * const count = await prisma.testimonial.count({
     *   where: {
     *     // ... the filter for the Testimonials we want to count
     *   }
     * })
    **/
    count<T extends TestimonialCountArgs>(
      args?: Subset<T, TestimonialCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TestimonialCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Testimonial.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestimonialAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TestimonialAggregateArgs>(args: Subset<T, TestimonialAggregateArgs>): Prisma.PrismaPromise<GetTestimonialAggregateType<T>>

    /**
     * Group by Testimonial.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestimonialGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TestimonialGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TestimonialGroupByArgs['orderBy'] }
        : { orderBy?: TestimonialGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TestimonialGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTestimonialGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Testimonial model
   */
  readonly fields: TestimonialFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Testimonial.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TestimonialClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Testimonial model
   */
  interface TestimonialFieldRefs {
    readonly id: FieldRef<"Testimonial", 'Int'>
    readonly name: FieldRef<"Testimonial", 'String'>
    readonly location: FieldRef<"Testimonial", 'String'>
    readonly rating: FieldRef<"Testimonial", 'Int'>
    readonly comment: FieldRef<"Testimonial", 'String'>
    readonly isActive: FieldRef<"Testimonial", 'Boolean'>
    readonly createdAt: FieldRef<"Testimonial", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Testimonial findUnique
   */
  export type TestimonialFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Testimonial
     */
    select?: TestimonialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Testimonial
     */
    omit?: TestimonialOmit<ExtArgs> | null
    /**
     * Filter, which Testimonial to fetch.
     */
    where: TestimonialWhereUniqueInput
  }

  /**
   * Testimonial findUniqueOrThrow
   */
  export type TestimonialFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Testimonial
     */
    select?: TestimonialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Testimonial
     */
    omit?: TestimonialOmit<ExtArgs> | null
    /**
     * Filter, which Testimonial to fetch.
     */
    where: TestimonialWhereUniqueInput
  }

  /**
   * Testimonial findFirst
   */
  export type TestimonialFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Testimonial
     */
    select?: TestimonialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Testimonial
     */
    omit?: TestimonialOmit<ExtArgs> | null
    /**
     * Filter, which Testimonial to fetch.
     */
    where?: TestimonialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Testimonials to fetch.
     */
    orderBy?: TestimonialOrderByWithRelationInput | TestimonialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Testimonials.
     */
    cursor?: TestimonialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Testimonials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Testimonials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Testimonials.
     */
    distinct?: TestimonialScalarFieldEnum | TestimonialScalarFieldEnum[]
  }

  /**
   * Testimonial findFirstOrThrow
   */
  export type TestimonialFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Testimonial
     */
    select?: TestimonialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Testimonial
     */
    omit?: TestimonialOmit<ExtArgs> | null
    /**
     * Filter, which Testimonial to fetch.
     */
    where?: TestimonialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Testimonials to fetch.
     */
    orderBy?: TestimonialOrderByWithRelationInput | TestimonialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Testimonials.
     */
    cursor?: TestimonialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Testimonials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Testimonials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Testimonials.
     */
    distinct?: TestimonialScalarFieldEnum | TestimonialScalarFieldEnum[]
  }

  /**
   * Testimonial findMany
   */
  export type TestimonialFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Testimonial
     */
    select?: TestimonialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Testimonial
     */
    omit?: TestimonialOmit<ExtArgs> | null
    /**
     * Filter, which Testimonials to fetch.
     */
    where?: TestimonialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Testimonials to fetch.
     */
    orderBy?: TestimonialOrderByWithRelationInput | TestimonialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Testimonials.
     */
    cursor?: TestimonialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Testimonials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Testimonials.
     */
    skip?: number
    distinct?: TestimonialScalarFieldEnum | TestimonialScalarFieldEnum[]
  }

  /**
   * Testimonial create
   */
  export type TestimonialCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Testimonial
     */
    select?: TestimonialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Testimonial
     */
    omit?: TestimonialOmit<ExtArgs> | null
    /**
     * The data needed to create a Testimonial.
     */
    data: XOR<TestimonialCreateInput, TestimonialUncheckedCreateInput>
  }

  /**
   * Testimonial createMany
   */
  export type TestimonialCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Testimonials.
     */
    data: TestimonialCreateManyInput | TestimonialCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Testimonial createManyAndReturn
   */
  export type TestimonialCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Testimonial
     */
    select?: TestimonialSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Testimonial
     */
    omit?: TestimonialOmit<ExtArgs> | null
    /**
     * The data used to create many Testimonials.
     */
    data: TestimonialCreateManyInput | TestimonialCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Testimonial update
   */
  export type TestimonialUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Testimonial
     */
    select?: TestimonialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Testimonial
     */
    omit?: TestimonialOmit<ExtArgs> | null
    /**
     * The data needed to update a Testimonial.
     */
    data: XOR<TestimonialUpdateInput, TestimonialUncheckedUpdateInput>
    /**
     * Choose, which Testimonial to update.
     */
    where: TestimonialWhereUniqueInput
  }

  /**
   * Testimonial updateMany
   */
  export type TestimonialUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Testimonials.
     */
    data: XOR<TestimonialUpdateManyMutationInput, TestimonialUncheckedUpdateManyInput>
    /**
     * Filter which Testimonials to update
     */
    where?: TestimonialWhereInput
    /**
     * Limit how many Testimonials to update.
     */
    limit?: number
  }

  /**
   * Testimonial updateManyAndReturn
   */
  export type TestimonialUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Testimonial
     */
    select?: TestimonialSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Testimonial
     */
    omit?: TestimonialOmit<ExtArgs> | null
    /**
     * The data used to update Testimonials.
     */
    data: XOR<TestimonialUpdateManyMutationInput, TestimonialUncheckedUpdateManyInput>
    /**
     * Filter which Testimonials to update
     */
    where?: TestimonialWhereInput
    /**
     * Limit how many Testimonials to update.
     */
    limit?: number
  }

  /**
   * Testimonial upsert
   */
  export type TestimonialUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Testimonial
     */
    select?: TestimonialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Testimonial
     */
    omit?: TestimonialOmit<ExtArgs> | null
    /**
     * The filter to search for the Testimonial to update in case it exists.
     */
    where: TestimonialWhereUniqueInput
    /**
     * In case the Testimonial found by the `where` argument doesn't exist, create a new Testimonial with this data.
     */
    create: XOR<TestimonialCreateInput, TestimonialUncheckedCreateInput>
    /**
     * In case the Testimonial was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TestimonialUpdateInput, TestimonialUncheckedUpdateInput>
  }

  /**
   * Testimonial delete
   */
  export type TestimonialDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Testimonial
     */
    select?: TestimonialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Testimonial
     */
    omit?: TestimonialOmit<ExtArgs> | null
    /**
     * Filter which Testimonial to delete.
     */
    where: TestimonialWhereUniqueInput
  }

  /**
   * Testimonial deleteMany
   */
  export type TestimonialDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Testimonials to delete
     */
    where?: TestimonialWhereInput
    /**
     * Limit how many Testimonials to delete.
     */
    limit?: number
  }

  /**
   * Testimonial without action
   */
  export type TestimonialDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Testimonial
     */
    select?: TestimonialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Testimonial
     */
    omit?: TestimonialOmit<ExtArgs> | null
  }


  /**
   * Model RentalApplication
   */

  export type AggregateRentalApplication = {
    _count: RentalApplicationCountAggregateOutputType | null
    _avg: RentalApplicationAvgAggregateOutputType | null
    _sum: RentalApplicationSumAggregateOutputType | null
    _min: RentalApplicationMinAggregateOutputType | null
    _max: RentalApplicationMaxAggregateOutputType | null
  }

  export type RentalApplicationAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    monthlyIncome: number | null
    additionalOccupants: number | null
    creditScore: number | null
  }

  export type RentalApplicationSumAggregateOutputType = {
    id: number | null
    userId: number | null
    monthlyIncome: number | null
    additionalOccupants: number | null
    creditScore: number | null
  }

  export type RentalApplicationMinAggregateOutputType = {
    id: number | null
    userId: number | null
    firstName: string | null
    lastName: string | null
    email: string | null
    phone: string | null
    currentAddress: string | null
    city: string | null
    state: string | null
    zipCode: string | null
    moveInDate: Date | null
    employer: string | null
    occupation: string | null
    monthlyIncome: number | null
    additionalOccupants: number | null
    pets: boolean | null
    petDetails: string | null
    creditScore: number | null
    hasEvictions: boolean | null
    hasFelonies: boolean | null
    additionalInfo: string | null
    isComplete: boolean | null
    isVerified: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RentalApplicationMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    firstName: string | null
    lastName: string | null
    email: string | null
    phone: string | null
    currentAddress: string | null
    city: string | null
    state: string | null
    zipCode: string | null
    moveInDate: Date | null
    employer: string | null
    occupation: string | null
    monthlyIncome: number | null
    additionalOccupants: number | null
    pets: boolean | null
    petDetails: string | null
    creditScore: number | null
    hasEvictions: boolean | null
    hasFelonies: boolean | null
    additionalInfo: string | null
    isComplete: boolean | null
    isVerified: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RentalApplicationCountAggregateOutputType = {
    id: number
    userId: number
    firstName: number
    lastName: number
    email: number
    phone: number
    currentAddress: number
    city: number
    state: number
    zipCode: number
    moveInDate: number
    employer: number
    occupation: number
    monthlyIncome: number
    additionalOccupants: number
    pets: number
    petDetails: number
    creditScore: number
    hasEvictions: number
    hasFelonies: number
    additionalInfo: number
    isComplete: number
    isVerified: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RentalApplicationAvgAggregateInputType = {
    id?: true
    userId?: true
    monthlyIncome?: true
    additionalOccupants?: true
    creditScore?: true
  }

  export type RentalApplicationSumAggregateInputType = {
    id?: true
    userId?: true
    monthlyIncome?: true
    additionalOccupants?: true
    creditScore?: true
  }

  export type RentalApplicationMinAggregateInputType = {
    id?: true
    userId?: true
    firstName?: true
    lastName?: true
    email?: true
    phone?: true
    currentAddress?: true
    city?: true
    state?: true
    zipCode?: true
    moveInDate?: true
    employer?: true
    occupation?: true
    monthlyIncome?: true
    additionalOccupants?: true
    pets?: true
    petDetails?: true
    creditScore?: true
    hasEvictions?: true
    hasFelonies?: true
    additionalInfo?: true
    isComplete?: true
    isVerified?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RentalApplicationMaxAggregateInputType = {
    id?: true
    userId?: true
    firstName?: true
    lastName?: true
    email?: true
    phone?: true
    currentAddress?: true
    city?: true
    state?: true
    zipCode?: true
    moveInDate?: true
    employer?: true
    occupation?: true
    monthlyIncome?: true
    additionalOccupants?: true
    pets?: true
    petDetails?: true
    creditScore?: true
    hasEvictions?: true
    hasFelonies?: true
    additionalInfo?: true
    isComplete?: true
    isVerified?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RentalApplicationCountAggregateInputType = {
    id?: true
    userId?: true
    firstName?: true
    lastName?: true
    email?: true
    phone?: true
    currentAddress?: true
    city?: true
    state?: true
    zipCode?: true
    moveInDate?: true
    employer?: true
    occupation?: true
    monthlyIncome?: true
    additionalOccupants?: true
    pets?: true
    petDetails?: true
    creditScore?: true
    hasEvictions?: true
    hasFelonies?: true
    additionalInfo?: true
    isComplete?: true
    isVerified?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RentalApplicationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RentalApplication to aggregate.
     */
    where?: RentalApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RentalApplications to fetch.
     */
    orderBy?: RentalApplicationOrderByWithRelationInput | RentalApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RentalApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RentalApplications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RentalApplications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RentalApplications
    **/
    _count?: true | RentalApplicationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RentalApplicationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RentalApplicationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RentalApplicationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RentalApplicationMaxAggregateInputType
  }

  export type GetRentalApplicationAggregateType<T extends RentalApplicationAggregateArgs> = {
        [P in keyof T & keyof AggregateRentalApplication]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRentalApplication[P]>
      : GetScalarType<T[P], AggregateRentalApplication[P]>
  }




  export type RentalApplicationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RentalApplicationWhereInput
    orderBy?: RentalApplicationOrderByWithAggregationInput | RentalApplicationOrderByWithAggregationInput[]
    by: RentalApplicationScalarFieldEnum[] | RentalApplicationScalarFieldEnum
    having?: RentalApplicationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RentalApplicationCountAggregateInputType | true
    _avg?: RentalApplicationAvgAggregateInputType
    _sum?: RentalApplicationSumAggregateInputType
    _min?: RentalApplicationMinAggregateInputType
    _max?: RentalApplicationMaxAggregateInputType
  }

  export type RentalApplicationGroupByOutputType = {
    id: number
    userId: number
    firstName: string
    lastName: string
    email: string
    phone: string
    currentAddress: string
    city: string
    state: string
    zipCode: string
    moveInDate: Date
    employer: string | null
    occupation: string | null
    monthlyIncome: number
    additionalOccupants: number
    pets: boolean
    petDetails: string | null
    creditScore: number | null
    hasEvictions: boolean
    hasFelonies: boolean
    additionalInfo: string | null
    isComplete: boolean
    isVerified: boolean
    createdAt: Date
    updatedAt: Date
    _count: RentalApplicationCountAggregateOutputType | null
    _avg: RentalApplicationAvgAggregateOutputType | null
    _sum: RentalApplicationSumAggregateOutputType | null
    _min: RentalApplicationMinAggregateOutputType | null
    _max: RentalApplicationMaxAggregateOutputType | null
  }

  type GetRentalApplicationGroupByPayload<T extends RentalApplicationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RentalApplicationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RentalApplicationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RentalApplicationGroupByOutputType[P]>
            : GetScalarType<T[P], RentalApplicationGroupByOutputType[P]>
        }
      >
    >


  export type RentalApplicationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phone?: boolean
    currentAddress?: boolean
    city?: boolean
    state?: boolean
    zipCode?: boolean
    moveInDate?: boolean
    employer?: boolean
    occupation?: boolean
    monthlyIncome?: boolean
    additionalOccupants?: boolean
    pets?: boolean
    petDetails?: boolean
    creditScore?: boolean
    hasEvictions?: boolean
    hasFelonies?: boolean
    additionalInfo?: boolean
    isComplete?: boolean
    isVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    submissions?: boolean | RentalApplication$submissionsArgs<ExtArgs>
    documents?: boolean | RentalApplication$documentsArgs<ExtArgs>
    _count?: boolean | RentalApplicationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rentalApplication"]>

  export type RentalApplicationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phone?: boolean
    currentAddress?: boolean
    city?: boolean
    state?: boolean
    zipCode?: boolean
    moveInDate?: boolean
    employer?: boolean
    occupation?: boolean
    monthlyIncome?: boolean
    additionalOccupants?: boolean
    pets?: boolean
    petDetails?: boolean
    creditScore?: boolean
    hasEvictions?: boolean
    hasFelonies?: boolean
    additionalInfo?: boolean
    isComplete?: boolean
    isVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rentalApplication"]>

  export type RentalApplicationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phone?: boolean
    currentAddress?: boolean
    city?: boolean
    state?: boolean
    zipCode?: boolean
    moveInDate?: boolean
    employer?: boolean
    occupation?: boolean
    monthlyIncome?: boolean
    additionalOccupants?: boolean
    pets?: boolean
    petDetails?: boolean
    creditScore?: boolean
    hasEvictions?: boolean
    hasFelonies?: boolean
    additionalInfo?: boolean
    isComplete?: boolean
    isVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rentalApplication"]>

  export type RentalApplicationSelectScalar = {
    id?: boolean
    userId?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phone?: boolean
    currentAddress?: boolean
    city?: boolean
    state?: boolean
    zipCode?: boolean
    moveInDate?: boolean
    employer?: boolean
    occupation?: boolean
    monthlyIncome?: boolean
    additionalOccupants?: boolean
    pets?: boolean
    petDetails?: boolean
    creditScore?: boolean
    hasEvictions?: boolean
    hasFelonies?: boolean
    additionalInfo?: boolean
    isComplete?: boolean
    isVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RentalApplicationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "firstName" | "lastName" | "email" | "phone" | "currentAddress" | "city" | "state" | "zipCode" | "moveInDate" | "employer" | "occupation" | "monthlyIncome" | "additionalOccupants" | "pets" | "petDetails" | "creditScore" | "hasEvictions" | "hasFelonies" | "additionalInfo" | "isComplete" | "isVerified" | "createdAt" | "updatedAt", ExtArgs["result"]["rentalApplication"]>
  export type RentalApplicationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    submissions?: boolean | RentalApplication$submissionsArgs<ExtArgs>
    documents?: boolean | RentalApplication$documentsArgs<ExtArgs>
    _count?: boolean | RentalApplicationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RentalApplicationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RentalApplicationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $RentalApplicationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RentalApplication"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      submissions: Prisma.$ApplicationSubmissionPayload<ExtArgs>[]
      documents: Prisma.$ApplicationDocumentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      firstName: string
      lastName: string
      email: string
      phone: string
      currentAddress: string
      city: string
      state: string
      zipCode: string
      moveInDate: Date
      employer: string | null
      occupation: string | null
      monthlyIncome: number
      additionalOccupants: number
      pets: boolean
      petDetails: string | null
      creditScore: number | null
      hasEvictions: boolean
      hasFelonies: boolean
      additionalInfo: string | null
      isComplete: boolean
      isVerified: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["rentalApplication"]>
    composites: {}
  }

  type RentalApplicationGetPayload<S extends boolean | null | undefined | RentalApplicationDefaultArgs> = $Result.GetResult<Prisma.$RentalApplicationPayload, S>

  type RentalApplicationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RentalApplicationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RentalApplicationCountAggregateInputType | true
    }

  export interface RentalApplicationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RentalApplication'], meta: { name: 'RentalApplication' } }
    /**
     * Find zero or one RentalApplication that matches the filter.
     * @param {RentalApplicationFindUniqueArgs} args - Arguments to find a RentalApplication
     * @example
     * // Get one RentalApplication
     * const rentalApplication = await prisma.rentalApplication.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RentalApplicationFindUniqueArgs>(args: SelectSubset<T, RentalApplicationFindUniqueArgs<ExtArgs>>): Prisma__RentalApplicationClient<$Result.GetResult<Prisma.$RentalApplicationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RentalApplication that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RentalApplicationFindUniqueOrThrowArgs} args - Arguments to find a RentalApplication
     * @example
     * // Get one RentalApplication
     * const rentalApplication = await prisma.rentalApplication.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RentalApplicationFindUniqueOrThrowArgs>(args: SelectSubset<T, RentalApplicationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RentalApplicationClient<$Result.GetResult<Prisma.$RentalApplicationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RentalApplication that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentalApplicationFindFirstArgs} args - Arguments to find a RentalApplication
     * @example
     * // Get one RentalApplication
     * const rentalApplication = await prisma.rentalApplication.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RentalApplicationFindFirstArgs>(args?: SelectSubset<T, RentalApplicationFindFirstArgs<ExtArgs>>): Prisma__RentalApplicationClient<$Result.GetResult<Prisma.$RentalApplicationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RentalApplication that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentalApplicationFindFirstOrThrowArgs} args - Arguments to find a RentalApplication
     * @example
     * // Get one RentalApplication
     * const rentalApplication = await prisma.rentalApplication.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RentalApplicationFindFirstOrThrowArgs>(args?: SelectSubset<T, RentalApplicationFindFirstOrThrowArgs<ExtArgs>>): Prisma__RentalApplicationClient<$Result.GetResult<Prisma.$RentalApplicationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RentalApplications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentalApplicationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RentalApplications
     * const rentalApplications = await prisma.rentalApplication.findMany()
     * 
     * // Get first 10 RentalApplications
     * const rentalApplications = await prisma.rentalApplication.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rentalApplicationWithIdOnly = await prisma.rentalApplication.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RentalApplicationFindManyArgs>(args?: SelectSubset<T, RentalApplicationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RentalApplicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RentalApplication.
     * @param {RentalApplicationCreateArgs} args - Arguments to create a RentalApplication.
     * @example
     * // Create one RentalApplication
     * const RentalApplication = await prisma.rentalApplication.create({
     *   data: {
     *     // ... data to create a RentalApplication
     *   }
     * })
     * 
     */
    create<T extends RentalApplicationCreateArgs>(args: SelectSubset<T, RentalApplicationCreateArgs<ExtArgs>>): Prisma__RentalApplicationClient<$Result.GetResult<Prisma.$RentalApplicationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RentalApplications.
     * @param {RentalApplicationCreateManyArgs} args - Arguments to create many RentalApplications.
     * @example
     * // Create many RentalApplications
     * const rentalApplication = await prisma.rentalApplication.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RentalApplicationCreateManyArgs>(args?: SelectSubset<T, RentalApplicationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RentalApplications and returns the data saved in the database.
     * @param {RentalApplicationCreateManyAndReturnArgs} args - Arguments to create many RentalApplications.
     * @example
     * // Create many RentalApplications
     * const rentalApplication = await prisma.rentalApplication.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RentalApplications and only return the `id`
     * const rentalApplicationWithIdOnly = await prisma.rentalApplication.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RentalApplicationCreateManyAndReturnArgs>(args?: SelectSubset<T, RentalApplicationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RentalApplicationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RentalApplication.
     * @param {RentalApplicationDeleteArgs} args - Arguments to delete one RentalApplication.
     * @example
     * // Delete one RentalApplication
     * const RentalApplication = await prisma.rentalApplication.delete({
     *   where: {
     *     // ... filter to delete one RentalApplication
     *   }
     * })
     * 
     */
    delete<T extends RentalApplicationDeleteArgs>(args: SelectSubset<T, RentalApplicationDeleteArgs<ExtArgs>>): Prisma__RentalApplicationClient<$Result.GetResult<Prisma.$RentalApplicationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RentalApplication.
     * @param {RentalApplicationUpdateArgs} args - Arguments to update one RentalApplication.
     * @example
     * // Update one RentalApplication
     * const rentalApplication = await prisma.rentalApplication.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RentalApplicationUpdateArgs>(args: SelectSubset<T, RentalApplicationUpdateArgs<ExtArgs>>): Prisma__RentalApplicationClient<$Result.GetResult<Prisma.$RentalApplicationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RentalApplications.
     * @param {RentalApplicationDeleteManyArgs} args - Arguments to filter RentalApplications to delete.
     * @example
     * // Delete a few RentalApplications
     * const { count } = await prisma.rentalApplication.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RentalApplicationDeleteManyArgs>(args?: SelectSubset<T, RentalApplicationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RentalApplications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentalApplicationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RentalApplications
     * const rentalApplication = await prisma.rentalApplication.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RentalApplicationUpdateManyArgs>(args: SelectSubset<T, RentalApplicationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RentalApplications and returns the data updated in the database.
     * @param {RentalApplicationUpdateManyAndReturnArgs} args - Arguments to update many RentalApplications.
     * @example
     * // Update many RentalApplications
     * const rentalApplication = await prisma.rentalApplication.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RentalApplications and only return the `id`
     * const rentalApplicationWithIdOnly = await prisma.rentalApplication.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RentalApplicationUpdateManyAndReturnArgs>(args: SelectSubset<T, RentalApplicationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RentalApplicationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RentalApplication.
     * @param {RentalApplicationUpsertArgs} args - Arguments to update or create a RentalApplication.
     * @example
     * // Update or create a RentalApplication
     * const rentalApplication = await prisma.rentalApplication.upsert({
     *   create: {
     *     // ... data to create a RentalApplication
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RentalApplication we want to update
     *   }
     * })
     */
    upsert<T extends RentalApplicationUpsertArgs>(args: SelectSubset<T, RentalApplicationUpsertArgs<ExtArgs>>): Prisma__RentalApplicationClient<$Result.GetResult<Prisma.$RentalApplicationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RentalApplications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentalApplicationCountArgs} args - Arguments to filter RentalApplications to count.
     * @example
     * // Count the number of RentalApplications
     * const count = await prisma.rentalApplication.count({
     *   where: {
     *     // ... the filter for the RentalApplications we want to count
     *   }
     * })
    **/
    count<T extends RentalApplicationCountArgs>(
      args?: Subset<T, RentalApplicationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RentalApplicationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RentalApplication.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentalApplicationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RentalApplicationAggregateArgs>(args: Subset<T, RentalApplicationAggregateArgs>): Prisma.PrismaPromise<GetRentalApplicationAggregateType<T>>

    /**
     * Group by RentalApplication.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentalApplicationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RentalApplicationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RentalApplicationGroupByArgs['orderBy'] }
        : { orderBy?: RentalApplicationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RentalApplicationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRentalApplicationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RentalApplication model
   */
  readonly fields: RentalApplicationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RentalApplication.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RentalApplicationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    submissions<T extends RentalApplication$submissionsArgs<ExtArgs> = {}>(args?: Subset<T, RentalApplication$submissionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationSubmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    documents<T extends RentalApplication$documentsArgs<ExtArgs> = {}>(args?: Subset<T, RentalApplication$documentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationDocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RentalApplication model
   */
  interface RentalApplicationFieldRefs {
    readonly id: FieldRef<"RentalApplication", 'Int'>
    readonly userId: FieldRef<"RentalApplication", 'Int'>
    readonly firstName: FieldRef<"RentalApplication", 'String'>
    readonly lastName: FieldRef<"RentalApplication", 'String'>
    readonly email: FieldRef<"RentalApplication", 'String'>
    readonly phone: FieldRef<"RentalApplication", 'String'>
    readonly currentAddress: FieldRef<"RentalApplication", 'String'>
    readonly city: FieldRef<"RentalApplication", 'String'>
    readonly state: FieldRef<"RentalApplication", 'String'>
    readonly zipCode: FieldRef<"RentalApplication", 'String'>
    readonly moveInDate: FieldRef<"RentalApplication", 'DateTime'>
    readonly employer: FieldRef<"RentalApplication", 'String'>
    readonly occupation: FieldRef<"RentalApplication", 'String'>
    readonly monthlyIncome: FieldRef<"RentalApplication", 'Int'>
    readonly additionalOccupants: FieldRef<"RentalApplication", 'Int'>
    readonly pets: FieldRef<"RentalApplication", 'Boolean'>
    readonly petDetails: FieldRef<"RentalApplication", 'String'>
    readonly creditScore: FieldRef<"RentalApplication", 'Int'>
    readonly hasEvictions: FieldRef<"RentalApplication", 'Boolean'>
    readonly hasFelonies: FieldRef<"RentalApplication", 'Boolean'>
    readonly additionalInfo: FieldRef<"RentalApplication", 'String'>
    readonly isComplete: FieldRef<"RentalApplication", 'Boolean'>
    readonly isVerified: FieldRef<"RentalApplication", 'Boolean'>
    readonly createdAt: FieldRef<"RentalApplication", 'DateTime'>
    readonly updatedAt: FieldRef<"RentalApplication", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RentalApplication findUnique
   */
  export type RentalApplicationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalApplication
     */
    select?: RentalApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RentalApplication
     */
    omit?: RentalApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalApplicationInclude<ExtArgs> | null
    /**
     * Filter, which RentalApplication to fetch.
     */
    where: RentalApplicationWhereUniqueInput
  }

  /**
   * RentalApplication findUniqueOrThrow
   */
  export type RentalApplicationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalApplication
     */
    select?: RentalApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RentalApplication
     */
    omit?: RentalApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalApplicationInclude<ExtArgs> | null
    /**
     * Filter, which RentalApplication to fetch.
     */
    where: RentalApplicationWhereUniqueInput
  }

  /**
   * RentalApplication findFirst
   */
  export type RentalApplicationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalApplication
     */
    select?: RentalApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RentalApplication
     */
    omit?: RentalApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalApplicationInclude<ExtArgs> | null
    /**
     * Filter, which RentalApplication to fetch.
     */
    where?: RentalApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RentalApplications to fetch.
     */
    orderBy?: RentalApplicationOrderByWithRelationInput | RentalApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RentalApplications.
     */
    cursor?: RentalApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RentalApplications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RentalApplications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RentalApplications.
     */
    distinct?: RentalApplicationScalarFieldEnum | RentalApplicationScalarFieldEnum[]
  }

  /**
   * RentalApplication findFirstOrThrow
   */
  export type RentalApplicationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalApplication
     */
    select?: RentalApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RentalApplication
     */
    omit?: RentalApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalApplicationInclude<ExtArgs> | null
    /**
     * Filter, which RentalApplication to fetch.
     */
    where?: RentalApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RentalApplications to fetch.
     */
    orderBy?: RentalApplicationOrderByWithRelationInput | RentalApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RentalApplications.
     */
    cursor?: RentalApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RentalApplications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RentalApplications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RentalApplications.
     */
    distinct?: RentalApplicationScalarFieldEnum | RentalApplicationScalarFieldEnum[]
  }

  /**
   * RentalApplication findMany
   */
  export type RentalApplicationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalApplication
     */
    select?: RentalApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RentalApplication
     */
    omit?: RentalApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalApplicationInclude<ExtArgs> | null
    /**
     * Filter, which RentalApplications to fetch.
     */
    where?: RentalApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RentalApplications to fetch.
     */
    orderBy?: RentalApplicationOrderByWithRelationInput | RentalApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RentalApplications.
     */
    cursor?: RentalApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RentalApplications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RentalApplications.
     */
    skip?: number
    distinct?: RentalApplicationScalarFieldEnum | RentalApplicationScalarFieldEnum[]
  }

  /**
   * RentalApplication create
   */
  export type RentalApplicationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalApplication
     */
    select?: RentalApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RentalApplication
     */
    omit?: RentalApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalApplicationInclude<ExtArgs> | null
    /**
     * The data needed to create a RentalApplication.
     */
    data: XOR<RentalApplicationCreateInput, RentalApplicationUncheckedCreateInput>
  }

  /**
   * RentalApplication createMany
   */
  export type RentalApplicationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RentalApplications.
     */
    data: RentalApplicationCreateManyInput | RentalApplicationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RentalApplication createManyAndReturn
   */
  export type RentalApplicationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalApplication
     */
    select?: RentalApplicationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RentalApplication
     */
    omit?: RentalApplicationOmit<ExtArgs> | null
    /**
     * The data used to create many RentalApplications.
     */
    data: RentalApplicationCreateManyInput | RentalApplicationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalApplicationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RentalApplication update
   */
  export type RentalApplicationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalApplication
     */
    select?: RentalApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RentalApplication
     */
    omit?: RentalApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalApplicationInclude<ExtArgs> | null
    /**
     * The data needed to update a RentalApplication.
     */
    data: XOR<RentalApplicationUpdateInput, RentalApplicationUncheckedUpdateInput>
    /**
     * Choose, which RentalApplication to update.
     */
    where: RentalApplicationWhereUniqueInput
  }

  /**
   * RentalApplication updateMany
   */
  export type RentalApplicationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RentalApplications.
     */
    data: XOR<RentalApplicationUpdateManyMutationInput, RentalApplicationUncheckedUpdateManyInput>
    /**
     * Filter which RentalApplications to update
     */
    where?: RentalApplicationWhereInput
    /**
     * Limit how many RentalApplications to update.
     */
    limit?: number
  }

  /**
   * RentalApplication updateManyAndReturn
   */
  export type RentalApplicationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalApplication
     */
    select?: RentalApplicationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RentalApplication
     */
    omit?: RentalApplicationOmit<ExtArgs> | null
    /**
     * The data used to update RentalApplications.
     */
    data: XOR<RentalApplicationUpdateManyMutationInput, RentalApplicationUncheckedUpdateManyInput>
    /**
     * Filter which RentalApplications to update
     */
    where?: RentalApplicationWhereInput
    /**
     * Limit how many RentalApplications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalApplicationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RentalApplication upsert
   */
  export type RentalApplicationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalApplication
     */
    select?: RentalApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RentalApplication
     */
    omit?: RentalApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalApplicationInclude<ExtArgs> | null
    /**
     * The filter to search for the RentalApplication to update in case it exists.
     */
    where: RentalApplicationWhereUniqueInput
    /**
     * In case the RentalApplication found by the `where` argument doesn't exist, create a new RentalApplication with this data.
     */
    create: XOR<RentalApplicationCreateInput, RentalApplicationUncheckedCreateInput>
    /**
     * In case the RentalApplication was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RentalApplicationUpdateInput, RentalApplicationUncheckedUpdateInput>
  }

  /**
   * RentalApplication delete
   */
  export type RentalApplicationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalApplication
     */
    select?: RentalApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RentalApplication
     */
    omit?: RentalApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalApplicationInclude<ExtArgs> | null
    /**
     * Filter which RentalApplication to delete.
     */
    where: RentalApplicationWhereUniqueInput
  }

  /**
   * RentalApplication deleteMany
   */
  export type RentalApplicationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RentalApplications to delete
     */
    where?: RentalApplicationWhereInput
    /**
     * Limit how many RentalApplications to delete.
     */
    limit?: number
  }

  /**
   * RentalApplication.submissions
   */
  export type RentalApplication$submissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationSubmission
     */
    select?: ApplicationSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApplicationSubmission
     */
    omit?: ApplicationSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationSubmissionInclude<ExtArgs> | null
    where?: ApplicationSubmissionWhereInput
    orderBy?: ApplicationSubmissionOrderByWithRelationInput | ApplicationSubmissionOrderByWithRelationInput[]
    cursor?: ApplicationSubmissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ApplicationSubmissionScalarFieldEnum | ApplicationSubmissionScalarFieldEnum[]
  }

  /**
   * RentalApplication.documents
   */
  export type RentalApplication$documentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationDocument
     */
    select?: ApplicationDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApplicationDocument
     */
    omit?: ApplicationDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationDocumentInclude<ExtArgs> | null
    where?: ApplicationDocumentWhereInput
    orderBy?: ApplicationDocumentOrderByWithRelationInput | ApplicationDocumentOrderByWithRelationInput[]
    cursor?: ApplicationDocumentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ApplicationDocumentScalarFieldEnum | ApplicationDocumentScalarFieldEnum[]
  }

  /**
   * RentalApplication without action
   */
  export type RentalApplicationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalApplication
     */
    select?: RentalApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RentalApplication
     */
    omit?: RentalApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalApplicationInclude<ExtArgs> | null
  }


  /**
   * Model ApplicationSubmission
   */

  export type AggregateApplicationSubmission = {
    _count: ApplicationSubmissionCountAggregateOutputType | null
    _avg: ApplicationSubmissionAvgAggregateOutputType | null
    _sum: ApplicationSubmissionSumAggregateOutputType | null
    _min: ApplicationSubmissionMinAggregateOutputType | null
    _max: ApplicationSubmissionMaxAggregateOutputType | null
  }

  export type ApplicationSubmissionAvgAggregateOutputType = {
    id: number | null
    applicationId: number | null
    propertyId: number | null
    reviewedById: number | null
  }

  export type ApplicationSubmissionSumAggregateOutputType = {
    id: number | null
    applicationId: number | null
    propertyId: number | null
    reviewedById: number | null
  }

  export type ApplicationSubmissionMinAggregateOutputType = {
    id: number | null
    applicationId: number | null
    propertyId: number | null
    status: string | null
    notes: string | null
    reviewedById: number | null
    reviewedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ApplicationSubmissionMaxAggregateOutputType = {
    id: number | null
    applicationId: number | null
    propertyId: number | null
    status: string | null
    notes: string | null
    reviewedById: number | null
    reviewedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ApplicationSubmissionCountAggregateOutputType = {
    id: number
    applicationId: number
    propertyId: number
    status: number
    notes: number
    reviewedById: number
    reviewedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ApplicationSubmissionAvgAggregateInputType = {
    id?: true
    applicationId?: true
    propertyId?: true
    reviewedById?: true
  }

  export type ApplicationSubmissionSumAggregateInputType = {
    id?: true
    applicationId?: true
    propertyId?: true
    reviewedById?: true
  }

  export type ApplicationSubmissionMinAggregateInputType = {
    id?: true
    applicationId?: true
    propertyId?: true
    status?: true
    notes?: true
    reviewedById?: true
    reviewedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ApplicationSubmissionMaxAggregateInputType = {
    id?: true
    applicationId?: true
    propertyId?: true
    status?: true
    notes?: true
    reviewedById?: true
    reviewedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ApplicationSubmissionCountAggregateInputType = {
    id?: true
    applicationId?: true
    propertyId?: true
    status?: true
    notes?: true
    reviewedById?: true
    reviewedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ApplicationSubmissionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ApplicationSubmission to aggregate.
     */
    where?: ApplicationSubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApplicationSubmissions to fetch.
     */
    orderBy?: ApplicationSubmissionOrderByWithRelationInput | ApplicationSubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ApplicationSubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApplicationSubmissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApplicationSubmissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ApplicationSubmissions
    **/
    _count?: true | ApplicationSubmissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ApplicationSubmissionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ApplicationSubmissionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ApplicationSubmissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ApplicationSubmissionMaxAggregateInputType
  }

  export type GetApplicationSubmissionAggregateType<T extends ApplicationSubmissionAggregateArgs> = {
        [P in keyof T & keyof AggregateApplicationSubmission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApplicationSubmission[P]>
      : GetScalarType<T[P], AggregateApplicationSubmission[P]>
  }




  export type ApplicationSubmissionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApplicationSubmissionWhereInput
    orderBy?: ApplicationSubmissionOrderByWithAggregationInput | ApplicationSubmissionOrderByWithAggregationInput[]
    by: ApplicationSubmissionScalarFieldEnum[] | ApplicationSubmissionScalarFieldEnum
    having?: ApplicationSubmissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ApplicationSubmissionCountAggregateInputType | true
    _avg?: ApplicationSubmissionAvgAggregateInputType
    _sum?: ApplicationSubmissionSumAggregateInputType
    _min?: ApplicationSubmissionMinAggregateInputType
    _max?: ApplicationSubmissionMaxAggregateInputType
  }

  export type ApplicationSubmissionGroupByOutputType = {
    id: number
    applicationId: number
    propertyId: number
    status: string
    notes: string | null
    reviewedById: number | null
    reviewedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: ApplicationSubmissionCountAggregateOutputType | null
    _avg: ApplicationSubmissionAvgAggregateOutputType | null
    _sum: ApplicationSubmissionSumAggregateOutputType | null
    _min: ApplicationSubmissionMinAggregateOutputType | null
    _max: ApplicationSubmissionMaxAggregateOutputType | null
  }

  type GetApplicationSubmissionGroupByPayload<T extends ApplicationSubmissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ApplicationSubmissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ApplicationSubmissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ApplicationSubmissionGroupByOutputType[P]>
            : GetScalarType<T[P], ApplicationSubmissionGroupByOutputType[P]>
        }
      >
    >


  export type ApplicationSubmissionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    applicationId?: boolean
    propertyId?: boolean
    status?: boolean
    notes?: boolean
    reviewedById?: boolean
    reviewedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    application?: boolean | RentalApplicationDefaultArgs<ExtArgs>
    reviewedBy?: boolean | ApplicationSubmission$reviewedByArgs<ExtArgs>
  }, ExtArgs["result"]["applicationSubmission"]>

  export type ApplicationSubmissionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    applicationId?: boolean
    propertyId?: boolean
    status?: boolean
    notes?: boolean
    reviewedById?: boolean
    reviewedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    application?: boolean | RentalApplicationDefaultArgs<ExtArgs>
    reviewedBy?: boolean | ApplicationSubmission$reviewedByArgs<ExtArgs>
  }, ExtArgs["result"]["applicationSubmission"]>

  export type ApplicationSubmissionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    applicationId?: boolean
    propertyId?: boolean
    status?: boolean
    notes?: boolean
    reviewedById?: boolean
    reviewedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    application?: boolean | RentalApplicationDefaultArgs<ExtArgs>
    reviewedBy?: boolean | ApplicationSubmission$reviewedByArgs<ExtArgs>
  }, ExtArgs["result"]["applicationSubmission"]>

  export type ApplicationSubmissionSelectScalar = {
    id?: boolean
    applicationId?: boolean
    propertyId?: boolean
    status?: boolean
    notes?: boolean
    reviewedById?: boolean
    reviewedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ApplicationSubmissionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "applicationId" | "propertyId" | "status" | "notes" | "reviewedById" | "reviewedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["applicationSubmission"]>
  export type ApplicationSubmissionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    application?: boolean | RentalApplicationDefaultArgs<ExtArgs>
    reviewedBy?: boolean | ApplicationSubmission$reviewedByArgs<ExtArgs>
  }
  export type ApplicationSubmissionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    application?: boolean | RentalApplicationDefaultArgs<ExtArgs>
    reviewedBy?: boolean | ApplicationSubmission$reviewedByArgs<ExtArgs>
  }
  export type ApplicationSubmissionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    application?: boolean | RentalApplicationDefaultArgs<ExtArgs>
    reviewedBy?: boolean | ApplicationSubmission$reviewedByArgs<ExtArgs>
  }

  export type $ApplicationSubmissionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ApplicationSubmission"
    objects: {
      application: Prisma.$RentalApplicationPayload<ExtArgs>
      reviewedBy: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      applicationId: number
      propertyId: number
      status: string
      notes: string | null
      reviewedById: number | null
      reviewedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["applicationSubmission"]>
    composites: {}
  }

  type ApplicationSubmissionGetPayload<S extends boolean | null | undefined | ApplicationSubmissionDefaultArgs> = $Result.GetResult<Prisma.$ApplicationSubmissionPayload, S>

  type ApplicationSubmissionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ApplicationSubmissionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ApplicationSubmissionCountAggregateInputType | true
    }

  export interface ApplicationSubmissionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ApplicationSubmission'], meta: { name: 'ApplicationSubmission' } }
    /**
     * Find zero or one ApplicationSubmission that matches the filter.
     * @param {ApplicationSubmissionFindUniqueArgs} args - Arguments to find a ApplicationSubmission
     * @example
     * // Get one ApplicationSubmission
     * const applicationSubmission = await prisma.applicationSubmission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ApplicationSubmissionFindUniqueArgs>(args: SelectSubset<T, ApplicationSubmissionFindUniqueArgs<ExtArgs>>): Prisma__ApplicationSubmissionClient<$Result.GetResult<Prisma.$ApplicationSubmissionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ApplicationSubmission that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ApplicationSubmissionFindUniqueOrThrowArgs} args - Arguments to find a ApplicationSubmission
     * @example
     * // Get one ApplicationSubmission
     * const applicationSubmission = await prisma.applicationSubmission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ApplicationSubmissionFindUniqueOrThrowArgs>(args: SelectSubset<T, ApplicationSubmissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ApplicationSubmissionClient<$Result.GetResult<Prisma.$ApplicationSubmissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ApplicationSubmission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationSubmissionFindFirstArgs} args - Arguments to find a ApplicationSubmission
     * @example
     * // Get one ApplicationSubmission
     * const applicationSubmission = await prisma.applicationSubmission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ApplicationSubmissionFindFirstArgs>(args?: SelectSubset<T, ApplicationSubmissionFindFirstArgs<ExtArgs>>): Prisma__ApplicationSubmissionClient<$Result.GetResult<Prisma.$ApplicationSubmissionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ApplicationSubmission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationSubmissionFindFirstOrThrowArgs} args - Arguments to find a ApplicationSubmission
     * @example
     * // Get one ApplicationSubmission
     * const applicationSubmission = await prisma.applicationSubmission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ApplicationSubmissionFindFirstOrThrowArgs>(args?: SelectSubset<T, ApplicationSubmissionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ApplicationSubmissionClient<$Result.GetResult<Prisma.$ApplicationSubmissionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ApplicationSubmissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationSubmissionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ApplicationSubmissions
     * const applicationSubmissions = await prisma.applicationSubmission.findMany()
     * 
     * // Get first 10 ApplicationSubmissions
     * const applicationSubmissions = await prisma.applicationSubmission.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const applicationSubmissionWithIdOnly = await prisma.applicationSubmission.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ApplicationSubmissionFindManyArgs>(args?: SelectSubset<T, ApplicationSubmissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationSubmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ApplicationSubmission.
     * @param {ApplicationSubmissionCreateArgs} args - Arguments to create a ApplicationSubmission.
     * @example
     * // Create one ApplicationSubmission
     * const ApplicationSubmission = await prisma.applicationSubmission.create({
     *   data: {
     *     // ... data to create a ApplicationSubmission
     *   }
     * })
     * 
     */
    create<T extends ApplicationSubmissionCreateArgs>(args: SelectSubset<T, ApplicationSubmissionCreateArgs<ExtArgs>>): Prisma__ApplicationSubmissionClient<$Result.GetResult<Prisma.$ApplicationSubmissionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ApplicationSubmissions.
     * @param {ApplicationSubmissionCreateManyArgs} args - Arguments to create many ApplicationSubmissions.
     * @example
     * // Create many ApplicationSubmissions
     * const applicationSubmission = await prisma.applicationSubmission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ApplicationSubmissionCreateManyArgs>(args?: SelectSubset<T, ApplicationSubmissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ApplicationSubmissions and returns the data saved in the database.
     * @param {ApplicationSubmissionCreateManyAndReturnArgs} args - Arguments to create many ApplicationSubmissions.
     * @example
     * // Create many ApplicationSubmissions
     * const applicationSubmission = await prisma.applicationSubmission.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ApplicationSubmissions and only return the `id`
     * const applicationSubmissionWithIdOnly = await prisma.applicationSubmission.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ApplicationSubmissionCreateManyAndReturnArgs>(args?: SelectSubset<T, ApplicationSubmissionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationSubmissionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ApplicationSubmission.
     * @param {ApplicationSubmissionDeleteArgs} args - Arguments to delete one ApplicationSubmission.
     * @example
     * // Delete one ApplicationSubmission
     * const ApplicationSubmission = await prisma.applicationSubmission.delete({
     *   where: {
     *     // ... filter to delete one ApplicationSubmission
     *   }
     * })
     * 
     */
    delete<T extends ApplicationSubmissionDeleteArgs>(args: SelectSubset<T, ApplicationSubmissionDeleteArgs<ExtArgs>>): Prisma__ApplicationSubmissionClient<$Result.GetResult<Prisma.$ApplicationSubmissionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ApplicationSubmission.
     * @param {ApplicationSubmissionUpdateArgs} args - Arguments to update one ApplicationSubmission.
     * @example
     * // Update one ApplicationSubmission
     * const applicationSubmission = await prisma.applicationSubmission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ApplicationSubmissionUpdateArgs>(args: SelectSubset<T, ApplicationSubmissionUpdateArgs<ExtArgs>>): Prisma__ApplicationSubmissionClient<$Result.GetResult<Prisma.$ApplicationSubmissionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ApplicationSubmissions.
     * @param {ApplicationSubmissionDeleteManyArgs} args - Arguments to filter ApplicationSubmissions to delete.
     * @example
     * // Delete a few ApplicationSubmissions
     * const { count } = await prisma.applicationSubmission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ApplicationSubmissionDeleteManyArgs>(args?: SelectSubset<T, ApplicationSubmissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ApplicationSubmissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationSubmissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ApplicationSubmissions
     * const applicationSubmission = await prisma.applicationSubmission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ApplicationSubmissionUpdateManyArgs>(args: SelectSubset<T, ApplicationSubmissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ApplicationSubmissions and returns the data updated in the database.
     * @param {ApplicationSubmissionUpdateManyAndReturnArgs} args - Arguments to update many ApplicationSubmissions.
     * @example
     * // Update many ApplicationSubmissions
     * const applicationSubmission = await prisma.applicationSubmission.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ApplicationSubmissions and only return the `id`
     * const applicationSubmissionWithIdOnly = await prisma.applicationSubmission.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ApplicationSubmissionUpdateManyAndReturnArgs>(args: SelectSubset<T, ApplicationSubmissionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationSubmissionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ApplicationSubmission.
     * @param {ApplicationSubmissionUpsertArgs} args - Arguments to update or create a ApplicationSubmission.
     * @example
     * // Update or create a ApplicationSubmission
     * const applicationSubmission = await prisma.applicationSubmission.upsert({
     *   create: {
     *     // ... data to create a ApplicationSubmission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ApplicationSubmission we want to update
     *   }
     * })
     */
    upsert<T extends ApplicationSubmissionUpsertArgs>(args: SelectSubset<T, ApplicationSubmissionUpsertArgs<ExtArgs>>): Prisma__ApplicationSubmissionClient<$Result.GetResult<Prisma.$ApplicationSubmissionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ApplicationSubmissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationSubmissionCountArgs} args - Arguments to filter ApplicationSubmissions to count.
     * @example
     * // Count the number of ApplicationSubmissions
     * const count = await prisma.applicationSubmission.count({
     *   where: {
     *     // ... the filter for the ApplicationSubmissions we want to count
     *   }
     * })
    **/
    count<T extends ApplicationSubmissionCountArgs>(
      args?: Subset<T, ApplicationSubmissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ApplicationSubmissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ApplicationSubmission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationSubmissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ApplicationSubmissionAggregateArgs>(args: Subset<T, ApplicationSubmissionAggregateArgs>): Prisma.PrismaPromise<GetApplicationSubmissionAggregateType<T>>

    /**
     * Group by ApplicationSubmission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationSubmissionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ApplicationSubmissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ApplicationSubmissionGroupByArgs['orderBy'] }
        : { orderBy?: ApplicationSubmissionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ApplicationSubmissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApplicationSubmissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ApplicationSubmission model
   */
  readonly fields: ApplicationSubmissionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ApplicationSubmission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ApplicationSubmissionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    application<T extends RentalApplicationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RentalApplicationDefaultArgs<ExtArgs>>): Prisma__RentalApplicationClient<$Result.GetResult<Prisma.$RentalApplicationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    reviewedBy<T extends ApplicationSubmission$reviewedByArgs<ExtArgs> = {}>(args?: Subset<T, ApplicationSubmission$reviewedByArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ApplicationSubmission model
   */
  interface ApplicationSubmissionFieldRefs {
    readonly id: FieldRef<"ApplicationSubmission", 'Int'>
    readonly applicationId: FieldRef<"ApplicationSubmission", 'Int'>
    readonly propertyId: FieldRef<"ApplicationSubmission", 'Int'>
    readonly status: FieldRef<"ApplicationSubmission", 'String'>
    readonly notes: FieldRef<"ApplicationSubmission", 'String'>
    readonly reviewedById: FieldRef<"ApplicationSubmission", 'Int'>
    readonly reviewedAt: FieldRef<"ApplicationSubmission", 'DateTime'>
    readonly createdAt: FieldRef<"ApplicationSubmission", 'DateTime'>
    readonly updatedAt: FieldRef<"ApplicationSubmission", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ApplicationSubmission findUnique
   */
  export type ApplicationSubmissionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationSubmission
     */
    select?: ApplicationSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApplicationSubmission
     */
    omit?: ApplicationSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationSubmissionInclude<ExtArgs> | null
    /**
     * Filter, which ApplicationSubmission to fetch.
     */
    where: ApplicationSubmissionWhereUniqueInput
  }

  /**
   * ApplicationSubmission findUniqueOrThrow
   */
  export type ApplicationSubmissionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationSubmission
     */
    select?: ApplicationSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApplicationSubmission
     */
    omit?: ApplicationSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationSubmissionInclude<ExtArgs> | null
    /**
     * Filter, which ApplicationSubmission to fetch.
     */
    where: ApplicationSubmissionWhereUniqueInput
  }

  /**
   * ApplicationSubmission findFirst
   */
  export type ApplicationSubmissionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationSubmission
     */
    select?: ApplicationSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApplicationSubmission
     */
    omit?: ApplicationSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationSubmissionInclude<ExtArgs> | null
    /**
     * Filter, which ApplicationSubmission to fetch.
     */
    where?: ApplicationSubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApplicationSubmissions to fetch.
     */
    orderBy?: ApplicationSubmissionOrderByWithRelationInput | ApplicationSubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ApplicationSubmissions.
     */
    cursor?: ApplicationSubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApplicationSubmissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApplicationSubmissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApplicationSubmissions.
     */
    distinct?: ApplicationSubmissionScalarFieldEnum | ApplicationSubmissionScalarFieldEnum[]
  }

  /**
   * ApplicationSubmission findFirstOrThrow
   */
  export type ApplicationSubmissionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationSubmission
     */
    select?: ApplicationSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApplicationSubmission
     */
    omit?: ApplicationSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationSubmissionInclude<ExtArgs> | null
    /**
     * Filter, which ApplicationSubmission to fetch.
     */
    where?: ApplicationSubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApplicationSubmissions to fetch.
     */
    orderBy?: ApplicationSubmissionOrderByWithRelationInput | ApplicationSubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ApplicationSubmissions.
     */
    cursor?: ApplicationSubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApplicationSubmissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApplicationSubmissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApplicationSubmissions.
     */
    distinct?: ApplicationSubmissionScalarFieldEnum | ApplicationSubmissionScalarFieldEnum[]
  }

  /**
   * ApplicationSubmission findMany
   */
  export type ApplicationSubmissionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationSubmission
     */
    select?: ApplicationSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApplicationSubmission
     */
    omit?: ApplicationSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationSubmissionInclude<ExtArgs> | null
    /**
     * Filter, which ApplicationSubmissions to fetch.
     */
    where?: ApplicationSubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApplicationSubmissions to fetch.
     */
    orderBy?: ApplicationSubmissionOrderByWithRelationInput | ApplicationSubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ApplicationSubmissions.
     */
    cursor?: ApplicationSubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApplicationSubmissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApplicationSubmissions.
     */
    skip?: number
    distinct?: ApplicationSubmissionScalarFieldEnum | ApplicationSubmissionScalarFieldEnum[]
  }

  /**
   * ApplicationSubmission create
   */
  export type ApplicationSubmissionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationSubmission
     */
    select?: ApplicationSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApplicationSubmission
     */
    omit?: ApplicationSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationSubmissionInclude<ExtArgs> | null
    /**
     * The data needed to create a ApplicationSubmission.
     */
    data: XOR<ApplicationSubmissionCreateInput, ApplicationSubmissionUncheckedCreateInput>
  }

  /**
   * ApplicationSubmission createMany
   */
  export type ApplicationSubmissionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ApplicationSubmissions.
     */
    data: ApplicationSubmissionCreateManyInput | ApplicationSubmissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ApplicationSubmission createManyAndReturn
   */
  export type ApplicationSubmissionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationSubmission
     */
    select?: ApplicationSubmissionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ApplicationSubmission
     */
    omit?: ApplicationSubmissionOmit<ExtArgs> | null
    /**
     * The data used to create many ApplicationSubmissions.
     */
    data: ApplicationSubmissionCreateManyInput | ApplicationSubmissionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationSubmissionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ApplicationSubmission update
   */
  export type ApplicationSubmissionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationSubmission
     */
    select?: ApplicationSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApplicationSubmission
     */
    omit?: ApplicationSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationSubmissionInclude<ExtArgs> | null
    /**
     * The data needed to update a ApplicationSubmission.
     */
    data: XOR<ApplicationSubmissionUpdateInput, ApplicationSubmissionUncheckedUpdateInput>
    /**
     * Choose, which ApplicationSubmission to update.
     */
    where: ApplicationSubmissionWhereUniqueInput
  }

  /**
   * ApplicationSubmission updateMany
   */
  export type ApplicationSubmissionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ApplicationSubmissions.
     */
    data: XOR<ApplicationSubmissionUpdateManyMutationInput, ApplicationSubmissionUncheckedUpdateManyInput>
    /**
     * Filter which ApplicationSubmissions to update
     */
    where?: ApplicationSubmissionWhereInput
    /**
     * Limit how many ApplicationSubmissions to update.
     */
    limit?: number
  }

  /**
   * ApplicationSubmission updateManyAndReturn
   */
  export type ApplicationSubmissionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationSubmission
     */
    select?: ApplicationSubmissionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ApplicationSubmission
     */
    omit?: ApplicationSubmissionOmit<ExtArgs> | null
    /**
     * The data used to update ApplicationSubmissions.
     */
    data: XOR<ApplicationSubmissionUpdateManyMutationInput, ApplicationSubmissionUncheckedUpdateManyInput>
    /**
     * Filter which ApplicationSubmissions to update
     */
    where?: ApplicationSubmissionWhereInput
    /**
     * Limit how many ApplicationSubmissions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationSubmissionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ApplicationSubmission upsert
   */
  export type ApplicationSubmissionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationSubmission
     */
    select?: ApplicationSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApplicationSubmission
     */
    omit?: ApplicationSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationSubmissionInclude<ExtArgs> | null
    /**
     * The filter to search for the ApplicationSubmission to update in case it exists.
     */
    where: ApplicationSubmissionWhereUniqueInput
    /**
     * In case the ApplicationSubmission found by the `where` argument doesn't exist, create a new ApplicationSubmission with this data.
     */
    create: XOR<ApplicationSubmissionCreateInput, ApplicationSubmissionUncheckedCreateInput>
    /**
     * In case the ApplicationSubmission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ApplicationSubmissionUpdateInput, ApplicationSubmissionUncheckedUpdateInput>
  }

  /**
   * ApplicationSubmission delete
   */
  export type ApplicationSubmissionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationSubmission
     */
    select?: ApplicationSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApplicationSubmission
     */
    omit?: ApplicationSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationSubmissionInclude<ExtArgs> | null
    /**
     * Filter which ApplicationSubmission to delete.
     */
    where: ApplicationSubmissionWhereUniqueInput
  }

  /**
   * ApplicationSubmission deleteMany
   */
  export type ApplicationSubmissionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ApplicationSubmissions to delete
     */
    where?: ApplicationSubmissionWhereInput
    /**
     * Limit how many ApplicationSubmissions to delete.
     */
    limit?: number
  }

  /**
   * ApplicationSubmission.reviewedBy
   */
  export type ApplicationSubmission$reviewedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * ApplicationSubmission without action
   */
  export type ApplicationSubmissionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationSubmission
     */
    select?: ApplicationSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApplicationSubmission
     */
    omit?: ApplicationSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationSubmissionInclude<ExtArgs> | null
  }


  /**
   * Model ApplicationDocument
   */

  export type AggregateApplicationDocument = {
    _count: ApplicationDocumentCountAggregateOutputType | null
    _avg: ApplicationDocumentAvgAggregateOutputType | null
    _sum: ApplicationDocumentSumAggregateOutputType | null
    _min: ApplicationDocumentMinAggregateOutputType | null
    _max: ApplicationDocumentMaxAggregateOutputType | null
  }

  export type ApplicationDocumentAvgAggregateOutputType = {
    id: number | null
    applicationId: number | null
    fileSize: number | null
  }

  export type ApplicationDocumentSumAggregateOutputType = {
    id: number | null
    applicationId: number | null
    fileSize: number | null
  }

  export type ApplicationDocumentMinAggregateOutputType = {
    id: number | null
    applicationId: number | null
    documentType: string | null
    documentUrl: string | null
    fileName: string | null
    fileSize: number | null
    uploadedAt: Date | null
  }

  export type ApplicationDocumentMaxAggregateOutputType = {
    id: number | null
    applicationId: number | null
    documentType: string | null
    documentUrl: string | null
    fileName: string | null
    fileSize: number | null
    uploadedAt: Date | null
  }

  export type ApplicationDocumentCountAggregateOutputType = {
    id: number
    applicationId: number
    documentType: number
    documentUrl: number
    fileName: number
    fileSize: number
    uploadedAt: number
    _all: number
  }


  export type ApplicationDocumentAvgAggregateInputType = {
    id?: true
    applicationId?: true
    fileSize?: true
  }

  export type ApplicationDocumentSumAggregateInputType = {
    id?: true
    applicationId?: true
    fileSize?: true
  }

  export type ApplicationDocumentMinAggregateInputType = {
    id?: true
    applicationId?: true
    documentType?: true
    documentUrl?: true
    fileName?: true
    fileSize?: true
    uploadedAt?: true
  }

  export type ApplicationDocumentMaxAggregateInputType = {
    id?: true
    applicationId?: true
    documentType?: true
    documentUrl?: true
    fileName?: true
    fileSize?: true
    uploadedAt?: true
  }

  export type ApplicationDocumentCountAggregateInputType = {
    id?: true
    applicationId?: true
    documentType?: true
    documentUrl?: true
    fileName?: true
    fileSize?: true
    uploadedAt?: true
    _all?: true
  }

  export type ApplicationDocumentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ApplicationDocument to aggregate.
     */
    where?: ApplicationDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApplicationDocuments to fetch.
     */
    orderBy?: ApplicationDocumentOrderByWithRelationInput | ApplicationDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ApplicationDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApplicationDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApplicationDocuments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ApplicationDocuments
    **/
    _count?: true | ApplicationDocumentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ApplicationDocumentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ApplicationDocumentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ApplicationDocumentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ApplicationDocumentMaxAggregateInputType
  }

  export type GetApplicationDocumentAggregateType<T extends ApplicationDocumentAggregateArgs> = {
        [P in keyof T & keyof AggregateApplicationDocument]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApplicationDocument[P]>
      : GetScalarType<T[P], AggregateApplicationDocument[P]>
  }




  export type ApplicationDocumentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApplicationDocumentWhereInput
    orderBy?: ApplicationDocumentOrderByWithAggregationInput | ApplicationDocumentOrderByWithAggregationInput[]
    by: ApplicationDocumentScalarFieldEnum[] | ApplicationDocumentScalarFieldEnum
    having?: ApplicationDocumentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ApplicationDocumentCountAggregateInputType | true
    _avg?: ApplicationDocumentAvgAggregateInputType
    _sum?: ApplicationDocumentSumAggregateInputType
    _min?: ApplicationDocumentMinAggregateInputType
    _max?: ApplicationDocumentMaxAggregateInputType
  }

  export type ApplicationDocumentGroupByOutputType = {
    id: number
    applicationId: number
    documentType: string
    documentUrl: string
    fileName: string
    fileSize: number
    uploadedAt: Date
    _count: ApplicationDocumentCountAggregateOutputType | null
    _avg: ApplicationDocumentAvgAggregateOutputType | null
    _sum: ApplicationDocumentSumAggregateOutputType | null
    _min: ApplicationDocumentMinAggregateOutputType | null
    _max: ApplicationDocumentMaxAggregateOutputType | null
  }

  type GetApplicationDocumentGroupByPayload<T extends ApplicationDocumentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ApplicationDocumentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ApplicationDocumentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ApplicationDocumentGroupByOutputType[P]>
            : GetScalarType<T[P], ApplicationDocumentGroupByOutputType[P]>
        }
      >
    >


  export type ApplicationDocumentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    applicationId?: boolean
    documentType?: boolean
    documentUrl?: boolean
    fileName?: boolean
    fileSize?: boolean
    uploadedAt?: boolean
    application?: boolean | RentalApplicationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["applicationDocument"]>

  export type ApplicationDocumentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    applicationId?: boolean
    documentType?: boolean
    documentUrl?: boolean
    fileName?: boolean
    fileSize?: boolean
    uploadedAt?: boolean
    application?: boolean | RentalApplicationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["applicationDocument"]>

  export type ApplicationDocumentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    applicationId?: boolean
    documentType?: boolean
    documentUrl?: boolean
    fileName?: boolean
    fileSize?: boolean
    uploadedAt?: boolean
    application?: boolean | RentalApplicationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["applicationDocument"]>

  export type ApplicationDocumentSelectScalar = {
    id?: boolean
    applicationId?: boolean
    documentType?: boolean
    documentUrl?: boolean
    fileName?: boolean
    fileSize?: boolean
    uploadedAt?: boolean
  }

  export type ApplicationDocumentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "applicationId" | "documentType" | "documentUrl" | "fileName" | "fileSize" | "uploadedAt", ExtArgs["result"]["applicationDocument"]>
  export type ApplicationDocumentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    application?: boolean | RentalApplicationDefaultArgs<ExtArgs>
  }
  export type ApplicationDocumentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    application?: boolean | RentalApplicationDefaultArgs<ExtArgs>
  }
  export type ApplicationDocumentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    application?: boolean | RentalApplicationDefaultArgs<ExtArgs>
  }

  export type $ApplicationDocumentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ApplicationDocument"
    objects: {
      application: Prisma.$RentalApplicationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      applicationId: number
      documentType: string
      documentUrl: string
      fileName: string
      fileSize: number
      uploadedAt: Date
    }, ExtArgs["result"]["applicationDocument"]>
    composites: {}
  }

  type ApplicationDocumentGetPayload<S extends boolean | null | undefined | ApplicationDocumentDefaultArgs> = $Result.GetResult<Prisma.$ApplicationDocumentPayload, S>

  type ApplicationDocumentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ApplicationDocumentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ApplicationDocumentCountAggregateInputType | true
    }

  export interface ApplicationDocumentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ApplicationDocument'], meta: { name: 'ApplicationDocument' } }
    /**
     * Find zero or one ApplicationDocument that matches the filter.
     * @param {ApplicationDocumentFindUniqueArgs} args - Arguments to find a ApplicationDocument
     * @example
     * // Get one ApplicationDocument
     * const applicationDocument = await prisma.applicationDocument.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ApplicationDocumentFindUniqueArgs>(args: SelectSubset<T, ApplicationDocumentFindUniqueArgs<ExtArgs>>): Prisma__ApplicationDocumentClient<$Result.GetResult<Prisma.$ApplicationDocumentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ApplicationDocument that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ApplicationDocumentFindUniqueOrThrowArgs} args - Arguments to find a ApplicationDocument
     * @example
     * // Get one ApplicationDocument
     * const applicationDocument = await prisma.applicationDocument.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ApplicationDocumentFindUniqueOrThrowArgs>(args: SelectSubset<T, ApplicationDocumentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ApplicationDocumentClient<$Result.GetResult<Prisma.$ApplicationDocumentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ApplicationDocument that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationDocumentFindFirstArgs} args - Arguments to find a ApplicationDocument
     * @example
     * // Get one ApplicationDocument
     * const applicationDocument = await prisma.applicationDocument.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ApplicationDocumentFindFirstArgs>(args?: SelectSubset<T, ApplicationDocumentFindFirstArgs<ExtArgs>>): Prisma__ApplicationDocumentClient<$Result.GetResult<Prisma.$ApplicationDocumentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ApplicationDocument that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationDocumentFindFirstOrThrowArgs} args - Arguments to find a ApplicationDocument
     * @example
     * // Get one ApplicationDocument
     * const applicationDocument = await prisma.applicationDocument.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ApplicationDocumentFindFirstOrThrowArgs>(args?: SelectSubset<T, ApplicationDocumentFindFirstOrThrowArgs<ExtArgs>>): Prisma__ApplicationDocumentClient<$Result.GetResult<Prisma.$ApplicationDocumentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ApplicationDocuments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationDocumentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ApplicationDocuments
     * const applicationDocuments = await prisma.applicationDocument.findMany()
     * 
     * // Get first 10 ApplicationDocuments
     * const applicationDocuments = await prisma.applicationDocument.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const applicationDocumentWithIdOnly = await prisma.applicationDocument.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ApplicationDocumentFindManyArgs>(args?: SelectSubset<T, ApplicationDocumentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationDocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ApplicationDocument.
     * @param {ApplicationDocumentCreateArgs} args - Arguments to create a ApplicationDocument.
     * @example
     * // Create one ApplicationDocument
     * const ApplicationDocument = await prisma.applicationDocument.create({
     *   data: {
     *     // ... data to create a ApplicationDocument
     *   }
     * })
     * 
     */
    create<T extends ApplicationDocumentCreateArgs>(args: SelectSubset<T, ApplicationDocumentCreateArgs<ExtArgs>>): Prisma__ApplicationDocumentClient<$Result.GetResult<Prisma.$ApplicationDocumentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ApplicationDocuments.
     * @param {ApplicationDocumentCreateManyArgs} args - Arguments to create many ApplicationDocuments.
     * @example
     * // Create many ApplicationDocuments
     * const applicationDocument = await prisma.applicationDocument.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ApplicationDocumentCreateManyArgs>(args?: SelectSubset<T, ApplicationDocumentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ApplicationDocuments and returns the data saved in the database.
     * @param {ApplicationDocumentCreateManyAndReturnArgs} args - Arguments to create many ApplicationDocuments.
     * @example
     * // Create many ApplicationDocuments
     * const applicationDocument = await prisma.applicationDocument.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ApplicationDocuments and only return the `id`
     * const applicationDocumentWithIdOnly = await prisma.applicationDocument.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ApplicationDocumentCreateManyAndReturnArgs>(args?: SelectSubset<T, ApplicationDocumentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationDocumentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ApplicationDocument.
     * @param {ApplicationDocumentDeleteArgs} args - Arguments to delete one ApplicationDocument.
     * @example
     * // Delete one ApplicationDocument
     * const ApplicationDocument = await prisma.applicationDocument.delete({
     *   where: {
     *     // ... filter to delete one ApplicationDocument
     *   }
     * })
     * 
     */
    delete<T extends ApplicationDocumentDeleteArgs>(args: SelectSubset<T, ApplicationDocumentDeleteArgs<ExtArgs>>): Prisma__ApplicationDocumentClient<$Result.GetResult<Prisma.$ApplicationDocumentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ApplicationDocument.
     * @param {ApplicationDocumentUpdateArgs} args - Arguments to update one ApplicationDocument.
     * @example
     * // Update one ApplicationDocument
     * const applicationDocument = await prisma.applicationDocument.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ApplicationDocumentUpdateArgs>(args: SelectSubset<T, ApplicationDocumentUpdateArgs<ExtArgs>>): Prisma__ApplicationDocumentClient<$Result.GetResult<Prisma.$ApplicationDocumentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ApplicationDocuments.
     * @param {ApplicationDocumentDeleteManyArgs} args - Arguments to filter ApplicationDocuments to delete.
     * @example
     * // Delete a few ApplicationDocuments
     * const { count } = await prisma.applicationDocument.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ApplicationDocumentDeleteManyArgs>(args?: SelectSubset<T, ApplicationDocumentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ApplicationDocuments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationDocumentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ApplicationDocuments
     * const applicationDocument = await prisma.applicationDocument.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ApplicationDocumentUpdateManyArgs>(args: SelectSubset<T, ApplicationDocumentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ApplicationDocuments and returns the data updated in the database.
     * @param {ApplicationDocumentUpdateManyAndReturnArgs} args - Arguments to update many ApplicationDocuments.
     * @example
     * // Update many ApplicationDocuments
     * const applicationDocument = await prisma.applicationDocument.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ApplicationDocuments and only return the `id`
     * const applicationDocumentWithIdOnly = await prisma.applicationDocument.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ApplicationDocumentUpdateManyAndReturnArgs>(args: SelectSubset<T, ApplicationDocumentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationDocumentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ApplicationDocument.
     * @param {ApplicationDocumentUpsertArgs} args - Arguments to update or create a ApplicationDocument.
     * @example
     * // Update or create a ApplicationDocument
     * const applicationDocument = await prisma.applicationDocument.upsert({
     *   create: {
     *     // ... data to create a ApplicationDocument
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ApplicationDocument we want to update
     *   }
     * })
     */
    upsert<T extends ApplicationDocumentUpsertArgs>(args: SelectSubset<T, ApplicationDocumentUpsertArgs<ExtArgs>>): Prisma__ApplicationDocumentClient<$Result.GetResult<Prisma.$ApplicationDocumentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ApplicationDocuments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationDocumentCountArgs} args - Arguments to filter ApplicationDocuments to count.
     * @example
     * // Count the number of ApplicationDocuments
     * const count = await prisma.applicationDocument.count({
     *   where: {
     *     // ... the filter for the ApplicationDocuments we want to count
     *   }
     * })
    **/
    count<T extends ApplicationDocumentCountArgs>(
      args?: Subset<T, ApplicationDocumentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ApplicationDocumentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ApplicationDocument.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationDocumentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ApplicationDocumentAggregateArgs>(args: Subset<T, ApplicationDocumentAggregateArgs>): Prisma.PrismaPromise<GetApplicationDocumentAggregateType<T>>

    /**
     * Group by ApplicationDocument.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationDocumentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ApplicationDocumentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ApplicationDocumentGroupByArgs['orderBy'] }
        : { orderBy?: ApplicationDocumentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ApplicationDocumentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApplicationDocumentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ApplicationDocument model
   */
  readonly fields: ApplicationDocumentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ApplicationDocument.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ApplicationDocumentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    application<T extends RentalApplicationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RentalApplicationDefaultArgs<ExtArgs>>): Prisma__RentalApplicationClient<$Result.GetResult<Prisma.$RentalApplicationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ApplicationDocument model
   */
  interface ApplicationDocumentFieldRefs {
    readonly id: FieldRef<"ApplicationDocument", 'Int'>
    readonly applicationId: FieldRef<"ApplicationDocument", 'Int'>
    readonly documentType: FieldRef<"ApplicationDocument", 'String'>
    readonly documentUrl: FieldRef<"ApplicationDocument", 'String'>
    readonly fileName: FieldRef<"ApplicationDocument", 'String'>
    readonly fileSize: FieldRef<"ApplicationDocument", 'Int'>
    readonly uploadedAt: FieldRef<"ApplicationDocument", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ApplicationDocument findUnique
   */
  export type ApplicationDocumentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationDocument
     */
    select?: ApplicationDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApplicationDocument
     */
    omit?: ApplicationDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationDocumentInclude<ExtArgs> | null
    /**
     * Filter, which ApplicationDocument to fetch.
     */
    where: ApplicationDocumentWhereUniqueInput
  }

  /**
   * ApplicationDocument findUniqueOrThrow
   */
  export type ApplicationDocumentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationDocument
     */
    select?: ApplicationDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApplicationDocument
     */
    omit?: ApplicationDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationDocumentInclude<ExtArgs> | null
    /**
     * Filter, which ApplicationDocument to fetch.
     */
    where: ApplicationDocumentWhereUniqueInput
  }

  /**
   * ApplicationDocument findFirst
   */
  export type ApplicationDocumentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationDocument
     */
    select?: ApplicationDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApplicationDocument
     */
    omit?: ApplicationDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationDocumentInclude<ExtArgs> | null
    /**
     * Filter, which ApplicationDocument to fetch.
     */
    where?: ApplicationDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApplicationDocuments to fetch.
     */
    orderBy?: ApplicationDocumentOrderByWithRelationInput | ApplicationDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ApplicationDocuments.
     */
    cursor?: ApplicationDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApplicationDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApplicationDocuments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApplicationDocuments.
     */
    distinct?: ApplicationDocumentScalarFieldEnum | ApplicationDocumentScalarFieldEnum[]
  }

  /**
   * ApplicationDocument findFirstOrThrow
   */
  export type ApplicationDocumentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationDocument
     */
    select?: ApplicationDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApplicationDocument
     */
    omit?: ApplicationDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationDocumentInclude<ExtArgs> | null
    /**
     * Filter, which ApplicationDocument to fetch.
     */
    where?: ApplicationDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApplicationDocuments to fetch.
     */
    orderBy?: ApplicationDocumentOrderByWithRelationInput | ApplicationDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ApplicationDocuments.
     */
    cursor?: ApplicationDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApplicationDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApplicationDocuments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApplicationDocuments.
     */
    distinct?: ApplicationDocumentScalarFieldEnum | ApplicationDocumentScalarFieldEnum[]
  }

  /**
   * ApplicationDocument findMany
   */
  export type ApplicationDocumentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationDocument
     */
    select?: ApplicationDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApplicationDocument
     */
    omit?: ApplicationDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationDocumentInclude<ExtArgs> | null
    /**
     * Filter, which ApplicationDocuments to fetch.
     */
    where?: ApplicationDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApplicationDocuments to fetch.
     */
    orderBy?: ApplicationDocumentOrderByWithRelationInput | ApplicationDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ApplicationDocuments.
     */
    cursor?: ApplicationDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApplicationDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApplicationDocuments.
     */
    skip?: number
    distinct?: ApplicationDocumentScalarFieldEnum | ApplicationDocumentScalarFieldEnum[]
  }

  /**
   * ApplicationDocument create
   */
  export type ApplicationDocumentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationDocument
     */
    select?: ApplicationDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApplicationDocument
     */
    omit?: ApplicationDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationDocumentInclude<ExtArgs> | null
    /**
     * The data needed to create a ApplicationDocument.
     */
    data: XOR<ApplicationDocumentCreateInput, ApplicationDocumentUncheckedCreateInput>
  }

  /**
   * ApplicationDocument createMany
   */
  export type ApplicationDocumentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ApplicationDocuments.
     */
    data: ApplicationDocumentCreateManyInput | ApplicationDocumentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ApplicationDocument createManyAndReturn
   */
  export type ApplicationDocumentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationDocument
     */
    select?: ApplicationDocumentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ApplicationDocument
     */
    omit?: ApplicationDocumentOmit<ExtArgs> | null
    /**
     * The data used to create many ApplicationDocuments.
     */
    data: ApplicationDocumentCreateManyInput | ApplicationDocumentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationDocumentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ApplicationDocument update
   */
  export type ApplicationDocumentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationDocument
     */
    select?: ApplicationDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApplicationDocument
     */
    omit?: ApplicationDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationDocumentInclude<ExtArgs> | null
    /**
     * The data needed to update a ApplicationDocument.
     */
    data: XOR<ApplicationDocumentUpdateInput, ApplicationDocumentUncheckedUpdateInput>
    /**
     * Choose, which ApplicationDocument to update.
     */
    where: ApplicationDocumentWhereUniqueInput
  }

  /**
   * ApplicationDocument updateMany
   */
  export type ApplicationDocumentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ApplicationDocuments.
     */
    data: XOR<ApplicationDocumentUpdateManyMutationInput, ApplicationDocumentUncheckedUpdateManyInput>
    /**
     * Filter which ApplicationDocuments to update
     */
    where?: ApplicationDocumentWhereInput
    /**
     * Limit how many ApplicationDocuments to update.
     */
    limit?: number
  }

  /**
   * ApplicationDocument updateManyAndReturn
   */
  export type ApplicationDocumentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationDocument
     */
    select?: ApplicationDocumentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ApplicationDocument
     */
    omit?: ApplicationDocumentOmit<ExtArgs> | null
    /**
     * The data used to update ApplicationDocuments.
     */
    data: XOR<ApplicationDocumentUpdateManyMutationInput, ApplicationDocumentUncheckedUpdateManyInput>
    /**
     * Filter which ApplicationDocuments to update
     */
    where?: ApplicationDocumentWhereInput
    /**
     * Limit how many ApplicationDocuments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationDocumentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ApplicationDocument upsert
   */
  export type ApplicationDocumentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationDocument
     */
    select?: ApplicationDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApplicationDocument
     */
    omit?: ApplicationDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationDocumentInclude<ExtArgs> | null
    /**
     * The filter to search for the ApplicationDocument to update in case it exists.
     */
    where: ApplicationDocumentWhereUniqueInput
    /**
     * In case the ApplicationDocument found by the `where` argument doesn't exist, create a new ApplicationDocument with this data.
     */
    create: XOR<ApplicationDocumentCreateInput, ApplicationDocumentUncheckedCreateInput>
    /**
     * In case the ApplicationDocument was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ApplicationDocumentUpdateInput, ApplicationDocumentUncheckedUpdateInput>
  }

  /**
   * ApplicationDocument delete
   */
  export type ApplicationDocumentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationDocument
     */
    select?: ApplicationDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApplicationDocument
     */
    omit?: ApplicationDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationDocumentInclude<ExtArgs> | null
    /**
     * Filter which ApplicationDocument to delete.
     */
    where: ApplicationDocumentWhereUniqueInput
  }

  /**
   * ApplicationDocument deleteMany
   */
  export type ApplicationDocumentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ApplicationDocuments to delete
     */
    where?: ApplicationDocumentWhereInput
    /**
     * Limit how many ApplicationDocuments to delete.
     */
    limit?: number
  }

  /**
   * ApplicationDocument without action
   */
  export type ApplicationDocumentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationDocument
     */
    select?: ApplicationDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApplicationDocument
     */
    omit?: ApplicationDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationDocumentInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    password: 'password',
    email: 'email',
    name: 'name',
    avatar: 'avatar',
    isAdmin: 'isAdmin',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const PropertyScalarFieldEnum: {
    id: 'id',
    title: 'title',
    address: 'address',
    city: 'city',
    state: 'state',
    zipCode: 'zipCode',
    price: 'price',
    bedrooms: 'bedrooms',
    bathrooms: 'bathrooms',
    squareFeet: 'squareFeet',
    description: 'description',
    propertyType: 'propertyType',
    status: 'status',
    isRental: 'isRental',
    rentalPrice: 'rentalPrice',
    featuredImage: 'featuredImage',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    createdById: 'createdById',
    acres: 'acres',
    yearBuilt: 'yearBuilt',
    displayOnHomepage: 'displayOnHomepage'
  };

  export type PropertyScalarFieldEnum = (typeof PropertyScalarFieldEnum)[keyof typeof PropertyScalarFieldEnum]


  export const PropertyImageScalarFieldEnum: {
    id: 'id',
    propertyId: 'propertyId',
    imageUrl: 'imageUrl',
    caption: 'caption',
    displayOrder: 'displayOrder',
    createdAt: 'createdAt'
  };

  export type PropertyImageScalarFieldEnum = (typeof PropertyImageScalarFieldEnum)[keyof typeof PropertyImageScalarFieldEnum]


  export const EmailSubscriptionScalarFieldEnum: {
    id: 'id',
    email: 'email',
    createdAt: 'createdAt',
    isActive: 'isActive'
  };

  export type EmailSubscriptionScalarFieldEnum = (typeof EmailSubscriptionScalarFieldEnum)[keyof typeof EmailSubscriptionScalarFieldEnum]


  export const CashOfferRequestScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    phone: 'phone',
    address: 'address',
    city: 'city',
    state: 'state',
    zipCode: 'zipCode',
    propertyType: 'propertyType',
    condition: 'condition',
    timeframe: 'timeframe',
    additionalInfo: 'additionalInfo',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CashOfferRequestScalarFieldEnum = (typeof CashOfferRequestScalarFieldEnum)[keyof typeof CashOfferRequestScalarFieldEnum]


  export const TestimonialScalarFieldEnum: {
    id: 'id',
    name: 'name',
    location: 'location',
    rating: 'rating',
    comment: 'comment',
    isActive: 'isActive',
    createdAt: 'createdAt'
  };

  export type TestimonialScalarFieldEnum = (typeof TestimonialScalarFieldEnum)[keyof typeof TestimonialScalarFieldEnum]


  export const RentalApplicationScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    phone: 'phone',
    currentAddress: 'currentAddress',
    city: 'city',
    state: 'state',
    zipCode: 'zipCode',
    moveInDate: 'moveInDate',
    employer: 'employer',
    occupation: 'occupation',
    monthlyIncome: 'monthlyIncome',
    additionalOccupants: 'additionalOccupants',
    pets: 'pets',
    petDetails: 'petDetails',
    creditScore: 'creditScore',
    hasEvictions: 'hasEvictions',
    hasFelonies: 'hasFelonies',
    additionalInfo: 'additionalInfo',
    isComplete: 'isComplete',
    isVerified: 'isVerified',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RentalApplicationScalarFieldEnum = (typeof RentalApplicationScalarFieldEnum)[keyof typeof RentalApplicationScalarFieldEnum]


  export const ApplicationSubmissionScalarFieldEnum: {
    id: 'id',
    applicationId: 'applicationId',
    propertyId: 'propertyId',
    status: 'status',
    notes: 'notes',
    reviewedById: 'reviewedById',
    reviewedAt: 'reviewedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ApplicationSubmissionScalarFieldEnum = (typeof ApplicationSubmissionScalarFieldEnum)[keyof typeof ApplicationSubmissionScalarFieldEnum]


  export const ApplicationDocumentScalarFieldEnum: {
    id: 'id',
    applicationId: 'applicationId',
    documentType: 'documentType',
    documentUrl: 'documentUrl',
    fileName: 'fileName',
    fileSize: 'fileSize',
    uploadedAt: 'uploadedAt'
  };

  export type ApplicationDocumentScalarFieldEnum = (typeof ApplicationDocumentScalarFieldEnum)[keyof typeof ApplicationDocumentScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    avatar?: StringNullableFilter<"User"> | string | null
    isAdmin?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    properties?: PropertyListRelationFilter
    rentalApplications?: RentalApplicationListRelationFilter
    reviewedSubmissions?: ApplicationSubmissionListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    isAdmin?: SortOrder
    createdAt?: SortOrder
    properties?: PropertyOrderByRelationAggregateInput
    rentalApplications?: RentalApplicationOrderByRelationAggregateInput
    reviewedSubmissions?: ApplicationSubmissionOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    avatar?: StringNullableFilter<"User"> | string | null
    isAdmin?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    properties?: PropertyListRelationFilter
    rentalApplications?: RentalApplicationListRelationFilter
    reviewedSubmissions?: ApplicationSubmissionListRelationFilter
  }, "id" | "username" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    isAdmin?: SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    username?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    avatar?: StringNullableWithAggregatesFilter<"User"> | string | null
    isAdmin?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type PropertyWhereInput = {
    AND?: PropertyWhereInput | PropertyWhereInput[]
    OR?: PropertyWhereInput[]
    NOT?: PropertyWhereInput | PropertyWhereInput[]
    id?: IntFilter<"Property"> | number
    title?: StringFilter<"Property"> | string
    address?: StringFilter<"Property"> | string
    city?: StringFilter<"Property"> | string
    state?: StringFilter<"Property"> | string
    zipCode?: StringFilter<"Property"> | string
    price?: IntFilter<"Property"> | number
    bedrooms?: IntFilter<"Property"> | number
    bathrooms?: IntFilter<"Property"> | number
    squareFeet?: IntFilter<"Property"> | number
    description?: StringFilter<"Property"> | string
    propertyType?: StringFilter<"Property"> | string
    status?: StringFilter<"Property"> | string
    isRental?: BoolFilter<"Property"> | boolean
    rentalPrice?: IntNullableFilter<"Property"> | number | null
    featuredImage?: StringNullableFilter<"Property"> | string | null
    createdAt?: DateTimeFilter<"Property"> | Date | string
    updatedAt?: DateTimeFilter<"Property"> | Date | string
    createdById?: IntNullableFilter<"Property"> | number | null
    acres?: StringNullableFilter<"Property"> | string | null
    yearBuilt?: IntNullableFilter<"Property"> | number | null
    displayOnHomepage?: BoolFilter<"Property"> | boolean
    createdBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    images?: PropertyImageListRelationFilter
  }

  export type PropertyOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zipCode?: SortOrder
    price?: SortOrder
    bedrooms?: SortOrder
    bathrooms?: SortOrder
    squareFeet?: SortOrder
    description?: SortOrder
    propertyType?: SortOrder
    status?: SortOrder
    isRental?: SortOrder
    rentalPrice?: SortOrderInput | SortOrder
    featuredImage?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrderInput | SortOrder
    acres?: SortOrderInput | SortOrder
    yearBuilt?: SortOrderInput | SortOrder
    displayOnHomepage?: SortOrder
    createdBy?: UserOrderByWithRelationInput
    images?: PropertyImageOrderByRelationAggregateInput
  }

  export type PropertyWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PropertyWhereInput | PropertyWhereInput[]
    OR?: PropertyWhereInput[]
    NOT?: PropertyWhereInput | PropertyWhereInput[]
    title?: StringFilter<"Property"> | string
    address?: StringFilter<"Property"> | string
    city?: StringFilter<"Property"> | string
    state?: StringFilter<"Property"> | string
    zipCode?: StringFilter<"Property"> | string
    price?: IntFilter<"Property"> | number
    bedrooms?: IntFilter<"Property"> | number
    bathrooms?: IntFilter<"Property"> | number
    squareFeet?: IntFilter<"Property"> | number
    description?: StringFilter<"Property"> | string
    propertyType?: StringFilter<"Property"> | string
    status?: StringFilter<"Property"> | string
    isRental?: BoolFilter<"Property"> | boolean
    rentalPrice?: IntNullableFilter<"Property"> | number | null
    featuredImage?: StringNullableFilter<"Property"> | string | null
    createdAt?: DateTimeFilter<"Property"> | Date | string
    updatedAt?: DateTimeFilter<"Property"> | Date | string
    createdById?: IntNullableFilter<"Property"> | number | null
    acres?: StringNullableFilter<"Property"> | string | null
    yearBuilt?: IntNullableFilter<"Property"> | number | null
    displayOnHomepage?: BoolFilter<"Property"> | boolean
    createdBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    images?: PropertyImageListRelationFilter
  }, "id">

  export type PropertyOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zipCode?: SortOrder
    price?: SortOrder
    bedrooms?: SortOrder
    bathrooms?: SortOrder
    squareFeet?: SortOrder
    description?: SortOrder
    propertyType?: SortOrder
    status?: SortOrder
    isRental?: SortOrder
    rentalPrice?: SortOrderInput | SortOrder
    featuredImage?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrderInput | SortOrder
    acres?: SortOrderInput | SortOrder
    yearBuilt?: SortOrderInput | SortOrder
    displayOnHomepage?: SortOrder
    _count?: PropertyCountOrderByAggregateInput
    _avg?: PropertyAvgOrderByAggregateInput
    _max?: PropertyMaxOrderByAggregateInput
    _min?: PropertyMinOrderByAggregateInput
    _sum?: PropertySumOrderByAggregateInput
  }

  export type PropertyScalarWhereWithAggregatesInput = {
    AND?: PropertyScalarWhereWithAggregatesInput | PropertyScalarWhereWithAggregatesInput[]
    OR?: PropertyScalarWhereWithAggregatesInput[]
    NOT?: PropertyScalarWhereWithAggregatesInput | PropertyScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Property"> | number
    title?: StringWithAggregatesFilter<"Property"> | string
    address?: StringWithAggregatesFilter<"Property"> | string
    city?: StringWithAggregatesFilter<"Property"> | string
    state?: StringWithAggregatesFilter<"Property"> | string
    zipCode?: StringWithAggregatesFilter<"Property"> | string
    price?: IntWithAggregatesFilter<"Property"> | number
    bedrooms?: IntWithAggregatesFilter<"Property"> | number
    bathrooms?: IntWithAggregatesFilter<"Property"> | number
    squareFeet?: IntWithAggregatesFilter<"Property"> | number
    description?: StringWithAggregatesFilter<"Property"> | string
    propertyType?: StringWithAggregatesFilter<"Property"> | string
    status?: StringWithAggregatesFilter<"Property"> | string
    isRental?: BoolWithAggregatesFilter<"Property"> | boolean
    rentalPrice?: IntNullableWithAggregatesFilter<"Property"> | number | null
    featuredImage?: StringNullableWithAggregatesFilter<"Property"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Property"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Property"> | Date | string
    createdById?: IntNullableWithAggregatesFilter<"Property"> | number | null
    acres?: StringNullableWithAggregatesFilter<"Property"> | string | null
    yearBuilt?: IntNullableWithAggregatesFilter<"Property"> | number | null
    displayOnHomepage?: BoolWithAggregatesFilter<"Property"> | boolean
  }

  export type PropertyImageWhereInput = {
    AND?: PropertyImageWhereInput | PropertyImageWhereInput[]
    OR?: PropertyImageWhereInput[]
    NOT?: PropertyImageWhereInput | PropertyImageWhereInput[]
    id?: IntFilter<"PropertyImage"> | number
    propertyId?: IntFilter<"PropertyImage"> | number
    imageUrl?: StringFilter<"PropertyImage"> | string
    caption?: StringNullableFilter<"PropertyImage"> | string | null
    displayOrder?: IntFilter<"PropertyImage"> | number
    createdAt?: DateTimeFilter<"PropertyImage"> | Date | string
    property?: XOR<PropertyScalarRelationFilter, PropertyWhereInput>
  }

  export type PropertyImageOrderByWithRelationInput = {
    id?: SortOrder
    propertyId?: SortOrder
    imageUrl?: SortOrder
    caption?: SortOrderInput | SortOrder
    displayOrder?: SortOrder
    createdAt?: SortOrder
    property?: PropertyOrderByWithRelationInput
  }

  export type PropertyImageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PropertyImageWhereInput | PropertyImageWhereInput[]
    OR?: PropertyImageWhereInput[]
    NOT?: PropertyImageWhereInput | PropertyImageWhereInput[]
    propertyId?: IntFilter<"PropertyImage"> | number
    imageUrl?: StringFilter<"PropertyImage"> | string
    caption?: StringNullableFilter<"PropertyImage"> | string | null
    displayOrder?: IntFilter<"PropertyImage"> | number
    createdAt?: DateTimeFilter<"PropertyImage"> | Date | string
    property?: XOR<PropertyScalarRelationFilter, PropertyWhereInput>
  }, "id">

  export type PropertyImageOrderByWithAggregationInput = {
    id?: SortOrder
    propertyId?: SortOrder
    imageUrl?: SortOrder
    caption?: SortOrderInput | SortOrder
    displayOrder?: SortOrder
    createdAt?: SortOrder
    _count?: PropertyImageCountOrderByAggregateInput
    _avg?: PropertyImageAvgOrderByAggregateInput
    _max?: PropertyImageMaxOrderByAggregateInput
    _min?: PropertyImageMinOrderByAggregateInput
    _sum?: PropertyImageSumOrderByAggregateInput
  }

  export type PropertyImageScalarWhereWithAggregatesInput = {
    AND?: PropertyImageScalarWhereWithAggregatesInput | PropertyImageScalarWhereWithAggregatesInput[]
    OR?: PropertyImageScalarWhereWithAggregatesInput[]
    NOT?: PropertyImageScalarWhereWithAggregatesInput | PropertyImageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PropertyImage"> | number
    propertyId?: IntWithAggregatesFilter<"PropertyImage"> | number
    imageUrl?: StringWithAggregatesFilter<"PropertyImage"> | string
    caption?: StringNullableWithAggregatesFilter<"PropertyImage"> | string | null
    displayOrder?: IntWithAggregatesFilter<"PropertyImage"> | number
    createdAt?: DateTimeWithAggregatesFilter<"PropertyImage"> | Date | string
  }

  export type EmailSubscriptionWhereInput = {
    AND?: EmailSubscriptionWhereInput | EmailSubscriptionWhereInput[]
    OR?: EmailSubscriptionWhereInput[]
    NOT?: EmailSubscriptionWhereInput | EmailSubscriptionWhereInput[]
    id?: IntFilter<"EmailSubscription"> | number
    email?: StringFilter<"EmailSubscription"> | string
    createdAt?: DateTimeFilter<"EmailSubscription"> | Date | string
    isActive?: BoolFilter<"EmailSubscription"> | boolean
  }

  export type EmailSubscriptionOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    isActive?: SortOrder
  }

  export type EmailSubscriptionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: EmailSubscriptionWhereInput | EmailSubscriptionWhereInput[]
    OR?: EmailSubscriptionWhereInput[]
    NOT?: EmailSubscriptionWhereInput | EmailSubscriptionWhereInput[]
    createdAt?: DateTimeFilter<"EmailSubscription"> | Date | string
    isActive?: BoolFilter<"EmailSubscription"> | boolean
  }, "id" | "email">

  export type EmailSubscriptionOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    isActive?: SortOrder
    _count?: EmailSubscriptionCountOrderByAggregateInput
    _avg?: EmailSubscriptionAvgOrderByAggregateInput
    _max?: EmailSubscriptionMaxOrderByAggregateInput
    _min?: EmailSubscriptionMinOrderByAggregateInput
    _sum?: EmailSubscriptionSumOrderByAggregateInput
  }

  export type EmailSubscriptionScalarWhereWithAggregatesInput = {
    AND?: EmailSubscriptionScalarWhereWithAggregatesInput | EmailSubscriptionScalarWhereWithAggregatesInput[]
    OR?: EmailSubscriptionScalarWhereWithAggregatesInput[]
    NOT?: EmailSubscriptionScalarWhereWithAggregatesInput | EmailSubscriptionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"EmailSubscription"> | number
    email?: StringWithAggregatesFilter<"EmailSubscription"> | string
    createdAt?: DateTimeWithAggregatesFilter<"EmailSubscription"> | Date | string
    isActive?: BoolWithAggregatesFilter<"EmailSubscription"> | boolean
  }

  export type CashOfferRequestWhereInput = {
    AND?: CashOfferRequestWhereInput | CashOfferRequestWhereInput[]
    OR?: CashOfferRequestWhereInput[]
    NOT?: CashOfferRequestWhereInput | CashOfferRequestWhereInput[]
    id?: IntFilter<"CashOfferRequest"> | number
    name?: StringFilter<"CashOfferRequest"> | string
    email?: StringFilter<"CashOfferRequest"> | string
    phone?: StringFilter<"CashOfferRequest"> | string
    address?: StringFilter<"CashOfferRequest"> | string
    city?: StringFilter<"CashOfferRequest"> | string
    state?: StringFilter<"CashOfferRequest"> | string
    zipCode?: StringFilter<"CashOfferRequest"> | string
    propertyType?: StringFilter<"CashOfferRequest"> | string
    condition?: StringFilter<"CashOfferRequest"> | string
    timeframe?: StringFilter<"CashOfferRequest"> | string
    additionalInfo?: StringNullableFilter<"CashOfferRequest"> | string | null
    status?: StringFilter<"CashOfferRequest"> | string
    createdAt?: DateTimeFilter<"CashOfferRequest"> | Date | string
    updatedAt?: DateTimeFilter<"CashOfferRequest"> | Date | string
  }

  export type CashOfferRequestOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zipCode?: SortOrder
    propertyType?: SortOrder
    condition?: SortOrder
    timeframe?: SortOrder
    additionalInfo?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CashOfferRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CashOfferRequestWhereInput | CashOfferRequestWhereInput[]
    OR?: CashOfferRequestWhereInput[]
    NOT?: CashOfferRequestWhereInput | CashOfferRequestWhereInput[]
    name?: StringFilter<"CashOfferRequest"> | string
    email?: StringFilter<"CashOfferRequest"> | string
    phone?: StringFilter<"CashOfferRequest"> | string
    address?: StringFilter<"CashOfferRequest"> | string
    city?: StringFilter<"CashOfferRequest"> | string
    state?: StringFilter<"CashOfferRequest"> | string
    zipCode?: StringFilter<"CashOfferRequest"> | string
    propertyType?: StringFilter<"CashOfferRequest"> | string
    condition?: StringFilter<"CashOfferRequest"> | string
    timeframe?: StringFilter<"CashOfferRequest"> | string
    additionalInfo?: StringNullableFilter<"CashOfferRequest"> | string | null
    status?: StringFilter<"CashOfferRequest"> | string
    createdAt?: DateTimeFilter<"CashOfferRequest"> | Date | string
    updatedAt?: DateTimeFilter<"CashOfferRequest"> | Date | string
  }, "id">

  export type CashOfferRequestOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zipCode?: SortOrder
    propertyType?: SortOrder
    condition?: SortOrder
    timeframe?: SortOrder
    additionalInfo?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CashOfferRequestCountOrderByAggregateInput
    _avg?: CashOfferRequestAvgOrderByAggregateInput
    _max?: CashOfferRequestMaxOrderByAggregateInput
    _min?: CashOfferRequestMinOrderByAggregateInput
    _sum?: CashOfferRequestSumOrderByAggregateInput
  }

  export type CashOfferRequestScalarWhereWithAggregatesInput = {
    AND?: CashOfferRequestScalarWhereWithAggregatesInput | CashOfferRequestScalarWhereWithAggregatesInput[]
    OR?: CashOfferRequestScalarWhereWithAggregatesInput[]
    NOT?: CashOfferRequestScalarWhereWithAggregatesInput | CashOfferRequestScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CashOfferRequest"> | number
    name?: StringWithAggregatesFilter<"CashOfferRequest"> | string
    email?: StringWithAggregatesFilter<"CashOfferRequest"> | string
    phone?: StringWithAggregatesFilter<"CashOfferRequest"> | string
    address?: StringWithAggregatesFilter<"CashOfferRequest"> | string
    city?: StringWithAggregatesFilter<"CashOfferRequest"> | string
    state?: StringWithAggregatesFilter<"CashOfferRequest"> | string
    zipCode?: StringWithAggregatesFilter<"CashOfferRequest"> | string
    propertyType?: StringWithAggregatesFilter<"CashOfferRequest"> | string
    condition?: StringWithAggregatesFilter<"CashOfferRequest"> | string
    timeframe?: StringWithAggregatesFilter<"CashOfferRequest"> | string
    additionalInfo?: StringNullableWithAggregatesFilter<"CashOfferRequest"> | string | null
    status?: StringWithAggregatesFilter<"CashOfferRequest"> | string
    createdAt?: DateTimeWithAggregatesFilter<"CashOfferRequest"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CashOfferRequest"> | Date | string
  }

  export type TestimonialWhereInput = {
    AND?: TestimonialWhereInput | TestimonialWhereInput[]
    OR?: TestimonialWhereInput[]
    NOT?: TestimonialWhereInput | TestimonialWhereInput[]
    id?: IntFilter<"Testimonial"> | number
    name?: StringFilter<"Testimonial"> | string
    location?: StringNullableFilter<"Testimonial"> | string | null
    rating?: IntFilter<"Testimonial"> | number
    comment?: StringFilter<"Testimonial"> | string
    isActive?: BoolFilter<"Testimonial"> | boolean
    createdAt?: DateTimeFilter<"Testimonial"> | Date | string
  }

  export type TestimonialOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrderInput | SortOrder
    rating?: SortOrder
    comment?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type TestimonialWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TestimonialWhereInput | TestimonialWhereInput[]
    OR?: TestimonialWhereInput[]
    NOT?: TestimonialWhereInput | TestimonialWhereInput[]
    name?: StringFilter<"Testimonial"> | string
    location?: StringNullableFilter<"Testimonial"> | string | null
    rating?: IntFilter<"Testimonial"> | number
    comment?: StringFilter<"Testimonial"> | string
    isActive?: BoolFilter<"Testimonial"> | boolean
    createdAt?: DateTimeFilter<"Testimonial"> | Date | string
  }, "id">

  export type TestimonialOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrderInput | SortOrder
    rating?: SortOrder
    comment?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    _count?: TestimonialCountOrderByAggregateInput
    _avg?: TestimonialAvgOrderByAggregateInput
    _max?: TestimonialMaxOrderByAggregateInput
    _min?: TestimonialMinOrderByAggregateInput
    _sum?: TestimonialSumOrderByAggregateInput
  }

  export type TestimonialScalarWhereWithAggregatesInput = {
    AND?: TestimonialScalarWhereWithAggregatesInput | TestimonialScalarWhereWithAggregatesInput[]
    OR?: TestimonialScalarWhereWithAggregatesInput[]
    NOT?: TestimonialScalarWhereWithAggregatesInput | TestimonialScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Testimonial"> | number
    name?: StringWithAggregatesFilter<"Testimonial"> | string
    location?: StringNullableWithAggregatesFilter<"Testimonial"> | string | null
    rating?: IntWithAggregatesFilter<"Testimonial"> | number
    comment?: StringWithAggregatesFilter<"Testimonial"> | string
    isActive?: BoolWithAggregatesFilter<"Testimonial"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Testimonial"> | Date | string
  }

  export type RentalApplicationWhereInput = {
    AND?: RentalApplicationWhereInput | RentalApplicationWhereInput[]
    OR?: RentalApplicationWhereInput[]
    NOT?: RentalApplicationWhereInput | RentalApplicationWhereInput[]
    id?: IntFilter<"RentalApplication"> | number
    userId?: IntFilter<"RentalApplication"> | number
    firstName?: StringFilter<"RentalApplication"> | string
    lastName?: StringFilter<"RentalApplication"> | string
    email?: StringFilter<"RentalApplication"> | string
    phone?: StringFilter<"RentalApplication"> | string
    currentAddress?: StringFilter<"RentalApplication"> | string
    city?: StringFilter<"RentalApplication"> | string
    state?: StringFilter<"RentalApplication"> | string
    zipCode?: StringFilter<"RentalApplication"> | string
    moveInDate?: DateTimeFilter<"RentalApplication"> | Date | string
    employer?: StringNullableFilter<"RentalApplication"> | string | null
    occupation?: StringNullableFilter<"RentalApplication"> | string | null
    monthlyIncome?: IntFilter<"RentalApplication"> | number
    additionalOccupants?: IntFilter<"RentalApplication"> | number
    pets?: BoolFilter<"RentalApplication"> | boolean
    petDetails?: StringNullableFilter<"RentalApplication"> | string | null
    creditScore?: IntNullableFilter<"RentalApplication"> | number | null
    hasEvictions?: BoolFilter<"RentalApplication"> | boolean
    hasFelonies?: BoolFilter<"RentalApplication"> | boolean
    additionalInfo?: StringNullableFilter<"RentalApplication"> | string | null
    isComplete?: BoolFilter<"RentalApplication"> | boolean
    isVerified?: BoolFilter<"RentalApplication"> | boolean
    createdAt?: DateTimeFilter<"RentalApplication"> | Date | string
    updatedAt?: DateTimeFilter<"RentalApplication"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    submissions?: ApplicationSubmissionListRelationFilter
    documents?: ApplicationDocumentListRelationFilter
  }

  export type RentalApplicationOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    currentAddress?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zipCode?: SortOrder
    moveInDate?: SortOrder
    employer?: SortOrderInput | SortOrder
    occupation?: SortOrderInput | SortOrder
    monthlyIncome?: SortOrder
    additionalOccupants?: SortOrder
    pets?: SortOrder
    petDetails?: SortOrderInput | SortOrder
    creditScore?: SortOrderInput | SortOrder
    hasEvictions?: SortOrder
    hasFelonies?: SortOrder
    additionalInfo?: SortOrderInput | SortOrder
    isComplete?: SortOrder
    isVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    submissions?: ApplicationSubmissionOrderByRelationAggregateInput
    documents?: ApplicationDocumentOrderByRelationAggregateInput
  }

  export type RentalApplicationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RentalApplicationWhereInput | RentalApplicationWhereInput[]
    OR?: RentalApplicationWhereInput[]
    NOT?: RentalApplicationWhereInput | RentalApplicationWhereInput[]
    userId?: IntFilter<"RentalApplication"> | number
    firstName?: StringFilter<"RentalApplication"> | string
    lastName?: StringFilter<"RentalApplication"> | string
    email?: StringFilter<"RentalApplication"> | string
    phone?: StringFilter<"RentalApplication"> | string
    currentAddress?: StringFilter<"RentalApplication"> | string
    city?: StringFilter<"RentalApplication"> | string
    state?: StringFilter<"RentalApplication"> | string
    zipCode?: StringFilter<"RentalApplication"> | string
    moveInDate?: DateTimeFilter<"RentalApplication"> | Date | string
    employer?: StringNullableFilter<"RentalApplication"> | string | null
    occupation?: StringNullableFilter<"RentalApplication"> | string | null
    monthlyIncome?: IntFilter<"RentalApplication"> | number
    additionalOccupants?: IntFilter<"RentalApplication"> | number
    pets?: BoolFilter<"RentalApplication"> | boolean
    petDetails?: StringNullableFilter<"RentalApplication"> | string | null
    creditScore?: IntNullableFilter<"RentalApplication"> | number | null
    hasEvictions?: BoolFilter<"RentalApplication"> | boolean
    hasFelonies?: BoolFilter<"RentalApplication"> | boolean
    additionalInfo?: StringNullableFilter<"RentalApplication"> | string | null
    isComplete?: BoolFilter<"RentalApplication"> | boolean
    isVerified?: BoolFilter<"RentalApplication"> | boolean
    createdAt?: DateTimeFilter<"RentalApplication"> | Date | string
    updatedAt?: DateTimeFilter<"RentalApplication"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    submissions?: ApplicationSubmissionListRelationFilter
    documents?: ApplicationDocumentListRelationFilter
  }, "id">

  export type RentalApplicationOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    currentAddress?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zipCode?: SortOrder
    moveInDate?: SortOrder
    employer?: SortOrderInput | SortOrder
    occupation?: SortOrderInput | SortOrder
    monthlyIncome?: SortOrder
    additionalOccupants?: SortOrder
    pets?: SortOrder
    petDetails?: SortOrderInput | SortOrder
    creditScore?: SortOrderInput | SortOrder
    hasEvictions?: SortOrder
    hasFelonies?: SortOrder
    additionalInfo?: SortOrderInput | SortOrder
    isComplete?: SortOrder
    isVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RentalApplicationCountOrderByAggregateInput
    _avg?: RentalApplicationAvgOrderByAggregateInput
    _max?: RentalApplicationMaxOrderByAggregateInput
    _min?: RentalApplicationMinOrderByAggregateInput
    _sum?: RentalApplicationSumOrderByAggregateInput
  }

  export type RentalApplicationScalarWhereWithAggregatesInput = {
    AND?: RentalApplicationScalarWhereWithAggregatesInput | RentalApplicationScalarWhereWithAggregatesInput[]
    OR?: RentalApplicationScalarWhereWithAggregatesInput[]
    NOT?: RentalApplicationScalarWhereWithAggregatesInput | RentalApplicationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"RentalApplication"> | number
    userId?: IntWithAggregatesFilter<"RentalApplication"> | number
    firstName?: StringWithAggregatesFilter<"RentalApplication"> | string
    lastName?: StringWithAggregatesFilter<"RentalApplication"> | string
    email?: StringWithAggregatesFilter<"RentalApplication"> | string
    phone?: StringWithAggregatesFilter<"RentalApplication"> | string
    currentAddress?: StringWithAggregatesFilter<"RentalApplication"> | string
    city?: StringWithAggregatesFilter<"RentalApplication"> | string
    state?: StringWithAggregatesFilter<"RentalApplication"> | string
    zipCode?: StringWithAggregatesFilter<"RentalApplication"> | string
    moveInDate?: DateTimeWithAggregatesFilter<"RentalApplication"> | Date | string
    employer?: StringNullableWithAggregatesFilter<"RentalApplication"> | string | null
    occupation?: StringNullableWithAggregatesFilter<"RentalApplication"> | string | null
    monthlyIncome?: IntWithAggregatesFilter<"RentalApplication"> | number
    additionalOccupants?: IntWithAggregatesFilter<"RentalApplication"> | number
    pets?: BoolWithAggregatesFilter<"RentalApplication"> | boolean
    petDetails?: StringNullableWithAggregatesFilter<"RentalApplication"> | string | null
    creditScore?: IntNullableWithAggregatesFilter<"RentalApplication"> | number | null
    hasEvictions?: BoolWithAggregatesFilter<"RentalApplication"> | boolean
    hasFelonies?: BoolWithAggregatesFilter<"RentalApplication"> | boolean
    additionalInfo?: StringNullableWithAggregatesFilter<"RentalApplication"> | string | null
    isComplete?: BoolWithAggregatesFilter<"RentalApplication"> | boolean
    isVerified?: BoolWithAggregatesFilter<"RentalApplication"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"RentalApplication"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"RentalApplication"> | Date | string
  }

  export type ApplicationSubmissionWhereInput = {
    AND?: ApplicationSubmissionWhereInput | ApplicationSubmissionWhereInput[]
    OR?: ApplicationSubmissionWhereInput[]
    NOT?: ApplicationSubmissionWhereInput | ApplicationSubmissionWhereInput[]
    id?: IntFilter<"ApplicationSubmission"> | number
    applicationId?: IntFilter<"ApplicationSubmission"> | number
    propertyId?: IntFilter<"ApplicationSubmission"> | number
    status?: StringFilter<"ApplicationSubmission"> | string
    notes?: StringNullableFilter<"ApplicationSubmission"> | string | null
    reviewedById?: IntNullableFilter<"ApplicationSubmission"> | number | null
    reviewedAt?: DateTimeNullableFilter<"ApplicationSubmission"> | Date | string | null
    createdAt?: DateTimeFilter<"ApplicationSubmission"> | Date | string
    updatedAt?: DateTimeFilter<"ApplicationSubmission"> | Date | string
    application?: XOR<RentalApplicationScalarRelationFilter, RentalApplicationWhereInput>
    reviewedBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type ApplicationSubmissionOrderByWithRelationInput = {
    id?: SortOrder
    applicationId?: SortOrder
    propertyId?: SortOrder
    status?: SortOrder
    notes?: SortOrderInput | SortOrder
    reviewedById?: SortOrderInput | SortOrder
    reviewedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    application?: RentalApplicationOrderByWithRelationInput
    reviewedBy?: UserOrderByWithRelationInput
  }

  export type ApplicationSubmissionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ApplicationSubmissionWhereInput | ApplicationSubmissionWhereInput[]
    OR?: ApplicationSubmissionWhereInput[]
    NOT?: ApplicationSubmissionWhereInput | ApplicationSubmissionWhereInput[]
    applicationId?: IntFilter<"ApplicationSubmission"> | number
    propertyId?: IntFilter<"ApplicationSubmission"> | number
    status?: StringFilter<"ApplicationSubmission"> | string
    notes?: StringNullableFilter<"ApplicationSubmission"> | string | null
    reviewedById?: IntNullableFilter<"ApplicationSubmission"> | number | null
    reviewedAt?: DateTimeNullableFilter<"ApplicationSubmission"> | Date | string | null
    createdAt?: DateTimeFilter<"ApplicationSubmission"> | Date | string
    updatedAt?: DateTimeFilter<"ApplicationSubmission"> | Date | string
    application?: XOR<RentalApplicationScalarRelationFilter, RentalApplicationWhereInput>
    reviewedBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type ApplicationSubmissionOrderByWithAggregationInput = {
    id?: SortOrder
    applicationId?: SortOrder
    propertyId?: SortOrder
    status?: SortOrder
    notes?: SortOrderInput | SortOrder
    reviewedById?: SortOrderInput | SortOrder
    reviewedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ApplicationSubmissionCountOrderByAggregateInput
    _avg?: ApplicationSubmissionAvgOrderByAggregateInput
    _max?: ApplicationSubmissionMaxOrderByAggregateInput
    _min?: ApplicationSubmissionMinOrderByAggregateInput
    _sum?: ApplicationSubmissionSumOrderByAggregateInput
  }

  export type ApplicationSubmissionScalarWhereWithAggregatesInput = {
    AND?: ApplicationSubmissionScalarWhereWithAggregatesInput | ApplicationSubmissionScalarWhereWithAggregatesInput[]
    OR?: ApplicationSubmissionScalarWhereWithAggregatesInput[]
    NOT?: ApplicationSubmissionScalarWhereWithAggregatesInput | ApplicationSubmissionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ApplicationSubmission"> | number
    applicationId?: IntWithAggregatesFilter<"ApplicationSubmission"> | number
    propertyId?: IntWithAggregatesFilter<"ApplicationSubmission"> | number
    status?: StringWithAggregatesFilter<"ApplicationSubmission"> | string
    notes?: StringNullableWithAggregatesFilter<"ApplicationSubmission"> | string | null
    reviewedById?: IntNullableWithAggregatesFilter<"ApplicationSubmission"> | number | null
    reviewedAt?: DateTimeNullableWithAggregatesFilter<"ApplicationSubmission"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ApplicationSubmission"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ApplicationSubmission"> | Date | string
  }

  export type ApplicationDocumentWhereInput = {
    AND?: ApplicationDocumentWhereInput | ApplicationDocumentWhereInput[]
    OR?: ApplicationDocumentWhereInput[]
    NOT?: ApplicationDocumentWhereInput | ApplicationDocumentWhereInput[]
    id?: IntFilter<"ApplicationDocument"> | number
    applicationId?: IntFilter<"ApplicationDocument"> | number
    documentType?: StringFilter<"ApplicationDocument"> | string
    documentUrl?: StringFilter<"ApplicationDocument"> | string
    fileName?: StringFilter<"ApplicationDocument"> | string
    fileSize?: IntFilter<"ApplicationDocument"> | number
    uploadedAt?: DateTimeFilter<"ApplicationDocument"> | Date | string
    application?: XOR<RentalApplicationScalarRelationFilter, RentalApplicationWhereInput>
  }

  export type ApplicationDocumentOrderByWithRelationInput = {
    id?: SortOrder
    applicationId?: SortOrder
    documentType?: SortOrder
    documentUrl?: SortOrder
    fileName?: SortOrder
    fileSize?: SortOrder
    uploadedAt?: SortOrder
    application?: RentalApplicationOrderByWithRelationInput
  }

  export type ApplicationDocumentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ApplicationDocumentWhereInput | ApplicationDocumentWhereInput[]
    OR?: ApplicationDocumentWhereInput[]
    NOT?: ApplicationDocumentWhereInput | ApplicationDocumentWhereInput[]
    applicationId?: IntFilter<"ApplicationDocument"> | number
    documentType?: StringFilter<"ApplicationDocument"> | string
    documentUrl?: StringFilter<"ApplicationDocument"> | string
    fileName?: StringFilter<"ApplicationDocument"> | string
    fileSize?: IntFilter<"ApplicationDocument"> | number
    uploadedAt?: DateTimeFilter<"ApplicationDocument"> | Date | string
    application?: XOR<RentalApplicationScalarRelationFilter, RentalApplicationWhereInput>
  }, "id">

  export type ApplicationDocumentOrderByWithAggregationInput = {
    id?: SortOrder
    applicationId?: SortOrder
    documentType?: SortOrder
    documentUrl?: SortOrder
    fileName?: SortOrder
    fileSize?: SortOrder
    uploadedAt?: SortOrder
    _count?: ApplicationDocumentCountOrderByAggregateInput
    _avg?: ApplicationDocumentAvgOrderByAggregateInput
    _max?: ApplicationDocumentMaxOrderByAggregateInput
    _min?: ApplicationDocumentMinOrderByAggregateInput
    _sum?: ApplicationDocumentSumOrderByAggregateInput
  }

  export type ApplicationDocumentScalarWhereWithAggregatesInput = {
    AND?: ApplicationDocumentScalarWhereWithAggregatesInput | ApplicationDocumentScalarWhereWithAggregatesInput[]
    OR?: ApplicationDocumentScalarWhereWithAggregatesInput[]
    NOT?: ApplicationDocumentScalarWhereWithAggregatesInput | ApplicationDocumentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ApplicationDocument"> | number
    applicationId?: IntWithAggregatesFilter<"ApplicationDocument"> | number
    documentType?: StringWithAggregatesFilter<"ApplicationDocument"> | string
    documentUrl?: StringWithAggregatesFilter<"ApplicationDocument"> | string
    fileName?: StringWithAggregatesFilter<"ApplicationDocument"> | string
    fileSize?: IntWithAggregatesFilter<"ApplicationDocument"> | number
    uploadedAt?: DateTimeWithAggregatesFilter<"ApplicationDocument"> | Date | string
  }

  export type UserCreateInput = {
    username: string
    password: string
    email: string
    name?: string | null
    avatar?: string | null
    isAdmin?: boolean
    createdAt?: Date | string
    properties?: PropertyCreateNestedManyWithoutCreatedByInput
    rentalApplications?: RentalApplicationCreateNestedManyWithoutUserInput
    reviewedSubmissions?: ApplicationSubmissionCreateNestedManyWithoutReviewedByInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    username: string
    password: string
    email: string
    name?: string | null
    avatar?: string | null
    isAdmin?: boolean
    createdAt?: Date | string
    properties?: PropertyUncheckedCreateNestedManyWithoutCreatedByInput
    rentalApplications?: RentalApplicationUncheckedCreateNestedManyWithoutUserInput
    reviewedSubmissions?: ApplicationSubmissionUncheckedCreateNestedManyWithoutReviewedByInput
  }

  export type UserUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    properties?: PropertyUpdateManyWithoutCreatedByNestedInput
    rentalApplications?: RentalApplicationUpdateManyWithoutUserNestedInput
    reviewedSubmissions?: ApplicationSubmissionUpdateManyWithoutReviewedByNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    properties?: PropertyUncheckedUpdateManyWithoutCreatedByNestedInput
    rentalApplications?: RentalApplicationUncheckedUpdateManyWithoutUserNestedInput
    reviewedSubmissions?: ApplicationSubmissionUncheckedUpdateManyWithoutReviewedByNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    username: string
    password: string
    email: string
    name?: string | null
    avatar?: string | null
    isAdmin?: boolean
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyCreateInput = {
    title: string
    address: string
    city: string
    state: string
    zipCode: string
    price: number
    bedrooms: number
    bathrooms: number
    squareFeet: number
    description: string
    propertyType: string
    status?: string
    isRental?: boolean
    rentalPrice?: number | null
    featuredImage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    acres?: string | null
    yearBuilt?: number | null
    displayOnHomepage?: boolean
    createdBy?: UserCreateNestedOneWithoutPropertiesInput
    images?: PropertyImageCreateNestedManyWithoutPropertyInput
  }

  export type PropertyUncheckedCreateInput = {
    id?: number
    title: string
    address: string
    city: string
    state: string
    zipCode: string
    price: number
    bedrooms: number
    bathrooms: number
    squareFeet: number
    description: string
    propertyType: string
    status?: string
    isRental?: boolean
    rentalPrice?: number | null
    featuredImage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdById?: number | null
    acres?: string | null
    yearBuilt?: number | null
    displayOnHomepage?: boolean
    images?: PropertyImageUncheckedCreateNestedManyWithoutPropertyInput
  }

  export type PropertyUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    bedrooms?: IntFieldUpdateOperationsInput | number
    bathrooms?: IntFieldUpdateOperationsInput | number
    squareFeet?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    propertyType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    isRental?: BoolFieldUpdateOperationsInput | boolean
    rentalPrice?: NullableIntFieldUpdateOperationsInput | number | null
    featuredImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    acres?: NullableStringFieldUpdateOperationsInput | string | null
    yearBuilt?: NullableIntFieldUpdateOperationsInput | number | null
    displayOnHomepage?: BoolFieldUpdateOperationsInput | boolean
    createdBy?: UserUpdateOneWithoutPropertiesNestedInput
    images?: PropertyImageUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    bedrooms?: IntFieldUpdateOperationsInput | number
    bathrooms?: IntFieldUpdateOperationsInput | number
    squareFeet?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    propertyType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    isRental?: BoolFieldUpdateOperationsInput | boolean
    rentalPrice?: NullableIntFieldUpdateOperationsInput | number | null
    featuredImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: NullableIntFieldUpdateOperationsInput | number | null
    acres?: NullableStringFieldUpdateOperationsInput | string | null
    yearBuilt?: NullableIntFieldUpdateOperationsInput | number | null
    displayOnHomepage?: BoolFieldUpdateOperationsInput | boolean
    images?: PropertyImageUncheckedUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyCreateManyInput = {
    id?: number
    title: string
    address: string
    city: string
    state: string
    zipCode: string
    price: number
    bedrooms: number
    bathrooms: number
    squareFeet: number
    description: string
    propertyType: string
    status?: string
    isRental?: boolean
    rentalPrice?: number | null
    featuredImage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdById?: number | null
    acres?: string | null
    yearBuilt?: number | null
    displayOnHomepage?: boolean
  }

  export type PropertyUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    bedrooms?: IntFieldUpdateOperationsInput | number
    bathrooms?: IntFieldUpdateOperationsInput | number
    squareFeet?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    propertyType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    isRental?: BoolFieldUpdateOperationsInput | boolean
    rentalPrice?: NullableIntFieldUpdateOperationsInput | number | null
    featuredImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    acres?: NullableStringFieldUpdateOperationsInput | string | null
    yearBuilt?: NullableIntFieldUpdateOperationsInput | number | null
    displayOnHomepage?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PropertyUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    bedrooms?: IntFieldUpdateOperationsInput | number
    bathrooms?: IntFieldUpdateOperationsInput | number
    squareFeet?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    propertyType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    isRental?: BoolFieldUpdateOperationsInput | boolean
    rentalPrice?: NullableIntFieldUpdateOperationsInput | number | null
    featuredImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: NullableIntFieldUpdateOperationsInput | number | null
    acres?: NullableStringFieldUpdateOperationsInput | string | null
    yearBuilt?: NullableIntFieldUpdateOperationsInput | number | null
    displayOnHomepage?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PropertyImageCreateInput = {
    imageUrl: string
    caption?: string | null
    displayOrder?: number
    createdAt?: Date | string
    property: PropertyCreateNestedOneWithoutImagesInput
  }

  export type PropertyImageUncheckedCreateInput = {
    id?: number
    propertyId: number
    imageUrl: string
    caption?: string | null
    displayOrder?: number
    createdAt?: Date | string
  }

  export type PropertyImageUpdateInput = {
    imageUrl?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    displayOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    property?: PropertyUpdateOneRequiredWithoutImagesNestedInput
  }

  export type PropertyImageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    propertyId?: IntFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    displayOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyImageCreateManyInput = {
    id?: number
    propertyId: number
    imageUrl: string
    caption?: string | null
    displayOrder?: number
    createdAt?: Date | string
  }

  export type PropertyImageUpdateManyMutationInput = {
    imageUrl?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    displayOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyImageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    propertyId?: IntFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    displayOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailSubscriptionCreateInput = {
    email: string
    createdAt?: Date | string
    isActive?: boolean
  }

  export type EmailSubscriptionUncheckedCreateInput = {
    id?: number
    email: string
    createdAt?: Date | string
    isActive?: boolean
  }

  export type EmailSubscriptionUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type EmailSubscriptionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type EmailSubscriptionCreateManyInput = {
    id?: number
    email: string
    createdAt?: Date | string
    isActive?: boolean
  }

  export type EmailSubscriptionUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type EmailSubscriptionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CashOfferRequestCreateInput = {
    name: string
    email: string
    phone: string
    address: string
    city: string
    state: string
    zipCode: string
    propertyType: string
    condition: string
    timeframe: string
    additionalInfo?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CashOfferRequestUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    phone: string
    address: string
    city: string
    state: string
    zipCode: string
    propertyType: string
    condition: string
    timeframe: string
    additionalInfo?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CashOfferRequestUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    propertyType?: StringFieldUpdateOperationsInput | string
    condition?: StringFieldUpdateOperationsInput | string
    timeframe?: StringFieldUpdateOperationsInput | string
    additionalInfo?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CashOfferRequestUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    propertyType?: StringFieldUpdateOperationsInput | string
    condition?: StringFieldUpdateOperationsInput | string
    timeframe?: StringFieldUpdateOperationsInput | string
    additionalInfo?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CashOfferRequestCreateManyInput = {
    id?: number
    name: string
    email: string
    phone: string
    address: string
    city: string
    state: string
    zipCode: string
    propertyType: string
    condition: string
    timeframe: string
    additionalInfo?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CashOfferRequestUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    propertyType?: StringFieldUpdateOperationsInput | string
    condition?: StringFieldUpdateOperationsInput | string
    timeframe?: StringFieldUpdateOperationsInput | string
    additionalInfo?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CashOfferRequestUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    propertyType?: StringFieldUpdateOperationsInput | string
    condition?: StringFieldUpdateOperationsInput | string
    timeframe?: StringFieldUpdateOperationsInput | string
    additionalInfo?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestimonialCreateInput = {
    name: string
    location?: string | null
    rating: number
    comment: string
    isActive?: boolean
    createdAt?: Date | string
  }

  export type TestimonialUncheckedCreateInput = {
    id?: number
    name: string
    location?: string | null
    rating: number
    comment: string
    isActive?: boolean
    createdAt?: Date | string
  }

  export type TestimonialUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestimonialUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestimonialCreateManyInput = {
    id?: number
    name: string
    location?: string | null
    rating: number
    comment: string
    isActive?: boolean
    createdAt?: Date | string
  }

  export type TestimonialUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestimonialUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RentalApplicationCreateInput = {
    firstName: string
    lastName: string
    email: string
    phone: string
    currentAddress: string
    city: string
    state: string
    zipCode: string
    moveInDate: Date | string
    employer?: string | null
    occupation?: string | null
    monthlyIncome: number
    additionalOccupants: number
    pets?: boolean
    petDetails?: string | null
    creditScore?: number | null
    hasEvictions?: boolean
    hasFelonies?: boolean
    additionalInfo?: string | null
    isComplete?: boolean
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutRentalApplicationsInput
    submissions?: ApplicationSubmissionCreateNestedManyWithoutApplicationInput
    documents?: ApplicationDocumentCreateNestedManyWithoutApplicationInput
  }

  export type RentalApplicationUncheckedCreateInput = {
    id?: number
    userId: number
    firstName: string
    lastName: string
    email: string
    phone: string
    currentAddress: string
    city: string
    state: string
    zipCode: string
    moveInDate: Date | string
    employer?: string | null
    occupation?: string | null
    monthlyIncome: number
    additionalOccupants: number
    pets?: boolean
    petDetails?: string | null
    creditScore?: number | null
    hasEvictions?: boolean
    hasFelonies?: boolean
    additionalInfo?: string | null
    isComplete?: boolean
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    submissions?: ApplicationSubmissionUncheckedCreateNestedManyWithoutApplicationInput
    documents?: ApplicationDocumentUncheckedCreateNestedManyWithoutApplicationInput
  }

  export type RentalApplicationUpdateInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    currentAddress?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    moveInDate?: DateTimeFieldUpdateOperationsInput | Date | string
    employer?: NullableStringFieldUpdateOperationsInput | string | null
    occupation?: NullableStringFieldUpdateOperationsInput | string | null
    monthlyIncome?: IntFieldUpdateOperationsInput | number
    additionalOccupants?: IntFieldUpdateOperationsInput | number
    pets?: BoolFieldUpdateOperationsInput | boolean
    petDetails?: NullableStringFieldUpdateOperationsInput | string | null
    creditScore?: NullableIntFieldUpdateOperationsInput | number | null
    hasEvictions?: BoolFieldUpdateOperationsInput | boolean
    hasFelonies?: BoolFieldUpdateOperationsInput | boolean
    additionalInfo?: NullableStringFieldUpdateOperationsInput | string | null
    isComplete?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRentalApplicationsNestedInput
    submissions?: ApplicationSubmissionUpdateManyWithoutApplicationNestedInput
    documents?: ApplicationDocumentUpdateManyWithoutApplicationNestedInput
  }

  export type RentalApplicationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    currentAddress?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    moveInDate?: DateTimeFieldUpdateOperationsInput | Date | string
    employer?: NullableStringFieldUpdateOperationsInput | string | null
    occupation?: NullableStringFieldUpdateOperationsInput | string | null
    monthlyIncome?: IntFieldUpdateOperationsInput | number
    additionalOccupants?: IntFieldUpdateOperationsInput | number
    pets?: BoolFieldUpdateOperationsInput | boolean
    petDetails?: NullableStringFieldUpdateOperationsInput | string | null
    creditScore?: NullableIntFieldUpdateOperationsInput | number | null
    hasEvictions?: BoolFieldUpdateOperationsInput | boolean
    hasFelonies?: BoolFieldUpdateOperationsInput | boolean
    additionalInfo?: NullableStringFieldUpdateOperationsInput | string | null
    isComplete?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submissions?: ApplicationSubmissionUncheckedUpdateManyWithoutApplicationNestedInput
    documents?: ApplicationDocumentUncheckedUpdateManyWithoutApplicationNestedInput
  }

  export type RentalApplicationCreateManyInput = {
    id?: number
    userId: number
    firstName: string
    lastName: string
    email: string
    phone: string
    currentAddress: string
    city: string
    state: string
    zipCode: string
    moveInDate: Date | string
    employer?: string | null
    occupation?: string | null
    monthlyIncome: number
    additionalOccupants: number
    pets?: boolean
    petDetails?: string | null
    creditScore?: number | null
    hasEvictions?: boolean
    hasFelonies?: boolean
    additionalInfo?: string | null
    isComplete?: boolean
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RentalApplicationUpdateManyMutationInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    currentAddress?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    moveInDate?: DateTimeFieldUpdateOperationsInput | Date | string
    employer?: NullableStringFieldUpdateOperationsInput | string | null
    occupation?: NullableStringFieldUpdateOperationsInput | string | null
    monthlyIncome?: IntFieldUpdateOperationsInput | number
    additionalOccupants?: IntFieldUpdateOperationsInput | number
    pets?: BoolFieldUpdateOperationsInput | boolean
    petDetails?: NullableStringFieldUpdateOperationsInput | string | null
    creditScore?: NullableIntFieldUpdateOperationsInput | number | null
    hasEvictions?: BoolFieldUpdateOperationsInput | boolean
    hasFelonies?: BoolFieldUpdateOperationsInput | boolean
    additionalInfo?: NullableStringFieldUpdateOperationsInput | string | null
    isComplete?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RentalApplicationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    currentAddress?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    moveInDate?: DateTimeFieldUpdateOperationsInput | Date | string
    employer?: NullableStringFieldUpdateOperationsInput | string | null
    occupation?: NullableStringFieldUpdateOperationsInput | string | null
    monthlyIncome?: IntFieldUpdateOperationsInput | number
    additionalOccupants?: IntFieldUpdateOperationsInput | number
    pets?: BoolFieldUpdateOperationsInput | boolean
    petDetails?: NullableStringFieldUpdateOperationsInput | string | null
    creditScore?: NullableIntFieldUpdateOperationsInput | number | null
    hasEvictions?: BoolFieldUpdateOperationsInput | boolean
    hasFelonies?: BoolFieldUpdateOperationsInput | boolean
    additionalInfo?: NullableStringFieldUpdateOperationsInput | string | null
    isComplete?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationSubmissionCreateInput = {
    propertyId: number
    status?: string
    notes?: string | null
    reviewedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    application: RentalApplicationCreateNestedOneWithoutSubmissionsInput
    reviewedBy?: UserCreateNestedOneWithoutReviewedSubmissionsInput
  }

  export type ApplicationSubmissionUncheckedCreateInput = {
    id?: number
    applicationId: number
    propertyId: number
    status?: string
    notes?: string | null
    reviewedById?: number | null
    reviewedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ApplicationSubmissionUpdateInput = {
    propertyId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    application?: RentalApplicationUpdateOneRequiredWithoutSubmissionsNestedInput
    reviewedBy?: UserUpdateOneWithoutReviewedSubmissionsNestedInput
  }

  export type ApplicationSubmissionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    applicationId?: IntFieldUpdateOperationsInput | number
    propertyId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    reviewedById?: NullableIntFieldUpdateOperationsInput | number | null
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationSubmissionCreateManyInput = {
    id?: number
    applicationId: number
    propertyId: number
    status?: string
    notes?: string | null
    reviewedById?: number | null
    reviewedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ApplicationSubmissionUpdateManyMutationInput = {
    propertyId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationSubmissionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    applicationId?: IntFieldUpdateOperationsInput | number
    propertyId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    reviewedById?: NullableIntFieldUpdateOperationsInput | number | null
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationDocumentCreateInput = {
    documentType: string
    documentUrl: string
    fileName: string
    fileSize: number
    uploadedAt?: Date | string
    application: RentalApplicationCreateNestedOneWithoutDocumentsInput
  }

  export type ApplicationDocumentUncheckedCreateInput = {
    id?: number
    applicationId: number
    documentType: string
    documentUrl: string
    fileName: string
    fileSize: number
    uploadedAt?: Date | string
  }

  export type ApplicationDocumentUpdateInput = {
    documentType?: StringFieldUpdateOperationsInput | string
    documentUrl?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    application?: RentalApplicationUpdateOneRequiredWithoutDocumentsNestedInput
  }

  export type ApplicationDocumentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    applicationId?: IntFieldUpdateOperationsInput | number
    documentType?: StringFieldUpdateOperationsInput | string
    documentUrl?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationDocumentCreateManyInput = {
    id?: number
    applicationId: number
    documentType: string
    documentUrl: string
    fileName: string
    fileSize: number
    uploadedAt?: Date | string
  }

  export type ApplicationDocumentUpdateManyMutationInput = {
    documentType?: StringFieldUpdateOperationsInput | string
    documentUrl?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationDocumentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    applicationId?: IntFieldUpdateOperationsInput | number
    documentType?: StringFieldUpdateOperationsInput | string
    documentUrl?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type PropertyListRelationFilter = {
    every?: PropertyWhereInput
    some?: PropertyWhereInput
    none?: PropertyWhereInput
  }

  export type RentalApplicationListRelationFilter = {
    every?: RentalApplicationWhereInput
    some?: RentalApplicationWhereInput
    none?: RentalApplicationWhereInput
  }

  export type ApplicationSubmissionListRelationFilter = {
    every?: ApplicationSubmissionWhereInput
    some?: ApplicationSubmissionWhereInput
    none?: ApplicationSubmissionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PropertyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RentalApplicationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ApplicationSubmissionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    email?: SortOrder
    name?: SortOrder
    avatar?: SortOrder
    isAdmin?: SortOrder
    createdAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    email?: SortOrder
    name?: SortOrder
    avatar?: SortOrder
    isAdmin?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    email?: SortOrder
    name?: SortOrder
    avatar?: SortOrder
    isAdmin?: SortOrder
    createdAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type PropertyImageListRelationFilter = {
    every?: PropertyImageWhereInput
    some?: PropertyImageWhereInput
    none?: PropertyImageWhereInput
  }

  export type PropertyImageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PropertyCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zipCode?: SortOrder
    price?: SortOrder
    bedrooms?: SortOrder
    bathrooms?: SortOrder
    squareFeet?: SortOrder
    description?: SortOrder
    propertyType?: SortOrder
    status?: SortOrder
    isRental?: SortOrder
    rentalPrice?: SortOrder
    featuredImage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
    acres?: SortOrder
    yearBuilt?: SortOrder
    displayOnHomepage?: SortOrder
  }

  export type PropertyAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    bedrooms?: SortOrder
    bathrooms?: SortOrder
    squareFeet?: SortOrder
    rentalPrice?: SortOrder
    createdById?: SortOrder
    yearBuilt?: SortOrder
  }

  export type PropertyMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zipCode?: SortOrder
    price?: SortOrder
    bedrooms?: SortOrder
    bathrooms?: SortOrder
    squareFeet?: SortOrder
    description?: SortOrder
    propertyType?: SortOrder
    status?: SortOrder
    isRental?: SortOrder
    rentalPrice?: SortOrder
    featuredImage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
    acres?: SortOrder
    yearBuilt?: SortOrder
    displayOnHomepage?: SortOrder
  }

  export type PropertyMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zipCode?: SortOrder
    price?: SortOrder
    bedrooms?: SortOrder
    bathrooms?: SortOrder
    squareFeet?: SortOrder
    description?: SortOrder
    propertyType?: SortOrder
    status?: SortOrder
    isRental?: SortOrder
    rentalPrice?: SortOrder
    featuredImage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
    acres?: SortOrder
    yearBuilt?: SortOrder
    displayOnHomepage?: SortOrder
  }

  export type PropertySumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    bedrooms?: SortOrder
    bathrooms?: SortOrder
    squareFeet?: SortOrder
    rentalPrice?: SortOrder
    createdById?: SortOrder
    yearBuilt?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type PropertyScalarRelationFilter = {
    is?: PropertyWhereInput
    isNot?: PropertyWhereInput
  }

  export type PropertyImageCountOrderByAggregateInput = {
    id?: SortOrder
    propertyId?: SortOrder
    imageUrl?: SortOrder
    caption?: SortOrder
    displayOrder?: SortOrder
    createdAt?: SortOrder
  }

  export type PropertyImageAvgOrderByAggregateInput = {
    id?: SortOrder
    propertyId?: SortOrder
    displayOrder?: SortOrder
  }

  export type PropertyImageMaxOrderByAggregateInput = {
    id?: SortOrder
    propertyId?: SortOrder
    imageUrl?: SortOrder
    caption?: SortOrder
    displayOrder?: SortOrder
    createdAt?: SortOrder
  }

  export type PropertyImageMinOrderByAggregateInput = {
    id?: SortOrder
    propertyId?: SortOrder
    imageUrl?: SortOrder
    caption?: SortOrder
    displayOrder?: SortOrder
    createdAt?: SortOrder
  }

  export type PropertyImageSumOrderByAggregateInput = {
    id?: SortOrder
    propertyId?: SortOrder
    displayOrder?: SortOrder
  }

  export type EmailSubscriptionCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    isActive?: SortOrder
  }

  export type EmailSubscriptionAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EmailSubscriptionMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    isActive?: SortOrder
  }

  export type EmailSubscriptionMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    isActive?: SortOrder
  }

  export type EmailSubscriptionSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CashOfferRequestCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zipCode?: SortOrder
    propertyType?: SortOrder
    condition?: SortOrder
    timeframe?: SortOrder
    additionalInfo?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CashOfferRequestAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CashOfferRequestMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zipCode?: SortOrder
    propertyType?: SortOrder
    condition?: SortOrder
    timeframe?: SortOrder
    additionalInfo?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CashOfferRequestMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zipCode?: SortOrder
    propertyType?: SortOrder
    condition?: SortOrder
    timeframe?: SortOrder
    additionalInfo?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CashOfferRequestSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TestimonialCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type TestimonialAvgOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
  }

  export type TestimonialMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type TestimonialMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type TestimonialSumOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ApplicationDocumentListRelationFilter = {
    every?: ApplicationDocumentWhereInput
    some?: ApplicationDocumentWhereInput
    none?: ApplicationDocumentWhereInput
  }

  export type ApplicationDocumentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RentalApplicationCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    currentAddress?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zipCode?: SortOrder
    moveInDate?: SortOrder
    employer?: SortOrder
    occupation?: SortOrder
    monthlyIncome?: SortOrder
    additionalOccupants?: SortOrder
    pets?: SortOrder
    petDetails?: SortOrder
    creditScore?: SortOrder
    hasEvictions?: SortOrder
    hasFelonies?: SortOrder
    additionalInfo?: SortOrder
    isComplete?: SortOrder
    isVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RentalApplicationAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    monthlyIncome?: SortOrder
    additionalOccupants?: SortOrder
    creditScore?: SortOrder
  }

  export type RentalApplicationMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    currentAddress?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zipCode?: SortOrder
    moveInDate?: SortOrder
    employer?: SortOrder
    occupation?: SortOrder
    monthlyIncome?: SortOrder
    additionalOccupants?: SortOrder
    pets?: SortOrder
    petDetails?: SortOrder
    creditScore?: SortOrder
    hasEvictions?: SortOrder
    hasFelonies?: SortOrder
    additionalInfo?: SortOrder
    isComplete?: SortOrder
    isVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RentalApplicationMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    currentAddress?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zipCode?: SortOrder
    moveInDate?: SortOrder
    employer?: SortOrder
    occupation?: SortOrder
    monthlyIncome?: SortOrder
    additionalOccupants?: SortOrder
    pets?: SortOrder
    petDetails?: SortOrder
    creditScore?: SortOrder
    hasEvictions?: SortOrder
    hasFelonies?: SortOrder
    additionalInfo?: SortOrder
    isComplete?: SortOrder
    isVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RentalApplicationSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    monthlyIncome?: SortOrder
    additionalOccupants?: SortOrder
    creditScore?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type RentalApplicationScalarRelationFilter = {
    is?: RentalApplicationWhereInput
    isNot?: RentalApplicationWhereInput
  }

  export type ApplicationSubmissionCountOrderByAggregateInput = {
    id?: SortOrder
    applicationId?: SortOrder
    propertyId?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    reviewedById?: SortOrder
    reviewedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ApplicationSubmissionAvgOrderByAggregateInput = {
    id?: SortOrder
    applicationId?: SortOrder
    propertyId?: SortOrder
    reviewedById?: SortOrder
  }

  export type ApplicationSubmissionMaxOrderByAggregateInput = {
    id?: SortOrder
    applicationId?: SortOrder
    propertyId?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    reviewedById?: SortOrder
    reviewedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ApplicationSubmissionMinOrderByAggregateInput = {
    id?: SortOrder
    applicationId?: SortOrder
    propertyId?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    reviewedById?: SortOrder
    reviewedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ApplicationSubmissionSumOrderByAggregateInput = {
    id?: SortOrder
    applicationId?: SortOrder
    propertyId?: SortOrder
    reviewedById?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type ApplicationDocumentCountOrderByAggregateInput = {
    id?: SortOrder
    applicationId?: SortOrder
    documentType?: SortOrder
    documentUrl?: SortOrder
    fileName?: SortOrder
    fileSize?: SortOrder
    uploadedAt?: SortOrder
  }

  export type ApplicationDocumentAvgOrderByAggregateInput = {
    id?: SortOrder
    applicationId?: SortOrder
    fileSize?: SortOrder
  }

  export type ApplicationDocumentMaxOrderByAggregateInput = {
    id?: SortOrder
    applicationId?: SortOrder
    documentType?: SortOrder
    documentUrl?: SortOrder
    fileName?: SortOrder
    fileSize?: SortOrder
    uploadedAt?: SortOrder
  }

  export type ApplicationDocumentMinOrderByAggregateInput = {
    id?: SortOrder
    applicationId?: SortOrder
    documentType?: SortOrder
    documentUrl?: SortOrder
    fileName?: SortOrder
    fileSize?: SortOrder
    uploadedAt?: SortOrder
  }

  export type ApplicationDocumentSumOrderByAggregateInput = {
    id?: SortOrder
    applicationId?: SortOrder
    fileSize?: SortOrder
  }

  export type PropertyCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<PropertyCreateWithoutCreatedByInput, PropertyUncheckedCreateWithoutCreatedByInput> | PropertyCreateWithoutCreatedByInput[] | PropertyUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: PropertyCreateOrConnectWithoutCreatedByInput | PropertyCreateOrConnectWithoutCreatedByInput[]
    createMany?: PropertyCreateManyCreatedByInputEnvelope
    connect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
  }

  export type RentalApplicationCreateNestedManyWithoutUserInput = {
    create?: XOR<RentalApplicationCreateWithoutUserInput, RentalApplicationUncheckedCreateWithoutUserInput> | RentalApplicationCreateWithoutUserInput[] | RentalApplicationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RentalApplicationCreateOrConnectWithoutUserInput | RentalApplicationCreateOrConnectWithoutUserInput[]
    createMany?: RentalApplicationCreateManyUserInputEnvelope
    connect?: RentalApplicationWhereUniqueInput | RentalApplicationWhereUniqueInput[]
  }

  export type ApplicationSubmissionCreateNestedManyWithoutReviewedByInput = {
    create?: XOR<ApplicationSubmissionCreateWithoutReviewedByInput, ApplicationSubmissionUncheckedCreateWithoutReviewedByInput> | ApplicationSubmissionCreateWithoutReviewedByInput[] | ApplicationSubmissionUncheckedCreateWithoutReviewedByInput[]
    connectOrCreate?: ApplicationSubmissionCreateOrConnectWithoutReviewedByInput | ApplicationSubmissionCreateOrConnectWithoutReviewedByInput[]
    createMany?: ApplicationSubmissionCreateManyReviewedByInputEnvelope
    connect?: ApplicationSubmissionWhereUniqueInput | ApplicationSubmissionWhereUniqueInput[]
  }

  export type PropertyUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<PropertyCreateWithoutCreatedByInput, PropertyUncheckedCreateWithoutCreatedByInput> | PropertyCreateWithoutCreatedByInput[] | PropertyUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: PropertyCreateOrConnectWithoutCreatedByInput | PropertyCreateOrConnectWithoutCreatedByInput[]
    createMany?: PropertyCreateManyCreatedByInputEnvelope
    connect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
  }

  export type RentalApplicationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RentalApplicationCreateWithoutUserInput, RentalApplicationUncheckedCreateWithoutUserInput> | RentalApplicationCreateWithoutUserInput[] | RentalApplicationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RentalApplicationCreateOrConnectWithoutUserInput | RentalApplicationCreateOrConnectWithoutUserInput[]
    createMany?: RentalApplicationCreateManyUserInputEnvelope
    connect?: RentalApplicationWhereUniqueInput | RentalApplicationWhereUniqueInput[]
  }

  export type ApplicationSubmissionUncheckedCreateNestedManyWithoutReviewedByInput = {
    create?: XOR<ApplicationSubmissionCreateWithoutReviewedByInput, ApplicationSubmissionUncheckedCreateWithoutReviewedByInput> | ApplicationSubmissionCreateWithoutReviewedByInput[] | ApplicationSubmissionUncheckedCreateWithoutReviewedByInput[]
    connectOrCreate?: ApplicationSubmissionCreateOrConnectWithoutReviewedByInput | ApplicationSubmissionCreateOrConnectWithoutReviewedByInput[]
    createMany?: ApplicationSubmissionCreateManyReviewedByInputEnvelope
    connect?: ApplicationSubmissionWhereUniqueInput | ApplicationSubmissionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PropertyUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<PropertyCreateWithoutCreatedByInput, PropertyUncheckedCreateWithoutCreatedByInput> | PropertyCreateWithoutCreatedByInput[] | PropertyUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: PropertyCreateOrConnectWithoutCreatedByInput | PropertyCreateOrConnectWithoutCreatedByInput[]
    upsert?: PropertyUpsertWithWhereUniqueWithoutCreatedByInput | PropertyUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: PropertyCreateManyCreatedByInputEnvelope
    set?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    disconnect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    delete?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    connect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    update?: PropertyUpdateWithWhereUniqueWithoutCreatedByInput | PropertyUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: PropertyUpdateManyWithWhereWithoutCreatedByInput | PropertyUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: PropertyScalarWhereInput | PropertyScalarWhereInput[]
  }

  export type RentalApplicationUpdateManyWithoutUserNestedInput = {
    create?: XOR<RentalApplicationCreateWithoutUserInput, RentalApplicationUncheckedCreateWithoutUserInput> | RentalApplicationCreateWithoutUserInput[] | RentalApplicationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RentalApplicationCreateOrConnectWithoutUserInput | RentalApplicationCreateOrConnectWithoutUserInput[]
    upsert?: RentalApplicationUpsertWithWhereUniqueWithoutUserInput | RentalApplicationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RentalApplicationCreateManyUserInputEnvelope
    set?: RentalApplicationWhereUniqueInput | RentalApplicationWhereUniqueInput[]
    disconnect?: RentalApplicationWhereUniqueInput | RentalApplicationWhereUniqueInput[]
    delete?: RentalApplicationWhereUniqueInput | RentalApplicationWhereUniqueInput[]
    connect?: RentalApplicationWhereUniqueInput | RentalApplicationWhereUniqueInput[]
    update?: RentalApplicationUpdateWithWhereUniqueWithoutUserInput | RentalApplicationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RentalApplicationUpdateManyWithWhereWithoutUserInput | RentalApplicationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RentalApplicationScalarWhereInput | RentalApplicationScalarWhereInput[]
  }

  export type ApplicationSubmissionUpdateManyWithoutReviewedByNestedInput = {
    create?: XOR<ApplicationSubmissionCreateWithoutReviewedByInput, ApplicationSubmissionUncheckedCreateWithoutReviewedByInput> | ApplicationSubmissionCreateWithoutReviewedByInput[] | ApplicationSubmissionUncheckedCreateWithoutReviewedByInput[]
    connectOrCreate?: ApplicationSubmissionCreateOrConnectWithoutReviewedByInput | ApplicationSubmissionCreateOrConnectWithoutReviewedByInput[]
    upsert?: ApplicationSubmissionUpsertWithWhereUniqueWithoutReviewedByInput | ApplicationSubmissionUpsertWithWhereUniqueWithoutReviewedByInput[]
    createMany?: ApplicationSubmissionCreateManyReviewedByInputEnvelope
    set?: ApplicationSubmissionWhereUniqueInput | ApplicationSubmissionWhereUniqueInput[]
    disconnect?: ApplicationSubmissionWhereUniqueInput | ApplicationSubmissionWhereUniqueInput[]
    delete?: ApplicationSubmissionWhereUniqueInput | ApplicationSubmissionWhereUniqueInput[]
    connect?: ApplicationSubmissionWhereUniqueInput | ApplicationSubmissionWhereUniqueInput[]
    update?: ApplicationSubmissionUpdateWithWhereUniqueWithoutReviewedByInput | ApplicationSubmissionUpdateWithWhereUniqueWithoutReviewedByInput[]
    updateMany?: ApplicationSubmissionUpdateManyWithWhereWithoutReviewedByInput | ApplicationSubmissionUpdateManyWithWhereWithoutReviewedByInput[]
    deleteMany?: ApplicationSubmissionScalarWhereInput | ApplicationSubmissionScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PropertyUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<PropertyCreateWithoutCreatedByInput, PropertyUncheckedCreateWithoutCreatedByInput> | PropertyCreateWithoutCreatedByInput[] | PropertyUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: PropertyCreateOrConnectWithoutCreatedByInput | PropertyCreateOrConnectWithoutCreatedByInput[]
    upsert?: PropertyUpsertWithWhereUniqueWithoutCreatedByInput | PropertyUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: PropertyCreateManyCreatedByInputEnvelope
    set?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    disconnect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    delete?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    connect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    update?: PropertyUpdateWithWhereUniqueWithoutCreatedByInput | PropertyUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: PropertyUpdateManyWithWhereWithoutCreatedByInput | PropertyUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: PropertyScalarWhereInput | PropertyScalarWhereInput[]
  }

  export type RentalApplicationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RentalApplicationCreateWithoutUserInput, RentalApplicationUncheckedCreateWithoutUserInput> | RentalApplicationCreateWithoutUserInput[] | RentalApplicationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RentalApplicationCreateOrConnectWithoutUserInput | RentalApplicationCreateOrConnectWithoutUserInput[]
    upsert?: RentalApplicationUpsertWithWhereUniqueWithoutUserInput | RentalApplicationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RentalApplicationCreateManyUserInputEnvelope
    set?: RentalApplicationWhereUniqueInput | RentalApplicationWhereUniqueInput[]
    disconnect?: RentalApplicationWhereUniqueInput | RentalApplicationWhereUniqueInput[]
    delete?: RentalApplicationWhereUniqueInput | RentalApplicationWhereUniqueInput[]
    connect?: RentalApplicationWhereUniqueInput | RentalApplicationWhereUniqueInput[]
    update?: RentalApplicationUpdateWithWhereUniqueWithoutUserInput | RentalApplicationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RentalApplicationUpdateManyWithWhereWithoutUserInput | RentalApplicationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RentalApplicationScalarWhereInput | RentalApplicationScalarWhereInput[]
  }

  export type ApplicationSubmissionUncheckedUpdateManyWithoutReviewedByNestedInput = {
    create?: XOR<ApplicationSubmissionCreateWithoutReviewedByInput, ApplicationSubmissionUncheckedCreateWithoutReviewedByInput> | ApplicationSubmissionCreateWithoutReviewedByInput[] | ApplicationSubmissionUncheckedCreateWithoutReviewedByInput[]
    connectOrCreate?: ApplicationSubmissionCreateOrConnectWithoutReviewedByInput | ApplicationSubmissionCreateOrConnectWithoutReviewedByInput[]
    upsert?: ApplicationSubmissionUpsertWithWhereUniqueWithoutReviewedByInput | ApplicationSubmissionUpsertWithWhereUniqueWithoutReviewedByInput[]
    createMany?: ApplicationSubmissionCreateManyReviewedByInputEnvelope
    set?: ApplicationSubmissionWhereUniqueInput | ApplicationSubmissionWhereUniqueInput[]
    disconnect?: ApplicationSubmissionWhereUniqueInput | ApplicationSubmissionWhereUniqueInput[]
    delete?: ApplicationSubmissionWhereUniqueInput | ApplicationSubmissionWhereUniqueInput[]
    connect?: ApplicationSubmissionWhereUniqueInput | ApplicationSubmissionWhereUniqueInput[]
    update?: ApplicationSubmissionUpdateWithWhereUniqueWithoutReviewedByInput | ApplicationSubmissionUpdateWithWhereUniqueWithoutReviewedByInput[]
    updateMany?: ApplicationSubmissionUpdateManyWithWhereWithoutReviewedByInput | ApplicationSubmissionUpdateManyWithWhereWithoutReviewedByInput[]
    deleteMany?: ApplicationSubmissionScalarWhereInput | ApplicationSubmissionScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutPropertiesInput = {
    create?: XOR<UserCreateWithoutPropertiesInput, UserUncheckedCreateWithoutPropertiesInput>
    connectOrCreate?: UserCreateOrConnectWithoutPropertiesInput
    connect?: UserWhereUniqueInput
  }

  export type PropertyImageCreateNestedManyWithoutPropertyInput = {
    create?: XOR<PropertyImageCreateWithoutPropertyInput, PropertyImageUncheckedCreateWithoutPropertyInput> | PropertyImageCreateWithoutPropertyInput[] | PropertyImageUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: PropertyImageCreateOrConnectWithoutPropertyInput | PropertyImageCreateOrConnectWithoutPropertyInput[]
    createMany?: PropertyImageCreateManyPropertyInputEnvelope
    connect?: PropertyImageWhereUniqueInput | PropertyImageWhereUniqueInput[]
  }

  export type PropertyImageUncheckedCreateNestedManyWithoutPropertyInput = {
    create?: XOR<PropertyImageCreateWithoutPropertyInput, PropertyImageUncheckedCreateWithoutPropertyInput> | PropertyImageCreateWithoutPropertyInput[] | PropertyImageUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: PropertyImageCreateOrConnectWithoutPropertyInput | PropertyImageCreateOrConnectWithoutPropertyInput[]
    createMany?: PropertyImageCreateManyPropertyInputEnvelope
    connect?: PropertyImageWhereUniqueInput | PropertyImageWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneWithoutPropertiesNestedInput = {
    create?: XOR<UserCreateWithoutPropertiesInput, UserUncheckedCreateWithoutPropertiesInput>
    connectOrCreate?: UserCreateOrConnectWithoutPropertiesInput
    upsert?: UserUpsertWithoutPropertiesInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPropertiesInput, UserUpdateWithoutPropertiesInput>, UserUncheckedUpdateWithoutPropertiesInput>
  }

  export type PropertyImageUpdateManyWithoutPropertyNestedInput = {
    create?: XOR<PropertyImageCreateWithoutPropertyInput, PropertyImageUncheckedCreateWithoutPropertyInput> | PropertyImageCreateWithoutPropertyInput[] | PropertyImageUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: PropertyImageCreateOrConnectWithoutPropertyInput | PropertyImageCreateOrConnectWithoutPropertyInput[]
    upsert?: PropertyImageUpsertWithWhereUniqueWithoutPropertyInput | PropertyImageUpsertWithWhereUniqueWithoutPropertyInput[]
    createMany?: PropertyImageCreateManyPropertyInputEnvelope
    set?: PropertyImageWhereUniqueInput | PropertyImageWhereUniqueInput[]
    disconnect?: PropertyImageWhereUniqueInput | PropertyImageWhereUniqueInput[]
    delete?: PropertyImageWhereUniqueInput | PropertyImageWhereUniqueInput[]
    connect?: PropertyImageWhereUniqueInput | PropertyImageWhereUniqueInput[]
    update?: PropertyImageUpdateWithWhereUniqueWithoutPropertyInput | PropertyImageUpdateWithWhereUniqueWithoutPropertyInput[]
    updateMany?: PropertyImageUpdateManyWithWhereWithoutPropertyInput | PropertyImageUpdateManyWithWhereWithoutPropertyInput[]
    deleteMany?: PropertyImageScalarWhereInput | PropertyImageScalarWhereInput[]
  }

  export type PropertyImageUncheckedUpdateManyWithoutPropertyNestedInput = {
    create?: XOR<PropertyImageCreateWithoutPropertyInput, PropertyImageUncheckedCreateWithoutPropertyInput> | PropertyImageCreateWithoutPropertyInput[] | PropertyImageUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: PropertyImageCreateOrConnectWithoutPropertyInput | PropertyImageCreateOrConnectWithoutPropertyInput[]
    upsert?: PropertyImageUpsertWithWhereUniqueWithoutPropertyInput | PropertyImageUpsertWithWhereUniqueWithoutPropertyInput[]
    createMany?: PropertyImageCreateManyPropertyInputEnvelope
    set?: PropertyImageWhereUniqueInput | PropertyImageWhereUniqueInput[]
    disconnect?: PropertyImageWhereUniqueInput | PropertyImageWhereUniqueInput[]
    delete?: PropertyImageWhereUniqueInput | PropertyImageWhereUniqueInput[]
    connect?: PropertyImageWhereUniqueInput | PropertyImageWhereUniqueInput[]
    update?: PropertyImageUpdateWithWhereUniqueWithoutPropertyInput | PropertyImageUpdateWithWhereUniqueWithoutPropertyInput[]
    updateMany?: PropertyImageUpdateManyWithWhereWithoutPropertyInput | PropertyImageUpdateManyWithWhereWithoutPropertyInput[]
    deleteMany?: PropertyImageScalarWhereInput | PropertyImageScalarWhereInput[]
  }

  export type PropertyCreateNestedOneWithoutImagesInput = {
    create?: XOR<PropertyCreateWithoutImagesInput, PropertyUncheckedCreateWithoutImagesInput>
    connectOrCreate?: PropertyCreateOrConnectWithoutImagesInput
    connect?: PropertyWhereUniqueInput
  }

  export type PropertyUpdateOneRequiredWithoutImagesNestedInput = {
    create?: XOR<PropertyCreateWithoutImagesInput, PropertyUncheckedCreateWithoutImagesInput>
    connectOrCreate?: PropertyCreateOrConnectWithoutImagesInput
    upsert?: PropertyUpsertWithoutImagesInput
    connect?: PropertyWhereUniqueInput
    update?: XOR<XOR<PropertyUpdateToOneWithWhereWithoutImagesInput, PropertyUpdateWithoutImagesInput>, PropertyUncheckedUpdateWithoutImagesInput>
  }

  export type UserCreateNestedOneWithoutRentalApplicationsInput = {
    create?: XOR<UserCreateWithoutRentalApplicationsInput, UserUncheckedCreateWithoutRentalApplicationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRentalApplicationsInput
    connect?: UserWhereUniqueInput
  }

  export type ApplicationSubmissionCreateNestedManyWithoutApplicationInput = {
    create?: XOR<ApplicationSubmissionCreateWithoutApplicationInput, ApplicationSubmissionUncheckedCreateWithoutApplicationInput> | ApplicationSubmissionCreateWithoutApplicationInput[] | ApplicationSubmissionUncheckedCreateWithoutApplicationInput[]
    connectOrCreate?: ApplicationSubmissionCreateOrConnectWithoutApplicationInput | ApplicationSubmissionCreateOrConnectWithoutApplicationInput[]
    createMany?: ApplicationSubmissionCreateManyApplicationInputEnvelope
    connect?: ApplicationSubmissionWhereUniqueInput | ApplicationSubmissionWhereUniqueInput[]
  }

  export type ApplicationDocumentCreateNestedManyWithoutApplicationInput = {
    create?: XOR<ApplicationDocumentCreateWithoutApplicationInput, ApplicationDocumentUncheckedCreateWithoutApplicationInput> | ApplicationDocumentCreateWithoutApplicationInput[] | ApplicationDocumentUncheckedCreateWithoutApplicationInput[]
    connectOrCreate?: ApplicationDocumentCreateOrConnectWithoutApplicationInput | ApplicationDocumentCreateOrConnectWithoutApplicationInput[]
    createMany?: ApplicationDocumentCreateManyApplicationInputEnvelope
    connect?: ApplicationDocumentWhereUniqueInput | ApplicationDocumentWhereUniqueInput[]
  }

  export type ApplicationSubmissionUncheckedCreateNestedManyWithoutApplicationInput = {
    create?: XOR<ApplicationSubmissionCreateWithoutApplicationInput, ApplicationSubmissionUncheckedCreateWithoutApplicationInput> | ApplicationSubmissionCreateWithoutApplicationInput[] | ApplicationSubmissionUncheckedCreateWithoutApplicationInput[]
    connectOrCreate?: ApplicationSubmissionCreateOrConnectWithoutApplicationInput | ApplicationSubmissionCreateOrConnectWithoutApplicationInput[]
    createMany?: ApplicationSubmissionCreateManyApplicationInputEnvelope
    connect?: ApplicationSubmissionWhereUniqueInput | ApplicationSubmissionWhereUniqueInput[]
  }

  export type ApplicationDocumentUncheckedCreateNestedManyWithoutApplicationInput = {
    create?: XOR<ApplicationDocumentCreateWithoutApplicationInput, ApplicationDocumentUncheckedCreateWithoutApplicationInput> | ApplicationDocumentCreateWithoutApplicationInput[] | ApplicationDocumentUncheckedCreateWithoutApplicationInput[]
    connectOrCreate?: ApplicationDocumentCreateOrConnectWithoutApplicationInput | ApplicationDocumentCreateOrConnectWithoutApplicationInput[]
    createMany?: ApplicationDocumentCreateManyApplicationInputEnvelope
    connect?: ApplicationDocumentWhereUniqueInput | ApplicationDocumentWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutRentalApplicationsNestedInput = {
    create?: XOR<UserCreateWithoutRentalApplicationsInput, UserUncheckedCreateWithoutRentalApplicationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRentalApplicationsInput
    upsert?: UserUpsertWithoutRentalApplicationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRentalApplicationsInput, UserUpdateWithoutRentalApplicationsInput>, UserUncheckedUpdateWithoutRentalApplicationsInput>
  }

  export type ApplicationSubmissionUpdateManyWithoutApplicationNestedInput = {
    create?: XOR<ApplicationSubmissionCreateWithoutApplicationInput, ApplicationSubmissionUncheckedCreateWithoutApplicationInput> | ApplicationSubmissionCreateWithoutApplicationInput[] | ApplicationSubmissionUncheckedCreateWithoutApplicationInput[]
    connectOrCreate?: ApplicationSubmissionCreateOrConnectWithoutApplicationInput | ApplicationSubmissionCreateOrConnectWithoutApplicationInput[]
    upsert?: ApplicationSubmissionUpsertWithWhereUniqueWithoutApplicationInput | ApplicationSubmissionUpsertWithWhereUniqueWithoutApplicationInput[]
    createMany?: ApplicationSubmissionCreateManyApplicationInputEnvelope
    set?: ApplicationSubmissionWhereUniqueInput | ApplicationSubmissionWhereUniqueInput[]
    disconnect?: ApplicationSubmissionWhereUniqueInput | ApplicationSubmissionWhereUniqueInput[]
    delete?: ApplicationSubmissionWhereUniqueInput | ApplicationSubmissionWhereUniqueInput[]
    connect?: ApplicationSubmissionWhereUniqueInput | ApplicationSubmissionWhereUniqueInput[]
    update?: ApplicationSubmissionUpdateWithWhereUniqueWithoutApplicationInput | ApplicationSubmissionUpdateWithWhereUniqueWithoutApplicationInput[]
    updateMany?: ApplicationSubmissionUpdateManyWithWhereWithoutApplicationInput | ApplicationSubmissionUpdateManyWithWhereWithoutApplicationInput[]
    deleteMany?: ApplicationSubmissionScalarWhereInput | ApplicationSubmissionScalarWhereInput[]
  }

  export type ApplicationDocumentUpdateManyWithoutApplicationNestedInput = {
    create?: XOR<ApplicationDocumentCreateWithoutApplicationInput, ApplicationDocumentUncheckedCreateWithoutApplicationInput> | ApplicationDocumentCreateWithoutApplicationInput[] | ApplicationDocumentUncheckedCreateWithoutApplicationInput[]
    connectOrCreate?: ApplicationDocumentCreateOrConnectWithoutApplicationInput | ApplicationDocumentCreateOrConnectWithoutApplicationInput[]
    upsert?: ApplicationDocumentUpsertWithWhereUniqueWithoutApplicationInput | ApplicationDocumentUpsertWithWhereUniqueWithoutApplicationInput[]
    createMany?: ApplicationDocumentCreateManyApplicationInputEnvelope
    set?: ApplicationDocumentWhereUniqueInput | ApplicationDocumentWhereUniqueInput[]
    disconnect?: ApplicationDocumentWhereUniqueInput | ApplicationDocumentWhereUniqueInput[]
    delete?: ApplicationDocumentWhereUniqueInput | ApplicationDocumentWhereUniqueInput[]
    connect?: ApplicationDocumentWhereUniqueInput | ApplicationDocumentWhereUniqueInput[]
    update?: ApplicationDocumentUpdateWithWhereUniqueWithoutApplicationInput | ApplicationDocumentUpdateWithWhereUniqueWithoutApplicationInput[]
    updateMany?: ApplicationDocumentUpdateManyWithWhereWithoutApplicationInput | ApplicationDocumentUpdateManyWithWhereWithoutApplicationInput[]
    deleteMany?: ApplicationDocumentScalarWhereInput | ApplicationDocumentScalarWhereInput[]
  }

  export type ApplicationSubmissionUncheckedUpdateManyWithoutApplicationNestedInput = {
    create?: XOR<ApplicationSubmissionCreateWithoutApplicationInput, ApplicationSubmissionUncheckedCreateWithoutApplicationInput> | ApplicationSubmissionCreateWithoutApplicationInput[] | ApplicationSubmissionUncheckedCreateWithoutApplicationInput[]
    connectOrCreate?: ApplicationSubmissionCreateOrConnectWithoutApplicationInput | ApplicationSubmissionCreateOrConnectWithoutApplicationInput[]
    upsert?: ApplicationSubmissionUpsertWithWhereUniqueWithoutApplicationInput | ApplicationSubmissionUpsertWithWhereUniqueWithoutApplicationInput[]
    createMany?: ApplicationSubmissionCreateManyApplicationInputEnvelope
    set?: ApplicationSubmissionWhereUniqueInput | ApplicationSubmissionWhereUniqueInput[]
    disconnect?: ApplicationSubmissionWhereUniqueInput | ApplicationSubmissionWhereUniqueInput[]
    delete?: ApplicationSubmissionWhereUniqueInput | ApplicationSubmissionWhereUniqueInput[]
    connect?: ApplicationSubmissionWhereUniqueInput | ApplicationSubmissionWhereUniqueInput[]
    update?: ApplicationSubmissionUpdateWithWhereUniqueWithoutApplicationInput | ApplicationSubmissionUpdateWithWhereUniqueWithoutApplicationInput[]
    updateMany?: ApplicationSubmissionUpdateManyWithWhereWithoutApplicationInput | ApplicationSubmissionUpdateManyWithWhereWithoutApplicationInput[]
    deleteMany?: ApplicationSubmissionScalarWhereInput | ApplicationSubmissionScalarWhereInput[]
  }

  export type ApplicationDocumentUncheckedUpdateManyWithoutApplicationNestedInput = {
    create?: XOR<ApplicationDocumentCreateWithoutApplicationInput, ApplicationDocumentUncheckedCreateWithoutApplicationInput> | ApplicationDocumentCreateWithoutApplicationInput[] | ApplicationDocumentUncheckedCreateWithoutApplicationInput[]
    connectOrCreate?: ApplicationDocumentCreateOrConnectWithoutApplicationInput | ApplicationDocumentCreateOrConnectWithoutApplicationInput[]
    upsert?: ApplicationDocumentUpsertWithWhereUniqueWithoutApplicationInput | ApplicationDocumentUpsertWithWhereUniqueWithoutApplicationInput[]
    createMany?: ApplicationDocumentCreateManyApplicationInputEnvelope
    set?: ApplicationDocumentWhereUniqueInput | ApplicationDocumentWhereUniqueInput[]
    disconnect?: ApplicationDocumentWhereUniqueInput | ApplicationDocumentWhereUniqueInput[]
    delete?: ApplicationDocumentWhereUniqueInput | ApplicationDocumentWhereUniqueInput[]
    connect?: ApplicationDocumentWhereUniqueInput | ApplicationDocumentWhereUniqueInput[]
    update?: ApplicationDocumentUpdateWithWhereUniqueWithoutApplicationInput | ApplicationDocumentUpdateWithWhereUniqueWithoutApplicationInput[]
    updateMany?: ApplicationDocumentUpdateManyWithWhereWithoutApplicationInput | ApplicationDocumentUpdateManyWithWhereWithoutApplicationInput[]
    deleteMany?: ApplicationDocumentScalarWhereInput | ApplicationDocumentScalarWhereInput[]
  }

  export type RentalApplicationCreateNestedOneWithoutSubmissionsInput = {
    create?: XOR<RentalApplicationCreateWithoutSubmissionsInput, RentalApplicationUncheckedCreateWithoutSubmissionsInput>
    connectOrCreate?: RentalApplicationCreateOrConnectWithoutSubmissionsInput
    connect?: RentalApplicationWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReviewedSubmissionsInput = {
    create?: XOR<UserCreateWithoutReviewedSubmissionsInput, UserUncheckedCreateWithoutReviewedSubmissionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewedSubmissionsInput
    connect?: UserWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type RentalApplicationUpdateOneRequiredWithoutSubmissionsNestedInput = {
    create?: XOR<RentalApplicationCreateWithoutSubmissionsInput, RentalApplicationUncheckedCreateWithoutSubmissionsInput>
    connectOrCreate?: RentalApplicationCreateOrConnectWithoutSubmissionsInput
    upsert?: RentalApplicationUpsertWithoutSubmissionsInput
    connect?: RentalApplicationWhereUniqueInput
    update?: XOR<XOR<RentalApplicationUpdateToOneWithWhereWithoutSubmissionsInput, RentalApplicationUpdateWithoutSubmissionsInput>, RentalApplicationUncheckedUpdateWithoutSubmissionsInput>
  }

  export type UserUpdateOneWithoutReviewedSubmissionsNestedInput = {
    create?: XOR<UserCreateWithoutReviewedSubmissionsInput, UserUncheckedCreateWithoutReviewedSubmissionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewedSubmissionsInput
    upsert?: UserUpsertWithoutReviewedSubmissionsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReviewedSubmissionsInput, UserUpdateWithoutReviewedSubmissionsInput>, UserUncheckedUpdateWithoutReviewedSubmissionsInput>
  }

  export type RentalApplicationCreateNestedOneWithoutDocumentsInput = {
    create?: XOR<RentalApplicationCreateWithoutDocumentsInput, RentalApplicationUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: RentalApplicationCreateOrConnectWithoutDocumentsInput
    connect?: RentalApplicationWhereUniqueInput
  }

  export type RentalApplicationUpdateOneRequiredWithoutDocumentsNestedInput = {
    create?: XOR<RentalApplicationCreateWithoutDocumentsInput, RentalApplicationUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: RentalApplicationCreateOrConnectWithoutDocumentsInput
    upsert?: RentalApplicationUpsertWithoutDocumentsInput
    connect?: RentalApplicationWhereUniqueInput
    update?: XOR<XOR<RentalApplicationUpdateToOneWithWhereWithoutDocumentsInput, RentalApplicationUpdateWithoutDocumentsInput>, RentalApplicationUncheckedUpdateWithoutDocumentsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type PropertyCreateWithoutCreatedByInput = {
    title: string
    address: string
    city: string
    state: string
    zipCode: string
    price: number
    bedrooms: number
    bathrooms: number
    squareFeet: number
    description: string
    propertyType: string
    status?: string
    isRental?: boolean
    rentalPrice?: number | null
    featuredImage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    acres?: string | null
    yearBuilt?: number | null
    displayOnHomepage?: boolean
    images?: PropertyImageCreateNestedManyWithoutPropertyInput
  }

  export type PropertyUncheckedCreateWithoutCreatedByInput = {
    id?: number
    title: string
    address: string
    city: string
    state: string
    zipCode: string
    price: number
    bedrooms: number
    bathrooms: number
    squareFeet: number
    description: string
    propertyType: string
    status?: string
    isRental?: boolean
    rentalPrice?: number | null
    featuredImage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    acres?: string | null
    yearBuilt?: number | null
    displayOnHomepage?: boolean
    images?: PropertyImageUncheckedCreateNestedManyWithoutPropertyInput
  }

  export type PropertyCreateOrConnectWithoutCreatedByInput = {
    where: PropertyWhereUniqueInput
    create: XOR<PropertyCreateWithoutCreatedByInput, PropertyUncheckedCreateWithoutCreatedByInput>
  }

  export type PropertyCreateManyCreatedByInputEnvelope = {
    data: PropertyCreateManyCreatedByInput | PropertyCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type RentalApplicationCreateWithoutUserInput = {
    firstName: string
    lastName: string
    email: string
    phone: string
    currentAddress: string
    city: string
    state: string
    zipCode: string
    moveInDate: Date | string
    employer?: string | null
    occupation?: string | null
    monthlyIncome: number
    additionalOccupants: number
    pets?: boolean
    petDetails?: string | null
    creditScore?: number | null
    hasEvictions?: boolean
    hasFelonies?: boolean
    additionalInfo?: string | null
    isComplete?: boolean
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    submissions?: ApplicationSubmissionCreateNestedManyWithoutApplicationInput
    documents?: ApplicationDocumentCreateNestedManyWithoutApplicationInput
  }

  export type RentalApplicationUncheckedCreateWithoutUserInput = {
    id?: number
    firstName: string
    lastName: string
    email: string
    phone: string
    currentAddress: string
    city: string
    state: string
    zipCode: string
    moveInDate: Date | string
    employer?: string | null
    occupation?: string | null
    monthlyIncome: number
    additionalOccupants: number
    pets?: boolean
    petDetails?: string | null
    creditScore?: number | null
    hasEvictions?: boolean
    hasFelonies?: boolean
    additionalInfo?: string | null
    isComplete?: boolean
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    submissions?: ApplicationSubmissionUncheckedCreateNestedManyWithoutApplicationInput
    documents?: ApplicationDocumentUncheckedCreateNestedManyWithoutApplicationInput
  }

  export type RentalApplicationCreateOrConnectWithoutUserInput = {
    where: RentalApplicationWhereUniqueInput
    create: XOR<RentalApplicationCreateWithoutUserInput, RentalApplicationUncheckedCreateWithoutUserInput>
  }

  export type RentalApplicationCreateManyUserInputEnvelope = {
    data: RentalApplicationCreateManyUserInput | RentalApplicationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ApplicationSubmissionCreateWithoutReviewedByInput = {
    propertyId: number
    status?: string
    notes?: string | null
    reviewedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    application: RentalApplicationCreateNestedOneWithoutSubmissionsInput
  }

  export type ApplicationSubmissionUncheckedCreateWithoutReviewedByInput = {
    id?: number
    applicationId: number
    propertyId: number
    status?: string
    notes?: string | null
    reviewedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ApplicationSubmissionCreateOrConnectWithoutReviewedByInput = {
    where: ApplicationSubmissionWhereUniqueInput
    create: XOR<ApplicationSubmissionCreateWithoutReviewedByInput, ApplicationSubmissionUncheckedCreateWithoutReviewedByInput>
  }

  export type ApplicationSubmissionCreateManyReviewedByInputEnvelope = {
    data: ApplicationSubmissionCreateManyReviewedByInput | ApplicationSubmissionCreateManyReviewedByInput[]
    skipDuplicates?: boolean
  }

  export type PropertyUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: PropertyWhereUniqueInput
    update: XOR<PropertyUpdateWithoutCreatedByInput, PropertyUncheckedUpdateWithoutCreatedByInput>
    create: XOR<PropertyCreateWithoutCreatedByInput, PropertyUncheckedCreateWithoutCreatedByInput>
  }

  export type PropertyUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: PropertyWhereUniqueInput
    data: XOR<PropertyUpdateWithoutCreatedByInput, PropertyUncheckedUpdateWithoutCreatedByInput>
  }

  export type PropertyUpdateManyWithWhereWithoutCreatedByInput = {
    where: PropertyScalarWhereInput
    data: XOR<PropertyUpdateManyMutationInput, PropertyUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type PropertyScalarWhereInput = {
    AND?: PropertyScalarWhereInput | PropertyScalarWhereInput[]
    OR?: PropertyScalarWhereInput[]
    NOT?: PropertyScalarWhereInput | PropertyScalarWhereInput[]
    id?: IntFilter<"Property"> | number
    title?: StringFilter<"Property"> | string
    address?: StringFilter<"Property"> | string
    city?: StringFilter<"Property"> | string
    state?: StringFilter<"Property"> | string
    zipCode?: StringFilter<"Property"> | string
    price?: IntFilter<"Property"> | number
    bedrooms?: IntFilter<"Property"> | number
    bathrooms?: IntFilter<"Property"> | number
    squareFeet?: IntFilter<"Property"> | number
    description?: StringFilter<"Property"> | string
    propertyType?: StringFilter<"Property"> | string
    status?: StringFilter<"Property"> | string
    isRental?: BoolFilter<"Property"> | boolean
    rentalPrice?: IntNullableFilter<"Property"> | number | null
    featuredImage?: StringNullableFilter<"Property"> | string | null
    createdAt?: DateTimeFilter<"Property"> | Date | string
    updatedAt?: DateTimeFilter<"Property"> | Date | string
    createdById?: IntNullableFilter<"Property"> | number | null
    acres?: StringNullableFilter<"Property"> | string | null
    yearBuilt?: IntNullableFilter<"Property"> | number | null
    displayOnHomepage?: BoolFilter<"Property"> | boolean
  }

  export type RentalApplicationUpsertWithWhereUniqueWithoutUserInput = {
    where: RentalApplicationWhereUniqueInput
    update: XOR<RentalApplicationUpdateWithoutUserInput, RentalApplicationUncheckedUpdateWithoutUserInput>
    create: XOR<RentalApplicationCreateWithoutUserInput, RentalApplicationUncheckedCreateWithoutUserInput>
  }

  export type RentalApplicationUpdateWithWhereUniqueWithoutUserInput = {
    where: RentalApplicationWhereUniqueInput
    data: XOR<RentalApplicationUpdateWithoutUserInput, RentalApplicationUncheckedUpdateWithoutUserInput>
  }

  export type RentalApplicationUpdateManyWithWhereWithoutUserInput = {
    where: RentalApplicationScalarWhereInput
    data: XOR<RentalApplicationUpdateManyMutationInput, RentalApplicationUncheckedUpdateManyWithoutUserInput>
  }

  export type RentalApplicationScalarWhereInput = {
    AND?: RentalApplicationScalarWhereInput | RentalApplicationScalarWhereInput[]
    OR?: RentalApplicationScalarWhereInput[]
    NOT?: RentalApplicationScalarWhereInput | RentalApplicationScalarWhereInput[]
    id?: IntFilter<"RentalApplication"> | number
    userId?: IntFilter<"RentalApplication"> | number
    firstName?: StringFilter<"RentalApplication"> | string
    lastName?: StringFilter<"RentalApplication"> | string
    email?: StringFilter<"RentalApplication"> | string
    phone?: StringFilter<"RentalApplication"> | string
    currentAddress?: StringFilter<"RentalApplication"> | string
    city?: StringFilter<"RentalApplication"> | string
    state?: StringFilter<"RentalApplication"> | string
    zipCode?: StringFilter<"RentalApplication"> | string
    moveInDate?: DateTimeFilter<"RentalApplication"> | Date | string
    employer?: StringNullableFilter<"RentalApplication"> | string | null
    occupation?: StringNullableFilter<"RentalApplication"> | string | null
    monthlyIncome?: IntFilter<"RentalApplication"> | number
    additionalOccupants?: IntFilter<"RentalApplication"> | number
    pets?: BoolFilter<"RentalApplication"> | boolean
    petDetails?: StringNullableFilter<"RentalApplication"> | string | null
    creditScore?: IntNullableFilter<"RentalApplication"> | number | null
    hasEvictions?: BoolFilter<"RentalApplication"> | boolean
    hasFelonies?: BoolFilter<"RentalApplication"> | boolean
    additionalInfo?: StringNullableFilter<"RentalApplication"> | string | null
    isComplete?: BoolFilter<"RentalApplication"> | boolean
    isVerified?: BoolFilter<"RentalApplication"> | boolean
    createdAt?: DateTimeFilter<"RentalApplication"> | Date | string
    updatedAt?: DateTimeFilter<"RentalApplication"> | Date | string
  }

  export type ApplicationSubmissionUpsertWithWhereUniqueWithoutReviewedByInput = {
    where: ApplicationSubmissionWhereUniqueInput
    update: XOR<ApplicationSubmissionUpdateWithoutReviewedByInput, ApplicationSubmissionUncheckedUpdateWithoutReviewedByInput>
    create: XOR<ApplicationSubmissionCreateWithoutReviewedByInput, ApplicationSubmissionUncheckedCreateWithoutReviewedByInput>
  }

  export type ApplicationSubmissionUpdateWithWhereUniqueWithoutReviewedByInput = {
    where: ApplicationSubmissionWhereUniqueInput
    data: XOR<ApplicationSubmissionUpdateWithoutReviewedByInput, ApplicationSubmissionUncheckedUpdateWithoutReviewedByInput>
  }

  export type ApplicationSubmissionUpdateManyWithWhereWithoutReviewedByInput = {
    where: ApplicationSubmissionScalarWhereInput
    data: XOR<ApplicationSubmissionUpdateManyMutationInput, ApplicationSubmissionUncheckedUpdateManyWithoutReviewedByInput>
  }

  export type ApplicationSubmissionScalarWhereInput = {
    AND?: ApplicationSubmissionScalarWhereInput | ApplicationSubmissionScalarWhereInput[]
    OR?: ApplicationSubmissionScalarWhereInput[]
    NOT?: ApplicationSubmissionScalarWhereInput | ApplicationSubmissionScalarWhereInput[]
    id?: IntFilter<"ApplicationSubmission"> | number
    applicationId?: IntFilter<"ApplicationSubmission"> | number
    propertyId?: IntFilter<"ApplicationSubmission"> | number
    status?: StringFilter<"ApplicationSubmission"> | string
    notes?: StringNullableFilter<"ApplicationSubmission"> | string | null
    reviewedById?: IntNullableFilter<"ApplicationSubmission"> | number | null
    reviewedAt?: DateTimeNullableFilter<"ApplicationSubmission"> | Date | string | null
    createdAt?: DateTimeFilter<"ApplicationSubmission"> | Date | string
    updatedAt?: DateTimeFilter<"ApplicationSubmission"> | Date | string
  }

  export type UserCreateWithoutPropertiesInput = {
    username: string
    password: string
    email: string
    name?: string | null
    avatar?: string | null
    isAdmin?: boolean
    createdAt?: Date | string
    rentalApplications?: RentalApplicationCreateNestedManyWithoutUserInput
    reviewedSubmissions?: ApplicationSubmissionCreateNestedManyWithoutReviewedByInput
  }

  export type UserUncheckedCreateWithoutPropertiesInput = {
    id?: number
    username: string
    password: string
    email: string
    name?: string | null
    avatar?: string | null
    isAdmin?: boolean
    createdAt?: Date | string
    rentalApplications?: RentalApplicationUncheckedCreateNestedManyWithoutUserInput
    reviewedSubmissions?: ApplicationSubmissionUncheckedCreateNestedManyWithoutReviewedByInput
  }

  export type UserCreateOrConnectWithoutPropertiesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPropertiesInput, UserUncheckedCreateWithoutPropertiesInput>
  }

  export type PropertyImageCreateWithoutPropertyInput = {
    imageUrl: string
    caption?: string | null
    displayOrder?: number
    createdAt?: Date | string
  }

  export type PropertyImageUncheckedCreateWithoutPropertyInput = {
    id?: number
    imageUrl: string
    caption?: string | null
    displayOrder?: number
    createdAt?: Date | string
  }

  export type PropertyImageCreateOrConnectWithoutPropertyInput = {
    where: PropertyImageWhereUniqueInput
    create: XOR<PropertyImageCreateWithoutPropertyInput, PropertyImageUncheckedCreateWithoutPropertyInput>
  }

  export type PropertyImageCreateManyPropertyInputEnvelope = {
    data: PropertyImageCreateManyPropertyInput | PropertyImageCreateManyPropertyInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutPropertiesInput = {
    update: XOR<UserUpdateWithoutPropertiesInput, UserUncheckedUpdateWithoutPropertiesInput>
    create: XOR<UserCreateWithoutPropertiesInput, UserUncheckedCreateWithoutPropertiesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPropertiesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPropertiesInput, UserUncheckedUpdateWithoutPropertiesInput>
  }

  export type UserUpdateWithoutPropertiesInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rentalApplications?: RentalApplicationUpdateManyWithoutUserNestedInput
    reviewedSubmissions?: ApplicationSubmissionUpdateManyWithoutReviewedByNestedInput
  }

  export type UserUncheckedUpdateWithoutPropertiesInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rentalApplications?: RentalApplicationUncheckedUpdateManyWithoutUserNestedInput
    reviewedSubmissions?: ApplicationSubmissionUncheckedUpdateManyWithoutReviewedByNestedInput
  }

  export type PropertyImageUpsertWithWhereUniqueWithoutPropertyInput = {
    where: PropertyImageWhereUniqueInput
    update: XOR<PropertyImageUpdateWithoutPropertyInput, PropertyImageUncheckedUpdateWithoutPropertyInput>
    create: XOR<PropertyImageCreateWithoutPropertyInput, PropertyImageUncheckedCreateWithoutPropertyInput>
  }

  export type PropertyImageUpdateWithWhereUniqueWithoutPropertyInput = {
    where: PropertyImageWhereUniqueInput
    data: XOR<PropertyImageUpdateWithoutPropertyInput, PropertyImageUncheckedUpdateWithoutPropertyInput>
  }

  export type PropertyImageUpdateManyWithWhereWithoutPropertyInput = {
    where: PropertyImageScalarWhereInput
    data: XOR<PropertyImageUpdateManyMutationInput, PropertyImageUncheckedUpdateManyWithoutPropertyInput>
  }

  export type PropertyImageScalarWhereInput = {
    AND?: PropertyImageScalarWhereInput | PropertyImageScalarWhereInput[]
    OR?: PropertyImageScalarWhereInput[]
    NOT?: PropertyImageScalarWhereInput | PropertyImageScalarWhereInput[]
    id?: IntFilter<"PropertyImage"> | number
    propertyId?: IntFilter<"PropertyImage"> | number
    imageUrl?: StringFilter<"PropertyImage"> | string
    caption?: StringNullableFilter<"PropertyImage"> | string | null
    displayOrder?: IntFilter<"PropertyImage"> | number
    createdAt?: DateTimeFilter<"PropertyImage"> | Date | string
  }

  export type PropertyCreateWithoutImagesInput = {
    title: string
    address: string
    city: string
    state: string
    zipCode: string
    price: number
    bedrooms: number
    bathrooms: number
    squareFeet: number
    description: string
    propertyType: string
    status?: string
    isRental?: boolean
    rentalPrice?: number | null
    featuredImage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    acres?: string | null
    yearBuilt?: number | null
    displayOnHomepage?: boolean
    createdBy?: UserCreateNestedOneWithoutPropertiesInput
  }

  export type PropertyUncheckedCreateWithoutImagesInput = {
    id?: number
    title: string
    address: string
    city: string
    state: string
    zipCode: string
    price: number
    bedrooms: number
    bathrooms: number
    squareFeet: number
    description: string
    propertyType: string
    status?: string
    isRental?: boolean
    rentalPrice?: number | null
    featuredImage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdById?: number | null
    acres?: string | null
    yearBuilt?: number | null
    displayOnHomepage?: boolean
  }

  export type PropertyCreateOrConnectWithoutImagesInput = {
    where: PropertyWhereUniqueInput
    create: XOR<PropertyCreateWithoutImagesInput, PropertyUncheckedCreateWithoutImagesInput>
  }

  export type PropertyUpsertWithoutImagesInput = {
    update: XOR<PropertyUpdateWithoutImagesInput, PropertyUncheckedUpdateWithoutImagesInput>
    create: XOR<PropertyCreateWithoutImagesInput, PropertyUncheckedCreateWithoutImagesInput>
    where?: PropertyWhereInput
  }

  export type PropertyUpdateToOneWithWhereWithoutImagesInput = {
    where?: PropertyWhereInput
    data: XOR<PropertyUpdateWithoutImagesInput, PropertyUncheckedUpdateWithoutImagesInput>
  }

  export type PropertyUpdateWithoutImagesInput = {
    title?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    bedrooms?: IntFieldUpdateOperationsInput | number
    bathrooms?: IntFieldUpdateOperationsInput | number
    squareFeet?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    propertyType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    isRental?: BoolFieldUpdateOperationsInput | boolean
    rentalPrice?: NullableIntFieldUpdateOperationsInput | number | null
    featuredImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    acres?: NullableStringFieldUpdateOperationsInput | string | null
    yearBuilt?: NullableIntFieldUpdateOperationsInput | number | null
    displayOnHomepage?: BoolFieldUpdateOperationsInput | boolean
    createdBy?: UserUpdateOneWithoutPropertiesNestedInput
  }

  export type PropertyUncheckedUpdateWithoutImagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    bedrooms?: IntFieldUpdateOperationsInput | number
    bathrooms?: IntFieldUpdateOperationsInput | number
    squareFeet?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    propertyType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    isRental?: BoolFieldUpdateOperationsInput | boolean
    rentalPrice?: NullableIntFieldUpdateOperationsInput | number | null
    featuredImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: NullableIntFieldUpdateOperationsInput | number | null
    acres?: NullableStringFieldUpdateOperationsInput | string | null
    yearBuilt?: NullableIntFieldUpdateOperationsInput | number | null
    displayOnHomepage?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserCreateWithoutRentalApplicationsInput = {
    username: string
    password: string
    email: string
    name?: string | null
    avatar?: string | null
    isAdmin?: boolean
    createdAt?: Date | string
    properties?: PropertyCreateNestedManyWithoutCreatedByInput
    reviewedSubmissions?: ApplicationSubmissionCreateNestedManyWithoutReviewedByInput
  }

  export type UserUncheckedCreateWithoutRentalApplicationsInput = {
    id?: number
    username: string
    password: string
    email: string
    name?: string | null
    avatar?: string | null
    isAdmin?: boolean
    createdAt?: Date | string
    properties?: PropertyUncheckedCreateNestedManyWithoutCreatedByInput
    reviewedSubmissions?: ApplicationSubmissionUncheckedCreateNestedManyWithoutReviewedByInput
  }

  export type UserCreateOrConnectWithoutRentalApplicationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRentalApplicationsInput, UserUncheckedCreateWithoutRentalApplicationsInput>
  }

  export type ApplicationSubmissionCreateWithoutApplicationInput = {
    propertyId: number
    status?: string
    notes?: string | null
    reviewedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    reviewedBy?: UserCreateNestedOneWithoutReviewedSubmissionsInput
  }

  export type ApplicationSubmissionUncheckedCreateWithoutApplicationInput = {
    id?: number
    propertyId: number
    status?: string
    notes?: string | null
    reviewedById?: number | null
    reviewedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ApplicationSubmissionCreateOrConnectWithoutApplicationInput = {
    where: ApplicationSubmissionWhereUniqueInput
    create: XOR<ApplicationSubmissionCreateWithoutApplicationInput, ApplicationSubmissionUncheckedCreateWithoutApplicationInput>
  }

  export type ApplicationSubmissionCreateManyApplicationInputEnvelope = {
    data: ApplicationSubmissionCreateManyApplicationInput | ApplicationSubmissionCreateManyApplicationInput[]
    skipDuplicates?: boolean
  }

  export type ApplicationDocumentCreateWithoutApplicationInput = {
    documentType: string
    documentUrl: string
    fileName: string
    fileSize: number
    uploadedAt?: Date | string
  }

  export type ApplicationDocumentUncheckedCreateWithoutApplicationInput = {
    id?: number
    documentType: string
    documentUrl: string
    fileName: string
    fileSize: number
    uploadedAt?: Date | string
  }

  export type ApplicationDocumentCreateOrConnectWithoutApplicationInput = {
    where: ApplicationDocumentWhereUniqueInput
    create: XOR<ApplicationDocumentCreateWithoutApplicationInput, ApplicationDocumentUncheckedCreateWithoutApplicationInput>
  }

  export type ApplicationDocumentCreateManyApplicationInputEnvelope = {
    data: ApplicationDocumentCreateManyApplicationInput | ApplicationDocumentCreateManyApplicationInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutRentalApplicationsInput = {
    update: XOR<UserUpdateWithoutRentalApplicationsInput, UserUncheckedUpdateWithoutRentalApplicationsInput>
    create: XOR<UserCreateWithoutRentalApplicationsInput, UserUncheckedCreateWithoutRentalApplicationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRentalApplicationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRentalApplicationsInput, UserUncheckedUpdateWithoutRentalApplicationsInput>
  }

  export type UserUpdateWithoutRentalApplicationsInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    properties?: PropertyUpdateManyWithoutCreatedByNestedInput
    reviewedSubmissions?: ApplicationSubmissionUpdateManyWithoutReviewedByNestedInput
  }

  export type UserUncheckedUpdateWithoutRentalApplicationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    properties?: PropertyUncheckedUpdateManyWithoutCreatedByNestedInput
    reviewedSubmissions?: ApplicationSubmissionUncheckedUpdateManyWithoutReviewedByNestedInput
  }

  export type ApplicationSubmissionUpsertWithWhereUniqueWithoutApplicationInput = {
    where: ApplicationSubmissionWhereUniqueInput
    update: XOR<ApplicationSubmissionUpdateWithoutApplicationInput, ApplicationSubmissionUncheckedUpdateWithoutApplicationInput>
    create: XOR<ApplicationSubmissionCreateWithoutApplicationInput, ApplicationSubmissionUncheckedCreateWithoutApplicationInput>
  }

  export type ApplicationSubmissionUpdateWithWhereUniqueWithoutApplicationInput = {
    where: ApplicationSubmissionWhereUniqueInput
    data: XOR<ApplicationSubmissionUpdateWithoutApplicationInput, ApplicationSubmissionUncheckedUpdateWithoutApplicationInput>
  }

  export type ApplicationSubmissionUpdateManyWithWhereWithoutApplicationInput = {
    where: ApplicationSubmissionScalarWhereInput
    data: XOR<ApplicationSubmissionUpdateManyMutationInput, ApplicationSubmissionUncheckedUpdateManyWithoutApplicationInput>
  }

  export type ApplicationDocumentUpsertWithWhereUniqueWithoutApplicationInput = {
    where: ApplicationDocumentWhereUniqueInput
    update: XOR<ApplicationDocumentUpdateWithoutApplicationInput, ApplicationDocumentUncheckedUpdateWithoutApplicationInput>
    create: XOR<ApplicationDocumentCreateWithoutApplicationInput, ApplicationDocumentUncheckedCreateWithoutApplicationInput>
  }

  export type ApplicationDocumentUpdateWithWhereUniqueWithoutApplicationInput = {
    where: ApplicationDocumentWhereUniqueInput
    data: XOR<ApplicationDocumentUpdateWithoutApplicationInput, ApplicationDocumentUncheckedUpdateWithoutApplicationInput>
  }

  export type ApplicationDocumentUpdateManyWithWhereWithoutApplicationInput = {
    where: ApplicationDocumentScalarWhereInput
    data: XOR<ApplicationDocumentUpdateManyMutationInput, ApplicationDocumentUncheckedUpdateManyWithoutApplicationInput>
  }

  export type ApplicationDocumentScalarWhereInput = {
    AND?: ApplicationDocumentScalarWhereInput | ApplicationDocumentScalarWhereInput[]
    OR?: ApplicationDocumentScalarWhereInput[]
    NOT?: ApplicationDocumentScalarWhereInput | ApplicationDocumentScalarWhereInput[]
    id?: IntFilter<"ApplicationDocument"> | number
    applicationId?: IntFilter<"ApplicationDocument"> | number
    documentType?: StringFilter<"ApplicationDocument"> | string
    documentUrl?: StringFilter<"ApplicationDocument"> | string
    fileName?: StringFilter<"ApplicationDocument"> | string
    fileSize?: IntFilter<"ApplicationDocument"> | number
    uploadedAt?: DateTimeFilter<"ApplicationDocument"> | Date | string
  }

  export type RentalApplicationCreateWithoutSubmissionsInput = {
    firstName: string
    lastName: string
    email: string
    phone: string
    currentAddress: string
    city: string
    state: string
    zipCode: string
    moveInDate: Date | string
    employer?: string | null
    occupation?: string | null
    monthlyIncome: number
    additionalOccupants: number
    pets?: boolean
    petDetails?: string | null
    creditScore?: number | null
    hasEvictions?: boolean
    hasFelonies?: boolean
    additionalInfo?: string | null
    isComplete?: boolean
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutRentalApplicationsInput
    documents?: ApplicationDocumentCreateNestedManyWithoutApplicationInput
  }

  export type RentalApplicationUncheckedCreateWithoutSubmissionsInput = {
    id?: number
    userId: number
    firstName: string
    lastName: string
    email: string
    phone: string
    currentAddress: string
    city: string
    state: string
    zipCode: string
    moveInDate: Date | string
    employer?: string | null
    occupation?: string | null
    monthlyIncome: number
    additionalOccupants: number
    pets?: boolean
    petDetails?: string | null
    creditScore?: number | null
    hasEvictions?: boolean
    hasFelonies?: boolean
    additionalInfo?: string | null
    isComplete?: boolean
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    documents?: ApplicationDocumentUncheckedCreateNestedManyWithoutApplicationInput
  }

  export type RentalApplicationCreateOrConnectWithoutSubmissionsInput = {
    where: RentalApplicationWhereUniqueInput
    create: XOR<RentalApplicationCreateWithoutSubmissionsInput, RentalApplicationUncheckedCreateWithoutSubmissionsInput>
  }

  export type UserCreateWithoutReviewedSubmissionsInput = {
    username: string
    password: string
    email: string
    name?: string | null
    avatar?: string | null
    isAdmin?: boolean
    createdAt?: Date | string
    properties?: PropertyCreateNestedManyWithoutCreatedByInput
    rentalApplications?: RentalApplicationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutReviewedSubmissionsInput = {
    id?: number
    username: string
    password: string
    email: string
    name?: string | null
    avatar?: string | null
    isAdmin?: boolean
    createdAt?: Date | string
    properties?: PropertyUncheckedCreateNestedManyWithoutCreatedByInput
    rentalApplications?: RentalApplicationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutReviewedSubmissionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReviewedSubmissionsInput, UserUncheckedCreateWithoutReviewedSubmissionsInput>
  }

  export type RentalApplicationUpsertWithoutSubmissionsInput = {
    update: XOR<RentalApplicationUpdateWithoutSubmissionsInput, RentalApplicationUncheckedUpdateWithoutSubmissionsInput>
    create: XOR<RentalApplicationCreateWithoutSubmissionsInput, RentalApplicationUncheckedCreateWithoutSubmissionsInput>
    where?: RentalApplicationWhereInput
  }

  export type RentalApplicationUpdateToOneWithWhereWithoutSubmissionsInput = {
    where?: RentalApplicationWhereInput
    data: XOR<RentalApplicationUpdateWithoutSubmissionsInput, RentalApplicationUncheckedUpdateWithoutSubmissionsInput>
  }

  export type RentalApplicationUpdateWithoutSubmissionsInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    currentAddress?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    moveInDate?: DateTimeFieldUpdateOperationsInput | Date | string
    employer?: NullableStringFieldUpdateOperationsInput | string | null
    occupation?: NullableStringFieldUpdateOperationsInput | string | null
    monthlyIncome?: IntFieldUpdateOperationsInput | number
    additionalOccupants?: IntFieldUpdateOperationsInput | number
    pets?: BoolFieldUpdateOperationsInput | boolean
    petDetails?: NullableStringFieldUpdateOperationsInput | string | null
    creditScore?: NullableIntFieldUpdateOperationsInput | number | null
    hasEvictions?: BoolFieldUpdateOperationsInput | boolean
    hasFelonies?: BoolFieldUpdateOperationsInput | boolean
    additionalInfo?: NullableStringFieldUpdateOperationsInput | string | null
    isComplete?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRentalApplicationsNestedInput
    documents?: ApplicationDocumentUpdateManyWithoutApplicationNestedInput
  }

  export type RentalApplicationUncheckedUpdateWithoutSubmissionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    currentAddress?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    moveInDate?: DateTimeFieldUpdateOperationsInput | Date | string
    employer?: NullableStringFieldUpdateOperationsInput | string | null
    occupation?: NullableStringFieldUpdateOperationsInput | string | null
    monthlyIncome?: IntFieldUpdateOperationsInput | number
    additionalOccupants?: IntFieldUpdateOperationsInput | number
    pets?: BoolFieldUpdateOperationsInput | boolean
    petDetails?: NullableStringFieldUpdateOperationsInput | string | null
    creditScore?: NullableIntFieldUpdateOperationsInput | number | null
    hasEvictions?: BoolFieldUpdateOperationsInput | boolean
    hasFelonies?: BoolFieldUpdateOperationsInput | boolean
    additionalInfo?: NullableStringFieldUpdateOperationsInput | string | null
    isComplete?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documents?: ApplicationDocumentUncheckedUpdateManyWithoutApplicationNestedInput
  }

  export type UserUpsertWithoutReviewedSubmissionsInput = {
    update: XOR<UserUpdateWithoutReviewedSubmissionsInput, UserUncheckedUpdateWithoutReviewedSubmissionsInput>
    create: XOR<UserCreateWithoutReviewedSubmissionsInput, UserUncheckedCreateWithoutReviewedSubmissionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReviewedSubmissionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReviewedSubmissionsInput, UserUncheckedUpdateWithoutReviewedSubmissionsInput>
  }

  export type UserUpdateWithoutReviewedSubmissionsInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    properties?: PropertyUpdateManyWithoutCreatedByNestedInput
    rentalApplications?: RentalApplicationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReviewedSubmissionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    properties?: PropertyUncheckedUpdateManyWithoutCreatedByNestedInput
    rentalApplications?: RentalApplicationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type RentalApplicationCreateWithoutDocumentsInput = {
    firstName: string
    lastName: string
    email: string
    phone: string
    currentAddress: string
    city: string
    state: string
    zipCode: string
    moveInDate: Date | string
    employer?: string | null
    occupation?: string | null
    monthlyIncome: number
    additionalOccupants: number
    pets?: boolean
    petDetails?: string | null
    creditScore?: number | null
    hasEvictions?: boolean
    hasFelonies?: boolean
    additionalInfo?: string | null
    isComplete?: boolean
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutRentalApplicationsInput
    submissions?: ApplicationSubmissionCreateNestedManyWithoutApplicationInput
  }

  export type RentalApplicationUncheckedCreateWithoutDocumentsInput = {
    id?: number
    userId: number
    firstName: string
    lastName: string
    email: string
    phone: string
    currentAddress: string
    city: string
    state: string
    zipCode: string
    moveInDate: Date | string
    employer?: string | null
    occupation?: string | null
    monthlyIncome: number
    additionalOccupants: number
    pets?: boolean
    petDetails?: string | null
    creditScore?: number | null
    hasEvictions?: boolean
    hasFelonies?: boolean
    additionalInfo?: string | null
    isComplete?: boolean
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    submissions?: ApplicationSubmissionUncheckedCreateNestedManyWithoutApplicationInput
  }

  export type RentalApplicationCreateOrConnectWithoutDocumentsInput = {
    where: RentalApplicationWhereUniqueInput
    create: XOR<RentalApplicationCreateWithoutDocumentsInput, RentalApplicationUncheckedCreateWithoutDocumentsInput>
  }

  export type RentalApplicationUpsertWithoutDocumentsInput = {
    update: XOR<RentalApplicationUpdateWithoutDocumentsInput, RentalApplicationUncheckedUpdateWithoutDocumentsInput>
    create: XOR<RentalApplicationCreateWithoutDocumentsInput, RentalApplicationUncheckedCreateWithoutDocumentsInput>
    where?: RentalApplicationWhereInput
  }

  export type RentalApplicationUpdateToOneWithWhereWithoutDocumentsInput = {
    where?: RentalApplicationWhereInput
    data: XOR<RentalApplicationUpdateWithoutDocumentsInput, RentalApplicationUncheckedUpdateWithoutDocumentsInput>
  }

  export type RentalApplicationUpdateWithoutDocumentsInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    currentAddress?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    moveInDate?: DateTimeFieldUpdateOperationsInput | Date | string
    employer?: NullableStringFieldUpdateOperationsInput | string | null
    occupation?: NullableStringFieldUpdateOperationsInput | string | null
    monthlyIncome?: IntFieldUpdateOperationsInput | number
    additionalOccupants?: IntFieldUpdateOperationsInput | number
    pets?: BoolFieldUpdateOperationsInput | boolean
    petDetails?: NullableStringFieldUpdateOperationsInput | string | null
    creditScore?: NullableIntFieldUpdateOperationsInput | number | null
    hasEvictions?: BoolFieldUpdateOperationsInput | boolean
    hasFelonies?: BoolFieldUpdateOperationsInput | boolean
    additionalInfo?: NullableStringFieldUpdateOperationsInput | string | null
    isComplete?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRentalApplicationsNestedInput
    submissions?: ApplicationSubmissionUpdateManyWithoutApplicationNestedInput
  }

  export type RentalApplicationUncheckedUpdateWithoutDocumentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    currentAddress?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    moveInDate?: DateTimeFieldUpdateOperationsInput | Date | string
    employer?: NullableStringFieldUpdateOperationsInput | string | null
    occupation?: NullableStringFieldUpdateOperationsInput | string | null
    monthlyIncome?: IntFieldUpdateOperationsInput | number
    additionalOccupants?: IntFieldUpdateOperationsInput | number
    pets?: BoolFieldUpdateOperationsInput | boolean
    petDetails?: NullableStringFieldUpdateOperationsInput | string | null
    creditScore?: NullableIntFieldUpdateOperationsInput | number | null
    hasEvictions?: BoolFieldUpdateOperationsInput | boolean
    hasFelonies?: BoolFieldUpdateOperationsInput | boolean
    additionalInfo?: NullableStringFieldUpdateOperationsInput | string | null
    isComplete?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submissions?: ApplicationSubmissionUncheckedUpdateManyWithoutApplicationNestedInput
  }

  export type PropertyCreateManyCreatedByInput = {
    id?: number
    title: string
    address: string
    city: string
    state: string
    zipCode: string
    price: number
    bedrooms: number
    bathrooms: number
    squareFeet: number
    description: string
    propertyType: string
    status?: string
    isRental?: boolean
    rentalPrice?: number | null
    featuredImage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    acres?: string | null
    yearBuilt?: number | null
    displayOnHomepage?: boolean
  }

  export type RentalApplicationCreateManyUserInput = {
    id?: number
    firstName: string
    lastName: string
    email: string
    phone: string
    currentAddress: string
    city: string
    state: string
    zipCode: string
    moveInDate: Date | string
    employer?: string | null
    occupation?: string | null
    monthlyIncome: number
    additionalOccupants: number
    pets?: boolean
    petDetails?: string | null
    creditScore?: number | null
    hasEvictions?: boolean
    hasFelonies?: boolean
    additionalInfo?: string | null
    isComplete?: boolean
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ApplicationSubmissionCreateManyReviewedByInput = {
    id?: number
    applicationId: number
    propertyId: number
    status?: string
    notes?: string | null
    reviewedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PropertyUpdateWithoutCreatedByInput = {
    title?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    bedrooms?: IntFieldUpdateOperationsInput | number
    bathrooms?: IntFieldUpdateOperationsInput | number
    squareFeet?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    propertyType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    isRental?: BoolFieldUpdateOperationsInput | boolean
    rentalPrice?: NullableIntFieldUpdateOperationsInput | number | null
    featuredImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    acres?: NullableStringFieldUpdateOperationsInput | string | null
    yearBuilt?: NullableIntFieldUpdateOperationsInput | number | null
    displayOnHomepage?: BoolFieldUpdateOperationsInput | boolean
    images?: PropertyImageUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyUncheckedUpdateWithoutCreatedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    bedrooms?: IntFieldUpdateOperationsInput | number
    bathrooms?: IntFieldUpdateOperationsInput | number
    squareFeet?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    propertyType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    isRental?: BoolFieldUpdateOperationsInput | boolean
    rentalPrice?: NullableIntFieldUpdateOperationsInput | number | null
    featuredImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    acres?: NullableStringFieldUpdateOperationsInput | string | null
    yearBuilt?: NullableIntFieldUpdateOperationsInput | number | null
    displayOnHomepage?: BoolFieldUpdateOperationsInput | boolean
    images?: PropertyImageUncheckedUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyUncheckedUpdateManyWithoutCreatedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    bedrooms?: IntFieldUpdateOperationsInput | number
    bathrooms?: IntFieldUpdateOperationsInput | number
    squareFeet?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    propertyType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    isRental?: BoolFieldUpdateOperationsInput | boolean
    rentalPrice?: NullableIntFieldUpdateOperationsInput | number | null
    featuredImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    acres?: NullableStringFieldUpdateOperationsInput | string | null
    yearBuilt?: NullableIntFieldUpdateOperationsInput | number | null
    displayOnHomepage?: BoolFieldUpdateOperationsInput | boolean
  }

  export type RentalApplicationUpdateWithoutUserInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    currentAddress?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    moveInDate?: DateTimeFieldUpdateOperationsInput | Date | string
    employer?: NullableStringFieldUpdateOperationsInput | string | null
    occupation?: NullableStringFieldUpdateOperationsInput | string | null
    monthlyIncome?: IntFieldUpdateOperationsInput | number
    additionalOccupants?: IntFieldUpdateOperationsInput | number
    pets?: BoolFieldUpdateOperationsInput | boolean
    petDetails?: NullableStringFieldUpdateOperationsInput | string | null
    creditScore?: NullableIntFieldUpdateOperationsInput | number | null
    hasEvictions?: BoolFieldUpdateOperationsInput | boolean
    hasFelonies?: BoolFieldUpdateOperationsInput | boolean
    additionalInfo?: NullableStringFieldUpdateOperationsInput | string | null
    isComplete?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submissions?: ApplicationSubmissionUpdateManyWithoutApplicationNestedInput
    documents?: ApplicationDocumentUpdateManyWithoutApplicationNestedInput
  }

  export type RentalApplicationUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    currentAddress?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    moveInDate?: DateTimeFieldUpdateOperationsInput | Date | string
    employer?: NullableStringFieldUpdateOperationsInput | string | null
    occupation?: NullableStringFieldUpdateOperationsInput | string | null
    monthlyIncome?: IntFieldUpdateOperationsInput | number
    additionalOccupants?: IntFieldUpdateOperationsInput | number
    pets?: BoolFieldUpdateOperationsInput | boolean
    petDetails?: NullableStringFieldUpdateOperationsInput | string | null
    creditScore?: NullableIntFieldUpdateOperationsInput | number | null
    hasEvictions?: BoolFieldUpdateOperationsInput | boolean
    hasFelonies?: BoolFieldUpdateOperationsInput | boolean
    additionalInfo?: NullableStringFieldUpdateOperationsInput | string | null
    isComplete?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submissions?: ApplicationSubmissionUncheckedUpdateManyWithoutApplicationNestedInput
    documents?: ApplicationDocumentUncheckedUpdateManyWithoutApplicationNestedInput
  }

  export type RentalApplicationUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    currentAddress?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    moveInDate?: DateTimeFieldUpdateOperationsInput | Date | string
    employer?: NullableStringFieldUpdateOperationsInput | string | null
    occupation?: NullableStringFieldUpdateOperationsInput | string | null
    monthlyIncome?: IntFieldUpdateOperationsInput | number
    additionalOccupants?: IntFieldUpdateOperationsInput | number
    pets?: BoolFieldUpdateOperationsInput | boolean
    petDetails?: NullableStringFieldUpdateOperationsInput | string | null
    creditScore?: NullableIntFieldUpdateOperationsInput | number | null
    hasEvictions?: BoolFieldUpdateOperationsInput | boolean
    hasFelonies?: BoolFieldUpdateOperationsInput | boolean
    additionalInfo?: NullableStringFieldUpdateOperationsInput | string | null
    isComplete?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationSubmissionUpdateWithoutReviewedByInput = {
    propertyId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    application?: RentalApplicationUpdateOneRequiredWithoutSubmissionsNestedInput
  }

  export type ApplicationSubmissionUncheckedUpdateWithoutReviewedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    applicationId?: IntFieldUpdateOperationsInput | number
    propertyId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationSubmissionUncheckedUpdateManyWithoutReviewedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    applicationId?: IntFieldUpdateOperationsInput | number
    propertyId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyImageCreateManyPropertyInput = {
    id?: number
    imageUrl: string
    caption?: string | null
    displayOrder?: number
    createdAt?: Date | string
  }

  export type PropertyImageUpdateWithoutPropertyInput = {
    imageUrl?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    displayOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyImageUncheckedUpdateWithoutPropertyInput = {
    id?: IntFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    displayOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyImageUncheckedUpdateManyWithoutPropertyInput = {
    id?: IntFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    displayOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationSubmissionCreateManyApplicationInput = {
    id?: number
    propertyId: number
    status?: string
    notes?: string | null
    reviewedById?: number | null
    reviewedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ApplicationDocumentCreateManyApplicationInput = {
    id?: number
    documentType: string
    documentUrl: string
    fileName: string
    fileSize: number
    uploadedAt?: Date | string
  }

  export type ApplicationSubmissionUpdateWithoutApplicationInput = {
    propertyId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewedBy?: UserUpdateOneWithoutReviewedSubmissionsNestedInput
  }

  export type ApplicationSubmissionUncheckedUpdateWithoutApplicationInput = {
    id?: IntFieldUpdateOperationsInput | number
    propertyId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    reviewedById?: NullableIntFieldUpdateOperationsInput | number | null
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationSubmissionUncheckedUpdateManyWithoutApplicationInput = {
    id?: IntFieldUpdateOperationsInput | number
    propertyId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    reviewedById?: NullableIntFieldUpdateOperationsInput | number | null
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationDocumentUpdateWithoutApplicationInput = {
    documentType?: StringFieldUpdateOperationsInput | string
    documentUrl?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationDocumentUncheckedUpdateWithoutApplicationInput = {
    id?: IntFieldUpdateOperationsInput | number
    documentType?: StringFieldUpdateOperationsInput | string
    documentUrl?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationDocumentUncheckedUpdateManyWithoutApplicationInput = {
    id?: IntFieldUpdateOperationsInput | number
    documentType?: StringFieldUpdateOperationsInput | string
    documentUrl?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}