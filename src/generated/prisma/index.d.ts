
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Anime
 * 
 */
export type Anime = $Result.DefaultSelection<Prisma.$AnimePayload>
/**
 * Model Genre
 * 
 */
export type Genre = $Result.DefaultSelection<Prisma.$GenrePayload>
/**
 * Model Episode
 * 
 */
export type Episode = $Result.DefaultSelection<Prisma.$EpisodePayload>
/**
 * Model Mirror
 * 
 */
export type Mirror = $Result.DefaultSelection<Prisma.$MirrorPayload>
/**
 * Model StreamServer
 * 
 */
export type StreamServer = $Result.DefaultSelection<Prisma.$StreamServerPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const AnimeStatus: {
  ON_GOING: 'ON_GOING',
  COMPLETED: 'COMPLETED',
  UPCOMING: 'UPCOMING',
  PENDING: 'PENDING'
};

export type AnimeStatus = (typeof AnimeStatus)[keyof typeof AnimeStatus]


export const Resolution: {
  P320: 'P320',
  P480: 'P480',
  P720: 'P720'
};

export type Resolution = (typeof Resolution)[keyof typeof Resolution]

}

export type AnimeStatus = $Enums.AnimeStatus

export const AnimeStatus: typeof $Enums.AnimeStatus

export type Resolution = $Enums.Resolution

