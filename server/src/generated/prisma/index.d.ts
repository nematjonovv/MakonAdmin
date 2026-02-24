
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Admin
 * 
 */
export type Admin = $Result.DefaultSelection<Prisma.$AdminPayload>
/**
 * Model Services
 * 
 */
export type Services = $Result.DefaultSelection<Prisma.$ServicesPayload>
/**
 * Model Projects
 * 
 */
export type Projects = $Result.DefaultSelection<Prisma.$ProjectsPayload>
/**
 * Model ProjectCategory
 * 
 */
export type ProjectCategory = $Result.DefaultSelection<Prisma.$ProjectCategoryPayload>
/**
 * Model CoverImage
 * 
 */
export type CoverImage = $Result.DefaultSelection<Prisma.$CoverImagePayload>
/**
 * Model ProjectGallery
 * 
 */
export type ProjectGallery = $Result.DefaultSelection<Prisma.$ProjectGalleryPayload>
/**
 * Model Team
 * 
 */
export type Team = $Result.DefaultSelection<Prisma.$TeamPayload>
/**
 * Model Testimonials
 * 
 */
export type Testimonials = $Result.DefaultSelection<Prisma.$TestimonialsPayload>
/**
 * Model Requests
 * 
 */
export type Requests = $Result.DefaultSelection<Prisma.$RequestsPayload>
/**
 * Model ContactInfo
 * 
 */
export type ContactInfo = $Result.DefaultSelection<Prisma.$ContactInfoPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  ADMIN: 'ADMIN',
  EDITOR: 'EDITOR'
};

export type Role = (typeof Role)[keyof typeof Role]


export const hearFrom: {
  INSTAGRAM: 'INSTAGRAM',
  TELEGRAM: 'TELEGRAM',
  YOUTUBE: 'YOUTUBE',
  BANNER: 'BANNER',
  OTHER: 'OTHER',
  FRIEND: 'FRIEND'
};

export type hearFrom = (typeof hearFrom)[keyof typeof hearFrom]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type hearFrom = $Enums.hearFrom