export const Resolution: typeof $Enums.Resolution

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

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
   * `prisma.anime`: Exposes CRUD operations for the **Anime** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Anime
    * const anime = await prisma.anime.findMany()
    * ```
    */
  get anime(): Prisma.AnimeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.genre`: Exposes CRUD operations for the **Genre** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Genres
    * const genres = await prisma.genre.findMany()
    * ```
    */
  get genre(): Prisma.GenreDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.episode`: Exposes CRUD operations for the **Episode** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Episodes
    * const episodes = await prisma.episode.findMany()
    * ```
    */
  get episode(): Prisma.EpisodeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mirror`: Exposes CRUD operations for the **Mirror** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Mirrors
    * const mirrors = await prisma.mirror.findMany()
    * ```
    */
  get mirror(): Prisma.MirrorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.streamServer`: Exposes CRUD operations for the **StreamServer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StreamServers
    * const streamServers = await prisma.streamServer.findMany()
    * ```
    */
  get streamServer(): Prisma.StreamServerDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
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
    User: 'User',
    Anime: 'Anime',
    Genre: 'Genre',
    Episode: 'Episode',
    Mirror: 'Mirror',
    StreamServer: 'StreamServer'
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
      modelProps: "user" | "anime" | "genre" | "episode" | "mirror" | "streamServer"
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
      Anime: {
        payload: Prisma.$AnimePayload<ExtArgs>
        fields: Prisma.AnimeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AnimeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AnimeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimePayload>
          }
          findFirst: {
            args: Prisma.AnimeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AnimeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimePayload>
          }
          findMany: {
            args: Prisma.AnimeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimePayload>[]
          }
          create: {
            args: Prisma.AnimeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimePayload>
          }
          createMany: {
            args: Prisma.AnimeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AnimeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimePayload>[]
          }
          delete: {
            args: Prisma.AnimeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimePayload>
          }
          update: {
            args: Prisma.AnimeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimePayload>
          }
          deleteMany: {
            args: Prisma.AnimeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AnimeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AnimeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimePayload>[]
          }
          upsert: {
            args: Prisma.AnimeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimePayload>
          }
          aggregate: {
            args: Prisma.AnimeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAnime>
          }
          groupBy: {
            args: Prisma.AnimeGroupByArgs<ExtArgs>
            result: $Utils.Optional<AnimeGroupByOutputType>[]
          }
          count: {
            args: Prisma.AnimeCountArgs<ExtArgs>
            result: $Utils.Optional<AnimeCountAggregateOutputType> | number
          }
        }
      }
      Genre: {
        payload: Prisma.$GenrePayload<ExtArgs>
        fields: Prisma.GenreFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GenreFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GenreFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>
          }
          findFirst: {
            args: Prisma.GenreFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GenreFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>
          }
          findMany: {
            args: Prisma.GenreFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>[]
          }
          create: {
            args: Prisma.GenreCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>
          }
          createMany: {
            args: Prisma.GenreCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GenreCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>[]
          }
          delete: {
            args: Prisma.GenreDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>
          }
          update: {
            args: Prisma.GenreUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>
          }
          deleteMany: {
            args: Prisma.GenreDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GenreUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GenreUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>[]
          }
          upsert: {
            args: Prisma.GenreUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>
          }
          aggregate: {
            args: Prisma.GenreAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGenre>
          }
          groupBy: {
            args: Prisma.GenreGroupByArgs<ExtArgs>
            result: $Utils.Optional<GenreGroupByOutputType>[]
          }
          count: {
            args: Prisma.GenreCountArgs<ExtArgs>
            result: $Utils.Optional<GenreCountAggregateOutputType> | number
          }
        }
      }
      Episode: {
        payload: Prisma.$EpisodePayload<ExtArgs>
        fields: Prisma.EpisodeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EpisodeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpisodePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EpisodeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpisodePayload>
          }
          findFirst: {
            args: Prisma.EpisodeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpisodePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EpisodeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpisodePayload>
          }
          findMany: {
            args: Prisma.EpisodeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpisodePayload>[]
          }
          create: {
            args: Prisma.EpisodeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpisodePayload>
          }
          createMany: {
            args: Prisma.EpisodeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EpisodeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpisodePayload>[]
          }
          delete: {
            args: Prisma.EpisodeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpisodePayload>
          }
          update: {
            args: Prisma.EpisodeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpisodePayload>
          }
          deleteMany: {
            args: Prisma.EpisodeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EpisodeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EpisodeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpisodePayload>[]
          }
          upsert: {
            args: Prisma.EpisodeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpisodePayload>
          }
          aggregate: {
            args: Prisma.EpisodeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEpisode>
          }
          groupBy: {
            args: Prisma.EpisodeGroupByArgs<ExtArgs>
            result: $Utils.Optional<EpisodeGroupByOutputType>[]
          }
          count: {
            args: Prisma.EpisodeCountArgs<ExtArgs>
            result: $Utils.Optional<EpisodeCountAggregateOutputType> | number
          }
        }
      }
      Mirror: {
        payload: Prisma.$MirrorPayload<ExtArgs>
        fields: Prisma.MirrorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MirrorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MirrorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MirrorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MirrorPayload>
          }
          findFirst: {
            args: Prisma.MirrorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MirrorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MirrorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MirrorPayload>
          }
          findMany: {
            args: Prisma.MirrorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MirrorPayload>[]
          }
          create: {
            args: Prisma.MirrorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MirrorPayload>
          }
          createMany: {
            args: Prisma.MirrorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MirrorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MirrorPayload>[]
          }
          delete: {
            args: Prisma.MirrorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MirrorPayload>
          }
          update: {
            args: Prisma.MirrorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MirrorPayload>
          }
          deleteMany: {
            args: Prisma.MirrorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MirrorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MirrorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MirrorPayload>[]
          }
          upsert: {
            args: Prisma.MirrorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MirrorPayload>
          }
          aggregate: {
            args: Prisma.MirrorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMirror>
          }
          groupBy: {
            args: Prisma.MirrorGroupByArgs<ExtArgs>
            result: $Utils.Optional<MirrorGroupByOutputType>[]
          }
          count: {
            args: Prisma.MirrorCountArgs<ExtArgs>
            result: $Utils.Optional<MirrorCountAggregateOutputType> | number
          }
        }
      }
      StreamServer: {
        payload: Prisma.$StreamServerPayload<ExtArgs>
        fields: Prisma.StreamServerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StreamServerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamServerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StreamServerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamServerPayload>
          }
          findFirst: {
            args: Prisma.StreamServerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamServerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StreamServerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamServerPayload>
          }
          findMany: {
            args: Prisma.StreamServerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamServerPayload>[]
          }
          create: {
            args: Prisma.StreamServerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamServerPayload>
          }
          createMany: {
            args: Prisma.StreamServerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StreamServerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamServerPayload>[]
          }
          delete: {
            args: Prisma.StreamServerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamServerPayload>
          }
          update: {
            args: Prisma.StreamServerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamServerPayload>
          }
          deleteMany: {
            args: Prisma.StreamServerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StreamServerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StreamServerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamServerPayload>[]
          }
          upsert: {
            args: Prisma.StreamServerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamServerPayload>
          }
          aggregate: {
            args: Prisma.StreamServerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStreamServer>
          }
          groupBy: {
            args: Prisma.StreamServerGroupByArgs<ExtArgs>
            result: $Utils.Optional<StreamServerGroupByOutputType>[]
          }
          count: {
            args: Prisma.StreamServerCountArgs<ExtArgs>
            result: $Utils.Optional<StreamServerCountAggregateOutputType> | number
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
    user?: UserOmit
    anime?: AnimeOmit
    genre?: GenreOmit
    episode?: EpisodeOmit
    mirror?: MirrorOmit
    streamServer?: StreamServerOmit
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
   * Count Type AnimeCountOutputType
   */

  export type AnimeCountOutputType = {
    genres: number
    episodes: number
  }

  export type AnimeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    genres?: boolean | AnimeCountOutputTypeCountGenresArgs
    episodes?: boolean | AnimeCountOutputTypeCountEpisodesArgs
  }

  // Custom InputTypes
  /**
   * AnimeCountOutputType without action
   */
  export type AnimeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnimeCountOutputType
     */
    select?: AnimeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AnimeCountOutputType without action
   */
  export type AnimeCountOutputTypeCountGenresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GenreWhereInput
  }

  /**
   * AnimeCountOutputType without action
   */
  export type AnimeCountOutputTypeCountEpisodesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EpisodeWhereInput
  }


  /**
   * Count Type GenreCountOutputType
   */

  export type GenreCountOutputType = {
    animes: number
  }

  export type GenreCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    animes?: boolean | GenreCountOutputTypeCountAnimesArgs
  }

  // Custom InputTypes
  /**
   * GenreCountOutputType without action
   */
  export type GenreCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GenreCountOutputType
     */
    select?: GenreCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GenreCountOutputType without action
   */
  export type GenreCountOutputTypeCountAnimesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnimeWhereInput
  }


  /**
   * Count Type EpisodeCountOutputType
   */

  export type EpisodeCountOutputType = {
    mirrors: number
  }

  export type EpisodeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mirrors?: boolean | EpisodeCountOutputTypeCountMirrorsArgs
  }

  // Custom InputTypes
  /**
   * EpisodeCountOutputType without action
   */
  export type EpisodeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EpisodeCountOutputType
     */
    select?: EpisodeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EpisodeCountOutputType without action
   */
  export type EpisodeCountOutputTypeCountMirrorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MirrorWhereInput
  }


  /**
   * Count Type MirrorCountOutputType
   */

  export type MirrorCountOutputType = {
    servers: number
  }

  export type MirrorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    servers?: boolean | MirrorCountOutputTypeCountServersArgs
  }

  // Custom InputTypes
  /**
   * MirrorCountOutputType without action
   */
  export type MirrorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MirrorCountOutputType
     */
    select?: MirrorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MirrorCountOutputType without action
   */
  export type MirrorCountOutputTypeCountServersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StreamServerWhereInput
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
    role: string | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    username: string | null
    role: string | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    role: number
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
    role?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    role?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    role?: true
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
    role: string
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
    role?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    role?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    role?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    role?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "role" | "createdAt", ExtArgs["result"]["user"]>

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      role: string
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
    readonly role: FieldRef<"User", 'String'>
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
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
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
  }


  /**
   * Model Anime
   */

  export type AggregateAnime = {
    _count: AnimeCountAggregateOutputType | null
    _avg: AnimeAvgAggregateOutputType | null
    _sum: AnimeSumAggregateOutputType | null
    _min: AnimeMinAggregateOutputType | null
    _max: AnimeMaxAggregateOutputType | null
  }

  export type AnimeAvgAggregateOutputType = {
    id: number | null
    totalEpisodes: number | null
    rating: number | null
  }

  export type AnimeSumAggregateOutputType = {
    id: number | null
    totalEpisodes: number | null
    rating: number | null
  }

  export type AnimeMinAggregateOutputType = {
    id: number | null
    title: string | null
    titleJapan: string | null
    slug: string | null
    type: string | null
    status: $Enums.AnimeStatus | null
    studio: string | null
    totalEpisodes: number | null
    releaseDate: Date | null
    rating: number | null
    synopsis: string | null
    url: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AnimeMaxAggregateOutputType = {
    id: number | null
    title: string | null
    titleJapan: string | null
    slug: string | null
    type: string | null
    status: $Enums.AnimeStatus | null
    studio: string | null
    totalEpisodes: number | null
    releaseDate: Date | null
    rating: number | null
    synopsis: string | null
    url: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AnimeCountAggregateOutputType = {
    id: number
    title: number
    titleJapan: number
    slug: number
    type: number
    status: number
    studio: number
    totalEpisodes: number
    releaseDate: number
    rating: number
    synopsis: number
    url: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AnimeAvgAggregateInputType = {
    id?: true
    totalEpisodes?: true
    rating?: true
  }

  export type AnimeSumAggregateInputType = {
    id?: true
    totalEpisodes?: true
    rating?: true
  }

  export type AnimeMinAggregateInputType = {
    id?: true
    title?: true
    titleJapan?: true
    slug?: true
    type?: true
    status?: true
    studio?: true
    totalEpisodes?: true
    releaseDate?: true
    rating?: true
    synopsis?: true
    url?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AnimeMaxAggregateInputType = {
    id?: true
    title?: true
    titleJapan?: true
    slug?: true
    type?: true
    status?: true
    studio?: true
    totalEpisodes?: true
    releaseDate?: true
    rating?: true
    synopsis?: true
    url?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AnimeCountAggregateInputType = {
    id?: true
    title?: true
    titleJapan?: true
    slug?: true
    type?: true
    status?: true
    studio?: true
    totalEpisodes?: true
    releaseDate?: true
    rating?: true
    synopsis?: true
    url?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AnimeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Anime to aggregate.
     */
    where?: AnimeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Anime to fetch.
     */
    orderBy?: AnimeOrderByWithRelationInput | AnimeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AnimeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Anime from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Anime.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Anime
    **/
    _count?: true | AnimeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AnimeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AnimeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AnimeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AnimeMaxAggregateInputType
  }

  export type GetAnimeAggregateType<T extends AnimeAggregateArgs> = {
        [P in keyof T & keyof AggregateAnime]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnime[P]>
      : GetScalarType<T[P], AggregateAnime[P]>
  }




  export type AnimeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnimeWhereInput
    orderBy?: AnimeOrderByWithAggregationInput | AnimeOrderByWithAggregationInput[]
    by: AnimeScalarFieldEnum[] | AnimeScalarFieldEnum
    having?: AnimeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AnimeCountAggregateInputType | true
    _avg?: AnimeAvgAggregateInputType
    _sum?: AnimeSumAggregateInputType
    _min?: AnimeMinAggregateInputType
    _max?: AnimeMaxAggregateInputType
  }

  export type AnimeGroupByOutputType = {
    id: number
    title: string
    titleJapan: string | null
    slug: string
    type: string | null
    status: $Enums.AnimeStatus
    studio: string | null
    totalEpisodes: number | null
    releaseDate: Date | null
    rating: number | null
    synopsis: string | null
    url: string | null
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: AnimeCountAggregateOutputType | null
    _avg: AnimeAvgAggregateOutputType | null
    _sum: AnimeSumAggregateOutputType | null
    _min: AnimeMinAggregateOutputType | null
    _max: AnimeMaxAggregateOutputType | null
  }

  type GetAnimeGroupByPayload<T extends AnimeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AnimeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AnimeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AnimeGroupByOutputType[P]>
            : GetScalarType<T[P], AnimeGroupByOutputType[P]>
        }
      >
    >


  export type AnimeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    titleJapan?: boolean
    slug?: boolean
    type?: boolean
    status?: boolean
    studio?: boolean
    totalEpisodes?: boolean
    releaseDate?: boolean
    rating?: boolean
    synopsis?: boolean
    url?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    genres?: boolean | Anime$genresArgs<ExtArgs>
    episodes?: boolean | Anime$episodesArgs<ExtArgs>
    _count?: boolean | AnimeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["anime"]>

  export type AnimeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    titleJapan?: boolean
    slug?: boolean
    type?: boolean
    status?: boolean
    studio?: boolean
    totalEpisodes?: boolean
    releaseDate?: boolean
    rating?: boolean
    synopsis?: boolean
    url?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["anime"]>

  export type AnimeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    titleJapan?: boolean
    slug?: boolean
    type?: boolean
    status?: boolean
    studio?: boolean
    totalEpisodes?: boolean
    releaseDate?: boolean
    rating?: boolean
    synopsis?: boolean
    url?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["anime"]>

  export type AnimeSelectScalar = {
    id?: boolean
    title?: boolean
    titleJapan?: boolean
    slug?: boolean
    type?: boolean
    status?: boolean
    studio?: boolean
    totalEpisodes?: boolean
    releaseDate?: boolean
    rating?: boolean
    synopsis?: boolean
    url?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AnimeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "titleJapan" | "slug" | "type" | "status" | "studio" | "totalEpisodes" | "releaseDate" | "rating" | "synopsis" | "url" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["anime"]>
  export type AnimeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    genres?: boolean | Anime$genresArgs<ExtArgs>
    episodes?: boolean | Anime$episodesArgs<ExtArgs>
    _count?: boolean | AnimeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AnimeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AnimeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AnimePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Anime"
    objects: {
      genres: Prisma.$GenrePayload<ExtArgs>[]
      episodes: Prisma.$EpisodePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      titleJapan: string | null
      slug: string
      type: string | null
      status: $Enums.AnimeStatus
      studio: string | null
      totalEpisodes: number | null
      releaseDate: Date | null
      rating: number | null
      synopsis: string | null
      url: string | null
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["anime"]>
    composites: {}
  }

  type AnimeGetPayload<S extends boolean | null | undefined | AnimeDefaultArgs> = $Result.GetResult<Prisma.$AnimePayload, S>

  type AnimeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AnimeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AnimeCountAggregateInputType | true
    }

  export interface AnimeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Anime'], meta: { name: 'Anime' } }
    /**
     * Find zero or one Anime that matches the filter.
     * @param {AnimeFindUniqueArgs} args - Arguments to find a Anime
     * @example
     * // Get one Anime
     * const anime = await prisma.anime.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AnimeFindUniqueArgs>(args: SelectSubset<T, AnimeFindUniqueArgs<ExtArgs>>): Prisma__AnimeClient<$Result.GetResult<Prisma.$AnimePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Anime that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AnimeFindUniqueOrThrowArgs} args - Arguments to find a Anime
     * @example
     * // Get one Anime
     * const anime = await prisma.anime.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AnimeFindUniqueOrThrowArgs>(args: SelectSubset<T, AnimeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AnimeClient<$Result.GetResult<Prisma.$AnimePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Anime that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimeFindFirstArgs} args - Arguments to find a Anime
     * @example
     * // Get one Anime
     * const anime = await prisma.anime.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AnimeFindFirstArgs>(args?: SelectSubset<T, AnimeFindFirstArgs<ExtArgs>>): Prisma__AnimeClient<$Result.GetResult<Prisma.$AnimePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Anime that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimeFindFirstOrThrowArgs} args - Arguments to find a Anime
     * @example
     * // Get one Anime
     * const anime = await prisma.anime.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AnimeFindFirstOrThrowArgs>(args?: SelectSubset<T, AnimeFindFirstOrThrowArgs<ExtArgs>>): Prisma__AnimeClient<$Result.GetResult<Prisma.$AnimePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Anime that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Anime
     * const anime = await prisma.anime.findMany()
     * 
     * // Get first 10 Anime
     * const anime = await prisma.anime.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const animeWithIdOnly = await prisma.anime.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AnimeFindManyArgs>(args?: SelectSubset<T, AnimeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnimePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Anime.
     * @param {AnimeCreateArgs} args - Arguments to create a Anime.
     * @example
     * // Create one Anime
     * const Anime = await prisma.anime.create({
     *   data: {
     *     // ... data to create a Anime
     *   }
     * })
     * 
     */
    create<T extends AnimeCreateArgs>(args: SelectSubset<T, AnimeCreateArgs<ExtArgs>>): Prisma__AnimeClient<$Result.GetResult<Prisma.$AnimePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Anime.
     * @param {AnimeCreateManyArgs} args - Arguments to create many Anime.
     * @example
     * // Create many Anime
     * const anime = await prisma.anime.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AnimeCreateManyArgs>(args?: SelectSubset<T, AnimeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Anime and returns the data saved in the database.
     * @param {AnimeCreateManyAndReturnArgs} args - Arguments to create many Anime.
     * @example
     * // Create many Anime
     * const anime = await prisma.anime.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Anime and only return the `id`
     * const animeWithIdOnly = await prisma.anime.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AnimeCreateManyAndReturnArgs>(args?: SelectSubset<T, AnimeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnimePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Anime.
     * @param {AnimeDeleteArgs} args - Arguments to delete one Anime.
     * @example
     * // Delete one Anime
     * const Anime = await prisma.anime.delete({
     *   where: {
     *     // ... filter to delete one Anime
     *   }
     * })
     * 
     */
    delete<T extends AnimeDeleteArgs>(args: SelectSubset<T, AnimeDeleteArgs<ExtArgs>>): Prisma__AnimeClient<$Result.GetResult<Prisma.$AnimePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Anime.
     * @param {AnimeUpdateArgs} args - Arguments to update one Anime.
     * @example
     * // Update one Anime
     * const anime = await prisma.anime.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AnimeUpdateArgs>(args: SelectSubset<T, AnimeUpdateArgs<ExtArgs>>): Prisma__AnimeClient<$Result.GetResult<Prisma.$AnimePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Anime.
     * @param {AnimeDeleteManyArgs} args - Arguments to filter Anime to delete.
     * @example
     * // Delete a few Anime
     * const { count } = await prisma.anime.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AnimeDeleteManyArgs>(args?: SelectSubset<T, AnimeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Anime.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Anime
     * const anime = await prisma.anime.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AnimeUpdateManyArgs>(args: SelectSubset<T, AnimeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Anime and returns the data updated in the database.
     * @param {AnimeUpdateManyAndReturnArgs} args - Arguments to update many Anime.
     * @example
     * // Update many Anime
     * const anime = await prisma.anime.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Anime and only return the `id`
     * const animeWithIdOnly = await prisma.anime.updateManyAndReturn({
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
    updateManyAndReturn<T extends AnimeUpdateManyAndReturnArgs>(args: SelectSubset<T, AnimeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnimePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Anime.
     * @param {AnimeUpsertArgs} args - Arguments to update or create a Anime.
     * @example
     * // Update or create a Anime
     * const anime = await prisma.anime.upsert({
     *   create: {
     *     // ... data to create a Anime
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Anime we want to update
     *   }
     * })
     */
    upsert<T extends AnimeUpsertArgs>(args: SelectSubset<T, AnimeUpsertArgs<ExtArgs>>): Prisma__AnimeClient<$Result.GetResult<Prisma.$AnimePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Anime.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimeCountArgs} args - Arguments to filter Anime to count.
     * @example
     * // Count the number of Anime
     * const count = await prisma.anime.count({
     *   where: {
     *     // ... the filter for the Anime we want to count
     *   }
     * })
    **/
    count<T extends AnimeCountArgs>(
      args?: Subset<T, AnimeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AnimeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Anime.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AnimeAggregateArgs>(args: Subset<T, AnimeAggregateArgs>): Prisma.PrismaPromise<GetAnimeAggregateType<T>>

    /**
     * Group by Anime.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimeGroupByArgs} args - Group by arguments.
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
      T extends AnimeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AnimeGroupByArgs['orderBy'] }
        : { orderBy?: AnimeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AnimeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnimeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Anime model
   */
  readonly fields: AnimeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Anime.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AnimeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    genres<T extends Anime$genresArgs<ExtArgs> = {}>(args?: Subset<T, Anime$genresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    episodes<T extends Anime$episodesArgs<ExtArgs> = {}>(args?: Subset<T, Anime$episodesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EpisodePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Anime model
   */
  interface AnimeFieldRefs {
    readonly id: FieldRef<"Anime", 'Int'>
    readonly title: FieldRef<"Anime", 'String'>
    readonly titleJapan: FieldRef<"Anime", 'String'>
    readonly slug: FieldRef<"Anime", 'String'>
    readonly type: FieldRef<"Anime", 'String'>
    readonly status: FieldRef<"Anime", 'AnimeStatus'>
    readonly studio: FieldRef<"Anime", 'String'>
    readonly totalEpisodes: FieldRef<"Anime", 'Int'>
    readonly releaseDate: FieldRef<"Anime", 'DateTime'>
    readonly rating: FieldRef<"Anime", 'Float'>
    readonly synopsis: FieldRef<"Anime", 'String'>
    readonly url: FieldRef<"Anime", 'String'>
    readonly isActive: FieldRef<"Anime", 'Boolean'>
    readonly createdAt: FieldRef<"Anime", 'DateTime'>
    readonly updatedAt: FieldRef<"Anime", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Anime findUnique
   */
  export type AnimeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Anime
     */
    select?: AnimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Anime
     */
    omit?: AnimeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimeInclude<ExtArgs> | null
    /**
     * Filter, which Anime to fetch.
     */
    where: AnimeWhereUniqueInput
  }

  /**
   * Anime findUniqueOrThrow
   */
  export type AnimeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Anime
     */
    select?: AnimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Anime
     */
    omit?: AnimeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimeInclude<ExtArgs> | null
    /**
     * Filter, which Anime to fetch.
     */
    where: AnimeWhereUniqueInput
  }

  /**
   * Anime findFirst
   */
  export type AnimeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Anime
     */
    select?: AnimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Anime
     */
    omit?: AnimeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimeInclude<ExtArgs> | null
    /**
     * Filter, which Anime to fetch.
     */
    where?: AnimeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Anime to fetch.
     */
    orderBy?: AnimeOrderByWithRelationInput | AnimeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Anime.
     */
    cursor?: AnimeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Anime from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Anime.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Anime.
     */
    distinct?: AnimeScalarFieldEnum | AnimeScalarFieldEnum[]
  }

  /**
   * Anime findFirstOrThrow
   */
  export type AnimeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Anime
     */
    select?: AnimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Anime
     */
    omit?: AnimeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimeInclude<ExtArgs> | null
    /**
     * Filter, which Anime to fetch.
     */
    where?: AnimeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Anime to fetch.
     */
    orderBy?: AnimeOrderByWithRelationInput | AnimeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Anime.
     */
    cursor?: AnimeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Anime from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Anime.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Anime.
     */
    distinct?: AnimeScalarFieldEnum | AnimeScalarFieldEnum[]
  }

  /**
   * Anime findMany
   */
  export type AnimeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Anime
     */
    select?: AnimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Anime
     */
    omit?: AnimeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimeInclude<ExtArgs> | null
    /**
     * Filter, which Anime to fetch.
     */
    where?: AnimeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Anime to fetch.
     */
    orderBy?: AnimeOrderByWithRelationInput | AnimeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Anime.
     */
    cursor?: AnimeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Anime from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Anime.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Anime.
     */
    distinct?: AnimeScalarFieldEnum | AnimeScalarFieldEnum[]
  }

  /**
   * Anime create
   */
  export type AnimeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Anime
     */
    select?: AnimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Anime
     */
    omit?: AnimeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimeInclude<ExtArgs> | null
    /**
     * The data needed to create a Anime.
     */
    data: XOR<AnimeCreateInput, AnimeUncheckedCreateInput>
  }

  /**
   * Anime createMany
   */
  export type AnimeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Anime.
     */
    data: AnimeCreateManyInput | AnimeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Anime createManyAndReturn
   */
  export type AnimeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Anime
     */
    select?: AnimeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Anime
     */
    omit?: AnimeOmit<ExtArgs> | null
    /**
     * The data used to create many Anime.
     */
    data: AnimeCreateManyInput | AnimeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Anime update
   */
  export type AnimeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Anime
     */
    select?: AnimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Anime
     */
    omit?: AnimeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimeInclude<ExtArgs> | null
    /**
     * The data needed to update a Anime.
     */
    data: XOR<AnimeUpdateInput, AnimeUncheckedUpdateInput>
    /**
     * Choose, which Anime to update.
     */
    where: AnimeWhereUniqueInput
  }

  /**
   * Anime updateMany
   */
  export type AnimeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Anime.
     */
    data: XOR<AnimeUpdateManyMutationInput, AnimeUncheckedUpdateManyInput>
    /**
     * Filter which Anime to update
     */
    where?: AnimeWhereInput
    /**
     * Limit how many Anime to update.
     */
    limit?: number
  }

  /**
   * Anime updateManyAndReturn
   */
  export type AnimeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Anime
     */
    select?: AnimeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Anime
     */
    omit?: AnimeOmit<ExtArgs> | null
    /**
     * The data used to update Anime.
     */
    data: XOR<AnimeUpdateManyMutationInput, AnimeUncheckedUpdateManyInput>
    /**
     * Filter which Anime to update
     */
    where?: AnimeWhereInput
    /**
     * Limit how many Anime to update.
     */
    limit?: number
  }

  /**
   * Anime upsert
   */
  export type AnimeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Anime
     */
    select?: AnimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Anime
     */
    omit?: AnimeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimeInclude<ExtArgs> | null
    /**
     * The filter to search for the Anime to update in case it exists.
     */
    where: AnimeWhereUniqueInput
    /**
     * In case the Anime found by the `where` argument doesn't exist, create a new Anime with this data.
     */
    create: XOR<AnimeCreateInput, AnimeUncheckedCreateInput>
    /**
     * In case the Anime was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AnimeUpdateInput, AnimeUncheckedUpdateInput>
  }

  /**
   * Anime delete
   */
  export type AnimeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Anime
     */
    select?: AnimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Anime
     */
    omit?: AnimeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimeInclude<ExtArgs> | null
    /**
     * Filter which Anime to delete.
     */
    where: AnimeWhereUniqueInput
  }

  /**
   * Anime deleteMany
   */
  export type AnimeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Anime to delete
     */
    where?: AnimeWhereInput
    /**
     * Limit how many Anime to delete.
     */
    limit?: number
  }

  /**
   * Anime.genres
   */
  export type Anime$genresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    where?: GenreWhereInput
    orderBy?: GenreOrderByWithRelationInput | GenreOrderByWithRelationInput[]
    cursor?: GenreWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GenreScalarFieldEnum | GenreScalarFieldEnum[]
  }

  /**
   * Anime.episodes
   */
  export type Anime$episodesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Episode
     */
    select?: EpisodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Episode
     */
    omit?: EpisodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpisodeInclude<ExtArgs> | null
    where?: EpisodeWhereInput
    orderBy?: EpisodeOrderByWithRelationInput | EpisodeOrderByWithRelationInput[]
    cursor?: EpisodeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EpisodeScalarFieldEnum | EpisodeScalarFieldEnum[]
  }

  /**
   * Anime without action
   */
  export type AnimeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Anime
     */
    select?: AnimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Anime
     */
    omit?: AnimeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimeInclude<ExtArgs> | null
  }


  /**
   * Model Genre
   */

  export type AggregateGenre = {
    _count: GenreCountAggregateOutputType | null
    _avg: GenreAvgAggregateOutputType | null
    _sum: GenreSumAggregateOutputType | null
    _min: GenreMinAggregateOutputType | null
    _max: GenreMaxAggregateOutputType | null
  }

  export type GenreAvgAggregateOutputType = {
    id: number | null
  }

  export type GenreSumAggregateOutputType = {
    id: number | null
  }

  export type GenreMinAggregateOutputType = {
    id: number | null
    title: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GenreMaxAggregateOutputType = {
    id: number | null
    title: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GenreCountAggregateOutputType = {
    id: number
    title: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type GenreAvgAggregateInputType = {
    id?: true
  }

  export type GenreSumAggregateInputType = {
    id?: true
  }

  export type GenreMinAggregateInputType = {
    id?: true
    title?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GenreMaxAggregateInputType = {
    id?: true
    title?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GenreCountAggregateInputType = {
    id?: true
    title?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type GenreAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Genre to aggregate.
     */
    where?: GenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Genres to fetch.
     */
    orderBy?: GenreOrderByWithRelationInput | GenreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Genres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Genres
    **/
    _count?: true | GenreCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GenreAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GenreSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GenreMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GenreMaxAggregateInputType
  }

  export type GetGenreAggregateType<T extends GenreAggregateArgs> = {
        [P in keyof T & keyof AggregateGenre]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGenre[P]>
      : GetScalarType<T[P], AggregateGenre[P]>
  }




  export type GenreGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GenreWhereInput
    orderBy?: GenreOrderByWithAggregationInput | GenreOrderByWithAggregationInput[]
    by: GenreScalarFieldEnum[] | GenreScalarFieldEnum
    having?: GenreScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GenreCountAggregateInputType | true
    _avg?: GenreAvgAggregateInputType
    _sum?: GenreSumAggregateInputType
    _min?: GenreMinAggregateInputType
    _max?: GenreMaxAggregateInputType
  }

  export type GenreGroupByOutputType = {
    id: number
    title: string
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: GenreCountAggregateOutputType | null
    _avg: GenreAvgAggregateOutputType | null
    _sum: GenreSumAggregateOutputType | null
    _min: GenreMinAggregateOutputType | null
    _max: GenreMaxAggregateOutputType | null
  }

  type GetGenreGroupByPayload<T extends GenreGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GenreGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GenreGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GenreGroupByOutputType[P]>
            : GetScalarType<T[P], GenreGroupByOutputType[P]>
        }
      >
    >


  export type GenreSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    animes?: boolean | Genre$animesArgs<ExtArgs>
    _count?: boolean | GenreCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["genre"]>

  export type GenreSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["genre"]>

  export type GenreSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["genre"]>

  export type GenreSelectScalar = {
    id?: boolean
    title?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type GenreOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["genre"]>
  export type GenreInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    animes?: boolean | Genre$animesArgs<ExtArgs>
    _count?: boolean | GenreCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GenreIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type GenreIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $GenrePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Genre"
    objects: {
      animes: Prisma.$AnimePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["genre"]>
    composites: {}
  }

  type GenreGetPayload<S extends boolean | null | undefined | GenreDefaultArgs> = $Result.GetResult<Prisma.$GenrePayload, S>

  type GenreCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GenreFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GenreCountAggregateInputType | true
    }

  export interface GenreDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Genre'], meta: { name: 'Genre' } }
    /**
     * Find zero or one Genre that matches the filter.
     * @param {GenreFindUniqueArgs} args - Arguments to find a Genre
     * @example
     * // Get one Genre
     * const genre = await prisma.genre.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GenreFindUniqueArgs>(args: SelectSubset<T, GenreFindUniqueArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Genre that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GenreFindUniqueOrThrowArgs} args - Arguments to find a Genre
     * @example
     * // Get one Genre
     * const genre = await prisma.genre.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GenreFindUniqueOrThrowArgs>(args: SelectSubset<T, GenreFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Genre that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreFindFirstArgs} args - Arguments to find a Genre
     * @example
     * // Get one Genre
     * const genre = await prisma.genre.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GenreFindFirstArgs>(args?: SelectSubset<T, GenreFindFirstArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Genre that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreFindFirstOrThrowArgs} args - Arguments to find a Genre
     * @example
     * // Get one Genre
     * const genre = await prisma.genre.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GenreFindFirstOrThrowArgs>(args?: SelectSubset<T, GenreFindFirstOrThrowArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Genres that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Genres
     * const genres = await prisma.genre.findMany()
     * 
     * // Get first 10 Genres
     * const genres = await prisma.genre.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const genreWithIdOnly = await prisma.genre.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GenreFindManyArgs>(args?: SelectSubset<T, GenreFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Genre.
     * @param {GenreCreateArgs} args - Arguments to create a Genre.
     * @example
     * // Create one Genre
     * const Genre = await prisma.genre.create({
     *   data: {
     *     // ... data to create a Genre
     *   }
     * })
     * 
     */
    create<T extends GenreCreateArgs>(args: SelectSubset<T, GenreCreateArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Genres.
     * @param {GenreCreateManyArgs} args - Arguments to create many Genres.
     * @example
     * // Create many Genres
     * const genre = await prisma.genre.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GenreCreateManyArgs>(args?: SelectSubset<T, GenreCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Genres and returns the data saved in the database.
     * @param {GenreCreateManyAndReturnArgs} args - Arguments to create many Genres.
     * @example
     * // Create many Genres
     * const genre = await prisma.genre.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Genres and only return the `id`
     * const genreWithIdOnly = await prisma.genre.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GenreCreateManyAndReturnArgs>(args?: SelectSubset<T, GenreCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Genre.
     * @param {GenreDeleteArgs} args - Arguments to delete one Genre.
     * @example
     * // Delete one Genre
     * const Genre = await prisma.genre.delete({
     *   where: {
     *     // ... filter to delete one Genre
     *   }
     * })
     * 
     */
    delete<T extends GenreDeleteArgs>(args: SelectSubset<T, GenreDeleteArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Genre.
     * @param {GenreUpdateArgs} args - Arguments to update one Genre.
     * @example
     * // Update one Genre
     * const genre = await prisma.genre.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GenreUpdateArgs>(args: SelectSubset<T, GenreUpdateArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Genres.
     * @param {GenreDeleteManyArgs} args - Arguments to filter Genres to delete.
     * @example
     * // Delete a few Genres
     * const { count } = await prisma.genre.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GenreDeleteManyArgs>(args?: SelectSubset<T, GenreDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Genres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Genres
     * const genre = await prisma.genre.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GenreUpdateManyArgs>(args: SelectSubset<T, GenreUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Genres and returns the data updated in the database.
     * @param {GenreUpdateManyAndReturnArgs} args - Arguments to update many Genres.
     * @example
     * // Update many Genres
     * const genre = await prisma.genre.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Genres and only return the `id`
     * const genreWithIdOnly = await prisma.genre.updateManyAndReturn({
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
    updateManyAndReturn<T extends GenreUpdateManyAndReturnArgs>(args: SelectSubset<T, GenreUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Genre.
     * @param {GenreUpsertArgs} args - Arguments to update or create a Genre.
     * @example
     * // Update or create a Genre
     * const genre = await prisma.genre.upsert({
     *   create: {
     *     // ... data to create a Genre
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Genre we want to update
     *   }
     * })
     */
    upsert<T extends GenreUpsertArgs>(args: SelectSubset<T, GenreUpsertArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Genres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreCountArgs} args - Arguments to filter Genres to count.
     * @example
     * // Count the number of Genres
     * const count = await prisma.genre.count({
     *   where: {
     *     // ... the filter for the Genres we want to count
     *   }
     * })
    **/
    count<T extends GenreCountArgs>(
      args?: Subset<T, GenreCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GenreCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Genre.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GenreAggregateArgs>(args: Subset<T, GenreAggregateArgs>): Prisma.PrismaPromise<GetGenreAggregateType<T>>

    /**
     * Group by Genre.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreGroupByArgs} args - Group by arguments.
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
      T extends GenreGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GenreGroupByArgs['orderBy'] }
        : { orderBy?: GenreGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GenreGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGenreGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Genre model
   */
  readonly fields: GenreFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Genre.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GenreClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    animes<T extends Genre$animesArgs<ExtArgs> = {}>(args?: Subset<T, Genre$animesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnimePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Genre model
   */
  interface GenreFieldRefs {
    readonly id: FieldRef<"Genre", 'Int'>
    readonly title: FieldRef<"Genre", 'String'>
    readonly isActive: FieldRef<"Genre", 'Boolean'>
    readonly createdAt: FieldRef<"Genre", 'DateTime'>
    readonly updatedAt: FieldRef<"Genre", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Genre findUnique
   */
  export type GenreFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * Filter, which Genre to fetch.
     */
    where: GenreWhereUniqueInput
  }

  /**
   * Genre findUniqueOrThrow
   */
  export type GenreFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * Filter, which Genre to fetch.
     */
    where: GenreWhereUniqueInput
  }

  /**
   * Genre findFirst
   */
  export type GenreFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * Filter, which Genre to fetch.
     */
    where?: GenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Genres to fetch.
     */
    orderBy?: GenreOrderByWithRelationInput | GenreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Genres.
     */
    cursor?: GenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Genres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Genres.
     */
    distinct?: GenreScalarFieldEnum | GenreScalarFieldEnum[]
  }

  /**
   * Genre findFirstOrThrow
   */
  export type GenreFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * Filter, which Genre to fetch.
     */
    where?: GenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Genres to fetch.
     */
    orderBy?: GenreOrderByWithRelationInput | GenreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Genres.
     */
    cursor?: GenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Genres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Genres.
     */
    distinct?: GenreScalarFieldEnum | GenreScalarFieldEnum[]
  }

  /**
   * Genre findMany
   */
  export type GenreFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * Filter, which Genres to fetch.
     */
    where?: GenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Genres to fetch.
     */
    orderBy?: GenreOrderByWithRelationInput | GenreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Genres.
     */
    cursor?: GenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Genres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Genres.
     */
    distinct?: GenreScalarFieldEnum | GenreScalarFieldEnum[]
  }

  /**
   * Genre create
   */
  export type GenreCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * The data needed to create a Genre.
     */
    data: XOR<GenreCreateInput, GenreUncheckedCreateInput>
  }

  /**
   * Genre createMany
   */
  export type GenreCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Genres.
     */
    data: GenreCreateManyInput | GenreCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Genre createManyAndReturn
   */
  export type GenreCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * The data used to create many Genres.
     */
    data: GenreCreateManyInput | GenreCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Genre update
   */
  export type GenreUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * The data needed to update a Genre.
     */
    data: XOR<GenreUpdateInput, GenreUncheckedUpdateInput>
    /**
     * Choose, which Genre to update.
     */
    where: GenreWhereUniqueInput
  }

  /**
   * Genre updateMany
   */
  export type GenreUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Genres.
     */
    data: XOR<GenreUpdateManyMutationInput, GenreUncheckedUpdateManyInput>
    /**
     * Filter which Genres to update
     */
    where?: GenreWhereInput
    /**
     * Limit how many Genres to update.
     */
    limit?: number
  }

  /**
   * Genre updateManyAndReturn
   */
  export type GenreUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * The data used to update Genres.
     */
    data: XOR<GenreUpdateManyMutationInput, GenreUncheckedUpdateManyInput>
    /**
     * Filter which Genres to update
     */
    where?: GenreWhereInput
    /**
     * Limit how many Genres to update.
     */
    limit?: number
  }

  /**
   * Genre upsert
   */
  export type GenreUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * The filter to search for the Genre to update in case it exists.
     */
    where: GenreWhereUniqueInput
    /**
     * In case the Genre found by the `where` argument doesn't exist, create a new Genre with this data.
     */
    create: XOR<GenreCreateInput, GenreUncheckedCreateInput>
    /**
     * In case the Genre was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GenreUpdateInput, GenreUncheckedUpdateInput>
  }

  /**
   * Genre delete
   */
  export type GenreDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * Filter which Genre to delete.
     */
    where: GenreWhereUniqueInput
  }

  /**
   * Genre deleteMany
   */
  export type GenreDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Genres to delete
     */
    where?: GenreWhereInput
    /**
     * Limit how many Genres to delete.
     */
    limit?: number
  }

  /**
   * Genre.animes
   */
  export type Genre$animesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Anime
     */
    select?: AnimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Anime
     */
    omit?: AnimeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimeInclude<ExtArgs> | null
    where?: AnimeWhereInput
    orderBy?: AnimeOrderByWithRelationInput | AnimeOrderByWithRelationInput[]
    cursor?: AnimeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnimeScalarFieldEnum | AnimeScalarFieldEnum[]
  }

  /**
   * Genre without action
   */
  export type GenreDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
  }


  /**
   * Model Episode
   */

  export type AggregateEpisode = {
    _count: EpisodeCountAggregateOutputType | null
    _avg: EpisodeAvgAggregateOutputType | null
    _sum: EpisodeSumAggregateOutputType | null
    _min: EpisodeMinAggregateOutputType | null
    _max: EpisodeMaxAggregateOutputType | null
  }

  export type EpisodeAvgAggregateOutputType = {
    id: number | null
    animeId: number | null
    episodeNumber: number | null
  }

  export type EpisodeSumAggregateOutputType = {
    id: number | null
    animeId: number | null
    episodeNumber: number | null
  }

  export type EpisodeMinAggregateOutputType = {
    id: number | null
    animeId: number | null
    slug: string | null
    title: string | null
    episodeNumber: number | null
    mirrorLink: string | null
    urlEpisode: string | null
    releaseDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EpisodeMaxAggregateOutputType = {
    id: number | null
    animeId: number | null
    slug: string | null
    title: string | null
    episodeNumber: number | null
    mirrorLink: string | null
    urlEpisode: string | null
    releaseDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EpisodeCountAggregateOutputType = {
    id: number
    animeId: number
    slug: number
    title: number
    episodeNumber: number
    mirrorLink: number
    urlEpisode: number
    releaseDate: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EpisodeAvgAggregateInputType = {
    id?: true
    animeId?: true
    episodeNumber?: true
  }

  export type EpisodeSumAggregateInputType = {
    id?: true
    animeId?: true
    episodeNumber?: true
  }

  export type EpisodeMinAggregateInputType = {
    id?: true
    animeId?: true
    slug?: true
    title?: true
    episodeNumber?: true
    mirrorLink?: true
    urlEpisode?: true
    releaseDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EpisodeMaxAggregateInputType = {
    id?: true
    animeId?: true
    slug?: true
    title?: true
    episodeNumber?: true
    mirrorLink?: true
    urlEpisode?: true
    releaseDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EpisodeCountAggregateInputType = {
    id?: true
    animeId?: true
    slug?: true
    title?: true
    episodeNumber?: true
    mirrorLink?: true
    urlEpisode?: true
    releaseDate?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EpisodeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Episode to aggregate.
     */
    where?: EpisodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Episodes to fetch.
     */
    orderBy?: EpisodeOrderByWithRelationInput | EpisodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EpisodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Episodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Episodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Episodes
    **/
    _count?: true | EpisodeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EpisodeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EpisodeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EpisodeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EpisodeMaxAggregateInputType
  }

  export type GetEpisodeAggregateType<T extends EpisodeAggregateArgs> = {
        [P in keyof T & keyof AggregateEpisode]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEpisode[P]>
      : GetScalarType<T[P], AggregateEpisode[P]>
  }




  export type EpisodeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EpisodeWhereInput
    orderBy?: EpisodeOrderByWithAggregationInput | EpisodeOrderByWithAggregationInput[]
    by: EpisodeScalarFieldEnum[] | EpisodeScalarFieldEnum
    having?: EpisodeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EpisodeCountAggregateInputType | true
    _avg?: EpisodeAvgAggregateInputType
    _sum?: EpisodeSumAggregateInputType
    _min?: EpisodeMinAggregateInputType
    _max?: EpisodeMaxAggregateInputType
  }

  export type EpisodeGroupByOutputType = {
    id: number
    animeId: number
    slug: string
    title: string | null
    episodeNumber: number
    mirrorLink: string | null
    urlEpisode: string | null
    releaseDate: Date | null
    createdAt: Date
    updatedAt: Date
    _count: EpisodeCountAggregateOutputType | null
    _avg: EpisodeAvgAggregateOutputType | null
    _sum: EpisodeSumAggregateOutputType | null
    _min: EpisodeMinAggregateOutputType | null
    _max: EpisodeMaxAggregateOutputType | null
  }

  type GetEpisodeGroupByPayload<T extends EpisodeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EpisodeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EpisodeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EpisodeGroupByOutputType[P]>
            : GetScalarType<T[P], EpisodeGroupByOutputType[P]>
        }
      >
    >


  export type EpisodeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    animeId?: boolean
    slug?: boolean
    title?: boolean
    episodeNumber?: boolean
    mirrorLink?: boolean
    urlEpisode?: boolean
    releaseDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    anime?: boolean | AnimeDefaultArgs<ExtArgs>
    mirrors?: boolean | Episode$mirrorsArgs<ExtArgs>
    _count?: boolean | EpisodeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["episode"]>

  export type EpisodeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    animeId?: boolean
    slug?: boolean
    title?: boolean
    episodeNumber?: boolean
    mirrorLink?: boolean
    urlEpisode?: boolean
    releaseDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    anime?: boolean | AnimeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["episode"]>

  export type EpisodeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    animeId?: boolean
    slug?: boolean
    title?: boolean
    episodeNumber?: boolean
    mirrorLink?: boolean
    urlEpisode?: boolean
    releaseDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    anime?: boolean | AnimeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["episode"]>

  export type EpisodeSelectScalar = {
    id?: boolean
    animeId?: boolean
    slug?: boolean
    title?: boolean
    episodeNumber?: boolean
    mirrorLink?: boolean
    urlEpisode?: boolean
    releaseDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EpisodeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "animeId" | "slug" | "title" | "episodeNumber" | "mirrorLink" | "urlEpisode" | "releaseDate" | "createdAt" | "updatedAt", ExtArgs["result"]["episode"]>
  export type EpisodeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    anime?: boolean | AnimeDefaultArgs<ExtArgs>
    mirrors?: boolean | Episode$mirrorsArgs<ExtArgs>
    _count?: boolean | EpisodeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EpisodeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    anime?: boolean | AnimeDefaultArgs<ExtArgs>
  }
  export type EpisodeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    anime?: boolean | AnimeDefaultArgs<ExtArgs>
  }

  export type $EpisodePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Episode"
    objects: {
      anime: Prisma.$AnimePayload<ExtArgs>
      mirrors: Prisma.$MirrorPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      animeId: number
      slug: string
      title: string | null
      episodeNumber: number
      mirrorLink: string | null
      urlEpisode: string | null
      releaseDate: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["episode"]>
    composites: {}
  }

  type EpisodeGetPayload<S extends boolean | null | undefined | EpisodeDefaultArgs> = $Result.GetResult<Prisma.$EpisodePayload, S>

  type EpisodeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EpisodeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EpisodeCountAggregateInputType | true
    }

  export interface EpisodeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Episode'], meta: { name: 'Episode' } }
    /**
     * Find zero or one Episode that matches the filter.
     * @param {EpisodeFindUniqueArgs} args - Arguments to find a Episode
     * @example
     * // Get one Episode
     * const episode = await prisma.episode.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EpisodeFindUniqueArgs>(args: SelectSubset<T, EpisodeFindUniqueArgs<ExtArgs>>): Prisma__EpisodeClient<$Result.GetResult<Prisma.$EpisodePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Episode that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EpisodeFindUniqueOrThrowArgs} args - Arguments to find a Episode
     * @example
     * // Get one Episode
     * const episode = await prisma.episode.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EpisodeFindUniqueOrThrowArgs>(args: SelectSubset<T, EpisodeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EpisodeClient<$Result.GetResult<Prisma.$EpisodePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Episode that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EpisodeFindFirstArgs} args - Arguments to find a Episode
     * @example
     * // Get one Episode
     * const episode = await prisma.episode.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EpisodeFindFirstArgs>(args?: SelectSubset<T, EpisodeFindFirstArgs<ExtArgs>>): Prisma__EpisodeClient<$Result.GetResult<Prisma.$EpisodePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Episode that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EpisodeFindFirstOrThrowArgs} args - Arguments to find a Episode
     * @example
     * // Get one Episode
     * const episode = await prisma.episode.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EpisodeFindFirstOrThrowArgs>(args?: SelectSubset<T, EpisodeFindFirstOrThrowArgs<ExtArgs>>): Prisma__EpisodeClient<$Result.GetResult<Prisma.$EpisodePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Episodes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EpisodeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Episodes
     * const episodes = await prisma.episode.findMany()
     * 
     * // Get first 10 Episodes
     * const episodes = await prisma.episode.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const episodeWithIdOnly = await prisma.episode.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EpisodeFindManyArgs>(args?: SelectSubset<T, EpisodeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EpisodePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Episode.
     * @param {EpisodeCreateArgs} args - Arguments to create a Episode.
     * @example
     * // Create one Episode
     * const Episode = await prisma.episode.create({
     *   data: {
     *     // ... data to create a Episode
     *   }
     * })
     * 
     */
    create<T extends EpisodeCreateArgs>(args: SelectSubset<T, EpisodeCreateArgs<ExtArgs>>): Prisma__EpisodeClient<$Result.GetResult<Prisma.$EpisodePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Episodes.
     * @param {EpisodeCreateManyArgs} args - Arguments to create many Episodes.
     * @example
     * // Create many Episodes
     * const episode = await prisma.episode.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EpisodeCreateManyArgs>(args?: SelectSubset<T, EpisodeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Episodes and returns the data saved in the database.
     * @param {EpisodeCreateManyAndReturnArgs} args - Arguments to create many Episodes.
     * @example
     * // Create many Episodes
     * const episode = await prisma.episode.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Episodes and only return the `id`
     * const episodeWithIdOnly = await prisma.episode.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EpisodeCreateManyAndReturnArgs>(args?: SelectSubset<T, EpisodeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EpisodePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Episode.
     * @param {EpisodeDeleteArgs} args - Arguments to delete one Episode.
     * @example
     * // Delete one Episode
     * const Episode = await prisma.episode.delete({
     *   where: {
     *     // ... filter to delete one Episode
     *   }
     * })
     * 
     */
    delete<T extends EpisodeDeleteArgs>(args: SelectSubset<T, EpisodeDeleteArgs<ExtArgs>>): Prisma__EpisodeClient<$Result.GetResult<Prisma.$EpisodePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Episode.
     * @param {EpisodeUpdateArgs} args - Arguments to update one Episode.
     * @example
     * // Update one Episode
     * const episode = await prisma.episode.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EpisodeUpdateArgs>(args: SelectSubset<T, EpisodeUpdateArgs<ExtArgs>>): Prisma__EpisodeClient<$Result.GetResult<Prisma.$EpisodePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Episodes.
     * @param {EpisodeDeleteManyArgs} args - Arguments to filter Episodes to delete.
     * @example
     * // Delete a few Episodes
     * const { count } = await prisma.episode.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EpisodeDeleteManyArgs>(args?: SelectSubset<T, EpisodeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Episodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EpisodeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Episodes
     * const episode = await prisma.episode.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EpisodeUpdateManyArgs>(args: SelectSubset<T, EpisodeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Episodes and returns the data updated in the database.
     * @param {EpisodeUpdateManyAndReturnArgs} args - Arguments to update many Episodes.
     * @example
     * // Update many Episodes
     * const episode = await prisma.episode.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Episodes and only return the `id`
     * const episodeWithIdOnly = await prisma.episode.updateManyAndReturn({
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
    updateManyAndReturn<T extends EpisodeUpdateManyAndReturnArgs>(args: SelectSubset<T, EpisodeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EpisodePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Episode.
     * @param {EpisodeUpsertArgs} args - Arguments to update or create a Episode.
     * @example
     * // Update or create a Episode
     * const episode = await prisma.episode.upsert({
     *   create: {
     *     // ... data to create a Episode
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Episode we want to update
     *   }
     * })
     */
    upsert<T extends EpisodeUpsertArgs>(args: SelectSubset<T, EpisodeUpsertArgs<ExtArgs>>): Prisma__EpisodeClient<$Result.GetResult<Prisma.$EpisodePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Episodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EpisodeCountArgs} args - Arguments to filter Episodes to count.
     * @example
     * // Count the number of Episodes
     * const count = await prisma.episode.count({
     *   where: {
     *     // ... the filter for the Episodes we want to count
     *   }
     * })
    **/
    count<T extends EpisodeCountArgs>(
      args?: Subset<T, EpisodeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EpisodeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Episode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EpisodeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EpisodeAggregateArgs>(args: Subset<T, EpisodeAggregateArgs>): Prisma.PrismaPromise<GetEpisodeAggregateType<T>>

    /**
     * Group by Episode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EpisodeGroupByArgs} args - Group by arguments.
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
      T extends EpisodeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EpisodeGroupByArgs['orderBy'] }
        : { orderBy?: EpisodeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EpisodeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEpisodeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Episode model
   */
  readonly fields: EpisodeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Episode.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EpisodeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    anime<T extends AnimeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AnimeDefaultArgs<ExtArgs>>): Prisma__AnimeClient<$Result.GetResult<Prisma.$AnimePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    mirrors<T extends Episode$mirrorsArgs<ExtArgs> = {}>(args?: Subset<T, Episode$mirrorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MirrorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Episode model
   */
  interface EpisodeFieldRefs {
    readonly id: FieldRef<"Episode", 'Int'>
    readonly animeId: FieldRef<"Episode", 'Int'>
    readonly slug: FieldRef<"Episode", 'String'>
    readonly title: FieldRef<"Episode", 'String'>
    readonly episodeNumber: FieldRef<"Episode", 'Int'>
    readonly mirrorLink: FieldRef<"Episode", 'String'>
    readonly urlEpisode: FieldRef<"Episode", 'String'>
    readonly releaseDate: FieldRef<"Episode", 'DateTime'>
    readonly createdAt: FieldRef<"Episode", 'DateTime'>
    readonly updatedAt: FieldRef<"Episode", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Episode findUnique
   */
  export type EpisodeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Episode
     */
    select?: EpisodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Episode
     */
    omit?: EpisodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpisodeInclude<ExtArgs> | null
    /**
     * Filter, which Episode to fetch.
     */
    where: EpisodeWhereUniqueInput
  }

  /**
   * Episode findUniqueOrThrow
   */
  export type EpisodeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Episode
     */
    select?: EpisodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Episode
     */
    omit?: EpisodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpisodeInclude<ExtArgs> | null
    /**
     * Filter, which Episode to fetch.
     */
    where: EpisodeWhereUniqueInput
  }

  /**
   * Episode findFirst
   */
  export type EpisodeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Episode
     */
    select?: EpisodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Episode
     */
    omit?: EpisodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpisodeInclude<ExtArgs> | null
    /**
     * Filter, which Episode to fetch.
     */
    where?: EpisodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Episodes to fetch.
     */
    orderBy?: EpisodeOrderByWithRelationInput | EpisodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Episodes.
     */
    cursor?: EpisodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Episodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Episodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Episodes.
     */
    distinct?: EpisodeScalarFieldEnum | EpisodeScalarFieldEnum[]
  }

  /**
   * Episode findFirstOrThrow
   */
  export type EpisodeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Episode
     */
    select?: EpisodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Episode
     */
    omit?: EpisodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpisodeInclude<ExtArgs> | null
    /**
     * Filter, which Episode to fetch.
     */
    where?: EpisodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Episodes to fetch.
     */
    orderBy?: EpisodeOrderByWithRelationInput | EpisodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Episodes.
     */
    cursor?: EpisodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Episodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Episodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Episodes.
     */
    distinct?: EpisodeScalarFieldEnum | EpisodeScalarFieldEnum[]
  }

  /**
   * Episode findMany
   */
  export type EpisodeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Episode
     */
    select?: EpisodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Episode
     */
    omit?: EpisodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpisodeInclude<ExtArgs> | null
    /**
     * Filter, which Episodes to fetch.
     */
    where?: EpisodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Episodes to fetch.
     */
    orderBy?: EpisodeOrderByWithRelationInput | EpisodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Episodes.
     */
    cursor?: EpisodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Episodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Episodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Episodes.
     */
    distinct?: EpisodeScalarFieldEnum | EpisodeScalarFieldEnum[]
  }

  /**
   * Episode create
   */
  export type EpisodeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Episode
     */
    select?: EpisodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Episode
     */
    omit?: EpisodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpisodeInclude<ExtArgs> | null
    /**
     * The data needed to create a Episode.
     */
    data: XOR<EpisodeCreateInput, EpisodeUncheckedCreateInput>
  }

  /**
   * Episode createMany
   */
  export type EpisodeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Episodes.
     */
    data: EpisodeCreateManyInput | EpisodeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Episode createManyAndReturn
   */
  export type EpisodeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Episode
     */
    select?: EpisodeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Episode
     */
    omit?: EpisodeOmit<ExtArgs> | null
    /**
     * The data used to create many Episodes.
     */
    data: EpisodeCreateManyInput | EpisodeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpisodeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Episode update
   */
  export type EpisodeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Episode
     */
    select?: EpisodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Episode
     */
    omit?: EpisodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpisodeInclude<ExtArgs> | null
    /**
     * The data needed to update a Episode.
     */
    data: XOR<EpisodeUpdateInput, EpisodeUncheckedUpdateInput>
    /**
     * Choose, which Episode to update.
     */
    where: EpisodeWhereUniqueInput
  }

  /**
   * Episode updateMany
   */
  export type EpisodeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Episodes.
     */
    data: XOR<EpisodeUpdateManyMutationInput, EpisodeUncheckedUpdateManyInput>
    /**
     * Filter which Episodes to update
     */
    where?: EpisodeWhereInput
    /**
     * Limit how many Episodes to update.
     */
    limit?: number
  }

  /**
   * Episode updateManyAndReturn
   */
  export type EpisodeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Episode
     */
    select?: EpisodeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Episode
     */
    omit?: EpisodeOmit<ExtArgs> | null
    /**
     * The data used to update Episodes.
     */
    data: XOR<EpisodeUpdateManyMutationInput, EpisodeUncheckedUpdateManyInput>
    /**
     * Filter which Episodes to update
     */
    where?: EpisodeWhereInput
    /**
     * Limit how many Episodes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpisodeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Episode upsert
   */
  export type EpisodeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Episode
     */
    select?: EpisodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Episode
     */
    omit?: EpisodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpisodeInclude<ExtArgs> | null
    /**
     * The filter to search for the Episode to update in case it exists.
     */
    where: EpisodeWhereUniqueInput
    /**
     * In case the Episode found by the `where` argument doesn't exist, create a new Episode with this data.
     */
    create: XOR<EpisodeCreateInput, EpisodeUncheckedCreateInput>
    /**
     * In case the Episode was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EpisodeUpdateInput, EpisodeUncheckedUpdateInput>
  }

  /**
   * Episode delete
   */
  export type EpisodeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Episode
     */
    select?: EpisodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Episode
     */
    omit?: EpisodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpisodeInclude<ExtArgs> | null
    /**
     * Filter which Episode to delete.
     */
    where: EpisodeWhereUniqueInput
  }

  /**
   * Episode deleteMany
   */
  export type EpisodeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Episodes to delete
     */
    where?: EpisodeWhereInput
    /**
     * Limit how many Episodes to delete.
     */
    limit?: number
  }

  /**
   * Episode.mirrors
   */
  export type Episode$mirrorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mirror
     */
    select?: MirrorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mirror
     */
    omit?: MirrorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MirrorInclude<ExtArgs> | null
    where?: MirrorWhereInput
    orderBy?: MirrorOrderByWithRelationInput | MirrorOrderByWithRelationInput[]
    cursor?: MirrorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MirrorScalarFieldEnum | MirrorScalarFieldEnum[]
  }

  /**
   * Episode without action
   */
  export type EpisodeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Episode
     */
    select?: EpisodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Episode
     */
    omit?: EpisodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpisodeInclude<ExtArgs> | null
  }


  /**
   * Model Mirror
   */

  export type AggregateMirror = {
    _count: MirrorCountAggregateOutputType | null
    _avg: MirrorAvgAggregateOutputType | null
    _sum: MirrorSumAggregateOutputType | null
    _min: MirrorMinAggregateOutputType | null
    _max: MirrorMaxAggregateOutputType | null
  }

  export type MirrorAvgAggregateOutputType = {
    id: number | null
    episodeId: number | null
  }

  export type MirrorSumAggregateOutputType = {
    id: number | null
    episodeId: number | null
  }

  export type MirrorMinAggregateOutputType = {
    id: number | null
    episodeId: number | null
    resolution: $Enums.Resolution | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MirrorMaxAggregateOutputType = {
    id: number | null
    episodeId: number | null
    resolution: $Enums.Resolution | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MirrorCountAggregateOutputType = {
    id: number
    episodeId: number
    resolution: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MirrorAvgAggregateInputType = {
    id?: true
    episodeId?: true
  }

  export type MirrorSumAggregateInputType = {
    id?: true
    episodeId?: true
  }

  export type MirrorMinAggregateInputType = {
    id?: true
    episodeId?: true
    resolution?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MirrorMaxAggregateInputType = {
    id?: true
    episodeId?: true
    resolution?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MirrorCountAggregateInputType = {
    id?: true
    episodeId?: true
    resolution?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MirrorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Mirror to aggregate.
     */
    where?: MirrorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mirrors to fetch.
     */
    orderBy?: MirrorOrderByWithRelationInput | MirrorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MirrorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mirrors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mirrors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Mirrors
    **/
    _count?: true | MirrorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MirrorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MirrorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MirrorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MirrorMaxAggregateInputType
  }

  export type GetMirrorAggregateType<T extends MirrorAggregateArgs> = {
        [P in keyof T & keyof AggregateMirror]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMirror[P]>
      : GetScalarType<T[P], AggregateMirror[P]>
  }




  export type MirrorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MirrorWhereInput
    orderBy?: MirrorOrderByWithAggregationInput | MirrorOrderByWithAggregationInput[]
    by: MirrorScalarFieldEnum[] | MirrorScalarFieldEnum
    having?: MirrorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MirrorCountAggregateInputType | true
    _avg?: MirrorAvgAggregateInputType
    _sum?: MirrorSumAggregateInputType
    _min?: MirrorMinAggregateInputType
    _max?: MirrorMaxAggregateInputType
  }

  export type MirrorGroupByOutputType = {
    id: number
    episodeId: number
    resolution: $Enums.Resolution
    createdAt: Date
    updatedAt: Date
    _count: MirrorCountAggregateOutputType | null
    _avg: MirrorAvgAggregateOutputType | null
    _sum: MirrorSumAggregateOutputType | null
    _min: MirrorMinAggregateOutputType | null
    _max: MirrorMaxAggregateOutputType | null
  }

  type GetMirrorGroupByPayload<T extends MirrorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MirrorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MirrorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MirrorGroupByOutputType[P]>
            : GetScalarType<T[P], MirrorGroupByOutputType[P]>
        }
      >
    >


  export type MirrorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    episodeId?: boolean
    resolution?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    episode?: boolean | EpisodeDefaultArgs<ExtArgs>
    servers?: boolean | Mirror$serversArgs<ExtArgs>
    _count?: boolean | MirrorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mirror"]>

  export type MirrorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    episodeId?: boolean
    resolution?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    episode?: boolean | EpisodeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mirror"]>

  export type MirrorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    episodeId?: boolean
    resolution?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    episode?: boolean | EpisodeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mirror"]>

  export type MirrorSelectScalar = {
    id?: boolean
    episodeId?: boolean
    resolution?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MirrorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "episodeId" | "resolution" | "createdAt" | "updatedAt", ExtArgs["result"]["mirror"]>
  export type MirrorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    episode?: boolean | EpisodeDefaultArgs<ExtArgs>
    servers?: boolean | Mirror$serversArgs<ExtArgs>
    _count?: boolean | MirrorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MirrorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    episode?: boolean | EpisodeDefaultArgs<ExtArgs>
  }
  export type MirrorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    episode?: boolean | EpisodeDefaultArgs<ExtArgs>
  }

  export type $MirrorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Mirror"
    objects: {
      episode: Prisma.$EpisodePayload<ExtArgs>
      servers: Prisma.$StreamServerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      episodeId: number
      resolution: $Enums.Resolution
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["mirror"]>
    composites: {}
  }

  type MirrorGetPayload<S extends boolean | null | undefined | MirrorDefaultArgs> = $Result.GetResult<Prisma.$MirrorPayload, S>

  type MirrorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MirrorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MirrorCountAggregateInputType | true
    }

  export interface MirrorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Mirror'], meta: { name: 'Mirror' } }
    /**
     * Find zero or one Mirror that matches the filter.
     * @param {MirrorFindUniqueArgs} args - Arguments to find a Mirror
     * @example
     * // Get one Mirror
     * const mirror = await prisma.mirror.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MirrorFindUniqueArgs>(args: SelectSubset<T, MirrorFindUniqueArgs<ExtArgs>>): Prisma__MirrorClient<$Result.GetResult<Prisma.$MirrorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Mirror that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MirrorFindUniqueOrThrowArgs} args - Arguments to find a Mirror
     * @example
     * // Get one Mirror
     * const mirror = await prisma.mirror.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MirrorFindUniqueOrThrowArgs>(args: SelectSubset<T, MirrorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MirrorClient<$Result.GetResult<Prisma.$MirrorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mirror that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MirrorFindFirstArgs} args - Arguments to find a Mirror
     * @example
     * // Get one Mirror
     * const mirror = await prisma.mirror.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MirrorFindFirstArgs>(args?: SelectSubset<T, MirrorFindFirstArgs<ExtArgs>>): Prisma__MirrorClient<$Result.GetResult<Prisma.$MirrorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mirror that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MirrorFindFirstOrThrowArgs} args - Arguments to find a Mirror
     * @example
     * // Get one Mirror
     * const mirror = await prisma.mirror.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MirrorFindFirstOrThrowArgs>(args?: SelectSubset<T, MirrorFindFirstOrThrowArgs<ExtArgs>>): Prisma__MirrorClient<$Result.GetResult<Prisma.$MirrorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Mirrors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MirrorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Mirrors
     * const mirrors = await prisma.mirror.findMany()
     * 
     * // Get first 10 Mirrors
     * const mirrors = await prisma.mirror.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mirrorWithIdOnly = await prisma.mirror.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MirrorFindManyArgs>(args?: SelectSubset<T, MirrorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MirrorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Mirror.
     * @param {MirrorCreateArgs} args - Arguments to create a Mirror.
     * @example
     * // Create one Mirror
     * const Mirror = await prisma.mirror.create({
     *   data: {
     *     // ... data to create a Mirror
     *   }
     * })
     * 
     */
    create<T extends MirrorCreateArgs>(args: SelectSubset<T, MirrorCreateArgs<ExtArgs>>): Prisma__MirrorClient<$Result.GetResult<Prisma.$MirrorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Mirrors.
     * @param {MirrorCreateManyArgs} args - Arguments to create many Mirrors.
     * @example
     * // Create many Mirrors
     * const mirror = await prisma.mirror.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MirrorCreateManyArgs>(args?: SelectSubset<T, MirrorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Mirrors and returns the data saved in the database.
     * @param {MirrorCreateManyAndReturnArgs} args - Arguments to create many Mirrors.
     * @example
     * // Create many Mirrors
     * const mirror = await prisma.mirror.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Mirrors and only return the `id`
     * const mirrorWithIdOnly = await prisma.mirror.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MirrorCreateManyAndReturnArgs>(args?: SelectSubset<T, MirrorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MirrorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Mirror.
     * @param {MirrorDeleteArgs} args - Arguments to delete one Mirror.
     * @example
     * // Delete one Mirror
     * const Mirror = await prisma.mirror.delete({
     *   where: {
     *     // ... filter to delete one Mirror
     *   }
     * })
     * 
     */
    delete<T extends MirrorDeleteArgs>(args: SelectSubset<T, MirrorDeleteArgs<ExtArgs>>): Prisma__MirrorClient<$Result.GetResult<Prisma.$MirrorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Mirror.
     * @param {MirrorUpdateArgs} args - Arguments to update one Mirror.
     * @example
     * // Update one Mirror
     * const mirror = await prisma.mirror.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MirrorUpdateArgs>(args: SelectSubset<T, MirrorUpdateArgs<ExtArgs>>): Prisma__MirrorClient<$Result.GetResult<Prisma.$MirrorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Mirrors.
     * @param {MirrorDeleteManyArgs} args - Arguments to filter Mirrors to delete.
     * @example
     * // Delete a few Mirrors
     * const { count } = await prisma.mirror.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MirrorDeleteManyArgs>(args?: SelectSubset<T, MirrorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mirrors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MirrorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Mirrors
     * const mirror = await prisma.mirror.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MirrorUpdateManyArgs>(args: SelectSubset<T, MirrorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mirrors and returns the data updated in the database.
     * @param {MirrorUpdateManyAndReturnArgs} args - Arguments to update many Mirrors.
     * @example
     * // Update many Mirrors
     * const mirror = await prisma.mirror.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Mirrors and only return the `id`
     * const mirrorWithIdOnly = await prisma.mirror.updateManyAndReturn({
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
    updateManyAndReturn<T extends MirrorUpdateManyAndReturnArgs>(args: SelectSubset<T, MirrorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MirrorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Mirror.
     * @param {MirrorUpsertArgs} args - Arguments to update or create a Mirror.
     * @example
     * // Update or create a Mirror
     * const mirror = await prisma.mirror.upsert({
     *   create: {
     *     // ... data to create a Mirror
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mirror we want to update
     *   }
     * })
     */
    upsert<T extends MirrorUpsertArgs>(args: SelectSubset<T, MirrorUpsertArgs<ExtArgs>>): Prisma__MirrorClient<$Result.GetResult<Prisma.$MirrorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Mirrors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MirrorCountArgs} args - Arguments to filter Mirrors to count.
     * @example
     * // Count the number of Mirrors
     * const count = await prisma.mirror.count({
     *   where: {
     *     // ... the filter for the Mirrors we want to count
     *   }
     * })
    **/
    count<T extends MirrorCountArgs>(
      args?: Subset<T, MirrorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MirrorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Mirror.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MirrorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MirrorAggregateArgs>(args: Subset<T, MirrorAggregateArgs>): Prisma.PrismaPromise<GetMirrorAggregateType<T>>

    /**
     * Group by Mirror.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MirrorGroupByArgs} args - Group by arguments.
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
      T extends MirrorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MirrorGroupByArgs['orderBy'] }
        : { orderBy?: MirrorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MirrorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMirrorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Mirror model
   */
  readonly fields: MirrorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Mirror.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MirrorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    episode<T extends EpisodeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EpisodeDefaultArgs<ExtArgs>>): Prisma__EpisodeClient<$Result.GetResult<Prisma.$EpisodePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    servers<T extends Mirror$serversArgs<ExtArgs> = {}>(args?: Subset<T, Mirror$serversArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StreamServerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Mirror model
   */
  interface MirrorFieldRefs {
    readonly id: FieldRef<"Mirror", 'Int'>
    readonly episodeId: FieldRef<"Mirror", 'Int'>
    readonly resolution: FieldRef<"Mirror", 'Resolution'>
    readonly createdAt: FieldRef<"Mirror", 'DateTime'>
    readonly updatedAt: FieldRef<"Mirror", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Mirror findUnique
   */
  export type MirrorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mirror
     */
    select?: MirrorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mirror
     */
    omit?: MirrorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MirrorInclude<ExtArgs> | null
    /**
     * Filter, which Mirror to fetch.
     */
    where: MirrorWhereUniqueInput
  }

  /**
   * Mirror findUniqueOrThrow
   */
  export type MirrorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mirror
     */
    select?: MirrorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mirror
     */
    omit?: MirrorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MirrorInclude<ExtArgs> | null
    /**
     * Filter, which Mirror to fetch.
     */
    where: MirrorWhereUniqueInput
  }

  /**
   * Mirror findFirst
   */
  export type MirrorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mirror
     */
    select?: MirrorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mirror
     */
    omit?: MirrorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MirrorInclude<ExtArgs> | null
    /**
     * Filter, which Mirror to fetch.
     */
    where?: MirrorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mirrors to fetch.
     */
    orderBy?: MirrorOrderByWithRelationInput | MirrorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Mirrors.
     */
    cursor?: MirrorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mirrors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mirrors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Mirrors.
     */
    distinct?: MirrorScalarFieldEnum | MirrorScalarFieldEnum[]
  }

  /**
   * Mirror findFirstOrThrow
   */
  export type MirrorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mirror
     */
    select?: MirrorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mirror
     */
    omit?: MirrorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MirrorInclude<ExtArgs> | null
    /**
     * Filter, which Mirror to fetch.
     */
    where?: MirrorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mirrors to fetch.
     */
    orderBy?: MirrorOrderByWithRelationInput | MirrorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Mirrors.
     */
    cursor?: MirrorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mirrors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mirrors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Mirrors.
     */
    distinct?: MirrorScalarFieldEnum | MirrorScalarFieldEnum[]
  }

  /**
   * Mirror findMany
   */
  export type MirrorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mirror
     */
    select?: MirrorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mirror
     */
    omit?: MirrorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MirrorInclude<ExtArgs> | null
    /**
     * Filter, which Mirrors to fetch.
     */
    where?: MirrorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mirrors to fetch.
     */
    orderBy?: MirrorOrderByWithRelationInput | MirrorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Mirrors.
     */
    cursor?: MirrorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mirrors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mirrors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Mirrors.
     */
    distinct?: MirrorScalarFieldEnum | MirrorScalarFieldEnum[]
  }

  /**
   * Mirror create
   */
  export type MirrorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mirror
     */
    select?: MirrorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mirror
     */
    omit?: MirrorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MirrorInclude<ExtArgs> | null
    /**
     * The data needed to create a Mirror.
     */
    data: XOR<MirrorCreateInput, MirrorUncheckedCreateInput>
  }

  /**
   * Mirror createMany
   */
  export type MirrorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Mirrors.
     */
    data: MirrorCreateManyInput | MirrorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Mirror createManyAndReturn
   */
  export type MirrorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mirror
     */
    select?: MirrorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Mirror
     */
    omit?: MirrorOmit<ExtArgs> | null
    /**
     * The data used to create many Mirrors.
     */
    data: MirrorCreateManyInput | MirrorCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MirrorIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Mirror update
   */
  export type MirrorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mirror
     */
    select?: MirrorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mirror
     */
    omit?: MirrorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MirrorInclude<ExtArgs> | null
    /**
     * The data needed to update a Mirror.
     */
    data: XOR<MirrorUpdateInput, MirrorUncheckedUpdateInput>
    /**
     * Choose, which Mirror to update.
     */
    where: MirrorWhereUniqueInput
  }

  /**
   * Mirror updateMany
   */
  export type MirrorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Mirrors.
     */
    data: XOR<MirrorUpdateManyMutationInput, MirrorUncheckedUpdateManyInput>
    /**
     * Filter which Mirrors to update
     */
    where?: MirrorWhereInput
    /**
     * Limit how many Mirrors to update.
     */
    limit?: number
  }

  /**
   * Mirror updateManyAndReturn
   */
  export type MirrorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mirror
     */
    select?: MirrorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Mirror
     */
    omit?: MirrorOmit<ExtArgs> | null
    /**
     * The data used to update Mirrors.
     */
    data: XOR<MirrorUpdateManyMutationInput, MirrorUncheckedUpdateManyInput>
    /**
     * Filter which Mirrors to update
     */
    where?: MirrorWhereInput
    /**
     * Limit how many Mirrors to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MirrorIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Mirror upsert
   */
  export type MirrorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mirror
     */
    select?: MirrorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mirror
     */
    omit?: MirrorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MirrorInclude<ExtArgs> | null
    /**
     * The filter to search for the Mirror to update in case it exists.
     */
    where: MirrorWhereUniqueInput
    /**
     * In case the Mirror found by the `where` argument doesn't exist, create a new Mirror with this data.
     */
    create: XOR<MirrorCreateInput, MirrorUncheckedCreateInput>
    /**
     * In case the Mirror was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MirrorUpdateInput, MirrorUncheckedUpdateInput>
  }

  /**
   * Mirror delete
   */
  export type MirrorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mirror
     */
    select?: MirrorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mirror
     */
    omit?: MirrorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MirrorInclude<ExtArgs> | null
    /**
     * Filter which Mirror to delete.
     */
    where: MirrorWhereUniqueInput
  }

  /**
   * Mirror deleteMany
   */
  export type MirrorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Mirrors to delete
     */
    where?: MirrorWhereInput
    /**
     * Limit how many Mirrors to delete.
     */
    limit?: number
  }

  /**
   * Mirror.servers
   */
  export type Mirror$serversArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreamServer
     */
    select?: StreamServerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StreamServer
     */
    omit?: StreamServerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamServerInclude<ExtArgs> | null
    where?: StreamServerWhereInput
    orderBy?: StreamServerOrderByWithRelationInput | StreamServerOrderByWithRelationInput[]
    cursor?: StreamServerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StreamServerScalarFieldEnum | StreamServerScalarFieldEnum[]
  }

  /**
   * Mirror without action
   */
  export type MirrorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mirror
     */
    select?: MirrorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mirror
     */
    omit?: MirrorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MirrorInclude<ExtArgs> | null
  }


  /**
   * Model StreamServer
   */

  export type AggregateStreamServer = {
    _count: StreamServerCountAggregateOutputType | null
    _avg: StreamServerAvgAggregateOutputType | null
    _sum: StreamServerSumAggregateOutputType | null
    _min: StreamServerMinAggregateOutputType | null
    _max: StreamServerMaxAggregateOutputType | null
  }

  export type StreamServerAvgAggregateOutputType = {
    id: number | null
    mirrorId: number | null
  }

  export type StreamServerSumAggregateOutputType = {
    id: number | null
    mirrorId: number | null
  }

  export type StreamServerMinAggregateOutputType = {
    id: number | null
    mirrorId: number | null
    platform: string | null
    dataContent: string | null
    embedUrl: string | null
    embedHtml: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StreamServerMaxAggregateOutputType = {
    id: number | null
    mirrorId: number | null
    platform: string | null
    dataContent: string | null
    embedUrl: string | null
    embedHtml: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StreamServerCountAggregateOutputType = {
    id: number
    mirrorId: number
    platform: number
    dataContent: number
    embedUrl: number
    embedHtml: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type StreamServerAvgAggregateInputType = {
    id?: true
    mirrorId?: true
  }

  export type StreamServerSumAggregateInputType = {
    id?: true
    mirrorId?: true
  }

  export type StreamServerMinAggregateInputType = {
    id?: true
    mirrorId?: true
    platform?: true
    dataContent?: true
    embedUrl?: true
    embedHtml?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StreamServerMaxAggregateInputType = {
    id?: true
    mirrorId?: true
    platform?: true
    dataContent?: true
    embedUrl?: true
    embedHtml?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StreamServerCountAggregateInputType = {
    id?: true
    mirrorId?: true
    platform?: true
    dataContent?: true
    embedUrl?: true
    embedHtml?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type StreamServerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StreamServer to aggregate.
     */
    where?: StreamServerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StreamServers to fetch.
     */
    orderBy?: StreamServerOrderByWithRelationInput | StreamServerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StreamServerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StreamServers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StreamServers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StreamServers
    **/
    _count?: true | StreamServerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StreamServerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StreamServerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StreamServerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StreamServerMaxAggregateInputType
  }

  export type GetStreamServerAggregateType<T extends StreamServerAggregateArgs> = {
        [P in keyof T & keyof AggregateStreamServer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStreamServer[P]>
      : GetScalarType<T[P], AggregateStreamServer[P]>
  }




  export type StreamServerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StreamServerWhereInput
    orderBy?: StreamServerOrderByWithAggregationInput | StreamServerOrderByWithAggregationInput[]
    by: StreamServerScalarFieldEnum[] | StreamServerScalarFieldEnum
    having?: StreamServerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StreamServerCountAggregateInputType | true
    _avg?: StreamServerAvgAggregateInputType
    _sum?: StreamServerSumAggregateInputType
    _min?: StreamServerMinAggregateInputType
    _max?: StreamServerMaxAggregateInputType
  }

  export type StreamServerGroupByOutputType = {
    id: number
    mirrorId: number
    platform: string
    dataContent: string | null
    embedUrl: string | null
    embedHtml: string | null
    createdAt: Date
    updatedAt: Date
    _count: StreamServerCountAggregateOutputType | null
    _avg: StreamServerAvgAggregateOutputType | null
    _sum: StreamServerSumAggregateOutputType | null
    _min: StreamServerMinAggregateOutputType | null
    _max: StreamServerMaxAggregateOutputType | null
  }

  type GetStreamServerGroupByPayload<T extends StreamServerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StreamServerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StreamServerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StreamServerGroupByOutputType[P]>
            : GetScalarType<T[P], StreamServerGroupByOutputType[P]>
        }
      >
    >


  export type StreamServerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mirrorId?: boolean
    platform?: boolean
    dataContent?: boolean
    embedUrl?: boolean
    embedHtml?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    mirror?: boolean | MirrorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["streamServer"]>

  export type StreamServerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mirrorId?: boolean
    platform?: boolean
    dataContent?: boolean
    embedUrl?: boolean
    embedHtml?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    mirror?: boolean | MirrorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["streamServer"]>

  export type StreamServerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mirrorId?: boolean
    platform?: boolean
    dataContent?: boolean
    embedUrl?: boolean
    embedHtml?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    mirror?: boolean | MirrorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["streamServer"]>

  export type StreamServerSelectScalar = {
    id?: boolean
    mirrorId?: boolean
    platform?: boolean
    dataContent?: boolean
    embedUrl?: boolean
    embedHtml?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type StreamServerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "mirrorId" | "platform" | "dataContent" | "embedUrl" | "embedHtml" | "createdAt" | "updatedAt", ExtArgs["result"]["streamServer"]>
  export type StreamServerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mirror?: boolean | MirrorDefaultArgs<ExtArgs>
  }
  export type StreamServerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mirror?: boolean | MirrorDefaultArgs<ExtArgs>
  }
  export type StreamServerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mirror?: boolean | MirrorDefaultArgs<ExtArgs>
  }

  export type $StreamServerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StreamServer"
    objects: {
      mirror: Prisma.$MirrorPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      mirrorId: number
      platform: string
      dataContent: string | null
      embedUrl: string | null
      embedHtml: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["streamServer"]>
    composites: {}
  }

  type StreamServerGetPayload<S extends boolean | null | undefined | StreamServerDefaultArgs> = $Result.GetResult<Prisma.$StreamServerPayload, S>

  type StreamServerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StreamServerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StreamServerCountAggregateInputType | true
    }

  export interface StreamServerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StreamServer'], meta: { name: 'StreamServer' } }
    /**
     * Find zero or one StreamServer that matches the filter.
     * @param {StreamServerFindUniqueArgs} args - Arguments to find a StreamServer
     * @example
     * // Get one StreamServer
     * const streamServer = await prisma.streamServer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StreamServerFindUniqueArgs>(args: SelectSubset<T, StreamServerFindUniqueArgs<ExtArgs>>): Prisma__StreamServerClient<$Result.GetResult<Prisma.$StreamServerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StreamServer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StreamServerFindUniqueOrThrowArgs} args - Arguments to find a StreamServer
     * @example
     * // Get one StreamServer
     * const streamServer = await prisma.streamServer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StreamServerFindUniqueOrThrowArgs>(args: SelectSubset<T, StreamServerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StreamServerClient<$Result.GetResult<Prisma.$StreamServerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StreamServer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreamServerFindFirstArgs} args - Arguments to find a StreamServer
     * @example
     * // Get one StreamServer
     * const streamServer = await prisma.streamServer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StreamServerFindFirstArgs>(args?: SelectSubset<T, StreamServerFindFirstArgs<ExtArgs>>): Prisma__StreamServerClient<$Result.GetResult<Prisma.$StreamServerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StreamServer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreamServerFindFirstOrThrowArgs} args - Arguments to find a StreamServer
     * @example
     * // Get one StreamServer
     * const streamServer = await prisma.streamServer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StreamServerFindFirstOrThrowArgs>(args?: SelectSubset<T, StreamServerFindFirstOrThrowArgs<ExtArgs>>): Prisma__StreamServerClient<$Result.GetResult<Prisma.$StreamServerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StreamServers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreamServerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StreamServers
     * const streamServers = await prisma.streamServer.findMany()
     * 
     * // Get first 10 StreamServers
     * const streamServers = await prisma.streamServer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const streamServerWithIdOnly = await prisma.streamServer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StreamServerFindManyArgs>(args?: SelectSubset<T, StreamServerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StreamServerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StreamServer.
     * @param {StreamServerCreateArgs} args - Arguments to create a StreamServer.
     * @example
     * // Create one StreamServer
     * const StreamServer = await prisma.streamServer.create({
     *   data: {
     *     // ... data to create a StreamServer
     *   }
     * })
     * 
     */
    create<T extends StreamServerCreateArgs>(args: SelectSubset<T, StreamServerCreateArgs<ExtArgs>>): Prisma__StreamServerClient<$Result.GetResult<Prisma.$StreamServerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StreamServers.
     * @param {StreamServerCreateManyArgs} args - Arguments to create many StreamServers.
     * @example
     * // Create many StreamServers
     * const streamServer = await prisma.streamServer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StreamServerCreateManyArgs>(args?: SelectSubset<T, StreamServerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StreamServers and returns the data saved in the database.
     * @param {StreamServerCreateManyAndReturnArgs} args - Arguments to create many StreamServers.
     * @example
     * // Create many StreamServers
     * const streamServer = await prisma.streamServer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StreamServers and only return the `id`
     * const streamServerWithIdOnly = await prisma.streamServer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StreamServerCreateManyAndReturnArgs>(args?: SelectSubset<T, StreamServerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StreamServerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a StreamServer.
     * @param {StreamServerDeleteArgs} args - Arguments to delete one StreamServer.
     * @example
     * // Delete one StreamServer
     * const StreamServer = await prisma.streamServer.delete({
     *   where: {
     *     // ... filter to delete one StreamServer
     *   }
     * })
     * 
     */
    delete<T extends StreamServerDeleteArgs>(args: SelectSubset<T, StreamServerDeleteArgs<ExtArgs>>): Prisma__StreamServerClient<$Result.GetResult<Prisma.$StreamServerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StreamServer.
     * @param {StreamServerUpdateArgs} args - Arguments to update one StreamServer.
     * @example
     * // Update one StreamServer
     * const streamServer = await prisma.streamServer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StreamServerUpdateArgs>(args: SelectSubset<T, StreamServerUpdateArgs<ExtArgs>>): Prisma__StreamServerClient<$Result.GetResult<Prisma.$StreamServerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StreamServers.
     * @param {StreamServerDeleteManyArgs} args - Arguments to filter StreamServers to delete.
     * @example
     * // Delete a few StreamServers
     * const { count } = await prisma.streamServer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StreamServerDeleteManyArgs>(args?: SelectSubset<T, StreamServerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StreamServers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreamServerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StreamServers
     * const streamServer = await prisma.streamServer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StreamServerUpdateManyArgs>(args: SelectSubset<T, StreamServerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StreamServers and returns the data updated in the database.
     * @param {StreamServerUpdateManyAndReturnArgs} args - Arguments to update many StreamServers.
     * @example
     * // Update many StreamServers
     * const streamServer = await prisma.streamServer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more StreamServers and only return the `id`
     * const streamServerWithIdOnly = await prisma.streamServer.updateManyAndReturn({
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
    updateManyAndReturn<T extends StreamServerUpdateManyAndReturnArgs>(args: SelectSubset<T, StreamServerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StreamServerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one StreamServer.
     * @param {StreamServerUpsertArgs} args - Arguments to update or create a StreamServer.
     * @example
     * // Update or create a StreamServer
     * const streamServer = await prisma.streamServer.upsert({
     *   create: {
     *     // ... data to create a StreamServer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StreamServer we want to update
     *   }
     * })
     */
    upsert<T extends StreamServerUpsertArgs>(args: SelectSubset<T, StreamServerUpsertArgs<ExtArgs>>): Prisma__StreamServerClient<$Result.GetResult<Prisma.$StreamServerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StreamServers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreamServerCountArgs} args - Arguments to filter StreamServers to count.
     * @example
     * // Count the number of StreamServers
     * const count = await prisma.streamServer.count({
     *   where: {
     *     // ... the filter for the StreamServers we want to count
     *   }
     * })
    **/
    count<T extends StreamServerCountArgs>(
      args?: Subset<T, StreamServerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StreamServerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StreamServer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreamServerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StreamServerAggregateArgs>(args: Subset<T, StreamServerAggregateArgs>): Prisma.PrismaPromise<GetStreamServerAggregateType<T>>

    /**
     * Group by StreamServer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreamServerGroupByArgs} args - Group by arguments.
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
      T extends StreamServerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StreamServerGroupByArgs['orderBy'] }
        : { orderBy?: StreamServerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StreamServerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStreamServerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StreamServer model
   */
  readonly fields: StreamServerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StreamServer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StreamServerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    mirror<T extends MirrorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MirrorDefaultArgs<ExtArgs>>): Prisma__MirrorClient<$Result.GetResult<Prisma.$MirrorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the StreamServer model
   */
  interface StreamServerFieldRefs {
    readonly id: FieldRef<"StreamServer", 'Int'>
    readonly mirrorId: FieldRef<"StreamServer", 'Int'>
    readonly platform: FieldRef<"StreamServer", 'String'>
    readonly dataContent: FieldRef<"StreamServer", 'String'>
    readonly embedUrl: FieldRef<"StreamServer", 'String'>
    readonly embedHtml: FieldRef<"StreamServer", 'String'>
    readonly createdAt: FieldRef<"StreamServer", 'DateTime'>
    readonly updatedAt: FieldRef<"StreamServer", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * StreamServer findUnique
   */
  export type StreamServerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreamServer
     */
    select?: StreamServerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StreamServer
     */
    omit?: StreamServerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamServerInclude<ExtArgs> | null
    /**
     * Filter, which StreamServer to fetch.
     */
    where: StreamServerWhereUniqueInput
  }

  /**
   * StreamServer findUniqueOrThrow
   */
  export type StreamServerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreamServer
     */
    select?: StreamServerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StreamServer
     */
    omit?: StreamServerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamServerInclude<ExtArgs> | null
    /**
     * Filter, which StreamServer to fetch.
     */
    where: StreamServerWhereUniqueInput
  }

  /**
   * StreamServer findFirst
   */
  export type StreamServerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreamServer
     */
    select?: StreamServerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StreamServer
     */
    omit?: StreamServerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamServerInclude<ExtArgs> | null
    /**
     * Filter, which StreamServer to fetch.
     */
    where?: StreamServerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StreamServers to fetch.
     */
    orderBy?: StreamServerOrderByWithRelationInput | StreamServerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StreamServers.
     */
    cursor?: StreamServerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StreamServers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StreamServers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StreamServers.
     */
    distinct?: StreamServerScalarFieldEnum | StreamServerScalarFieldEnum[]
  }

  /**
   * StreamServer findFirstOrThrow
   */
  export type StreamServerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreamServer
     */
    select?: StreamServerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StreamServer
     */
    omit?: StreamServerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamServerInclude<ExtArgs> | null
    /**
     * Filter, which StreamServer to fetch.
     */
    where?: StreamServerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StreamServers to fetch.
     */
    orderBy?: StreamServerOrderByWithRelationInput | StreamServerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StreamServers.
     */
    cursor?: StreamServerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StreamServers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StreamServers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StreamServers.
     */
    distinct?: StreamServerScalarFieldEnum | StreamServerScalarFieldEnum[]
  }

  /**
   * StreamServer findMany
   */
  export type StreamServerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreamServer
     */
    select?: StreamServerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StreamServer
     */
    omit?: StreamServerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamServerInclude<ExtArgs> | null
    /**
     * Filter, which StreamServers to fetch.
     */
    where?: StreamServerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StreamServers to fetch.
     */
    orderBy?: StreamServerOrderByWithRelationInput | StreamServerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StreamServers.
     */
    cursor?: StreamServerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StreamServers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StreamServers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StreamServers.
     */
    distinct?: StreamServerScalarFieldEnum | StreamServerScalarFieldEnum[]
  }

  /**
   * StreamServer create
   */
  export type StreamServerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreamServer
     */
    select?: StreamServerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StreamServer
     */
    omit?: StreamServerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamServerInclude<ExtArgs> | null
    /**
     * The data needed to create a StreamServer.
     */
    data: XOR<StreamServerCreateInput, StreamServerUncheckedCreateInput>
  }

  /**
   * StreamServer createMany
   */
  export type StreamServerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StreamServers.
     */
    data: StreamServerCreateManyInput | StreamServerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StreamServer createManyAndReturn
   */
  export type StreamServerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreamServer
     */
    select?: StreamServerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StreamServer
     */
    omit?: StreamServerOmit<ExtArgs> | null
    /**
     * The data used to create many StreamServers.
     */
    data: StreamServerCreateManyInput | StreamServerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamServerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * StreamServer update
   */
  export type StreamServerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreamServer
     */
    select?: StreamServerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StreamServer
     */
    omit?: StreamServerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamServerInclude<ExtArgs> | null
    /**
     * The data needed to update a StreamServer.
     */
    data: XOR<StreamServerUpdateInput, StreamServerUncheckedUpdateInput>
    /**
     * Choose, which StreamServer to update.
     */
    where: StreamServerWhereUniqueInput
  }

  /**
   * StreamServer updateMany
   */
  export type StreamServerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StreamServers.
     */
    data: XOR<StreamServerUpdateManyMutationInput, StreamServerUncheckedUpdateManyInput>
    /**
     * Filter which StreamServers to update
     */
    where?: StreamServerWhereInput
    /**
     * Limit how many StreamServers to update.
     */
    limit?: number
  }

  /**
   * StreamServer updateManyAndReturn
   */
  export type StreamServerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreamServer
     */
    select?: StreamServerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StreamServer
     */
    omit?: StreamServerOmit<ExtArgs> | null
    /**
     * The data used to update StreamServers.
     */
    data: XOR<StreamServerUpdateManyMutationInput, StreamServerUncheckedUpdateManyInput>
    /**
     * Filter which StreamServers to update
     */
    where?: StreamServerWhereInput
    /**
     * Limit how many StreamServers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamServerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * StreamServer upsert
   */
  export type StreamServerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreamServer
     */
    select?: StreamServerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StreamServer
     */
    omit?: StreamServerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamServerInclude<ExtArgs> | null
    /**
     * The filter to search for the StreamServer to update in case it exists.
     */
    where: StreamServerWhereUniqueInput
    /**
     * In case the StreamServer found by the `where` argument doesn't exist, create a new StreamServer with this data.
     */
    create: XOR<StreamServerCreateInput, StreamServerUncheckedCreateInput>
    /**
     * In case the StreamServer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StreamServerUpdateInput, StreamServerUncheckedUpdateInput>
  }

  /**
   * StreamServer delete
   */
  export type StreamServerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreamServer
     */
    select?: StreamServerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StreamServer
     */
    omit?: StreamServerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamServerInclude<ExtArgs> | null
    /**
     * Filter which StreamServer to delete.
     */
    where: StreamServerWhereUniqueInput
  }

  /**
   * StreamServer deleteMany
   */
  export type StreamServerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StreamServers to delete
     */
    where?: StreamServerWhereInput
    /**
     * Limit how many StreamServers to delete.
     */
    limit?: number
  }

  /**
   * StreamServer without action
   */
  export type StreamServerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreamServer
     */
    select?: StreamServerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StreamServer
     */
    omit?: StreamServerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamServerInclude<ExtArgs> | null
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
    role: 'role',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const AnimeScalarFieldEnum: {
    id: 'id',
    title: 'title',
    titleJapan: 'titleJapan',
    slug: 'slug',
    type: 'type',
    status: 'status',
    studio: 'studio',
    totalEpisodes: 'totalEpisodes',
    releaseDate: 'releaseDate',
    rating: 'rating',
    synopsis: 'synopsis',
    url: 'url',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AnimeScalarFieldEnum = (typeof AnimeScalarFieldEnum)[keyof typeof AnimeScalarFieldEnum]


  export const GenreScalarFieldEnum: {
    id: 'id',
    title: 'title',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type GenreScalarFieldEnum = (typeof GenreScalarFieldEnum)[keyof typeof GenreScalarFieldEnum]


  export const EpisodeScalarFieldEnum: {
    id: 'id',
    animeId: 'animeId',
    slug: 'slug',
    title: 'title',
    episodeNumber: 'episodeNumber',
    mirrorLink: 'mirrorLink',
    urlEpisode: 'urlEpisode',
    releaseDate: 'releaseDate',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EpisodeScalarFieldEnum = (typeof EpisodeScalarFieldEnum)[keyof typeof EpisodeScalarFieldEnum]


  export const MirrorScalarFieldEnum: {
    id: 'id',
    episodeId: 'episodeId',
    resolution: 'resolution',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MirrorScalarFieldEnum = (typeof MirrorScalarFieldEnum)[keyof typeof MirrorScalarFieldEnum]


  export const StreamServerScalarFieldEnum: {
    id: 'id',
    mirrorId: 'mirrorId',
    platform: 'platform',
    dataContent: 'dataContent',
    embedUrl: 'embedUrl',
    embedHtml: 'embedHtml',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type StreamServerScalarFieldEnum = (typeof StreamServerScalarFieldEnum)[keyof typeof StreamServerScalarFieldEnum]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'AnimeStatus'
   */
  export type EnumAnimeStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AnimeStatus'>
    


  /**
   * Reference to a field of type 'AnimeStatus[]'
   */
  export type ListEnumAnimeStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AnimeStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Resolution'
   */
  export type EnumResolutionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Resolution'>
    


  /**
   * Reference to a field of type 'Resolution[]'
   */
  export type ListEnumResolutionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Resolution[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    username?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    role?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
  }, "id" | "username">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    role?: SortOrder
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
    role?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type AnimeWhereInput = {
    AND?: AnimeWhereInput | AnimeWhereInput[]
    OR?: AnimeWhereInput[]
    NOT?: AnimeWhereInput | AnimeWhereInput[]
    id?: IntFilter<"Anime"> | number
    title?: StringFilter<"Anime"> | string
    titleJapan?: StringNullableFilter<"Anime"> | string | null
    slug?: StringFilter<"Anime"> | string
    type?: StringNullableFilter<"Anime"> | string | null
    status?: EnumAnimeStatusFilter<"Anime"> | $Enums.AnimeStatus
    studio?: StringNullableFilter<"Anime"> | string | null
    totalEpisodes?: IntNullableFilter<"Anime"> | number | null
    releaseDate?: DateTimeNullableFilter<"Anime"> | Date | string | null
    rating?: FloatNullableFilter<"Anime"> | number | null
    synopsis?: StringNullableFilter<"Anime"> | string | null
    url?: StringNullableFilter<"Anime"> | string | null
    isActive?: BoolFilter<"Anime"> | boolean
    createdAt?: DateTimeFilter<"Anime"> | Date | string
    updatedAt?: DateTimeFilter<"Anime"> | Date | string
    genres?: GenreListRelationFilter
    episodes?: EpisodeListRelationFilter
  }

  export type AnimeOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    titleJapan?: SortOrderInput | SortOrder
    slug?: SortOrder
    type?: SortOrderInput | SortOrder
    status?: SortOrder
    studio?: SortOrderInput | SortOrder
    totalEpisodes?: SortOrderInput | SortOrder
    releaseDate?: SortOrderInput | SortOrder
    rating?: SortOrderInput | SortOrder
    synopsis?: SortOrderInput | SortOrder
    url?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    genres?: GenreOrderByRelationAggregateInput
    episodes?: EpisodeOrderByRelationAggregateInput
  }

  export type AnimeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    slug?: string
    AND?: AnimeWhereInput | AnimeWhereInput[]
    OR?: AnimeWhereInput[]
    NOT?: AnimeWhereInput | AnimeWhereInput[]
    title?: StringFilter<"Anime"> | string
    titleJapan?: StringNullableFilter<"Anime"> | string | null
    type?: StringNullableFilter<"Anime"> | string | null
    status?: EnumAnimeStatusFilter<"Anime"> | $Enums.AnimeStatus
    studio?: StringNullableFilter<"Anime"> | string | null
    totalEpisodes?: IntNullableFilter<"Anime"> | number | null
    releaseDate?: DateTimeNullableFilter<"Anime"> | Date | string | null
    rating?: FloatNullableFilter<"Anime"> | number | null
    synopsis?: StringNullableFilter<"Anime"> | string | null
    url?: StringNullableFilter<"Anime"> | string | null
    isActive?: BoolFilter<"Anime"> | boolean
    createdAt?: DateTimeFilter<"Anime"> | Date | string
    updatedAt?: DateTimeFilter<"Anime"> | Date | string
    genres?: GenreListRelationFilter
    episodes?: EpisodeListRelationFilter
  }, "id" | "slug">

  export type AnimeOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    titleJapan?: SortOrderInput | SortOrder
    slug?: SortOrder
    type?: SortOrderInput | SortOrder
    status?: SortOrder
    studio?: SortOrderInput | SortOrder
    totalEpisodes?: SortOrderInput | SortOrder
    releaseDate?: SortOrderInput | SortOrder
    rating?: SortOrderInput | SortOrder
    synopsis?: SortOrderInput | SortOrder
    url?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AnimeCountOrderByAggregateInput
    _avg?: AnimeAvgOrderByAggregateInput
    _max?: AnimeMaxOrderByAggregateInput
    _min?: AnimeMinOrderByAggregateInput
    _sum?: AnimeSumOrderByAggregateInput
  }

  export type AnimeScalarWhereWithAggregatesInput = {
    AND?: AnimeScalarWhereWithAggregatesInput | AnimeScalarWhereWithAggregatesInput[]
    OR?: AnimeScalarWhereWithAggregatesInput[]
    NOT?: AnimeScalarWhereWithAggregatesInput | AnimeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Anime"> | number
    title?: StringWithAggregatesFilter<"Anime"> | string
    titleJapan?: StringNullableWithAggregatesFilter<"Anime"> | string | null
    slug?: StringWithAggregatesFilter<"Anime"> | string
    type?: StringNullableWithAggregatesFilter<"Anime"> | string | null
    status?: EnumAnimeStatusWithAggregatesFilter<"Anime"> | $Enums.AnimeStatus
    studio?: StringNullableWithAggregatesFilter<"Anime"> | string | null
    totalEpisodes?: IntNullableWithAggregatesFilter<"Anime"> | number | null
    releaseDate?: DateTimeNullableWithAggregatesFilter<"Anime"> | Date | string | null
    rating?: FloatNullableWithAggregatesFilter<"Anime"> | number | null
    synopsis?: StringNullableWithAggregatesFilter<"Anime"> | string | null
    url?: StringNullableWithAggregatesFilter<"Anime"> | string | null
    isActive?: BoolWithAggregatesFilter<"Anime"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Anime"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Anime"> | Date | string
  }

  export type GenreWhereInput = {
    AND?: GenreWhereInput | GenreWhereInput[]
    OR?: GenreWhereInput[]
    NOT?: GenreWhereInput | GenreWhereInput[]
    id?: IntFilter<"Genre"> | number
    title?: StringFilter<"Genre"> | string
    isActive?: BoolFilter<"Genre"> | boolean
    createdAt?: DateTimeFilter<"Genre"> | Date | string
    updatedAt?: DateTimeFilter<"Genre"> | Date | string
    animes?: AnimeListRelationFilter
  }

  export type GenreOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    animes?: AnimeOrderByRelationAggregateInput
  }

  export type GenreWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    title?: string
    AND?: GenreWhereInput | GenreWhereInput[]
    OR?: GenreWhereInput[]
    NOT?: GenreWhereInput | GenreWhereInput[]
    isActive?: BoolFilter<"Genre"> | boolean
    createdAt?: DateTimeFilter<"Genre"> | Date | string
    updatedAt?: DateTimeFilter<"Genre"> | Date | string
    animes?: AnimeListRelationFilter
  }, "id" | "title">

  export type GenreOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: GenreCountOrderByAggregateInput
    _avg?: GenreAvgOrderByAggregateInput
    _max?: GenreMaxOrderByAggregateInput
    _min?: GenreMinOrderByAggregateInput
    _sum?: GenreSumOrderByAggregateInput
  }

  export type GenreScalarWhereWithAggregatesInput = {
    AND?: GenreScalarWhereWithAggregatesInput | GenreScalarWhereWithAggregatesInput[]
    OR?: GenreScalarWhereWithAggregatesInput[]
    NOT?: GenreScalarWhereWithAggregatesInput | GenreScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Genre"> | number
    title?: StringWithAggregatesFilter<"Genre"> | string
    isActive?: BoolWithAggregatesFilter<"Genre"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Genre"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Genre"> | Date | string
  }

  export type EpisodeWhereInput = {
    AND?: EpisodeWhereInput | EpisodeWhereInput[]
    OR?: EpisodeWhereInput[]
    NOT?: EpisodeWhereInput | EpisodeWhereInput[]
    id?: IntFilter<"Episode"> | number
    animeId?: IntFilter<"Episode"> | number
    slug?: StringFilter<"Episode"> | string
    title?: StringNullableFilter<"Episode"> | string | null
    episodeNumber?: IntFilter<"Episode"> | number
    mirrorLink?: StringNullableFilter<"Episode"> | string | null
    urlEpisode?: StringNullableFilter<"Episode"> | string | null
    releaseDate?: DateTimeNullableFilter<"Episode"> | Date | string | null
    createdAt?: DateTimeFilter<"Episode"> | Date | string
    updatedAt?: DateTimeFilter<"Episode"> | Date | string
    anime?: XOR<AnimeScalarRelationFilter, AnimeWhereInput>
    mirrors?: MirrorListRelationFilter
  }

  export type EpisodeOrderByWithRelationInput = {
    id?: SortOrder
    animeId?: SortOrder
    slug?: SortOrder
    title?: SortOrderInput | SortOrder
    episodeNumber?: SortOrder
    mirrorLink?: SortOrderInput | SortOrder
    urlEpisode?: SortOrderInput | SortOrder
    releaseDate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    anime?: AnimeOrderByWithRelationInput
    mirrors?: MirrorOrderByRelationAggregateInput
  }

  export type EpisodeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    slug?: string
    AND?: EpisodeWhereInput | EpisodeWhereInput[]
    OR?: EpisodeWhereInput[]
    NOT?: EpisodeWhereInput | EpisodeWhereInput[]
    animeId?: IntFilter<"Episode"> | number
    title?: StringNullableFilter<"Episode"> | string | null
    episodeNumber?: IntFilter<"Episode"> | number
    mirrorLink?: StringNullableFilter<"Episode"> | string | null
    urlEpisode?: StringNullableFilter<"Episode"> | string | null
    releaseDate?: DateTimeNullableFilter<"Episode"> | Date | string | null
    createdAt?: DateTimeFilter<"Episode"> | Date | string
    updatedAt?: DateTimeFilter<"Episode"> | Date | string
    anime?: XOR<AnimeScalarRelationFilter, AnimeWhereInput>
    mirrors?: MirrorListRelationFilter
  }, "id" | "slug">

  export type EpisodeOrderByWithAggregationInput = {
    id?: SortOrder
    animeId?: SortOrder
    slug?: SortOrder
    title?: SortOrderInput | SortOrder
    episodeNumber?: SortOrder
    mirrorLink?: SortOrderInput | SortOrder
    urlEpisode?: SortOrderInput | SortOrder
    releaseDate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EpisodeCountOrderByAggregateInput
    _avg?: EpisodeAvgOrderByAggregateInput
    _max?: EpisodeMaxOrderByAggregateInput
    _min?: EpisodeMinOrderByAggregateInput
    _sum?: EpisodeSumOrderByAggregateInput
  }

  export type EpisodeScalarWhereWithAggregatesInput = {
    AND?: EpisodeScalarWhereWithAggregatesInput | EpisodeScalarWhereWithAggregatesInput[]
    OR?: EpisodeScalarWhereWithAggregatesInput[]
    NOT?: EpisodeScalarWhereWithAggregatesInput | EpisodeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Episode"> | number
    animeId?: IntWithAggregatesFilter<"Episode"> | number
    slug?: StringWithAggregatesFilter<"Episode"> | string
    title?: StringNullableWithAggregatesFilter<"Episode"> | string | null
    episodeNumber?: IntWithAggregatesFilter<"Episode"> | number
    mirrorLink?: StringNullableWithAggregatesFilter<"Episode"> | string | null
    urlEpisode?: StringNullableWithAggregatesFilter<"Episode"> | string | null
    releaseDate?: DateTimeNullableWithAggregatesFilter<"Episode"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Episode"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Episode"> | Date | string
  }

  export type MirrorWhereInput = {
    AND?: MirrorWhereInput | MirrorWhereInput[]
    OR?: MirrorWhereInput[]
    NOT?: MirrorWhereInput | MirrorWhereInput[]
    id?: IntFilter<"Mirror"> | number
    episodeId?: IntFilter<"Mirror"> | number
    resolution?: EnumResolutionFilter<"Mirror"> | $Enums.Resolution
    createdAt?: DateTimeFilter<"Mirror"> | Date | string
    updatedAt?: DateTimeFilter<"Mirror"> | Date | string
    episode?: XOR<EpisodeScalarRelationFilter, EpisodeWhereInput>
    servers?: StreamServerListRelationFilter
  }

  export type MirrorOrderByWithRelationInput = {
    id?: SortOrder
    episodeId?: SortOrder
    resolution?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    episode?: EpisodeOrderByWithRelationInput
    servers?: StreamServerOrderByRelationAggregateInput
  }

  export type MirrorWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MirrorWhereInput | MirrorWhereInput[]
    OR?: MirrorWhereInput[]
    NOT?: MirrorWhereInput | MirrorWhereInput[]
    episodeId?: IntFilter<"Mirror"> | number
    resolution?: EnumResolutionFilter<"Mirror"> | $Enums.Resolution
    createdAt?: DateTimeFilter<"Mirror"> | Date | string
    updatedAt?: DateTimeFilter<"Mirror"> | Date | string
    episode?: XOR<EpisodeScalarRelationFilter, EpisodeWhereInput>
    servers?: StreamServerListRelationFilter
  }, "id">

  export type MirrorOrderByWithAggregationInput = {
    id?: SortOrder
    episodeId?: SortOrder
    resolution?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MirrorCountOrderByAggregateInput
    _avg?: MirrorAvgOrderByAggregateInput
    _max?: MirrorMaxOrderByAggregateInput
    _min?: MirrorMinOrderByAggregateInput
    _sum?: MirrorSumOrderByAggregateInput
  }

  export type MirrorScalarWhereWithAggregatesInput = {
    AND?: MirrorScalarWhereWithAggregatesInput | MirrorScalarWhereWithAggregatesInput[]
    OR?: MirrorScalarWhereWithAggregatesInput[]
    NOT?: MirrorScalarWhereWithAggregatesInput | MirrorScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Mirror"> | number
    episodeId?: IntWithAggregatesFilter<"Mirror"> | number
    resolution?: EnumResolutionWithAggregatesFilter<"Mirror"> | $Enums.Resolution
    createdAt?: DateTimeWithAggregatesFilter<"Mirror"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Mirror"> | Date | string
  }

  export type StreamServerWhereInput = {
    AND?: StreamServerWhereInput | StreamServerWhereInput[]
    OR?: StreamServerWhereInput[]
    NOT?: StreamServerWhereInput | StreamServerWhereInput[]
    id?: IntFilter<"StreamServer"> | number
    mirrorId?: IntFilter<"StreamServer"> | number
    platform?: StringFilter<"StreamServer"> | string
    dataContent?: StringNullableFilter<"StreamServer"> | string | null
    embedUrl?: StringNullableFilter<"StreamServer"> | string | null
    embedHtml?: StringNullableFilter<"StreamServer"> | string | null
    createdAt?: DateTimeFilter<"StreamServer"> | Date | string
    updatedAt?: DateTimeFilter<"StreamServer"> | Date | string
    mirror?: XOR<MirrorScalarRelationFilter, MirrorWhereInput>
  }

  export type StreamServerOrderByWithRelationInput = {
    id?: SortOrder
    mirrorId?: SortOrder
    platform?: SortOrder
    dataContent?: SortOrderInput | SortOrder
    embedUrl?: SortOrderInput | SortOrder
    embedHtml?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    mirror?: MirrorOrderByWithRelationInput
  }

  export type StreamServerWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: StreamServerWhereInput | StreamServerWhereInput[]
    OR?: StreamServerWhereInput[]
    NOT?: StreamServerWhereInput | StreamServerWhereInput[]
    mirrorId?: IntFilter<"StreamServer"> | number
    platform?: StringFilter<"StreamServer"> | string
    dataContent?: StringNullableFilter<"StreamServer"> | string | null
    embedUrl?: StringNullableFilter<"StreamServer"> | string | null
    embedHtml?: StringNullableFilter<"StreamServer"> | string | null
    createdAt?: DateTimeFilter<"StreamServer"> | Date | string
    updatedAt?: DateTimeFilter<"StreamServer"> | Date | string
    mirror?: XOR<MirrorScalarRelationFilter, MirrorWhereInput>
  }, "id">

  export type StreamServerOrderByWithAggregationInput = {
    id?: SortOrder
    mirrorId?: SortOrder
    platform?: SortOrder
    dataContent?: SortOrderInput | SortOrder
    embedUrl?: SortOrderInput | SortOrder
    embedHtml?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: StreamServerCountOrderByAggregateInput
    _avg?: StreamServerAvgOrderByAggregateInput
    _max?: StreamServerMaxOrderByAggregateInput
    _min?: StreamServerMinOrderByAggregateInput
    _sum?: StreamServerSumOrderByAggregateInput
  }

  export type StreamServerScalarWhereWithAggregatesInput = {
    AND?: StreamServerScalarWhereWithAggregatesInput | StreamServerScalarWhereWithAggregatesInput[]
    OR?: StreamServerScalarWhereWithAggregatesInput[]
    NOT?: StreamServerScalarWhereWithAggregatesInput | StreamServerScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"StreamServer"> | number
    mirrorId?: IntWithAggregatesFilter<"StreamServer"> | number
    platform?: StringWithAggregatesFilter<"StreamServer"> | string
    dataContent?: StringNullableWithAggregatesFilter<"StreamServer"> | string | null
    embedUrl?: StringNullableWithAggregatesFilter<"StreamServer"> | string | null
    embedHtml?: StringNullableWithAggregatesFilter<"StreamServer"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"StreamServer"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"StreamServer"> | Date | string
  }

  export type UserCreateInput = {
    username: string
    role?: string
    createdAt?: Date | string
  }

  export type UserUncheckedCreateInput = {
    id?: number
    username: string
    role?: string
    createdAt?: Date | string
  }

  export type UserUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyInput = {
    id?: number
    username: string
    role?: string
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnimeCreateInput = {
    title: string
    titleJapan?: string | null
    slug: string
    type?: string | null
    status?: $Enums.AnimeStatus
    studio?: string | null
    totalEpisodes?: number | null
    releaseDate?: Date | string | null
    rating?: number | null
    synopsis?: string | null
    url?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    genres?: GenreCreateNestedManyWithoutAnimesInput
    episodes?: EpisodeCreateNestedManyWithoutAnimeInput
  }

  export type AnimeUncheckedCreateInput = {
    id?: number
    title: string
    titleJapan?: string | null
    slug: string
    type?: string | null
    status?: $Enums.AnimeStatus
    studio?: string | null
    totalEpisodes?: number | null
    releaseDate?: Date | string | null
    rating?: number | null
    synopsis?: string | null
    url?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    genres?: GenreUncheckedCreateNestedManyWithoutAnimesInput
    episodes?: EpisodeUncheckedCreateNestedManyWithoutAnimeInput
  }

  export type AnimeUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    titleJapan?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAnimeStatusFieldUpdateOperationsInput | $Enums.AnimeStatus
    studio?: NullableStringFieldUpdateOperationsInput | string | null
    totalEpisodes?: NullableIntFieldUpdateOperationsInput | number | null
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    synopsis?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    genres?: GenreUpdateManyWithoutAnimesNestedInput
    episodes?: EpisodeUpdateManyWithoutAnimeNestedInput
  }

  export type AnimeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    titleJapan?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAnimeStatusFieldUpdateOperationsInput | $Enums.AnimeStatus
    studio?: NullableStringFieldUpdateOperationsInput | string | null
    totalEpisodes?: NullableIntFieldUpdateOperationsInput | number | null
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    synopsis?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    genres?: GenreUncheckedUpdateManyWithoutAnimesNestedInput
    episodes?: EpisodeUncheckedUpdateManyWithoutAnimeNestedInput
  }

  export type AnimeCreateManyInput = {
    id?: number
    title: string
    titleJapan?: string | null
    slug: string
    type?: string | null
    status?: $Enums.AnimeStatus
    studio?: string | null
    totalEpisodes?: number | null
    releaseDate?: Date | string | null
    rating?: number | null
    synopsis?: string | null
    url?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AnimeUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    titleJapan?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAnimeStatusFieldUpdateOperationsInput | $Enums.AnimeStatus
    studio?: NullableStringFieldUpdateOperationsInput | string | null
    totalEpisodes?: NullableIntFieldUpdateOperationsInput | number | null
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    synopsis?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnimeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    titleJapan?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAnimeStatusFieldUpdateOperationsInput | $Enums.AnimeStatus
    studio?: NullableStringFieldUpdateOperationsInput | string | null
    totalEpisodes?: NullableIntFieldUpdateOperationsInput | number | null
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    synopsis?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GenreCreateInput = {
    title: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    animes?: AnimeCreateNestedManyWithoutGenresInput
  }

  export type GenreUncheckedCreateInput = {
    id?: number
    title: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    animes?: AnimeUncheckedCreateNestedManyWithoutGenresInput
  }

  export type GenreUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    animes?: AnimeUpdateManyWithoutGenresNestedInput
  }

  export type GenreUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    animes?: AnimeUncheckedUpdateManyWithoutGenresNestedInput
  }

  export type GenreCreateManyInput = {
    id?: number
    title: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GenreUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GenreUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EpisodeCreateInput = {
    slug: string
    title?: string | null
    episodeNumber: number
    mirrorLink?: string | null
    urlEpisode?: string | null
    releaseDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    anime: AnimeCreateNestedOneWithoutEpisodesInput
    mirrors?: MirrorCreateNestedManyWithoutEpisodeInput
  }

  export type EpisodeUncheckedCreateInput = {
    id?: number
    animeId: number
    slug: string
    title?: string | null
    episodeNumber: number
    mirrorLink?: string | null
    urlEpisode?: string | null
    releaseDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    mirrors?: MirrorUncheckedCreateNestedManyWithoutEpisodeInput
  }

  export type EpisodeUpdateInput = {
    slug?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    episodeNumber?: IntFieldUpdateOperationsInput | number
    mirrorLink?: NullableStringFieldUpdateOperationsInput | string | null
    urlEpisode?: NullableStringFieldUpdateOperationsInput | string | null
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    anime?: AnimeUpdateOneRequiredWithoutEpisodesNestedInput
    mirrors?: MirrorUpdateManyWithoutEpisodeNestedInput
  }

  export type EpisodeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    animeId?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    episodeNumber?: IntFieldUpdateOperationsInput | number
    mirrorLink?: NullableStringFieldUpdateOperationsInput | string | null
    urlEpisode?: NullableStringFieldUpdateOperationsInput | string | null
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mirrors?: MirrorUncheckedUpdateManyWithoutEpisodeNestedInput
  }

  export type EpisodeCreateManyInput = {
    id?: number
    animeId: number
    slug: string
    title?: string | null
    episodeNumber: number
    mirrorLink?: string | null
    urlEpisode?: string | null
    releaseDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EpisodeUpdateManyMutationInput = {
    slug?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    episodeNumber?: IntFieldUpdateOperationsInput | number
    mirrorLink?: NullableStringFieldUpdateOperationsInput | string | null
    urlEpisode?: NullableStringFieldUpdateOperationsInput | string | null
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EpisodeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    animeId?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    episodeNumber?: IntFieldUpdateOperationsInput | number
    mirrorLink?: NullableStringFieldUpdateOperationsInput | string | null
    urlEpisode?: NullableStringFieldUpdateOperationsInput | string | null
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MirrorCreateInput = {
    resolution: $Enums.Resolution
    createdAt?: Date | string
    updatedAt?: Date | string
    episode: EpisodeCreateNestedOneWithoutMirrorsInput
    servers?: StreamServerCreateNestedManyWithoutMirrorInput
  }

  export type MirrorUncheckedCreateInput = {
    id?: number
    episodeId: number
    resolution: $Enums.Resolution
    createdAt?: Date | string
    updatedAt?: Date | string
    servers?: StreamServerUncheckedCreateNestedManyWithoutMirrorInput
  }

  export type MirrorUpdateInput = {
    resolution?: EnumResolutionFieldUpdateOperationsInput | $Enums.Resolution
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    episode?: EpisodeUpdateOneRequiredWithoutMirrorsNestedInput
    servers?: StreamServerUpdateManyWithoutMirrorNestedInput
  }

  export type MirrorUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    episodeId?: IntFieldUpdateOperationsInput | number
    resolution?: EnumResolutionFieldUpdateOperationsInput | $Enums.Resolution
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    servers?: StreamServerUncheckedUpdateManyWithoutMirrorNestedInput
  }

  export type MirrorCreateManyInput = {
    id?: number
    episodeId: number
    resolution: $Enums.Resolution
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MirrorUpdateManyMutationInput = {
    resolution?: EnumResolutionFieldUpdateOperationsInput | $Enums.Resolution
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MirrorUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    episodeId?: IntFieldUpdateOperationsInput | number
    resolution?: EnumResolutionFieldUpdateOperationsInput | $Enums.Resolution
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StreamServerCreateInput = {
    platform: string
    dataContent?: string | null
    embedUrl?: string | null
    embedHtml?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    mirror: MirrorCreateNestedOneWithoutServersInput
  }

  export type StreamServerUncheckedCreateInput = {
    id?: number
    mirrorId: number
    platform: string
    dataContent?: string | null
    embedUrl?: string | null
    embedHtml?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StreamServerUpdateInput = {
    platform?: StringFieldUpdateOperationsInput | string
    dataContent?: NullableStringFieldUpdateOperationsInput | string | null
    embedUrl?: NullableStringFieldUpdateOperationsInput | string | null
    embedHtml?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mirror?: MirrorUpdateOneRequiredWithoutServersNestedInput
  }

  export type StreamServerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    mirrorId?: IntFieldUpdateOperationsInput | number
    platform?: StringFieldUpdateOperationsInput | string
    dataContent?: NullableStringFieldUpdateOperationsInput | string | null
    embedUrl?: NullableStringFieldUpdateOperationsInput | string | null
    embedHtml?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StreamServerCreateManyInput = {
    id?: number
    mirrorId: number
    platform: string
    dataContent?: string | null
    embedUrl?: string | null
    embedHtml?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StreamServerUpdateManyMutationInput = {
    platform?: StringFieldUpdateOperationsInput | string
    dataContent?: NullableStringFieldUpdateOperationsInput | string | null
    embedUrl?: NullableStringFieldUpdateOperationsInput | string | null
    embedHtml?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StreamServerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    mirrorId?: IntFieldUpdateOperationsInput | number
    platform?: StringFieldUpdateOperationsInput | string
    dataContent?: NullableStringFieldUpdateOperationsInput | string | null
    embedUrl?: NullableStringFieldUpdateOperationsInput | string | null
    embedHtml?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    role?: SortOrder
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

  export type EnumAnimeStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AnimeStatus | EnumAnimeStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AnimeStatus[] | ListEnumAnimeStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AnimeStatus[] | ListEnumAnimeStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAnimeStatusFilter<$PrismaModel> | $Enums.AnimeStatus
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

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type GenreListRelationFilter = {
    every?: GenreWhereInput
    some?: GenreWhereInput
    none?: GenreWhereInput
  }

  export type EpisodeListRelationFilter = {
    every?: EpisodeWhereInput
    some?: EpisodeWhereInput
    none?: EpisodeWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type GenreOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EpisodeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AnimeCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    titleJapan?: SortOrder
    slug?: SortOrder
    type?: SortOrder
    status?: SortOrder
    studio?: SortOrder
    totalEpisodes?: SortOrder
    releaseDate?: SortOrder
    rating?: SortOrder
    synopsis?: SortOrder
    url?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AnimeAvgOrderByAggregateInput = {
    id?: SortOrder
    totalEpisodes?: SortOrder
    rating?: SortOrder
  }

  export type AnimeMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    titleJapan?: SortOrder
    slug?: SortOrder
    type?: SortOrder
    status?: SortOrder
    studio?: SortOrder
    totalEpisodes?: SortOrder
    releaseDate?: SortOrder
    rating?: SortOrder
    synopsis?: SortOrder
    url?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AnimeMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    titleJapan?: SortOrder
    slug?: SortOrder
    type?: SortOrder
    status?: SortOrder
    studio?: SortOrder
    totalEpisodes?: SortOrder
    releaseDate?: SortOrder
    rating?: SortOrder
    synopsis?: SortOrder
    url?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AnimeSumOrderByAggregateInput = {
    id?: SortOrder
    totalEpisodes?: SortOrder
    rating?: SortOrder
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

  export type EnumAnimeStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AnimeStatus | EnumAnimeStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AnimeStatus[] | ListEnumAnimeStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AnimeStatus[] | ListEnumAnimeStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAnimeStatusWithAggregatesFilter<$PrismaModel> | $Enums.AnimeStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAnimeStatusFilter<$PrismaModel>
    _max?: NestedEnumAnimeStatusFilter<$PrismaModel>
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

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type AnimeListRelationFilter = {
    every?: AnimeWhereInput
    some?: AnimeWhereInput
    none?: AnimeWhereInput
  }

  export type AnimeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GenreCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GenreAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type GenreMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GenreMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GenreSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AnimeScalarRelationFilter = {
    is?: AnimeWhereInput
    isNot?: AnimeWhereInput
  }

  export type MirrorListRelationFilter = {
    every?: MirrorWhereInput
    some?: MirrorWhereInput
    none?: MirrorWhereInput
  }

  export type MirrorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EpisodeCountOrderByAggregateInput = {
    id?: SortOrder
    animeId?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    episodeNumber?: SortOrder
    mirrorLink?: SortOrder
    urlEpisode?: SortOrder
    releaseDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EpisodeAvgOrderByAggregateInput = {
    id?: SortOrder
    animeId?: SortOrder
    episodeNumber?: SortOrder
  }

  export type EpisodeMaxOrderByAggregateInput = {
    id?: SortOrder
    animeId?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    episodeNumber?: SortOrder
    mirrorLink?: SortOrder
    urlEpisode?: SortOrder
    releaseDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EpisodeMinOrderByAggregateInput = {
    id?: SortOrder
    animeId?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    episodeNumber?: SortOrder
    mirrorLink?: SortOrder
    urlEpisode?: SortOrder
    releaseDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EpisodeSumOrderByAggregateInput = {
    id?: SortOrder
    animeId?: SortOrder
    episodeNumber?: SortOrder
  }

  export type EnumResolutionFilter<$PrismaModel = never> = {
    equals?: $Enums.Resolution | EnumResolutionFieldRefInput<$PrismaModel>
    in?: $Enums.Resolution[] | ListEnumResolutionFieldRefInput<$PrismaModel>
    notIn?: $Enums.Resolution[] | ListEnumResolutionFieldRefInput<$PrismaModel>
    not?: NestedEnumResolutionFilter<$PrismaModel> | $Enums.Resolution
  }

  export type EpisodeScalarRelationFilter = {
    is?: EpisodeWhereInput
    isNot?: EpisodeWhereInput
  }

  export type StreamServerListRelationFilter = {
    every?: StreamServerWhereInput
    some?: StreamServerWhereInput
    none?: StreamServerWhereInput
  }

  export type StreamServerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MirrorCountOrderByAggregateInput = {
    id?: SortOrder
    episodeId?: SortOrder
    resolution?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MirrorAvgOrderByAggregateInput = {
    id?: SortOrder
    episodeId?: SortOrder
  }

  export type MirrorMaxOrderByAggregateInput = {
    id?: SortOrder
    episodeId?: SortOrder
    resolution?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MirrorMinOrderByAggregateInput = {
    id?: SortOrder
    episodeId?: SortOrder
    resolution?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MirrorSumOrderByAggregateInput = {
    id?: SortOrder
    episodeId?: SortOrder
  }

  export type EnumResolutionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Resolution | EnumResolutionFieldRefInput<$PrismaModel>
    in?: $Enums.Resolution[] | ListEnumResolutionFieldRefInput<$PrismaModel>
    notIn?: $Enums.Resolution[] | ListEnumResolutionFieldRefInput<$PrismaModel>
    not?: NestedEnumResolutionWithAggregatesFilter<$PrismaModel> | $Enums.Resolution
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumResolutionFilter<$PrismaModel>
    _max?: NestedEnumResolutionFilter<$PrismaModel>
  }

  export type MirrorScalarRelationFilter = {
    is?: MirrorWhereInput
    isNot?: MirrorWhereInput
  }

  export type StreamServerCountOrderByAggregateInput = {
    id?: SortOrder
    mirrorId?: SortOrder
    platform?: SortOrder
    dataContent?: SortOrder
    embedUrl?: SortOrder
    embedHtml?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StreamServerAvgOrderByAggregateInput = {
    id?: SortOrder
    mirrorId?: SortOrder
  }

  export type StreamServerMaxOrderByAggregateInput = {
    id?: SortOrder
    mirrorId?: SortOrder
    platform?: SortOrder
    dataContent?: SortOrder
    embedUrl?: SortOrder
    embedHtml?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StreamServerMinOrderByAggregateInput = {
    id?: SortOrder
    mirrorId?: SortOrder
    platform?: SortOrder
    dataContent?: SortOrder
    embedUrl?: SortOrder
    embedHtml?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StreamServerSumOrderByAggregateInput = {
    id?: SortOrder
    mirrorId?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type GenreCreateNestedManyWithoutAnimesInput = {
    create?: XOR<GenreCreateWithoutAnimesInput, GenreUncheckedCreateWithoutAnimesInput> | GenreCreateWithoutAnimesInput[] | GenreUncheckedCreateWithoutAnimesInput[]
    connectOrCreate?: GenreCreateOrConnectWithoutAnimesInput | GenreCreateOrConnectWithoutAnimesInput[]
    connect?: GenreWhereUniqueInput | GenreWhereUniqueInput[]
  }

  export type EpisodeCreateNestedManyWithoutAnimeInput = {
    create?: XOR<EpisodeCreateWithoutAnimeInput, EpisodeUncheckedCreateWithoutAnimeInput> | EpisodeCreateWithoutAnimeInput[] | EpisodeUncheckedCreateWithoutAnimeInput[]
    connectOrCreate?: EpisodeCreateOrConnectWithoutAnimeInput | EpisodeCreateOrConnectWithoutAnimeInput[]
    createMany?: EpisodeCreateManyAnimeInputEnvelope
    connect?: EpisodeWhereUniqueInput | EpisodeWhereUniqueInput[]
  }

  export type GenreUncheckedCreateNestedManyWithoutAnimesInput = {
    create?: XOR<GenreCreateWithoutAnimesInput, GenreUncheckedCreateWithoutAnimesInput> | GenreCreateWithoutAnimesInput[] | GenreUncheckedCreateWithoutAnimesInput[]
    connectOrCreate?: GenreCreateOrConnectWithoutAnimesInput | GenreCreateOrConnectWithoutAnimesInput[]
    connect?: GenreWhereUniqueInput | GenreWhereUniqueInput[]
  }

  export type EpisodeUncheckedCreateNestedManyWithoutAnimeInput = {
    create?: XOR<EpisodeCreateWithoutAnimeInput, EpisodeUncheckedCreateWithoutAnimeInput> | EpisodeCreateWithoutAnimeInput[] | EpisodeUncheckedCreateWithoutAnimeInput[]
    connectOrCreate?: EpisodeCreateOrConnectWithoutAnimeInput | EpisodeCreateOrConnectWithoutAnimeInput[]
    createMany?: EpisodeCreateManyAnimeInputEnvelope
    connect?: EpisodeWhereUniqueInput | EpisodeWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumAnimeStatusFieldUpdateOperationsInput = {
    set?: $Enums.AnimeStatus
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type GenreUpdateManyWithoutAnimesNestedInput = {
    create?: XOR<GenreCreateWithoutAnimesInput, GenreUncheckedCreateWithoutAnimesInput> | GenreCreateWithoutAnimesInput[] | GenreUncheckedCreateWithoutAnimesInput[]
    connectOrCreate?: GenreCreateOrConnectWithoutAnimesInput | GenreCreateOrConnectWithoutAnimesInput[]
    upsert?: GenreUpsertWithWhereUniqueWithoutAnimesInput | GenreUpsertWithWhereUniqueWithoutAnimesInput[]
    set?: GenreWhereUniqueInput | GenreWhereUniqueInput[]
    disconnect?: GenreWhereUniqueInput | GenreWhereUniqueInput[]
    delete?: GenreWhereUniqueInput | GenreWhereUniqueInput[]
    connect?: GenreWhereUniqueInput | GenreWhereUniqueInput[]
    update?: GenreUpdateWithWhereUniqueWithoutAnimesInput | GenreUpdateWithWhereUniqueWithoutAnimesInput[]
    updateMany?: GenreUpdateManyWithWhereWithoutAnimesInput | GenreUpdateManyWithWhereWithoutAnimesInput[]
    deleteMany?: GenreScalarWhereInput | GenreScalarWhereInput[]
  }

  export type EpisodeUpdateManyWithoutAnimeNestedInput = {
    create?: XOR<EpisodeCreateWithoutAnimeInput, EpisodeUncheckedCreateWithoutAnimeInput> | EpisodeCreateWithoutAnimeInput[] | EpisodeUncheckedCreateWithoutAnimeInput[]
    connectOrCreate?: EpisodeCreateOrConnectWithoutAnimeInput | EpisodeCreateOrConnectWithoutAnimeInput[]
    upsert?: EpisodeUpsertWithWhereUniqueWithoutAnimeInput | EpisodeUpsertWithWhereUniqueWithoutAnimeInput[]
    createMany?: EpisodeCreateManyAnimeInputEnvelope
    set?: EpisodeWhereUniqueInput | EpisodeWhereUniqueInput[]
    disconnect?: EpisodeWhereUniqueInput | EpisodeWhereUniqueInput[]
    delete?: EpisodeWhereUniqueInput | EpisodeWhereUniqueInput[]
    connect?: EpisodeWhereUniqueInput | EpisodeWhereUniqueInput[]
    update?: EpisodeUpdateWithWhereUniqueWithoutAnimeInput | EpisodeUpdateWithWhereUniqueWithoutAnimeInput[]
    updateMany?: EpisodeUpdateManyWithWhereWithoutAnimeInput | EpisodeUpdateManyWithWhereWithoutAnimeInput[]
    deleteMany?: EpisodeScalarWhereInput | EpisodeScalarWhereInput[]
  }

  export type GenreUncheckedUpdateManyWithoutAnimesNestedInput = {
    create?: XOR<GenreCreateWithoutAnimesInput, GenreUncheckedCreateWithoutAnimesInput> | GenreCreateWithoutAnimesInput[] | GenreUncheckedCreateWithoutAnimesInput[]
    connectOrCreate?: GenreCreateOrConnectWithoutAnimesInput | GenreCreateOrConnectWithoutAnimesInput[]
    upsert?: GenreUpsertWithWhereUniqueWithoutAnimesInput | GenreUpsertWithWhereUniqueWithoutAnimesInput[]
    set?: GenreWhereUniqueInput | GenreWhereUniqueInput[]
    disconnect?: GenreWhereUniqueInput | GenreWhereUniqueInput[]
    delete?: GenreWhereUniqueInput | GenreWhereUniqueInput[]
    connect?: GenreWhereUniqueInput | GenreWhereUniqueInput[]
    update?: GenreUpdateWithWhereUniqueWithoutAnimesInput | GenreUpdateWithWhereUniqueWithoutAnimesInput[]
    updateMany?: GenreUpdateManyWithWhereWithoutAnimesInput | GenreUpdateManyWithWhereWithoutAnimesInput[]
    deleteMany?: GenreScalarWhereInput | GenreScalarWhereInput[]
  }

  export type EpisodeUncheckedUpdateManyWithoutAnimeNestedInput = {
    create?: XOR<EpisodeCreateWithoutAnimeInput, EpisodeUncheckedCreateWithoutAnimeInput> | EpisodeCreateWithoutAnimeInput[] | EpisodeUncheckedCreateWithoutAnimeInput[]
    connectOrCreate?: EpisodeCreateOrConnectWithoutAnimeInput | EpisodeCreateOrConnectWithoutAnimeInput[]
    upsert?: EpisodeUpsertWithWhereUniqueWithoutAnimeInput | EpisodeUpsertWithWhereUniqueWithoutAnimeInput[]
    createMany?: EpisodeCreateManyAnimeInputEnvelope
    set?: EpisodeWhereUniqueInput | EpisodeWhereUniqueInput[]
    disconnect?: EpisodeWhereUniqueInput | EpisodeWhereUniqueInput[]
    delete?: EpisodeWhereUniqueInput | EpisodeWhereUniqueInput[]
    connect?: EpisodeWhereUniqueInput | EpisodeWhereUniqueInput[]
    update?: EpisodeUpdateWithWhereUniqueWithoutAnimeInput | EpisodeUpdateWithWhereUniqueWithoutAnimeInput[]
    updateMany?: EpisodeUpdateManyWithWhereWithoutAnimeInput | EpisodeUpdateManyWithWhereWithoutAnimeInput[]
    deleteMany?: EpisodeScalarWhereInput | EpisodeScalarWhereInput[]
  }

  export type AnimeCreateNestedManyWithoutGenresInput = {
    create?: XOR<AnimeCreateWithoutGenresInput, AnimeUncheckedCreateWithoutGenresInput> | AnimeCreateWithoutGenresInput[] | AnimeUncheckedCreateWithoutGenresInput[]
    connectOrCreate?: AnimeCreateOrConnectWithoutGenresInput | AnimeCreateOrConnectWithoutGenresInput[]
    connect?: AnimeWhereUniqueInput | AnimeWhereUniqueInput[]
  }

  export type AnimeUncheckedCreateNestedManyWithoutGenresInput = {
    create?: XOR<AnimeCreateWithoutGenresInput, AnimeUncheckedCreateWithoutGenresInput> | AnimeCreateWithoutGenresInput[] | AnimeUncheckedCreateWithoutGenresInput[]
    connectOrCreate?: AnimeCreateOrConnectWithoutGenresInput | AnimeCreateOrConnectWithoutGenresInput[]
    connect?: AnimeWhereUniqueInput | AnimeWhereUniqueInput[]
  }

  export type AnimeUpdateManyWithoutGenresNestedInput = {
    create?: XOR<AnimeCreateWithoutGenresInput, AnimeUncheckedCreateWithoutGenresInput> | AnimeCreateWithoutGenresInput[] | AnimeUncheckedCreateWithoutGenresInput[]
    connectOrCreate?: AnimeCreateOrConnectWithoutGenresInput | AnimeCreateOrConnectWithoutGenresInput[]
    upsert?: AnimeUpsertWithWhereUniqueWithoutGenresInput | AnimeUpsertWithWhereUniqueWithoutGenresInput[]
    set?: AnimeWhereUniqueInput | AnimeWhereUniqueInput[]
    disconnect?: AnimeWhereUniqueInput | AnimeWhereUniqueInput[]
    delete?: AnimeWhereUniqueInput | AnimeWhereUniqueInput[]
    connect?: AnimeWhereUniqueInput | AnimeWhereUniqueInput[]
    update?: AnimeUpdateWithWhereUniqueWithoutGenresInput | AnimeUpdateWithWhereUniqueWithoutGenresInput[]
    updateMany?: AnimeUpdateManyWithWhereWithoutGenresInput | AnimeUpdateManyWithWhereWithoutGenresInput[]
    deleteMany?: AnimeScalarWhereInput | AnimeScalarWhereInput[]
  }

  export type AnimeUncheckedUpdateManyWithoutGenresNestedInput = {
    create?: XOR<AnimeCreateWithoutGenresInput, AnimeUncheckedCreateWithoutGenresInput> | AnimeCreateWithoutGenresInput[] | AnimeUncheckedCreateWithoutGenresInput[]
    connectOrCreate?: AnimeCreateOrConnectWithoutGenresInput | AnimeCreateOrConnectWithoutGenresInput[]
    upsert?: AnimeUpsertWithWhereUniqueWithoutGenresInput | AnimeUpsertWithWhereUniqueWithoutGenresInput[]
    set?: AnimeWhereUniqueInput | AnimeWhereUniqueInput[]
    disconnect?: AnimeWhereUniqueInput | AnimeWhereUniqueInput[]
    delete?: AnimeWhereUniqueInput | AnimeWhereUniqueInput[]
    connect?: AnimeWhereUniqueInput | AnimeWhereUniqueInput[]
    update?: AnimeUpdateWithWhereUniqueWithoutGenresInput | AnimeUpdateWithWhereUniqueWithoutGenresInput[]
    updateMany?: AnimeUpdateManyWithWhereWithoutGenresInput | AnimeUpdateManyWithWhereWithoutGenresInput[]
    deleteMany?: AnimeScalarWhereInput | AnimeScalarWhereInput[]
  }

  export type AnimeCreateNestedOneWithoutEpisodesInput = {
    create?: XOR<AnimeCreateWithoutEpisodesInput, AnimeUncheckedCreateWithoutEpisodesInput>
    connectOrCreate?: AnimeCreateOrConnectWithoutEpisodesInput
    connect?: AnimeWhereUniqueInput
  }

  export type MirrorCreateNestedManyWithoutEpisodeInput = {
    create?: XOR<MirrorCreateWithoutEpisodeInput, MirrorUncheckedCreateWithoutEpisodeInput> | MirrorCreateWithoutEpisodeInput[] | MirrorUncheckedCreateWithoutEpisodeInput[]
    connectOrCreate?: MirrorCreateOrConnectWithoutEpisodeInput | MirrorCreateOrConnectWithoutEpisodeInput[]
    createMany?: MirrorCreateManyEpisodeInputEnvelope
    connect?: MirrorWhereUniqueInput | MirrorWhereUniqueInput[]
  }

  export type MirrorUncheckedCreateNestedManyWithoutEpisodeInput = {
    create?: XOR<MirrorCreateWithoutEpisodeInput, MirrorUncheckedCreateWithoutEpisodeInput> | MirrorCreateWithoutEpisodeInput[] | MirrorUncheckedCreateWithoutEpisodeInput[]
    connectOrCreate?: MirrorCreateOrConnectWithoutEpisodeInput | MirrorCreateOrConnectWithoutEpisodeInput[]
    createMany?: MirrorCreateManyEpisodeInputEnvelope
    connect?: MirrorWhereUniqueInput | MirrorWhereUniqueInput[]
  }

  export type AnimeUpdateOneRequiredWithoutEpisodesNestedInput = {
    create?: XOR<AnimeCreateWithoutEpisodesInput, AnimeUncheckedCreateWithoutEpisodesInput>
    connectOrCreate?: AnimeCreateOrConnectWithoutEpisodesInput
    upsert?: AnimeUpsertWithoutEpisodesInput
    connect?: AnimeWhereUniqueInput
    update?: XOR<XOR<AnimeUpdateToOneWithWhereWithoutEpisodesInput, AnimeUpdateWithoutEpisodesInput>, AnimeUncheckedUpdateWithoutEpisodesInput>
  }

  export type MirrorUpdateManyWithoutEpisodeNestedInput = {
    create?: XOR<MirrorCreateWithoutEpisodeInput, MirrorUncheckedCreateWithoutEpisodeInput> | MirrorCreateWithoutEpisodeInput[] | MirrorUncheckedCreateWithoutEpisodeInput[]
    connectOrCreate?: MirrorCreateOrConnectWithoutEpisodeInput | MirrorCreateOrConnectWithoutEpisodeInput[]
    upsert?: MirrorUpsertWithWhereUniqueWithoutEpisodeInput | MirrorUpsertWithWhereUniqueWithoutEpisodeInput[]
    createMany?: MirrorCreateManyEpisodeInputEnvelope
    set?: MirrorWhereUniqueInput | MirrorWhereUniqueInput[]
    disconnect?: MirrorWhereUniqueInput | MirrorWhereUniqueInput[]
    delete?: MirrorWhereUniqueInput | MirrorWhereUniqueInput[]
    connect?: MirrorWhereUniqueInput | MirrorWhereUniqueInput[]
    update?: MirrorUpdateWithWhereUniqueWithoutEpisodeInput | MirrorUpdateWithWhereUniqueWithoutEpisodeInput[]
    updateMany?: MirrorUpdateManyWithWhereWithoutEpisodeInput | MirrorUpdateManyWithWhereWithoutEpisodeInput[]
    deleteMany?: MirrorScalarWhereInput | MirrorScalarWhereInput[]
  }

  export type MirrorUncheckedUpdateManyWithoutEpisodeNestedInput = {
    create?: XOR<MirrorCreateWithoutEpisodeInput, MirrorUncheckedCreateWithoutEpisodeInput> | MirrorCreateWithoutEpisodeInput[] | MirrorUncheckedCreateWithoutEpisodeInput[]
    connectOrCreate?: MirrorCreateOrConnectWithoutEpisodeInput | MirrorCreateOrConnectWithoutEpisodeInput[]
    upsert?: MirrorUpsertWithWhereUniqueWithoutEpisodeInput | MirrorUpsertWithWhereUniqueWithoutEpisodeInput[]
    createMany?: MirrorCreateManyEpisodeInputEnvelope
    set?: MirrorWhereUniqueInput | MirrorWhereUniqueInput[]
    disconnect?: MirrorWhereUniqueInput | MirrorWhereUniqueInput[]
    delete?: MirrorWhereUniqueInput | MirrorWhereUniqueInput[]
    connect?: MirrorWhereUniqueInput | MirrorWhereUniqueInput[]
    update?: MirrorUpdateWithWhereUniqueWithoutEpisodeInput | MirrorUpdateWithWhereUniqueWithoutEpisodeInput[]
    updateMany?: MirrorUpdateManyWithWhereWithoutEpisodeInput | MirrorUpdateManyWithWhereWithoutEpisodeInput[]
    deleteMany?: MirrorScalarWhereInput | MirrorScalarWhereInput[]
  }

  export type EpisodeCreateNestedOneWithoutMirrorsInput = {
    create?: XOR<EpisodeCreateWithoutMirrorsInput, EpisodeUncheckedCreateWithoutMirrorsInput>
    connectOrCreate?: EpisodeCreateOrConnectWithoutMirrorsInput
    connect?: EpisodeWhereUniqueInput
  }

  export type StreamServerCreateNestedManyWithoutMirrorInput = {
    create?: XOR<StreamServerCreateWithoutMirrorInput, StreamServerUncheckedCreateWithoutMirrorInput> | StreamServerCreateWithoutMirrorInput[] | StreamServerUncheckedCreateWithoutMirrorInput[]
    connectOrCreate?: StreamServerCreateOrConnectWithoutMirrorInput | StreamServerCreateOrConnectWithoutMirrorInput[]
    createMany?: StreamServerCreateManyMirrorInputEnvelope
    connect?: StreamServerWhereUniqueInput | StreamServerWhereUniqueInput[]
  }

  export type StreamServerUncheckedCreateNestedManyWithoutMirrorInput = {
    create?: XOR<StreamServerCreateWithoutMirrorInput, StreamServerUncheckedCreateWithoutMirrorInput> | StreamServerCreateWithoutMirrorInput[] | StreamServerUncheckedCreateWithoutMirrorInput[]
    connectOrCreate?: StreamServerCreateOrConnectWithoutMirrorInput | StreamServerCreateOrConnectWithoutMirrorInput[]
    createMany?: StreamServerCreateManyMirrorInputEnvelope
    connect?: StreamServerWhereUniqueInput | StreamServerWhereUniqueInput[]
  }

  export type EnumResolutionFieldUpdateOperationsInput = {
    set?: $Enums.Resolution
  }

  export type EpisodeUpdateOneRequiredWithoutMirrorsNestedInput = {
    create?: XOR<EpisodeCreateWithoutMirrorsInput, EpisodeUncheckedCreateWithoutMirrorsInput>
    connectOrCreate?: EpisodeCreateOrConnectWithoutMirrorsInput
    upsert?: EpisodeUpsertWithoutMirrorsInput
    connect?: EpisodeWhereUniqueInput
    update?: XOR<XOR<EpisodeUpdateToOneWithWhereWithoutMirrorsInput, EpisodeUpdateWithoutMirrorsInput>, EpisodeUncheckedUpdateWithoutMirrorsInput>
  }

  export type StreamServerUpdateManyWithoutMirrorNestedInput = {
    create?: XOR<StreamServerCreateWithoutMirrorInput, StreamServerUncheckedCreateWithoutMirrorInput> | StreamServerCreateWithoutMirrorInput[] | StreamServerUncheckedCreateWithoutMirrorInput[]
    connectOrCreate?: StreamServerCreateOrConnectWithoutMirrorInput | StreamServerCreateOrConnectWithoutMirrorInput[]
    upsert?: StreamServerUpsertWithWhereUniqueWithoutMirrorInput | StreamServerUpsertWithWhereUniqueWithoutMirrorInput[]
    createMany?: StreamServerCreateManyMirrorInputEnvelope
    set?: StreamServerWhereUniqueInput | StreamServerWhereUniqueInput[]
    disconnect?: StreamServerWhereUniqueInput | StreamServerWhereUniqueInput[]
    delete?: StreamServerWhereUniqueInput | StreamServerWhereUniqueInput[]
    connect?: StreamServerWhereUniqueInput | StreamServerWhereUniqueInput[]
    update?: StreamServerUpdateWithWhereUniqueWithoutMirrorInput | StreamServerUpdateWithWhereUniqueWithoutMirrorInput[]
    updateMany?: StreamServerUpdateManyWithWhereWithoutMirrorInput | StreamServerUpdateManyWithWhereWithoutMirrorInput[]
    deleteMany?: StreamServerScalarWhereInput | StreamServerScalarWhereInput[]
  }

  export type StreamServerUncheckedUpdateManyWithoutMirrorNestedInput = {
    create?: XOR<StreamServerCreateWithoutMirrorInput, StreamServerUncheckedCreateWithoutMirrorInput> | StreamServerCreateWithoutMirrorInput[] | StreamServerUncheckedCreateWithoutMirrorInput[]
    connectOrCreate?: StreamServerCreateOrConnectWithoutMirrorInput | StreamServerCreateOrConnectWithoutMirrorInput[]
    upsert?: StreamServerUpsertWithWhereUniqueWithoutMirrorInput | StreamServerUpsertWithWhereUniqueWithoutMirrorInput[]
    createMany?: StreamServerCreateManyMirrorInputEnvelope
    set?: StreamServerWhereUniqueInput | StreamServerWhereUniqueInput[]
    disconnect?: StreamServerWhereUniqueInput | StreamServerWhereUniqueInput[]
    delete?: StreamServerWhereUniqueInput | StreamServerWhereUniqueInput[]
    connect?: StreamServerWhereUniqueInput | StreamServerWhereUniqueInput[]
    update?: StreamServerUpdateWithWhereUniqueWithoutMirrorInput | StreamServerUpdateWithWhereUniqueWithoutMirrorInput[]
    updateMany?: StreamServerUpdateManyWithWhereWithoutMirrorInput | StreamServerUpdateManyWithWhereWithoutMirrorInput[]
    deleteMany?: StreamServerScalarWhereInput | StreamServerScalarWhereInput[]
  }

  export type MirrorCreateNestedOneWithoutServersInput = {
    create?: XOR<MirrorCreateWithoutServersInput, MirrorUncheckedCreateWithoutServersInput>
    connectOrCreate?: MirrorCreateOrConnectWithoutServersInput
    connect?: MirrorWhereUniqueInput
  }

  export type MirrorUpdateOneRequiredWithoutServersNestedInput = {
    create?: XOR<MirrorCreateWithoutServersInput, MirrorUncheckedCreateWithoutServersInput>
    connectOrCreate?: MirrorCreateOrConnectWithoutServersInput
    upsert?: MirrorUpsertWithoutServersInput
    connect?: MirrorWhereUniqueInput
    update?: XOR<XOR<MirrorUpdateToOneWithWhereWithoutServersInput, MirrorUpdateWithoutServersInput>, MirrorUncheckedUpdateWithoutServersInput>
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

  export type NestedEnumAnimeStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AnimeStatus | EnumAnimeStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AnimeStatus[] | ListEnumAnimeStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AnimeStatus[] | ListEnumAnimeStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAnimeStatusFilter<$PrismaModel> | $Enums.AnimeStatus
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedEnumAnimeStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AnimeStatus | EnumAnimeStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AnimeStatus[] | ListEnumAnimeStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AnimeStatus[] | ListEnumAnimeStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAnimeStatusWithAggregatesFilter<$PrismaModel> | $Enums.AnimeStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAnimeStatusFilter<$PrismaModel>
    _max?: NestedEnumAnimeStatusFilter<$PrismaModel>
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

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumResolutionFilter<$PrismaModel = never> = {
    equals?: $Enums.Resolution | EnumResolutionFieldRefInput<$PrismaModel>
    in?: $Enums.Resolution[] | ListEnumResolutionFieldRefInput<$PrismaModel>
    notIn?: $Enums.Resolution[] | ListEnumResolutionFieldRefInput<$PrismaModel>
    not?: NestedEnumResolutionFilter<$PrismaModel> | $Enums.Resolution
  }

  export type NestedEnumResolutionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Resolution | EnumResolutionFieldRefInput<$PrismaModel>
    in?: $Enums.Resolution[] | ListEnumResolutionFieldRefInput<$PrismaModel>
    notIn?: $Enums.Resolution[] | ListEnumResolutionFieldRefInput<$PrismaModel>
    not?: NestedEnumResolutionWithAggregatesFilter<$PrismaModel> | $Enums.Resolution
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumResolutionFilter<$PrismaModel>
    _max?: NestedEnumResolutionFilter<$PrismaModel>
  }

  export type GenreCreateWithoutAnimesInput = {
    title: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GenreUncheckedCreateWithoutAnimesInput = {
    id?: number
    title: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GenreCreateOrConnectWithoutAnimesInput = {
    where: GenreWhereUniqueInput
    create: XOR<GenreCreateWithoutAnimesInput, GenreUncheckedCreateWithoutAnimesInput>
  }

  export type EpisodeCreateWithoutAnimeInput = {
    slug: string
    title?: string | null
    episodeNumber: number
    mirrorLink?: string | null
    urlEpisode?: string | null
    releaseDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    mirrors?: MirrorCreateNestedManyWithoutEpisodeInput
  }

  export type EpisodeUncheckedCreateWithoutAnimeInput = {
    id?: number
    slug: string
    title?: string | null
    episodeNumber: number
    mirrorLink?: string | null
    urlEpisode?: string | null
    releaseDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    mirrors?: MirrorUncheckedCreateNestedManyWithoutEpisodeInput
  }

  export type EpisodeCreateOrConnectWithoutAnimeInput = {
    where: EpisodeWhereUniqueInput
    create: XOR<EpisodeCreateWithoutAnimeInput, EpisodeUncheckedCreateWithoutAnimeInput>
  }

  export type EpisodeCreateManyAnimeInputEnvelope = {
    data: EpisodeCreateManyAnimeInput | EpisodeCreateManyAnimeInput[]
    skipDuplicates?: boolean
  }

  export type GenreUpsertWithWhereUniqueWithoutAnimesInput = {
    where: GenreWhereUniqueInput
    update: XOR<GenreUpdateWithoutAnimesInput, GenreUncheckedUpdateWithoutAnimesInput>
    create: XOR<GenreCreateWithoutAnimesInput, GenreUncheckedCreateWithoutAnimesInput>
  }

  export type GenreUpdateWithWhereUniqueWithoutAnimesInput = {
    where: GenreWhereUniqueInput
    data: XOR<GenreUpdateWithoutAnimesInput, GenreUncheckedUpdateWithoutAnimesInput>
  }

  export type GenreUpdateManyWithWhereWithoutAnimesInput = {
    where: GenreScalarWhereInput
    data: XOR<GenreUpdateManyMutationInput, GenreUncheckedUpdateManyWithoutAnimesInput>
  }

  export type GenreScalarWhereInput = {
    AND?: GenreScalarWhereInput | GenreScalarWhereInput[]
    OR?: GenreScalarWhereInput[]
    NOT?: GenreScalarWhereInput | GenreScalarWhereInput[]
    id?: IntFilter<"Genre"> | number
    title?: StringFilter<"Genre"> | string
    isActive?: BoolFilter<"Genre"> | boolean
    createdAt?: DateTimeFilter<"Genre"> | Date | string
    updatedAt?: DateTimeFilter<"Genre"> | Date | string
  }

  export type EpisodeUpsertWithWhereUniqueWithoutAnimeInput = {
    where: EpisodeWhereUniqueInput
    update: XOR<EpisodeUpdateWithoutAnimeInput, EpisodeUncheckedUpdateWithoutAnimeInput>
    create: XOR<EpisodeCreateWithoutAnimeInput, EpisodeUncheckedCreateWithoutAnimeInput>
  }

  export type EpisodeUpdateWithWhereUniqueWithoutAnimeInput = {
    where: EpisodeWhereUniqueInput
    data: XOR<EpisodeUpdateWithoutAnimeInput, EpisodeUncheckedUpdateWithoutAnimeInput>
  }

  export type EpisodeUpdateManyWithWhereWithoutAnimeInput = {
    where: EpisodeScalarWhereInput
    data: XOR<EpisodeUpdateManyMutationInput, EpisodeUncheckedUpdateManyWithoutAnimeInput>
  }

  export type EpisodeScalarWhereInput = {
    AND?: EpisodeScalarWhereInput | EpisodeScalarWhereInput[]
    OR?: EpisodeScalarWhereInput[]
    NOT?: EpisodeScalarWhereInput | EpisodeScalarWhereInput[]
    id?: IntFilter<"Episode"> | number
    animeId?: IntFilter<"Episode"> | number
    slug?: StringFilter<"Episode"> | string
    title?: StringNullableFilter<"Episode"> | string | null
    episodeNumber?: IntFilter<"Episode"> | number
    mirrorLink?: StringNullableFilter<"Episode"> | string | null
    urlEpisode?: StringNullableFilter<"Episode"> | string | null
    releaseDate?: DateTimeNullableFilter<"Episode"> | Date | string | null
    createdAt?: DateTimeFilter<"Episode"> | Date | string
    updatedAt?: DateTimeFilter<"Episode"> | Date | string
  }

  export type AnimeCreateWithoutGenresInput = {
    title: string
    titleJapan?: string | null
    slug: string
    type?: string | null
    status?: $Enums.AnimeStatus
    studio?: string | null
    totalEpisodes?: number | null
    releaseDate?: Date | string | null
    rating?: number | null
    synopsis?: string | null
    url?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    episodes?: EpisodeCreateNestedManyWithoutAnimeInput
  }

  export type AnimeUncheckedCreateWithoutGenresInput = {
    id?: number
    title: string
    titleJapan?: string | null
    slug: string
    type?: string | null
    status?: $Enums.AnimeStatus
    studio?: string | null
    totalEpisodes?: number | null
    releaseDate?: Date | string | null
    rating?: number | null
    synopsis?: string | null
    url?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    episodes?: EpisodeUncheckedCreateNestedManyWithoutAnimeInput
  }

  export type AnimeCreateOrConnectWithoutGenresInput = {
    where: AnimeWhereUniqueInput
    create: XOR<AnimeCreateWithoutGenresInput, AnimeUncheckedCreateWithoutGenresInput>
  }

  export type AnimeUpsertWithWhereUniqueWithoutGenresInput = {
    where: AnimeWhereUniqueInput
    update: XOR<AnimeUpdateWithoutGenresInput, AnimeUncheckedUpdateWithoutGenresInput>
    create: XOR<AnimeCreateWithoutGenresInput, AnimeUncheckedCreateWithoutGenresInput>
  }

  export type AnimeUpdateWithWhereUniqueWithoutGenresInput = {
    where: AnimeWhereUniqueInput
    data: XOR<AnimeUpdateWithoutGenresInput, AnimeUncheckedUpdateWithoutGenresInput>
  }

  export type AnimeUpdateManyWithWhereWithoutGenresInput = {
    where: AnimeScalarWhereInput
    data: XOR<AnimeUpdateManyMutationInput, AnimeUncheckedUpdateManyWithoutGenresInput>
  }

  export type AnimeScalarWhereInput = {
    AND?: AnimeScalarWhereInput | AnimeScalarWhereInput[]
    OR?: AnimeScalarWhereInput[]
    NOT?: AnimeScalarWhereInput | AnimeScalarWhereInput[]
    id?: IntFilter<"Anime"> | number
    title?: StringFilter<"Anime"> | string
    titleJapan?: StringNullableFilter<"Anime"> | string | null
    slug?: StringFilter<"Anime"> | string
    type?: StringNullableFilter<"Anime"> | string | null
    status?: EnumAnimeStatusFilter<"Anime"> | $Enums.AnimeStatus
    studio?: StringNullableFilter<"Anime"> | string | null
    totalEpisodes?: IntNullableFilter<"Anime"> | number | null
    releaseDate?: DateTimeNullableFilter<"Anime"> | Date | string | null
    rating?: FloatNullableFilter<"Anime"> | number | null
    synopsis?: StringNullableFilter<"Anime"> | string | null
    url?: StringNullableFilter<"Anime"> | string | null
    isActive?: BoolFilter<"Anime"> | boolean
    createdAt?: DateTimeFilter<"Anime"> | Date | string
    updatedAt?: DateTimeFilter<"Anime"> | Date | string
  }

  export type AnimeCreateWithoutEpisodesInput = {
    title: string
    titleJapan?: string | null
    slug: string
    type?: string | null
    status?: $Enums.AnimeStatus
    studio?: string | null
    totalEpisodes?: number | null
    releaseDate?: Date | string | null
    rating?: number | null
    synopsis?: string | null
    url?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    genres?: GenreCreateNestedManyWithoutAnimesInput
  }

  export type AnimeUncheckedCreateWithoutEpisodesInput = {
    id?: number
    title: string
    titleJapan?: string | null
    slug: string
    type?: string | null
    status?: $Enums.AnimeStatus
    studio?: string | null
    totalEpisodes?: number | null
    releaseDate?: Date | string | null
    rating?: number | null
    synopsis?: string | null
    url?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    genres?: GenreUncheckedCreateNestedManyWithoutAnimesInput
  }

  export type AnimeCreateOrConnectWithoutEpisodesInput = {
    where: AnimeWhereUniqueInput
    create: XOR<AnimeCreateWithoutEpisodesInput, AnimeUncheckedCreateWithoutEpisodesInput>
  }

  export type MirrorCreateWithoutEpisodeInput = {
    resolution: $Enums.Resolution
    createdAt?: Date | string
    updatedAt?: Date | string
    servers?: StreamServerCreateNestedManyWithoutMirrorInput
  }

  export type MirrorUncheckedCreateWithoutEpisodeInput = {
    id?: number
    resolution: $Enums.Resolution
    createdAt?: Date | string
    updatedAt?: Date | string
    servers?: StreamServerUncheckedCreateNestedManyWithoutMirrorInput
  }

  export type MirrorCreateOrConnectWithoutEpisodeInput = {
    where: MirrorWhereUniqueInput
    create: XOR<MirrorCreateWithoutEpisodeInput, MirrorUncheckedCreateWithoutEpisodeInput>
  }

  export type MirrorCreateManyEpisodeInputEnvelope = {
    data: MirrorCreateManyEpisodeInput | MirrorCreateManyEpisodeInput[]
    skipDuplicates?: boolean
  }

  export type AnimeUpsertWithoutEpisodesInput = {
    update: XOR<AnimeUpdateWithoutEpisodesInput, AnimeUncheckedUpdateWithoutEpisodesInput>
    create: XOR<AnimeCreateWithoutEpisodesInput, AnimeUncheckedCreateWithoutEpisodesInput>
    where?: AnimeWhereInput
  }

  export type AnimeUpdateToOneWithWhereWithoutEpisodesInput = {
    where?: AnimeWhereInput
    data: XOR<AnimeUpdateWithoutEpisodesInput, AnimeUncheckedUpdateWithoutEpisodesInput>
  }

  export type AnimeUpdateWithoutEpisodesInput = {
    title?: StringFieldUpdateOperationsInput | string
    titleJapan?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAnimeStatusFieldUpdateOperationsInput | $Enums.AnimeStatus
    studio?: NullableStringFieldUpdateOperationsInput | string | null
    totalEpisodes?: NullableIntFieldUpdateOperationsInput | number | null
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    synopsis?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    genres?: GenreUpdateManyWithoutAnimesNestedInput
  }

  export type AnimeUncheckedUpdateWithoutEpisodesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    titleJapan?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAnimeStatusFieldUpdateOperationsInput | $Enums.AnimeStatus
    studio?: NullableStringFieldUpdateOperationsInput | string | null
    totalEpisodes?: NullableIntFieldUpdateOperationsInput | number | null
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    synopsis?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    genres?: GenreUncheckedUpdateManyWithoutAnimesNestedInput
  }

  export type MirrorUpsertWithWhereUniqueWithoutEpisodeInput = {
    where: MirrorWhereUniqueInput
    update: XOR<MirrorUpdateWithoutEpisodeInput, MirrorUncheckedUpdateWithoutEpisodeInput>
    create: XOR<MirrorCreateWithoutEpisodeInput, MirrorUncheckedCreateWithoutEpisodeInput>
  }

  export type MirrorUpdateWithWhereUniqueWithoutEpisodeInput = {
    where: MirrorWhereUniqueInput
    data: XOR<MirrorUpdateWithoutEpisodeInput, MirrorUncheckedUpdateWithoutEpisodeInput>
  }

  export type MirrorUpdateManyWithWhereWithoutEpisodeInput = {
    where: MirrorScalarWhereInput
    data: XOR<MirrorUpdateManyMutationInput, MirrorUncheckedUpdateManyWithoutEpisodeInput>
  }

  export type MirrorScalarWhereInput = {
    AND?: MirrorScalarWhereInput | MirrorScalarWhereInput[]
    OR?: MirrorScalarWhereInput[]
    NOT?: MirrorScalarWhereInput | MirrorScalarWhereInput[]
    id?: IntFilter<"Mirror"> | number
    episodeId?: IntFilter<"Mirror"> | number
    resolution?: EnumResolutionFilter<"Mirror"> | $Enums.Resolution
    createdAt?: DateTimeFilter<"Mirror"> | Date | string
    updatedAt?: DateTimeFilter<"Mirror"> | Date | string
  }

  export type EpisodeCreateWithoutMirrorsInput = {
    slug: string
    title?: string | null
    episodeNumber: number
    mirrorLink?: string | null
    urlEpisode?: string | null
    releaseDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    anime: AnimeCreateNestedOneWithoutEpisodesInput
  }

  export type EpisodeUncheckedCreateWithoutMirrorsInput = {
    id?: number
    animeId: number
    slug: string
    title?: string | null
    episodeNumber: number
    mirrorLink?: string | null
    urlEpisode?: string | null
    releaseDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EpisodeCreateOrConnectWithoutMirrorsInput = {
    where: EpisodeWhereUniqueInput
    create: XOR<EpisodeCreateWithoutMirrorsInput, EpisodeUncheckedCreateWithoutMirrorsInput>
  }

  export type StreamServerCreateWithoutMirrorInput = {
    platform: string
    dataContent?: string | null
    embedUrl?: string | null
    embedHtml?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StreamServerUncheckedCreateWithoutMirrorInput = {
    id?: number
    platform: string
    dataContent?: string | null
    embedUrl?: string | null
    embedHtml?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StreamServerCreateOrConnectWithoutMirrorInput = {
    where: StreamServerWhereUniqueInput
    create: XOR<StreamServerCreateWithoutMirrorInput, StreamServerUncheckedCreateWithoutMirrorInput>
  }

  export type StreamServerCreateManyMirrorInputEnvelope = {
    data: StreamServerCreateManyMirrorInput | StreamServerCreateManyMirrorInput[]
    skipDuplicates?: boolean
  }

  export type EpisodeUpsertWithoutMirrorsInput = {
    update: XOR<EpisodeUpdateWithoutMirrorsInput, EpisodeUncheckedUpdateWithoutMirrorsInput>
    create: XOR<EpisodeCreateWithoutMirrorsInput, EpisodeUncheckedCreateWithoutMirrorsInput>
    where?: EpisodeWhereInput
  }

  export type EpisodeUpdateToOneWithWhereWithoutMirrorsInput = {
    where?: EpisodeWhereInput
    data: XOR<EpisodeUpdateWithoutMirrorsInput, EpisodeUncheckedUpdateWithoutMirrorsInput>
  }

  export type EpisodeUpdateWithoutMirrorsInput = {
    slug?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    episodeNumber?: IntFieldUpdateOperationsInput | number
    mirrorLink?: NullableStringFieldUpdateOperationsInput | string | null
    urlEpisode?: NullableStringFieldUpdateOperationsInput | string | null
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    anime?: AnimeUpdateOneRequiredWithoutEpisodesNestedInput
  }

  export type EpisodeUncheckedUpdateWithoutMirrorsInput = {
    id?: IntFieldUpdateOperationsInput | number
    animeId?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    episodeNumber?: IntFieldUpdateOperationsInput | number
    mirrorLink?: NullableStringFieldUpdateOperationsInput | string | null
    urlEpisode?: NullableStringFieldUpdateOperationsInput | string | null
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StreamServerUpsertWithWhereUniqueWithoutMirrorInput = {
    where: StreamServerWhereUniqueInput
    update: XOR<StreamServerUpdateWithoutMirrorInput, StreamServerUncheckedUpdateWithoutMirrorInput>
    create: XOR<StreamServerCreateWithoutMirrorInput, StreamServerUncheckedCreateWithoutMirrorInput>
  }

  export type StreamServerUpdateWithWhereUniqueWithoutMirrorInput = {
    where: StreamServerWhereUniqueInput
    data: XOR<StreamServerUpdateWithoutMirrorInput, StreamServerUncheckedUpdateWithoutMirrorInput>
  }

  export type StreamServerUpdateManyWithWhereWithoutMirrorInput = {
    where: StreamServerScalarWhereInput
    data: XOR<StreamServerUpdateManyMutationInput, StreamServerUncheckedUpdateManyWithoutMirrorInput>
  }

  export type StreamServerScalarWhereInput = {
    AND?: StreamServerScalarWhereInput | StreamServerScalarWhereInput[]
    OR?: StreamServerScalarWhereInput[]
    NOT?: StreamServerScalarWhereInput | StreamServerScalarWhereInput[]
    id?: IntFilter<"StreamServer"> | number
    mirrorId?: IntFilter<"StreamServer"> | number
    platform?: StringFilter<"StreamServer"> | string
    dataContent?: StringNullableFilter<"StreamServer"> | string | null
    embedUrl?: StringNullableFilter<"StreamServer"> | string | null
    embedHtml?: StringNullableFilter<"StreamServer"> | string | null
    createdAt?: DateTimeFilter<"StreamServer"> | Date | string
    updatedAt?: DateTimeFilter<"StreamServer"> | Date | string
  }

  export type MirrorCreateWithoutServersInput = {
    resolution: $Enums.Resolution
    createdAt?: Date | string
    updatedAt?: Date | string
    episode: EpisodeCreateNestedOneWithoutMirrorsInput
  }

  export type MirrorUncheckedCreateWithoutServersInput = {
    id?: number
    episodeId: number
    resolution: $Enums.Resolution
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MirrorCreateOrConnectWithoutServersInput = {
    where: MirrorWhereUniqueInput
    create: XOR<MirrorCreateWithoutServersInput, MirrorUncheckedCreateWithoutServersInput>
  }

  export type MirrorUpsertWithoutServersInput = {
    update: XOR<MirrorUpdateWithoutServersInput, MirrorUncheckedUpdateWithoutServersInput>
    create: XOR<MirrorCreateWithoutServersInput, MirrorUncheckedCreateWithoutServersInput>
    where?: MirrorWhereInput
  }

  export type MirrorUpdateToOneWithWhereWithoutServersInput = {
    where?: MirrorWhereInput
    data: XOR<MirrorUpdateWithoutServersInput, MirrorUncheckedUpdateWithoutServersInput>
  }

  export type MirrorUpdateWithoutServersInput = {
    resolution?: EnumResolutionFieldUpdateOperationsInput | $Enums.Resolution
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    episode?: EpisodeUpdateOneRequiredWithoutMirrorsNestedInput
  }

  export type MirrorUncheckedUpdateWithoutServersInput = {
    id?: IntFieldUpdateOperationsInput | number
    episodeId?: IntFieldUpdateOperationsInput | number
    resolution?: EnumResolutionFieldUpdateOperationsInput | $Enums.Resolution
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EpisodeCreateManyAnimeInput = {
    id?: number
    slug: string
    title?: string | null
    episodeNumber: number
    mirrorLink?: string | null
    urlEpisode?: string | null
    releaseDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GenreUpdateWithoutAnimesInput = {
    title?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GenreUncheckedUpdateWithoutAnimesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GenreUncheckedUpdateManyWithoutAnimesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EpisodeUpdateWithoutAnimeInput = {
    slug?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    episodeNumber?: IntFieldUpdateOperationsInput | number
    mirrorLink?: NullableStringFieldUpdateOperationsInput | string | null
    urlEpisode?: NullableStringFieldUpdateOperationsInput | string | null
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mirrors?: MirrorUpdateManyWithoutEpisodeNestedInput
  }

  export type EpisodeUncheckedUpdateWithoutAnimeInput = {
    id?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    episodeNumber?: IntFieldUpdateOperationsInput | number
    mirrorLink?: NullableStringFieldUpdateOperationsInput | string | null
    urlEpisode?: NullableStringFieldUpdateOperationsInput | string | null
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mirrors?: MirrorUncheckedUpdateManyWithoutEpisodeNestedInput
  }

  export type EpisodeUncheckedUpdateManyWithoutAnimeInput = {
    id?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    episodeNumber?: IntFieldUpdateOperationsInput | number
    mirrorLink?: NullableStringFieldUpdateOperationsInput | string | null
    urlEpisode?: NullableStringFieldUpdateOperationsInput | string | null
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnimeUpdateWithoutGenresInput = {
    title?: StringFieldUpdateOperationsInput | string
    titleJapan?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAnimeStatusFieldUpdateOperationsInput | $Enums.AnimeStatus
    studio?: NullableStringFieldUpdateOperationsInput | string | null
    totalEpisodes?: NullableIntFieldUpdateOperationsInput | number | null
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    synopsis?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    episodes?: EpisodeUpdateManyWithoutAnimeNestedInput
  }

  export type AnimeUncheckedUpdateWithoutGenresInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    titleJapan?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAnimeStatusFieldUpdateOperationsInput | $Enums.AnimeStatus
    studio?: NullableStringFieldUpdateOperationsInput | string | null
    totalEpisodes?: NullableIntFieldUpdateOperationsInput | number | null
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    synopsis?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    episodes?: EpisodeUncheckedUpdateManyWithoutAnimeNestedInput
  }

  export type AnimeUncheckedUpdateManyWithoutGenresInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    titleJapan?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAnimeStatusFieldUpdateOperationsInput | $Enums.AnimeStatus
    studio?: NullableStringFieldUpdateOperationsInput | string | null
    totalEpisodes?: NullableIntFieldUpdateOperationsInput | number | null
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    synopsis?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MirrorCreateManyEpisodeInput = {
    id?: number
    resolution: $Enums.Resolution
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MirrorUpdateWithoutEpisodeInput = {
    resolution?: EnumResolutionFieldUpdateOperationsInput | $Enums.Resolution
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    servers?: StreamServerUpdateManyWithoutMirrorNestedInput
  }

  export type MirrorUncheckedUpdateWithoutEpisodeInput = {
    id?: IntFieldUpdateOperationsInput | number
    resolution?: EnumResolutionFieldUpdateOperationsInput | $Enums.Resolution
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    servers?: StreamServerUncheckedUpdateManyWithoutMirrorNestedInput
  }

  export type MirrorUncheckedUpdateManyWithoutEpisodeInput = {
    id?: IntFieldUpdateOperationsInput | number
    resolution?: EnumResolutionFieldUpdateOperationsInput | $Enums.Resolution
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StreamServerCreateManyMirrorInput = {
    id?: number
    platform: string
    dataContent?: string | null
    embedUrl?: string | null
    embedHtml?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StreamServerUpdateWithoutMirrorInput = {
    platform?: StringFieldUpdateOperationsInput | string
    dataContent?: NullableStringFieldUpdateOperationsInput | string | null
    embedUrl?: NullableStringFieldUpdateOperationsInput | string | null
    embedHtml?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StreamServerUncheckedUpdateWithoutMirrorInput = {
    id?: IntFieldUpdateOperationsInput | number
    platform?: StringFieldUpdateOperationsInput | string
    dataContent?: NullableStringFieldUpdateOperationsInput | string | null
    embedUrl?: NullableStringFieldUpdateOperationsInput | string | null
    embedHtml?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StreamServerUncheckedUpdateManyWithoutMirrorInput = {
    id?: IntFieldUpdateOperationsInput | number
    platform?: StringFieldUpdateOperationsInput | string
    dataContent?: NullableStringFieldUpdateOperationsInput | string | null
    embedUrl?: NullableStringFieldUpdateOperationsInput | string | null
    embedHtml?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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