export const hearFrom: typeof $Enums.hearFrom

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Admins
 * const admins = await prisma.admin.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Admins
   * const admins = await prisma.admin.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * `prisma.admin`: Exposes CRUD operations for the **Admin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admins
    * const admins = await prisma.admin.findMany()
    * ```
    */
  get admin(): Prisma.AdminDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.services`: Exposes CRUD operations for the **Services** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Services
    * const services = await prisma.services.findMany()
    * ```
    */
  get services(): Prisma.ServicesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.projects`: Exposes CRUD operations for the **Projects** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projects
    * const projects = await prisma.projects.findMany()
    * ```
    */
  get projects(): Prisma.ProjectsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.projectCategory`: Exposes CRUD operations for the **ProjectCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProjectCategories
    * const projectCategories = await prisma.projectCategory.findMany()
    * ```
    */
  get projectCategory(): Prisma.ProjectCategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.coverImage`: Exposes CRUD operations for the **CoverImage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CoverImages
    * const coverImages = await prisma.coverImage.findMany()
    * ```
    */
  get coverImage(): Prisma.CoverImageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.projectGallery`: Exposes CRUD operations for the **ProjectGallery** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProjectGalleries
    * const projectGalleries = await prisma.projectGallery.findMany()
    * ```
    */
  get projectGallery(): Prisma.ProjectGalleryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.team`: Exposes CRUD operations for the **Team** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Teams
    * const teams = await prisma.team.findMany()
    * ```
    */
  get team(): Prisma.TeamDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.testimonials`: Exposes CRUD operations for the **Testimonials** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Testimonials
    * const testimonials = await prisma.testimonials.findMany()
    * ```
    */
  get testimonials(): Prisma.TestimonialsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.requests`: Exposes CRUD operations for the **Requests** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Requests
    * const requests = await prisma.requests.findMany()
    * ```
    */
  get requests(): Prisma.RequestsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.contactInfo`: Exposes CRUD operations for the **ContactInfo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ContactInfos
    * const contactInfos = await prisma.contactInfo.findMany()
    * ```
    */
  get contactInfo(): Prisma.ContactInfoDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.3.0
   * Query Engine version: 9d6ad21cbbceab97458517b147a6a09ff43aa735
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    Admin: 'Admin',
    Services: 'Services',
    Projects: 'Projects',
    ProjectCategory: 'ProjectCategory',
    CoverImage: 'CoverImage',
    ProjectGallery: 'ProjectGallery',
    Team: 'Team',
    Testimonials: 'Testimonials',
    Requests: 'Requests',
    ContactInfo: 'ContactInfo'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "admin" | "services" | "projects" | "projectCategory" | "coverImage" | "projectGallery" | "team" | "testimonials" | "requests" | "contactInfo"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Admin: {
        payload: Prisma.$AdminPayload<ExtArgs>
        fields: Prisma.AdminFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findFirst: {
            args: Prisma.AdminFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findMany: {
            args: Prisma.AdminFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          create: {
            args: Prisma.AdminCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          createMany: {
            args: Prisma.AdminCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AdminDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          update: {
            args: Prisma.AdminUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          deleteMany: {
            args: Prisma.AdminDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdminUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AdminUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          aggregate: {
            args: Prisma.AdminAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdmin>
          }
          groupBy: {
            args: Prisma.AdminGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdminCountArgs<ExtArgs>
            result: $Utils.Optional<AdminCountAggregateOutputType> | number
          }
        }
      }
      Services: {
        payload: Prisma.$ServicesPayload<ExtArgs>
        fields: Prisma.ServicesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ServicesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ServicesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicesPayload>
          }
          findFirst: {
            args: Prisma.ServicesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ServicesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicesPayload>
          }
          findMany: {
            args: Prisma.ServicesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicesPayload>[]
          }
          create: {
            args: Prisma.ServicesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicesPayload>
          }
          createMany: {
            args: Prisma.ServicesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ServicesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicesPayload>
          }
          update: {
            args: Prisma.ServicesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicesPayload>
          }
          deleteMany: {
            args: Prisma.ServicesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ServicesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ServicesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicesPayload>
          }
          aggregate: {
            args: Prisma.ServicesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateServices>
          }
          groupBy: {
            args: Prisma.ServicesGroupByArgs<ExtArgs>
            result: $Utils.Optional<ServicesGroupByOutputType>[]
          }
          count: {
            args: Prisma.ServicesCountArgs<ExtArgs>
            result: $Utils.Optional<ServicesCountAggregateOutputType> | number
          }
        }
      }
      Projects: {
        payload: Prisma.$ProjectsPayload<ExtArgs>
        fields: Prisma.ProjectsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectsPayload>
          }
          findFirst: {
            args: Prisma.ProjectsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectsPayload>
          }
          findMany: {
            args: Prisma.ProjectsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectsPayload>[]
          }
          create: {
            args: Prisma.ProjectsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectsPayload>
          }
          createMany: {
            args: Prisma.ProjectsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProjectsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectsPayload>
          }
          update: {
            args: Prisma.ProjectsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectsPayload>
          }
          deleteMany: {
            args: Prisma.ProjectsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProjectsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectsPayload>
          }
          aggregate: {
            args: Prisma.ProjectsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProjects>
          }
          groupBy: {
            args: Prisma.ProjectsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectsCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectsCountAggregateOutputType> | number
          }
        }
      }
      ProjectCategory: {
        payload: Prisma.$ProjectCategoryPayload<ExtArgs>
        fields: Prisma.ProjectCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectCategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectCategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectCategoryPayload>
          }
          findFirst: {
            args: Prisma.ProjectCategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectCategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectCategoryPayload>
          }
          findMany: {
            args: Prisma.ProjectCategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectCategoryPayload>[]
          }
          create: {
            args: Prisma.ProjectCategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectCategoryPayload>
          }
          createMany: {
            args: Prisma.ProjectCategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProjectCategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectCategoryPayload>
          }
          update: {
            args: Prisma.ProjectCategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectCategoryPayload>
          }
          deleteMany: {
            args: Prisma.ProjectCategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectCategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProjectCategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectCategoryPayload>
          }
          aggregate: {
            args: Prisma.ProjectCategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProjectCategory>
          }
          groupBy: {
            args: Prisma.ProjectCategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectCategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectCategoryCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectCategoryCountAggregateOutputType> | number
          }
        }
      }
      CoverImage: {
        payload: Prisma.$CoverImagePayload<ExtArgs>
        fields: Prisma.CoverImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CoverImageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoverImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CoverImageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoverImagePayload>
          }
          findFirst: {
            args: Prisma.CoverImageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoverImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CoverImageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoverImagePayload>
          }
          findMany: {
            args: Prisma.CoverImageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoverImagePayload>[]
          }
          create: {
            args: Prisma.CoverImageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoverImagePayload>
          }
          createMany: {
            args: Prisma.CoverImageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CoverImageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoverImagePayload>
          }
          update: {
            args: Prisma.CoverImageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoverImagePayload>
          }
          deleteMany: {
            args: Prisma.CoverImageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CoverImageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CoverImageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoverImagePayload>
          }
          aggregate: {
            args: Prisma.CoverImageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCoverImage>
          }
          groupBy: {
            args: Prisma.CoverImageGroupByArgs<ExtArgs>
            result: $Utils.Optional<CoverImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.CoverImageCountArgs<ExtArgs>
            result: $Utils.Optional<CoverImageCountAggregateOutputType> | number
          }
        }
      }
      ProjectGallery: {
        payload: Prisma.$ProjectGalleryPayload<ExtArgs>
        fields: Prisma.ProjectGalleryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectGalleryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectGalleryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectGalleryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectGalleryPayload>
          }
          findFirst: {
            args: Prisma.ProjectGalleryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectGalleryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectGalleryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectGalleryPayload>
          }
          findMany: {
            args: Prisma.ProjectGalleryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectGalleryPayload>[]
          }
          create: {
            args: Prisma.ProjectGalleryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectGalleryPayload>
          }
          createMany: {
            args: Prisma.ProjectGalleryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProjectGalleryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectGalleryPayload>
          }
          update: {
            args: Prisma.ProjectGalleryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectGalleryPayload>
          }
          deleteMany: {
            args: Prisma.ProjectGalleryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectGalleryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProjectGalleryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectGalleryPayload>
          }
          aggregate: {
            args: Prisma.ProjectGalleryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProjectGallery>
          }
          groupBy: {
            args: Prisma.ProjectGalleryGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectGalleryGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectGalleryCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectGalleryCountAggregateOutputType> | number
          }
        }
      }
      Team: {
        payload: Prisma.$TeamPayload<ExtArgs>
        fields: Prisma.TeamFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TeamFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TeamFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          findFirst: {
            args: Prisma.TeamFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TeamFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          findMany: {
            args: Prisma.TeamFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>[]
          }
          create: {
            args: Prisma.TeamCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          createMany: {
            args: Prisma.TeamCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TeamDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          update: {
            args: Prisma.TeamUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          deleteMany: {
            args: Prisma.TeamDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TeamUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TeamUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          aggregate: {
            args: Prisma.TeamAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTeam>
          }
          groupBy: {
            args: Prisma.TeamGroupByArgs<ExtArgs>
            result: $Utils.Optional<TeamGroupByOutputType>[]
          }
          count: {
            args: Prisma.TeamCountArgs<ExtArgs>
            result: $Utils.Optional<TeamCountAggregateOutputType> | number
          }
        }
      }
      Testimonials: {
        payload: Prisma.$TestimonialsPayload<ExtArgs>
        fields: Prisma.TestimonialsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TestimonialsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestimonialsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TestimonialsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestimonialsPayload>
          }
          findFirst: {
            args: Prisma.TestimonialsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestimonialsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TestimonialsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestimonialsPayload>
          }
          findMany: {
            args: Prisma.TestimonialsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestimonialsPayload>[]
          }
          create: {
            args: Prisma.TestimonialsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestimonialsPayload>
          }
          createMany: {
            args: Prisma.TestimonialsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TestimonialsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestimonialsPayload>
          }
          update: {
            args: Prisma.TestimonialsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestimonialsPayload>
          }
          deleteMany: {
            args: Prisma.TestimonialsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TestimonialsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TestimonialsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestimonialsPayload>
          }
          aggregate: {
            args: Prisma.TestimonialsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTestimonials>
          }
          groupBy: {
            args: Prisma.TestimonialsGroupByArgs<ExtArgs>
            result: $Utils.Optional<TestimonialsGroupByOutputType>[]
          }
          count: {
            args: Prisma.TestimonialsCountArgs<ExtArgs>
            result: $Utils.Optional<TestimonialsCountAggregateOutputType> | number
          }
        }
      }
      Requests: {
        payload: Prisma.$RequestsPayload<ExtArgs>
        fields: Prisma.RequestsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RequestsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RequestsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestsPayload>
          }
          findFirst: {
            args: Prisma.RequestsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RequestsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestsPayload>
          }
          findMany: {
            args: Prisma.RequestsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestsPayload>[]
          }
          create: {
            args: Prisma.RequestsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestsPayload>
          }
          createMany: {
            args: Prisma.RequestsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RequestsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestsPayload>
          }
          update: {
            args: Prisma.RequestsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestsPayload>
          }
          deleteMany: {
            args: Prisma.RequestsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RequestsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RequestsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestsPayload>
          }
          aggregate: {
            args: Prisma.RequestsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRequests>
          }
          groupBy: {
            args: Prisma.RequestsGroupByArgs<ExtArgs>
            result: $Utils.Optional<RequestsGroupByOutputType>[]
          }
          count: {
            args: Prisma.RequestsCountArgs<ExtArgs>
            result: $Utils.Optional<RequestsCountAggregateOutputType> | number
          }
        }
      }
      ContactInfo: {
        payload: Prisma.$ContactInfoPayload<ExtArgs>
        fields: Prisma.ContactInfoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContactInfoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactInfoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContactInfoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactInfoPayload>
          }
          findFirst: {
            args: Prisma.ContactInfoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactInfoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContactInfoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactInfoPayload>
          }
          findMany: {
            args: Prisma.ContactInfoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactInfoPayload>[]
          }
          create: {
            args: Prisma.ContactInfoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactInfoPayload>
          }
          createMany: {
            args: Prisma.ContactInfoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ContactInfoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactInfoPayload>
          }
          update: {
            args: Prisma.ContactInfoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactInfoPayload>
          }
          deleteMany: {
            args: Prisma.ContactInfoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContactInfoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ContactInfoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactInfoPayload>
          }
          aggregate: {
            args: Prisma.ContactInfoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContactInfo>
          }
          groupBy: {
            args: Prisma.ContactInfoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContactInfoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContactInfoCountArgs<ExtArgs>
            result: $Utils.Optional<ContactInfoCountAggregateOutputType> | number
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
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    admin?: AdminOmit
    services?: ServicesOmit
    projects?: ProjectsOmit
    projectCategory?: ProjectCategoryOmit
    coverImage?: CoverImageOmit
    projectGallery?: ProjectGalleryOmit
    team?: TeamOmit
    testimonials?: TestimonialsOmit
    requests?: RequestsOmit
    contactInfo?: ContactInfoOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type ProjectsCountOutputType
   */

  export type ProjectsCountOutputType = {
    gallery: number
  }

  export type ProjectsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gallery?: boolean | ProjectsCountOutputTypeCountGalleryArgs
  }

  // Custom InputTypes
  /**
   * ProjectsCountOutputType without action
   */
  export type ProjectsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectsCountOutputType
     */
    select?: ProjectsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProjectsCountOutputType without action
   */
  export type ProjectsCountOutputTypeCountGalleryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectGalleryWhereInput
  }


  /**
   * Count Type ProjectCategoryCountOutputType
   */

  export type ProjectCategoryCountOutputType = {
    projects: number
  }

  export type ProjectCategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projects?: boolean | ProjectCategoryCountOutputTypeCountProjectsArgs
  }

  // Custom InputTypes
  /**
   * ProjectCategoryCountOutputType without action
   */
  export type ProjectCategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCategoryCountOutputType
     */
    select?: ProjectCategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProjectCategoryCountOutputType without action
   */
  export type ProjectCategoryCountOutputTypeCountProjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Admin
   */

  export type AggregateAdmin = {
    _count: AdminCountAggregateOutputType | null
    _avg: AdminAvgAggregateOutputType | null
    _sum: AdminSumAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  export type AdminAvgAggregateOutputType = {
    id: number | null
  }

  export type AdminSumAggregateOutputType = {
    id: number | null
  }

  export type AdminMinAggregateOutputType = {
    id: number | null
    name: string | null
    password: string | null
    role: string | null
  }

  export type AdminMaxAggregateOutputType = {
    id: number | null
    name: string | null
    password: string | null
    role: string | null
  }

  export type AdminCountAggregateOutputType = {
    id: number
    name: number
    password: number
    role: number
    _all: number
  }


  export type AdminAvgAggregateInputType = {
    id?: true
  }

  export type AdminSumAggregateInputType = {
    id?: true
  }

  export type AdminMinAggregateInputType = {
    id?: true
    name?: true
    password?: true
    role?: true
  }

  export type AdminMaxAggregateInputType = {
    id?: true
    name?: true
    password?: true
    role?: true
  }

  export type AdminCountAggregateInputType = {
    id?: true
    name?: true
    password?: true
    role?: true
    _all?: true
  }

  export type AdminAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admin to aggregate.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Admins
    **/
    _count?: true | AdminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AdminAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AdminSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminMaxAggregateInputType
  }

  export type GetAdminAggregateType<T extends AdminAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmin[P]>
      : GetScalarType<T[P], AggregateAdmin[P]>
  }




  export type AdminGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminWhereInput
    orderBy?: AdminOrderByWithAggregationInput | AdminOrderByWithAggregationInput[]
    by: AdminScalarFieldEnum[] | AdminScalarFieldEnum
    having?: AdminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminCountAggregateInputType | true
    _avg?: AdminAvgAggregateInputType
    _sum?: AdminSumAggregateInputType
    _min?: AdminMinAggregateInputType
    _max?: AdminMaxAggregateInputType
  }

  export type AdminGroupByOutputType = {
    id: number
    name: string
    password: string
    role: string
    _count: AdminCountAggregateOutputType | null
    _avg: AdminAvgAggregateOutputType | null
    _sum: AdminSumAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  type GetAdminGroupByPayload<T extends AdminGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminGroupByOutputType[P]>
            : GetScalarType<T[P], AdminGroupByOutputType[P]>
        }
      >
    >


  export type AdminSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    password?: boolean
    role?: boolean
  }, ExtArgs["result"]["admin"]>



  export type AdminSelectScalar = {
    id?: boolean
    name?: boolean
    password?: boolean
    role?: boolean
  }

  export type AdminOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "password" | "role", ExtArgs["result"]["admin"]>

  export type $AdminPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Admin"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      password: string
      role: string
    }, ExtArgs["result"]["admin"]>
    composites: {}
  }

  type AdminGetPayload<S extends boolean | null | undefined | AdminDefaultArgs> = $Result.GetResult<Prisma.$AdminPayload, S>

  type AdminCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdminFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdminCountAggregateInputType | true
    }

  export interface AdminDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Admin'], meta: { name: 'Admin' } }
    /**
     * Find zero or one Admin that matches the filter.
     * @param {AdminFindUniqueArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdminFindUniqueArgs>(args: SelectSubset<T, AdminFindUniqueArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Admin that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdminFindUniqueOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdminFindUniqueOrThrowArgs>(args: SelectSubset<T, AdminFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdminFindFirstArgs>(args?: SelectSubset<T, AdminFindFirstArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdminFindFirstOrThrowArgs>(args?: SelectSubset<T, AdminFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admins
     * const admins = await prisma.admin.findMany()
     * 
     * // Get first 10 Admins
     * const admins = await prisma.admin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminWithIdOnly = await prisma.admin.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdminFindManyArgs>(args?: SelectSubset<T, AdminFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Admin.
     * @param {AdminCreateArgs} args - Arguments to create a Admin.
     * @example
     * // Create one Admin
     * const Admin = await prisma.admin.create({
     *   data: {
     *     // ... data to create a Admin
     *   }
     * })
     * 
     */
    create<T extends AdminCreateArgs>(args: SelectSubset<T, AdminCreateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Admins.
     * @param {AdminCreateManyArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdminCreateManyArgs>(args?: SelectSubset<T, AdminCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Admin.
     * @param {AdminDeleteArgs} args - Arguments to delete one Admin.
     * @example
     * // Delete one Admin
     * const Admin = await prisma.admin.delete({
     *   where: {
     *     // ... filter to delete one Admin
     *   }
     * })
     * 
     */
    delete<T extends AdminDeleteArgs>(args: SelectSubset<T, AdminDeleteArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Admin.
     * @param {AdminUpdateArgs} args - Arguments to update one Admin.
     * @example
     * // Update one Admin
     * const admin = await prisma.admin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdminUpdateArgs>(args: SelectSubset<T, AdminUpdateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Admins.
     * @param {AdminDeleteManyArgs} args - Arguments to filter Admins to delete.
     * @example
     * // Delete a few Admins
     * const { count } = await prisma.admin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdminDeleteManyArgs>(args?: SelectSubset<T, AdminDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdminUpdateManyArgs>(args: SelectSubset<T, AdminUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Admin.
     * @param {AdminUpsertArgs} args - Arguments to update or create a Admin.
     * @example
     * // Update or create a Admin
     * const admin = await prisma.admin.upsert({
     *   create: {
     *     // ... data to create a Admin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admin we want to update
     *   }
     * })
     */
    upsert<T extends AdminUpsertArgs>(args: SelectSubset<T, AdminUpsertArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminCountArgs} args - Arguments to filter Admins to count.
     * @example
     * // Count the number of Admins
     * const count = await prisma.admin.count({
     *   where: {
     *     // ... the filter for the Admins we want to count
     *   }
     * })
    **/
    count<T extends AdminCountArgs>(
      args?: Subset<T, AdminCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AdminAggregateArgs>(args: Subset<T, AdminAggregateArgs>): Prisma.PrismaPromise<GetAdminAggregateType<T>>

    /**
     * Group by Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminGroupByArgs} args - Group by arguments.
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
      T extends AdminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminGroupByArgs['orderBy'] }
        : { orderBy?: AdminGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AdminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Admin model
   */
  readonly fields: AdminFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Admin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Admin model
   */
  interface AdminFieldRefs {
    readonly id: FieldRef<"Admin", 'Int'>
    readonly name: FieldRef<"Admin", 'String'>
    readonly password: FieldRef<"Admin", 'String'>
    readonly role: FieldRef<"Admin", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Admin findUnique
   */
  export type AdminFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findUniqueOrThrow
   */
  export type AdminFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findFirst
   */
  export type AdminFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findFirstOrThrow
   */
  export type AdminFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findMany
   */
  export type AdminFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admins to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin create
   */
  export type AdminCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data needed to create a Admin.
     */
    data: XOR<AdminCreateInput, AdminUncheckedCreateInput>
  }

  /**
   * Admin createMany
   */
  export type AdminCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Admin update
   */
  export type AdminUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data needed to update a Admin.
     */
    data: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
    /**
     * Choose, which Admin to update.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin updateMany
   */
  export type AdminUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to update.
     */
    limit?: number
  }

  /**
   * Admin upsert
   */
  export type AdminUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The filter to search for the Admin to update in case it exists.
     */
    where: AdminWhereUniqueInput
    /**
     * In case the Admin found by the `where` argument doesn't exist, create a new Admin with this data.
     */
    create: XOR<AdminCreateInput, AdminUncheckedCreateInput>
    /**
     * In case the Admin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
  }

  /**
   * Admin delete
   */
  export type AdminDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter which Admin to delete.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin deleteMany
   */
  export type AdminDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admins to delete
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to delete.
     */
    limit?: number
  }

  /**
   * Admin without action
   */
  export type AdminDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
  }


  /**
   * Model Services
   */

  export type AggregateServices = {
    _count: ServicesCountAggregateOutputType | null
    _avg: ServicesAvgAggregateOutputType | null
    _sum: ServicesSumAggregateOutputType | null
    _min: ServicesMinAggregateOutputType | null
    _max: ServicesMaxAggregateOutputType | null
  }

  export type ServicesAvgAggregateOutputType = {
    id: number | null
  }

  export type ServicesSumAggregateOutputType = {
    id: number | null
  }

  export type ServicesMinAggregateOutputType = {
    id: number | null
    icon: string | null
    iconPublicId: string | null
  }

  export type ServicesMaxAggregateOutputType = {
    id: number | null
    icon: string | null
    iconPublicId: string | null
  }

  export type ServicesCountAggregateOutputType = {
    id: number
    icon: number
    iconPublicId: number
    localeData: number
    _all: number
  }


  export type ServicesAvgAggregateInputType = {
    id?: true
  }

  export type ServicesSumAggregateInputType = {
    id?: true
  }

  export type ServicesMinAggregateInputType = {
    id?: true
    icon?: true
    iconPublicId?: true
  }

  export type ServicesMaxAggregateInputType = {
    id?: true
    icon?: true
    iconPublicId?: true
  }

  export type ServicesCountAggregateInputType = {
    id?: true
    icon?: true
    iconPublicId?: true
    localeData?: true
    _all?: true
  }

  export type ServicesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Services to aggregate.
     */
    where?: ServicesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServicesOrderByWithRelationInput | ServicesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ServicesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Services
    **/
    _count?: true | ServicesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ServicesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ServicesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServicesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServicesMaxAggregateInputType
  }

  export type GetServicesAggregateType<T extends ServicesAggregateArgs> = {
        [P in keyof T & keyof AggregateServices]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateServices[P]>
      : GetScalarType<T[P], AggregateServices[P]>
  }




  export type ServicesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServicesWhereInput
    orderBy?: ServicesOrderByWithAggregationInput | ServicesOrderByWithAggregationInput[]
    by: ServicesScalarFieldEnum[] | ServicesScalarFieldEnum
    having?: ServicesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServicesCountAggregateInputType | true
    _avg?: ServicesAvgAggregateInputType
    _sum?: ServicesSumAggregateInputType
    _min?: ServicesMinAggregateInputType
    _max?: ServicesMaxAggregateInputType
  }

  export type ServicesGroupByOutputType = {
    id: number
    icon: string
    iconPublicId: string
    localeData: JsonValue
    _count: ServicesCountAggregateOutputType | null
    _avg: ServicesAvgAggregateOutputType | null
    _sum: ServicesSumAggregateOutputType | null
    _min: ServicesMinAggregateOutputType | null
    _max: ServicesMaxAggregateOutputType | null
  }

  type GetServicesGroupByPayload<T extends ServicesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServicesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServicesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServicesGroupByOutputType[P]>
            : GetScalarType<T[P], ServicesGroupByOutputType[P]>
        }
      >
    >


  export type ServicesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    icon?: boolean
    iconPublicId?: boolean
    localeData?: boolean
  }, ExtArgs["result"]["services"]>



  export type ServicesSelectScalar = {
    id?: boolean
    icon?: boolean
    iconPublicId?: boolean
    localeData?: boolean
  }

  export type ServicesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "icon" | "iconPublicId" | "localeData", ExtArgs["result"]["services"]>

  export type $ServicesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Services"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      icon: string
      iconPublicId: string
      localeData: Prisma.JsonValue
    }, ExtArgs["result"]["services"]>
    composites: {}
  }

  type ServicesGetPayload<S extends boolean | null | undefined | ServicesDefaultArgs> = $Result.GetResult<Prisma.$ServicesPayload, S>

  type ServicesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ServicesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ServicesCountAggregateInputType | true
    }

  export interface ServicesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Services'], meta: { name: 'Services' } }
    /**
     * Find zero or one Services that matches the filter.
     * @param {ServicesFindUniqueArgs} args - Arguments to find a Services
     * @example
     * // Get one Services
     * const services = await prisma.services.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ServicesFindUniqueArgs>(args: SelectSubset<T, ServicesFindUniqueArgs<ExtArgs>>): Prisma__ServicesClient<$Result.GetResult<Prisma.$ServicesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Services that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ServicesFindUniqueOrThrowArgs} args - Arguments to find a Services
     * @example
     * // Get one Services
     * const services = await prisma.services.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ServicesFindUniqueOrThrowArgs>(args: SelectSubset<T, ServicesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ServicesClient<$Result.GetResult<Prisma.$ServicesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Services that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicesFindFirstArgs} args - Arguments to find a Services
     * @example
     * // Get one Services
     * const services = await prisma.services.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ServicesFindFirstArgs>(args?: SelectSubset<T, ServicesFindFirstArgs<ExtArgs>>): Prisma__ServicesClient<$Result.GetResult<Prisma.$ServicesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Services that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicesFindFirstOrThrowArgs} args - Arguments to find a Services
     * @example
     * // Get one Services
     * const services = await prisma.services.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ServicesFindFirstOrThrowArgs>(args?: SelectSubset<T, ServicesFindFirstOrThrowArgs<ExtArgs>>): Prisma__ServicesClient<$Result.GetResult<Prisma.$ServicesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Services that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Services
     * const services = await prisma.services.findMany()
     * 
     * // Get first 10 Services
     * const services = await prisma.services.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const servicesWithIdOnly = await prisma.services.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ServicesFindManyArgs>(args?: SelectSubset<T, ServicesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Services.
     * @param {ServicesCreateArgs} args - Arguments to create a Services.
     * @example
     * // Create one Services
     * const Services = await prisma.services.create({
     *   data: {
     *     // ... data to create a Services
     *   }
     * })
     * 
     */
    create<T extends ServicesCreateArgs>(args: SelectSubset<T, ServicesCreateArgs<ExtArgs>>): Prisma__ServicesClient<$Result.GetResult<Prisma.$ServicesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Services.
     * @param {ServicesCreateManyArgs} args - Arguments to create many Services.
     * @example
     * // Create many Services
     * const services = await prisma.services.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ServicesCreateManyArgs>(args?: SelectSubset<T, ServicesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Services.
     * @param {ServicesDeleteArgs} args - Arguments to delete one Services.
     * @example
     * // Delete one Services
     * const Services = await prisma.services.delete({
     *   where: {
     *     // ... filter to delete one Services
     *   }
     * })
     * 
     */
    delete<T extends ServicesDeleteArgs>(args: SelectSubset<T, ServicesDeleteArgs<ExtArgs>>): Prisma__ServicesClient<$Result.GetResult<Prisma.$ServicesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Services.
     * @param {ServicesUpdateArgs} args - Arguments to update one Services.
     * @example
     * // Update one Services
     * const services = await prisma.services.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ServicesUpdateArgs>(args: SelectSubset<T, ServicesUpdateArgs<ExtArgs>>): Prisma__ServicesClient<$Result.GetResult<Prisma.$ServicesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Services.
     * @param {ServicesDeleteManyArgs} args - Arguments to filter Services to delete.
     * @example
     * // Delete a few Services
     * const { count } = await prisma.services.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ServicesDeleteManyArgs>(args?: SelectSubset<T, ServicesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Services
     * const services = await prisma.services.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ServicesUpdateManyArgs>(args: SelectSubset<T, ServicesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Services.
     * @param {ServicesUpsertArgs} args - Arguments to update or create a Services.
     * @example
     * // Update or create a Services
     * const services = await prisma.services.upsert({
     *   create: {
     *     // ... data to create a Services
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Services we want to update
     *   }
     * })
     */
    upsert<T extends ServicesUpsertArgs>(args: SelectSubset<T, ServicesUpsertArgs<ExtArgs>>): Prisma__ServicesClient<$Result.GetResult<Prisma.$ServicesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicesCountArgs} args - Arguments to filter Services to count.
     * @example
     * // Count the number of Services
     * const count = await prisma.services.count({
     *   where: {
     *     // ... the filter for the Services we want to count
     *   }
     * })
    **/
    count<T extends ServicesCountArgs>(
      args?: Subset<T, ServicesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServicesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ServicesAggregateArgs>(args: Subset<T, ServicesAggregateArgs>): Prisma.PrismaPromise<GetServicesAggregateType<T>>

    /**
     * Group by Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicesGroupByArgs} args - Group by arguments.
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
      T extends ServicesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ServicesGroupByArgs['orderBy'] }
        : { orderBy?: ServicesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ServicesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServicesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Services model
   */
  readonly fields: ServicesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Services.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ServicesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Services model
   */
  interface ServicesFieldRefs {
    readonly id: FieldRef<"Services", 'Int'>
    readonly icon: FieldRef<"Services", 'String'>
    readonly iconPublicId: FieldRef<"Services", 'String'>
    readonly localeData: FieldRef<"Services", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * Services findUnique
   */
  export type ServicesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Services
     */
    select?: ServicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Services
     */
    omit?: ServicesOmit<ExtArgs> | null
    /**
     * Filter, which Services to fetch.
     */
    where: ServicesWhereUniqueInput
  }

  /**
   * Services findUniqueOrThrow
   */
  export type ServicesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Services
     */
    select?: ServicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Services
     */
    omit?: ServicesOmit<ExtArgs> | null
    /**
     * Filter, which Services to fetch.
     */
    where: ServicesWhereUniqueInput
  }

  /**
   * Services findFirst
   */
  export type ServicesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Services
     */
    select?: ServicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Services
     */
    omit?: ServicesOmit<ExtArgs> | null
    /**
     * Filter, which Services to fetch.
     */
    where?: ServicesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServicesOrderByWithRelationInput | ServicesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Services.
     */
    cursor?: ServicesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Services.
     */
    distinct?: ServicesScalarFieldEnum | ServicesScalarFieldEnum[]
  }

  /**
   * Services findFirstOrThrow
   */
  export type ServicesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Services
     */
    select?: ServicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Services
     */
    omit?: ServicesOmit<ExtArgs> | null
    /**
     * Filter, which Services to fetch.
     */
    where?: ServicesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServicesOrderByWithRelationInput | ServicesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Services.
     */
    cursor?: ServicesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Services.
     */
    distinct?: ServicesScalarFieldEnum | ServicesScalarFieldEnum[]
  }

  /**
   * Services findMany
   */
  export type ServicesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Services
     */
    select?: ServicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Services
     */
    omit?: ServicesOmit<ExtArgs> | null
    /**
     * Filter, which Services to fetch.
     */
    where?: ServicesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServicesOrderByWithRelationInput | ServicesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Services.
     */
    cursor?: ServicesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    distinct?: ServicesScalarFieldEnum | ServicesScalarFieldEnum[]
  }

  /**
   * Services create
   */
  export type ServicesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Services
     */
    select?: ServicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Services
     */
    omit?: ServicesOmit<ExtArgs> | null
    /**
     * The data needed to create a Services.
     */
    data: XOR<ServicesCreateInput, ServicesUncheckedCreateInput>
  }

  /**
   * Services createMany
   */
  export type ServicesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Services.
     */
    data: ServicesCreateManyInput | ServicesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Services update
   */
  export type ServicesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Services
     */
    select?: ServicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Services
     */
    omit?: ServicesOmit<ExtArgs> | null
    /**
     * The data needed to update a Services.
     */
    data: XOR<ServicesUpdateInput, ServicesUncheckedUpdateInput>
    /**
     * Choose, which Services to update.
     */
    where: ServicesWhereUniqueInput
  }

  /**
   * Services updateMany
   */
  export type ServicesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Services.
     */
    data: XOR<ServicesUpdateManyMutationInput, ServicesUncheckedUpdateManyInput>
    /**
     * Filter which Services to update
     */
    where?: ServicesWhereInput
    /**
     * Limit how many Services to update.
     */
    limit?: number
  }

  /**
   * Services upsert
   */
  export type ServicesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Services
     */
    select?: ServicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Services
     */
    omit?: ServicesOmit<ExtArgs> | null
    /**
     * The filter to search for the Services to update in case it exists.
     */
    where: ServicesWhereUniqueInput
    /**
     * In case the Services found by the `where` argument doesn't exist, create a new Services with this data.
     */
    create: XOR<ServicesCreateInput, ServicesUncheckedCreateInput>
    /**
     * In case the Services was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ServicesUpdateInput, ServicesUncheckedUpdateInput>
  }

  /**
   * Services delete
   */
  export type ServicesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Services
     */
    select?: ServicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Services
     */
    omit?: ServicesOmit<ExtArgs> | null
    /**
     * Filter which Services to delete.
     */
    where: ServicesWhereUniqueInput
  }

  /**
   * Services deleteMany
   */
  export type ServicesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Services to delete
     */
    where?: ServicesWhereInput
    /**
     * Limit how many Services to delete.
     */
    limit?: number
  }

  /**
   * Services without action
   */
  export type ServicesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Services
     */
    select?: ServicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Services
     */
    omit?: ServicesOmit<ExtArgs> | null
  }


  /**
   * Model Projects
   */

  export type AggregateProjects = {
    _count: ProjectsCountAggregateOutputType | null
    _avg: ProjectsAvgAggregateOutputType | null
    _sum: ProjectsSumAggregateOutputType | null
    _min: ProjectsMinAggregateOutputType | null
    _max: ProjectsMaxAggregateOutputType | null
  }

  export type ProjectsAvgAggregateOutputType = {
    id: number | null
    categoryId: number | null
  }

  export type ProjectsSumAggregateOutputType = {
    id: number | null
    categoryId: number | null
  }

  export type ProjectsMinAggregateOutputType = {
    id: number | null
    title: string | null
    categoryId: number | null
    slug: string | null
    status: string | null
  }

  export type ProjectsMaxAggregateOutputType = {
    id: number | null
    title: string | null
    categoryId: number | null
    slug: string | null
    status: string | null
  }

  export type ProjectsCountAggregateOutputType = {
    id: number
    title: number
    categoryId: number
    slug: number
    status: number
    localizedContent: number
    facts: number
    design: number
    _all: number
  }


  export type ProjectsAvgAggregateInputType = {
    id?: true
    categoryId?: true
  }

  export type ProjectsSumAggregateInputType = {
    id?: true
    categoryId?: true
  }

  export type ProjectsMinAggregateInputType = {
    id?: true
    title?: true
    categoryId?: true
    slug?: true
    status?: true
  }

  export type ProjectsMaxAggregateInputType = {
    id?: true
    title?: true
    categoryId?: true
    slug?: true
    status?: true
  }

  export type ProjectsCountAggregateInputType = {
    id?: true
    title?: true
    categoryId?: true
    slug?: true
    status?: true
    localizedContent?: true
    facts?: true
    design?: true
    _all?: true
  }

  export type ProjectsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Projects to aggregate.
     */
    where?: ProjectsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectsOrderByWithRelationInput | ProjectsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Projects
    **/
    _count?: true | ProjectsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProjectsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProjectsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectsMaxAggregateInputType
  }

  export type GetProjectsAggregateType<T extends ProjectsAggregateArgs> = {
        [P in keyof T & keyof AggregateProjects]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProjects[P]>
      : GetScalarType<T[P], AggregateProjects[P]>
  }




  export type ProjectsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectsWhereInput
    orderBy?: ProjectsOrderByWithAggregationInput | ProjectsOrderByWithAggregationInput[]
    by: ProjectsScalarFieldEnum[] | ProjectsScalarFieldEnum
    having?: ProjectsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectsCountAggregateInputType | true
    _avg?: ProjectsAvgAggregateInputType
    _sum?: ProjectsSumAggregateInputType
    _min?: ProjectsMinAggregateInputType
    _max?: ProjectsMaxAggregateInputType
  }

  export type ProjectsGroupByOutputType = {
    id: number
    title: string
    categoryId: number
    slug: string
    status: string
    localizedContent: JsonValue
    facts: JsonValue
    design: JsonValue
    _count: ProjectsCountAggregateOutputType | null
    _avg: ProjectsAvgAggregateOutputType | null
    _sum: ProjectsSumAggregateOutputType | null
    _min: ProjectsMinAggregateOutputType | null
    _max: ProjectsMaxAggregateOutputType | null
  }

  type GetProjectsGroupByPayload<T extends ProjectsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectsGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectsGroupByOutputType[P]>
        }
      >
    >


  export type ProjectsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    categoryId?: boolean
    slug?: boolean
    status?: boolean
    localizedContent?: boolean
    facts?: boolean
    design?: boolean
    coverImage?: boolean | Projects$coverImageArgs<ExtArgs>
    category?: boolean | ProjectCategoryDefaultArgs<ExtArgs>
    gallery?: boolean | Projects$galleryArgs<ExtArgs>
    _count?: boolean | ProjectsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projects"]>



  export type ProjectsSelectScalar = {
    id?: boolean
    title?: boolean
    categoryId?: boolean
    slug?: boolean
    status?: boolean
    localizedContent?: boolean
    facts?: boolean
    design?: boolean
  }

  export type ProjectsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "categoryId" | "slug" | "status" | "localizedContent" | "facts" | "design", ExtArgs["result"]["projects"]>
  export type ProjectsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    coverImage?: boolean | Projects$coverImageArgs<ExtArgs>
    category?: boolean | ProjectCategoryDefaultArgs<ExtArgs>
    gallery?: boolean | Projects$galleryArgs<ExtArgs>
    _count?: boolean | ProjectsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ProjectsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Projects"
    objects: {
      coverImage: Prisma.$CoverImagePayload<ExtArgs> | null
      category: Prisma.$ProjectCategoryPayload<ExtArgs>
      gallery: Prisma.$ProjectGalleryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      categoryId: number
      slug: string
      status: string
      localizedContent: Prisma.JsonValue
      facts: Prisma.JsonValue
      design: Prisma.JsonValue
    }, ExtArgs["result"]["projects"]>
    composites: {}
  }

  type ProjectsGetPayload<S extends boolean | null | undefined | ProjectsDefaultArgs> = $Result.GetResult<Prisma.$ProjectsPayload, S>

  type ProjectsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectsCountAggregateInputType | true
    }

  export interface ProjectsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Projects'], meta: { name: 'Projects' } }
    /**
     * Find zero or one Projects that matches the filter.
     * @param {ProjectsFindUniqueArgs} args - Arguments to find a Projects
     * @example
     * // Get one Projects
     * const projects = await prisma.projects.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectsFindUniqueArgs>(args: SelectSubset<T, ProjectsFindUniqueArgs<ExtArgs>>): Prisma__ProjectsClient<$Result.GetResult<Prisma.$ProjectsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Projects that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectsFindUniqueOrThrowArgs} args - Arguments to find a Projects
     * @example
     * // Get one Projects
     * const projects = await prisma.projects.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectsFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectsClient<$Result.GetResult<Prisma.$ProjectsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectsFindFirstArgs} args - Arguments to find a Projects
     * @example
     * // Get one Projects
     * const projects = await prisma.projects.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectsFindFirstArgs>(args?: SelectSubset<T, ProjectsFindFirstArgs<ExtArgs>>): Prisma__ProjectsClient<$Result.GetResult<Prisma.$ProjectsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Projects that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectsFindFirstOrThrowArgs} args - Arguments to find a Projects
     * @example
     * // Get one Projects
     * const projects = await prisma.projects.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectsFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectsClient<$Result.GetResult<Prisma.$ProjectsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projects
     * const projects = await prisma.projects.findMany()
     * 
     * // Get first 10 Projects
     * const projects = await prisma.projects.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectsWithIdOnly = await prisma.projects.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectsFindManyArgs>(args?: SelectSubset<T, ProjectsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Projects.
     * @param {ProjectsCreateArgs} args - Arguments to create a Projects.
     * @example
     * // Create one Projects
     * const Projects = await prisma.projects.create({
     *   data: {
     *     // ... data to create a Projects
     *   }
     * })
     * 
     */
    create<T extends ProjectsCreateArgs>(args: SelectSubset<T, ProjectsCreateArgs<ExtArgs>>): Prisma__ProjectsClient<$Result.GetResult<Prisma.$ProjectsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Projects.
     * @param {ProjectsCreateManyArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const projects = await prisma.projects.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectsCreateManyArgs>(args?: SelectSubset<T, ProjectsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Projects.
     * @param {ProjectsDeleteArgs} args - Arguments to delete one Projects.
     * @example
     * // Delete one Projects
     * const Projects = await prisma.projects.delete({
     *   where: {
     *     // ... filter to delete one Projects
     *   }
     * })
     * 
     */
    delete<T extends ProjectsDeleteArgs>(args: SelectSubset<T, ProjectsDeleteArgs<ExtArgs>>): Prisma__ProjectsClient<$Result.GetResult<Prisma.$ProjectsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Projects.
     * @param {ProjectsUpdateArgs} args - Arguments to update one Projects.
     * @example
     * // Update one Projects
     * const projects = await prisma.projects.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectsUpdateArgs>(args: SelectSubset<T, ProjectsUpdateArgs<ExtArgs>>): Prisma__ProjectsClient<$Result.GetResult<Prisma.$ProjectsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Projects.
     * @param {ProjectsDeleteManyArgs} args - Arguments to filter Projects to delete.
     * @example
     * // Delete a few Projects
     * const { count } = await prisma.projects.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectsDeleteManyArgs>(args?: SelectSubset<T, ProjectsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projects
     * const projects = await prisma.projects.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectsUpdateManyArgs>(args: SelectSubset<T, ProjectsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Projects.
     * @param {ProjectsUpsertArgs} args - Arguments to update or create a Projects.
     * @example
     * // Update or create a Projects
     * const projects = await prisma.projects.upsert({
     *   create: {
     *     // ... data to create a Projects
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Projects we want to update
     *   }
     * })
     */
    upsert<T extends ProjectsUpsertArgs>(args: SelectSubset<T, ProjectsUpsertArgs<ExtArgs>>): Prisma__ProjectsClient<$Result.GetResult<Prisma.$ProjectsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectsCountArgs} args - Arguments to filter Projects to count.
     * @example
     * // Count the number of Projects
     * const count = await prisma.projects.count({
     *   where: {
     *     // ... the filter for the Projects we want to count
     *   }
     * })
    **/
    count<T extends ProjectsCountArgs>(
      args?: Subset<T, ProjectsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProjectsAggregateArgs>(args: Subset<T, ProjectsAggregateArgs>): Prisma.PrismaPromise<GetProjectsAggregateType<T>>

    /**
     * Group by Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectsGroupByArgs} args - Group by arguments.
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
      T extends ProjectsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectsGroupByArgs['orderBy'] }
        : { orderBy?: ProjectsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProjectsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Projects model
   */
  readonly fields: ProjectsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Projects.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    coverImage<T extends Projects$coverImageArgs<ExtArgs> = {}>(args?: Subset<T, Projects$coverImageArgs<ExtArgs>>): Prisma__CoverImageClient<$Result.GetResult<Prisma.$CoverImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    category<T extends ProjectCategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectCategoryDefaultArgs<ExtArgs>>): Prisma__ProjectCategoryClient<$Result.GetResult<Prisma.$ProjectCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    gallery<T extends Projects$galleryArgs<ExtArgs> = {}>(args?: Subset<T, Projects$galleryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectGalleryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Projects model
   */
  interface ProjectsFieldRefs {
    readonly id: FieldRef<"Projects", 'Int'>
    readonly title: FieldRef<"Projects", 'String'>
    readonly categoryId: FieldRef<"Projects", 'Int'>
    readonly slug: FieldRef<"Projects", 'String'>
    readonly status: FieldRef<"Projects", 'String'>
    readonly localizedContent: FieldRef<"Projects", 'Json'>
    readonly facts: FieldRef<"Projects", 'Json'>
    readonly design: FieldRef<"Projects", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * Projects findUnique
   */
  export type ProjectsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projects
     */
    select?: ProjectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Projects
     */
    omit?: ProjectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectsInclude<ExtArgs> | null
    /**
     * Filter, which Projects to fetch.
     */
    where: ProjectsWhereUniqueInput
  }

  /**
   * Projects findUniqueOrThrow
   */
  export type ProjectsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projects
     */
    select?: ProjectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Projects
     */
    omit?: ProjectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectsInclude<ExtArgs> | null
    /**
     * Filter, which Projects to fetch.
     */
    where: ProjectsWhereUniqueInput
  }

  /**
   * Projects findFirst
   */
  export type ProjectsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projects
     */
    select?: ProjectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Projects
     */
    omit?: ProjectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectsInclude<ExtArgs> | null
    /**
     * Filter, which Projects to fetch.
     */
    where?: ProjectsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectsOrderByWithRelationInput | ProjectsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectsScalarFieldEnum | ProjectsScalarFieldEnum[]
  }

  /**
   * Projects findFirstOrThrow
   */
  export type ProjectsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projects
     */
    select?: ProjectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Projects
     */
    omit?: ProjectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectsInclude<ExtArgs> | null
    /**
     * Filter, which Projects to fetch.
     */
    where?: ProjectsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectsOrderByWithRelationInput | ProjectsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectsScalarFieldEnum | ProjectsScalarFieldEnum[]
  }

  /**
   * Projects findMany
   */
  export type ProjectsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projects
     */
    select?: ProjectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Projects
     */
    omit?: ProjectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectsInclude<ExtArgs> | null
    /**
     * Filter, which Projects to fetch.
     */
    where?: ProjectsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectsOrderByWithRelationInput | ProjectsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Projects.
     */
    cursor?: ProjectsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    distinct?: ProjectsScalarFieldEnum | ProjectsScalarFieldEnum[]
  }

  /**
   * Projects create
   */
  export type ProjectsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projects
     */
    select?: ProjectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Projects
     */
    omit?: ProjectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectsInclude<ExtArgs> | null
    /**
     * The data needed to create a Projects.
     */
    data: XOR<ProjectsCreateInput, ProjectsUncheckedCreateInput>
  }

  /**
   * Projects createMany
   */
  export type ProjectsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Projects.
     */
    data: ProjectsCreateManyInput | ProjectsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Projects update
   */
  export type ProjectsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projects
     */
    select?: ProjectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Projects
     */
    omit?: ProjectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectsInclude<ExtArgs> | null
    /**
     * The data needed to update a Projects.
     */
    data: XOR<ProjectsUpdateInput, ProjectsUncheckedUpdateInput>
    /**
     * Choose, which Projects to update.
     */
    where: ProjectsWhereUniqueInput
  }

  /**
   * Projects updateMany
   */
  export type ProjectsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectsUpdateManyMutationInput, ProjectsUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectsWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
  }

  /**
   * Projects upsert
   */
  export type ProjectsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projects
     */
    select?: ProjectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Projects
     */
    omit?: ProjectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectsInclude<ExtArgs> | null
    /**
     * The filter to search for the Projects to update in case it exists.
     */
    where: ProjectsWhereUniqueInput
    /**
     * In case the Projects found by the `where` argument doesn't exist, create a new Projects with this data.
     */
    create: XOR<ProjectsCreateInput, ProjectsUncheckedCreateInput>
    /**
     * In case the Projects was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectsUpdateInput, ProjectsUncheckedUpdateInput>
  }

  /**
   * Projects delete
   */
  export type ProjectsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projects
     */
    select?: ProjectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Projects
     */
    omit?: ProjectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectsInclude<ExtArgs> | null
    /**
     * Filter which Projects to delete.
     */
    where: ProjectsWhereUniqueInput
  }

  /**
   * Projects deleteMany
   */
  export type ProjectsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Projects to delete
     */
    where?: ProjectsWhereInput
    /**
     * Limit how many Projects to delete.
     */
    limit?: number
  }

  /**
   * Projects.coverImage
   */
  export type Projects$coverImageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoverImage
     */
    select?: CoverImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoverImage
     */
    omit?: CoverImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoverImageInclude<ExtArgs> | null
    where?: CoverImageWhereInput
  }

  /**
   * Projects.gallery
   */
  export type Projects$galleryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectGallery
     */
    select?: ProjectGallerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectGallery
     */
    omit?: ProjectGalleryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectGalleryInclude<ExtArgs> | null
    where?: ProjectGalleryWhereInput
    orderBy?: ProjectGalleryOrderByWithRelationInput | ProjectGalleryOrderByWithRelationInput[]
    cursor?: ProjectGalleryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectGalleryScalarFieldEnum | ProjectGalleryScalarFieldEnum[]
  }

  /**
   * Projects without action
   */
  export type ProjectsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projects
     */
    select?: ProjectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Projects
     */
    omit?: ProjectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectsInclude<ExtArgs> | null
  }


  /**
   * Model ProjectCategory
   */

  export type AggregateProjectCategory = {
    _count: ProjectCategoryCountAggregateOutputType | null
    _avg: ProjectCategoryAvgAggregateOutputType | null
    _sum: ProjectCategorySumAggregateOutputType | null
    _min: ProjectCategoryMinAggregateOutputType | null
    _max: ProjectCategoryMaxAggregateOutputType | null
  }

  export type ProjectCategoryAvgAggregateOutputType = {
    id: number | null
  }

  export type ProjectCategorySumAggregateOutputType = {
    id: number | null
  }

  export type ProjectCategoryMinAggregateOutputType = {
    id: number | null
    title: string | null
  }

  export type ProjectCategoryMaxAggregateOutputType = {
    id: number | null
    title: string | null
  }

  export type ProjectCategoryCountAggregateOutputType = {
    id: number
    title: number
    _all: number
  }


  export type ProjectCategoryAvgAggregateInputType = {
    id?: true
  }

  export type ProjectCategorySumAggregateInputType = {
    id?: true
  }

  export type ProjectCategoryMinAggregateInputType = {
    id?: true
    title?: true
  }

  export type ProjectCategoryMaxAggregateInputType = {
    id?: true
    title?: true
  }

  export type ProjectCategoryCountAggregateInputType = {
    id?: true
    title?: true
    _all?: true
  }

  export type ProjectCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectCategory to aggregate.
     */
    where?: ProjectCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectCategories to fetch.
     */
    orderBy?: ProjectCategoryOrderByWithRelationInput | ProjectCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProjectCategories
    **/
    _count?: true | ProjectCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProjectCategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProjectCategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectCategoryMaxAggregateInputType
  }

  export type GetProjectCategoryAggregateType<T extends ProjectCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateProjectCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProjectCategory[P]>
      : GetScalarType<T[P], AggregateProjectCategory[P]>
  }




  export type ProjectCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectCategoryWhereInput
    orderBy?: ProjectCategoryOrderByWithAggregationInput | ProjectCategoryOrderByWithAggregationInput[]
    by: ProjectCategoryScalarFieldEnum[] | ProjectCategoryScalarFieldEnum
    having?: ProjectCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectCategoryCountAggregateInputType | true
    _avg?: ProjectCategoryAvgAggregateInputType
    _sum?: ProjectCategorySumAggregateInputType
    _min?: ProjectCategoryMinAggregateInputType
    _max?: ProjectCategoryMaxAggregateInputType
  }

  export type ProjectCategoryGroupByOutputType = {
    id: number
    title: string
    _count: ProjectCategoryCountAggregateOutputType | null
    _avg: ProjectCategoryAvgAggregateOutputType | null
    _sum: ProjectCategorySumAggregateOutputType | null
    _min: ProjectCategoryMinAggregateOutputType | null
    _max: ProjectCategoryMaxAggregateOutputType | null
  }

  type GetProjectCategoryGroupByPayload<T extends ProjectCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectCategoryGroupByOutputType[P]>
        }
      >
    >


  export type ProjectCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    projects?: boolean | ProjectCategory$projectsArgs<ExtArgs>
    _count?: boolean | ProjectCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectCategory"]>



  export type ProjectCategorySelectScalar = {
    id?: boolean
    title?: boolean
  }

  export type ProjectCategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title", ExtArgs["result"]["projectCategory"]>
  export type ProjectCategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projects?: boolean | ProjectCategory$projectsArgs<ExtArgs>
    _count?: boolean | ProjectCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ProjectCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProjectCategory"
    objects: {
      projects: Prisma.$ProjectsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
    }, ExtArgs["result"]["projectCategory"]>
    composites: {}
  }

  type ProjectCategoryGetPayload<S extends boolean | null | undefined | ProjectCategoryDefaultArgs> = $Result.GetResult<Prisma.$ProjectCategoryPayload, S>

  type ProjectCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectCategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectCategoryCountAggregateInputType | true
    }

  export interface ProjectCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProjectCategory'], meta: { name: 'ProjectCategory' } }
    /**
     * Find zero or one ProjectCategory that matches the filter.
     * @param {ProjectCategoryFindUniqueArgs} args - Arguments to find a ProjectCategory
     * @example
     * // Get one ProjectCategory
     * const projectCategory = await prisma.projectCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectCategoryFindUniqueArgs>(args: SelectSubset<T, ProjectCategoryFindUniqueArgs<ExtArgs>>): Prisma__ProjectCategoryClient<$Result.GetResult<Prisma.$ProjectCategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProjectCategory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectCategoryFindUniqueOrThrowArgs} args - Arguments to find a ProjectCategory
     * @example
     * // Get one ProjectCategory
     * const projectCategory = await prisma.projectCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectCategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectCategoryClient<$Result.GetResult<Prisma.$ProjectCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCategoryFindFirstArgs} args - Arguments to find a ProjectCategory
     * @example
     * // Get one ProjectCategory
     * const projectCategory = await prisma.projectCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectCategoryFindFirstArgs>(args?: SelectSubset<T, ProjectCategoryFindFirstArgs<ExtArgs>>): Prisma__ProjectCategoryClient<$Result.GetResult<Prisma.$ProjectCategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCategoryFindFirstOrThrowArgs} args - Arguments to find a ProjectCategory
     * @example
     * // Get one ProjectCategory
     * const projectCategory = await prisma.projectCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectCategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectCategoryClient<$Result.GetResult<Prisma.$ProjectCategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProjectCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProjectCategories
     * const projectCategories = await prisma.projectCategory.findMany()
     * 
     * // Get first 10 ProjectCategories
     * const projectCategories = await prisma.projectCategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectCategoryWithIdOnly = await prisma.projectCategory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectCategoryFindManyArgs>(args?: SelectSubset<T, ProjectCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProjectCategory.
     * @param {ProjectCategoryCreateArgs} args - Arguments to create a ProjectCategory.
     * @example
     * // Create one ProjectCategory
     * const ProjectCategory = await prisma.projectCategory.create({
     *   data: {
     *     // ... data to create a ProjectCategory
     *   }
     * })
     * 
     */
    create<T extends ProjectCategoryCreateArgs>(args: SelectSubset<T, ProjectCategoryCreateArgs<ExtArgs>>): Prisma__ProjectCategoryClient<$Result.GetResult<Prisma.$ProjectCategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProjectCategories.
     * @param {ProjectCategoryCreateManyArgs} args - Arguments to create many ProjectCategories.
     * @example
     * // Create many ProjectCategories
     * const projectCategory = await prisma.projectCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectCategoryCreateManyArgs>(args?: SelectSubset<T, ProjectCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ProjectCategory.
     * @param {ProjectCategoryDeleteArgs} args - Arguments to delete one ProjectCategory.
     * @example
     * // Delete one ProjectCategory
     * const ProjectCategory = await prisma.projectCategory.delete({
     *   where: {
     *     // ... filter to delete one ProjectCategory
     *   }
     * })
     * 
     */
    delete<T extends ProjectCategoryDeleteArgs>(args: SelectSubset<T, ProjectCategoryDeleteArgs<ExtArgs>>): Prisma__ProjectCategoryClient<$Result.GetResult<Prisma.$ProjectCategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProjectCategory.
     * @param {ProjectCategoryUpdateArgs} args - Arguments to update one ProjectCategory.
     * @example
     * // Update one ProjectCategory
     * const projectCategory = await prisma.projectCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectCategoryUpdateArgs>(args: SelectSubset<T, ProjectCategoryUpdateArgs<ExtArgs>>): Prisma__ProjectCategoryClient<$Result.GetResult<Prisma.$ProjectCategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProjectCategories.
     * @param {ProjectCategoryDeleteManyArgs} args - Arguments to filter ProjectCategories to delete.
     * @example
     * // Delete a few ProjectCategories
     * const { count } = await prisma.projectCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectCategoryDeleteManyArgs>(args?: SelectSubset<T, ProjectCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProjectCategories
     * const projectCategory = await prisma.projectCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectCategoryUpdateManyArgs>(args: SelectSubset<T, ProjectCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ProjectCategory.
     * @param {ProjectCategoryUpsertArgs} args - Arguments to update or create a ProjectCategory.
     * @example
     * // Update or create a ProjectCategory
     * const projectCategory = await prisma.projectCategory.upsert({
     *   create: {
     *     // ... data to create a ProjectCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProjectCategory we want to update
     *   }
     * })
     */
    upsert<T extends ProjectCategoryUpsertArgs>(args: SelectSubset<T, ProjectCategoryUpsertArgs<ExtArgs>>): Prisma__ProjectCategoryClient<$Result.GetResult<Prisma.$ProjectCategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProjectCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCategoryCountArgs} args - Arguments to filter ProjectCategories to count.
     * @example
     * // Count the number of ProjectCategories
     * const count = await prisma.projectCategory.count({
     *   where: {
     *     // ... the filter for the ProjectCategories we want to count
     *   }
     * })
    **/
    count<T extends ProjectCategoryCountArgs>(
      args?: Subset<T, ProjectCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProjectCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProjectCategoryAggregateArgs>(args: Subset<T, ProjectCategoryAggregateArgs>): Prisma.PrismaPromise<GetProjectCategoryAggregateType<T>>

    /**
     * Group by ProjectCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCategoryGroupByArgs} args - Group by arguments.
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
      T extends ProjectCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectCategoryGroupByArgs['orderBy'] }
        : { orderBy?: ProjectCategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProjectCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProjectCategory model
   */
  readonly fields: ProjectCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProjectCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    projects<T extends ProjectCategory$projectsArgs<ExtArgs> = {}>(args?: Subset<T, ProjectCategory$projectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the ProjectCategory model
   */
  interface ProjectCategoryFieldRefs {
    readonly id: FieldRef<"ProjectCategory", 'Int'>
    readonly title: FieldRef<"ProjectCategory", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ProjectCategory findUnique
   */
  export type ProjectCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCategory
     */
    select?: ProjectCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectCategory
     */
    omit?: ProjectCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectCategoryInclude<ExtArgs> | null
    /**
     * Filter, which ProjectCategory to fetch.
     */
    where: ProjectCategoryWhereUniqueInput
  }

  /**
   * ProjectCategory findUniqueOrThrow
   */
  export type ProjectCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCategory
     */
    select?: ProjectCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectCategory
     */
    omit?: ProjectCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectCategoryInclude<ExtArgs> | null
    /**
     * Filter, which ProjectCategory to fetch.
     */
    where: ProjectCategoryWhereUniqueInput
  }

  /**
   * ProjectCategory findFirst
   */
  export type ProjectCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCategory
     */
    select?: ProjectCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectCategory
     */
    omit?: ProjectCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectCategoryInclude<ExtArgs> | null
    /**
     * Filter, which ProjectCategory to fetch.
     */
    where?: ProjectCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectCategories to fetch.
     */
    orderBy?: ProjectCategoryOrderByWithRelationInput | ProjectCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectCategories.
     */
    cursor?: ProjectCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectCategories.
     */
    distinct?: ProjectCategoryScalarFieldEnum | ProjectCategoryScalarFieldEnum[]
  }

  /**
   * ProjectCategory findFirstOrThrow
   */
  export type ProjectCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCategory
     */
    select?: ProjectCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectCategory
     */
    omit?: ProjectCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectCategoryInclude<ExtArgs> | null
    /**
     * Filter, which ProjectCategory to fetch.
     */
    where?: ProjectCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectCategories to fetch.
     */
    orderBy?: ProjectCategoryOrderByWithRelationInput | ProjectCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectCategories.
     */
    cursor?: ProjectCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectCategories.
     */
    distinct?: ProjectCategoryScalarFieldEnum | ProjectCategoryScalarFieldEnum[]
  }

  /**
   * ProjectCategory findMany
   */
  export type ProjectCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCategory
     */
    select?: ProjectCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectCategory
     */
    omit?: ProjectCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectCategoryInclude<ExtArgs> | null
    /**
     * Filter, which ProjectCategories to fetch.
     */
    where?: ProjectCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectCategories to fetch.
     */
    orderBy?: ProjectCategoryOrderByWithRelationInput | ProjectCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProjectCategories.
     */
    cursor?: ProjectCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectCategories.
     */
    skip?: number
    distinct?: ProjectCategoryScalarFieldEnum | ProjectCategoryScalarFieldEnum[]
  }

  /**
   * ProjectCategory create
   */
  export type ProjectCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCategory
     */
    select?: ProjectCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectCategory
     */
    omit?: ProjectCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectCategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a ProjectCategory.
     */
    data: XOR<ProjectCategoryCreateInput, ProjectCategoryUncheckedCreateInput>
  }

  /**
   * ProjectCategory createMany
   */
  export type ProjectCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProjectCategories.
     */
    data: ProjectCategoryCreateManyInput | ProjectCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProjectCategory update
   */
  export type ProjectCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCategory
     */
    select?: ProjectCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectCategory
     */
    omit?: ProjectCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectCategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a ProjectCategory.
     */
    data: XOR<ProjectCategoryUpdateInput, ProjectCategoryUncheckedUpdateInput>
    /**
     * Choose, which ProjectCategory to update.
     */
    where: ProjectCategoryWhereUniqueInput
  }

  /**
   * ProjectCategory updateMany
   */
  export type ProjectCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProjectCategories.
     */
    data: XOR<ProjectCategoryUpdateManyMutationInput, ProjectCategoryUncheckedUpdateManyInput>
    /**
     * Filter which ProjectCategories to update
     */
    where?: ProjectCategoryWhereInput
    /**
     * Limit how many ProjectCategories to update.
     */
    limit?: number
  }

  /**
   * ProjectCategory upsert
   */
  export type ProjectCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCategory
     */
    select?: ProjectCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectCategory
     */
    omit?: ProjectCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectCategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the ProjectCategory to update in case it exists.
     */
    where: ProjectCategoryWhereUniqueInput
    /**
     * In case the ProjectCategory found by the `where` argument doesn't exist, create a new ProjectCategory with this data.
     */
    create: XOR<ProjectCategoryCreateInput, ProjectCategoryUncheckedCreateInput>
    /**
     * In case the ProjectCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectCategoryUpdateInput, ProjectCategoryUncheckedUpdateInput>
  }

  /**
   * ProjectCategory delete
   */
  export type ProjectCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCategory
     */
    select?: ProjectCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectCategory
     */
    omit?: ProjectCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectCategoryInclude<ExtArgs> | null
    /**
     * Filter which ProjectCategory to delete.
     */
    where: ProjectCategoryWhereUniqueInput
  }

  /**
   * ProjectCategory deleteMany
   */
  export type ProjectCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectCategories to delete
     */
    where?: ProjectCategoryWhereInput
    /**
     * Limit how many ProjectCategories to delete.
     */
    limit?: number
  }

  /**
   * ProjectCategory.projects
   */
  export type ProjectCategory$projectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projects
     */
    select?: ProjectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Projects
     */
    omit?: ProjectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectsInclude<ExtArgs> | null
    where?: ProjectsWhereInput
    orderBy?: ProjectsOrderByWithRelationInput | ProjectsOrderByWithRelationInput[]
    cursor?: ProjectsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectsScalarFieldEnum | ProjectsScalarFieldEnum[]
  }

  /**
   * ProjectCategory without action
   */
  export type ProjectCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCategory
     */
    select?: ProjectCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectCategory
     */
    omit?: ProjectCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectCategoryInclude<ExtArgs> | null
  }


  /**
   * Model CoverImage
   */

  export type AggregateCoverImage = {
    _count: CoverImageCountAggregateOutputType | null
    _avg: CoverImageAvgAggregateOutputType | null
    _sum: CoverImageSumAggregateOutputType | null
    _min: CoverImageMinAggregateOutputType | null
    _max: CoverImageMaxAggregateOutputType | null
  }

  export type CoverImageAvgAggregateOutputType = {
    id: number | null
    projectId: number | null
  }

  export type CoverImageSumAggregateOutputType = {
    id: number | null
    projectId: number | null
  }

  export type CoverImageMinAggregateOutputType = {
    id: number | null
    projectId: number | null
    image_light: string | null
    image_dark: string | null
    imageLightPublicId: string | null
    imageDarkPublicId: string | null
  }

  export type CoverImageMaxAggregateOutputType = {
    id: number | null
    projectId: number | null
    image_light: string | null
    image_dark: string | null
    imageLightPublicId: string | null
    imageDarkPublicId: string | null
  }

  export type CoverImageCountAggregateOutputType = {
    id: number
    projectId: number
    image_light: number
    image_dark: number
    imageLightPublicId: number
    imageDarkPublicId: number
    image_alt: number
    _all: number
  }


  export type CoverImageAvgAggregateInputType = {
    id?: true
    projectId?: true
  }

  export type CoverImageSumAggregateInputType = {
    id?: true
    projectId?: true
  }

  export type CoverImageMinAggregateInputType = {
    id?: true
    projectId?: true
    image_light?: true
    image_dark?: true
    imageLightPublicId?: true
    imageDarkPublicId?: true
  }

  export type CoverImageMaxAggregateInputType = {
    id?: true
    projectId?: true
    image_light?: true
    image_dark?: true
    imageLightPublicId?: true
    imageDarkPublicId?: true
  }

  export type CoverImageCountAggregateInputType = {
    id?: true
    projectId?: true
    image_light?: true
    image_dark?: true
    imageLightPublicId?: true
    imageDarkPublicId?: true
    image_alt?: true
    _all?: true
  }

  export type CoverImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CoverImage to aggregate.
     */
    where?: CoverImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CoverImages to fetch.
     */
    orderBy?: CoverImageOrderByWithRelationInput | CoverImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CoverImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CoverImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CoverImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CoverImages
    **/
    _count?: true | CoverImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CoverImageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CoverImageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CoverImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CoverImageMaxAggregateInputType
  }

  export type GetCoverImageAggregateType<T extends CoverImageAggregateArgs> = {
        [P in keyof T & keyof AggregateCoverImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCoverImage[P]>
      : GetScalarType<T[P], AggregateCoverImage[P]>
  }




  export type CoverImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CoverImageWhereInput
    orderBy?: CoverImageOrderByWithAggregationInput | CoverImageOrderByWithAggregationInput[]
    by: CoverImageScalarFieldEnum[] | CoverImageScalarFieldEnum
    having?: CoverImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CoverImageCountAggregateInputType | true
    _avg?: CoverImageAvgAggregateInputType
    _sum?: CoverImageSumAggregateInputType
    _min?: CoverImageMinAggregateInputType
    _max?: CoverImageMaxAggregateInputType
  }

  export type CoverImageGroupByOutputType = {
    id: number
    projectId: number
    image_light: string
    image_dark: string
    imageLightPublicId: string | null
    imageDarkPublicId: string | null
    image_alt: JsonValue
    _count: CoverImageCountAggregateOutputType | null
    _avg: CoverImageAvgAggregateOutputType | null
    _sum: CoverImageSumAggregateOutputType | null
    _min: CoverImageMinAggregateOutputType | null
    _max: CoverImageMaxAggregateOutputType | null
  }

  type GetCoverImageGroupByPayload<T extends CoverImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CoverImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CoverImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CoverImageGroupByOutputType[P]>
            : GetScalarType<T[P], CoverImageGroupByOutputType[P]>
        }
      >
    >


  export type CoverImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    image_light?: boolean
    image_dark?: boolean
    imageLightPublicId?: boolean
    imageDarkPublicId?: boolean
    image_alt?: boolean
    project?: boolean | ProjectsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["coverImage"]>



  export type CoverImageSelectScalar = {
    id?: boolean
    projectId?: boolean
    image_light?: boolean
    image_dark?: boolean
    imageLightPublicId?: boolean
    imageDarkPublicId?: boolean
    image_alt?: boolean
  }

  export type CoverImageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "projectId" | "image_light" | "image_dark" | "imageLightPublicId" | "imageDarkPublicId" | "image_alt", ExtArgs["result"]["coverImage"]>
  export type CoverImageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectsDefaultArgs<ExtArgs>
  }

  export type $CoverImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CoverImage"
    objects: {
      project: Prisma.$ProjectsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      projectId: number
      image_light: string
      image_dark: string
      imageLightPublicId: string | null
      imageDarkPublicId: string | null
      image_alt: Prisma.JsonValue
    }, ExtArgs["result"]["coverImage"]>
    composites: {}
  }

  type CoverImageGetPayload<S extends boolean | null | undefined | CoverImageDefaultArgs> = $Result.GetResult<Prisma.$CoverImagePayload, S>

  type CoverImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CoverImageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CoverImageCountAggregateInputType | true
    }

  export interface CoverImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CoverImage'], meta: { name: 'CoverImage' } }
    /**
     * Find zero or one CoverImage that matches the filter.
     * @param {CoverImageFindUniqueArgs} args - Arguments to find a CoverImage
     * @example
     * // Get one CoverImage
     * const coverImage = await prisma.coverImage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CoverImageFindUniqueArgs>(args: SelectSubset<T, CoverImageFindUniqueArgs<ExtArgs>>): Prisma__CoverImageClient<$Result.GetResult<Prisma.$CoverImagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CoverImage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CoverImageFindUniqueOrThrowArgs} args - Arguments to find a CoverImage
     * @example
     * // Get one CoverImage
     * const coverImage = await prisma.coverImage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CoverImageFindUniqueOrThrowArgs>(args: SelectSubset<T, CoverImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CoverImageClient<$Result.GetResult<Prisma.$CoverImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CoverImage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoverImageFindFirstArgs} args - Arguments to find a CoverImage
     * @example
     * // Get one CoverImage
     * const coverImage = await prisma.coverImage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CoverImageFindFirstArgs>(args?: SelectSubset<T, CoverImageFindFirstArgs<ExtArgs>>): Prisma__CoverImageClient<$Result.GetResult<Prisma.$CoverImagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CoverImage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoverImageFindFirstOrThrowArgs} args - Arguments to find a CoverImage
     * @example
     * // Get one CoverImage
     * const coverImage = await prisma.coverImage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CoverImageFindFirstOrThrowArgs>(args?: SelectSubset<T, CoverImageFindFirstOrThrowArgs<ExtArgs>>): Prisma__CoverImageClient<$Result.GetResult<Prisma.$CoverImagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CoverImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoverImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CoverImages
     * const coverImages = await prisma.coverImage.findMany()
     * 
     * // Get first 10 CoverImages
     * const coverImages = await prisma.coverImage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const coverImageWithIdOnly = await prisma.coverImage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CoverImageFindManyArgs>(args?: SelectSubset<T, CoverImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoverImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CoverImage.
     * @param {CoverImageCreateArgs} args - Arguments to create a CoverImage.
     * @example
     * // Create one CoverImage
     * const CoverImage = await prisma.coverImage.create({
     *   data: {
     *     // ... data to create a CoverImage
     *   }
     * })
     * 
     */
    create<T extends CoverImageCreateArgs>(args: SelectSubset<T, CoverImageCreateArgs<ExtArgs>>): Prisma__CoverImageClient<$Result.GetResult<Prisma.$CoverImagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CoverImages.
     * @param {CoverImageCreateManyArgs} args - Arguments to create many CoverImages.
     * @example
     * // Create many CoverImages
     * const coverImage = await prisma.coverImage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CoverImageCreateManyArgs>(args?: SelectSubset<T, CoverImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CoverImage.
     * @param {CoverImageDeleteArgs} args - Arguments to delete one CoverImage.
     * @example
     * // Delete one CoverImage
     * const CoverImage = await prisma.coverImage.delete({
     *   where: {
     *     // ... filter to delete one CoverImage
     *   }
     * })
     * 
     */
    delete<T extends CoverImageDeleteArgs>(args: SelectSubset<T, CoverImageDeleteArgs<ExtArgs>>): Prisma__CoverImageClient<$Result.GetResult<Prisma.$CoverImagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CoverImage.
     * @param {CoverImageUpdateArgs} args - Arguments to update one CoverImage.
     * @example
     * // Update one CoverImage
     * const coverImage = await prisma.coverImage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CoverImageUpdateArgs>(args: SelectSubset<T, CoverImageUpdateArgs<ExtArgs>>): Prisma__CoverImageClient<$Result.GetResult<Prisma.$CoverImagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CoverImages.
     * @param {CoverImageDeleteManyArgs} args - Arguments to filter CoverImages to delete.
     * @example
     * // Delete a few CoverImages
     * const { count } = await prisma.coverImage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CoverImageDeleteManyArgs>(args?: SelectSubset<T, CoverImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CoverImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoverImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CoverImages
     * const coverImage = await prisma.coverImage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CoverImageUpdateManyArgs>(args: SelectSubset<T, CoverImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CoverImage.
     * @param {CoverImageUpsertArgs} args - Arguments to update or create a CoverImage.
     * @example
     * // Update or create a CoverImage
     * const coverImage = await prisma.coverImage.upsert({
     *   create: {
     *     // ... data to create a CoverImage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CoverImage we want to update
     *   }
     * })
     */
    upsert<T extends CoverImageUpsertArgs>(args: SelectSubset<T, CoverImageUpsertArgs<ExtArgs>>): Prisma__CoverImageClient<$Result.GetResult<Prisma.$CoverImagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CoverImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoverImageCountArgs} args - Arguments to filter CoverImages to count.
     * @example
     * // Count the number of CoverImages
     * const count = await prisma.coverImage.count({
     *   where: {
     *     // ... the filter for the CoverImages we want to count
     *   }
     * })
    **/
    count<T extends CoverImageCountArgs>(
      args?: Subset<T, CoverImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CoverImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CoverImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoverImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CoverImageAggregateArgs>(args: Subset<T, CoverImageAggregateArgs>): Prisma.PrismaPromise<GetCoverImageAggregateType<T>>

    /**
     * Group by CoverImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoverImageGroupByArgs} args - Group by arguments.
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
      T extends CoverImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CoverImageGroupByArgs['orderBy'] }
        : { orderBy?: CoverImageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CoverImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCoverImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CoverImage model
   */
  readonly fields: CoverImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CoverImage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CoverImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectsDefaultArgs<ExtArgs>>): Prisma__ProjectsClient<$Result.GetResult<Prisma.$ProjectsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the CoverImage model
   */
  interface CoverImageFieldRefs {
    readonly id: FieldRef<"CoverImage", 'Int'>
    readonly projectId: FieldRef<"CoverImage", 'Int'>
    readonly image_light: FieldRef<"CoverImage", 'String'>
    readonly image_dark: FieldRef<"CoverImage", 'String'>
    readonly imageLightPublicId: FieldRef<"CoverImage", 'String'>
    readonly imageDarkPublicId: FieldRef<"CoverImage", 'String'>
    readonly image_alt: FieldRef<"CoverImage", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * CoverImage findUnique
   */
  export type CoverImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoverImage
     */
    select?: CoverImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoverImage
     */
    omit?: CoverImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoverImageInclude<ExtArgs> | null
    /**
     * Filter, which CoverImage to fetch.
     */
    where: CoverImageWhereUniqueInput
  }

  /**
   * CoverImage findUniqueOrThrow
   */
  export type CoverImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoverImage
     */
    select?: CoverImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoverImage
     */
    omit?: CoverImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoverImageInclude<ExtArgs> | null
    /**
     * Filter, which CoverImage to fetch.
     */
    where: CoverImageWhereUniqueInput
  }

  /**
   * CoverImage findFirst
   */
  export type CoverImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoverImage
     */
    select?: CoverImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoverImage
     */
    omit?: CoverImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoverImageInclude<ExtArgs> | null
    /**
     * Filter, which CoverImage to fetch.
     */
    where?: CoverImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CoverImages to fetch.
     */
    orderBy?: CoverImageOrderByWithRelationInput | CoverImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CoverImages.
     */
    cursor?: CoverImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CoverImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CoverImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CoverImages.
     */
    distinct?: CoverImageScalarFieldEnum | CoverImageScalarFieldEnum[]
  }

  /**
   * CoverImage findFirstOrThrow
   */
  export type CoverImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoverImage
     */
    select?: CoverImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoverImage
     */
    omit?: CoverImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoverImageInclude<ExtArgs> | null
    /**
     * Filter, which CoverImage to fetch.
     */
    where?: CoverImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CoverImages to fetch.
     */
    orderBy?: CoverImageOrderByWithRelationInput | CoverImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CoverImages.
     */
    cursor?: CoverImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CoverImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CoverImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CoverImages.
     */
    distinct?: CoverImageScalarFieldEnum | CoverImageScalarFieldEnum[]
  }

  /**
   * CoverImage findMany
   */
  export type CoverImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoverImage
     */
    select?: CoverImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoverImage
     */
    omit?: CoverImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoverImageInclude<ExtArgs> | null
    /**
     * Filter, which CoverImages to fetch.
     */
    where?: CoverImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CoverImages to fetch.
     */
    orderBy?: CoverImageOrderByWithRelationInput | CoverImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CoverImages.
     */
    cursor?: CoverImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CoverImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CoverImages.
     */
    skip?: number
    distinct?: CoverImageScalarFieldEnum | CoverImageScalarFieldEnum[]
  }

  /**
   * CoverImage create
   */
  export type CoverImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoverImage
     */
    select?: CoverImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoverImage
     */
    omit?: CoverImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoverImageInclude<ExtArgs> | null
    /**
     * The data needed to create a CoverImage.
     */
    data: XOR<CoverImageCreateInput, CoverImageUncheckedCreateInput>
  }

  /**
   * CoverImage createMany
   */
  export type CoverImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CoverImages.
     */
    data: CoverImageCreateManyInput | CoverImageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CoverImage update
   */
  export type CoverImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoverImage
     */
    select?: CoverImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoverImage
     */
    omit?: CoverImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoverImageInclude<ExtArgs> | null
    /**
     * The data needed to update a CoverImage.
     */
    data: XOR<CoverImageUpdateInput, CoverImageUncheckedUpdateInput>
    /**
     * Choose, which CoverImage to update.
     */
    where: CoverImageWhereUniqueInput
  }

  /**
   * CoverImage updateMany
   */
  export type CoverImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CoverImages.
     */
    data: XOR<CoverImageUpdateManyMutationInput, CoverImageUncheckedUpdateManyInput>
    /**
     * Filter which CoverImages to update
     */
    where?: CoverImageWhereInput
    /**
     * Limit how many CoverImages to update.
     */
    limit?: number
  }

  /**
   * CoverImage upsert
   */
  export type CoverImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoverImage
     */
    select?: CoverImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoverImage
     */
    omit?: CoverImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoverImageInclude<ExtArgs> | null
    /**
     * The filter to search for the CoverImage to update in case it exists.
     */
    where: CoverImageWhereUniqueInput
    /**
     * In case the CoverImage found by the `where` argument doesn't exist, create a new CoverImage with this data.
     */
    create: XOR<CoverImageCreateInput, CoverImageUncheckedCreateInput>
    /**
     * In case the CoverImage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CoverImageUpdateInput, CoverImageUncheckedUpdateInput>
  }

  /**
   * CoverImage delete
   */
  export type CoverImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoverImage
     */
    select?: CoverImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoverImage
     */
    omit?: CoverImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoverImageInclude<ExtArgs> | null
    /**
     * Filter which CoverImage to delete.
     */
    where: CoverImageWhereUniqueInput
  }

  /**
   * CoverImage deleteMany
   */
  export type CoverImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CoverImages to delete
     */
    where?: CoverImageWhereInput
    /**
     * Limit how many CoverImages to delete.
     */
    limit?: number
  }

  /**
   * CoverImage without action
   */
  export type CoverImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoverImage
     */
    select?: CoverImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoverImage
     */
    omit?: CoverImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoverImageInclude<ExtArgs> | null
  }


  /**
   * Model ProjectGallery
   */

  export type AggregateProjectGallery = {
    _count: ProjectGalleryCountAggregateOutputType | null
    _avg: ProjectGalleryAvgAggregateOutputType | null
    _sum: ProjectGallerySumAggregateOutputType | null
    _min: ProjectGalleryMinAggregateOutputType | null
    _max: ProjectGalleryMaxAggregateOutputType | null
  }

  export type ProjectGalleryAvgAggregateOutputType = {
    id: number | null
    projectId: number | null
  }

  export type ProjectGallerySumAggregateOutputType = {
    id: number | null
    projectId: number | null
  }

  export type ProjectGalleryMinAggregateOutputType = {
    id: number | null
    projectId: number | null
    image: string | null
    imagePublicId: string | null
  }

  export type ProjectGalleryMaxAggregateOutputType = {
    id: number | null
    projectId: number | null
    image: string | null
    imagePublicId: string | null
  }

  export type ProjectGalleryCountAggregateOutputType = {
    id: number
    projectId: number
    image: number
    imagePublicId: number
    image_alt: number
    _all: number
  }


  export type ProjectGalleryAvgAggregateInputType = {
    id?: true
    projectId?: true
  }

  export type ProjectGallerySumAggregateInputType = {
    id?: true
    projectId?: true
  }

  export type ProjectGalleryMinAggregateInputType = {
    id?: true
    projectId?: true
    image?: true
    imagePublicId?: true
  }

  export type ProjectGalleryMaxAggregateInputType = {
    id?: true
    projectId?: true
    image?: true
    imagePublicId?: true
  }

  export type ProjectGalleryCountAggregateInputType = {
    id?: true
    projectId?: true
    image?: true
    imagePublicId?: true
    image_alt?: true
    _all?: true
  }

  export type ProjectGalleryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectGallery to aggregate.
     */
    where?: ProjectGalleryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectGalleries to fetch.
     */
    orderBy?: ProjectGalleryOrderByWithRelationInput | ProjectGalleryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectGalleryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectGalleries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectGalleries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProjectGalleries
    **/
    _count?: true | ProjectGalleryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProjectGalleryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProjectGallerySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectGalleryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectGalleryMaxAggregateInputType
  }

  export type GetProjectGalleryAggregateType<T extends ProjectGalleryAggregateArgs> = {
        [P in keyof T & keyof AggregateProjectGallery]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProjectGallery[P]>
      : GetScalarType<T[P], AggregateProjectGallery[P]>
  }




  export type ProjectGalleryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectGalleryWhereInput
    orderBy?: ProjectGalleryOrderByWithAggregationInput | ProjectGalleryOrderByWithAggregationInput[]
    by: ProjectGalleryScalarFieldEnum[] | ProjectGalleryScalarFieldEnum
    having?: ProjectGalleryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectGalleryCountAggregateInputType | true
    _avg?: ProjectGalleryAvgAggregateInputType
    _sum?: ProjectGallerySumAggregateInputType
    _min?: ProjectGalleryMinAggregateInputType
    _max?: ProjectGalleryMaxAggregateInputType
  }

  export type ProjectGalleryGroupByOutputType = {
    id: number
    projectId: number
    image: string
    imagePublicId: string | null
    image_alt: JsonValue
    _count: ProjectGalleryCountAggregateOutputType | null
    _avg: ProjectGalleryAvgAggregateOutputType | null
    _sum: ProjectGallerySumAggregateOutputType | null
    _min: ProjectGalleryMinAggregateOutputType | null
    _max: ProjectGalleryMaxAggregateOutputType | null
  }

  type GetProjectGalleryGroupByPayload<T extends ProjectGalleryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectGalleryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectGalleryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectGalleryGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectGalleryGroupByOutputType[P]>
        }
      >
    >


  export type ProjectGallerySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    image?: boolean
    imagePublicId?: boolean
    image_alt?: boolean
    project?: boolean | ProjectsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectGallery"]>



  export type ProjectGallerySelectScalar = {
    id?: boolean
    projectId?: boolean
    image?: boolean
    imagePublicId?: boolean
    image_alt?: boolean
  }

  export type ProjectGalleryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "projectId" | "image" | "imagePublicId" | "image_alt", ExtArgs["result"]["projectGallery"]>
  export type ProjectGalleryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectsDefaultArgs<ExtArgs>
  }

  export type $ProjectGalleryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProjectGallery"
    objects: {
      project: Prisma.$ProjectsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      projectId: number
      image: string
      imagePublicId: string | null
      image_alt: Prisma.JsonValue
    }, ExtArgs["result"]["projectGallery"]>
    composites: {}
  }

  type ProjectGalleryGetPayload<S extends boolean | null | undefined | ProjectGalleryDefaultArgs> = $Result.GetResult<Prisma.$ProjectGalleryPayload, S>

  type ProjectGalleryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectGalleryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectGalleryCountAggregateInputType | true
    }

  export interface ProjectGalleryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProjectGallery'], meta: { name: 'ProjectGallery' } }
    /**
     * Find zero or one ProjectGallery that matches the filter.
     * @param {ProjectGalleryFindUniqueArgs} args - Arguments to find a ProjectGallery
     * @example
     * // Get one ProjectGallery
     * const projectGallery = await prisma.projectGallery.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectGalleryFindUniqueArgs>(args: SelectSubset<T, ProjectGalleryFindUniqueArgs<ExtArgs>>): Prisma__ProjectGalleryClient<$Result.GetResult<Prisma.$ProjectGalleryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProjectGallery that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectGalleryFindUniqueOrThrowArgs} args - Arguments to find a ProjectGallery
     * @example
     * // Get one ProjectGallery
     * const projectGallery = await prisma.projectGallery.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectGalleryFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectGalleryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectGalleryClient<$Result.GetResult<Prisma.$ProjectGalleryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectGallery that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectGalleryFindFirstArgs} args - Arguments to find a ProjectGallery
     * @example
     * // Get one ProjectGallery
     * const projectGallery = await prisma.projectGallery.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectGalleryFindFirstArgs>(args?: SelectSubset<T, ProjectGalleryFindFirstArgs<ExtArgs>>): Prisma__ProjectGalleryClient<$Result.GetResult<Prisma.$ProjectGalleryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectGallery that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectGalleryFindFirstOrThrowArgs} args - Arguments to find a ProjectGallery
     * @example
     * // Get one ProjectGallery
     * const projectGallery = await prisma.projectGallery.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectGalleryFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectGalleryFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectGalleryClient<$Result.GetResult<Prisma.$ProjectGalleryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProjectGalleries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectGalleryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProjectGalleries
     * const projectGalleries = await prisma.projectGallery.findMany()
     * 
     * // Get first 10 ProjectGalleries
     * const projectGalleries = await prisma.projectGallery.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectGalleryWithIdOnly = await prisma.projectGallery.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectGalleryFindManyArgs>(args?: SelectSubset<T, ProjectGalleryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectGalleryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProjectGallery.
     * @param {ProjectGalleryCreateArgs} args - Arguments to create a ProjectGallery.
     * @example
     * // Create one ProjectGallery
     * const ProjectGallery = await prisma.projectGallery.create({
     *   data: {
     *     // ... data to create a ProjectGallery
     *   }
     * })
     * 
     */
    create<T extends ProjectGalleryCreateArgs>(args: SelectSubset<T, ProjectGalleryCreateArgs<ExtArgs>>): Prisma__ProjectGalleryClient<$Result.GetResult<Prisma.$ProjectGalleryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProjectGalleries.
     * @param {ProjectGalleryCreateManyArgs} args - Arguments to create many ProjectGalleries.
     * @example
     * // Create many ProjectGalleries
     * const projectGallery = await prisma.projectGallery.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectGalleryCreateManyArgs>(args?: SelectSubset<T, ProjectGalleryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ProjectGallery.
     * @param {ProjectGalleryDeleteArgs} args - Arguments to delete one ProjectGallery.
     * @example
     * // Delete one ProjectGallery
     * const ProjectGallery = await prisma.projectGallery.delete({
     *   where: {
     *     // ... filter to delete one ProjectGallery
     *   }
     * })
     * 
     */
    delete<T extends ProjectGalleryDeleteArgs>(args: SelectSubset<T, ProjectGalleryDeleteArgs<ExtArgs>>): Prisma__ProjectGalleryClient<$Result.GetResult<Prisma.$ProjectGalleryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProjectGallery.
     * @param {ProjectGalleryUpdateArgs} args - Arguments to update one ProjectGallery.
     * @example
     * // Update one ProjectGallery
     * const projectGallery = await prisma.projectGallery.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectGalleryUpdateArgs>(args: SelectSubset<T, ProjectGalleryUpdateArgs<ExtArgs>>): Prisma__ProjectGalleryClient<$Result.GetResult<Prisma.$ProjectGalleryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProjectGalleries.
     * @param {ProjectGalleryDeleteManyArgs} args - Arguments to filter ProjectGalleries to delete.
     * @example
     * // Delete a few ProjectGalleries
     * const { count } = await prisma.projectGallery.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectGalleryDeleteManyArgs>(args?: SelectSubset<T, ProjectGalleryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectGalleries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectGalleryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProjectGalleries
     * const projectGallery = await prisma.projectGallery.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectGalleryUpdateManyArgs>(args: SelectSubset<T, ProjectGalleryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ProjectGallery.
     * @param {ProjectGalleryUpsertArgs} args - Arguments to update or create a ProjectGallery.
     * @example
     * // Update or create a ProjectGallery
     * const projectGallery = await prisma.projectGallery.upsert({
     *   create: {
     *     // ... data to create a ProjectGallery
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProjectGallery we want to update
     *   }
     * })
     */
    upsert<T extends ProjectGalleryUpsertArgs>(args: SelectSubset<T, ProjectGalleryUpsertArgs<ExtArgs>>): Prisma__ProjectGalleryClient<$Result.GetResult<Prisma.$ProjectGalleryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProjectGalleries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectGalleryCountArgs} args - Arguments to filter ProjectGalleries to count.
     * @example
     * // Count the number of ProjectGalleries
     * const count = await prisma.projectGallery.count({
     *   where: {
     *     // ... the filter for the ProjectGalleries we want to count
     *   }
     * })
    **/
    count<T extends ProjectGalleryCountArgs>(
      args?: Subset<T, ProjectGalleryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectGalleryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProjectGallery.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectGalleryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProjectGalleryAggregateArgs>(args: Subset<T, ProjectGalleryAggregateArgs>): Prisma.PrismaPromise<GetProjectGalleryAggregateType<T>>

    /**
     * Group by ProjectGallery.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectGalleryGroupByArgs} args - Group by arguments.
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
      T extends ProjectGalleryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectGalleryGroupByArgs['orderBy'] }
        : { orderBy?: ProjectGalleryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProjectGalleryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectGalleryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProjectGallery model
   */
  readonly fields: ProjectGalleryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProjectGallery.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectGalleryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectsDefaultArgs<ExtArgs>>): Prisma__ProjectsClient<$Result.GetResult<Prisma.$ProjectsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ProjectGallery model
   */
  interface ProjectGalleryFieldRefs {
    readonly id: FieldRef<"ProjectGallery", 'Int'>
    readonly projectId: FieldRef<"ProjectGallery", 'Int'>
    readonly image: FieldRef<"ProjectGallery", 'String'>
    readonly imagePublicId: FieldRef<"ProjectGallery", 'String'>
    readonly image_alt: FieldRef<"ProjectGallery", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * ProjectGallery findUnique
   */
  export type ProjectGalleryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectGallery
     */
    select?: ProjectGallerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectGallery
     */
    omit?: ProjectGalleryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectGalleryInclude<ExtArgs> | null
    /**
     * Filter, which ProjectGallery to fetch.
     */
    where: ProjectGalleryWhereUniqueInput
  }

  /**
   * ProjectGallery findUniqueOrThrow
   */
  export type ProjectGalleryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectGallery
     */
    select?: ProjectGallerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectGallery
     */
    omit?: ProjectGalleryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectGalleryInclude<ExtArgs> | null
    /**
     * Filter, which ProjectGallery to fetch.
     */
    where: ProjectGalleryWhereUniqueInput
  }

  /**
   * ProjectGallery findFirst
   */
  export type ProjectGalleryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectGallery
     */
    select?: ProjectGallerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectGallery
     */
    omit?: ProjectGalleryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectGalleryInclude<ExtArgs> | null
    /**
     * Filter, which ProjectGallery to fetch.
     */
    where?: ProjectGalleryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectGalleries to fetch.
     */
    orderBy?: ProjectGalleryOrderByWithRelationInput | ProjectGalleryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectGalleries.
     */
    cursor?: ProjectGalleryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectGalleries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectGalleries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectGalleries.
     */
    distinct?: ProjectGalleryScalarFieldEnum | ProjectGalleryScalarFieldEnum[]
  }

  /**
   * ProjectGallery findFirstOrThrow
   */
  export type ProjectGalleryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectGallery
     */
    select?: ProjectGallerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectGallery
     */
    omit?: ProjectGalleryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectGalleryInclude<ExtArgs> | null
    /**
     * Filter, which ProjectGallery to fetch.
     */
    where?: ProjectGalleryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectGalleries to fetch.
     */
    orderBy?: ProjectGalleryOrderByWithRelationInput | ProjectGalleryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectGalleries.
     */
    cursor?: ProjectGalleryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectGalleries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectGalleries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectGalleries.
     */
    distinct?: ProjectGalleryScalarFieldEnum | ProjectGalleryScalarFieldEnum[]
  }

  /**
   * ProjectGallery findMany
   */
  export type ProjectGalleryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectGallery
     */
    select?: ProjectGallerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectGallery
     */
    omit?: ProjectGalleryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectGalleryInclude<ExtArgs> | null
    /**
     * Filter, which ProjectGalleries to fetch.
     */
    where?: ProjectGalleryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectGalleries to fetch.
     */
    orderBy?: ProjectGalleryOrderByWithRelationInput | ProjectGalleryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProjectGalleries.
     */
    cursor?: ProjectGalleryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectGalleries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectGalleries.
     */
    skip?: number
    distinct?: ProjectGalleryScalarFieldEnum | ProjectGalleryScalarFieldEnum[]
  }

  /**
   * ProjectGallery create
   */
  export type ProjectGalleryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectGallery
     */
    select?: ProjectGallerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectGallery
     */
    omit?: ProjectGalleryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectGalleryInclude<ExtArgs> | null
    /**
     * The data needed to create a ProjectGallery.
     */
    data: XOR<ProjectGalleryCreateInput, ProjectGalleryUncheckedCreateInput>
  }

  /**
   * ProjectGallery createMany
   */
  export type ProjectGalleryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProjectGalleries.
     */
    data: ProjectGalleryCreateManyInput | ProjectGalleryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProjectGallery update
   */
  export type ProjectGalleryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectGallery
     */
    select?: ProjectGallerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectGallery
     */
    omit?: ProjectGalleryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectGalleryInclude<ExtArgs> | null
    /**
     * The data needed to update a ProjectGallery.
     */
    data: XOR<ProjectGalleryUpdateInput, ProjectGalleryUncheckedUpdateInput>
    /**
     * Choose, which ProjectGallery to update.
     */
    where: ProjectGalleryWhereUniqueInput
  }

  /**
   * ProjectGallery updateMany
   */
  export type ProjectGalleryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProjectGalleries.
     */
    data: XOR<ProjectGalleryUpdateManyMutationInput, ProjectGalleryUncheckedUpdateManyInput>
    /**
     * Filter which ProjectGalleries to update
     */
    where?: ProjectGalleryWhereInput
    /**
     * Limit how many ProjectGalleries to update.
     */
    limit?: number
  }

  /**
   * ProjectGallery upsert
   */
  export type ProjectGalleryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectGallery
     */
    select?: ProjectGallerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectGallery
     */
    omit?: ProjectGalleryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectGalleryInclude<ExtArgs> | null
    /**
     * The filter to search for the ProjectGallery to update in case it exists.
     */
    where: ProjectGalleryWhereUniqueInput
    /**
     * In case the ProjectGallery found by the `where` argument doesn't exist, create a new ProjectGallery with this data.
     */
    create: XOR<ProjectGalleryCreateInput, ProjectGalleryUncheckedCreateInput>
    /**
     * In case the ProjectGallery was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectGalleryUpdateInput, ProjectGalleryUncheckedUpdateInput>
  }

  /**
   * ProjectGallery delete
   */
  export type ProjectGalleryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectGallery
     */
    select?: ProjectGallerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectGallery
     */
    omit?: ProjectGalleryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectGalleryInclude<ExtArgs> | null
    /**
     * Filter which ProjectGallery to delete.
     */
    where: ProjectGalleryWhereUniqueInput
  }

  /**
   * ProjectGallery deleteMany
   */
  export type ProjectGalleryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectGalleries to delete
     */
    where?: ProjectGalleryWhereInput
    /**
     * Limit how many ProjectGalleries to delete.
     */
    limit?: number
  }

  /**
   * ProjectGallery without action
   */
  export type ProjectGalleryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectGallery
     */
    select?: ProjectGallerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectGallery
     */
    omit?: ProjectGalleryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectGalleryInclude<ExtArgs> | null
  }


  /**
   * Model Team
   */

  export type AggregateTeam = {
    _count: TeamCountAggregateOutputType | null
    _avg: TeamAvgAggregateOutputType | null
    _sum: TeamSumAggregateOutputType | null
    _min: TeamMinAggregateOutputType | null
    _max: TeamMaxAggregateOutputType | null
  }

  export type TeamAvgAggregateOutputType = {
    id: number | null
  }

  export type TeamSumAggregateOutputType = {
    id: number | null
  }

  export type TeamMinAggregateOutputType = {
    id: number | null
    name: string | null
    role: string | null
    photo: string | null
    photoPublicId: string | null
  }

  export type TeamMaxAggregateOutputType = {
    id: number | null
    name: string | null
    role: string | null
    photo: string | null
    photoPublicId: string | null
  }

  export type TeamCountAggregateOutputType = {
    id: number
    name: number
    role: number
    photo: number
    photoPublicId: number
    _all: number
  }


  export type TeamAvgAggregateInputType = {
    id?: true
  }

  export type TeamSumAggregateInputType = {
    id?: true
  }

  export type TeamMinAggregateInputType = {
    id?: true
    name?: true
    role?: true
    photo?: true
    photoPublicId?: true
  }

  export type TeamMaxAggregateInputType = {
    id?: true
    name?: true
    role?: true
    photo?: true
    photoPublicId?: true
  }

  export type TeamCountAggregateInputType = {
    id?: true
    name?: true
    role?: true
    photo?: true
    photoPublicId?: true
    _all?: true
  }

  export type TeamAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Team to aggregate.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Teams
    **/
    _count?: true | TeamCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TeamAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TeamSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeamMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeamMaxAggregateInputType
  }

  export type GetTeamAggregateType<T extends TeamAggregateArgs> = {
        [P in keyof T & keyof AggregateTeam]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeam[P]>
      : GetScalarType<T[P], AggregateTeam[P]>
  }




  export type TeamGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamWhereInput
    orderBy?: TeamOrderByWithAggregationInput | TeamOrderByWithAggregationInput[]
    by: TeamScalarFieldEnum[] | TeamScalarFieldEnum
    having?: TeamScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeamCountAggregateInputType | true
    _avg?: TeamAvgAggregateInputType
    _sum?: TeamSumAggregateInputType
    _min?: TeamMinAggregateInputType
    _max?: TeamMaxAggregateInputType
  }

  export type TeamGroupByOutputType = {
    id: number
    name: string
    role: string
    photo: string
    photoPublicId: string
    _count: TeamCountAggregateOutputType | null
    _avg: TeamAvgAggregateOutputType | null
    _sum: TeamSumAggregateOutputType | null
    _min: TeamMinAggregateOutputType | null
    _max: TeamMaxAggregateOutputType | null
  }

  type GetTeamGroupByPayload<T extends TeamGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeamGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeamGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeamGroupByOutputType[P]>
            : GetScalarType<T[P], TeamGroupByOutputType[P]>
        }
      >
    >


  export type TeamSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    role?: boolean
    photo?: boolean
    photoPublicId?: boolean
  }, ExtArgs["result"]["team"]>



  export type TeamSelectScalar = {
    id?: boolean
    name?: boolean
    role?: boolean
    photo?: boolean
    photoPublicId?: boolean
  }

  export type TeamOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "role" | "photo" | "photoPublicId", ExtArgs["result"]["team"]>

  export type $TeamPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Team"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      role: string
      photo: string
      photoPublicId: string
    }, ExtArgs["result"]["team"]>
    composites: {}
  }

  type TeamGetPayload<S extends boolean | null | undefined | TeamDefaultArgs> = $Result.GetResult<Prisma.$TeamPayload, S>

  type TeamCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TeamFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TeamCountAggregateInputType | true
    }

  export interface TeamDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Team'], meta: { name: 'Team' } }
    /**
     * Find zero or one Team that matches the filter.
     * @param {TeamFindUniqueArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TeamFindUniqueArgs>(args: SelectSubset<T, TeamFindUniqueArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Team that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TeamFindUniqueOrThrowArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TeamFindUniqueOrThrowArgs>(args: SelectSubset<T, TeamFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Team that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamFindFirstArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TeamFindFirstArgs>(args?: SelectSubset<T, TeamFindFirstArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Team that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamFindFirstOrThrowArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TeamFindFirstOrThrowArgs>(args?: SelectSubset<T, TeamFindFirstOrThrowArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Teams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Teams
     * const teams = await prisma.team.findMany()
     * 
     * // Get first 10 Teams
     * const teams = await prisma.team.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const teamWithIdOnly = await prisma.team.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TeamFindManyArgs>(args?: SelectSubset<T, TeamFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Team.
     * @param {TeamCreateArgs} args - Arguments to create a Team.
     * @example
     * // Create one Team
     * const Team = await prisma.team.create({
     *   data: {
     *     // ... data to create a Team
     *   }
     * })
     * 
     */
    create<T extends TeamCreateArgs>(args: SelectSubset<T, TeamCreateArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Teams.
     * @param {TeamCreateManyArgs} args - Arguments to create many Teams.
     * @example
     * // Create many Teams
     * const team = await prisma.team.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TeamCreateManyArgs>(args?: SelectSubset<T, TeamCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Team.
     * @param {TeamDeleteArgs} args - Arguments to delete one Team.
     * @example
     * // Delete one Team
     * const Team = await prisma.team.delete({
     *   where: {
     *     // ... filter to delete one Team
     *   }
     * })
     * 
     */
    delete<T extends TeamDeleteArgs>(args: SelectSubset<T, TeamDeleteArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Team.
     * @param {TeamUpdateArgs} args - Arguments to update one Team.
     * @example
     * // Update one Team
     * const team = await prisma.team.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TeamUpdateArgs>(args: SelectSubset<T, TeamUpdateArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Teams.
     * @param {TeamDeleteManyArgs} args - Arguments to filter Teams to delete.
     * @example
     * // Delete a few Teams
     * const { count } = await prisma.team.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TeamDeleteManyArgs>(args?: SelectSubset<T, TeamDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Teams
     * const team = await prisma.team.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TeamUpdateManyArgs>(args: SelectSubset<T, TeamUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Team.
     * @param {TeamUpsertArgs} args - Arguments to update or create a Team.
     * @example
     * // Update or create a Team
     * const team = await prisma.team.upsert({
     *   create: {
     *     // ... data to create a Team
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Team we want to update
     *   }
     * })
     */
    upsert<T extends TeamUpsertArgs>(args: SelectSubset<T, TeamUpsertArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamCountArgs} args - Arguments to filter Teams to count.
     * @example
     * // Count the number of Teams
     * const count = await prisma.team.count({
     *   where: {
     *     // ... the filter for the Teams we want to count
     *   }
     * })
    **/
    count<T extends TeamCountArgs>(
      args?: Subset<T, TeamCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeamCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Team.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TeamAggregateArgs>(args: Subset<T, TeamAggregateArgs>): Prisma.PrismaPromise<GetTeamAggregateType<T>>

    /**
     * Group by Team.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamGroupByArgs} args - Group by arguments.
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
      T extends TeamGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TeamGroupByArgs['orderBy'] }
        : { orderBy?: TeamGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TeamGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeamGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Team model
   */
  readonly fields: TeamFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Team.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TeamClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Team model
   */
  interface TeamFieldRefs {
    readonly id: FieldRef<"Team", 'Int'>
    readonly name: FieldRef<"Team", 'String'>
    readonly role: FieldRef<"Team", 'String'>
    readonly photo: FieldRef<"Team", 'String'>
    readonly photoPublicId: FieldRef<"Team", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Team findUnique
   */
  export type TeamFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where: TeamWhereUniqueInput
  }

  /**
   * Team findUniqueOrThrow
   */
  export type TeamFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where: TeamWhereUniqueInput
  }

  /**
   * Team findFirst
   */
  export type TeamFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teams.
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teams.
     */
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }

  /**
   * Team findFirstOrThrow
   */
  export type TeamFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teams.
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teams.
     */
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }

  /**
   * Team findMany
   */
  export type TeamFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Filter, which Teams to fetch.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Teams.
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }

  /**
   * Team create
   */
  export type TeamCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * The data needed to create a Team.
     */
    data: XOR<TeamCreateInput, TeamUncheckedCreateInput>
  }

  /**
   * Team createMany
   */
  export type TeamCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Teams.
     */
    data: TeamCreateManyInput | TeamCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Team update
   */
  export type TeamUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * The data needed to update a Team.
     */
    data: XOR<TeamUpdateInput, TeamUncheckedUpdateInput>
    /**
     * Choose, which Team to update.
     */
    where: TeamWhereUniqueInput
  }

  /**
   * Team updateMany
   */
  export type TeamUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Teams.
     */
    data: XOR<TeamUpdateManyMutationInput, TeamUncheckedUpdateManyInput>
    /**
     * Filter which Teams to update
     */
    where?: TeamWhereInput
    /**
     * Limit how many Teams to update.
     */
    limit?: number
  }

  /**
   * Team upsert
   */
  export type TeamUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * The filter to search for the Team to update in case it exists.
     */
    where: TeamWhereUniqueInput
    /**
     * In case the Team found by the `where` argument doesn't exist, create a new Team with this data.
     */
    create: XOR<TeamCreateInput, TeamUncheckedCreateInput>
    /**
     * In case the Team was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TeamUpdateInput, TeamUncheckedUpdateInput>
  }

  /**
   * Team delete
   */
  export type TeamDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Filter which Team to delete.
     */
    where: TeamWhereUniqueInput
  }

  /**
   * Team deleteMany
   */
  export type TeamDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Teams to delete
     */
    where?: TeamWhereInput
    /**
     * Limit how many Teams to delete.
     */
    limit?: number
  }

  /**
   * Team without action
   */
  export type TeamDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
  }


  /**
   * Model Testimonials
   */

  export type AggregateTestimonials = {
    _count: TestimonialsCountAggregateOutputType | null
    _avg: TestimonialsAvgAggregateOutputType | null
    _sum: TestimonialsSumAggregateOutputType | null
    _min: TestimonialsMinAggregateOutputType | null
    _max: TestimonialsMaxAggregateOutputType | null
  }

  export type TestimonialsAvgAggregateOutputType = {
    id: number | null
  }

  export type TestimonialsSumAggregateOutputType = {
    id: number | null
  }

  export type TestimonialsMinAggregateOutputType = {
    id: number | null
    name: string | null
    photoUrl: string | null
    videoUrl: string | null
    photoPublicId: string | null
    videoPublicId: string | null
  }

  export type TestimonialsMaxAggregateOutputType = {
    id: number | null
    name: string | null
    photoUrl: string | null
    videoUrl: string | null
    photoPublicId: string | null
    videoPublicId: string | null
  }

  export type TestimonialsCountAggregateOutputType = {
    id: number
    name: number
    localizedContent: number
    photoUrl: number
    videoUrl: number
    altImage: number
    photoPublicId: number
    videoPublicId: number
    _all: number
  }


  export type TestimonialsAvgAggregateInputType = {
    id?: true
  }

  export type TestimonialsSumAggregateInputType = {
    id?: true
  }

  export type TestimonialsMinAggregateInputType = {
    id?: true
    name?: true
    photoUrl?: true
    videoUrl?: true
    photoPublicId?: true
    videoPublicId?: true
  }

  export type TestimonialsMaxAggregateInputType = {
    id?: true
    name?: true
    photoUrl?: true
    videoUrl?: true
    photoPublicId?: true
    videoPublicId?: true
  }

  export type TestimonialsCountAggregateInputType = {
    id?: true
    name?: true
    localizedContent?: true
    photoUrl?: true
    videoUrl?: true
    altImage?: true
    photoPublicId?: true
    videoPublicId?: true
    _all?: true
  }

  export type TestimonialsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Testimonials to aggregate.
     */
    where?: TestimonialsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Testimonials to fetch.
     */
    orderBy?: TestimonialsOrderByWithRelationInput | TestimonialsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TestimonialsWhereUniqueInput
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
    _count?: true | TestimonialsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TestimonialsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TestimonialsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TestimonialsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TestimonialsMaxAggregateInputType
  }

  export type GetTestimonialsAggregateType<T extends TestimonialsAggregateArgs> = {
        [P in keyof T & keyof AggregateTestimonials]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTestimonials[P]>
      : GetScalarType<T[P], AggregateTestimonials[P]>
  }




  export type TestimonialsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TestimonialsWhereInput
    orderBy?: TestimonialsOrderByWithAggregationInput | TestimonialsOrderByWithAggregationInput[]
    by: TestimonialsScalarFieldEnum[] | TestimonialsScalarFieldEnum
    having?: TestimonialsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TestimonialsCountAggregateInputType | true
    _avg?: TestimonialsAvgAggregateInputType
    _sum?: TestimonialsSumAggregateInputType
    _min?: TestimonialsMinAggregateInputType
    _max?: TestimonialsMaxAggregateInputType
  }

  export type TestimonialsGroupByOutputType = {
    id: number
    name: string
    localizedContent: JsonValue
    photoUrl: string
    videoUrl: string
    altImage: JsonValue
    photoPublicId: string
    videoPublicId: string
    _count: TestimonialsCountAggregateOutputType | null
    _avg: TestimonialsAvgAggregateOutputType | null
    _sum: TestimonialsSumAggregateOutputType | null
    _min: TestimonialsMinAggregateOutputType | null
    _max: TestimonialsMaxAggregateOutputType | null
  }

  type GetTestimonialsGroupByPayload<T extends TestimonialsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TestimonialsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TestimonialsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TestimonialsGroupByOutputType[P]>
            : GetScalarType<T[P], TestimonialsGroupByOutputType[P]>
        }
      >
    >


  export type TestimonialsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    localizedContent?: boolean
    photoUrl?: boolean
    videoUrl?: boolean
    altImage?: boolean
    photoPublicId?: boolean
    videoPublicId?: boolean
  }, ExtArgs["result"]["testimonials"]>



  export type TestimonialsSelectScalar = {
    id?: boolean
    name?: boolean
    localizedContent?: boolean
    photoUrl?: boolean
    videoUrl?: boolean
    altImage?: boolean
    photoPublicId?: boolean
    videoPublicId?: boolean
  }

  export type TestimonialsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "localizedContent" | "photoUrl" | "videoUrl" | "altImage" | "photoPublicId" | "videoPublicId", ExtArgs["result"]["testimonials"]>

  export type $TestimonialsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Testimonials"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      localizedContent: Prisma.JsonValue
      photoUrl: string
      videoUrl: string
      altImage: Prisma.JsonValue
      photoPublicId: string
      videoPublicId: string
    }, ExtArgs["result"]["testimonials"]>
    composites: {}
  }

  type TestimonialsGetPayload<S extends boolean | null | undefined | TestimonialsDefaultArgs> = $Result.GetResult<Prisma.$TestimonialsPayload, S>

  type TestimonialsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TestimonialsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TestimonialsCountAggregateInputType | true
    }

  export interface TestimonialsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Testimonials'], meta: { name: 'Testimonials' } }
    /**
     * Find zero or one Testimonials that matches the filter.
     * @param {TestimonialsFindUniqueArgs} args - Arguments to find a Testimonials
     * @example
     * // Get one Testimonials
     * const testimonials = await prisma.testimonials.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TestimonialsFindUniqueArgs>(args: SelectSubset<T, TestimonialsFindUniqueArgs<ExtArgs>>): Prisma__TestimonialsClient<$Result.GetResult<Prisma.$TestimonialsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Testimonials that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TestimonialsFindUniqueOrThrowArgs} args - Arguments to find a Testimonials
     * @example
     * // Get one Testimonials
     * const testimonials = await prisma.testimonials.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TestimonialsFindUniqueOrThrowArgs>(args: SelectSubset<T, TestimonialsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TestimonialsClient<$Result.GetResult<Prisma.$TestimonialsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Testimonials that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestimonialsFindFirstArgs} args - Arguments to find a Testimonials
     * @example
     * // Get one Testimonials
     * const testimonials = await prisma.testimonials.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TestimonialsFindFirstArgs>(args?: SelectSubset<T, TestimonialsFindFirstArgs<ExtArgs>>): Prisma__TestimonialsClient<$Result.GetResult<Prisma.$TestimonialsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Testimonials that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestimonialsFindFirstOrThrowArgs} args - Arguments to find a Testimonials
     * @example
     * // Get one Testimonials
     * const testimonials = await prisma.testimonials.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TestimonialsFindFirstOrThrowArgs>(args?: SelectSubset<T, TestimonialsFindFirstOrThrowArgs<ExtArgs>>): Prisma__TestimonialsClient<$Result.GetResult<Prisma.$TestimonialsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Testimonials that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestimonialsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Testimonials
     * const testimonials = await prisma.testimonials.findMany()
     * 
     * // Get first 10 Testimonials
     * const testimonials = await prisma.testimonials.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const testimonialsWithIdOnly = await prisma.testimonials.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TestimonialsFindManyArgs>(args?: SelectSubset<T, TestimonialsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestimonialsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Testimonials.
     * @param {TestimonialsCreateArgs} args - Arguments to create a Testimonials.
     * @example
     * // Create one Testimonials
     * const Testimonials = await prisma.testimonials.create({
     *   data: {
     *     // ... data to create a Testimonials
     *   }
     * })
     * 
     */
    create<T extends TestimonialsCreateArgs>(args: SelectSubset<T, TestimonialsCreateArgs<ExtArgs>>): Prisma__TestimonialsClient<$Result.GetResult<Prisma.$TestimonialsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Testimonials.
     * @param {TestimonialsCreateManyArgs} args - Arguments to create many Testimonials.
     * @example
     * // Create many Testimonials
     * const testimonials = await prisma.testimonials.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TestimonialsCreateManyArgs>(args?: SelectSubset<T, TestimonialsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Testimonials.
     * @param {TestimonialsDeleteArgs} args - Arguments to delete one Testimonials.
     * @example
     * // Delete one Testimonials
     * const Testimonials = await prisma.testimonials.delete({
     *   where: {
     *     // ... filter to delete one Testimonials
     *   }
     * })
     * 
     */
    delete<T extends TestimonialsDeleteArgs>(args: SelectSubset<T, TestimonialsDeleteArgs<ExtArgs>>): Prisma__TestimonialsClient<$Result.GetResult<Prisma.$TestimonialsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Testimonials.
     * @param {TestimonialsUpdateArgs} args - Arguments to update one Testimonials.
     * @example
     * // Update one Testimonials
     * const testimonials = await prisma.testimonials.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TestimonialsUpdateArgs>(args: SelectSubset<T, TestimonialsUpdateArgs<ExtArgs>>): Prisma__TestimonialsClient<$Result.GetResult<Prisma.$TestimonialsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Testimonials.
     * @param {TestimonialsDeleteManyArgs} args - Arguments to filter Testimonials to delete.
     * @example
     * // Delete a few Testimonials
     * const { count } = await prisma.testimonials.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TestimonialsDeleteManyArgs>(args?: SelectSubset<T, TestimonialsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Testimonials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestimonialsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Testimonials
     * const testimonials = await prisma.testimonials.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TestimonialsUpdateManyArgs>(args: SelectSubset<T, TestimonialsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Testimonials.
     * @param {TestimonialsUpsertArgs} args - Arguments to update or create a Testimonials.
     * @example
     * // Update or create a Testimonials
     * const testimonials = await prisma.testimonials.upsert({
     *   create: {
     *     // ... data to create a Testimonials
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Testimonials we want to update
     *   }
     * })
     */
    upsert<T extends TestimonialsUpsertArgs>(args: SelectSubset<T, TestimonialsUpsertArgs<ExtArgs>>): Prisma__TestimonialsClient<$Result.GetResult<Prisma.$TestimonialsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Testimonials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestimonialsCountArgs} args - Arguments to filter Testimonials to count.
     * @example
     * // Count the number of Testimonials
     * const count = await prisma.testimonials.count({
     *   where: {
     *     // ... the filter for the Testimonials we want to count
     *   }
     * })
    **/
    count<T extends TestimonialsCountArgs>(
      args?: Subset<T, TestimonialsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TestimonialsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Testimonials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestimonialsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TestimonialsAggregateArgs>(args: Subset<T, TestimonialsAggregateArgs>): Prisma.PrismaPromise<GetTestimonialsAggregateType<T>>

    /**
     * Group by Testimonials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestimonialsGroupByArgs} args - Group by arguments.
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
      T extends TestimonialsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TestimonialsGroupByArgs['orderBy'] }
        : { orderBy?: TestimonialsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TestimonialsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTestimonialsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Testimonials model
   */
  readonly fields: TestimonialsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Testimonials.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TestimonialsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Testimonials model
   */
  interface TestimonialsFieldRefs {
    readonly id: FieldRef<"Testimonials", 'Int'>
    readonly name: FieldRef<"Testimonials", 'String'>
    readonly localizedContent: FieldRef<"Testimonials", 'Json'>
    readonly photoUrl: FieldRef<"Testimonials", 'String'>
    readonly videoUrl: FieldRef<"Testimonials", 'String'>
    readonly altImage: FieldRef<"Testimonials", 'Json'>
    readonly photoPublicId: FieldRef<"Testimonials", 'String'>
    readonly videoPublicId: FieldRef<"Testimonials", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Testimonials findUnique
   */
  export type TestimonialsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Testimonials
     */
    select?: TestimonialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Testimonials
     */
    omit?: TestimonialsOmit<ExtArgs> | null
    /**
     * Filter, which Testimonials to fetch.
     */
    where: TestimonialsWhereUniqueInput
  }

  /**
   * Testimonials findUniqueOrThrow
   */
  export type TestimonialsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Testimonials
     */
    select?: TestimonialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Testimonials
     */
    omit?: TestimonialsOmit<ExtArgs> | null
    /**
     * Filter, which Testimonials to fetch.
     */
    where: TestimonialsWhereUniqueInput
  }

  /**
   * Testimonials findFirst
   */
  export type TestimonialsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Testimonials
     */
    select?: TestimonialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Testimonials
     */
    omit?: TestimonialsOmit<ExtArgs> | null
    /**
     * Filter, which Testimonials to fetch.
     */
    where?: TestimonialsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Testimonials to fetch.
     */
    orderBy?: TestimonialsOrderByWithRelationInput | TestimonialsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Testimonials.
     */
    cursor?: TestimonialsWhereUniqueInput
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
    distinct?: TestimonialsScalarFieldEnum | TestimonialsScalarFieldEnum[]
  }

  /**
   * Testimonials findFirstOrThrow
   */
  export type TestimonialsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Testimonials
     */
    select?: TestimonialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Testimonials
     */
    omit?: TestimonialsOmit<ExtArgs> | null
    /**
     * Filter, which Testimonials to fetch.
     */
    where?: TestimonialsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Testimonials to fetch.
     */
    orderBy?: TestimonialsOrderByWithRelationInput | TestimonialsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Testimonials.
     */
    cursor?: TestimonialsWhereUniqueInput
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
    distinct?: TestimonialsScalarFieldEnum | TestimonialsScalarFieldEnum[]
  }

  /**
   * Testimonials findMany
   */
  export type TestimonialsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Testimonials
     */
    select?: TestimonialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Testimonials
     */
    omit?: TestimonialsOmit<ExtArgs> | null
    /**
     * Filter, which Testimonials to fetch.
     */
    where?: TestimonialsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Testimonials to fetch.
     */
    orderBy?: TestimonialsOrderByWithRelationInput | TestimonialsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Testimonials.
     */
    cursor?: TestimonialsWhereUniqueInput
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
    distinct?: TestimonialsScalarFieldEnum | TestimonialsScalarFieldEnum[]
  }

  /**
   * Testimonials create
   */
  export type TestimonialsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Testimonials
     */
    select?: TestimonialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Testimonials
     */
    omit?: TestimonialsOmit<ExtArgs> | null
    /**
     * The data needed to create a Testimonials.
     */
    data: XOR<TestimonialsCreateInput, TestimonialsUncheckedCreateInput>
  }

  /**
   * Testimonials createMany
   */
  export type TestimonialsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Testimonials.
     */
    data: TestimonialsCreateManyInput | TestimonialsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Testimonials update
   */
  export type TestimonialsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Testimonials
     */
    select?: TestimonialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Testimonials
     */
    omit?: TestimonialsOmit<ExtArgs> | null
    /**
     * The data needed to update a Testimonials.
     */
    data: XOR<TestimonialsUpdateInput, TestimonialsUncheckedUpdateInput>
    /**
     * Choose, which Testimonials to update.
     */
    where: TestimonialsWhereUniqueInput
  }

  /**
   * Testimonials updateMany
   */
  export type TestimonialsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Testimonials.
     */
    data: XOR<TestimonialsUpdateManyMutationInput, TestimonialsUncheckedUpdateManyInput>
    /**
     * Filter which Testimonials to update
     */
    where?: TestimonialsWhereInput
    /**
     * Limit how many Testimonials to update.
     */
    limit?: number
  }

  /**
   * Testimonials upsert
   */
  export type TestimonialsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Testimonials
     */
    select?: TestimonialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Testimonials
     */
    omit?: TestimonialsOmit<ExtArgs> | null
    /**
     * The filter to search for the Testimonials to update in case it exists.
     */
    where: TestimonialsWhereUniqueInput
    /**
     * In case the Testimonials found by the `where` argument doesn't exist, create a new Testimonials with this data.
     */
    create: XOR<TestimonialsCreateInput, TestimonialsUncheckedCreateInput>
    /**
     * In case the Testimonials was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TestimonialsUpdateInput, TestimonialsUncheckedUpdateInput>
  }

  /**
   * Testimonials delete
   */
  export type TestimonialsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Testimonials
     */
    select?: TestimonialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Testimonials
     */
    omit?: TestimonialsOmit<ExtArgs> | null
    /**
     * Filter which Testimonials to delete.
     */
    where: TestimonialsWhereUniqueInput
  }

  /**
   * Testimonials deleteMany
   */
  export type TestimonialsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Testimonials to delete
     */
    where?: TestimonialsWhereInput
    /**
     * Limit how many Testimonials to delete.
     */
    limit?: number
  }

  /**
   * Testimonials without action
   */
  export type TestimonialsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Testimonials
     */
    select?: TestimonialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Testimonials
     */
    omit?: TestimonialsOmit<ExtArgs> | null
  }


  /**
   * Model Requests
   */

  export type AggregateRequests = {
    _count: RequestsCountAggregateOutputType | null
    _avg: RequestsAvgAggregateOutputType | null
    _sum: RequestsSumAggregateOutputType | null
    _min: RequestsMinAggregateOutputType | null
    _max: RequestsMaxAggregateOutputType | null
  }

  export type RequestsAvgAggregateOutputType = {
    id: number | null
  }

  export type RequestsSumAggregateOutputType = {
    id: number | null
  }

  export type RequestsMinAggregateOutputType = {
    id: number | null
    name: string | null
    number: string | null
    about: string | null
    heardFrom: $Enums.hearFrom | null
    createdAt: Date | null
  }

  export type RequestsMaxAggregateOutputType = {
    id: number | null
    name: string | null
    number: string | null
    about: string | null
    heardFrom: $Enums.hearFrom | null
    createdAt: Date | null
  }

  export type RequestsCountAggregateOutputType = {
    id: number
    name: number
    number: number
    about: number
    heardFrom: number
    createdAt: number
    _all: number
  }


  export type RequestsAvgAggregateInputType = {
    id?: true
  }

  export type RequestsSumAggregateInputType = {
    id?: true
  }

  export type RequestsMinAggregateInputType = {
    id?: true
    name?: true
    number?: true
    about?: true
    heardFrom?: true
    createdAt?: true
  }

  export type RequestsMaxAggregateInputType = {
    id?: true
    name?: true
    number?: true
    about?: true
    heardFrom?: true
    createdAt?: true
  }

  export type RequestsCountAggregateInputType = {
    id?: true
    name?: true
    number?: true
    about?: true
    heardFrom?: true
    createdAt?: true
    _all?: true
  }

  export type RequestsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Requests to aggregate.
     */
    where?: RequestsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Requests to fetch.
     */
    orderBy?: RequestsOrderByWithRelationInput | RequestsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RequestsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Requests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Requests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Requests
    **/
    _count?: true | RequestsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RequestsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RequestsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RequestsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RequestsMaxAggregateInputType
  }

  export type GetRequestsAggregateType<T extends RequestsAggregateArgs> = {
        [P in keyof T & keyof AggregateRequests]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRequests[P]>
      : GetScalarType<T[P], AggregateRequests[P]>
  }




  export type RequestsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RequestsWhereInput
    orderBy?: RequestsOrderByWithAggregationInput | RequestsOrderByWithAggregationInput[]
    by: RequestsScalarFieldEnum[] | RequestsScalarFieldEnum
    having?: RequestsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RequestsCountAggregateInputType | true
    _avg?: RequestsAvgAggregateInputType
    _sum?: RequestsSumAggregateInputType
    _min?: RequestsMinAggregateInputType
    _max?: RequestsMaxAggregateInputType
  }

  export type RequestsGroupByOutputType = {
    id: number
    name: string
    number: string
    about: string
    heardFrom: $Enums.hearFrom
    createdAt: Date
    _count: RequestsCountAggregateOutputType | null
    _avg: RequestsAvgAggregateOutputType | null
    _sum: RequestsSumAggregateOutputType | null
    _min: RequestsMinAggregateOutputType | null
    _max: RequestsMaxAggregateOutputType | null
  }

  type GetRequestsGroupByPayload<T extends RequestsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RequestsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RequestsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RequestsGroupByOutputType[P]>
            : GetScalarType<T[P], RequestsGroupByOutputType[P]>
        }
      >
    >


  export type RequestsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    number?: boolean
    about?: boolean
    heardFrom?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["requests"]>



  export type RequestsSelectScalar = {
    id?: boolean
    name?: boolean
    number?: boolean
    about?: boolean
    heardFrom?: boolean
    createdAt?: boolean
  }

  export type RequestsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "number" | "about" | "heardFrom" | "createdAt", ExtArgs["result"]["requests"]>

  export type $RequestsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Requests"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      number: string
      about: string
      heardFrom: $Enums.hearFrom
      createdAt: Date
    }, ExtArgs["result"]["requests"]>
    composites: {}
  }

  type RequestsGetPayload<S extends boolean | null | undefined | RequestsDefaultArgs> = $Result.GetResult<Prisma.$RequestsPayload, S>

  type RequestsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RequestsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RequestsCountAggregateInputType | true
    }

  export interface RequestsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Requests'], meta: { name: 'Requests' } }
    /**
     * Find zero or one Requests that matches the filter.
     * @param {RequestsFindUniqueArgs} args - Arguments to find a Requests
     * @example
     * // Get one Requests
     * const requests = await prisma.requests.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RequestsFindUniqueArgs>(args: SelectSubset<T, RequestsFindUniqueArgs<ExtArgs>>): Prisma__RequestsClient<$Result.GetResult<Prisma.$RequestsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Requests that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RequestsFindUniqueOrThrowArgs} args - Arguments to find a Requests
     * @example
     * // Get one Requests
     * const requests = await prisma.requests.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RequestsFindUniqueOrThrowArgs>(args: SelectSubset<T, RequestsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RequestsClient<$Result.GetResult<Prisma.$RequestsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Requests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestsFindFirstArgs} args - Arguments to find a Requests
     * @example
     * // Get one Requests
     * const requests = await prisma.requests.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RequestsFindFirstArgs>(args?: SelectSubset<T, RequestsFindFirstArgs<ExtArgs>>): Prisma__RequestsClient<$Result.GetResult<Prisma.$RequestsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Requests that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestsFindFirstOrThrowArgs} args - Arguments to find a Requests
     * @example
     * // Get one Requests
     * const requests = await prisma.requests.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RequestsFindFirstOrThrowArgs>(args?: SelectSubset<T, RequestsFindFirstOrThrowArgs<ExtArgs>>): Prisma__RequestsClient<$Result.GetResult<Prisma.$RequestsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Requests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Requests
     * const requests = await prisma.requests.findMany()
     * 
     * // Get first 10 Requests
     * const requests = await prisma.requests.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const requestsWithIdOnly = await prisma.requests.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RequestsFindManyArgs>(args?: SelectSubset<T, RequestsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RequestsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Requests.
     * @param {RequestsCreateArgs} args - Arguments to create a Requests.
     * @example
     * // Create one Requests
     * const Requests = await prisma.requests.create({
     *   data: {
     *     // ... data to create a Requests
     *   }
     * })
     * 
     */
    create<T extends RequestsCreateArgs>(args: SelectSubset<T, RequestsCreateArgs<ExtArgs>>): Prisma__RequestsClient<$Result.GetResult<Prisma.$RequestsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Requests.
     * @param {RequestsCreateManyArgs} args - Arguments to create many Requests.
     * @example
     * // Create many Requests
     * const requests = await prisma.requests.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RequestsCreateManyArgs>(args?: SelectSubset<T, RequestsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Requests.
     * @param {RequestsDeleteArgs} args - Arguments to delete one Requests.
     * @example
     * // Delete one Requests
     * const Requests = await prisma.requests.delete({
     *   where: {
     *     // ... filter to delete one Requests
     *   }
     * })
     * 
     */
    delete<T extends RequestsDeleteArgs>(args: SelectSubset<T, RequestsDeleteArgs<ExtArgs>>): Prisma__RequestsClient<$Result.GetResult<Prisma.$RequestsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Requests.
     * @param {RequestsUpdateArgs} args - Arguments to update one Requests.
     * @example
     * // Update one Requests
     * const requests = await prisma.requests.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RequestsUpdateArgs>(args: SelectSubset<T, RequestsUpdateArgs<ExtArgs>>): Prisma__RequestsClient<$Result.GetResult<Prisma.$RequestsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Requests.
     * @param {RequestsDeleteManyArgs} args - Arguments to filter Requests to delete.
     * @example
     * // Delete a few Requests
     * const { count } = await prisma.requests.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RequestsDeleteManyArgs>(args?: SelectSubset<T, RequestsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Requests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Requests
     * const requests = await prisma.requests.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RequestsUpdateManyArgs>(args: SelectSubset<T, RequestsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Requests.
     * @param {RequestsUpsertArgs} args - Arguments to update or create a Requests.
     * @example
     * // Update or create a Requests
     * const requests = await prisma.requests.upsert({
     *   create: {
     *     // ... data to create a Requests
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Requests we want to update
     *   }
     * })
     */
    upsert<T extends RequestsUpsertArgs>(args: SelectSubset<T, RequestsUpsertArgs<ExtArgs>>): Prisma__RequestsClient<$Result.GetResult<Prisma.$RequestsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Requests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestsCountArgs} args - Arguments to filter Requests to count.
     * @example
     * // Count the number of Requests
     * const count = await prisma.requests.count({
     *   where: {
     *     // ... the filter for the Requests we want to count
     *   }
     * })
    **/
    count<T extends RequestsCountArgs>(
      args?: Subset<T, RequestsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RequestsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Requests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RequestsAggregateArgs>(args: Subset<T, RequestsAggregateArgs>): Prisma.PrismaPromise<GetRequestsAggregateType<T>>

    /**
     * Group by Requests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestsGroupByArgs} args - Group by arguments.
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
      T extends RequestsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RequestsGroupByArgs['orderBy'] }
        : { orderBy?: RequestsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RequestsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRequestsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Requests model
   */
  readonly fields: RequestsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Requests.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RequestsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Requests model
   */
  interface RequestsFieldRefs {
    readonly id: FieldRef<"Requests", 'Int'>
    readonly name: FieldRef<"Requests", 'String'>
    readonly number: FieldRef<"Requests", 'String'>
    readonly about: FieldRef<"Requests", 'String'>
    readonly heardFrom: FieldRef<"Requests", 'hearFrom'>
    readonly createdAt: FieldRef<"Requests", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Requests findUnique
   */
  export type RequestsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Requests
     */
    select?: RequestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Requests
     */
    omit?: RequestsOmit<ExtArgs> | null
    /**
     * Filter, which Requests to fetch.
     */
    where: RequestsWhereUniqueInput
  }

  /**
   * Requests findUniqueOrThrow
   */
  export type RequestsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Requests
     */
    select?: RequestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Requests
     */
    omit?: RequestsOmit<ExtArgs> | null
    /**
     * Filter, which Requests to fetch.
     */
    where: RequestsWhereUniqueInput
  }

  /**
   * Requests findFirst
   */
  export type RequestsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Requests
     */
    select?: RequestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Requests
     */
    omit?: RequestsOmit<ExtArgs> | null
    /**
     * Filter, which Requests to fetch.
     */
    where?: RequestsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Requests to fetch.
     */
    orderBy?: RequestsOrderByWithRelationInput | RequestsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Requests.
     */
    cursor?: RequestsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Requests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Requests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Requests.
     */
    distinct?: RequestsScalarFieldEnum | RequestsScalarFieldEnum[]
  }

  /**
   * Requests findFirstOrThrow
   */
  export type RequestsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Requests
     */
    select?: RequestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Requests
     */
    omit?: RequestsOmit<ExtArgs> | null
    /**
     * Filter, which Requests to fetch.
     */
    where?: RequestsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Requests to fetch.
     */
    orderBy?: RequestsOrderByWithRelationInput | RequestsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Requests.
     */
    cursor?: RequestsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Requests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Requests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Requests.
     */
    distinct?: RequestsScalarFieldEnum | RequestsScalarFieldEnum[]
  }

  /**
   * Requests findMany
   */
  export type RequestsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Requests
     */
    select?: RequestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Requests
     */
    omit?: RequestsOmit<ExtArgs> | null
    /**
     * Filter, which Requests to fetch.
     */
    where?: RequestsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Requests to fetch.
     */
    orderBy?: RequestsOrderByWithRelationInput | RequestsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Requests.
     */
    cursor?: RequestsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Requests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Requests.
     */
    skip?: number
    distinct?: RequestsScalarFieldEnum | RequestsScalarFieldEnum[]
  }

  /**
   * Requests create
   */
  export type RequestsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Requests
     */
    select?: RequestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Requests
     */
    omit?: RequestsOmit<ExtArgs> | null
    /**
     * The data needed to create a Requests.
     */
    data: XOR<RequestsCreateInput, RequestsUncheckedCreateInput>
  }

  /**
   * Requests createMany
   */
  export type RequestsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Requests.
     */
    data: RequestsCreateManyInput | RequestsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Requests update
   */
  export type RequestsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Requests
     */
    select?: RequestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Requests
     */
    omit?: RequestsOmit<ExtArgs> | null
    /**
     * The data needed to update a Requests.
     */
    data: XOR<RequestsUpdateInput, RequestsUncheckedUpdateInput>
    /**
     * Choose, which Requests to update.
     */
    where: RequestsWhereUniqueInput
  }

  /**
   * Requests updateMany
   */
  export type RequestsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Requests.
     */
    data: XOR<RequestsUpdateManyMutationInput, RequestsUncheckedUpdateManyInput>
    /**
     * Filter which Requests to update
     */
    where?: RequestsWhereInput
    /**
     * Limit how many Requests to update.
     */
    limit?: number
  }

  /**
   * Requests upsert
   */
  export type RequestsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Requests
     */
    select?: RequestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Requests
     */
    omit?: RequestsOmit<ExtArgs> | null
    /**
     * The filter to search for the Requests to update in case it exists.
     */
    where: RequestsWhereUniqueInput
    /**
     * In case the Requests found by the `where` argument doesn't exist, create a new Requests with this data.
     */
    create: XOR<RequestsCreateInput, RequestsUncheckedCreateInput>
    /**
     * In case the Requests was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RequestsUpdateInput, RequestsUncheckedUpdateInput>
  }

  /**
   * Requests delete
   */
  export type RequestsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Requests
     */
    select?: RequestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Requests
     */
    omit?: RequestsOmit<ExtArgs> | null
    /**
     * Filter which Requests to delete.
     */
    where: RequestsWhereUniqueInput
  }

  /**
   * Requests deleteMany
   */
  export type RequestsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Requests to delete
     */
    where?: RequestsWhereInput
    /**
     * Limit how many Requests to delete.
     */
    limit?: number
  }

  /**
   * Requests without action
   */
  export type RequestsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Requests
     */
    select?: RequestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Requests
     */
    omit?: RequestsOmit<ExtArgs> | null
  }


  /**
   * Model ContactInfo
   */

  export type AggregateContactInfo = {
    _count: ContactInfoCountAggregateOutputType | null
    _avg: ContactInfoAvgAggregateOutputType | null
    _sum: ContactInfoSumAggregateOutputType | null
    _min: ContactInfoMinAggregateOutputType | null
    _max: ContactInfoMaxAggregateOutputType | null
  }

  export type ContactInfoAvgAggregateOutputType = {
    id: number | null
  }

  export type ContactInfoSumAggregateOutputType = {
    id: number | null
  }

  export type ContactInfoMinAggregateOutputType = {
    id: number | null
    phone: string | null
    phone2: string | null
    email: string | null
    addressUz: string | null
    addressRu: string | null
    instagram: string | null
    telegram: string | null
    youtube: string | null
    facebook: string | null
    mapUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ContactInfoMaxAggregateOutputType = {
    id: number | null
    phone: string | null
    phone2: string | null
    email: string | null
    addressUz: string | null
    addressRu: string | null
    instagram: string | null
    telegram: string | null
    youtube: string | null
    facebook: string | null
    mapUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ContactInfoCountAggregateOutputType = {
    id: number
    phone: number
    phone2: number
    email: number
    addressUz: number
    addressRu: number
    instagram: number
    telegram: number
    youtube: number
    facebook: number
    mapUrl: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ContactInfoAvgAggregateInputType = {
    id?: true
  }

  export type ContactInfoSumAggregateInputType = {
    id?: true
  }

  export type ContactInfoMinAggregateInputType = {
    id?: true
    phone?: true
    phone2?: true
    email?: true
    addressUz?: true
    addressRu?: true
    instagram?: true
    telegram?: true
    youtube?: true
    facebook?: true
    mapUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ContactInfoMaxAggregateInputType = {
    id?: true
    phone?: true
    phone2?: true
    email?: true
    addressUz?: true
    addressRu?: true
    instagram?: true
    telegram?: true
    youtube?: true
    facebook?: true
    mapUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ContactInfoCountAggregateInputType = {
    id?: true
    phone?: true
    phone2?: true
    email?: true
    addressUz?: true
    addressRu?: true
    instagram?: true
    telegram?: true
    youtube?: true
    facebook?: true
    mapUrl?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ContactInfoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContactInfo to aggregate.
     */
    where?: ContactInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactInfos to fetch.
     */
    orderBy?: ContactInfoOrderByWithRelationInput | ContactInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContactInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ContactInfos
    **/
    _count?: true | ContactInfoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ContactInfoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ContactInfoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContactInfoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContactInfoMaxAggregateInputType
  }

  export type GetContactInfoAggregateType<T extends ContactInfoAggregateArgs> = {
        [P in keyof T & keyof AggregateContactInfo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContactInfo[P]>
      : GetScalarType<T[P], AggregateContactInfo[P]>
  }




  export type ContactInfoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContactInfoWhereInput
    orderBy?: ContactInfoOrderByWithAggregationInput | ContactInfoOrderByWithAggregationInput[]
    by: ContactInfoScalarFieldEnum[] | ContactInfoScalarFieldEnum
    having?: ContactInfoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContactInfoCountAggregateInputType | true
    _avg?: ContactInfoAvgAggregateInputType
    _sum?: ContactInfoSumAggregateInputType
    _min?: ContactInfoMinAggregateInputType
    _max?: ContactInfoMaxAggregateInputType
  }

  export type ContactInfoGroupByOutputType = {
    id: number
    phone: string
    phone2: string
    email: string
    addressUz: string
    addressRu: string
    instagram: string
    telegram: string
    youtube: string
    facebook: string
    mapUrl: string
    createdAt: Date
    updatedAt: Date
    _count: ContactInfoCountAggregateOutputType | null
    _avg: ContactInfoAvgAggregateOutputType | null
    _sum: ContactInfoSumAggregateOutputType | null
    _min: ContactInfoMinAggregateOutputType | null
    _max: ContactInfoMaxAggregateOutputType | null
  }

  type GetContactInfoGroupByPayload<T extends ContactInfoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContactInfoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContactInfoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContactInfoGroupByOutputType[P]>
            : GetScalarType<T[P], ContactInfoGroupByOutputType[P]>
        }
      >
    >


  export type ContactInfoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    phone?: boolean
    phone2?: boolean
    email?: boolean
    addressUz?: boolean
    addressRu?: boolean
    instagram?: boolean
    telegram?: boolean
    youtube?: boolean
    facebook?: boolean
    mapUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["contactInfo"]>



  export type ContactInfoSelectScalar = {
    id?: boolean
    phone?: boolean
    phone2?: boolean
    email?: boolean
    addressUz?: boolean
    addressRu?: boolean
    instagram?: boolean
    telegram?: boolean
    youtube?: boolean
    facebook?: boolean
    mapUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ContactInfoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "phone" | "phone2" | "email" | "addressUz" | "addressRu" | "instagram" | "telegram" | "youtube" | "facebook" | "mapUrl" | "createdAt" | "updatedAt", ExtArgs["result"]["contactInfo"]>

  export type $ContactInfoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ContactInfo"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      phone: string
      phone2: string
      email: string
      addressUz: string
      addressRu: string
      instagram: string
      telegram: string
      youtube: string
      facebook: string
      mapUrl: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["contactInfo"]>
    composites: {}
  }

  type ContactInfoGetPayload<S extends boolean | null | undefined | ContactInfoDefaultArgs> = $Result.GetResult<Prisma.$ContactInfoPayload, S>

  type ContactInfoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContactInfoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContactInfoCountAggregateInputType | true
    }

  export interface ContactInfoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ContactInfo'], meta: { name: 'ContactInfo' } }
    /**
     * Find zero or one ContactInfo that matches the filter.
     * @param {ContactInfoFindUniqueArgs} args - Arguments to find a ContactInfo
     * @example
     * // Get one ContactInfo
     * const contactInfo = await prisma.contactInfo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContactInfoFindUniqueArgs>(args: SelectSubset<T, ContactInfoFindUniqueArgs<ExtArgs>>): Prisma__ContactInfoClient<$Result.GetResult<Prisma.$ContactInfoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ContactInfo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContactInfoFindUniqueOrThrowArgs} args - Arguments to find a ContactInfo
     * @example
     * // Get one ContactInfo
     * const contactInfo = await prisma.contactInfo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContactInfoFindUniqueOrThrowArgs>(args: SelectSubset<T, ContactInfoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContactInfoClient<$Result.GetResult<Prisma.$ContactInfoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContactInfo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactInfoFindFirstArgs} args - Arguments to find a ContactInfo
     * @example
     * // Get one ContactInfo
     * const contactInfo = await prisma.contactInfo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContactInfoFindFirstArgs>(args?: SelectSubset<T, ContactInfoFindFirstArgs<ExtArgs>>): Prisma__ContactInfoClient<$Result.GetResult<Prisma.$ContactInfoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContactInfo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactInfoFindFirstOrThrowArgs} args - Arguments to find a ContactInfo
     * @example
     * // Get one ContactInfo
     * const contactInfo = await prisma.contactInfo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContactInfoFindFirstOrThrowArgs>(args?: SelectSubset<T, ContactInfoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContactInfoClient<$Result.GetResult<Prisma.$ContactInfoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ContactInfos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactInfoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ContactInfos
     * const contactInfos = await prisma.contactInfo.findMany()
     * 
     * // Get first 10 ContactInfos
     * const contactInfos = await prisma.contactInfo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contactInfoWithIdOnly = await prisma.contactInfo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContactInfoFindManyArgs>(args?: SelectSubset<T, ContactInfoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactInfoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ContactInfo.
     * @param {ContactInfoCreateArgs} args - Arguments to create a ContactInfo.
     * @example
     * // Create one ContactInfo
     * const ContactInfo = await prisma.contactInfo.create({
     *   data: {
     *     // ... data to create a ContactInfo
     *   }
     * })
     * 
     */
    create<T extends ContactInfoCreateArgs>(args: SelectSubset<T, ContactInfoCreateArgs<ExtArgs>>): Prisma__ContactInfoClient<$Result.GetResult<Prisma.$ContactInfoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ContactInfos.
     * @param {ContactInfoCreateManyArgs} args - Arguments to create many ContactInfos.
     * @example
     * // Create many ContactInfos
     * const contactInfo = await prisma.contactInfo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContactInfoCreateManyArgs>(args?: SelectSubset<T, ContactInfoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ContactInfo.
     * @param {ContactInfoDeleteArgs} args - Arguments to delete one ContactInfo.
     * @example
     * // Delete one ContactInfo
     * const ContactInfo = await prisma.contactInfo.delete({
     *   where: {
     *     // ... filter to delete one ContactInfo
     *   }
     * })
     * 
     */
    delete<T extends ContactInfoDeleteArgs>(args: SelectSubset<T, ContactInfoDeleteArgs<ExtArgs>>): Prisma__ContactInfoClient<$Result.GetResult<Prisma.$ContactInfoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ContactInfo.
     * @param {ContactInfoUpdateArgs} args - Arguments to update one ContactInfo.
     * @example
     * // Update one ContactInfo
     * const contactInfo = await prisma.contactInfo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContactInfoUpdateArgs>(args: SelectSubset<T, ContactInfoUpdateArgs<ExtArgs>>): Prisma__ContactInfoClient<$Result.GetResult<Prisma.$ContactInfoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ContactInfos.
     * @param {ContactInfoDeleteManyArgs} args - Arguments to filter ContactInfos to delete.
     * @example
     * // Delete a few ContactInfos
     * const { count } = await prisma.contactInfo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContactInfoDeleteManyArgs>(args?: SelectSubset<T, ContactInfoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContactInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactInfoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ContactInfos
     * const contactInfo = await prisma.contactInfo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContactInfoUpdateManyArgs>(args: SelectSubset<T, ContactInfoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ContactInfo.
     * @param {ContactInfoUpsertArgs} args - Arguments to update or create a ContactInfo.
     * @example
     * // Update or create a ContactInfo
     * const contactInfo = await prisma.contactInfo.upsert({
     *   create: {
     *     // ... data to create a ContactInfo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ContactInfo we want to update
     *   }
     * })
     */
    upsert<T extends ContactInfoUpsertArgs>(args: SelectSubset<T, ContactInfoUpsertArgs<ExtArgs>>): Prisma__ContactInfoClient<$Result.GetResult<Prisma.$ContactInfoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ContactInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactInfoCountArgs} args - Arguments to filter ContactInfos to count.
     * @example
     * // Count the number of ContactInfos
     * const count = await prisma.contactInfo.count({
     *   where: {
     *     // ... the filter for the ContactInfos we want to count
     *   }
     * })
    **/
    count<T extends ContactInfoCountArgs>(
      args?: Subset<T, ContactInfoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContactInfoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ContactInfo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactInfoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ContactInfoAggregateArgs>(args: Subset<T, ContactInfoAggregateArgs>): Prisma.PrismaPromise<GetContactInfoAggregateType<T>>

    /**
     * Group by ContactInfo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactInfoGroupByArgs} args - Group by arguments.
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
      T extends ContactInfoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContactInfoGroupByArgs['orderBy'] }
        : { orderBy?: ContactInfoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ContactInfoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContactInfoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ContactInfo model
   */
  readonly fields: ContactInfoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ContactInfo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContactInfoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the ContactInfo model
   */
  interface ContactInfoFieldRefs {
    readonly id: FieldRef<"ContactInfo", 'Int'>
    readonly phone: FieldRef<"ContactInfo", 'String'>
    readonly phone2: FieldRef<"ContactInfo", 'String'>
    readonly email: FieldRef<"ContactInfo", 'String'>
    readonly addressUz: FieldRef<"ContactInfo", 'String'>
    readonly addressRu: FieldRef<"ContactInfo", 'String'>
    readonly instagram: FieldRef<"ContactInfo", 'String'>
    readonly telegram: FieldRef<"ContactInfo", 'String'>
    readonly youtube: FieldRef<"ContactInfo", 'String'>
    readonly facebook: FieldRef<"ContactInfo", 'String'>
    readonly mapUrl: FieldRef<"ContactInfo", 'String'>
    readonly createdAt: FieldRef<"ContactInfo", 'DateTime'>
    readonly updatedAt: FieldRef<"ContactInfo", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ContactInfo findUnique
   */
  export type ContactInfoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactInfo
     */
    select?: ContactInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactInfo
     */
    omit?: ContactInfoOmit<ExtArgs> | null
    /**
     * Filter, which ContactInfo to fetch.
     */
    where: ContactInfoWhereUniqueInput
  }

  /**
   * ContactInfo findUniqueOrThrow
   */
  export type ContactInfoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactInfo
     */
    select?: ContactInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactInfo
     */
    omit?: ContactInfoOmit<ExtArgs> | null
    /**
     * Filter, which ContactInfo to fetch.
     */
    where: ContactInfoWhereUniqueInput
  }

  /**
   * ContactInfo findFirst
   */
  export type ContactInfoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactInfo
     */
    select?: ContactInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactInfo
     */
    omit?: ContactInfoOmit<ExtArgs> | null
    /**
     * Filter, which ContactInfo to fetch.
     */
    where?: ContactInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactInfos to fetch.
     */
    orderBy?: ContactInfoOrderByWithRelationInput | ContactInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContactInfos.
     */
    cursor?: ContactInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContactInfos.
     */
    distinct?: ContactInfoScalarFieldEnum | ContactInfoScalarFieldEnum[]
  }

  /**
   * ContactInfo findFirstOrThrow
   */
  export type ContactInfoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactInfo
     */
    select?: ContactInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactInfo
     */
    omit?: ContactInfoOmit<ExtArgs> | null
    /**
     * Filter, which ContactInfo to fetch.
     */
    where?: ContactInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactInfos to fetch.
     */
    orderBy?: ContactInfoOrderByWithRelationInput | ContactInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContactInfos.
     */
    cursor?: ContactInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContactInfos.
     */
    distinct?: ContactInfoScalarFieldEnum | ContactInfoScalarFieldEnum[]
  }

  /**
   * ContactInfo findMany
   */
  export type ContactInfoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactInfo
     */
    select?: ContactInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactInfo
     */
    omit?: ContactInfoOmit<ExtArgs> | null
    /**
     * Filter, which ContactInfos to fetch.
     */
    where?: ContactInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactInfos to fetch.
     */
    orderBy?: ContactInfoOrderByWithRelationInput | ContactInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ContactInfos.
     */
    cursor?: ContactInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactInfos.
     */
    skip?: number
    distinct?: ContactInfoScalarFieldEnum | ContactInfoScalarFieldEnum[]
  }

  /**
   * ContactInfo create
   */
  export type ContactInfoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactInfo
     */
    select?: ContactInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactInfo
     */
    omit?: ContactInfoOmit<ExtArgs> | null
    /**
     * The data needed to create a ContactInfo.
     */
    data: XOR<ContactInfoCreateInput, ContactInfoUncheckedCreateInput>
  }

  /**
   * ContactInfo createMany
   */
  export type ContactInfoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ContactInfos.
     */
    data: ContactInfoCreateManyInput | ContactInfoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ContactInfo update
   */
  export type ContactInfoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactInfo
     */
    select?: ContactInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactInfo
     */
    omit?: ContactInfoOmit<ExtArgs> | null
    /**
     * The data needed to update a ContactInfo.
     */
    data: XOR<ContactInfoUpdateInput, ContactInfoUncheckedUpdateInput>
    /**
     * Choose, which ContactInfo to update.
     */
    where: ContactInfoWhereUniqueInput
  }

  /**
   * ContactInfo updateMany
   */
  export type ContactInfoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ContactInfos.
     */
    data: XOR<ContactInfoUpdateManyMutationInput, ContactInfoUncheckedUpdateManyInput>
    /**
     * Filter which ContactInfos to update
     */
    where?: ContactInfoWhereInput
    /**
     * Limit how many ContactInfos to update.
     */
    limit?: number
  }

  /**
   * ContactInfo upsert
   */
  export type ContactInfoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactInfo
     */
    select?: ContactInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactInfo
     */
    omit?: ContactInfoOmit<ExtArgs> | null
    /**
     * The filter to search for the ContactInfo to update in case it exists.
     */
    where: ContactInfoWhereUniqueInput
    /**
     * In case the ContactInfo found by the `where` argument doesn't exist, create a new ContactInfo with this data.
     */
    create: XOR<ContactInfoCreateInput, ContactInfoUncheckedCreateInput>
    /**
     * In case the ContactInfo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContactInfoUpdateInput, ContactInfoUncheckedUpdateInput>
  }

  /**
   * ContactInfo delete
   */
  export type ContactInfoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactInfo
     */
    select?: ContactInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactInfo
     */
    omit?: ContactInfoOmit<ExtArgs> | null
    /**
     * Filter which ContactInfo to delete.
     */
    where: ContactInfoWhereUniqueInput
  }

  /**
   * ContactInfo deleteMany
   */
  export type ContactInfoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContactInfos to delete
     */
    where?: ContactInfoWhereInput
    /**
     * Limit how many ContactInfos to delete.
     */
    limit?: number
  }

  /**
   * ContactInfo without action
   */
  export type ContactInfoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactInfo
     */
    select?: ContactInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactInfo
     */
    omit?: ContactInfoOmit<ExtArgs> | null
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


  export const AdminScalarFieldEnum: {
    id: 'id',
    name: 'name',
    password: 'password',
    role: 'role'
  };

  export type AdminScalarFieldEnum = (typeof AdminScalarFieldEnum)[keyof typeof AdminScalarFieldEnum]


  export const ServicesScalarFieldEnum: {
    id: 'id',
    icon: 'icon',
    iconPublicId: 'iconPublicId',
    localeData: 'localeData'
  };

  export type ServicesScalarFieldEnum = (typeof ServicesScalarFieldEnum)[keyof typeof ServicesScalarFieldEnum]


  export const ProjectsScalarFieldEnum: {
    id: 'id',
    title: 'title',
    categoryId: 'categoryId',
    slug: 'slug',
    status: 'status',
    localizedContent: 'localizedContent',
    facts: 'facts',
    design: 'design'
  };

  export type ProjectsScalarFieldEnum = (typeof ProjectsScalarFieldEnum)[keyof typeof ProjectsScalarFieldEnum]


  export const ProjectCategoryScalarFieldEnum: {
    id: 'id',
    title: 'title'
  };

  export type ProjectCategoryScalarFieldEnum = (typeof ProjectCategoryScalarFieldEnum)[keyof typeof ProjectCategoryScalarFieldEnum]


  export const CoverImageScalarFieldEnum: {
    id: 'id',
    projectId: 'projectId',
    image_light: 'image_light',
    image_dark: 'image_dark',
    imageLightPublicId: 'imageLightPublicId',
    imageDarkPublicId: 'imageDarkPublicId',
    image_alt: 'image_alt'
  };

  export type CoverImageScalarFieldEnum = (typeof CoverImageScalarFieldEnum)[keyof typeof CoverImageScalarFieldEnum]


  export const ProjectGalleryScalarFieldEnum: {
    id: 'id',
    projectId: 'projectId',
    image: 'image',
    imagePublicId: 'imagePublicId',
    image_alt: 'image_alt'
  };

  export type ProjectGalleryScalarFieldEnum = (typeof ProjectGalleryScalarFieldEnum)[keyof typeof ProjectGalleryScalarFieldEnum]


  export const TeamScalarFieldEnum: {
    id: 'id',
    name: 'name',
    role: 'role',
    photo: 'photo',
    photoPublicId: 'photoPublicId'
  };

  export type TeamScalarFieldEnum = (typeof TeamScalarFieldEnum)[keyof typeof TeamScalarFieldEnum]


  export const TestimonialsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    localizedContent: 'localizedContent',
    photoUrl: 'photoUrl',
    videoUrl: 'videoUrl',
    altImage: 'altImage',
    photoPublicId: 'photoPublicId',
    videoPublicId: 'videoPublicId'
  };

  export type TestimonialsScalarFieldEnum = (typeof TestimonialsScalarFieldEnum)[keyof typeof TestimonialsScalarFieldEnum]


  export const RequestsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    number: 'number',
    about: 'about',
    heardFrom: 'heardFrom',
    createdAt: 'createdAt'
  };

  export type RequestsScalarFieldEnum = (typeof RequestsScalarFieldEnum)[keyof typeof RequestsScalarFieldEnum]


  export const ContactInfoScalarFieldEnum: {
    id: 'id',
    phone: 'phone',
    phone2: 'phone2',
    email: 'email',
    addressUz: 'addressUz',
    addressRu: 'addressRu',
    instagram: 'instagram',
    telegram: 'telegram',
    youtube: 'youtube',
    facebook: 'facebook',
    mapUrl: 'mapUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ContactInfoScalarFieldEnum = (typeof ContactInfoScalarFieldEnum)[keyof typeof ContactInfoScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const AdminOrderByRelevanceFieldEnum: {
    name: 'name',
    password: 'password',
    role: 'role'
  };

  export type AdminOrderByRelevanceFieldEnum = (typeof AdminOrderByRelevanceFieldEnum)[keyof typeof AdminOrderByRelevanceFieldEnum]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const ServicesOrderByRelevanceFieldEnum: {
    icon: 'icon',
    iconPublicId: 'iconPublicId'
  };

  export type ServicesOrderByRelevanceFieldEnum = (typeof ServicesOrderByRelevanceFieldEnum)[keyof typeof ServicesOrderByRelevanceFieldEnum]


  export const ProjectsOrderByRelevanceFieldEnum: {
    title: 'title',
    slug: 'slug',
    status: 'status'
  };

  export type ProjectsOrderByRelevanceFieldEnum = (typeof ProjectsOrderByRelevanceFieldEnum)[keyof typeof ProjectsOrderByRelevanceFieldEnum]


  export const ProjectCategoryOrderByRelevanceFieldEnum: {
    title: 'title'
  };

  export type ProjectCategoryOrderByRelevanceFieldEnum = (typeof ProjectCategoryOrderByRelevanceFieldEnum)[keyof typeof ProjectCategoryOrderByRelevanceFieldEnum]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const CoverImageOrderByRelevanceFieldEnum: {
    image_light: 'image_light',
    image_dark: 'image_dark',
    imageLightPublicId: 'imageLightPublicId',
    imageDarkPublicId: 'imageDarkPublicId'
  };

  export type CoverImageOrderByRelevanceFieldEnum = (typeof CoverImageOrderByRelevanceFieldEnum)[keyof typeof CoverImageOrderByRelevanceFieldEnum]


  export const ProjectGalleryOrderByRelevanceFieldEnum: {
    image: 'image',
    imagePublicId: 'imagePublicId'
  };

  export type ProjectGalleryOrderByRelevanceFieldEnum = (typeof ProjectGalleryOrderByRelevanceFieldEnum)[keyof typeof ProjectGalleryOrderByRelevanceFieldEnum]


  export const TeamOrderByRelevanceFieldEnum: {
    name: 'name',
    role: 'role',
    photo: 'photo',
    photoPublicId: 'photoPublicId'
  };

  export type TeamOrderByRelevanceFieldEnum = (typeof TeamOrderByRelevanceFieldEnum)[keyof typeof TeamOrderByRelevanceFieldEnum]


  export const TestimonialsOrderByRelevanceFieldEnum: {
    name: 'name',
    photoUrl: 'photoUrl',
    videoUrl: 'videoUrl',
    photoPublicId: 'photoPublicId',
    videoPublicId: 'videoPublicId'
  };

  export type TestimonialsOrderByRelevanceFieldEnum = (typeof TestimonialsOrderByRelevanceFieldEnum)[keyof typeof TestimonialsOrderByRelevanceFieldEnum]


  export const RequestsOrderByRelevanceFieldEnum: {
    name: 'name',
    number: 'number',
    about: 'about'
  };

  export type RequestsOrderByRelevanceFieldEnum = (typeof RequestsOrderByRelevanceFieldEnum)[keyof typeof RequestsOrderByRelevanceFieldEnum]


  export const ContactInfoOrderByRelevanceFieldEnum: {
    phone: 'phone',
    phone2: 'phone2',
    email: 'email',
    addressUz: 'addressUz',
    addressRu: 'addressRu',
    instagram: 'instagram',
    telegram: 'telegram',
    youtube: 'youtube',
    facebook: 'facebook',
    mapUrl: 'mapUrl'
  };

  export type ContactInfoOrderByRelevanceFieldEnum = (typeof ContactInfoOrderByRelevanceFieldEnum)[keyof typeof ContactInfoOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'hearFrom'
   */
  export type EnumhearFromFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'hearFrom'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type AdminWhereInput = {
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    id?: IntFilter<"Admin"> | number
    name?: StringFilter<"Admin"> | string
    password?: StringFilter<"Admin"> | string
    role?: StringFilter<"Admin"> | string
  }

  export type AdminOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    password?: SortOrder
    role?: SortOrder
    _relevance?: AdminOrderByRelevanceInput
  }

  export type AdminWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    password?: StringFilter<"Admin"> | string
    role?: StringFilter<"Admin"> | string
  }, "id" | "name">

  export type AdminOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    password?: SortOrder
    role?: SortOrder
    _count?: AdminCountOrderByAggregateInput
    _avg?: AdminAvgOrderByAggregateInput
    _max?: AdminMaxOrderByAggregateInput
    _min?: AdminMinOrderByAggregateInput
    _sum?: AdminSumOrderByAggregateInput
  }

  export type AdminScalarWhereWithAggregatesInput = {
    AND?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    OR?: AdminScalarWhereWithAggregatesInput[]
    NOT?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Admin"> | number
    name?: StringWithAggregatesFilter<"Admin"> | string
    password?: StringWithAggregatesFilter<"Admin"> | string
    role?: StringWithAggregatesFilter<"Admin"> | string
  }

  export type ServicesWhereInput = {
    AND?: ServicesWhereInput | ServicesWhereInput[]
    OR?: ServicesWhereInput[]
    NOT?: ServicesWhereInput | ServicesWhereInput[]
    id?: IntFilter<"Services"> | number
    icon?: StringFilter<"Services"> | string
    iconPublicId?: StringFilter<"Services"> | string
    localeData?: JsonFilter<"Services">
  }

  export type ServicesOrderByWithRelationInput = {
    id?: SortOrder
    icon?: SortOrder
    iconPublicId?: SortOrder
    localeData?: SortOrder
    _relevance?: ServicesOrderByRelevanceInput
  }

  export type ServicesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ServicesWhereInput | ServicesWhereInput[]
    OR?: ServicesWhereInput[]
    NOT?: ServicesWhereInput | ServicesWhereInput[]
    icon?: StringFilter<"Services"> | string
    iconPublicId?: StringFilter<"Services"> | string
    localeData?: JsonFilter<"Services">
  }, "id">

  export type ServicesOrderByWithAggregationInput = {
    id?: SortOrder
    icon?: SortOrder
    iconPublicId?: SortOrder
    localeData?: SortOrder
    _count?: ServicesCountOrderByAggregateInput
    _avg?: ServicesAvgOrderByAggregateInput
    _max?: ServicesMaxOrderByAggregateInput
    _min?: ServicesMinOrderByAggregateInput
    _sum?: ServicesSumOrderByAggregateInput
  }

  export type ServicesScalarWhereWithAggregatesInput = {
    AND?: ServicesScalarWhereWithAggregatesInput | ServicesScalarWhereWithAggregatesInput[]
    OR?: ServicesScalarWhereWithAggregatesInput[]
    NOT?: ServicesScalarWhereWithAggregatesInput | ServicesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Services"> | number
    icon?: StringWithAggregatesFilter<"Services"> | string
    iconPublicId?: StringWithAggregatesFilter<"Services"> | string
    localeData?: JsonWithAggregatesFilter<"Services">
  }

  export type ProjectsWhereInput = {
    AND?: ProjectsWhereInput | ProjectsWhereInput[]
    OR?: ProjectsWhereInput[]
    NOT?: ProjectsWhereInput | ProjectsWhereInput[]
    id?: IntFilter<"Projects"> | number
    title?: StringFilter<"Projects"> | string
    categoryId?: IntFilter<"Projects"> | number
    slug?: StringFilter<"Projects"> | string
    status?: StringFilter<"Projects"> | string
    localizedContent?: JsonFilter<"Projects">
    facts?: JsonFilter<"Projects">
    design?: JsonFilter<"Projects">
    coverImage?: XOR<CoverImageNullableScalarRelationFilter, CoverImageWhereInput> | null
    category?: XOR<ProjectCategoryScalarRelationFilter, ProjectCategoryWhereInput>
    gallery?: ProjectGalleryListRelationFilter
  }

  export type ProjectsOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    categoryId?: SortOrder
    slug?: SortOrder
    status?: SortOrder
    localizedContent?: SortOrder
    facts?: SortOrder
    design?: SortOrder
    coverImage?: CoverImageOrderByWithRelationInput
    category?: ProjectCategoryOrderByWithRelationInput
    gallery?: ProjectGalleryOrderByRelationAggregateInput
    _relevance?: ProjectsOrderByRelevanceInput
  }

  export type ProjectsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    slug?: string
    AND?: ProjectsWhereInput | ProjectsWhereInput[]
    OR?: ProjectsWhereInput[]
    NOT?: ProjectsWhereInput | ProjectsWhereInput[]
    title?: StringFilter<"Projects"> | string
    categoryId?: IntFilter<"Projects"> | number
    status?: StringFilter<"Projects"> | string
    localizedContent?: JsonFilter<"Projects">
    facts?: JsonFilter<"Projects">
    design?: JsonFilter<"Projects">
    coverImage?: XOR<CoverImageNullableScalarRelationFilter, CoverImageWhereInput> | null
    category?: XOR<ProjectCategoryScalarRelationFilter, ProjectCategoryWhereInput>
    gallery?: ProjectGalleryListRelationFilter
  }, "id" | "slug">

  export type ProjectsOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    categoryId?: SortOrder
    slug?: SortOrder
    status?: SortOrder
    localizedContent?: SortOrder
    facts?: SortOrder
    design?: SortOrder
    _count?: ProjectsCountOrderByAggregateInput
    _avg?: ProjectsAvgOrderByAggregateInput
    _max?: ProjectsMaxOrderByAggregateInput
    _min?: ProjectsMinOrderByAggregateInput
    _sum?: ProjectsSumOrderByAggregateInput
  }

  export type ProjectsScalarWhereWithAggregatesInput = {
    AND?: ProjectsScalarWhereWithAggregatesInput | ProjectsScalarWhereWithAggregatesInput[]
    OR?: ProjectsScalarWhereWithAggregatesInput[]
    NOT?: ProjectsScalarWhereWithAggregatesInput | ProjectsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Projects"> | number
    title?: StringWithAggregatesFilter<"Projects"> | string
    categoryId?: IntWithAggregatesFilter<"Projects"> | number
    slug?: StringWithAggregatesFilter<"Projects"> | string
    status?: StringWithAggregatesFilter<"Projects"> | string
    localizedContent?: JsonWithAggregatesFilter<"Projects">
    facts?: JsonWithAggregatesFilter<"Projects">
    design?: JsonWithAggregatesFilter<"Projects">
  }

  export type ProjectCategoryWhereInput = {
    AND?: ProjectCategoryWhereInput | ProjectCategoryWhereInput[]
    OR?: ProjectCategoryWhereInput[]
    NOT?: ProjectCategoryWhereInput | ProjectCategoryWhereInput[]
    id?: IntFilter<"ProjectCategory"> | number
    title?: StringFilter<"ProjectCategory"> | string
    projects?: ProjectsListRelationFilter
  }

  export type ProjectCategoryOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    projects?: ProjectsOrderByRelationAggregateInput
    _relevance?: ProjectCategoryOrderByRelevanceInput
  }

  export type ProjectCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    title?: string
    AND?: ProjectCategoryWhereInput | ProjectCategoryWhereInput[]
    OR?: ProjectCategoryWhereInput[]
    NOT?: ProjectCategoryWhereInput | ProjectCategoryWhereInput[]
    projects?: ProjectsListRelationFilter
  }, "id" | "title">

  export type ProjectCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    _count?: ProjectCategoryCountOrderByAggregateInput
    _avg?: ProjectCategoryAvgOrderByAggregateInput
    _max?: ProjectCategoryMaxOrderByAggregateInput
    _min?: ProjectCategoryMinOrderByAggregateInput
    _sum?: ProjectCategorySumOrderByAggregateInput
  }

  export type ProjectCategoryScalarWhereWithAggregatesInput = {
    AND?: ProjectCategoryScalarWhereWithAggregatesInput | ProjectCategoryScalarWhereWithAggregatesInput[]
    OR?: ProjectCategoryScalarWhereWithAggregatesInput[]
    NOT?: ProjectCategoryScalarWhereWithAggregatesInput | ProjectCategoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ProjectCategory"> | number
    title?: StringWithAggregatesFilter<"ProjectCategory"> | string
  }

  export type CoverImageWhereInput = {
    AND?: CoverImageWhereInput | CoverImageWhereInput[]
    OR?: CoverImageWhereInput[]
    NOT?: CoverImageWhereInput | CoverImageWhereInput[]
    id?: IntFilter<"CoverImage"> | number
    projectId?: IntFilter<"CoverImage"> | number
    image_light?: StringFilter<"CoverImage"> | string
    image_dark?: StringFilter<"CoverImage"> | string
    imageLightPublicId?: StringNullableFilter<"CoverImage"> | string | null
    imageDarkPublicId?: StringNullableFilter<"CoverImage"> | string | null
    image_alt?: JsonFilter<"CoverImage">
    project?: XOR<ProjectsScalarRelationFilter, ProjectsWhereInput>
  }

  export type CoverImageOrderByWithRelationInput = {
    id?: SortOrder
    projectId?: SortOrder
    image_light?: SortOrder
    image_dark?: SortOrder
    imageLightPublicId?: SortOrderInput | SortOrder
    imageDarkPublicId?: SortOrderInput | SortOrder
    image_alt?: SortOrder
    project?: ProjectsOrderByWithRelationInput
    _relevance?: CoverImageOrderByRelevanceInput
  }

  export type CoverImageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    projectId?: number
    AND?: CoverImageWhereInput | CoverImageWhereInput[]
    OR?: CoverImageWhereInput[]
    NOT?: CoverImageWhereInput | CoverImageWhereInput[]
    image_light?: StringFilter<"CoverImage"> | string
    image_dark?: StringFilter<"CoverImage"> | string
    imageLightPublicId?: StringNullableFilter<"CoverImage"> | string | null
    imageDarkPublicId?: StringNullableFilter<"CoverImage"> | string | null
    image_alt?: JsonFilter<"CoverImage">
    project?: XOR<ProjectsScalarRelationFilter, ProjectsWhereInput>
  }, "id" | "projectId">

  export type CoverImageOrderByWithAggregationInput = {
    id?: SortOrder
    projectId?: SortOrder
    image_light?: SortOrder
    image_dark?: SortOrder
    imageLightPublicId?: SortOrderInput | SortOrder
    imageDarkPublicId?: SortOrderInput | SortOrder
    image_alt?: SortOrder
    _count?: CoverImageCountOrderByAggregateInput
    _avg?: CoverImageAvgOrderByAggregateInput
    _max?: CoverImageMaxOrderByAggregateInput
    _min?: CoverImageMinOrderByAggregateInput
    _sum?: CoverImageSumOrderByAggregateInput
  }

  export type CoverImageScalarWhereWithAggregatesInput = {
    AND?: CoverImageScalarWhereWithAggregatesInput | CoverImageScalarWhereWithAggregatesInput[]
    OR?: CoverImageScalarWhereWithAggregatesInput[]
    NOT?: CoverImageScalarWhereWithAggregatesInput | CoverImageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CoverImage"> | number
    projectId?: IntWithAggregatesFilter<"CoverImage"> | number
    image_light?: StringWithAggregatesFilter<"CoverImage"> | string
    image_dark?: StringWithAggregatesFilter<"CoverImage"> | string
    imageLightPublicId?: StringNullableWithAggregatesFilter<"CoverImage"> | string | null
    imageDarkPublicId?: StringNullableWithAggregatesFilter<"CoverImage"> | string | null
    image_alt?: JsonWithAggregatesFilter<"CoverImage">
  }

  export type ProjectGalleryWhereInput = {
    AND?: ProjectGalleryWhereInput | ProjectGalleryWhereInput[]
    OR?: ProjectGalleryWhereInput[]
    NOT?: ProjectGalleryWhereInput | ProjectGalleryWhereInput[]
    id?: IntFilter<"ProjectGallery"> | number
    projectId?: IntFilter<"ProjectGallery"> | number
    image?: StringFilter<"ProjectGallery"> | string
    imagePublicId?: StringNullableFilter<"ProjectGallery"> | string | null
    image_alt?: JsonFilter<"ProjectGallery">
    project?: XOR<ProjectsScalarRelationFilter, ProjectsWhereInput>
  }

  export type ProjectGalleryOrderByWithRelationInput = {
    id?: SortOrder
    projectId?: SortOrder
    image?: SortOrder
    imagePublicId?: SortOrderInput | SortOrder
    image_alt?: SortOrder
    project?: ProjectsOrderByWithRelationInput
    _relevance?: ProjectGalleryOrderByRelevanceInput
  }

  export type ProjectGalleryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProjectGalleryWhereInput | ProjectGalleryWhereInput[]
    OR?: ProjectGalleryWhereInput[]
    NOT?: ProjectGalleryWhereInput | ProjectGalleryWhereInput[]
    projectId?: IntFilter<"ProjectGallery"> | number
    image?: StringFilter<"ProjectGallery"> | string
    imagePublicId?: StringNullableFilter<"ProjectGallery"> | string | null
    image_alt?: JsonFilter<"ProjectGallery">
    project?: XOR<ProjectsScalarRelationFilter, ProjectsWhereInput>
  }, "id">

  export type ProjectGalleryOrderByWithAggregationInput = {
    id?: SortOrder
    projectId?: SortOrder
    image?: SortOrder
    imagePublicId?: SortOrderInput | SortOrder
    image_alt?: SortOrder
    _count?: ProjectGalleryCountOrderByAggregateInput
    _avg?: ProjectGalleryAvgOrderByAggregateInput
    _max?: ProjectGalleryMaxOrderByAggregateInput
    _min?: ProjectGalleryMinOrderByAggregateInput
    _sum?: ProjectGallerySumOrderByAggregateInput
  }

  export type ProjectGalleryScalarWhereWithAggregatesInput = {
    AND?: ProjectGalleryScalarWhereWithAggregatesInput | ProjectGalleryScalarWhereWithAggregatesInput[]
    OR?: ProjectGalleryScalarWhereWithAggregatesInput[]
    NOT?: ProjectGalleryScalarWhereWithAggregatesInput | ProjectGalleryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ProjectGallery"> | number
    projectId?: IntWithAggregatesFilter<"ProjectGallery"> | number
    image?: StringWithAggregatesFilter<"ProjectGallery"> | string
    imagePublicId?: StringNullableWithAggregatesFilter<"ProjectGallery"> | string | null
    image_alt?: JsonWithAggregatesFilter<"ProjectGallery">
  }

  export type TeamWhereInput = {
    AND?: TeamWhereInput | TeamWhereInput[]
    OR?: TeamWhereInput[]
    NOT?: TeamWhereInput | TeamWhereInput[]
    id?: IntFilter<"Team"> | number
    name?: StringFilter<"Team"> | string
    role?: StringFilter<"Team"> | string
    photo?: StringFilter<"Team"> | string
    photoPublicId?: StringFilter<"Team"> | string
  }

  export type TeamOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    role?: SortOrder
    photo?: SortOrder
    photoPublicId?: SortOrder
    _relevance?: TeamOrderByRelevanceInput
  }

  export type TeamWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TeamWhereInput | TeamWhereInput[]
    OR?: TeamWhereInput[]
    NOT?: TeamWhereInput | TeamWhereInput[]
    name?: StringFilter<"Team"> | string
    role?: StringFilter<"Team"> | string
    photo?: StringFilter<"Team"> | string
    photoPublicId?: StringFilter<"Team"> | string
  }, "id">

  export type TeamOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    role?: SortOrder
    photo?: SortOrder
    photoPublicId?: SortOrder
    _count?: TeamCountOrderByAggregateInput
    _avg?: TeamAvgOrderByAggregateInput
    _max?: TeamMaxOrderByAggregateInput
    _min?: TeamMinOrderByAggregateInput
    _sum?: TeamSumOrderByAggregateInput
  }

  export type TeamScalarWhereWithAggregatesInput = {
    AND?: TeamScalarWhereWithAggregatesInput | TeamScalarWhereWithAggregatesInput[]
    OR?: TeamScalarWhereWithAggregatesInput[]
    NOT?: TeamScalarWhereWithAggregatesInput | TeamScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Team"> | number
    name?: StringWithAggregatesFilter<"Team"> | string
    role?: StringWithAggregatesFilter<"Team"> | string
    photo?: StringWithAggregatesFilter<"Team"> | string
    photoPublicId?: StringWithAggregatesFilter<"Team"> | string
  }

  export type TestimonialsWhereInput = {
    AND?: TestimonialsWhereInput | TestimonialsWhereInput[]
    OR?: TestimonialsWhereInput[]
    NOT?: TestimonialsWhereInput | TestimonialsWhereInput[]
    id?: IntFilter<"Testimonials"> | number
    name?: StringFilter<"Testimonials"> | string
    localizedContent?: JsonFilter<"Testimonials">
    photoUrl?: StringFilter<"Testimonials"> | string
    videoUrl?: StringFilter<"Testimonials"> | string
    altImage?: JsonFilter<"Testimonials">
    photoPublicId?: StringFilter<"Testimonials"> | string
    videoPublicId?: StringFilter<"Testimonials"> | string
  }

  export type TestimonialsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    localizedContent?: SortOrder
    photoUrl?: SortOrder
    videoUrl?: SortOrder
    altImage?: SortOrder
    photoPublicId?: SortOrder
    videoPublicId?: SortOrder
    _relevance?: TestimonialsOrderByRelevanceInput
  }

  export type TestimonialsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TestimonialsWhereInput | TestimonialsWhereInput[]
    OR?: TestimonialsWhereInput[]
    NOT?: TestimonialsWhereInput | TestimonialsWhereInput[]
    name?: StringFilter<"Testimonials"> | string
    localizedContent?: JsonFilter<"Testimonials">
    photoUrl?: StringFilter<"Testimonials"> | string
    videoUrl?: StringFilter<"Testimonials"> | string
    altImage?: JsonFilter<"Testimonials">
    photoPublicId?: StringFilter<"Testimonials"> | string
    videoPublicId?: StringFilter<"Testimonials"> | string
  }, "id">

  export type TestimonialsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    localizedContent?: SortOrder
    photoUrl?: SortOrder
    videoUrl?: SortOrder
    altImage?: SortOrder
    photoPublicId?: SortOrder
    videoPublicId?: SortOrder
    _count?: TestimonialsCountOrderByAggregateInput
    _avg?: TestimonialsAvgOrderByAggregateInput
    _max?: TestimonialsMaxOrderByAggregateInput
    _min?: TestimonialsMinOrderByAggregateInput
    _sum?: TestimonialsSumOrderByAggregateInput
  }

  export type TestimonialsScalarWhereWithAggregatesInput = {
    AND?: TestimonialsScalarWhereWithAggregatesInput | TestimonialsScalarWhereWithAggregatesInput[]
    OR?: TestimonialsScalarWhereWithAggregatesInput[]
    NOT?: TestimonialsScalarWhereWithAggregatesInput | TestimonialsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Testimonials"> | number
    name?: StringWithAggregatesFilter<"Testimonials"> | string
    localizedContent?: JsonWithAggregatesFilter<"Testimonials">
    photoUrl?: StringWithAggregatesFilter<"Testimonials"> | string
    videoUrl?: StringWithAggregatesFilter<"Testimonials"> | string
    altImage?: JsonWithAggregatesFilter<"Testimonials">
    photoPublicId?: StringWithAggregatesFilter<"Testimonials"> | string
    videoPublicId?: StringWithAggregatesFilter<"Testimonials"> | string
  }

  export type RequestsWhereInput = {
    AND?: RequestsWhereInput | RequestsWhereInput[]
    OR?: RequestsWhereInput[]
    NOT?: RequestsWhereInput | RequestsWhereInput[]
    id?: IntFilter<"Requests"> | number
    name?: StringFilter<"Requests"> | string
    number?: StringFilter<"Requests"> | string
    about?: StringFilter<"Requests"> | string
    heardFrom?: EnumhearFromFilter<"Requests"> | $Enums.hearFrom
    createdAt?: DateTimeFilter<"Requests"> | Date | string
  }

  export type RequestsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    number?: SortOrder
    about?: SortOrder
    heardFrom?: SortOrder
    createdAt?: SortOrder
    _relevance?: RequestsOrderByRelevanceInput
  }

  export type RequestsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RequestsWhereInput | RequestsWhereInput[]
    OR?: RequestsWhereInput[]
    NOT?: RequestsWhereInput | RequestsWhereInput[]
    name?: StringFilter<"Requests"> | string
    number?: StringFilter<"Requests"> | string
    about?: StringFilter<"Requests"> | string
    heardFrom?: EnumhearFromFilter<"Requests"> | $Enums.hearFrom
    createdAt?: DateTimeFilter<"Requests"> | Date | string
  }, "id">

  export type RequestsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    number?: SortOrder
    about?: SortOrder
    heardFrom?: SortOrder
    createdAt?: SortOrder
    _count?: RequestsCountOrderByAggregateInput
    _avg?: RequestsAvgOrderByAggregateInput
    _max?: RequestsMaxOrderByAggregateInput
    _min?: RequestsMinOrderByAggregateInput
    _sum?: RequestsSumOrderByAggregateInput
  }

  export type RequestsScalarWhereWithAggregatesInput = {
    AND?: RequestsScalarWhereWithAggregatesInput | RequestsScalarWhereWithAggregatesInput[]
    OR?: RequestsScalarWhereWithAggregatesInput[]
    NOT?: RequestsScalarWhereWithAggregatesInput | RequestsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Requests"> | number
    name?: StringWithAggregatesFilter<"Requests"> | string
    number?: StringWithAggregatesFilter<"Requests"> | string
    about?: StringWithAggregatesFilter<"Requests"> | string
    heardFrom?: EnumhearFromWithAggregatesFilter<"Requests"> | $Enums.hearFrom
    createdAt?: DateTimeWithAggregatesFilter<"Requests"> | Date | string
  }

  export type ContactInfoWhereInput = {
    AND?: ContactInfoWhereInput | ContactInfoWhereInput[]
    OR?: ContactInfoWhereInput[]
    NOT?: ContactInfoWhereInput | ContactInfoWhereInput[]
    id?: IntFilter<"ContactInfo"> | number
    phone?: StringFilter<"ContactInfo"> | string
    phone2?: StringFilter<"ContactInfo"> | string
    email?: StringFilter<"ContactInfo"> | string
    addressUz?: StringFilter<"ContactInfo"> | string
    addressRu?: StringFilter<"ContactInfo"> | string
    instagram?: StringFilter<"ContactInfo"> | string
    telegram?: StringFilter<"ContactInfo"> | string
    youtube?: StringFilter<"ContactInfo"> | string
    facebook?: StringFilter<"ContactInfo"> | string
    mapUrl?: StringFilter<"ContactInfo"> | string
    createdAt?: DateTimeFilter<"ContactInfo"> | Date | string
    updatedAt?: DateTimeFilter<"ContactInfo"> | Date | string
  }

  export type ContactInfoOrderByWithRelationInput = {
    id?: SortOrder
    phone?: SortOrder
    phone2?: SortOrder
    email?: SortOrder
    addressUz?: SortOrder
    addressRu?: SortOrder
    instagram?: SortOrder
    telegram?: SortOrder
    youtube?: SortOrder
    facebook?: SortOrder
    mapUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _relevance?: ContactInfoOrderByRelevanceInput
  }

  export type ContactInfoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ContactInfoWhereInput | ContactInfoWhereInput[]
    OR?: ContactInfoWhereInput[]
    NOT?: ContactInfoWhereInput | ContactInfoWhereInput[]
    phone?: StringFilter<"ContactInfo"> | string
    phone2?: StringFilter<"ContactInfo"> | string
    email?: StringFilter<"ContactInfo"> | string
    addressUz?: StringFilter<"ContactInfo"> | string
    addressRu?: StringFilter<"ContactInfo"> | string
    instagram?: StringFilter<"ContactInfo"> | string
    telegram?: StringFilter<"ContactInfo"> | string
    youtube?: StringFilter<"ContactInfo"> | string
    facebook?: StringFilter<"ContactInfo"> | string
    mapUrl?: StringFilter<"ContactInfo"> | string
    createdAt?: DateTimeFilter<"ContactInfo"> | Date | string
    updatedAt?: DateTimeFilter<"ContactInfo"> | Date | string
  }, "id">

  export type ContactInfoOrderByWithAggregationInput = {
    id?: SortOrder
    phone?: SortOrder
    phone2?: SortOrder
    email?: SortOrder
    addressUz?: SortOrder
    addressRu?: SortOrder
    instagram?: SortOrder
    telegram?: SortOrder
    youtube?: SortOrder
    facebook?: SortOrder
    mapUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ContactInfoCountOrderByAggregateInput
    _avg?: ContactInfoAvgOrderByAggregateInput
    _max?: ContactInfoMaxOrderByAggregateInput
    _min?: ContactInfoMinOrderByAggregateInput
    _sum?: ContactInfoSumOrderByAggregateInput
  }

  export type ContactInfoScalarWhereWithAggregatesInput = {
    AND?: ContactInfoScalarWhereWithAggregatesInput | ContactInfoScalarWhereWithAggregatesInput[]
    OR?: ContactInfoScalarWhereWithAggregatesInput[]
    NOT?: ContactInfoScalarWhereWithAggregatesInput | ContactInfoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ContactInfo"> | number
    phone?: StringWithAggregatesFilter<"ContactInfo"> | string
    phone2?: StringWithAggregatesFilter<"ContactInfo"> | string
    email?: StringWithAggregatesFilter<"ContactInfo"> | string
    addressUz?: StringWithAggregatesFilter<"ContactInfo"> | string
    addressRu?: StringWithAggregatesFilter<"ContactInfo"> | string
    instagram?: StringWithAggregatesFilter<"ContactInfo"> | string
    telegram?: StringWithAggregatesFilter<"ContactInfo"> | string
    youtube?: StringWithAggregatesFilter<"ContactInfo"> | string
    facebook?: StringWithAggregatesFilter<"ContactInfo"> | string
    mapUrl?: StringWithAggregatesFilter<"ContactInfo"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ContactInfo"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ContactInfo"> | Date | string
  }

  export type AdminCreateInput = {
    name: string
    password: string
    role?: string
  }

  export type AdminUncheckedCreateInput = {
    id?: number
    name: string
    password: string
    role?: string
  }

  export type AdminUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
  }

  export type AdminUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
  }

  export type AdminCreateManyInput = {
    id?: number
    name: string
    password: string
    role?: string
  }

  export type AdminUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
  }

  export type AdminUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
  }

  export type ServicesCreateInput = {
    icon: string
    iconPublicId: string
    localeData: JsonNullValueInput | InputJsonValue
  }

  export type ServicesUncheckedCreateInput = {
    id?: number
    icon: string
    iconPublicId: string
    localeData: JsonNullValueInput | InputJsonValue
  }

  export type ServicesUpdateInput = {
    icon?: StringFieldUpdateOperationsInput | string
    iconPublicId?: StringFieldUpdateOperationsInput | string
    localeData?: JsonNullValueInput | InputJsonValue
  }

  export type ServicesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    icon?: StringFieldUpdateOperationsInput | string
    iconPublicId?: StringFieldUpdateOperationsInput | string
    localeData?: JsonNullValueInput | InputJsonValue
  }

  export type ServicesCreateManyInput = {
    id?: number
    icon: string
    iconPublicId: string
    localeData: JsonNullValueInput | InputJsonValue
  }

  export type ServicesUpdateManyMutationInput = {
    icon?: StringFieldUpdateOperationsInput | string
    iconPublicId?: StringFieldUpdateOperationsInput | string
    localeData?: JsonNullValueInput | InputJsonValue
  }

  export type ServicesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    icon?: StringFieldUpdateOperationsInput | string
    iconPublicId?: StringFieldUpdateOperationsInput | string
    localeData?: JsonNullValueInput | InputJsonValue
  }

  export type ProjectsCreateInput = {
    title: string
    slug: string
    status?: string
    localizedContent: JsonNullValueInput | InputJsonValue
    facts: JsonNullValueInput | InputJsonValue
    design: JsonNullValueInput | InputJsonValue
    coverImage?: CoverImageCreateNestedOneWithoutProjectInput
    category: ProjectCategoryCreateNestedOneWithoutProjectsInput
    gallery?: ProjectGalleryCreateNestedManyWithoutProjectInput
  }

  export type ProjectsUncheckedCreateInput = {
    id?: number
    title: string
    categoryId: number
    slug: string
    status?: string
    localizedContent: JsonNullValueInput | InputJsonValue
    facts: JsonNullValueInput | InputJsonValue
    design: JsonNullValueInput | InputJsonValue
    coverImage?: CoverImageUncheckedCreateNestedOneWithoutProjectInput
    gallery?: ProjectGalleryUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectsUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    localizedContent?: JsonNullValueInput | InputJsonValue
    facts?: JsonNullValueInput | InputJsonValue
    design?: JsonNullValueInput | InputJsonValue
    coverImage?: CoverImageUpdateOneWithoutProjectNestedInput
    category?: ProjectCategoryUpdateOneRequiredWithoutProjectsNestedInput
    gallery?: ProjectGalleryUpdateManyWithoutProjectNestedInput
  }

  export type ProjectsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    categoryId?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    localizedContent?: JsonNullValueInput | InputJsonValue
    facts?: JsonNullValueInput | InputJsonValue
    design?: JsonNullValueInput | InputJsonValue
    coverImage?: CoverImageUncheckedUpdateOneWithoutProjectNestedInput
    gallery?: ProjectGalleryUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectsCreateManyInput = {
    id?: number
    title: string
    categoryId: number
    slug: string
    status?: string
    localizedContent: JsonNullValueInput | InputJsonValue
    facts: JsonNullValueInput | InputJsonValue
    design: JsonNullValueInput | InputJsonValue
  }

  export type ProjectsUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    localizedContent?: JsonNullValueInput | InputJsonValue
    facts?: JsonNullValueInput | InputJsonValue
    design?: JsonNullValueInput | InputJsonValue
  }

  export type ProjectsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    categoryId?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    localizedContent?: JsonNullValueInput | InputJsonValue
    facts?: JsonNullValueInput | InputJsonValue
    design?: JsonNullValueInput | InputJsonValue
  }

  export type ProjectCategoryCreateInput = {
    title: string
    projects?: ProjectsCreateNestedManyWithoutCategoryInput
  }

  export type ProjectCategoryUncheckedCreateInput = {
    id?: number
    title: string
    projects?: ProjectsUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type ProjectCategoryUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    projects?: ProjectsUpdateManyWithoutCategoryNestedInput
  }

  export type ProjectCategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    projects?: ProjectsUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type ProjectCategoryCreateManyInput = {
    id?: number
    title: string
  }

  export type ProjectCategoryUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectCategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
  }

  export type CoverImageCreateInput = {
    image_light: string
    image_dark: string
    imageLightPublicId?: string | null
    imageDarkPublicId?: string | null
    image_alt: JsonNullValueInput | InputJsonValue
    project: ProjectsCreateNestedOneWithoutCoverImageInput
  }

  export type CoverImageUncheckedCreateInput = {
    id?: number
    projectId: number
    image_light: string
    image_dark: string
    imageLightPublicId?: string | null
    imageDarkPublicId?: string | null
    image_alt: JsonNullValueInput | InputJsonValue
  }

  export type CoverImageUpdateInput = {
    image_light?: StringFieldUpdateOperationsInput | string
    image_dark?: StringFieldUpdateOperationsInput | string
    imageLightPublicId?: NullableStringFieldUpdateOperationsInput | string | null
    imageDarkPublicId?: NullableStringFieldUpdateOperationsInput | string | null
    image_alt?: JsonNullValueInput | InputJsonValue
    project?: ProjectsUpdateOneRequiredWithoutCoverImageNestedInput
  }

  export type CoverImageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    projectId?: IntFieldUpdateOperationsInput | number
    image_light?: StringFieldUpdateOperationsInput | string
    image_dark?: StringFieldUpdateOperationsInput | string
    imageLightPublicId?: NullableStringFieldUpdateOperationsInput | string | null
    imageDarkPublicId?: NullableStringFieldUpdateOperationsInput | string | null
    image_alt?: JsonNullValueInput | InputJsonValue
  }

  export type CoverImageCreateManyInput = {
    id?: number
    projectId: number
    image_light: string
    image_dark: string
    imageLightPublicId?: string | null
    imageDarkPublicId?: string | null
    image_alt: JsonNullValueInput | InputJsonValue
  }

  export type CoverImageUpdateManyMutationInput = {
    image_light?: StringFieldUpdateOperationsInput | string
    image_dark?: StringFieldUpdateOperationsInput | string
    imageLightPublicId?: NullableStringFieldUpdateOperationsInput | string | null
    imageDarkPublicId?: NullableStringFieldUpdateOperationsInput | string | null
    image_alt?: JsonNullValueInput | InputJsonValue
  }

  export type CoverImageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    projectId?: IntFieldUpdateOperationsInput | number
    image_light?: StringFieldUpdateOperationsInput | string
    image_dark?: StringFieldUpdateOperationsInput | string
    imageLightPublicId?: NullableStringFieldUpdateOperationsInput | string | null
    imageDarkPublicId?: NullableStringFieldUpdateOperationsInput | string | null
    image_alt?: JsonNullValueInput | InputJsonValue
  }

  export type ProjectGalleryCreateInput = {
    image: string
    imagePublicId?: string | null
    image_alt: JsonNullValueInput | InputJsonValue
    project: ProjectsCreateNestedOneWithoutGalleryInput
  }

  export type ProjectGalleryUncheckedCreateInput = {
    id?: number
    projectId: number
    image: string
    imagePublicId?: string | null
    image_alt: JsonNullValueInput | InputJsonValue
  }

  export type ProjectGalleryUpdateInput = {
    image?: StringFieldUpdateOperationsInput | string
    imagePublicId?: NullableStringFieldUpdateOperationsInput | string | null
    image_alt?: JsonNullValueInput | InputJsonValue
    project?: ProjectsUpdateOneRequiredWithoutGalleryNestedInput
  }

  export type ProjectGalleryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    projectId?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    imagePublicId?: NullableStringFieldUpdateOperationsInput | string | null
    image_alt?: JsonNullValueInput | InputJsonValue
  }

  export type ProjectGalleryCreateManyInput = {
    id?: number
    projectId: number
    image: string
    imagePublicId?: string | null
    image_alt: JsonNullValueInput | InputJsonValue
  }

  export type ProjectGalleryUpdateManyMutationInput = {
    image?: StringFieldUpdateOperationsInput | string
    imagePublicId?: NullableStringFieldUpdateOperationsInput | string | null
    image_alt?: JsonNullValueInput | InputJsonValue
  }

  export type ProjectGalleryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    projectId?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    imagePublicId?: NullableStringFieldUpdateOperationsInput | string | null
    image_alt?: JsonNullValueInput | InputJsonValue
  }

  export type TeamCreateInput = {
    name: string
    role: string
    photo: string
    photoPublicId: string
  }

  export type TeamUncheckedCreateInput = {
    id?: number
    name: string
    role: string
    photo: string
    photoPublicId: string
  }

  export type TeamUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    photo?: StringFieldUpdateOperationsInput | string
    photoPublicId?: StringFieldUpdateOperationsInput | string
  }

  export type TeamUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    photo?: StringFieldUpdateOperationsInput | string
    photoPublicId?: StringFieldUpdateOperationsInput | string
  }

  export type TeamCreateManyInput = {
    id?: number
    name: string
    role: string
    photo: string
    photoPublicId: string
  }

  export type TeamUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    photo?: StringFieldUpdateOperationsInput | string
    photoPublicId?: StringFieldUpdateOperationsInput | string
  }

  export type TeamUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    photo?: StringFieldUpdateOperationsInput | string
    photoPublicId?: StringFieldUpdateOperationsInput | string
  }

  export type TestimonialsCreateInput = {
    name: string
    localizedContent: JsonNullValueInput | InputJsonValue
    photoUrl: string
    videoUrl: string
    altImage: JsonNullValueInput | InputJsonValue
    photoPublicId: string
    videoPublicId: string
  }

  export type TestimonialsUncheckedCreateInput = {
    id?: number
    name: string
    localizedContent: JsonNullValueInput | InputJsonValue
    photoUrl: string
    videoUrl: string
    altImage: JsonNullValueInput | InputJsonValue
    photoPublicId: string
    videoPublicId: string
  }

  export type TestimonialsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    localizedContent?: JsonNullValueInput | InputJsonValue
    photoUrl?: StringFieldUpdateOperationsInput | string
    videoUrl?: StringFieldUpdateOperationsInput | string
    altImage?: JsonNullValueInput | InputJsonValue
    photoPublicId?: StringFieldUpdateOperationsInput | string
    videoPublicId?: StringFieldUpdateOperationsInput | string
  }

  export type TestimonialsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    localizedContent?: JsonNullValueInput | InputJsonValue
    photoUrl?: StringFieldUpdateOperationsInput | string
    videoUrl?: StringFieldUpdateOperationsInput | string
    altImage?: JsonNullValueInput | InputJsonValue
    photoPublicId?: StringFieldUpdateOperationsInput | string
    videoPublicId?: StringFieldUpdateOperationsInput | string
  }

  export type TestimonialsCreateManyInput = {
    id?: number
    name: string
    localizedContent: JsonNullValueInput | InputJsonValue
    photoUrl: string
    videoUrl: string
    altImage: JsonNullValueInput | InputJsonValue
    photoPublicId: string
    videoPublicId: string
  }

  export type TestimonialsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    localizedContent?: JsonNullValueInput | InputJsonValue
    photoUrl?: StringFieldUpdateOperationsInput | string
    videoUrl?: StringFieldUpdateOperationsInput | string
    altImage?: JsonNullValueInput | InputJsonValue
    photoPublicId?: StringFieldUpdateOperationsInput | string
    videoPublicId?: StringFieldUpdateOperationsInput | string
  }

  export type TestimonialsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    localizedContent?: JsonNullValueInput | InputJsonValue
    photoUrl?: StringFieldUpdateOperationsInput | string
    videoUrl?: StringFieldUpdateOperationsInput | string
    altImage?: JsonNullValueInput | InputJsonValue
    photoPublicId?: StringFieldUpdateOperationsInput | string
    videoPublicId?: StringFieldUpdateOperationsInput | string
  }

  export type RequestsCreateInput = {
    name: string
    number: string
    about: string
    heardFrom: $Enums.hearFrom
    createdAt?: Date | string
  }

  export type RequestsUncheckedCreateInput = {
    id?: number
    name: string
    number: string
    about: string
    heardFrom: $Enums.hearFrom
    createdAt?: Date | string
  }

  export type RequestsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    heardFrom?: EnumhearFromFieldUpdateOperationsInput | $Enums.hearFrom
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RequestsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    heardFrom?: EnumhearFromFieldUpdateOperationsInput | $Enums.hearFrom
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RequestsCreateManyInput = {
    id?: number
    name: string
    number: string
    about: string
    heardFrom: $Enums.hearFrom
    createdAt?: Date | string
  }

  export type RequestsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    heardFrom?: EnumhearFromFieldUpdateOperationsInput | $Enums.hearFrom
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RequestsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    heardFrom?: EnumhearFromFieldUpdateOperationsInput | $Enums.hearFrom
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactInfoCreateInput = {
    id?: number
    phone?: string
    phone2?: string
    email?: string
    addressUz?: string
    addressRu?: string
    instagram?: string
    telegram?: string
    youtube?: string
    facebook?: string
    mapUrl?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContactInfoUncheckedCreateInput = {
    id?: number
    phone?: string
    phone2?: string
    email?: string
    addressUz?: string
    addressRu?: string
    instagram?: string
    telegram?: string
    youtube?: string
    facebook?: string
    mapUrl?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContactInfoUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    phone?: StringFieldUpdateOperationsInput | string
    phone2?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    addressUz?: StringFieldUpdateOperationsInput | string
    addressRu?: StringFieldUpdateOperationsInput | string
    instagram?: StringFieldUpdateOperationsInput | string
    telegram?: StringFieldUpdateOperationsInput | string
    youtube?: StringFieldUpdateOperationsInput | string
    facebook?: StringFieldUpdateOperationsInput | string
    mapUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactInfoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    phone?: StringFieldUpdateOperationsInput | string
    phone2?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    addressUz?: StringFieldUpdateOperationsInput | string
    addressRu?: StringFieldUpdateOperationsInput | string
    instagram?: StringFieldUpdateOperationsInput | string
    telegram?: StringFieldUpdateOperationsInput | string
    youtube?: StringFieldUpdateOperationsInput | string
    facebook?: StringFieldUpdateOperationsInput | string
    mapUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactInfoCreateManyInput = {
    id?: number
    phone?: string
    phone2?: string
    email?: string
    addressUz?: string
    addressRu?: string
    instagram?: string
    telegram?: string
    youtube?: string
    facebook?: string
    mapUrl?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContactInfoUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    phone?: StringFieldUpdateOperationsInput | string
    phone2?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    addressUz?: StringFieldUpdateOperationsInput | string
    addressRu?: StringFieldUpdateOperationsInput | string
    instagram?: StringFieldUpdateOperationsInput | string
    telegram?: StringFieldUpdateOperationsInput | string
    youtube?: StringFieldUpdateOperationsInput | string
    facebook?: StringFieldUpdateOperationsInput | string
    mapUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactInfoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    phone?: StringFieldUpdateOperationsInput | string
    phone2?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    addressUz?: StringFieldUpdateOperationsInput | string
    addressRu?: StringFieldUpdateOperationsInput | string
    instagram?: StringFieldUpdateOperationsInput | string
    telegram?: StringFieldUpdateOperationsInput | string
    youtube?: StringFieldUpdateOperationsInput | string
    facebook?: StringFieldUpdateOperationsInput | string
    mapUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type AdminOrderByRelevanceInput = {
    fields: AdminOrderByRelevanceFieldEnum | AdminOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AdminCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type AdminAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AdminMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type AdminMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type AdminSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type ServicesOrderByRelevanceInput = {
    fields: ServicesOrderByRelevanceFieldEnum | ServicesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ServicesCountOrderByAggregateInput = {
    id?: SortOrder
    icon?: SortOrder
    iconPublicId?: SortOrder
    localeData?: SortOrder
  }

  export type ServicesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ServicesMaxOrderByAggregateInput = {
    id?: SortOrder
    icon?: SortOrder
    iconPublicId?: SortOrder
  }

  export type ServicesMinOrderByAggregateInput = {
    id?: SortOrder
    icon?: SortOrder
    iconPublicId?: SortOrder
  }

  export type ServicesSumOrderByAggregateInput = {
    id?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type CoverImageNullableScalarRelationFilter = {
    is?: CoverImageWhereInput | null
    isNot?: CoverImageWhereInput | null
  }

  export type ProjectCategoryScalarRelationFilter = {
    is?: ProjectCategoryWhereInput
    isNot?: ProjectCategoryWhereInput
  }

  export type ProjectGalleryListRelationFilter = {
    every?: ProjectGalleryWhereInput
    some?: ProjectGalleryWhereInput
    none?: ProjectGalleryWhereInput
  }

  export type ProjectGalleryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectsOrderByRelevanceInput = {
    fields: ProjectsOrderByRelevanceFieldEnum | ProjectsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ProjectsCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    categoryId?: SortOrder
    slug?: SortOrder
    status?: SortOrder
    localizedContent?: SortOrder
    facts?: SortOrder
    design?: SortOrder
  }

  export type ProjectsAvgOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
  }

  export type ProjectsMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    categoryId?: SortOrder
    slug?: SortOrder
    status?: SortOrder
  }

  export type ProjectsMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    categoryId?: SortOrder
    slug?: SortOrder
    status?: SortOrder
  }

  export type ProjectsSumOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
  }

  export type ProjectsListRelationFilter = {
    every?: ProjectsWhereInput
    some?: ProjectsWhereInput
    none?: ProjectsWhereInput
  }

  export type ProjectsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectCategoryOrderByRelevanceInput = {
    fields: ProjectCategoryOrderByRelevanceFieldEnum | ProjectCategoryOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ProjectCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
  }

  export type ProjectCategoryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ProjectCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
  }

  export type ProjectCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
  }

  export type ProjectCategorySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type ProjectsScalarRelationFilter = {
    is?: ProjectsWhereInput
    isNot?: ProjectsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CoverImageOrderByRelevanceInput = {
    fields: CoverImageOrderByRelevanceFieldEnum | CoverImageOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CoverImageCountOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    image_light?: SortOrder
    image_dark?: SortOrder
    imageLightPublicId?: SortOrder
    imageDarkPublicId?: SortOrder
    image_alt?: SortOrder
  }

  export type CoverImageAvgOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
  }

  export type CoverImageMaxOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    image_light?: SortOrder
    image_dark?: SortOrder
    imageLightPublicId?: SortOrder
    imageDarkPublicId?: SortOrder
  }

  export type CoverImageMinOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    image_light?: SortOrder
    image_dark?: SortOrder
    imageLightPublicId?: SortOrder
    imageDarkPublicId?: SortOrder
  }

  export type CoverImageSumOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type ProjectGalleryOrderByRelevanceInput = {
    fields: ProjectGalleryOrderByRelevanceFieldEnum | ProjectGalleryOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ProjectGalleryCountOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    image?: SortOrder
    imagePublicId?: SortOrder
    image_alt?: SortOrder
  }

  export type ProjectGalleryAvgOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
  }

  export type ProjectGalleryMaxOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    image?: SortOrder
    imagePublicId?: SortOrder
  }

  export type ProjectGalleryMinOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    image?: SortOrder
    imagePublicId?: SortOrder
  }

  export type ProjectGallerySumOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
  }

  export type TeamOrderByRelevanceInput = {
    fields: TeamOrderByRelevanceFieldEnum | TeamOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type TeamCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    role?: SortOrder
    photo?: SortOrder
    photoPublicId?: SortOrder
  }

  export type TeamAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TeamMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    role?: SortOrder
    photo?: SortOrder
    photoPublicId?: SortOrder
  }

  export type TeamMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    role?: SortOrder
    photo?: SortOrder
    photoPublicId?: SortOrder
  }

  export type TeamSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TestimonialsOrderByRelevanceInput = {
    fields: TestimonialsOrderByRelevanceFieldEnum | TestimonialsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type TestimonialsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    localizedContent?: SortOrder
    photoUrl?: SortOrder
    videoUrl?: SortOrder
    altImage?: SortOrder
    photoPublicId?: SortOrder
    videoPublicId?: SortOrder
  }

  export type TestimonialsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TestimonialsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    photoUrl?: SortOrder
    videoUrl?: SortOrder
    photoPublicId?: SortOrder
    videoPublicId?: SortOrder
  }

  export type TestimonialsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    photoUrl?: SortOrder
    videoUrl?: SortOrder
    photoPublicId?: SortOrder
    videoPublicId?: SortOrder
  }

  export type TestimonialsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumhearFromFilter<$PrismaModel = never> = {
    equals?: $Enums.hearFrom | EnumhearFromFieldRefInput<$PrismaModel>
    in?: $Enums.hearFrom[]
    notIn?: $Enums.hearFrom[]
    not?: NestedEnumhearFromFilter<$PrismaModel> | $Enums.hearFrom
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type RequestsOrderByRelevanceInput = {
    fields: RequestsOrderByRelevanceFieldEnum | RequestsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type RequestsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    number?: SortOrder
    about?: SortOrder
    heardFrom?: SortOrder
    createdAt?: SortOrder
  }

  export type RequestsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RequestsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    number?: SortOrder
    about?: SortOrder
    heardFrom?: SortOrder
    createdAt?: SortOrder
  }

  export type RequestsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    number?: SortOrder
    about?: SortOrder
    heardFrom?: SortOrder
    createdAt?: SortOrder
  }

  export type RequestsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumhearFromWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.hearFrom | EnumhearFromFieldRefInput<$PrismaModel>
    in?: $Enums.hearFrom[]
    notIn?: $Enums.hearFrom[]
    not?: NestedEnumhearFromWithAggregatesFilter<$PrismaModel> | $Enums.hearFrom
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumhearFromFilter<$PrismaModel>
    _max?: NestedEnumhearFromFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type ContactInfoOrderByRelevanceInput = {
    fields: ContactInfoOrderByRelevanceFieldEnum | ContactInfoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ContactInfoCountOrderByAggregateInput = {
    id?: SortOrder
    phone?: SortOrder
    phone2?: SortOrder
    email?: SortOrder
    addressUz?: SortOrder
    addressRu?: SortOrder
    instagram?: SortOrder
    telegram?: SortOrder
    youtube?: SortOrder
    facebook?: SortOrder
    mapUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContactInfoAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ContactInfoMaxOrderByAggregateInput = {
    id?: SortOrder
    phone?: SortOrder
    phone2?: SortOrder
    email?: SortOrder
    addressUz?: SortOrder
    addressRu?: SortOrder
    instagram?: SortOrder
    telegram?: SortOrder
    youtube?: SortOrder
    facebook?: SortOrder
    mapUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContactInfoMinOrderByAggregateInput = {
    id?: SortOrder
    phone?: SortOrder
    phone2?: SortOrder
    email?: SortOrder
    addressUz?: SortOrder
    addressRu?: SortOrder
    instagram?: SortOrder
    telegram?: SortOrder
    youtube?: SortOrder
    facebook?: SortOrder
    mapUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContactInfoSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CoverImageCreateNestedOneWithoutProjectInput = {
    create?: XOR<CoverImageCreateWithoutProjectInput, CoverImageUncheckedCreateWithoutProjectInput>
    connectOrCreate?: CoverImageCreateOrConnectWithoutProjectInput
    connect?: CoverImageWhereUniqueInput
  }

  export type ProjectCategoryCreateNestedOneWithoutProjectsInput = {
    create?: XOR<ProjectCategoryCreateWithoutProjectsInput, ProjectCategoryUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: ProjectCategoryCreateOrConnectWithoutProjectsInput
    connect?: ProjectCategoryWhereUniqueInput
  }

  export type ProjectGalleryCreateNestedManyWithoutProjectInput = {
    create?: XOR<ProjectGalleryCreateWithoutProjectInput, ProjectGalleryUncheckedCreateWithoutProjectInput> | ProjectGalleryCreateWithoutProjectInput[] | ProjectGalleryUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectGalleryCreateOrConnectWithoutProjectInput | ProjectGalleryCreateOrConnectWithoutProjectInput[]
    createMany?: ProjectGalleryCreateManyProjectInputEnvelope
    connect?: ProjectGalleryWhereUniqueInput | ProjectGalleryWhereUniqueInput[]
  }

  export type CoverImageUncheckedCreateNestedOneWithoutProjectInput = {
    create?: XOR<CoverImageCreateWithoutProjectInput, CoverImageUncheckedCreateWithoutProjectInput>
    connectOrCreate?: CoverImageCreateOrConnectWithoutProjectInput
    connect?: CoverImageWhereUniqueInput
  }

  export type ProjectGalleryUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<ProjectGalleryCreateWithoutProjectInput, ProjectGalleryUncheckedCreateWithoutProjectInput> | ProjectGalleryCreateWithoutProjectInput[] | ProjectGalleryUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectGalleryCreateOrConnectWithoutProjectInput | ProjectGalleryCreateOrConnectWithoutProjectInput[]
    createMany?: ProjectGalleryCreateManyProjectInputEnvelope
    connect?: ProjectGalleryWhereUniqueInput | ProjectGalleryWhereUniqueInput[]
  }

  export type CoverImageUpdateOneWithoutProjectNestedInput = {
    create?: XOR<CoverImageCreateWithoutProjectInput, CoverImageUncheckedCreateWithoutProjectInput>
    connectOrCreate?: CoverImageCreateOrConnectWithoutProjectInput
    upsert?: CoverImageUpsertWithoutProjectInput
    disconnect?: CoverImageWhereInput | boolean
    delete?: CoverImageWhereInput | boolean
    connect?: CoverImageWhereUniqueInput
    update?: XOR<XOR<CoverImageUpdateToOneWithWhereWithoutProjectInput, CoverImageUpdateWithoutProjectInput>, CoverImageUncheckedUpdateWithoutProjectInput>
  }

  export type ProjectCategoryUpdateOneRequiredWithoutProjectsNestedInput = {
    create?: XOR<ProjectCategoryCreateWithoutProjectsInput, ProjectCategoryUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: ProjectCategoryCreateOrConnectWithoutProjectsInput
    upsert?: ProjectCategoryUpsertWithoutProjectsInput
    connect?: ProjectCategoryWhereUniqueInput
    update?: XOR<XOR<ProjectCategoryUpdateToOneWithWhereWithoutProjectsInput, ProjectCategoryUpdateWithoutProjectsInput>, ProjectCategoryUncheckedUpdateWithoutProjectsInput>
  }

  export type ProjectGalleryUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ProjectGalleryCreateWithoutProjectInput, ProjectGalleryUncheckedCreateWithoutProjectInput> | ProjectGalleryCreateWithoutProjectInput[] | ProjectGalleryUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectGalleryCreateOrConnectWithoutProjectInput | ProjectGalleryCreateOrConnectWithoutProjectInput[]
    upsert?: ProjectGalleryUpsertWithWhereUniqueWithoutProjectInput | ProjectGalleryUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ProjectGalleryCreateManyProjectInputEnvelope
    set?: ProjectGalleryWhereUniqueInput | ProjectGalleryWhereUniqueInput[]
    disconnect?: ProjectGalleryWhereUniqueInput | ProjectGalleryWhereUniqueInput[]
    delete?: ProjectGalleryWhereUniqueInput | ProjectGalleryWhereUniqueInput[]
    connect?: ProjectGalleryWhereUniqueInput | ProjectGalleryWhereUniqueInput[]
    update?: ProjectGalleryUpdateWithWhereUniqueWithoutProjectInput | ProjectGalleryUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ProjectGalleryUpdateManyWithWhereWithoutProjectInput | ProjectGalleryUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ProjectGalleryScalarWhereInput | ProjectGalleryScalarWhereInput[]
  }

  export type CoverImageUncheckedUpdateOneWithoutProjectNestedInput = {
    create?: XOR<CoverImageCreateWithoutProjectInput, CoverImageUncheckedCreateWithoutProjectInput>
    connectOrCreate?: CoverImageCreateOrConnectWithoutProjectInput
    upsert?: CoverImageUpsertWithoutProjectInput
    disconnect?: CoverImageWhereInput | boolean
    delete?: CoverImageWhereInput | boolean
    connect?: CoverImageWhereUniqueInput
    update?: XOR<XOR<CoverImageUpdateToOneWithWhereWithoutProjectInput, CoverImageUpdateWithoutProjectInput>, CoverImageUncheckedUpdateWithoutProjectInput>
  }

  export type ProjectGalleryUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ProjectGalleryCreateWithoutProjectInput, ProjectGalleryUncheckedCreateWithoutProjectInput> | ProjectGalleryCreateWithoutProjectInput[] | ProjectGalleryUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectGalleryCreateOrConnectWithoutProjectInput | ProjectGalleryCreateOrConnectWithoutProjectInput[]
    upsert?: ProjectGalleryUpsertWithWhereUniqueWithoutProjectInput | ProjectGalleryUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ProjectGalleryCreateManyProjectInputEnvelope
    set?: ProjectGalleryWhereUniqueInput | ProjectGalleryWhereUniqueInput[]
    disconnect?: ProjectGalleryWhereUniqueInput | ProjectGalleryWhereUniqueInput[]
    delete?: ProjectGalleryWhereUniqueInput | ProjectGalleryWhereUniqueInput[]
    connect?: ProjectGalleryWhereUniqueInput | ProjectGalleryWhereUniqueInput[]
    update?: ProjectGalleryUpdateWithWhereUniqueWithoutProjectInput | ProjectGalleryUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ProjectGalleryUpdateManyWithWhereWithoutProjectInput | ProjectGalleryUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ProjectGalleryScalarWhereInput | ProjectGalleryScalarWhereInput[]
  }

  export type ProjectsCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ProjectsCreateWithoutCategoryInput, ProjectsUncheckedCreateWithoutCategoryInput> | ProjectsCreateWithoutCategoryInput[] | ProjectsUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProjectsCreateOrConnectWithoutCategoryInput | ProjectsCreateOrConnectWithoutCategoryInput[]
    createMany?: ProjectsCreateManyCategoryInputEnvelope
    connect?: ProjectsWhereUniqueInput | ProjectsWhereUniqueInput[]
  }

  export type ProjectsUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ProjectsCreateWithoutCategoryInput, ProjectsUncheckedCreateWithoutCategoryInput> | ProjectsCreateWithoutCategoryInput[] | ProjectsUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProjectsCreateOrConnectWithoutCategoryInput | ProjectsCreateOrConnectWithoutCategoryInput[]
    createMany?: ProjectsCreateManyCategoryInputEnvelope
    connect?: ProjectsWhereUniqueInput | ProjectsWhereUniqueInput[]
  }

  export type ProjectsUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ProjectsCreateWithoutCategoryInput, ProjectsUncheckedCreateWithoutCategoryInput> | ProjectsCreateWithoutCategoryInput[] | ProjectsUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProjectsCreateOrConnectWithoutCategoryInput | ProjectsCreateOrConnectWithoutCategoryInput[]
    upsert?: ProjectsUpsertWithWhereUniqueWithoutCategoryInput | ProjectsUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ProjectsCreateManyCategoryInputEnvelope
    set?: ProjectsWhereUniqueInput | ProjectsWhereUniqueInput[]
    disconnect?: ProjectsWhereUniqueInput | ProjectsWhereUniqueInput[]
    delete?: ProjectsWhereUniqueInput | ProjectsWhereUniqueInput[]
    connect?: ProjectsWhereUniqueInput | ProjectsWhereUniqueInput[]
    update?: ProjectsUpdateWithWhereUniqueWithoutCategoryInput | ProjectsUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ProjectsUpdateManyWithWhereWithoutCategoryInput | ProjectsUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ProjectsScalarWhereInput | ProjectsScalarWhereInput[]
  }

  export type ProjectsUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ProjectsCreateWithoutCategoryInput, ProjectsUncheckedCreateWithoutCategoryInput> | ProjectsCreateWithoutCategoryInput[] | ProjectsUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProjectsCreateOrConnectWithoutCategoryInput | ProjectsCreateOrConnectWithoutCategoryInput[]
    upsert?: ProjectsUpsertWithWhereUniqueWithoutCategoryInput | ProjectsUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ProjectsCreateManyCategoryInputEnvelope
    set?: ProjectsWhereUniqueInput | ProjectsWhereUniqueInput[]
    disconnect?: ProjectsWhereUniqueInput | ProjectsWhereUniqueInput[]
    delete?: ProjectsWhereUniqueInput | ProjectsWhereUniqueInput[]
    connect?: ProjectsWhereUniqueInput | ProjectsWhereUniqueInput[]
    update?: ProjectsUpdateWithWhereUniqueWithoutCategoryInput | ProjectsUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ProjectsUpdateManyWithWhereWithoutCategoryInput | ProjectsUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ProjectsScalarWhereInput | ProjectsScalarWhereInput[]
  }

  export type ProjectsCreateNestedOneWithoutCoverImageInput = {
    create?: XOR<ProjectsCreateWithoutCoverImageInput, ProjectsUncheckedCreateWithoutCoverImageInput>
    connectOrCreate?: ProjectsCreateOrConnectWithoutCoverImageInput
    connect?: ProjectsWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type ProjectsUpdateOneRequiredWithoutCoverImageNestedInput = {
    create?: XOR<ProjectsCreateWithoutCoverImageInput, ProjectsUncheckedCreateWithoutCoverImageInput>
    connectOrCreate?: ProjectsCreateOrConnectWithoutCoverImageInput
    upsert?: ProjectsUpsertWithoutCoverImageInput
    connect?: ProjectsWhereUniqueInput
    update?: XOR<XOR<ProjectsUpdateToOneWithWhereWithoutCoverImageInput, ProjectsUpdateWithoutCoverImageInput>, ProjectsUncheckedUpdateWithoutCoverImageInput>
  }

  export type ProjectsCreateNestedOneWithoutGalleryInput = {
    create?: XOR<ProjectsCreateWithoutGalleryInput, ProjectsUncheckedCreateWithoutGalleryInput>
    connectOrCreate?: ProjectsCreateOrConnectWithoutGalleryInput
    connect?: ProjectsWhereUniqueInput
  }

  export type ProjectsUpdateOneRequiredWithoutGalleryNestedInput = {
    create?: XOR<ProjectsCreateWithoutGalleryInput, ProjectsUncheckedCreateWithoutGalleryInput>
    connectOrCreate?: ProjectsCreateOrConnectWithoutGalleryInput
    upsert?: ProjectsUpsertWithoutGalleryInput
    connect?: ProjectsWhereUniqueInput
    update?: XOR<XOR<ProjectsUpdateToOneWithWhereWithoutGalleryInput, ProjectsUpdateWithoutGalleryInput>, ProjectsUncheckedUpdateWithoutGalleryInput>
  }

  export type EnumhearFromFieldUpdateOperationsInput = {
    set?: $Enums.hearFrom
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumhearFromFilter<$PrismaModel = never> = {
    equals?: $Enums.hearFrom | EnumhearFromFieldRefInput<$PrismaModel>
    in?: $Enums.hearFrom[]
    notIn?: $Enums.hearFrom[]
    not?: NestedEnumhearFromFilter<$PrismaModel> | $Enums.hearFrom
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedEnumhearFromWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.hearFrom | EnumhearFromFieldRefInput<$PrismaModel>
    in?: $Enums.hearFrom[]
    notIn?: $Enums.hearFrom[]
    not?: NestedEnumhearFromWithAggregatesFilter<$PrismaModel> | $Enums.hearFrom
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumhearFromFilter<$PrismaModel>
    _max?: NestedEnumhearFromFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type CoverImageCreateWithoutProjectInput = {
    image_light: string
    image_dark: string
    imageLightPublicId?: string | null
    imageDarkPublicId?: string | null
    image_alt: JsonNullValueInput | InputJsonValue
  }

  export type CoverImageUncheckedCreateWithoutProjectInput = {
    id?: number
    image_light: string
    image_dark: string
    imageLightPublicId?: string | null
    imageDarkPublicId?: string | null
    image_alt: JsonNullValueInput | InputJsonValue
  }

  export type CoverImageCreateOrConnectWithoutProjectInput = {
    where: CoverImageWhereUniqueInput
    create: XOR<CoverImageCreateWithoutProjectInput, CoverImageUncheckedCreateWithoutProjectInput>
  }

  export type ProjectCategoryCreateWithoutProjectsInput = {
    title: string
  }

  export type ProjectCategoryUncheckedCreateWithoutProjectsInput = {
    id?: number
    title: string
  }

  export type ProjectCategoryCreateOrConnectWithoutProjectsInput = {
    where: ProjectCategoryWhereUniqueInput
    create: XOR<ProjectCategoryCreateWithoutProjectsInput, ProjectCategoryUncheckedCreateWithoutProjectsInput>
  }

  export type ProjectGalleryCreateWithoutProjectInput = {
    image: string
    imagePublicId?: string | null
    image_alt: JsonNullValueInput | InputJsonValue
  }

  export type ProjectGalleryUncheckedCreateWithoutProjectInput = {
    id?: number
    image: string
    imagePublicId?: string | null
    image_alt: JsonNullValueInput | InputJsonValue
  }

  export type ProjectGalleryCreateOrConnectWithoutProjectInput = {
    where: ProjectGalleryWhereUniqueInput
    create: XOR<ProjectGalleryCreateWithoutProjectInput, ProjectGalleryUncheckedCreateWithoutProjectInput>
  }

  export type ProjectGalleryCreateManyProjectInputEnvelope = {
    data: ProjectGalleryCreateManyProjectInput | ProjectGalleryCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type CoverImageUpsertWithoutProjectInput = {
    update: XOR<CoverImageUpdateWithoutProjectInput, CoverImageUncheckedUpdateWithoutProjectInput>
    create: XOR<CoverImageCreateWithoutProjectInput, CoverImageUncheckedCreateWithoutProjectInput>
    where?: CoverImageWhereInput
  }

  export type CoverImageUpdateToOneWithWhereWithoutProjectInput = {
    where?: CoverImageWhereInput
    data: XOR<CoverImageUpdateWithoutProjectInput, CoverImageUncheckedUpdateWithoutProjectInput>
  }

  export type CoverImageUpdateWithoutProjectInput = {
    image_light?: StringFieldUpdateOperationsInput | string
    image_dark?: StringFieldUpdateOperationsInput | string
    imageLightPublicId?: NullableStringFieldUpdateOperationsInput | string | null
    imageDarkPublicId?: NullableStringFieldUpdateOperationsInput | string | null
    image_alt?: JsonNullValueInput | InputJsonValue
  }

  export type CoverImageUncheckedUpdateWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    image_light?: StringFieldUpdateOperationsInput | string
    image_dark?: StringFieldUpdateOperationsInput | string
    imageLightPublicId?: NullableStringFieldUpdateOperationsInput | string | null
    imageDarkPublicId?: NullableStringFieldUpdateOperationsInput | string | null
    image_alt?: JsonNullValueInput | InputJsonValue
  }

  export type ProjectCategoryUpsertWithoutProjectsInput = {
    update: XOR<ProjectCategoryUpdateWithoutProjectsInput, ProjectCategoryUncheckedUpdateWithoutProjectsInput>
    create: XOR<ProjectCategoryCreateWithoutProjectsInput, ProjectCategoryUncheckedCreateWithoutProjectsInput>
    where?: ProjectCategoryWhereInput
  }

  export type ProjectCategoryUpdateToOneWithWhereWithoutProjectsInput = {
    where?: ProjectCategoryWhereInput
    data: XOR<ProjectCategoryUpdateWithoutProjectsInput, ProjectCategoryUncheckedUpdateWithoutProjectsInput>
  }

  export type ProjectCategoryUpdateWithoutProjectsInput = {
    title?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectCategoryUncheckedUpdateWithoutProjectsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectGalleryUpsertWithWhereUniqueWithoutProjectInput = {
    where: ProjectGalleryWhereUniqueInput
    update: XOR<ProjectGalleryUpdateWithoutProjectInput, ProjectGalleryUncheckedUpdateWithoutProjectInput>
    create: XOR<ProjectGalleryCreateWithoutProjectInput, ProjectGalleryUncheckedCreateWithoutProjectInput>
  }

  export type ProjectGalleryUpdateWithWhereUniqueWithoutProjectInput = {
    where: ProjectGalleryWhereUniqueInput
    data: XOR<ProjectGalleryUpdateWithoutProjectInput, ProjectGalleryUncheckedUpdateWithoutProjectInput>
  }

  export type ProjectGalleryUpdateManyWithWhereWithoutProjectInput = {
    where: ProjectGalleryScalarWhereInput
    data: XOR<ProjectGalleryUpdateManyMutationInput, ProjectGalleryUncheckedUpdateManyWithoutProjectInput>
  }

  export type ProjectGalleryScalarWhereInput = {
    AND?: ProjectGalleryScalarWhereInput | ProjectGalleryScalarWhereInput[]
    OR?: ProjectGalleryScalarWhereInput[]
    NOT?: ProjectGalleryScalarWhereInput | ProjectGalleryScalarWhereInput[]
    id?: IntFilter<"ProjectGallery"> | number
    projectId?: IntFilter<"ProjectGallery"> | number
    image?: StringFilter<"ProjectGallery"> | string
    imagePublicId?: StringNullableFilter<"ProjectGallery"> | string | null
    image_alt?: JsonFilter<"ProjectGallery">
  }

  export type ProjectsCreateWithoutCategoryInput = {
    title: string
    slug: string
    status?: string
    localizedContent: JsonNullValueInput | InputJsonValue
    facts: JsonNullValueInput | InputJsonValue
    design: JsonNullValueInput | InputJsonValue
    coverImage?: CoverImageCreateNestedOneWithoutProjectInput
    gallery?: ProjectGalleryCreateNestedManyWithoutProjectInput
  }

  export type ProjectsUncheckedCreateWithoutCategoryInput = {
    id?: number
    title: string
    slug: string
    status?: string
    localizedContent: JsonNullValueInput | InputJsonValue
    facts: JsonNullValueInput | InputJsonValue
    design: JsonNullValueInput | InputJsonValue
    coverImage?: CoverImageUncheckedCreateNestedOneWithoutProjectInput
    gallery?: ProjectGalleryUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectsCreateOrConnectWithoutCategoryInput = {
    where: ProjectsWhereUniqueInput
    create: XOR<ProjectsCreateWithoutCategoryInput, ProjectsUncheckedCreateWithoutCategoryInput>
  }

  export type ProjectsCreateManyCategoryInputEnvelope = {
    data: ProjectsCreateManyCategoryInput | ProjectsCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type ProjectsUpsertWithWhereUniqueWithoutCategoryInput = {
    where: ProjectsWhereUniqueInput
    update: XOR<ProjectsUpdateWithoutCategoryInput, ProjectsUncheckedUpdateWithoutCategoryInput>
    create: XOR<ProjectsCreateWithoutCategoryInput, ProjectsUncheckedCreateWithoutCategoryInput>
  }

  export type ProjectsUpdateWithWhereUniqueWithoutCategoryInput = {
    where: ProjectsWhereUniqueInput
    data: XOR<ProjectsUpdateWithoutCategoryInput, ProjectsUncheckedUpdateWithoutCategoryInput>
  }

  export type ProjectsUpdateManyWithWhereWithoutCategoryInput = {
    where: ProjectsScalarWhereInput
    data: XOR<ProjectsUpdateManyMutationInput, ProjectsUncheckedUpdateManyWithoutCategoryInput>
  }

  export type ProjectsScalarWhereInput = {
    AND?: ProjectsScalarWhereInput | ProjectsScalarWhereInput[]
    OR?: ProjectsScalarWhereInput[]
    NOT?: ProjectsScalarWhereInput | ProjectsScalarWhereInput[]
    id?: IntFilter<"Projects"> | number
    title?: StringFilter<"Projects"> | string
    categoryId?: IntFilter<"Projects"> | number
    slug?: StringFilter<"Projects"> | string
    status?: StringFilter<"Projects"> | string
    localizedContent?: JsonFilter<"Projects">
    facts?: JsonFilter<"Projects">
    design?: JsonFilter<"Projects">
  }

  export type ProjectsCreateWithoutCoverImageInput = {
    title: string
    slug: string
    status?: string
    localizedContent: JsonNullValueInput | InputJsonValue
    facts: JsonNullValueInput | InputJsonValue
    design: JsonNullValueInput | InputJsonValue
    category: ProjectCategoryCreateNestedOneWithoutProjectsInput
    gallery?: ProjectGalleryCreateNestedManyWithoutProjectInput
  }

  export type ProjectsUncheckedCreateWithoutCoverImageInput = {
    id?: number
    title: string
    categoryId: number
    slug: string
    status?: string
    localizedContent: JsonNullValueInput | InputJsonValue
    facts: JsonNullValueInput | InputJsonValue
    design: JsonNullValueInput | InputJsonValue
    gallery?: ProjectGalleryUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectsCreateOrConnectWithoutCoverImageInput = {
    where: ProjectsWhereUniqueInput
    create: XOR<ProjectsCreateWithoutCoverImageInput, ProjectsUncheckedCreateWithoutCoverImageInput>
  }

  export type ProjectsUpsertWithoutCoverImageInput = {
    update: XOR<ProjectsUpdateWithoutCoverImageInput, ProjectsUncheckedUpdateWithoutCoverImageInput>
    create: XOR<ProjectsCreateWithoutCoverImageInput, ProjectsUncheckedCreateWithoutCoverImageInput>
    where?: ProjectsWhereInput
  }

  export type ProjectsUpdateToOneWithWhereWithoutCoverImageInput = {
    where?: ProjectsWhereInput
    data: XOR<ProjectsUpdateWithoutCoverImageInput, ProjectsUncheckedUpdateWithoutCoverImageInput>
  }

  export type ProjectsUpdateWithoutCoverImageInput = {
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    localizedContent?: JsonNullValueInput | InputJsonValue
    facts?: JsonNullValueInput | InputJsonValue
    design?: JsonNullValueInput | InputJsonValue
    category?: ProjectCategoryUpdateOneRequiredWithoutProjectsNestedInput
    gallery?: ProjectGalleryUpdateManyWithoutProjectNestedInput
  }

  export type ProjectsUncheckedUpdateWithoutCoverImageInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    categoryId?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    localizedContent?: JsonNullValueInput | InputJsonValue
    facts?: JsonNullValueInput | InputJsonValue
    design?: JsonNullValueInput | InputJsonValue
    gallery?: ProjectGalleryUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectsCreateWithoutGalleryInput = {
    title: string
    slug: string
    status?: string
    localizedContent: JsonNullValueInput | InputJsonValue
    facts: JsonNullValueInput | InputJsonValue
    design: JsonNullValueInput | InputJsonValue
    coverImage?: CoverImageCreateNestedOneWithoutProjectInput
    category: ProjectCategoryCreateNestedOneWithoutProjectsInput
  }

  export type ProjectsUncheckedCreateWithoutGalleryInput = {
    id?: number
    title: string
    categoryId: number
    slug: string
    status?: string
    localizedContent: JsonNullValueInput | InputJsonValue
    facts: JsonNullValueInput | InputJsonValue
    design: JsonNullValueInput | InputJsonValue
    coverImage?: CoverImageUncheckedCreateNestedOneWithoutProjectInput
  }

  export type ProjectsCreateOrConnectWithoutGalleryInput = {
    where: ProjectsWhereUniqueInput
    create: XOR<ProjectsCreateWithoutGalleryInput, ProjectsUncheckedCreateWithoutGalleryInput>
  }

  export type ProjectsUpsertWithoutGalleryInput = {
    update: XOR<ProjectsUpdateWithoutGalleryInput, ProjectsUncheckedUpdateWithoutGalleryInput>
    create: XOR<ProjectsCreateWithoutGalleryInput, ProjectsUncheckedCreateWithoutGalleryInput>
    where?: ProjectsWhereInput
  }

  export type ProjectsUpdateToOneWithWhereWithoutGalleryInput = {
    where?: ProjectsWhereInput
    data: XOR<ProjectsUpdateWithoutGalleryInput, ProjectsUncheckedUpdateWithoutGalleryInput>
  }

  export type ProjectsUpdateWithoutGalleryInput = {
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    localizedContent?: JsonNullValueInput | InputJsonValue
    facts?: JsonNullValueInput | InputJsonValue
    design?: JsonNullValueInput | InputJsonValue
    coverImage?: CoverImageUpdateOneWithoutProjectNestedInput
    category?: ProjectCategoryUpdateOneRequiredWithoutProjectsNestedInput
  }

  export type ProjectsUncheckedUpdateWithoutGalleryInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    categoryId?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    localizedContent?: JsonNullValueInput | InputJsonValue
    facts?: JsonNullValueInput | InputJsonValue
    design?: JsonNullValueInput | InputJsonValue
    coverImage?: CoverImageUncheckedUpdateOneWithoutProjectNestedInput
  }

  export type ProjectGalleryCreateManyProjectInput = {
    id?: number
    image: string
    imagePublicId?: string | null
    image_alt: JsonNullValueInput | InputJsonValue
  }

  export type ProjectGalleryUpdateWithoutProjectInput = {
    image?: StringFieldUpdateOperationsInput | string
    imagePublicId?: NullableStringFieldUpdateOperationsInput | string | null
    image_alt?: JsonNullValueInput | InputJsonValue
  }

  export type ProjectGalleryUncheckedUpdateWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    imagePublicId?: NullableStringFieldUpdateOperationsInput | string | null
    image_alt?: JsonNullValueInput | InputJsonValue
  }

  export type ProjectGalleryUncheckedUpdateManyWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    imagePublicId?: NullableStringFieldUpdateOperationsInput | string | null
    image_alt?: JsonNullValueInput | InputJsonValue
  }

  export type ProjectsCreateManyCategoryInput = {
    id?: number
    title: string
    slug: string
    status?: string
    localizedContent: JsonNullValueInput | InputJsonValue
    facts: JsonNullValueInput | InputJsonValue
    design: JsonNullValueInput | InputJsonValue
  }

  export type ProjectsUpdateWithoutCategoryInput = {
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    localizedContent?: JsonNullValueInput | InputJsonValue
    facts?: JsonNullValueInput | InputJsonValue
    design?: JsonNullValueInput | InputJsonValue
    coverImage?: CoverImageUpdateOneWithoutProjectNestedInput
    gallery?: ProjectGalleryUpdateManyWithoutProjectNestedInput
  }

  export type ProjectsUncheckedUpdateWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    localizedContent?: JsonNullValueInput | InputJsonValue
    facts?: JsonNullValueInput | InputJsonValue
    design?: JsonNullValueInput | InputJsonValue
    coverImage?: CoverImageUncheckedUpdateOneWithoutProjectNestedInput
    gallery?: ProjectGalleryUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectsUncheckedUpdateManyWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    localizedContent?: JsonNullValueInput | InputJsonValue
    facts?: JsonNullValueInput | InputJsonValue
    design?: JsonNullValueInput | InputJsonValue
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