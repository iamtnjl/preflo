
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
 * Model Keyword
 * 
 */
export type Keyword = $Result.DefaultSelection<Prisma.$KeywordPayload>
/**
 * Model DemandSignal
 * 
 */
export type DemandSignal = $Result.DefaultSelection<Prisma.$DemandSignalPayload>
/**
 * Model CompetitionSignal
 * 
 */
export type CompetitionSignal = $Result.DefaultSelection<Prisma.$CompetitionSignalPayload>
/**
 * Model TrendSignal
 * 
 */
export type TrendSignal = $Result.DefaultSelection<Prisma.$TrendSignalPayload>
/**
 * Model FeasibilityScore
 * 
 */
export type FeasibilityScore = $Result.DefaultSelection<Prisma.$FeasibilityScorePayload>
/**
 * Model Outcome
 * 
 */
export type Outcome = $Result.DefaultSelection<Prisma.$OutcomePayload>
/**
 * Model SeoPage
 * 
 */
export type SeoPage = $Result.DefaultSelection<Prisma.$SeoPagePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Domain: {
  SEO: 'SEO',
  content: 'content',
  ecommerce: 'ecommerce',
  saas: 'saas',
  social: 'social'
};

export type Domain = (typeof Domain)[keyof typeof Domain]


export const Difficulty: {
  easy: 'easy',
  medium: 'medium',
  hard: 'hard',
  very_hard: 'very_hard'
};

export type Difficulty = (typeof Difficulty)[keyof typeof Difficulty]


export const Regime: {
  emerging: 'emerging',
  trending: 'trending',
  stable: 'stable',
  saturated: 'saturated',
  declining: 'declining'
};

export type Regime = (typeof Regime)[keyof typeof Regime]


export const EffortLevel: {
  low: 'low',
  medium: 'medium',
  high: 'high'
};

export type EffortLevel = (typeof EffortLevel)[keyof typeof EffortLevel]

}

export type Domain = $Enums.Domain

export const Domain: typeof $Enums.Domain

export type Difficulty = $Enums.Difficulty

export const Difficulty: typeof $Enums.Difficulty

export type Regime = $Enums.Regime

export const Regime: typeof $Enums.Regime

export type EffortLevel = $Enums.EffortLevel

export const EffortLevel: typeof $Enums.EffortLevel

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Keywords
 * const keywords = await prisma.keyword.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * // Fetch zero or more Keywords
   * const keywords = await prisma.keyword.findMany()
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
   * `prisma.keyword`: Exposes CRUD operations for the **Keyword** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Keywords
    * const keywords = await prisma.keyword.findMany()
    * ```
    */
  get keyword(): Prisma.KeywordDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.demandSignal`: Exposes CRUD operations for the **DemandSignal** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DemandSignals
    * const demandSignals = await prisma.demandSignal.findMany()
    * ```
    */
  get demandSignal(): Prisma.DemandSignalDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.competitionSignal`: Exposes CRUD operations for the **CompetitionSignal** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CompetitionSignals
    * const competitionSignals = await prisma.competitionSignal.findMany()
    * ```
    */
  get competitionSignal(): Prisma.CompetitionSignalDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.trendSignal`: Exposes CRUD operations for the **TrendSignal** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TrendSignals
    * const trendSignals = await prisma.trendSignal.findMany()
    * ```
    */
  get trendSignal(): Prisma.TrendSignalDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.feasibilityScore`: Exposes CRUD operations for the **FeasibilityScore** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FeasibilityScores
    * const feasibilityScores = await prisma.feasibilityScore.findMany()
    * ```
    */
  get feasibilityScore(): Prisma.FeasibilityScoreDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.outcome`: Exposes CRUD operations for the **Outcome** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Outcomes
    * const outcomes = await prisma.outcome.findMany()
    * ```
    */
  get outcome(): Prisma.OutcomeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.seoPage`: Exposes CRUD operations for the **SeoPage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SeoPages
    * const seoPages = await prisma.seoPage.findMany()
    * ```
    */
  get seoPage(): Prisma.SeoPageDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.19.2
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
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
    Keyword: 'Keyword',
    DemandSignal: 'DemandSignal',
    CompetitionSignal: 'CompetitionSignal',
    TrendSignal: 'TrendSignal',
    FeasibilityScore: 'FeasibilityScore',
    Outcome: 'Outcome',
    SeoPage: 'SeoPage'
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
      modelProps: "keyword" | "demandSignal" | "competitionSignal" | "trendSignal" | "feasibilityScore" | "outcome" | "seoPage"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Keyword: {
        payload: Prisma.$KeywordPayload<ExtArgs>
        fields: Prisma.KeywordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.KeywordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeywordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.KeywordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeywordPayload>
          }
          findFirst: {
            args: Prisma.KeywordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeywordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.KeywordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeywordPayload>
          }
          findMany: {
            args: Prisma.KeywordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeywordPayload>[]
          }
          create: {
            args: Prisma.KeywordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeywordPayload>
          }
          createMany: {
            args: Prisma.KeywordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.KeywordCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeywordPayload>[]
          }
          delete: {
            args: Prisma.KeywordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeywordPayload>
          }
          update: {
            args: Prisma.KeywordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeywordPayload>
          }
          deleteMany: {
            args: Prisma.KeywordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.KeywordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.KeywordUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeywordPayload>[]
          }
          upsert: {
            args: Prisma.KeywordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeywordPayload>
          }
          aggregate: {
            args: Prisma.KeywordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateKeyword>
          }
          groupBy: {
            args: Prisma.KeywordGroupByArgs<ExtArgs>
            result: $Utils.Optional<KeywordGroupByOutputType>[]
          }
          count: {
            args: Prisma.KeywordCountArgs<ExtArgs>
            result: $Utils.Optional<KeywordCountAggregateOutputType> | number
          }
        }
      }
      DemandSignal: {
        payload: Prisma.$DemandSignalPayload<ExtArgs>
        fields: Prisma.DemandSignalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DemandSignalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DemandSignalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DemandSignalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DemandSignalPayload>
          }
          findFirst: {
            args: Prisma.DemandSignalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DemandSignalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DemandSignalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DemandSignalPayload>
          }
          findMany: {
            args: Prisma.DemandSignalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DemandSignalPayload>[]
          }
          create: {
            args: Prisma.DemandSignalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DemandSignalPayload>
          }
          createMany: {
            args: Prisma.DemandSignalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DemandSignalCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DemandSignalPayload>[]
          }
          delete: {
            args: Prisma.DemandSignalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DemandSignalPayload>
          }
          update: {
            args: Prisma.DemandSignalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DemandSignalPayload>
          }
          deleteMany: {
            args: Prisma.DemandSignalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DemandSignalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DemandSignalUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DemandSignalPayload>[]
          }
          upsert: {
            args: Prisma.DemandSignalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DemandSignalPayload>
          }
          aggregate: {
            args: Prisma.DemandSignalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDemandSignal>
          }
          groupBy: {
            args: Prisma.DemandSignalGroupByArgs<ExtArgs>
            result: $Utils.Optional<DemandSignalGroupByOutputType>[]
          }
          count: {
            args: Prisma.DemandSignalCountArgs<ExtArgs>
            result: $Utils.Optional<DemandSignalCountAggregateOutputType> | number
          }
        }
      }
      CompetitionSignal: {
        payload: Prisma.$CompetitionSignalPayload<ExtArgs>
        fields: Prisma.CompetitionSignalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CompetitionSignalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitionSignalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CompetitionSignalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitionSignalPayload>
          }
          findFirst: {
            args: Prisma.CompetitionSignalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitionSignalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CompetitionSignalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitionSignalPayload>
          }
          findMany: {
            args: Prisma.CompetitionSignalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitionSignalPayload>[]
          }
          create: {
            args: Prisma.CompetitionSignalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitionSignalPayload>
          }
          createMany: {
            args: Prisma.CompetitionSignalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CompetitionSignalCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitionSignalPayload>[]
          }
          delete: {
            args: Prisma.CompetitionSignalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitionSignalPayload>
          }
          update: {
            args: Prisma.CompetitionSignalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitionSignalPayload>
          }
          deleteMany: {
            args: Prisma.CompetitionSignalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CompetitionSignalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CompetitionSignalUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitionSignalPayload>[]
          }
          upsert: {
            args: Prisma.CompetitionSignalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitionSignalPayload>
          }
          aggregate: {
            args: Prisma.CompetitionSignalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompetitionSignal>
          }
          groupBy: {
            args: Prisma.CompetitionSignalGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompetitionSignalGroupByOutputType>[]
          }
          count: {
            args: Prisma.CompetitionSignalCountArgs<ExtArgs>
            result: $Utils.Optional<CompetitionSignalCountAggregateOutputType> | number
          }
        }
      }
      TrendSignal: {
        payload: Prisma.$TrendSignalPayload<ExtArgs>
        fields: Prisma.TrendSignalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TrendSignalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrendSignalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TrendSignalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrendSignalPayload>
          }
          findFirst: {
            args: Prisma.TrendSignalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrendSignalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TrendSignalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrendSignalPayload>
          }
          findMany: {
            args: Prisma.TrendSignalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrendSignalPayload>[]
          }
          create: {
            args: Prisma.TrendSignalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrendSignalPayload>
          }
          createMany: {
            args: Prisma.TrendSignalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TrendSignalCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrendSignalPayload>[]
          }
          delete: {
            args: Prisma.TrendSignalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrendSignalPayload>
          }
          update: {
            args: Prisma.TrendSignalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrendSignalPayload>
          }
          deleteMany: {
            args: Prisma.TrendSignalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TrendSignalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TrendSignalUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrendSignalPayload>[]
          }
          upsert: {
            args: Prisma.TrendSignalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrendSignalPayload>
          }
          aggregate: {
            args: Prisma.TrendSignalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTrendSignal>
          }
          groupBy: {
            args: Prisma.TrendSignalGroupByArgs<ExtArgs>
            result: $Utils.Optional<TrendSignalGroupByOutputType>[]
          }
          count: {
            args: Prisma.TrendSignalCountArgs<ExtArgs>
            result: $Utils.Optional<TrendSignalCountAggregateOutputType> | number
          }
        }
      }
      FeasibilityScore: {
        payload: Prisma.$FeasibilityScorePayload<ExtArgs>
        fields: Prisma.FeasibilityScoreFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FeasibilityScoreFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeasibilityScorePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FeasibilityScoreFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeasibilityScorePayload>
          }
          findFirst: {
            args: Prisma.FeasibilityScoreFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeasibilityScorePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FeasibilityScoreFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeasibilityScorePayload>
          }
          findMany: {
            args: Prisma.FeasibilityScoreFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeasibilityScorePayload>[]
          }
          create: {
            args: Prisma.FeasibilityScoreCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeasibilityScorePayload>
          }
          createMany: {
            args: Prisma.FeasibilityScoreCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FeasibilityScoreCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeasibilityScorePayload>[]
          }
          delete: {
            args: Prisma.FeasibilityScoreDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeasibilityScorePayload>
          }
          update: {
            args: Prisma.FeasibilityScoreUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeasibilityScorePayload>
          }
          deleteMany: {
            args: Prisma.FeasibilityScoreDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FeasibilityScoreUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FeasibilityScoreUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeasibilityScorePayload>[]
          }
          upsert: {
            args: Prisma.FeasibilityScoreUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeasibilityScorePayload>
          }
          aggregate: {
            args: Prisma.FeasibilityScoreAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFeasibilityScore>
          }
          groupBy: {
            args: Prisma.FeasibilityScoreGroupByArgs<ExtArgs>
            result: $Utils.Optional<FeasibilityScoreGroupByOutputType>[]
          }
          count: {
            args: Prisma.FeasibilityScoreCountArgs<ExtArgs>
            result: $Utils.Optional<FeasibilityScoreCountAggregateOutputType> | number
          }
        }
      }
      Outcome: {
        payload: Prisma.$OutcomePayload<ExtArgs>
        fields: Prisma.OutcomeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OutcomeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutcomePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OutcomeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutcomePayload>
          }
          findFirst: {
            args: Prisma.OutcomeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutcomePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OutcomeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutcomePayload>
          }
          findMany: {
            args: Prisma.OutcomeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutcomePayload>[]
          }
          create: {
            args: Prisma.OutcomeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutcomePayload>
          }
          createMany: {
            args: Prisma.OutcomeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OutcomeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutcomePayload>[]
          }
          delete: {
            args: Prisma.OutcomeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutcomePayload>
          }
          update: {
            args: Prisma.OutcomeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutcomePayload>
          }
          deleteMany: {
            args: Prisma.OutcomeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OutcomeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OutcomeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutcomePayload>[]
          }
          upsert: {
            args: Prisma.OutcomeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutcomePayload>
          }
          aggregate: {
            args: Prisma.OutcomeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOutcome>
          }
          groupBy: {
            args: Prisma.OutcomeGroupByArgs<ExtArgs>
            result: $Utils.Optional<OutcomeGroupByOutputType>[]
          }
          count: {
            args: Prisma.OutcomeCountArgs<ExtArgs>
            result: $Utils.Optional<OutcomeCountAggregateOutputType> | number
          }
        }
      }
      SeoPage: {
        payload: Prisma.$SeoPagePayload<ExtArgs>
        fields: Prisma.SeoPageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SeoPageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeoPagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SeoPageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeoPagePayload>
          }
          findFirst: {
            args: Prisma.SeoPageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeoPagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SeoPageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeoPagePayload>
          }
          findMany: {
            args: Prisma.SeoPageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeoPagePayload>[]
          }
          create: {
            args: Prisma.SeoPageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeoPagePayload>
          }
          createMany: {
            args: Prisma.SeoPageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SeoPageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeoPagePayload>[]
          }
          delete: {
            args: Prisma.SeoPageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeoPagePayload>
          }
          update: {
            args: Prisma.SeoPageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeoPagePayload>
          }
          deleteMany: {
            args: Prisma.SeoPageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SeoPageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SeoPageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeoPagePayload>[]
          }
          upsert: {
            args: Prisma.SeoPageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeoPagePayload>
          }
          aggregate: {
            args: Prisma.SeoPageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSeoPage>
          }
          groupBy: {
            args: Prisma.SeoPageGroupByArgs<ExtArgs>
            result: $Utils.Optional<SeoPageGroupByOutputType>[]
          }
          count: {
            args: Prisma.SeoPageCountArgs<ExtArgs>
            result: $Utils.Optional<SeoPageCountAggregateOutputType> | number
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
    keyword?: KeywordOmit
    demandSignal?: DemandSignalOmit
    competitionSignal?: CompetitionSignalOmit
    trendSignal?: TrendSignalOmit
    feasibilityScore?: FeasibilityScoreOmit
    outcome?: OutcomeOmit
    seoPage?: SeoPageOmit
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
   * Count Type KeywordCountOutputType
   */

  export type KeywordCountOutputType = {
    demandSignals: number
    competitionSignals: number
    trendSignals: number
    feasibilityScores: number
    outcomes: number
    seoPages: number
  }

  export type KeywordCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    demandSignals?: boolean | KeywordCountOutputTypeCountDemandSignalsArgs
    competitionSignals?: boolean | KeywordCountOutputTypeCountCompetitionSignalsArgs
    trendSignals?: boolean | KeywordCountOutputTypeCountTrendSignalsArgs
    feasibilityScores?: boolean | KeywordCountOutputTypeCountFeasibilityScoresArgs
    outcomes?: boolean | KeywordCountOutputTypeCountOutcomesArgs
    seoPages?: boolean | KeywordCountOutputTypeCountSeoPagesArgs
  }

  // Custom InputTypes
  /**
   * KeywordCountOutputType without action
   */
  export type KeywordCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KeywordCountOutputType
     */
    select?: KeywordCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * KeywordCountOutputType without action
   */
  export type KeywordCountOutputTypeCountDemandSignalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DemandSignalWhereInput
  }

  /**
   * KeywordCountOutputType without action
   */
  export type KeywordCountOutputTypeCountCompetitionSignalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompetitionSignalWhereInput
  }

  /**
   * KeywordCountOutputType without action
   */
  export type KeywordCountOutputTypeCountTrendSignalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TrendSignalWhereInput
  }

  /**
   * KeywordCountOutputType without action
   */
  export type KeywordCountOutputTypeCountFeasibilityScoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FeasibilityScoreWhereInput
  }

  /**
   * KeywordCountOutputType without action
   */
  export type KeywordCountOutputTypeCountOutcomesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OutcomeWhereInput
  }

  /**
   * KeywordCountOutputType without action
   */
  export type KeywordCountOutputTypeCountSeoPagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SeoPageWhereInput
  }


  /**
   * Count Type FeasibilityScoreCountOutputType
   */

  export type FeasibilityScoreCountOutputType = {
    outcomes: number
  }

  export type FeasibilityScoreCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    outcomes?: boolean | FeasibilityScoreCountOutputTypeCountOutcomesArgs
  }

  // Custom InputTypes
  /**
   * FeasibilityScoreCountOutputType without action
   */
  export type FeasibilityScoreCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeasibilityScoreCountOutputType
     */
    select?: FeasibilityScoreCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FeasibilityScoreCountOutputType without action
   */
  export type FeasibilityScoreCountOutputTypeCountOutcomesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OutcomeWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Keyword
   */

  export type AggregateKeyword = {
    _count: KeywordCountAggregateOutputType | null
    _avg: KeywordAvgAggregateOutputType | null
    _sum: KeywordSumAggregateOutputType | null
    _min: KeywordMinAggregateOutputType | null
    _max: KeywordMaxAggregateOutputType | null
  }

  export type KeywordAvgAggregateOutputType = {
    id: number | null
  }

  export type KeywordSumAggregateOutputType = {
    id: number | null
  }

  export type KeywordMinAggregateOutputType = {
    id: number | null
    keyword: string | null
    slug: string | null
    domain: $Enums.Domain | null
    createdAt: Date | null
    lastAnalyzed: Date | null
  }

  export type KeywordMaxAggregateOutputType = {
    id: number | null
    keyword: string | null
    slug: string | null
    domain: $Enums.Domain | null
    createdAt: Date | null
    lastAnalyzed: Date | null
  }

  export type KeywordCountAggregateOutputType = {
    id: number
    keyword: number
    slug: number
    domain: number
    createdAt: number
    lastAnalyzed: number
    _all: number
  }


  export type KeywordAvgAggregateInputType = {
    id?: true
  }

  export type KeywordSumAggregateInputType = {
    id?: true
  }

  export type KeywordMinAggregateInputType = {
    id?: true
    keyword?: true
    slug?: true
    domain?: true
    createdAt?: true
    lastAnalyzed?: true
  }

  export type KeywordMaxAggregateInputType = {
    id?: true
    keyword?: true
    slug?: true
    domain?: true
    createdAt?: true
    lastAnalyzed?: true
  }

  export type KeywordCountAggregateInputType = {
    id?: true
    keyword?: true
    slug?: true
    domain?: true
    createdAt?: true
    lastAnalyzed?: true
    _all?: true
  }

  export type KeywordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Keyword to aggregate.
     */
    where?: KeywordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Keywords to fetch.
     */
    orderBy?: KeywordOrderByWithRelationInput | KeywordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: KeywordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Keywords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Keywords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Keywords
    **/
    _count?: true | KeywordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: KeywordAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: KeywordSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: KeywordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: KeywordMaxAggregateInputType
  }

  export type GetKeywordAggregateType<T extends KeywordAggregateArgs> = {
        [P in keyof T & keyof AggregateKeyword]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateKeyword[P]>
      : GetScalarType<T[P], AggregateKeyword[P]>
  }




  export type KeywordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KeywordWhereInput
    orderBy?: KeywordOrderByWithAggregationInput | KeywordOrderByWithAggregationInput[]
    by: KeywordScalarFieldEnum[] | KeywordScalarFieldEnum
    having?: KeywordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: KeywordCountAggregateInputType | true
    _avg?: KeywordAvgAggregateInputType
    _sum?: KeywordSumAggregateInputType
    _min?: KeywordMinAggregateInputType
    _max?: KeywordMaxAggregateInputType
  }

  export type KeywordGroupByOutputType = {
    id: number
    keyword: string
    slug: string
    domain: $Enums.Domain | null
    createdAt: Date
    lastAnalyzed: Date | null
    _count: KeywordCountAggregateOutputType | null
    _avg: KeywordAvgAggregateOutputType | null
    _sum: KeywordSumAggregateOutputType | null
    _min: KeywordMinAggregateOutputType | null
    _max: KeywordMaxAggregateOutputType | null
  }

  type GetKeywordGroupByPayload<T extends KeywordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<KeywordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof KeywordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], KeywordGroupByOutputType[P]>
            : GetScalarType<T[P], KeywordGroupByOutputType[P]>
        }
      >
    >


  export type KeywordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    keyword?: boolean
    slug?: boolean
    domain?: boolean
    createdAt?: boolean
    lastAnalyzed?: boolean
    demandSignals?: boolean | Keyword$demandSignalsArgs<ExtArgs>
    competitionSignals?: boolean | Keyword$competitionSignalsArgs<ExtArgs>
    trendSignals?: boolean | Keyword$trendSignalsArgs<ExtArgs>
    feasibilityScores?: boolean | Keyword$feasibilityScoresArgs<ExtArgs>
    outcomes?: boolean | Keyword$outcomesArgs<ExtArgs>
    seoPages?: boolean | Keyword$seoPagesArgs<ExtArgs>
    _count?: boolean | KeywordCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["keyword"]>

  export type KeywordSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    keyword?: boolean
    slug?: boolean
    domain?: boolean
    createdAt?: boolean
    lastAnalyzed?: boolean
  }, ExtArgs["result"]["keyword"]>

  export type KeywordSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    keyword?: boolean
    slug?: boolean
    domain?: boolean
    createdAt?: boolean
    lastAnalyzed?: boolean
  }, ExtArgs["result"]["keyword"]>

  export type KeywordSelectScalar = {
    id?: boolean
    keyword?: boolean
    slug?: boolean
    domain?: boolean
    createdAt?: boolean
    lastAnalyzed?: boolean
  }

  export type KeywordOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "keyword" | "slug" | "domain" | "createdAt" | "lastAnalyzed", ExtArgs["result"]["keyword"]>
  export type KeywordInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    demandSignals?: boolean | Keyword$demandSignalsArgs<ExtArgs>
    competitionSignals?: boolean | Keyword$competitionSignalsArgs<ExtArgs>
    trendSignals?: boolean | Keyword$trendSignalsArgs<ExtArgs>
    feasibilityScores?: boolean | Keyword$feasibilityScoresArgs<ExtArgs>
    outcomes?: boolean | Keyword$outcomesArgs<ExtArgs>
    seoPages?: boolean | Keyword$seoPagesArgs<ExtArgs>
    _count?: boolean | KeywordCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type KeywordIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type KeywordIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $KeywordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Keyword"
    objects: {
      demandSignals: Prisma.$DemandSignalPayload<ExtArgs>[]
      competitionSignals: Prisma.$CompetitionSignalPayload<ExtArgs>[]
      trendSignals: Prisma.$TrendSignalPayload<ExtArgs>[]
      feasibilityScores: Prisma.$FeasibilityScorePayload<ExtArgs>[]
      outcomes: Prisma.$OutcomePayload<ExtArgs>[]
      seoPages: Prisma.$SeoPagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      keyword: string
      slug: string
      domain: $Enums.Domain | null
      createdAt: Date
      lastAnalyzed: Date | null
    }, ExtArgs["result"]["keyword"]>
    composites: {}
  }

  type KeywordGetPayload<S extends boolean | null | undefined | KeywordDefaultArgs> = $Result.GetResult<Prisma.$KeywordPayload, S>

  type KeywordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<KeywordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: KeywordCountAggregateInputType | true
    }

  export interface KeywordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Keyword'], meta: { name: 'Keyword' } }
    /**
     * Find zero or one Keyword that matches the filter.
     * @param {KeywordFindUniqueArgs} args - Arguments to find a Keyword
     * @example
     * // Get one Keyword
     * const keyword = await prisma.keyword.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends KeywordFindUniqueArgs>(args: SelectSubset<T, KeywordFindUniqueArgs<ExtArgs>>): Prisma__KeywordClient<$Result.GetResult<Prisma.$KeywordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Keyword that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {KeywordFindUniqueOrThrowArgs} args - Arguments to find a Keyword
     * @example
     * // Get one Keyword
     * const keyword = await prisma.keyword.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends KeywordFindUniqueOrThrowArgs>(args: SelectSubset<T, KeywordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__KeywordClient<$Result.GetResult<Prisma.$KeywordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Keyword that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KeywordFindFirstArgs} args - Arguments to find a Keyword
     * @example
     * // Get one Keyword
     * const keyword = await prisma.keyword.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends KeywordFindFirstArgs>(args?: SelectSubset<T, KeywordFindFirstArgs<ExtArgs>>): Prisma__KeywordClient<$Result.GetResult<Prisma.$KeywordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Keyword that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KeywordFindFirstOrThrowArgs} args - Arguments to find a Keyword
     * @example
     * // Get one Keyword
     * const keyword = await prisma.keyword.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends KeywordFindFirstOrThrowArgs>(args?: SelectSubset<T, KeywordFindFirstOrThrowArgs<ExtArgs>>): Prisma__KeywordClient<$Result.GetResult<Prisma.$KeywordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Keywords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KeywordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Keywords
     * const keywords = await prisma.keyword.findMany()
     * 
     * // Get first 10 Keywords
     * const keywords = await prisma.keyword.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const keywordWithIdOnly = await prisma.keyword.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends KeywordFindManyArgs>(args?: SelectSubset<T, KeywordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KeywordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Keyword.
     * @param {KeywordCreateArgs} args - Arguments to create a Keyword.
     * @example
     * // Create one Keyword
     * const Keyword = await prisma.keyword.create({
     *   data: {
     *     // ... data to create a Keyword
     *   }
     * })
     * 
     */
    create<T extends KeywordCreateArgs>(args: SelectSubset<T, KeywordCreateArgs<ExtArgs>>): Prisma__KeywordClient<$Result.GetResult<Prisma.$KeywordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Keywords.
     * @param {KeywordCreateManyArgs} args - Arguments to create many Keywords.
     * @example
     * // Create many Keywords
     * const keyword = await prisma.keyword.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends KeywordCreateManyArgs>(args?: SelectSubset<T, KeywordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Keywords and returns the data saved in the database.
     * @param {KeywordCreateManyAndReturnArgs} args - Arguments to create many Keywords.
     * @example
     * // Create many Keywords
     * const keyword = await prisma.keyword.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Keywords and only return the `id`
     * const keywordWithIdOnly = await prisma.keyword.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends KeywordCreateManyAndReturnArgs>(args?: SelectSubset<T, KeywordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KeywordPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Keyword.
     * @param {KeywordDeleteArgs} args - Arguments to delete one Keyword.
     * @example
     * // Delete one Keyword
     * const Keyword = await prisma.keyword.delete({
     *   where: {
     *     // ... filter to delete one Keyword
     *   }
     * })
     * 
     */
    delete<T extends KeywordDeleteArgs>(args: SelectSubset<T, KeywordDeleteArgs<ExtArgs>>): Prisma__KeywordClient<$Result.GetResult<Prisma.$KeywordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Keyword.
     * @param {KeywordUpdateArgs} args - Arguments to update one Keyword.
     * @example
     * // Update one Keyword
     * const keyword = await prisma.keyword.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends KeywordUpdateArgs>(args: SelectSubset<T, KeywordUpdateArgs<ExtArgs>>): Prisma__KeywordClient<$Result.GetResult<Prisma.$KeywordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Keywords.
     * @param {KeywordDeleteManyArgs} args - Arguments to filter Keywords to delete.
     * @example
     * // Delete a few Keywords
     * const { count } = await prisma.keyword.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends KeywordDeleteManyArgs>(args?: SelectSubset<T, KeywordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Keywords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KeywordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Keywords
     * const keyword = await prisma.keyword.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends KeywordUpdateManyArgs>(args: SelectSubset<T, KeywordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Keywords and returns the data updated in the database.
     * @param {KeywordUpdateManyAndReturnArgs} args - Arguments to update many Keywords.
     * @example
     * // Update many Keywords
     * const keyword = await prisma.keyword.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Keywords and only return the `id`
     * const keywordWithIdOnly = await prisma.keyword.updateManyAndReturn({
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
    updateManyAndReturn<T extends KeywordUpdateManyAndReturnArgs>(args: SelectSubset<T, KeywordUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KeywordPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Keyword.
     * @param {KeywordUpsertArgs} args - Arguments to update or create a Keyword.
     * @example
     * // Update or create a Keyword
     * const keyword = await prisma.keyword.upsert({
     *   create: {
     *     // ... data to create a Keyword
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Keyword we want to update
     *   }
     * })
     */
    upsert<T extends KeywordUpsertArgs>(args: SelectSubset<T, KeywordUpsertArgs<ExtArgs>>): Prisma__KeywordClient<$Result.GetResult<Prisma.$KeywordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Keywords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KeywordCountArgs} args - Arguments to filter Keywords to count.
     * @example
     * // Count the number of Keywords
     * const count = await prisma.keyword.count({
     *   where: {
     *     // ... the filter for the Keywords we want to count
     *   }
     * })
    **/
    count<T extends KeywordCountArgs>(
      args?: Subset<T, KeywordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], KeywordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Keyword.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KeywordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends KeywordAggregateArgs>(args: Subset<T, KeywordAggregateArgs>): Prisma.PrismaPromise<GetKeywordAggregateType<T>>

    /**
     * Group by Keyword.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KeywordGroupByArgs} args - Group by arguments.
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
      T extends KeywordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: KeywordGroupByArgs['orderBy'] }
        : { orderBy?: KeywordGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, KeywordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetKeywordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Keyword model
   */
  readonly fields: KeywordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Keyword.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__KeywordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    demandSignals<T extends Keyword$demandSignalsArgs<ExtArgs> = {}>(args?: Subset<T, Keyword$demandSignalsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DemandSignalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    competitionSignals<T extends Keyword$competitionSignalsArgs<ExtArgs> = {}>(args?: Subset<T, Keyword$competitionSignalsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompetitionSignalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    trendSignals<T extends Keyword$trendSignalsArgs<ExtArgs> = {}>(args?: Subset<T, Keyword$trendSignalsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrendSignalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    feasibilityScores<T extends Keyword$feasibilityScoresArgs<ExtArgs> = {}>(args?: Subset<T, Keyword$feasibilityScoresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeasibilityScorePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    outcomes<T extends Keyword$outcomesArgs<ExtArgs> = {}>(args?: Subset<T, Keyword$outcomesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OutcomePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    seoPages<T extends Keyword$seoPagesArgs<ExtArgs> = {}>(args?: Subset<T, Keyword$seoPagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeoPagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Keyword model
   */
  interface KeywordFieldRefs {
    readonly id: FieldRef<"Keyword", 'Int'>
    readonly keyword: FieldRef<"Keyword", 'String'>
    readonly slug: FieldRef<"Keyword", 'String'>
    readonly domain: FieldRef<"Keyword", 'Domain'>
    readonly createdAt: FieldRef<"Keyword", 'DateTime'>
    readonly lastAnalyzed: FieldRef<"Keyword", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Keyword findUnique
   */
  export type KeywordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Keyword
     */
    select?: KeywordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Keyword
     */
    omit?: KeywordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeywordInclude<ExtArgs> | null
    /**
     * Filter, which Keyword to fetch.
     */
    where: KeywordWhereUniqueInput
  }

  /**
   * Keyword findUniqueOrThrow
   */
  export type KeywordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Keyword
     */
    select?: KeywordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Keyword
     */
    omit?: KeywordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeywordInclude<ExtArgs> | null
    /**
     * Filter, which Keyword to fetch.
     */
    where: KeywordWhereUniqueInput
  }

  /**
   * Keyword findFirst
   */
  export type KeywordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Keyword
     */
    select?: KeywordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Keyword
     */
    omit?: KeywordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeywordInclude<ExtArgs> | null
    /**
     * Filter, which Keyword to fetch.
     */
    where?: KeywordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Keywords to fetch.
     */
    orderBy?: KeywordOrderByWithRelationInput | KeywordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Keywords.
     */
    cursor?: KeywordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Keywords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Keywords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Keywords.
     */
    distinct?: KeywordScalarFieldEnum | KeywordScalarFieldEnum[]
  }

  /**
   * Keyword findFirstOrThrow
   */
  export type KeywordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Keyword
     */
    select?: KeywordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Keyword
     */
    omit?: KeywordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeywordInclude<ExtArgs> | null
    /**
     * Filter, which Keyword to fetch.
     */
    where?: KeywordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Keywords to fetch.
     */
    orderBy?: KeywordOrderByWithRelationInput | KeywordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Keywords.
     */
    cursor?: KeywordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Keywords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Keywords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Keywords.
     */
    distinct?: KeywordScalarFieldEnum | KeywordScalarFieldEnum[]
  }

  /**
   * Keyword findMany
   */
  export type KeywordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Keyword
     */
    select?: KeywordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Keyword
     */
    omit?: KeywordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeywordInclude<ExtArgs> | null
    /**
     * Filter, which Keywords to fetch.
     */
    where?: KeywordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Keywords to fetch.
     */
    orderBy?: KeywordOrderByWithRelationInput | KeywordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Keywords.
     */
    cursor?: KeywordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Keywords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Keywords.
     */
    skip?: number
    distinct?: KeywordScalarFieldEnum | KeywordScalarFieldEnum[]
  }

  /**
   * Keyword create
   */
  export type KeywordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Keyword
     */
    select?: KeywordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Keyword
     */
    omit?: KeywordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeywordInclude<ExtArgs> | null
    /**
     * The data needed to create a Keyword.
     */
    data: XOR<KeywordCreateInput, KeywordUncheckedCreateInput>
  }

  /**
   * Keyword createMany
   */
  export type KeywordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Keywords.
     */
    data: KeywordCreateManyInput | KeywordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Keyword createManyAndReturn
   */
  export type KeywordCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Keyword
     */
    select?: KeywordSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Keyword
     */
    omit?: KeywordOmit<ExtArgs> | null
    /**
     * The data used to create many Keywords.
     */
    data: KeywordCreateManyInput | KeywordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Keyword update
   */
  export type KeywordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Keyword
     */
    select?: KeywordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Keyword
     */
    omit?: KeywordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeywordInclude<ExtArgs> | null
    /**
     * The data needed to update a Keyword.
     */
    data: XOR<KeywordUpdateInput, KeywordUncheckedUpdateInput>
    /**
     * Choose, which Keyword to update.
     */
    where: KeywordWhereUniqueInput
  }

  /**
   * Keyword updateMany
   */
  export type KeywordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Keywords.
     */
    data: XOR<KeywordUpdateManyMutationInput, KeywordUncheckedUpdateManyInput>
    /**
     * Filter which Keywords to update
     */
    where?: KeywordWhereInput
    /**
     * Limit how many Keywords to update.
     */
    limit?: number
  }

  /**
   * Keyword updateManyAndReturn
   */
  export type KeywordUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Keyword
     */
    select?: KeywordSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Keyword
     */
    omit?: KeywordOmit<ExtArgs> | null
    /**
     * The data used to update Keywords.
     */
    data: XOR<KeywordUpdateManyMutationInput, KeywordUncheckedUpdateManyInput>
    /**
     * Filter which Keywords to update
     */
    where?: KeywordWhereInput
    /**
     * Limit how many Keywords to update.
     */
    limit?: number
  }

  /**
   * Keyword upsert
   */
  export type KeywordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Keyword
     */
    select?: KeywordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Keyword
     */
    omit?: KeywordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeywordInclude<ExtArgs> | null
    /**
     * The filter to search for the Keyword to update in case it exists.
     */
    where: KeywordWhereUniqueInput
    /**
     * In case the Keyword found by the `where` argument doesn't exist, create a new Keyword with this data.
     */
    create: XOR<KeywordCreateInput, KeywordUncheckedCreateInput>
    /**
     * In case the Keyword was found with the provided `where` argument, update it with this data.
     */
    update: XOR<KeywordUpdateInput, KeywordUncheckedUpdateInput>
  }

  /**
   * Keyword delete
   */
  export type KeywordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Keyword
     */
    select?: KeywordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Keyword
     */
    omit?: KeywordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeywordInclude<ExtArgs> | null
    /**
     * Filter which Keyword to delete.
     */
    where: KeywordWhereUniqueInput
  }

  /**
   * Keyword deleteMany
   */
  export type KeywordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Keywords to delete
     */
    where?: KeywordWhereInput
    /**
     * Limit how many Keywords to delete.
     */
    limit?: number
  }

  /**
   * Keyword.demandSignals
   */
  export type Keyword$demandSignalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DemandSignal
     */
    select?: DemandSignalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DemandSignal
     */
    omit?: DemandSignalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DemandSignalInclude<ExtArgs> | null
    where?: DemandSignalWhereInput
    orderBy?: DemandSignalOrderByWithRelationInput | DemandSignalOrderByWithRelationInput[]
    cursor?: DemandSignalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DemandSignalScalarFieldEnum | DemandSignalScalarFieldEnum[]
  }

  /**
   * Keyword.competitionSignals
   */
  export type Keyword$competitionSignalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompetitionSignal
     */
    select?: CompetitionSignalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompetitionSignal
     */
    omit?: CompetitionSignalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitionSignalInclude<ExtArgs> | null
    where?: CompetitionSignalWhereInput
    orderBy?: CompetitionSignalOrderByWithRelationInput | CompetitionSignalOrderByWithRelationInput[]
    cursor?: CompetitionSignalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CompetitionSignalScalarFieldEnum | CompetitionSignalScalarFieldEnum[]
  }

  /**
   * Keyword.trendSignals
   */
  export type Keyword$trendSignalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrendSignal
     */
    select?: TrendSignalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrendSignal
     */
    omit?: TrendSignalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrendSignalInclude<ExtArgs> | null
    where?: TrendSignalWhereInput
    orderBy?: TrendSignalOrderByWithRelationInput | TrendSignalOrderByWithRelationInput[]
    cursor?: TrendSignalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TrendSignalScalarFieldEnum | TrendSignalScalarFieldEnum[]
  }

  /**
   * Keyword.feasibilityScores
   */
  export type Keyword$feasibilityScoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeasibilityScore
     */
    select?: FeasibilityScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeasibilityScore
     */
    omit?: FeasibilityScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeasibilityScoreInclude<ExtArgs> | null
    where?: FeasibilityScoreWhereInput
    orderBy?: FeasibilityScoreOrderByWithRelationInput | FeasibilityScoreOrderByWithRelationInput[]
    cursor?: FeasibilityScoreWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FeasibilityScoreScalarFieldEnum | FeasibilityScoreScalarFieldEnum[]
  }

  /**
   * Keyword.outcomes
   */
  export type Keyword$outcomesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outcome
     */
    select?: OutcomeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Outcome
     */
    omit?: OutcomeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutcomeInclude<ExtArgs> | null
    where?: OutcomeWhereInput
    orderBy?: OutcomeOrderByWithRelationInput | OutcomeOrderByWithRelationInput[]
    cursor?: OutcomeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OutcomeScalarFieldEnum | OutcomeScalarFieldEnum[]
  }

  /**
   * Keyword.seoPages
   */
  export type Keyword$seoPagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeoPage
     */
    select?: SeoPageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeoPage
     */
    omit?: SeoPageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeoPageInclude<ExtArgs> | null
    where?: SeoPageWhereInput
    orderBy?: SeoPageOrderByWithRelationInput | SeoPageOrderByWithRelationInput[]
    cursor?: SeoPageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SeoPageScalarFieldEnum | SeoPageScalarFieldEnum[]
  }

  /**
   * Keyword without action
   */
  export type KeywordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Keyword
     */
    select?: KeywordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Keyword
     */
    omit?: KeywordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeywordInclude<ExtArgs> | null
  }


  /**
   * Model DemandSignal
   */

  export type AggregateDemandSignal = {
    _count: DemandSignalCountAggregateOutputType | null
    _avg: DemandSignalAvgAggregateOutputType | null
    _sum: DemandSignalSumAggregateOutputType | null
    _min: DemandSignalMinAggregateOutputType | null
    _max: DemandSignalMaxAggregateOutputType | null
  }

  export type DemandSignalAvgAggregateOutputType = {
    id: number | null
    keywordId: number | null
    postCount: number | null
    avgComments: number | null
    sentimentScore: number | null
    recencyScore: number | null
  }

  export type DemandSignalSumAggregateOutputType = {
    id: number | null
    keywordId: number | null
    postCount: number | null
    avgComments: number | null
    sentimentScore: number | null
    recencyScore: number | null
  }

  export type DemandSignalMinAggregateOutputType = {
    id: number | null
    keywordId: number | null
    source: string | null
    postCount: number | null
    avgComments: number | null
    sentimentScore: number | null
    recencyScore: number | null
    collectedAt: Date | null
  }

  export type DemandSignalMaxAggregateOutputType = {
    id: number | null
    keywordId: number | null
    source: string | null
    postCount: number | null
    avgComments: number | null
    sentimentScore: number | null
    recencyScore: number | null
    collectedAt: Date | null
  }

  export type DemandSignalCountAggregateOutputType = {
    id: number
    keywordId: number
    source: number
    postCount: number
    avgComments: number
    sentimentScore: number
    recencyScore: number
    rawData: number
    collectedAt: number
    _all: number
  }


  export type DemandSignalAvgAggregateInputType = {
    id?: true
    keywordId?: true
    postCount?: true
    avgComments?: true
    sentimentScore?: true
    recencyScore?: true
  }

  export type DemandSignalSumAggregateInputType = {
    id?: true
    keywordId?: true
    postCount?: true
    avgComments?: true
    sentimentScore?: true
    recencyScore?: true
  }

  export type DemandSignalMinAggregateInputType = {
    id?: true
    keywordId?: true
    source?: true
    postCount?: true
    avgComments?: true
    sentimentScore?: true
    recencyScore?: true
    collectedAt?: true
  }

  export type DemandSignalMaxAggregateInputType = {
    id?: true
    keywordId?: true
    source?: true
    postCount?: true
    avgComments?: true
    sentimentScore?: true
    recencyScore?: true
    collectedAt?: true
  }

  export type DemandSignalCountAggregateInputType = {
    id?: true
    keywordId?: true
    source?: true
    postCount?: true
    avgComments?: true
    sentimentScore?: true
    recencyScore?: true
    rawData?: true
    collectedAt?: true
    _all?: true
  }

  export type DemandSignalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DemandSignal to aggregate.
     */
    where?: DemandSignalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DemandSignals to fetch.
     */
    orderBy?: DemandSignalOrderByWithRelationInput | DemandSignalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DemandSignalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DemandSignals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DemandSignals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DemandSignals
    **/
    _count?: true | DemandSignalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DemandSignalAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DemandSignalSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DemandSignalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DemandSignalMaxAggregateInputType
  }

  export type GetDemandSignalAggregateType<T extends DemandSignalAggregateArgs> = {
        [P in keyof T & keyof AggregateDemandSignal]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDemandSignal[P]>
      : GetScalarType<T[P], AggregateDemandSignal[P]>
  }




  export type DemandSignalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DemandSignalWhereInput
    orderBy?: DemandSignalOrderByWithAggregationInput | DemandSignalOrderByWithAggregationInput[]
    by: DemandSignalScalarFieldEnum[] | DemandSignalScalarFieldEnum
    having?: DemandSignalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DemandSignalCountAggregateInputType | true
    _avg?: DemandSignalAvgAggregateInputType
    _sum?: DemandSignalSumAggregateInputType
    _min?: DemandSignalMinAggregateInputType
    _max?: DemandSignalMaxAggregateInputType
  }

  export type DemandSignalGroupByOutputType = {
    id: number
    keywordId: number
    source: string
    postCount: number | null
    avgComments: number | null
    sentimentScore: number | null
    recencyScore: number | null
    rawData: JsonValue | null
    collectedAt: Date
    _count: DemandSignalCountAggregateOutputType | null
    _avg: DemandSignalAvgAggregateOutputType | null
    _sum: DemandSignalSumAggregateOutputType | null
    _min: DemandSignalMinAggregateOutputType | null
    _max: DemandSignalMaxAggregateOutputType | null
  }

  type GetDemandSignalGroupByPayload<T extends DemandSignalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DemandSignalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DemandSignalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DemandSignalGroupByOutputType[P]>
            : GetScalarType<T[P], DemandSignalGroupByOutputType[P]>
        }
      >
    >


  export type DemandSignalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    keywordId?: boolean
    source?: boolean
    postCount?: boolean
    avgComments?: boolean
    sentimentScore?: boolean
    recencyScore?: boolean
    rawData?: boolean
    collectedAt?: boolean
    keyword?: boolean | KeywordDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["demandSignal"]>

  export type DemandSignalSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    keywordId?: boolean
    source?: boolean
    postCount?: boolean
    avgComments?: boolean
    sentimentScore?: boolean
    recencyScore?: boolean
    rawData?: boolean
    collectedAt?: boolean
    keyword?: boolean | KeywordDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["demandSignal"]>

  export type DemandSignalSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    keywordId?: boolean
    source?: boolean
    postCount?: boolean
    avgComments?: boolean
    sentimentScore?: boolean
    recencyScore?: boolean
    rawData?: boolean
    collectedAt?: boolean
    keyword?: boolean | KeywordDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["demandSignal"]>

  export type DemandSignalSelectScalar = {
    id?: boolean
    keywordId?: boolean
    source?: boolean
    postCount?: boolean
    avgComments?: boolean
    sentimentScore?: boolean
    recencyScore?: boolean
    rawData?: boolean
    collectedAt?: boolean
  }

  export type DemandSignalOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "keywordId" | "source" | "postCount" | "avgComments" | "sentimentScore" | "recencyScore" | "rawData" | "collectedAt", ExtArgs["result"]["demandSignal"]>
  export type DemandSignalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    keyword?: boolean | KeywordDefaultArgs<ExtArgs>
  }
  export type DemandSignalIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    keyword?: boolean | KeywordDefaultArgs<ExtArgs>
  }
  export type DemandSignalIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    keyword?: boolean | KeywordDefaultArgs<ExtArgs>
  }

  export type $DemandSignalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DemandSignal"
    objects: {
      keyword: Prisma.$KeywordPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      keywordId: number
      source: string
      postCount: number | null
      avgComments: number | null
      sentimentScore: number | null
      recencyScore: number | null
      rawData: Prisma.JsonValue | null
      collectedAt: Date
    }, ExtArgs["result"]["demandSignal"]>
    composites: {}
  }

  type DemandSignalGetPayload<S extends boolean | null | undefined | DemandSignalDefaultArgs> = $Result.GetResult<Prisma.$DemandSignalPayload, S>

  type DemandSignalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DemandSignalFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DemandSignalCountAggregateInputType | true
    }

  export interface DemandSignalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DemandSignal'], meta: { name: 'DemandSignal' } }
    /**
     * Find zero or one DemandSignal that matches the filter.
     * @param {DemandSignalFindUniqueArgs} args - Arguments to find a DemandSignal
     * @example
     * // Get one DemandSignal
     * const demandSignal = await prisma.demandSignal.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DemandSignalFindUniqueArgs>(args: SelectSubset<T, DemandSignalFindUniqueArgs<ExtArgs>>): Prisma__DemandSignalClient<$Result.GetResult<Prisma.$DemandSignalPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DemandSignal that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DemandSignalFindUniqueOrThrowArgs} args - Arguments to find a DemandSignal
     * @example
     * // Get one DemandSignal
     * const demandSignal = await prisma.demandSignal.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DemandSignalFindUniqueOrThrowArgs>(args: SelectSubset<T, DemandSignalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DemandSignalClient<$Result.GetResult<Prisma.$DemandSignalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DemandSignal that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DemandSignalFindFirstArgs} args - Arguments to find a DemandSignal
     * @example
     * // Get one DemandSignal
     * const demandSignal = await prisma.demandSignal.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DemandSignalFindFirstArgs>(args?: SelectSubset<T, DemandSignalFindFirstArgs<ExtArgs>>): Prisma__DemandSignalClient<$Result.GetResult<Prisma.$DemandSignalPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DemandSignal that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DemandSignalFindFirstOrThrowArgs} args - Arguments to find a DemandSignal
     * @example
     * // Get one DemandSignal
     * const demandSignal = await prisma.demandSignal.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DemandSignalFindFirstOrThrowArgs>(args?: SelectSubset<T, DemandSignalFindFirstOrThrowArgs<ExtArgs>>): Prisma__DemandSignalClient<$Result.GetResult<Prisma.$DemandSignalPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DemandSignals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DemandSignalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DemandSignals
     * const demandSignals = await prisma.demandSignal.findMany()
     * 
     * // Get first 10 DemandSignals
     * const demandSignals = await prisma.demandSignal.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const demandSignalWithIdOnly = await prisma.demandSignal.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DemandSignalFindManyArgs>(args?: SelectSubset<T, DemandSignalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DemandSignalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DemandSignal.
     * @param {DemandSignalCreateArgs} args - Arguments to create a DemandSignal.
     * @example
     * // Create one DemandSignal
     * const DemandSignal = await prisma.demandSignal.create({
     *   data: {
     *     // ... data to create a DemandSignal
     *   }
     * })
     * 
     */
    create<T extends DemandSignalCreateArgs>(args: SelectSubset<T, DemandSignalCreateArgs<ExtArgs>>): Prisma__DemandSignalClient<$Result.GetResult<Prisma.$DemandSignalPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DemandSignals.
     * @param {DemandSignalCreateManyArgs} args - Arguments to create many DemandSignals.
     * @example
     * // Create many DemandSignals
     * const demandSignal = await prisma.demandSignal.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DemandSignalCreateManyArgs>(args?: SelectSubset<T, DemandSignalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DemandSignals and returns the data saved in the database.
     * @param {DemandSignalCreateManyAndReturnArgs} args - Arguments to create many DemandSignals.
     * @example
     * // Create many DemandSignals
     * const demandSignal = await prisma.demandSignal.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DemandSignals and only return the `id`
     * const demandSignalWithIdOnly = await prisma.demandSignal.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DemandSignalCreateManyAndReturnArgs>(args?: SelectSubset<T, DemandSignalCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DemandSignalPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DemandSignal.
     * @param {DemandSignalDeleteArgs} args - Arguments to delete one DemandSignal.
     * @example
     * // Delete one DemandSignal
     * const DemandSignal = await prisma.demandSignal.delete({
     *   where: {
     *     // ... filter to delete one DemandSignal
     *   }
     * })
     * 
     */
    delete<T extends DemandSignalDeleteArgs>(args: SelectSubset<T, DemandSignalDeleteArgs<ExtArgs>>): Prisma__DemandSignalClient<$Result.GetResult<Prisma.$DemandSignalPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DemandSignal.
     * @param {DemandSignalUpdateArgs} args - Arguments to update one DemandSignal.
     * @example
     * // Update one DemandSignal
     * const demandSignal = await prisma.demandSignal.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DemandSignalUpdateArgs>(args: SelectSubset<T, DemandSignalUpdateArgs<ExtArgs>>): Prisma__DemandSignalClient<$Result.GetResult<Prisma.$DemandSignalPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DemandSignals.
     * @param {DemandSignalDeleteManyArgs} args - Arguments to filter DemandSignals to delete.
     * @example
     * // Delete a few DemandSignals
     * const { count } = await prisma.demandSignal.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DemandSignalDeleteManyArgs>(args?: SelectSubset<T, DemandSignalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DemandSignals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DemandSignalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DemandSignals
     * const demandSignal = await prisma.demandSignal.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DemandSignalUpdateManyArgs>(args: SelectSubset<T, DemandSignalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DemandSignals and returns the data updated in the database.
     * @param {DemandSignalUpdateManyAndReturnArgs} args - Arguments to update many DemandSignals.
     * @example
     * // Update many DemandSignals
     * const demandSignal = await prisma.demandSignal.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DemandSignals and only return the `id`
     * const demandSignalWithIdOnly = await prisma.demandSignal.updateManyAndReturn({
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
    updateManyAndReturn<T extends DemandSignalUpdateManyAndReturnArgs>(args: SelectSubset<T, DemandSignalUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DemandSignalPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DemandSignal.
     * @param {DemandSignalUpsertArgs} args - Arguments to update or create a DemandSignal.
     * @example
     * // Update or create a DemandSignal
     * const demandSignal = await prisma.demandSignal.upsert({
     *   create: {
     *     // ... data to create a DemandSignal
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DemandSignal we want to update
     *   }
     * })
     */
    upsert<T extends DemandSignalUpsertArgs>(args: SelectSubset<T, DemandSignalUpsertArgs<ExtArgs>>): Prisma__DemandSignalClient<$Result.GetResult<Prisma.$DemandSignalPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DemandSignals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DemandSignalCountArgs} args - Arguments to filter DemandSignals to count.
     * @example
     * // Count the number of DemandSignals
     * const count = await prisma.demandSignal.count({
     *   where: {
     *     // ... the filter for the DemandSignals we want to count
     *   }
     * })
    **/
    count<T extends DemandSignalCountArgs>(
      args?: Subset<T, DemandSignalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DemandSignalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DemandSignal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DemandSignalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DemandSignalAggregateArgs>(args: Subset<T, DemandSignalAggregateArgs>): Prisma.PrismaPromise<GetDemandSignalAggregateType<T>>

    /**
     * Group by DemandSignal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DemandSignalGroupByArgs} args - Group by arguments.
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
      T extends DemandSignalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DemandSignalGroupByArgs['orderBy'] }
        : { orderBy?: DemandSignalGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DemandSignalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDemandSignalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DemandSignal model
   */
  readonly fields: DemandSignalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DemandSignal.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DemandSignalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    keyword<T extends KeywordDefaultArgs<ExtArgs> = {}>(args?: Subset<T, KeywordDefaultArgs<ExtArgs>>): Prisma__KeywordClient<$Result.GetResult<Prisma.$KeywordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the DemandSignal model
   */
  interface DemandSignalFieldRefs {
    readonly id: FieldRef<"DemandSignal", 'Int'>
    readonly keywordId: FieldRef<"DemandSignal", 'Int'>
    readonly source: FieldRef<"DemandSignal", 'String'>
    readonly postCount: FieldRef<"DemandSignal", 'Int'>
    readonly avgComments: FieldRef<"DemandSignal", 'Float'>
    readonly sentimentScore: FieldRef<"DemandSignal", 'Float'>
    readonly recencyScore: FieldRef<"DemandSignal", 'Float'>
    readonly rawData: FieldRef<"DemandSignal", 'Json'>
    readonly collectedAt: FieldRef<"DemandSignal", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DemandSignal findUnique
   */
  export type DemandSignalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DemandSignal
     */
    select?: DemandSignalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DemandSignal
     */
    omit?: DemandSignalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DemandSignalInclude<ExtArgs> | null
    /**
     * Filter, which DemandSignal to fetch.
     */
    where: DemandSignalWhereUniqueInput
  }

  /**
   * DemandSignal findUniqueOrThrow
   */
  export type DemandSignalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DemandSignal
     */
    select?: DemandSignalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DemandSignal
     */
    omit?: DemandSignalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DemandSignalInclude<ExtArgs> | null
    /**
     * Filter, which DemandSignal to fetch.
     */
    where: DemandSignalWhereUniqueInput
  }

  /**
   * DemandSignal findFirst
   */
  export type DemandSignalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DemandSignal
     */
    select?: DemandSignalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DemandSignal
     */
    omit?: DemandSignalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DemandSignalInclude<ExtArgs> | null
    /**
     * Filter, which DemandSignal to fetch.
     */
    where?: DemandSignalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DemandSignals to fetch.
     */
    orderBy?: DemandSignalOrderByWithRelationInput | DemandSignalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DemandSignals.
     */
    cursor?: DemandSignalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DemandSignals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DemandSignals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DemandSignals.
     */
    distinct?: DemandSignalScalarFieldEnum | DemandSignalScalarFieldEnum[]
  }

  /**
   * DemandSignal findFirstOrThrow
   */
  export type DemandSignalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DemandSignal
     */
    select?: DemandSignalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DemandSignal
     */
    omit?: DemandSignalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DemandSignalInclude<ExtArgs> | null
    /**
     * Filter, which DemandSignal to fetch.
     */
    where?: DemandSignalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DemandSignals to fetch.
     */
    orderBy?: DemandSignalOrderByWithRelationInput | DemandSignalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DemandSignals.
     */
    cursor?: DemandSignalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DemandSignals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DemandSignals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DemandSignals.
     */
    distinct?: DemandSignalScalarFieldEnum | DemandSignalScalarFieldEnum[]
  }

  /**
   * DemandSignal findMany
   */
  export type DemandSignalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DemandSignal
     */
    select?: DemandSignalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DemandSignal
     */
    omit?: DemandSignalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DemandSignalInclude<ExtArgs> | null
    /**
     * Filter, which DemandSignals to fetch.
     */
    where?: DemandSignalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DemandSignals to fetch.
     */
    orderBy?: DemandSignalOrderByWithRelationInput | DemandSignalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DemandSignals.
     */
    cursor?: DemandSignalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DemandSignals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DemandSignals.
     */
    skip?: number
    distinct?: DemandSignalScalarFieldEnum | DemandSignalScalarFieldEnum[]
  }

  /**
   * DemandSignal create
   */
  export type DemandSignalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DemandSignal
     */
    select?: DemandSignalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DemandSignal
     */
    omit?: DemandSignalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DemandSignalInclude<ExtArgs> | null
    /**
     * The data needed to create a DemandSignal.
     */
    data: XOR<DemandSignalCreateInput, DemandSignalUncheckedCreateInput>
  }

  /**
   * DemandSignal createMany
   */
  export type DemandSignalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DemandSignals.
     */
    data: DemandSignalCreateManyInput | DemandSignalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DemandSignal createManyAndReturn
   */
  export type DemandSignalCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DemandSignal
     */
    select?: DemandSignalSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DemandSignal
     */
    omit?: DemandSignalOmit<ExtArgs> | null
    /**
     * The data used to create many DemandSignals.
     */
    data: DemandSignalCreateManyInput | DemandSignalCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DemandSignalIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DemandSignal update
   */
  export type DemandSignalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DemandSignal
     */
    select?: DemandSignalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DemandSignal
     */
    omit?: DemandSignalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DemandSignalInclude<ExtArgs> | null
    /**
     * The data needed to update a DemandSignal.
     */
    data: XOR<DemandSignalUpdateInput, DemandSignalUncheckedUpdateInput>
    /**
     * Choose, which DemandSignal to update.
     */
    where: DemandSignalWhereUniqueInput
  }

  /**
   * DemandSignal updateMany
   */
  export type DemandSignalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DemandSignals.
     */
    data: XOR<DemandSignalUpdateManyMutationInput, DemandSignalUncheckedUpdateManyInput>
    /**
     * Filter which DemandSignals to update
     */
    where?: DemandSignalWhereInput
    /**
     * Limit how many DemandSignals to update.
     */
    limit?: number
  }

  /**
   * DemandSignal updateManyAndReturn
   */
  export type DemandSignalUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DemandSignal
     */
    select?: DemandSignalSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DemandSignal
     */
    omit?: DemandSignalOmit<ExtArgs> | null
    /**
     * The data used to update DemandSignals.
     */
    data: XOR<DemandSignalUpdateManyMutationInput, DemandSignalUncheckedUpdateManyInput>
    /**
     * Filter which DemandSignals to update
     */
    where?: DemandSignalWhereInput
    /**
     * Limit how many DemandSignals to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DemandSignalIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DemandSignal upsert
   */
  export type DemandSignalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DemandSignal
     */
    select?: DemandSignalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DemandSignal
     */
    omit?: DemandSignalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DemandSignalInclude<ExtArgs> | null
    /**
     * The filter to search for the DemandSignal to update in case it exists.
     */
    where: DemandSignalWhereUniqueInput
    /**
     * In case the DemandSignal found by the `where` argument doesn't exist, create a new DemandSignal with this data.
     */
    create: XOR<DemandSignalCreateInput, DemandSignalUncheckedCreateInput>
    /**
     * In case the DemandSignal was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DemandSignalUpdateInput, DemandSignalUncheckedUpdateInput>
  }

  /**
   * DemandSignal delete
   */
  export type DemandSignalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DemandSignal
     */
    select?: DemandSignalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DemandSignal
     */
    omit?: DemandSignalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DemandSignalInclude<ExtArgs> | null
    /**
     * Filter which DemandSignal to delete.
     */
    where: DemandSignalWhereUniqueInput
  }

  /**
   * DemandSignal deleteMany
   */
  export type DemandSignalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DemandSignals to delete
     */
    where?: DemandSignalWhereInput
    /**
     * Limit how many DemandSignals to delete.
     */
    limit?: number
  }

  /**
   * DemandSignal without action
   */
  export type DemandSignalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DemandSignal
     */
    select?: DemandSignalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DemandSignal
     */
    omit?: DemandSignalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DemandSignalInclude<ExtArgs> | null
  }


  /**
   * Model CompetitionSignal
   */

  export type AggregateCompetitionSignal = {
    _count: CompetitionSignalCountAggregateOutputType | null
    _avg: CompetitionSignalAvgAggregateOutputType | null
    _sum: CompetitionSignalSumAggregateOutputType | null
    _min: CompetitionSignalMinAggregateOutputType | null
    _max: CompetitionSignalMaxAggregateOutputType | null
  }

  export type CompetitionSignalAvgAggregateOutputType = {
    id: number | null
    keywordId: number | null
    avgDomainStrength: number | null
    uniqueDomainsTop10: number | null
    avgContentLength: number | null
    avgContentAgeDays: number | null
    indexedPagesEstimate: number | null
  }

  export type CompetitionSignalSumAggregateOutputType = {
    id: number | null
    keywordId: number | null
    avgDomainStrength: number | null
    uniqueDomainsTop10: number | null
    avgContentLength: number | null
    avgContentAgeDays: number | null
    indexedPagesEstimate: bigint | null
  }

  export type CompetitionSignalMinAggregateOutputType = {
    id: number | null
    keywordId: number | null
    avgDomainStrength: number | null
    uniqueDomainsTop10: number | null
    avgContentLength: number | null
    avgContentAgeDays: number | null
    indexedPagesEstimate: bigint | null
    collectedAt: Date | null
  }

  export type CompetitionSignalMaxAggregateOutputType = {
    id: number | null
    keywordId: number | null
    avgDomainStrength: number | null
    uniqueDomainsTop10: number | null
    avgContentLength: number | null
    avgContentAgeDays: number | null
    indexedPagesEstimate: bigint | null
    collectedAt: Date | null
  }

  export type CompetitionSignalCountAggregateOutputType = {
    id: number
    keywordId: number
    topResults: number
    avgDomainStrength: number
    uniqueDomainsTop10: number
    avgContentLength: number
    avgContentAgeDays: number
    indexedPagesEstimate: number
    collectedAt: number
    _all: number
  }


  export type CompetitionSignalAvgAggregateInputType = {
    id?: true
    keywordId?: true
    avgDomainStrength?: true
    uniqueDomainsTop10?: true
    avgContentLength?: true
    avgContentAgeDays?: true
    indexedPagesEstimate?: true
  }

  export type CompetitionSignalSumAggregateInputType = {
    id?: true
    keywordId?: true
    avgDomainStrength?: true
    uniqueDomainsTop10?: true
    avgContentLength?: true
    avgContentAgeDays?: true
    indexedPagesEstimate?: true
  }

  export type CompetitionSignalMinAggregateInputType = {
    id?: true
    keywordId?: true
    avgDomainStrength?: true
    uniqueDomainsTop10?: true
    avgContentLength?: true
    avgContentAgeDays?: true
    indexedPagesEstimate?: true
    collectedAt?: true
  }

  export type CompetitionSignalMaxAggregateInputType = {
    id?: true
    keywordId?: true
    avgDomainStrength?: true
    uniqueDomainsTop10?: true
    avgContentLength?: true
    avgContentAgeDays?: true
    indexedPagesEstimate?: true
    collectedAt?: true
  }

  export type CompetitionSignalCountAggregateInputType = {
    id?: true
    keywordId?: true
    topResults?: true
    avgDomainStrength?: true
    uniqueDomainsTop10?: true
    avgContentLength?: true
    avgContentAgeDays?: true
    indexedPagesEstimate?: true
    collectedAt?: true
    _all?: true
  }

  export type CompetitionSignalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CompetitionSignal to aggregate.
     */
    where?: CompetitionSignalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompetitionSignals to fetch.
     */
    orderBy?: CompetitionSignalOrderByWithRelationInput | CompetitionSignalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CompetitionSignalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompetitionSignals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompetitionSignals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CompetitionSignals
    **/
    _count?: true | CompetitionSignalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CompetitionSignalAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CompetitionSignalSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompetitionSignalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompetitionSignalMaxAggregateInputType
  }

  export type GetCompetitionSignalAggregateType<T extends CompetitionSignalAggregateArgs> = {
        [P in keyof T & keyof AggregateCompetitionSignal]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompetitionSignal[P]>
      : GetScalarType<T[P], AggregateCompetitionSignal[P]>
  }




  export type CompetitionSignalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompetitionSignalWhereInput
    orderBy?: CompetitionSignalOrderByWithAggregationInput | CompetitionSignalOrderByWithAggregationInput[]
    by: CompetitionSignalScalarFieldEnum[] | CompetitionSignalScalarFieldEnum
    having?: CompetitionSignalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompetitionSignalCountAggregateInputType | true
    _avg?: CompetitionSignalAvgAggregateInputType
    _sum?: CompetitionSignalSumAggregateInputType
    _min?: CompetitionSignalMinAggregateInputType
    _max?: CompetitionSignalMaxAggregateInputType
  }

  export type CompetitionSignalGroupByOutputType = {
    id: number
    keywordId: number
    topResults: JsonValue | null
    avgDomainStrength: number | null
    uniqueDomainsTop10: number | null
    avgContentLength: number | null
    avgContentAgeDays: number | null
    indexedPagesEstimate: bigint | null
    collectedAt: Date
    _count: CompetitionSignalCountAggregateOutputType | null
    _avg: CompetitionSignalAvgAggregateOutputType | null
    _sum: CompetitionSignalSumAggregateOutputType | null
    _min: CompetitionSignalMinAggregateOutputType | null
    _max: CompetitionSignalMaxAggregateOutputType | null
  }

  type GetCompetitionSignalGroupByPayload<T extends CompetitionSignalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompetitionSignalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompetitionSignalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompetitionSignalGroupByOutputType[P]>
            : GetScalarType<T[P], CompetitionSignalGroupByOutputType[P]>
        }
      >
    >


  export type CompetitionSignalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    keywordId?: boolean
    topResults?: boolean
    avgDomainStrength?: boolean
    uniqueDomainsTop10?: boolean
    avgContentLength?: boolean
    avgContentAgeDays?: boolean
    indexedPagesEstimate?: boolean
    collectedAt?: boolean
    keyword?: boolean | KeywordDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["competitionSignal"]>

  export type CompetitionSignalSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    keywordId?: boolean
    topResults?: boolean
    avgDomainStrength?: boolean
    uniqueDomainsTop10?: boolean
    avgContentLength?: boolean
    avgContentAgeDays?: boolean
    indexedPagesEstimate?: boolean
    collectedAt?: boolean
    keyword?: boolean | KeywordDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["competitionSignal"]>

  export type CompetitionSignalSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    keywordId?: boolean
    topResults?: boolean
    avgDomainStrength?: boolean
    uniqueDomainsTop10?: boolean
    avgContentLength?: boolean
    avgContentAgeDays?: boolean
    indexedPagesEstimate?: boolean
    collectedAt?: boolean
    keyword?: boolean | KeywordDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["competitionSignal"]>

  export type CompetitionSignalSelectScalar = {
    id?: boolean
    keywordId?: boolean
    topResults?: boolean
    avgDomainStrength?: boolean
    uniqueDomainsTop10?: boolean
    avgContentLength?: boolean
    avgContentAgeDays?: boolean
    indexedPagesEstimate?: boolean
    collectedAt?: boolean
  }

  export type CompetitionSignalOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "keywordId" | "topResults" | "avgDomainStrength" | "uniqueDomainsTop10" | "avgContentLength" | "avgContentAgeDays" | "indexedPagesEstimate" | "collectedAt", ExtArgs["result"]["competitionSignal"]>
  export type CompetitionSignalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    keyword?: boolean | KeywordDefaultArgs<ExtArgs>
  }
  export type CompetitionSignalIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    keyword?: boolean | KeywordDefaultArgs<ExtArgs>
  }
  export type CompetitionSignalIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    keyword?: boolean | KeywordDefaultArgs<ExtArgs>
  }

  export type $CompetitionSignalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CompetitionSignal"
    objects: {
      keyword: Prisma.$KeywordPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      keywordId: number
      topResults: Prisma.JsonValue | null
      avgDomainStrength: number | null
      uniqueDomainsTop10: number | null
      avgContentLength: number | null
      avgContentAgeDays: number | null
      indexedPagesEstimate: bigint | null
      collectedAt: Date
    }, ExtArgs["result"]["competitionSignal"]>
    composites: {}
  }

  type CompetitionSignalGetPayload<S extends boolean | null | undefined | CompetitionSignalDefaultArgs> = $Result.GetResult<Prisma.$CompetitionSignalPayload, S>

  type CompetitionSignalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CompetitionSignalFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CompetitionSignalCountAggregateInputType | true
    }

  export interface CompetitionSignalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CompetitionSignal'], meta: { name: 'CompetitionSignal' } }
    /**
     * Find zero or one CompetitionSignal that matches the filter.
     * @param {CompetitionSignalFindUniqueArgs} args - Arguments to find a CompetitionSignal
     * @example
     * // Get one CompetitionSignal
     * const competitionSignal = await prisma.competitionSignal.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CompetitionSignalFindUniqueArgs>(args: SelectSubset<T, CompetitionSignalFindUniqueArgs<ExtArgs>>): Prisma__CompetitionSignalClient<$Result.GetResult<Prisma.$CompetitionSignalPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CompetitionSignal that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CompetitionSignalFindUniqueOrThrowArgs} args - Arguments to find a CompetitionSignal
     * @example
     * // Get one CompetitionSignal
     * const competitionSignal = await prisma.competitionSignal.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CompetitionSignalFindUniqueOrThrowArgs>(args: SelectSubset<T, CompetitionSignalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CompetitionSignalClient<$Result.GetResult<Prisma.$CompetitionSignalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CompetitionSignal that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetitionSignalFindFirstArgs} args - Arguments to find a CompetitionSignal
     * @example
     * // Get one CompetitionSignal
     * const competitionSignal = await prisma.competitionSignal.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CompetitionSignalFindFirstArgs>(args?: SelectSubset<T, CompetitionSignalFindFirstArgs<ExtArgs>>): Prisma__CompetitionSignalClient<$Result.GetResult<Prisma.$CompetitionSignalPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CompetitionSignal that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetitionSignalFindFirstOrThrowArgs} args - Arguments to find a CompetitionSignal
     * @example
     * // Get one CompetitionSignal
     * const competitionSignal = await prisma.competitionSignal.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CompetitionSignalFindFirstOrThrowArgs>(args?: SelectSubset<T, CompetitionSignalFindFirstOrThrowArgs<ExtArgs>>): Prisma__CompetitionSignalClient<$Result.GetResult<Prisma.$CompetitionSignalPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CompetitionSignals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetitionSignalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CompetitionSignals
     * const competitionSignals = await prisma.competitionSignal.findMany()
     * 
     * // Get first 10 CompetitionSignals
     * const competitionSignals = await prisma.competitionSignal.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const competitionSignalWithIdOnly = await prisma.competitionSignal.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CompetitionSignalFindManyArgs>(args?: SelectSubset<T, CompetitionSignalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompetitionSignalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CompetitionSignal.
     * @param {CompetitionSignalCreateArgs} args - Arguments to create a CompetitionSignal.
     * @example
     * // Create one CompetitionSignal
     * const CompetitionSignal = await prisma.competitionSignal.create({
     *   data: {
     *     // ... data to create a CompetitionSignal
     *   }
     * })
     * 
     */
    create<T extends CompetitionSignalCreateArgs>(args: SelectSubset<T, CompetitionSignalCreateArgs<ExtArgs>>): Prisma__CompetitionSignalClient<$Result.GetResult<Prisma.$CompetitionSignalPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CompetitionSignals.
     * @param {CompetitionSignalCreateManyArgs} args - Arguments to create many CompetitionSignals.
     * @example
     * // Create many CompetitionSignals
     * const competitionSignal = await prisma.competitionSignal.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CompetitionSignalCreateManyArgs>(args?: SelectSubset<T, CompetitionSignalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CompetitionSignals and returns the data saved in the database.
     * @param {CompetitionSignalCreateManyAndReturnArgs} args - Arguments to create many CompetitionSignals.
     * @example
     * // Create many CompetitionSignals
     * const competitionSignal = await prisma.competitionSignal.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CompetitionSignals and only return the `id`
     * const competitionSignalWithIdOnly = await prisma.competitionSignal.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CompetitionSignalCreateManyAndReturnArgs>(args?: SelectSubset<T, CompetitionSignalCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompetitionSignalPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CompetitionSignal.
     * @param {CompetitionSignalDeleteArgs} args - Arguments to delete one CompetitionSignal.
     * @example
     * // Delete one CompetitionSignal
     * const CompetitionSignal = await prisma.competitionSignal.delete({
     *   where: {
     *     // ... filter to delete one CompetitionSignal
     *   }
     * })
     * 
     */
    delete<T extends CompetitionSignalDeleteArgs>(args: SelectSubset<T, CompetitionSignalDeleteArgs<ExtArgs>>): Prisma__CompetitionSignalClient<$Result.GetResult<Prisma.$CompetitionSignalPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CompetitionSignal.
     * @param {CompetitionSignalUpdateArgs} args - Arguments to update one CompetitionSignal.
     * @example
     * // Update one CompetitionSignal
     * const competitionSignal = await prisma.competitionSignal.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CompetitionSignalUpdateArgs>(args: SelectSubset<T, CompetitionSignalUpdateArgs<ExtArgs>>): Prisma__CompetitionSignalClient<$Result.GetResult<Prisma.$CompetitionSignalPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CompetitionSignals.
     * @param {CompetitionSignalDeleteManyArgs} args - Arguments to filter CompetitionSignals to delete.
     * @example
     * // Delete a few CompetitionSignals
     * const { count } = await prisma.competitionSignal.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CompetitionSignalDeleteManyArgs>(args?: SelectSubset<T, CompetitionSignalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CompetitionSignals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetitionSignalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CompetitionSignals
     * const competitionSignal = await prisma.competitionSignal.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CompetitionSignalUpdateManyArgs>(args: SelectSubset<T, CompetitionSignalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CompetitionSignals and returns the data updated in the database.
     * @param {CompetitionSignalUpdateManyAndReturnArgs} args - Arguments to update many CompetitionSignals.
     * @example
     * // Update many CompetitionSignals
     * const competitionSignal = await prisma.competitionSignal.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CompetitionSignals and only return the `id`
     * const competitionSignalWithIdOnly = await prisma.competitionSignal.updateManyAndReturn({
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
    updateManyAndReturn<T extends CompetitionSignalUpdateManyAndReturnArgs>(args: SelectSubset<T, CompetitionSignalUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompetitionSignalPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CompetitionSignal.
     * @param {CompetitionSignalUpsertArgs} args - Arguments to update or create a CompetitionSignal.
     * @example
     * // Update or create a CompetitionSignal
     * const competitionSignal = await prisma.competitionSignal.upsert({
     *   create: {
     *     // ... data to create a CompetitionSignal
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CompetitionSignal we want to update
     *   }
     * })
     */
    upsert<T extends CompetitionSignalUpsertArgs>(args: SelectSubset<T, CompetitionSignalUpsertArgs<ExtArgs>>): Prisma__CompetitionSignalClient<$Result.GetResult<Prisma.$CompetitionSignalPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CompetitionSignals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetitionSignalCountArgs} args - Arguments to filter CompetitionSignals to count.
     * @example
     * // Count the number of CompetitionSignals
     * const count = await prisma.competitionSignal.count({
     *   where: {
     *     // ... the filter for the CompetitionSignals we want to count
     *   }
     * })
    **/
    count<T extends CompetitionSignalCountArgs>(
      args?: Subset<T, CompetitionSignalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompetitionSignalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CompetitionSignal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetitionSignalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CompetitionSignalAggregateArgs>(args: Subset<T, CompetitionSignalAggregateArgs>): Prisma.PrismaPromise<GetCompetitionSignalAggregateType<T>>

    /**
     * Group by CompetitionSignal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetitionSignalGroupByArgs} args - Group by arguments.
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
      T extends CompetitionSignalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompetitionSignalGroupByArgs['orderBy'] }
        : { orderBy?: CompetitionSignalGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CompetitionSignalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompetitionSignalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CompetitionSignal model
   */
  readonly fields: CompetitionSignalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CompetitionSignal.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CompetitionSignalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    keyword<T extends KeywordDefaultArgs<ExtArgs> = {}>(args?: Subset<T, KeywordDefaultArgs<ExtArgs>>): Prisma__KeywordClient<$Result.GetResult<Prisma.$KeywordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the CompetitionSignal model
   */
  interface CompetitionSignalFieldRefs {
    readonly id: FieldRef<"CompetitionSignal", 'Int'>
    readonly keywordId: FieldRef<"CompetitionSignal", 'Int'>
    readonly topResults: FieldRef<"CompetitionSignal", 'Json'>
    readonly avgDomainStrength: FieldRef<"CompetitionSignal", 'Float'>
    readonly uniqueDomainsTop10: FieldRef<"CompetitionSignal", 'Int'>
    readonly avgContentLength: FieldRef<"CompetitionSignal", 'Int'>
    readonly avgContentAgeDays: FieldRef<"CompetitionSignal", 'Int'>
    readonly indexedPagesEstimate: FieldRef<"CompetitionSignal", 'BigInt'>
    readonly collectedAt: FieldRef<"CompetitionSignal", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CompetitionSignal findUnique
   */
  export type CompetitionSignalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompetitionSignal
     */
    select?: CompetitionSignalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompetitionSignal
     */
    omit?: CompetitionSignalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitionSignalInclude<ExtArgs> | null
    /**
     * Filter, which CompetitionSignal to fetch.
     */
    where: CompetitionSignalWhereUniqueInput
  }

  /**
   * CompetitionSignal findUniqueOrThrow
   */
  export type CompetitionSignalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompetitionSignal
     */
    select?: CompetitionSignalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompetitionSignal
     */
    omit?: CompetitionSignalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitionSignalInclude<ExtArgs> | null
    /**
     * Filter, which CompetitionSignal to fetch.
     */
    where: CompetitionSignalWhereUniqueInput
  }

  /**
   * CompetitionSignal findFirst
   */
  export type CompetitionSignalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompetitionSignal
     */
    select?: CompetitionSignalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompetitionSignal
     */
    omit?: CompetitionSignalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitionSignalInclude<ExtArgs> | null
    /**
     * Filter, which CompetitionSignal to fetch.
     */
    where?: CompetitionSignalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompetitionSignals to fetch.
     */
    orderBy?: CompetitionSignalOrderByWithRelationInput | CompetitionSignalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CompetitionSignals.
     */
    cursor?: CompetitionSignalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompetitionSignals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompetitionSignals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CompetitionSignals.
     */
    distinct?: CompetitionSignalScalarFieldEnum | CompetitionSignalScalarFieldEnum[]
  }

  /**
   * CompetitionSignal findFirstOrThrow
   */
  export type CompetitionSignalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompetitionSignal
     */
    select?: CompetitionSignalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompetitionSignal
     */
    omit?: CompetitionSignalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitionSignalInclude<ExtArgs> | null
    /**
     * Filter, which CompetitionSignal to fetch.
     */
    where?: CompetitionSignalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompetitionSignals to fetch.
     */
    orderBy?: CompetitionSignalOrderByWithRelationInput | CompetitionSignalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CompetitionSignals.
     */
    cursor?: CompetitionSignalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompetitionSignals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompetitionSignals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CompetitionSignals.
     */
    distinct?: CompetitionSignalScalarFieldEnum | CompetitionSignalScalarFieldEnum[]
  }

  /**
   * CompetitionSignal findMany
   */
  export type CompetitionSignalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompetitionSignal
     */
    select?: CompetitionSignalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompetitionSignal
     */
    omit?: CompetitionSignalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitionSignalInclude<ExtArgs> | null
    /**
     * Filter, which CompetitionSignals to fetch.
     */
    where?: CompetitionSignalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompetitionSignals to fetch.
     */
    orderBy?: CompetitionSignalOrderByWithRelationInput | CompetitionSignalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CompetitionSignals.
     */
    cursor?: CompetitionSignalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompetitionSignals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompetitionSignals.
     */
    skip?: number
    distinct?: CompetitionSignalScalarFieldEnum | CompetitionSignalScalarFieldEnum[]
  }

  /**
   * CompetitionSignal create
   */
  export type CompetitionSignalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompetitionSignal
     */
    select?: CompetitionSignalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompetitionSignal
     */
    omit?: CompetitionSignalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitionSignalInclude<ExtArgs> | null
    /**
     * The data needed to create a CompetitionSignal.
     */
    data: XOR<CompetitionSignalCreateInput, CompetitionSignalUncheckedCreateInput>
  }

  /**
   * CompetitionSignal createMany
   */
  export type CompetitionSignalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CompetitionSignals.
     */
    data: CompetitionSignalCreateManyInput | CompetitionSignalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CompetitionSignal createManyAndReturn
   */
  export type CompetitionSignalCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompetitionSignal
     */
    select?: CompetitionSignalSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CompetitionSignal
     */
    omit?: CompetitionSignalOmit<ExtArgs> | null
    /**
     * The data used to create many CompetitionSignals.
     */
    data: CompetitionSignalCreateManyInput | CompetitionSignalCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitionSignalIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CompetitionSignal update
   */
  export type CompetitionSignalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompetitionSignal
     */
    select?: CompetitionSignalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompetitionSignal
     */
    omit?: CompetitionSignalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitionSignalInclude<ExtArgs> | null
    /**
     * The data needed to update a CompetitionSignal.
     */
    data: XOR<CompetitionSignalUpdateInput, CompetitionSignalUncheckedUpdateInput>
    /**
     * Choose, which CompetitionSignal to update.
     */
    where: CompetitionSignalWhereUniqueInput
  }

  /**
   * CompetitionSignal updateMany
   */
  export type CompetitionSignalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CompetitionSignals.
     */
    data: XOR<CompetitionSignalUpdateManyMutationInput, CompetitionSignalUncheckedUpdateManyInput>
    /**
     * Filter which CompetitionSignals to update
     */
    where?: CompetitionSignalWhereInput
    /**
     * Limit how many CompetitionSignals to update.
     */
    limit?: number
  }

  /**
   * CompetitionSignal updateManyAndReturn
   */
  export type CompetitionSignalUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompetitionSignal
     */
    select?: CompetitionSignalSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CompetitionSignal
     */
    omit?: CompetitionSignalOmit<ExtArgs> | null
    /**
     * The data used to update CompetitionSignals.
     */
    data: XOR<CompetitionSignalUpdateManyMutationInput, CompetitionSignalUncheckedUpdateManyInput>
    /**
     * Filter which CompetitionSignals to update
     */
    where?: CompetitionSignalWhereInput
    /**
     * Limit how many CompetitionSignals to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitionSignalIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CompetitionSignal upsert
   */
  export type CompetitionSignalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompetitionSignal
     */
    select?: CompetitionSignalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompetitionSignal
     */
    omit?: CompetitionSignalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitionSignalInclude<ExtArgs> | null
    /**
     * The filter to search for the CompetitionSignal to update in case it exists.
     */
    where: CompetitionSignalWhereUniqueInput
    /**
     * In case the CompetitionSignal found by the `where` argument doesn't exist, create a new CompetitionSignal with this data.
     */
    create: XOR<CompetitionSignalCreateInput, CompetitionSignalUncheckedCreateInput>
    /**
     * In case the CompetitionSignal was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CompetitionSignalUpdateInput, CompetitionSignalUncheckedUpdateInput>
  }

  /**
   * CompetitionSignal delete
   */
  export type CompetitionSignalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompetitionSignal
     */
    select?: CompetitionSignalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompetitionSignal
     */
    omit?: CompetitionSignalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitionSignalInclude<ExtArgs> | null
    /**
     * Filter which CompetitionSignal to delete.
     */
    where: CompetitionSignalWhereUniqueInput
  }

  /**
   * CompetitionSignal deleteMany
   */
  export type CompetitionSignalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CompetitionSignals to delete
     */
    where?: CompetitionSignalWhereInput
    /**
     * Limit how many CompetitionSignals to delete.
     */
    limit?: number
  }

  /**
   * CompetitionSignal without action
   */
  export type CompetitionSignalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompetitionSignal
     */
    select?: CompetitionSignalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompetitionSignal
     */
    omit?: CompetitionSignalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitionSignalInclude<ExtArgs> | null
  }


  /**
   * Model TrendSignal
   */

  export type AggregateTrendSignal = {
    _count: TrendSignalCountAggregateOutputType | null
    _avg: TrendSignalAvgAggregateOutputType | null
    _sum: TrendSignalSumAggregateOutputType | null
    _min: TrendSignalMinAggregateOutputType | null
    _max: TrendSignalMaxAggregateOutputType | null
  }

  export type TrendSignalAvgAggregateOutputType = {
    id: number | null
    keywordId: number | null
    slope: number | null
    variance: number | null
  }

  export type TrendSignalSumAggregateOutputType = {
    id: number | null
    keywordId: number | null
    slope: number | null
    variance: number | null
  }

  export type TrendSignalMinAggregateOutputType = {
    id: number | null
    keywordId: number | null
    slope: number | null
    variance: number | null
    collectedAt: Date | null
  }

  export type TrendSignalMaxAggregateOutputType = {
    id: number | null
    keywordId: number | null
    slope: number | null
    variance: number | null
    collectedAt: Date | null
  }

  export type TrendSignalCountAggregateOutputType = {
    id: number
    keywordId: number
    interestData: number
    slope: number
    variance: number
    relatedQueries: number
    collectedAt: number
    _all: number
  }


  export type TrendSignalAvgAggregateInputType = {
    id?: true
    keywordId?: true
    slope?: true
    variance?: true
  }

  export type TrendSignalSumAggregateInputType = {
    id?: true
    keywordId?: true
    slope?: true
    variance?: true
  }

  export type TrendSignalMinAggregateInputType = {
    id?: true
    keywordId?: true
    slope?: true
    variance?: true
    collectedAt?: true
  }

  export type TrendSignalMaxAggregateInputType = {
    id?: true
    keywordId?: true
    slope?: true
    variance?: true
    collectedAt?: true
  }

  export type TrendSignalCountAggregateInputType = {
    id?: true
    keywordId?: true
    interestData?: true
    slope?: true
    variance?: true
    relatedQueries?: true
    collectedAt?: true
    _all?: true
  }

  export type TrendSignalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TrendSignal to aggregate.
     */
    where?: TrendSignalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrendSignals to fetch.
     */
    orderBy?: TrendSignalOrderByWithRelationInput | TrendSignalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TrendSignalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrendSignals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrendSignals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TrendSignals
    **/
    _count?: true | TrendSignalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TrendSignalAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TrendSignalSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TrendSignalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TrendSignalMaxAggregateInputType
  }

  export type GetTrendSignalAggregateType<T extends TrendSignalAggregateArgs> = {
        [P in keyof T & keyof AggregateTrendSignal]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTrendSignal[P]>
      : GetScalarType<T[P], AggregateTrendSignal[P]>
  }




  export type TrendSignalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TrendSignalWhereInput
    orderBy?: TrendSignalOrderByWithAggregationInput | TrendSignalOrderByWithAggregationInput[]
    by: TrendSignalScalarFieldEnum[] | TrendSignalScalarFieldEnum
    having?: TrendSignalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TrendSignalCountAggregateInputType | true
    _avg?: TrendSignalAvgAggregateInputType
    _sum?: TrendSignalSumAggregateInputType
    _min?: TrendSignalMinAggregateInputType
    _max?: TrendSignalMaxAggregateInputType
  }

  export type TrendSignalGroupByOutputType = {
    id: number
    keywordId: number
    interestData: JsonValue | null
    slope: number | null
    variance: number | null
    relatedQueries: JsonValue | null
    collectedAt: Date
    _count: TrendSignalCountAggregateOutputType | null
    _avg: TrendSignalAvgAggregateOutputType | null
    _sum: TrendSignalSumAggregateOutputType | null
    _min: TrendSignalMinAggregateOutputType | null
    _max: TrendSignalMaxAggregateOutputType | null
  }

  type GetTrendSignalGroupByPayload<T extends TrendSignalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TrendSignalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TrendSignalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TrendSignalGroupByOutputType[P]>
            : GetScalarType<T[P], TrendSignalGroupByOutputType[P]>
        }
      >
    >


  export type TrendSignalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    keywordId?: boolean
    interestData?: boolean
    slope?: boolean
    variance?: boolean
    relatedQueries?: boolean
    collectedAt?: boolean
    keyword?: boolean | KeywordDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trendSignal"]>

  export type TrendSignalSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    keywordId?: boolean
    interestData?: boolean
    slope?: boolean
    variance?: boolean
    relatedQueries?: boolean
    collectedAt?: boolean
    keyword?: boolean | KeywordDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trendSignal"]>

  export type TrendSignalSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    keywordId?: boolean
    interestData?: boolean
    slope?: boolean
    variance?: boolean
    relatedQueries?: boolean
    collectedAt?: boolean
    keyword?: boolean | KeywordDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trendSignal"]>

  export type TrendSignalSelectScalar = {
    id?: boolean
    keywordId?: boolean
    interestData?: boolean
    slope?: boolean
    variance?: boolean
    relatedQueries?: boolean
    collectedAt?: boolean
  }

  export type TrendSignalOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "keywordId" | "interestData" | "slope" | "variance" | "relatedQueries" | "collectedAt", ExtArgs["result"]["trendSignal"]>
  export type TrendSignalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    keyword?: boolean | KeywordDefaultArgs<ExtArgs>
  }
  export type TrendSignalIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    keyword?: boolean | KeywordDefaultArgs<ExtArgs>
  }
  export type TrendSignalIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    keyword?: boolean | KeywordDefaultArgs<ExtArgs>
  }

  export type $TrendSignalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TrendSignal"
    objects: {
      keyword: Prisma.$KeywordPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      keywordId: number
      interestData: Prisma.JsonValue | null
      slope: number | null
      variance: number | null
      relatedQueries: Prisma.JsonValue | null
      collectedAt: Date
    }, ExtArgs["result"]["trendSignal"]>
    composites: {}
  }

  type TrendSignalGetPayload<S extends boolean | null | undefined | TrendSignalDefaultArgs> = $Result.GetResult<Prisma.$TrendSignalPayload, S>

  type TrendSignalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TrendSignalFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TrendSignalCountAggregateInputType | true
    }

  export interface TrendSignalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TrendSignal'], meta: { name: 'TrendSignal' } }
    /**
     * Find zero or one TrendSignal that matches the filter.
     * @param {TrendSignalFindUniqueArgs} args - Arguments to find a TrendSignal
     * @example
     * // Get one TrendSignal
     * const trendSignal = await prisma.trendSignal.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TrendSignalFindUniqueArgs>(args: SelectSubset<T, TrendSignalFindUniqueArgs<ExtArgs>>): Prisma__TrendSignalClient<$Result.GetResult<Prisma.$TrendSignalPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TrendSignal that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TrendSignalFindUniqueOrThrowArgs} args - Arguments to find a TrendSignal
     * @example
     * // Get one TrendSignal
     * const trendSignal = await prisma.trendSignal.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TrendSignalFindUniqueOrThrowArgs>(args: SelectSubset<T, TrendSignalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TrendSignalClient<$Result.GetResult<Prisma.$TrendSignalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TrendSignal that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrendSignalFindFirstArgs} args - Arguments to find a TrendSignal
     * @example
     * // Get one TrendSignal
     * const trendSignal = await prisma.trendSignal.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TrendSignalFindFirstArgs>(args?: SelectSubset<T, TrendSignalFindFirstArgs<ExtArgs>>): Prisma__TrendSignalClient<$Result.GetResult<Prisma.$TrendSignalPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TrendSignal that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrendSignalFindFirstOrThrowArgs} args - Arguments to find a TrendSignal
     * @example
     * // Get one TrendSignal
     * const trendSignal = await prisma.trendSignal.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TrendSignalFindFirstOrThrowArgs>(args?: SelectSubset<T, TrendSignalFindFirstOrThrowArgs<ExtArgs>>): Prisma__TrendSignalClient<$Result.GetResult<Prisma.$TrendSignalPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TrendSignals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrendSignalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TrendSignals
     * const trendSignals = await prisma.trendSignal.findMany()
     * 
     * // Get first 10 TrendSignals
     * const trendSignals = await prisma.trendSignal.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const trendSignalWithIdOnly = await prisma.trendSignal.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TrendSignalFindManyArgs>(args?: SelectSubset<T, TrendSignalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrendSignalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TrendSignal.
     * @param {TrendSignalCreateArgs} args - Arguments to create a TrendSignal.
     * @example
     * // Create one TrendSignal
     * const TrendSignal = await prisma.trendSignal.create({
     *   data: {
     *     // ... data to create a TrendSignal
     *   }
     * })
     * 
     */
    create<T extends TrendSignalCreateArgs>(args: SelectSubset<T, TrendSignalCreateArgs<ExtArgs>>): Prisma__TrendSignalClient<$Result.GetResult<Prisma.$TrendSignalPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TrendSignals.
     * @param {TrendSignalCreateManyArgs} args - Arguments to create many TrendSignals.
     * @example
     * // Create many TrendSignals
     * const trendSignal = await prisma.trendSignal.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TrendSignalCreateManyArgs>(args?: SelectSubset<T, TrendSignalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TrendSignals and returns the data saved in the database.
     * @param {TrendSignalCreateManyAndReturnArgs} args - Arguments to create many TrendSignals.
     * @example
     * // Create many TrendSignals
     * const trendSignal = await prisma.trendSignal.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TrendSignals and only return the `id`
     * const trendSignalWithIdOnly = await prisma.trendSignal.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TrendSignalCreateManyAndReturnArgs>(args?: SelectSubset<T, TrendSignalCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrendSignalPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TrendSignal.
     * @param {TrendSignalDeleteArgs} args - Arguments to delete one TrendSignal.
     * @example
     * // Delete one TrendSignal
     * const TrendSignal = await prisma.trendSignal.delete({
     *   where: {
     *     // ... filter to delete one TrendSignal
     *   }
     * })
     * 
     */
    delete<T extends TrendSignalDeleteArgs>(args: SelectSubset<T, TrendSignalDeleteArgs<ExtArgs>>): Prisma__TrendSignalClient<$Result.GetResult<Prisma.$TrendSignalPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TrendSignal.
     * @param {TrendSignalUpdateArgs} args - Arguments to update one TrendSignal.
     * @example
     * // Update one TrendSignal
     * const trendSignal = await prisma.trendSignal.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TrendSignalUpdateArgs>(args: SelectSubset<T, TrendSignalUpdateArgs<ExtArgs>>): Prisma__TrendSignalClient<$Result.GetResult<Prisma.$TrendSignalPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TrendSignals.
     * @param {TrendSignalDeleteManyArgs} args - Arguments to filter TrendSignals to delete.
     * @example
     * // Delete a few TrendSignals
     * const { count } = await prisma.trendSignal.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TrendSignalDeleteManyArgs>(args?: SelectSubset<T, TrendSignalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TrendSignals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrendSignalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TrendSignals
     * const trendSignal = await prisma.trendSignal.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TrendSignalUpdateManyArgs>(args: SelectSubset<T, TrendSignalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TrendSignals and returns the data updated in the database.
     * @param {TrendSignalUpdateManyAndReturnArgs} args - Arguments to update many TrendSignals.
     * @example
     * // Update many TrendSignals
     * const trendSignal = await prisma.trendSignal.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TrendSignals and only return the `id`
     * const trendSignalWithIdOnly = await prisma.trendSignal.updateManyAndReturn({
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
    updateManyAndReturn<T extends TrendSignalUpdateManyAndReturnArgs>(args: SelectSubset<T, TrendSignalUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrendSignalPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TrendSignal.
     * @param {TrendSignalUpsertArgs} args - Arguments to update or create a TrendSignal.
     * @example
     * // Update or create a TrendSignal
     * const trendSignal = await prisma.trendSignal.upsert({
     *   create: {
     *     // ... data to create a TrendSignal
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TrendSignal we want to update
     *   }
     * })
     */
    upsert<T extends TrendSignalUpsertArgs>(args: SelectSubset<T, TrendSignalUpsertArgs<ExtArgs>>): Prisma__TrendSignalClient<$Result.GetResult<Prisma.$TrendSignalPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TrendSignals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrendSignalCountArgs} args - Arguments to filter TrendSignals to count.
     * @example
     * // Count the number of TrendSignals
     * const count = await prisma.trendSignal.count({
     *   where: {
     *     // ... the filter for the TrendSignals we want to count
     *   }
     * })
    **/
    count<T extends TrendSignalCountArgs>(
      args?: Subset<T, TrendSignalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TrendSignalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TrendSignal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrendSignalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TrendSignalAggregateArgs>(args: Subset<T, TrendSignalAggregateArgs>): Prisma.PrismaPromise<GetTrendSignalAggregateType<T>>

    /**
     * Group by TrendSignal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrendSignalGroupByArgs} args - Group by arguments.
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
      T extends TrendSignalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TrendSignalGroupByArgs['orderBy'] }
        : { orderBy?: TrendSignalGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TrendSignalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTrendSignalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TrendSignal model
   */
  readonly fields: TrendSignalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TrendSignal.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TrendSignalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    keyword<T extends KeywordDefaultArgs<ExtArgs> = {}>(args?: Subset<T, KeywordDefaultArgs<ExtArgs>>): Prisma__KeywordClient<$Result.GetResult<Prisma.$KeywordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the TrendSignal model
   */
  interface TrendSignalFieldRefs {
    readonly id: FieldRef<"TrendSignal", 'Int'>
    readonly keywordId: FieldRef<"TrendSignal", 'Int'>
    readonly interestData: FieldRef<"TrendSignal", 'Json'>
    readonly slope: FieldRef<"TrendSignal", 'Float'>
    readonly variance: FieldRef<"TrendSignal", 'Float'>
    readonly relatedQueries: FieldRef<"TrendSignal", 'Json'>
    readonly collectedAt: FieldRef<"TrendSignal", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TrendSignal findUnique
   */
  export type TrendSignalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrendSignal
     */
    select?: TrendSignalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrendSignal
     */
    omit?: TrendSignalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrendSignalInclude<ExtArgs> | null
    /**
     * Filter, which TrendSignal to fetch.
     */
    where: TrendSignalWhereUniqueInput
  }

  /**
   * TrendSignal findUniqueOrThrow
   */
  export type TrendSignalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrendSignal
     */
    select?: TrendSignalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrendSignal
     */
    omit?: TrendSignalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrendSignalInclude<ExtArgs> | null
    /**
     * Filter, which TrendSignal to fetch.
     */
    where: TrendSignalWhereUniqueInput
  }

  /**
   * TrendSignal findFirst
   */
  export type TrendSignalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrendSignal
     */
    select?: TrendSignalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrendSignal
     */
    omit?: TrendSignalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrendSignalInclude<ExtArgs> | null
    /**
     * Filter, which TrendSignal to fetch.
     */
    where?: TrendSignalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrendSignals to fetch.
     */
    orderBy?: TrendSignalOrderByWithRelationInput | TrendSignalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TrendSignals.
     */
    cursor?: TrendSignalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrendSignals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrendSignals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TrendSignals.
     */
    distinct?: TrendSignalScalarFieldEnum | TrendSignalScalarFieldEnum[]
  }

  /**
   * TrendSignal findFirstOrThrow
   */
  export type TrendSignalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrendSignal
     */
    select?: TrendSignalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrendSignal
     */
    omit?: TrendSignalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrendSignalInclude<ExtArgs> | null
    /**
     * Filter, which TrendSignal to fetch.
     */
    where?: TrendSignalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrendSignals to fetch.
     */
    orderBy?: TrendSignalOrderByWithRelationInput | TrendSignalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TrendSignals.
     */
    cursor?: TrendSignalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrendSignals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrendSignals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TrendSignals.
     */
    distinct?: TrendSignalScalarFieldEnum | TrendSignalScalarFieldEnum[]
  }

  /**
   * TrendSignal findMany
   */
  export type TrendSignalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrendSignal
     */
    select?: TrendSignalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrendSignal
     */
    omit?: TrendSignalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrendSignalInclude<ExtArgs> | null
    /**
     * Filter, which TrendSignals to fetch.
     */
    where?: TrendSignalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrendSignals to fetch.
     */
    orderBy?: TrendSignalOrderByWithRelationInput | TrendSignalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TrendSignals.
     */
    cursor?: TrendSignalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrendSignals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrendSignals.
     */
    skip?: number
    distinct?: TrendSignalScalarFieldEnum | TrendSignalScalarFieldEnum[]
  }

  /**
   * TrendSignal create
   */
  export type TrendSignalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrendSignal
     */
    select?: TrendSignalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrendSignal
     */
    omit?: TrendSignalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrendSignalInclude<ExtArgs> | null
    /**
     * The data needed to create a TrendSignal.
     */
    data: XOR<TrendSignalCreateInput, TrendSignalUncheckedCreateInput>
  }

  /**
   * TrendSignal createMany
   */
  export type TrendSignalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TrendSignals.
     */
    data: TrendSignalCreateManyInput | TrendSignalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TrendSignal createManyAndReturn
   */
  export type TrendSignalCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrendSignal
     */
    select?: TrendSignalSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TrendSignal
     */
    omit?: TrendSignalOmit<ExtArgs> | null
    /**
     * The data used to create many TrendSignals.
     */
    data: TrendSignalCreateManyInput | TrendSignalCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrendSignalIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TrendSignal update
   */
  export type TrendSignalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrendSignal
     */
    select?: TrendSignalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrendSignal
     */
    omit?: TrendSignalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrendSignalInclude<ExtArgs> | null
    /**
     * The data needed to update a TrendSignal.
     */
    data: XOR<TrendSignalUpdateInput, TrendSignalUncheckedUpdateInput>
    /**
     * Choose, which TrendSignal to update.
     */
    where: TrendSignalWhereUniqueInput
  }

  /**
   * TrendSignal updateMany
   */
  export type TrendSignalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TrendSignals.
     */
    data: XOR<TrendSignalUpdateManyMutationInput, TrendSignalUncheckedUpdateManyInput>
    /**
     * Filter which TrendSignals to update
     */
    where?: TrendSignalWhereInput
    /**
     * Limit how many TrendSignals to update.
     */
    limit?: number
  }

  /**
   * TrendSignal updateManyAndReturn
   */
  export type TrendSignalUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrendSignal
     */
    select?: TrendSignalSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TrendSignal
     */
    omit?: TrendSignalOmit<ExtArgs> | null
    /**
     * The data used to update TrendSignals.
     */
    data: XOR<TrendSignalUpdateManyMutationInput, TrendSignalUncheckedUpdateManyInput>
    /**
     * Filter which TrendSignals to update
     */
    where?: TrendSignalWhereInput
    /**
     * Limit how many TrendSignals to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrendSignalIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TrendSignal upsert
   */
  export type TrendSignalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrendSignal
     */
    select?: TrendSignalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrendSignal
     */
    omit?: TrendSignalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrendSignalInclude<ExtArgs> | null
    /**
     * The filter to search for the TrendSignal to update in case it exists.
     */
    where: TrendSignalWhereUniqueInput
    /**
     * In case the TrendSignal found by the `where` argument doesn't exist, create a new TrendSignal with this data.
     */
    create: XOR<TrendSignalCreateInput, TrendSignalUncheckedCreateInput>
    /**
     * In case the TrendSignal was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TrendSignalUpdateInput, TrendSignalUncheckedUpdateInput>
  }

  /**
   * TrendSignal delete
   */
  export type TrendSignalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrendSignal
     */
    select?: TrendSignalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrendSignal
     */
    omit?: TrendSignalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrendSignalInclude<ExtArgs> | null
    /**
     * Filter which TrendSignal to delete.
     */
    where: TrendSignalWhereUniqueInput
  }

  /**
   * TrendSignal deleteMany
   */
  export type TrendSignalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TrendSignals to delete
     */
    where?: TrendSignalWhereInput
    /**
     * Limit how many TrendSignals to delete.
     */
    limit?: number
  }

  /**
   * TrendSignal without action
   */
  export type TrendSignalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrendSignal
     */
    select?: TrendSignalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrendSignal
     */
    omit?: TrendSignalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrendSignalInclude<ExtArgs> | null
  }


  /**
   * Model FeasibilityScore
   */

  export type AggregateFeasibilityScore = {
    _count: FeasibilityScoreCountAggregateOutputType | null
    _avg: FeasibilityScoreAvgAggregateOutputType | null
    _sum: FeasibilityScoreSumAggregateOutputType | null
    _min: FeasibilityScoreMinAggregateOutputType | null
    _max: FeasibilityScoreMaxAggregateOutputType | null
  }

  export type FeasibilityScoreAvgAggregateOutputType = {
    id: number | null
    keywordId: number | null
    demandScore: number | null
    competitionScore: number | null
    constraintPressure: number | null
    feasibilityScore: number | null
    timeRangeMin: number | null
    timeRangeMax: number | null
  }

  export type FeasibilityScoreSumAggregateOutputType = {
    id: number | null
    keywordId: number | null
    demandScore: number | null
    competitionScore: number | null
    constraintPressure: number | null
    feasibilityScore: number | null
    timeRangeMin: number | null
    timeRangeMax: number | null
  }

  export type FeasibilityScoreMinAggregateOutputType = {
    id: number | null
    keywordId: number | null
    demandScore: number | null
    competitionScore: number | null
    constraintPressure: number | null
    feasibilityScore: number | null
    difficulty: $Enums.Difficulty | null
    timeRangeMin: number | null
    timeRangeMax: number | null
    regime: $Enums.Regime | null
    scoredAt: Date | null
  }

  export type FeasibilityScoreMaxAggregateOutputType = {
    id: number | null
    keywordId: number | null
    demandScore: number | null
    competitionScore: number | null
    constraintPressure: number | null
    feasibilityScore: number | null
    difficulty: $Enums.Difficulty | null
    timeRangeMin: number | null
    timeRangeMax: number | null
    regime: $Enums.Regime | null
    scoredAt: Date | null
  }

  export type FeasibilityScoreCountAggregateOutputType = {
    id: number
    keywordId: number
    demandScore: number
    competitionScore: number
    constraintPressure: number
    feasibilityScore: number
    difficulty: number
    timeRangeMin: number
    timeRangeMax: number
    regime: number
    successBand: number
    constraints: number
    conditions: number
    signalVersions: number
    scoredAt: number
    _all: number
  }


  export type FeasibilityScoreAvgAggregateInputType = {
    id?: true
    keywordId?: true
    demandScore?: true
    competitionScore?: true
    constraintPressure?: true
    feasibilityScore?: true
    timeRangeMin?: true
    timeRangeMax?: true
  }

  export type FeasibilityScoreSumAggregateInputType = {
    id?: true
    keywordId?: true
    demandScore?: true
    competitionScore?: true
    constraintPressure?: true
    feasibilityScore?: true
    timeRangeMin?: true
    timeRangeMax?: true
  }

  export type FeasibilityScoreMinAggregateInputType = {
    id?: true
    keywordId?: true
    demandScore?: true
    competitionScore?: true
    constraintPressure?: true
    feasibilityScore?: true
    difficulty?: true
    timeRangeMin?: true
    timeRangeMax?: true
    regime?: true
    scoredAt?: true
  }

  export type FeasibilityScoreMaxAggregateInputType = {
    id?: true
    keywordId?: true
    demandScore?: true
    competitionScore?: true
    constraintPressure?: true
    feasibilityScore?: true
    difficulty?: true
    timeRangeMin?: true
    timeRangeMax?: true
    regime?: true
    scoredAt?: true
  }

  export type FeasibilityScoreCountAggregateInputType = {
    id?: true
    keywordId?: true
    demandScore?: true
    competitionScore?: true
    constraintPressure?: true
    feasibilityScore?: true
    difficulty?: true
    timeRangeMin?: true
    timeRangeMax?: true
    regime?: true
    successBand?: true
    constraints?: true
    conditions?: true
    signalVersions?: true
    scoredAt?: true
    _all?: true
  }

  export type FeasibilityScoreAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FeasibilityScore to aggregate.
     */
    where?: FeasibilityScoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FeasibilityScores to fetch.
     */
    orderBy?: FeasibilityScoreOrderByWithRelationInput | FeasibilityScoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FeasibilityScoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FeasibilityScores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FeasibilityScores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FeasibilityScores
    **/
    _count?: true | FeasibilityScoreCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FeasibilityScoreAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FeasibilityScoreSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FeasibilityScoreMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FeasibilityScoreMaxAggregateInputType
  }

  export type GetFeasibilityScoreAggregateType<T extends FeasibilityScoreAggregateArgs> = {
        [P in keyof T & keyof AggregateFeasibilityScore]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFeasibilityScore[P]>
      : GetScalarType<T[P], AggregateFeasibilityScore[P]>
  }




  export type FeasibilityScoreGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FeasibilityScoreWhereInput
    orderBy?: FeasibilityScoreOrderByWithAggregationInput | FeasibilityScoreOrderByWithAggregationInput[]
    by: FeasibilityScoreScalarFieldEnum[] | FeasibilityScoreScalarFieldEnum
    having?: FeasibilityScoreScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FeasibilityScoreCountAggregateInputType | true
    _avg?: FeasibilityScoreAvgAggregateInputType
    _sum?: FeasibilityScoreSumAggregateInputType
    _min?: FeasibilityScoreMinAggregateInputType
    _max?: FeasibilityScoreMaxAggregateInputType
  }

  export type FeasibilityScoreGroupByOutputType = {
    id: number
    keywordId: number
    demandScore: number
    competitionScore: number
    constraintPressure: number
    feasibilityScore: number
    difficulty: $Enums.Difficulty
    timeRangeMin: number | null
    timeRangeMax: number | null
    regime: $Enums.Regime | null
    successBand: JsonValue | null
    constraints: JsonValue | null
    conditions: JsonValue | null
    signalVersions: JsonValue | null
    scoredAt: Date
    _count: FeasibilityScoreCountAggregateOutputType | null
    _avg: FeasibilityScoreAvgAggregateOutputType | null
    _sum: FeasibilityScoreSumAggregateOutputType | null
    _min: FeasibilityScoreMinAggregateOutputType | null
    _max: FeasibilityScoreMaxAggregateOutputType | null
  }

  type GetFeasibilityScoreGroupByPayload<T extends FeasibilityScoreGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FeasibilityScoreGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FeasibilityScoreGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FeasibilityScoreGroupByOutputType[P]>
            : GetScalarType<T[P], FeasibilityScoreGroupByOutputType[P]>
        }
      >
    >


  export type FeasibilityScoreSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    keywordId?: boolean
    demandScore?: boolean
    competitionScore?: boolean
    constraintPressure?: boolean
    feasibilityScore?: boolean
    difficulty?: boolean
    timeRangeMin?: boolean
    timeRangeMax?: boolean
    regime?: boolean
    successBand?: boolean
    constraints?: boolean
    conditions?: boolean
    signalVersions?: boolean
    scoredAt?: boolean
    keyword?: boolean | KeywordDefaultArgs<ExtArgs>
    outcomes?: boolean | FeasibilityScore$outcomesArgs<ExtArgs>
    _count?: boolean | FeasibilityScoreCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["feasibilityScore"]>

  export type FeasibilityScoreSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    keywordId?: boolean
    demandScore?: boolean
    competitionScore?: boolean
    constraintPressure?: boolean
    feasibilityScore?: boolean
    difficulty?: boolean
    timeRangeMin?: boolean
    timeRangeMax?: boolean
    regime?: boolean
    successBand?: boolean
    constraints?: boolean
    conditions?: boolean
    signalVersions?: boolean
    scoredAt?: boolean
    keyword?: boolean | KeywordDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["feasibilityScore"]>

  export type FeasibilityScoreSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    keywordId?: boolean
    demandScore?: boolean
    competitionScore?: boolean
    constraintPressure?: boolean
    feasibilityScore?: boolean
    difficulty?: boolean
    timeRangeMin?: boolean
    timeRangeMax?: boolean
    regime?: boolean
    successBand?: boolean
    constraints?: boolean
    conditions?: boolean
    signalVersions?: boolean
    scoredAt?: boolean
    keyword?: boolean | KeywordDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["feasibilityScore"]>

  export type FeasibilityScoreSelectScalar = {
    id?: boolean
    keywordId?: boolean
    demandScore?: boolean
    competitionScore?: boolean
    constraintPressure?: boolean
    feasibilityScore?: boolean
    difficulty?: boolean
    timeRangeMin?: boolean
    timeRangeMax?: boolean
    regime?: boolean
    successBand?: boolean
    constraints?: boolean
    conditions?: boolean
    signalVersions?: boolean
    scoredAt?: boolean
  }

  export type FeasibilityScoreOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "keywordId" | "demandScore" | "competitionScore" | "constraintPressure" | "feasibilityScore" | "difficulty" | "timeRangeMin" | "timeRangeMax" | "regime" | "successBand" | "constraints" | "conditions" | "signalVersions" | "scoredAt", ExtArgs["result"]["feasibilityScore"]>
  export type FeasibilityScoreInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    keyword?: boolean | KeywordDefaultArgs<ExtArgs>
    outcomes?: boolean | FeasibilityScore$outcomesArgs<ExtArgs>
    _count?: boolean | FeasibilityScoreCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FeasibilityScoreIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    keyword?: boolean | KeywordDefaultArgs<ExtArgs>
  }
  export type FeasibilityScoreIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    keyword?: boolean | KeywordDefaultArgs<ExtArgs>
  }

  export type $FeasibilityScorePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FeasibilityScore"
    objects: {
      keyword: Prisma.$KeywordPayload<ExtArgs>
      outcomes: Prisma.$OutcomePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      keywordId: number
      demandScore: number
      competitionScore: number
      constraintPressure: number
      feasibilityScore: number
      difficulty: $Enums.Difficulty
      timeRangeMin: number | null
      timeRangeMax: number | null
      regime: $Enums.Regime | null
      successBand: Prisma.JsonValue | null
      constraints: Prisma.JsonValue | null
      conditions: Prisma.JsonValue | null
      signalVersions: Prisma.JsonValue | null
      scoredAt: Date
    }, ExtArgs["result"]["feasibilityScore"]>
    composites: {}
  }

  type FeasibilityScoreGetPayload<S extends boolean | null | undefined | FeasibilityScoreDefaultArgs> = $Result.GetResult<Prisma.$FeasibilityScorePayload, S>

  type FeasibilityScoreCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FeasibilityScoreFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FeasibilityScoreCountAggregateInputType | true
    }

  export interface FeasibilityScoreDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FeasibilityScore'], meta: { name: 'FeasibilityScore' } }
    /**
     * Find zero or one FeasibilityScore that matches the filter.
     * @param {FeasibilityScoreFindUniqueArgs} args - Arguments to find a FeasibilityScore
     * @example
     * // Get one FeasibilityScore
     * const feasibilityScore = await prisma.feasibilityScore.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FeasibilityScoreFindUniqueArgs>(args: SelectSubset<T, FeasibilityScoreFindUniqueArgs<ExtArgs>>): Prisma__FeasibilityScoreClient<$Result.GetResult<Prisma.$FeasibilityScorePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FeasibilityScore that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FeasibilityScoreFindUniqueOrThrowArgs} args - Arguments to find a FeasibilityScore
     * @example
     * // Get one FeasibilityScore
     * const feasibilityScore = await prisma.feasibilityScore.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FeasibilityScoreFindUniqueOrThrowArgs>(args: SelectSubset<T, FeasibilityScoreFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FeasibilityScoreClient<$Result.GetResult<Prisma.$FeasibilityScorePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FeasibilityScore that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeasibilityScoreFindFirstArgs} args - Arguments to find a FeasibilityScore
     * @example
     * // Get one FeasibilityScore
     * const feasibilityScore = await prisma.feasibilityScore.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FeasibilityScoreFindFirstArgs>(args?: SelectSubset<T, FeasibilityScoreFindFirstArgs<ExtArgs>>): Prisma__FeasibilityScoreClient<$Result.GetResult<Prisma.$FeasibilityScorePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FeasibilityScore that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeasibilityScoreFindFirstOrThrowArgs} args - Arguments to find a FeasibilityScore
     * @example
     * // Get one FeasibilityScore
     * const feasibilityScore = await prisma.feasibilityScore.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FeasibilityScoreFindFirstOrThrowArgs>(args?: SelectSubset<T, FeasibilityScoreFindFirstOrThrowArgs<ExtArgs>>): Prisma__FeasibilityScoreClient<$Result.GetResult<Prisma.$FeasibilityScorePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FeasibilityScores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeasibilityScoreFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FeasibilityScores
     * const feasibilityScores = await prisma.feasibilityScore.findMany()
     * 
     * // Get first 10 FeasibilityScores
     * const feasibilityScores = await prisma.feasibilityScore.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const feasibilityScoreWithIdOnly = await prisma.feasibilityScore.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FeasibilityScoreFindManyArgs>(args?: SelectSubset<T, FeasibilityScoreFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeasibilityScorePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FeasibilityScore.
     * @param {FeasibilityScoreCreateArgs} args - Arguments to create a FeasibilityScore.
     * @example
     * // Create one FeasibilityScore
     * const FeasibilityScore = await prisma.feasibilityScore.create({
     *   data: {
     *     // ... data to create a FeasibilityScore
     *   }
     * })
     * 
     */
    create<T extends FeasibilityScoreCreateArgs>(args: SelectSubset<T, FeasibilityScoreCreateArgs<ExtArgs>>): Prisma__FeasibilityScoreClient<$Result.GetResult<Prisma.$FeasibilityScorePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FeasibilityScores.
     * @param {FeasibilityScoreCreateManyArgs} args - Arguments to create many FeasibilityScores.
     * @example
     * // Create many FeasibilityScores
     * const feasibilityScore = await prisma.feasibilityScore.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FeasibilityScoreCreateManyArgs>(args?: SelectSubset<T, FeasibilityScoreCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FeasibilityScores and returns the data saved in the database.
     * @param {FeasibilityScoreCreateManyAndReturnArgs} args - Arguments to create many FeasibilityScores.
     * @example
     * // Create many FeasibilityScores
     * const feasibilityScore = await prisma.feasibilityScore.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FeasibilityScores and only return the `id`
     * const feasibilityScoreWithIdOnly = await prisma.feasibilityScore.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FeasibilityScoreCreateManyAndReturnArgs>(args?: SelectSubset<T, FeasibilityScoreCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeasibilityScorePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FeasibilityScore.
     * @param {FeasibilityScoreDeleteArgs} args - Arguments to delete one FeasibilityScore.
     * @example
     * // Delete one FeasibilityScore
     * const FeasibilityScore = await prisma.feasibilityScore.delete({
     *   where: {
     *     // ... filter to delete one FeasibilityScore
     *   }
     * })
     * 
     */
    delete<T extends FeasibilityScoreDeleteArgs>(args: SelectSubset<T, FeasibilityScoreDeleteArgs<ExtArgs>>): Prisma__FeasibilityScoreClient<$Result.GetResult<Prisma.$FeasibilityScorePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FeasibilityScore.
     * @param {FeasibilityScoreUpdateArgs} args - Arguments to update one FeasibilityScore.
     * @example
     * // Update one FeasibilityScore
     * const feasibilityScore = await prisma.feasibilityScore.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FeasibilityScoreUpdateArgs>(args: SelectSubset<T, FeasibilityScoreUpdateArgs<ExtArgs>>): Prisma__FeasibilityScoreClient<$Result.GetResult<Prisma.$FeasibilityScorePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FeasibilityScores.
     * @param {FeasibilityScoreDeleteManyArgs} args - Arguments to filter FeasibilityScores to delete.
     * @example
     * // Delete a few FeasibilityScores
     * const { count } = await prisma.feasibilityScore.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FeasibilityScoreDeleteManyArgs>(args?: SelectSubset<T, FeasibilityScoreDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FeasibilityScores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeasibilityScoreUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FeasibilityScores
     * const feasibilityScore = await prisma.feasibilityScore.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FeasibilityScoreUpdateManyArgs>(args: SelectSubset<T, FeasibilityScoreUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FeasibilityScores and returns the data updated in the database.
     * @param {FeasibilityScoreUpdateManyAndReturnArgs} args - Arguments to update many FeasibilityScores.
     * @example
     * // Update many FeasibilityScores
     * const feasibilityScore = await prisma.feasibilityScore.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FeasibilityScores and only return the `id`
     * const feasibilityScoreWithIdOnly = await prisma.feasibilityScore.updateManyAndReturn({
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
    updateManyAndReturn<T extends FeasibilityScoreUpdateManyAndReturnArgs>(args: SelectSubset<T, FeasibilityScoreUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeasibilityScorePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FeasibilityScore.
     * @param {FeasibilityScoreUpsertArgs} args - Arguments to update or create a FeasibilityScore.
     * @example
     * // Update or create a FeasibilityScore
     * const feasibilityScore = await prisma.feasibilityScore.upsert({
     *   create: {
     *     // ... data to create a FeasibilityScore
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FeasibilityScore we want to update
     *   }
     * })
     */
    upsert<T extends FeasibilityScoreUpsertArgs>(args: SelectSubset<T, FeasibilityScoreUpsertArgs<ExtArgs>>): Prisma__FeasibilityScoreClient<$Result.GetResult<Prisma.$FeasibilityScorePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FeasibilityScores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeasibilityScoreCountArgs} args - Arguments to filter FeasibilityScores to count.
     * @example
     * // Count the number of FeasibilityScores
     * const count = await prisma.feasibilityScore.count({
     *   where: {
     *     // ... the filter for the FeasibilityScores we want to count
     *   }
     * })
    **/
    count<T extends FeasibilityScoreCountArgs>(
      args?: Subset<T, FeasibilityScoreCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FeasibilityScoreCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FeasibilityScore.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeasibilityScoreAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FeasibilityScoreAggregateArgs>(args: Subset<T, FeasibilityScoreAggregateArgs>): Prisma.PrismaPromise<GetFeasibilityScoreAggregateType<T>>

    /**
     * Group by FeasibilityScore.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeasibilityScoreGroupByArgs} args - Group by arguments.
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
      T extends FeasibilityScoreGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FeasibilityScoreGroupByArgs['orderBy'] }
        : { orderBy?: FeasibilityScoreGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FeasibilityScoreGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFeasibilityScoreGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FeasibilityScore model
   */
  readonly fields: FeasibilityScoreFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FeasibilityScore.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FeasibilityScoreClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    keyword<T extends KeywordDefaultArgs<ExtArgs> = {}>(args?: Subset<T, KeywordDefaultArgs<ExtArgs>>): Prisma__KeywordClient<$Result.GetResult<Prisma.$KeywordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    outcomes<T extends FeasibilityScore$outcomesArgs<ExtArgs> = {}>(args?: Subset<T, FeasibilityScore$outcomesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OutcomePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the FeasibilityScore model
   */
  interface FeasibilityScoreFieldRefs {
    readonly id: FieldRef<"FeasibilityScore", 'Int'>
    readonly keywordId: FieldRef<"FeasibilityScore", 'Int'>
    readonly demandScore: FieldRef<"FeasibilityScore", 'Float'>
    readonly competitionScore: FieldRef<"FeasibilityScore", 'Float'>
    readonly constraintPressure: FieldRef<"FeasibilityScore", 'Float'>
    readonly feasibilityScore: FieldRef<"FeasibilityScore", 'Float'>
    readonly difficulty: FieldRef<"FeasibilityScore", 'Difficulty'>
    readonly timeRangeMin: FieldRef<"FeasibilityScore", 'Int'>
    readonly timeRangeMax: FieldRef<"FeasibilityScore", 'Int'>
    readonly regime: FieldRef<"FeasibilityScore", 'Regime'>
    readonly successBand: FieldRef<"FeasibilityScore", 'Json'>
    readonly constraints: FieldRef<"FeasibilityScore", 'Json'>
    readonly conditions: FieldRef<"FeasibilityScore", 'Json'>
    readonly signalVersions: FieldRef<"FeasibilityScore", 'Json'>
    readonly scoredAt: FieldRef<"FeasibilityScore", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FeasibilityScore findUnique
   */
  export type FeasibilityScoreFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeasibilityScore
     */
    select?: FeasibilityScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeasibilityScore
     */
    omit?: FeasibilityScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeasibilityScoreInclude<ExtArgs> | null
    /**
     * Filter, which FeasibilityScore to fetch.
     */
    where: FeasibilityScoreWhereUniqueInput
  }

  /**
   * FeasibilityScore findUniqueOrThrow
   */
  export type FeasibilityScoreFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeasibilityScore
     */
    select?: FeasibilityScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeasibilityScore
     */
    omit?: FeasibilityScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeasibilityScoreInclude<ExtArgs> | null
    /**
     * Filter, which FeasibilityScore to fetch.
     */
    where: FeasibilityScoreWhereUniqueInput
  }

  /**
   * FeasibilityScore findFirst
   */
  export type FeasibilityScoreFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeasibilityScore
     */
    select?: FeasibilityScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeasibilityScore
     */
    omit?: FeasibilityScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeasibilityScoreInclude<ExtArgs> | null
    /**
     * Filter, which FeasibilityScore to fetch.
     */
    where?: FeasibilityScoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FeasibilityScores to fetch.
     */
    orderBy?: FeasibilityScoreOrderByWithRelationInput | FeasibilityScoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FeasibilityScores.
     */
    cursor?: FeasibilityScoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FeasibilityScores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FeasibilityScores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FeasibilityScores.
     */
    distinct?: FeasibilityScoreScalarFieldEnum | FeasibilityScoreScalarFieldEnum[]
  }

  /**
   * FeasibilityScore findFirstOrThrow
   */
  export type FeasibilityScoreFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeasibilityScore
     */
    select?: FeasibilityScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeasibilityScore
     */
    omit?: FeasibilityScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeasibilityScoreInclude<ExtArgs> | null
    /**
     * Filter, which FeasibilityScore to fetch.
     */
    where?: FeasibilityScoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FeasibilityScores to fetch.
     */
    orderBy?: FeasibilityScoreOrderByWithRelationInput | FeasibilityScoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FeasibilityScores.
     */
    cursor?: FeasibilityScoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FeasibilityScores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FeasibilityScores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FeasibilityScores.
     */
    distinct?: FeasibilityScoreScalarFieldEnum | FeasibilityScoreScalarFieldEnum[]
  }

  /**
   * FeasibilityScore findMany
   */
  export type FeasibilityScoreFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeasibilityScore
     */
    select?: FeasibilityScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeasibilityScore
     */
    omit?: FeasibilityScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeasibilityScoreInclude<ExtArgs> | null
    /**
     * Filter, which FeasibilityScores to fetch.
     */
    where?: FeasibilityScoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FeasibilityScores to fetch.
     */
    orderBy?: FeasibilityScoreOrderByWithRelationInput | FeasibilityScoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FeasibilityScores.
     */
    cursor?: FeasibilityScoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FeasibilityScores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FeasibilityScores.
     */
    skip?: number
    distinct?: FeasibilityScoreScalarFieldEnum | FeasibilityScoreScalarFieldEnum[]
  }

  /**
   * FeasibilityScore create
   */
  export type FeasibilityScoreCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeasibilityScore
     */
    select?: FeasibilityScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeasibilityScore
     */
    omit?: FeasibilityScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeasibilityScoreInclude<ExtArgs> | null
    /**
     * The data needed to create a FeasibilityScore.
     */
    data: XOR<FeasibilityScoreCreateInput, FeasibilityScoreUncheckedCreateInput>
  }

  /**
   * FeasibilityScore createMany
   */
  export type FeasibilityScoreCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FeasibilityScores.
     */
    data: FeasibilityScoreCreateManyInput | FeasibilityScoreCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FeasibilityScore createManyAndReturn
   */
  export type FeasibilityScoreCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeasibilityScore
     */
    select?: FeasibilityScoreSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FeasibilityScore
     */
    omit?: FeasibilityScoreOmit<ExtArgs> | null
    /**
     * The data used to create many FeasibilityScores.
     */
    data: FeasibilityScoreCreateManyInput | FeasibilityScoreCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeasibilityScoreIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FeasibilityScore update
   */
  export type FeasibilityScoreUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeasibilityScore
     */
    select?: FeasibilityScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeasibilityScore
     */
    omit?: FeasibilityScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeasibilityScoreInclude<ExtArgs> | null
    /**
     * The data needed to update a FeasibilityScore.
     */
    data: XOR<FeasibilityScoreUpdateInput, FeasibilityScoreUncheckedUpdateInput>
    /**
     * Choose, which FeasibilityScore to update.
     */
    where: FeasibilityScoreWhereUniqueInput
  }

  /**
   * FeasibilityScore updateMany
   */
  export type FeasibilityScoreUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FeasibilityScores.
     */
    data: XOR<FeasibilityScoreUpdateManyMutationInput, FeasibilityScoreUncheckedUpdateManyInput>
    /**
     * Filter which FeasibilityScores to update
     */
    where?: FeasibilityScoreWhereInput
    /**
     * Limit how many FeasibilityScores to update.
     */
    limit?: number
  }

  /**
   * FeasibilityScore updateManyAndReturn
   */
  export type FeasibilityScoreUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeasibilityScore
     */
    select?: FeasibilityScoreSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FeasibilityScore
     */
    omit?: FeasibilityScoreOmit<ExtArgs> | null
    /**
     * The data used to update FeasibilityScores.
     */
    data: XOR<FeasibilityScoreUpdateManyMutationInput, FeasibilityScoreUncheckedUpdateManyInput>
    /**
     * Filter which FeasibilityScores to update
     */
    where?: FeasibilityScoreWhereInput
    /**
     * Limit how many FeasibilityScores to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeasibilityScoreIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * FeasibilityScore upsert
   */
  export type FeasibilityScoreUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeasibilityScore
     */
    select?: FeasibilityScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeasibilityScore
     */
    omit?: FeasibilityScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeasibilityScoreInclude<ExtArgs> | null
    /**
     * The filter to search for the FeasibilityScore to update in case it exists.
     */
    where: FeasibilityScoreWhereUniqueInput
    /**
     * In case the FeasibilityScore found by the `where` argument doesn't exist, create a new FeasibilityScore with this data.
     */
    create: XOR<FeasibilityScoreCreateInput, FeasibilityScoreUncheckedCreateInput>
    /**
     * In case the FeasibilityScore was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FeasibilityScoreUpdateInput, FeasibilityScoreUncheckedUpdateInput>
  }

  /**
   * FeasibilityScore delete
   */
  export type FeasibilityScoreDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeasibilityScore
     */
    select?: FeasibilityScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeasibilityScore
     */
    omit?: FeasibilityScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeasibilityScoreInclude<ExtArgs> | null
    /**
     * Filter which FeasibilityScore to delete.
     */
    where: FeasibilityScoreWhereUniqueInput
  }

  /**
   * FeasibilityScore deleteMany
   */
  export type FeasibilityScoreDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FeasibilityScores to delete
     */
    where?: FeasibilityScoreWhereInput
    /**
     * Limit how many FeasibilityScores to delete.
     */
    limit?: number
  }

  /**
   * FeasibilityScore.outcomes
   */
  export type FeasibilityScore$outcomesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outcome
     */
    select?: OutcomeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Outcome
     */
    omit?: OutcomeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutcomeInclude<ExtArgs> | null
    where?: OutcomeWhereInput
    orderBy?: OutcomeOrderByWithRelationInput | OutcomeOrderByWithRelationInput[]
    cursor?: OutcomeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OutcomeScalarFieldEnum | OutcomeScalarFieldEnum[]
  }

  /**
   * FeasibilityScore without action
   */
  export type FeasibilityScoreDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeasibilityScore
     */
    select?: FeasibilityScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeasibilityScore
     */
    omit?: FeasibilityScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeasibilityScoreInclude<ExtArgs> | null
  }


  /**
   * Model Outcome
   */

  export type AggregateOutcome = {
    _count: OutcomeCountAggregateOutputType | null
    _avg: OutcomeAvgAggregateOutputType | null
    _sum: OutcomeSumAggregateOutputType | null
    _min: OutcomeMinAggregateOutputType | null
    _max: OutcomeMaxAggregateOutputType | null
  }

  export type OutcomeAvgAggregateOutputType = {
    id: number | null
    keywordId: number | null
    scoreId: number | null
    monthsElapsed: number | null
    trafficAchieved: number | null
  }

  export type OutcomeSumAggregateOutputType = {
    id: number | null
    keywordId: number | null
    scoreId: number | null
    monthsElapsed: number | null
    trafficAchieved: number | null
  }

  export type OutcomeMinAggregateOutputType = {
    id: number | null
    keywordId: number | null
    scoreId: number | null
    actualResult: string | null
    monthsElapsed: number | null
    trafficAchieved: number | null
    notes: string | null
    reportedAt: Date | null
  }

  export type OutcomeMaxAggregateOutputType = {
    id: number | null
    keywordId: number | null
    scoreId: number | null
    actualResult: string | null
    monthsElapsed: number | null
    trafficAchieved: number | null
    notes: string | null
    reportedAt: Date | null
  }

  export type OutcomeCountAggregateOutputType = {
    id: number
    keywordId: number
    scoreId: number
    actualResult: number
    monthsElapsed: number
    trafficAchieved: number
    notes: number
    reportedAt: number
    _all: number
  }


  export type OutcomeAvgAggregateInputType = {
    id?: true
    keywordId?: true
    scoreId?: true
    monthsElapsed?: true
    trafficAchieved?: true
  }

  export type OutcomeSumAggregateInputType = {
    id?: true
    keywordId?: true
    scoreId?: true
    monthsElapsed?: true
    trafficAchieved?: true
  }

  export type OutcomeMinAggregateInputType = {
    id?: true
    keywordId?: true
    scoreId?: true
    actualResult?: true
    monthsElapsed?: true
    trafficAchieved?: true
    notes?: true
    reportedAt?: true
  }

  export type OutcomeMaxAggregateInputType = {
    id?: true
    keywordId?: true
    scoreId?: true
    actualResult?: true
    monthsElapsed?: true
    trafficAchieved?: true
    notes?: true
    reportedAt?: true
  }

  export type OutcomeCountAggregateInputType = {
    id?: true
    keywordId?: true
    scoreId?: true
    actualResult?: true
    monthsElapsed?: true
    trafficAchieved?: true
    notes?: true
    reportedAt?: true
    _all?: true
  }

  export type OutcomeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Outcome to aggregate.
     */
    where?: OutcomeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Outcomes to fetch.
     */
    orderBy?: OutcomeOrderByWithRelationInput | OutcomeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OutcomeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Outcomes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Outcomes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Outcomes
    **/
    _count?: true | OutcomeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OutcomeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OutcomeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OutcomeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OutcomeMaxAggregateInputType
  }

  export type GetOutcomeAggregateType<T extends OutcomeAggregateArgs> = {
        [P in keyof T & keyof AggregateOutcome]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOutcome[P]>
      : GetScalarType<T[P], AggregateOutcome[P]>
  }




  export type OutcomeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OutcomeWhereInput
    orderBy?: OutcomeOrderByWithAggregationInput | OutcomeOrderByWithAggregationInput[]
    by: OutcomeScalarFieldEnum[] | OutcomeScalarFieldEnum
    having?: OutcomeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OutcomeCountAggregateInputType | true
    _avg?: OutcomeAvgAggregateInputType
    _sum?: OutcomeSumAggregateInputType
    _min?: OutcomeMinAggregateInputType
    _max?: OutcomeMaxAggregateInputType
  }

  export type OutcomeGroupByOutputType = {
    id: number
    keywordId: number
    scoreId: number
    actualResult: string | null
    monthsElapsed: number | null
    trafficAchieved: number | null
    notes: string | null
    reportedAt: Date
    _count: OutcomeCountAggregateOutputType | null
    _avg: OutcomeAvgAggregateOutputType | null
    _sum: OutcomeSumAggregateOutputType | null
    _min: OutcomeMinAggregateOutputType | null
    _max: OutcomeMaxAggregateOutputType | null
  }

  type GetOutcomeGroupByPayload<T extends OutcomeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OutcomeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OutcomeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OutcomeGroupByOutputType[P]>
            : GetScalarType<T[P], OutcomeGroupByOutputType[P]>
        }
      >
    >


  export type OutcomeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    keywordId?: boolean
    scoreId?: boolean
    actualResult?: boolean
    monthsElapsed?: boolean
    trafficAchieved?: boolean
    notes?: boolean
    reportedAt?: boolean
    keyword?: boolean | KeywordDefaultArgs<ExtArgs>
    score?: boolean | FeasibilityScoreDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["outcome"]>

  export type OutcomeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    keywordId?: boolean
    scoreId?: boolean
    actualResult?: boolean
    monthsElapsed?: boolean
    trafficAchieved?: boolean
    notes?: boolean
    reportedAt?: boolean
    keyword?: boolean | KeywordDefaultArgs<ExtArgs>
    score?: boolean | FeasibilityScoreDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["outcome"]>

  export type OutcomeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    keywordId?: boolean
    scoreId?: boolean
    actualResult?: boolean
    monthsElapsed?: boolean
    trafficAchieved?: boolean
    notes?: boolean
    reportedAt?: boolean
    keyword?: boolean | KeywordDefaultArgs<ExtArgs>
    score?: boolean | FeasibilityScoreDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["outcome"]>

  export type OutcomeSelectScalar = {
    id?: boolean
    keywordId?: boolean
    scoreId?: boolean
    actualResult?: boolean
    monthsElapsed?: boolean
    trafficAchieved?: boolean
    notes?: boolean
    reportedAt?: boolean
  }

  export type OutcomeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "keywordId" | "scoreId" | "actualResult" | "monthsElapsed" | "trafficAchieved" | "notes" | "reportedAt", ExtArgs["result"]["outcome"]>
  export type OutcomeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    keyword?: boolean | KeywordDefaultArgs<ExtArgs>
    score?: boolean | FeasibilityScoreDefaultArgs<ExtArgs>
  }
  export type OutcomeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    keyword?: boolean | KeywordDefaultArgs<ExtArgs>
    score?: boolean | FeasibilityScoreDefaultArgs<ExtArgs>
  }
  export type OutcomeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    keyword?: boolean | KeywordDefaultArgs<ExtArgs>
    score?: boolean | FeasibilityScoreDefaultArgs<ExtArgs>
  }

  export type $OutcomePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Outcome"
    objects: {
      keyword: Prisma.$KeywordPayload<ExtArgs>
      score: Prisma.$FeasibilityScorePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      keywordId: number
      scoreId: number
      actualResult: string | null
      monthsElapsed: number | null
      trafficAchieved: number | null
      notes: string | null
      reportedAt: Date
    }, ExtArgs["result"]["outcome"]>
    composites: {}
  }

  type OutcomeGetPayload<S extends boolean | null | undefined | OutcomeDefaultArgs> = $Result.GetResult<Prisma.$OutcomePayload, S>

  type OutcomeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OutcomeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OutcomeCountAggregateInputType | true
    }

  export interface OutcomeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Outcome'], meta: { name: 'Outcome' } }
    /**
     * Find zero or one Outcome that matches the filter.
     * @param {OutcomeFindUniqueArgs} args - Arguments to find a Outcome
     * @example
     * // Get one Outcome
     * const outcome = await prisma.outcome.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OutcomeFindUniqueArgs>(args: SelectSubset<T, OutcomeFindUniqueArgs<ExtArgs>>): Prisma__OutcomeClient<$Result.GetResult<Prisma.$OutcomePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Outcome that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OutcomeFindUniqueOrThrowArgs} args - Arguments to find a Outcome
     * @example
     * // Get one Outcome
     * const outcome = await prisma.outcome.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OutcomeFindUniqueOrThrowArgs>(args: SelectSubset<T, OutcomeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OutcomeClient<$Result.GetResult<Prisma.$OutcomePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Outcome that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutcomeFindFirstArgs} args - Arguments to find a Outcome
     * @example
     * // Get one Outcome
     * const outcome = await prisma.outcome.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OutcomeFindFirstArgs>(args?: SelectSubset<T, OutcomeFindFirstArgs<ExtArgs>>): Prisma__OutcomeClient<$Result.GetResult<Prisma.$OutcomePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Outcome that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutcomeFindFirstOrThrowArgs} args - Arguments to find a Outcome
     * @example
     * // Get one Outcome
     * const outcome = await prisma.outcome.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OutcomeFindFirstOrThrowArgs>(args?: SelectSubset<T, OutcomeFindFirstOrThrowArgs<ExtArgs>>): Prisma__OutcomeClient<$Result.GetResult<Prisma.$OutcomePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Outcomes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutcomeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Outcomes
     * const outcomes = await prisma.outcome.findMany()
     * 
     * // Get first 10 Outcomes
     * const outcomes = await prisma.outcome.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const outcomeWithIdOnly = await prisma.outcome.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OutcomeFindManyArgs>(args?: SelectSubset<T, OutcomeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OutcomePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Outcome.
     * @param {OutcomeCreateArgs} args - Arguments to create a Outcome.
     * @example
     * // Create one Outcome
     * const Outcome = await prisma.outcome.create({
     *   data: {
     *     // ... data to create a Outcome
     *   }
     * })
     * 
     */
    create<T extends OutcomeCreateArgs>(args: SelectSubset<T, OutcomeCreateArgs<ExtArgs>>): Prisma__OutcomeClient<$Result.GetResult<Prisma.$OutcomePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Outcomes.
     * @param {OutcomeCreateManyArgs} args - Arguments to create many Outcomes.
     * @example
     * // Create many Outcomes
     * const outcome = await prisma.outcome.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OutcomeCreateManyArgs>(args?: SelectSubset<T, OutcomeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Outcomes and returns the data saved in the database.
     * @param {OutcomeCreateManyAndReturnArgs} args - Arguments to create many Outcomes.
     * @example
     * // Create many Outcomes
     * const outcome = await prisma.outcome.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Outcomes and only return the `id`
     * const outcomeWithIdOnly = await prisma.outcome.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OutcomeCreateManyAndReturnArgs>(args?: SelectSubset<T, OutcomeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OutcomePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Outcome.
     * @param {OutcomeDeleteArgs} args - Arguments to delete one Outcome.
     * @example
     * // Delete one Outcome
     * const Outcome = await prisma.outcome.delete({
     *   where: {
     *     // ... filter to delete one Outcome
     *   }
     * })
     * 
     */
    delete<T extends OutcomeDeleteArgs>(args: SelectSubset<T, OutcomeDeleteArgs<ExtArgs>>): Prisma__OutcomeClient<$Result.GetResult<Prisma.$OutcomePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Outcome.
     * @param {OutcomeUpdateArgs} args - Arguments to update one Outcome.
     * @example
     * // Update one Outcome
     * const outcome = await prisma.outcome.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OutcomeUpdateArgs>(args: SelectSubset<T, OutcomeUpdateArgs<ExtArgs>>): Prisma__OutcomeClient<$Result.GetResult<Prisma.$OutcomePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Outcomes.
     * @param {OutcomeDeleteManyArgs} args - Arguments to filter Outcomes to delete.
     * @example
     * // Delete a few Outcomes
     * const { count } = await prisma.outcome.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OutcomeDeleteManyArgs>(args?: SelectSubset<T, OutcomeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Outcomes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutcomeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Outcomes
     * const outcome = await prisma.outcome.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OutcomeUpdateManyArgs>(args: SelectSubset<T, OutcomeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Outcomes and returns the data updated in the database.
     * @param {OutcomeUpdateManyAndReturnArgs} args - Arguments to update many Outcomes.
     * @example
     * // Update many Outcomes
     * const outcome = await prisma.outcome.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Outcomes and only return the `id`
     * const outcomeWithIdOnly = await prisma.outcome.updateManyAndReturn({
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
    updateManyAndReturn<T extends OutcomeUpdateManyAndReturnArgs>(args: SelectSubset<T, OutcomeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OutcomePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Outcome.
     * @param {OutcomeUpsertArgs} args - Arguments to update or create a Outcome.
     * @example
     * // Update or create a Outcome
     * const outcome = await prisma.outcome.upsert({
     *   create: {
     *     // ... data to create a Outcome
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Outcome we want to update
     *   }
     * })
     */
    upsert<T extends OutcomeUpsertArgs>(args: SelectSubset<T, OutcomeUpsertArgs<ExtArgs>>): Prisma__OutcomeClient<$Result.GetResult<Prisma.$OutcomePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Outcomes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutcomeCountArgs} args - Arguments to filter Outcomes to count.
     * @example
     * // Count the number of Outcomes
     * const count = await prisma.outcome.count({
     *   where: {
     *     // ... the filter for the Outcomes we want to count
     *   }
     * })
    **/
    count<T extends OutcomeCountArgs>(
      args?: Subset<T, OutcomeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OutcomeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Outcome.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutcomeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OutcomeAggregateArgs>(args: Subset<T, OutcomeAggregateArgs>): Prisma.PrismaPromise<GetOutcomeAggregateType<T>>

    /**
     * Group by Outcome.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutcomeGroupByArgs} args - Group by arguments.
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
      T extends OutcomeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OutcomeGroupByArgs['orderBy'] }
        : { orderBy?: OutcomeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OutcomeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOutcomeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Outcome model
   */
  readonly fields: OutcomeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Outcome.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OutcomeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    keyword<T extends KeywordDefaultArgs<ExtArgs> = {}>(args?: Subset<T, KeywordDefaultArgs<ExtArgs>>): Prisma__KeywordClient<$Result.GetResult<Prisma.$KeywordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    score<T extends FeasibilityScoreDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FeasibilityScoreDefaultArgs<ExtArgs>>): Prisma__FeasibilityScoreClient<$Result.GetResult<Prisma.$FeasibilityScorePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Outcome model
   */
  interface OutcomeFieldRefs {
    readonly id: FieldRef<"Outcome", 'Int'>
    readonly keywordId: FieldRef<"Outcome", 'Int'>
    readonly scoreId: FieldRef<"Outcome", 'Int'>
    readonly actualResult: FieldRef<"Outcome", 'String'>
    readonly monthsElapsed: FieldRef<"Outcome", 'Int'>
    readonly trafficAchieved: FieldRef<"Outcome", 'Int'>
    readonly notes: FieldRef<"Outcome", 'String'>
    readonly reportedAt: FieldRef<"Outcome", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Outcome findUnique
   */
  export type OutcomeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outcome
     */
    select?: OutcomeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Outcome
     */
    omit?: OutcomeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutcomeInclude<ExtArgs> | null
    /**
     * Filter, which Outcome to fetch.
     */
    where: OutcomeWhereUniqueInput
  }

  /**
   * Outcome findUniqueOrThrow
   */
  export type OutcomeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outcome
     */
    select?: OutcomeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Outcome
     */
    omit?: OutcomeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutcomeInclude<ExtArgs> | null
    /**
     * Filter, which Outcome to fetch.
     */
    where: OutcomeWhereUniqueInput
  }

  /**
   * Outcome findFirst
   */
  export type OutcomeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outcome
     */
    select?: OutcomeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Outcome
     */
    omit?: OutcomeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutcomeInclude<ExtArgs> | null
    /**
     * Filter, which Outcome to fetch.
     */
    where?: OutcomeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Outcomes to fetch.
     */
    orderBy?: OutcomeOrderByWithRelationInput | OutcomeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Outcomes.
     */
    cursor?: OutcomeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Outcomes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Outcomes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Outcomes.
     */
    distinct?: OutcomeScalarFieldEnum | OutcomeScalarFieldEnum[]
  }

  /**
   * Outcome findFirstOrThrow
   */
  export type OutcomeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outcome
     */
    select?: OutcomeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Outcome
     */
    omit?: OutcomeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutcomeInclude<ExtArgs> | null
    /**
     * Filter, which Outcome to fetch.
     */
    where?: OutcomeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Outcomes to fetch.
     */
    orderBy?: OutcomeOrderByWithRelationInput | OutcomeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Outcomes.
     */
    cursor?: OutcomeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Outcomes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Outcomes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Outcomes.
     */
    distinct?: OutcomeScalarFieldEnum | OutcomeScalarFieldEnum[]
  }

  /**
   * Outcome findMany
   */
  export type OutcomeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outcome
     */
    select?: OutcomeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Outcome
     */
    omit?: OutcomeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutcomeInclude<ExtArgs> | null
    /**
     * Filter, which Outcomes to fetch.
     */
    where?: OutcomeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Outcomes to fetch.
     */
    orderBy?: OutcomeOrderByWithRelationInput | OutcomeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Outcomes.
     */
    cursor?: OutcomeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Outcomes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Outcomes.
     */
    skip?: number
    distinct?: OutcomeScalarFieldEnum | OutcomeScalarFieldEnum[]
  }

  /**
   * Outcome create
   */
  export type OutcomeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outcome
     */
    select?: OutcomeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Outcome
     */
    omit?: OutcomeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutcomeInclude<ExtArgs> | null
    /**
     * The data needed to create a Outcome.
     */
    data: XOR<OutcomeCreateInput, OutcomeUncheckedCreateInput>
  }

  /**
   * Outcome createMany
   */
  export type OutcomeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Outcomes.
     */
    data: OutcomeCreateManyInput | OutcomeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Outcome createManyAndReturn
   */
  export type OutcomeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outcome
     */
    select?: OutcomeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Outcome
     */
    omit?: OutcomeOmit<ExtArgs> | null
    /**
     * The data used to create many Outcomes.
     */
    data: OutcomeCreateManyInput | OutcomeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutcomeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Outcome update
   */
  export type OutcomeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outcome
     */
    select?: OutcomeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Outcome
     */
    omit?: OutcomeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutcomeInclude<ExtArgs> | null
    /**
     * The data needed to update a Outcome.
     */
    data: XOR<OutcomeUpdateInput, OutcomeUncheckedUpdateInput>
    /**
     * Choose, which Outcome to update.
     */
    where: OutcomeWhereUniqueInput
  }

  /**
   * Outcome updateMany
   */
  export type OutcomeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Outcomes.
     */
    data: XOR<OutcomeUpdateManyMutationInput, OutcomeUncheckedUpdateManyInput>
    /**
     * Filter which Outcomes to update
     */
    where?: OutcomeWhereInput
    /**
     * Limit how many Outcomes to update.
     */
    limit?: number
  }

  /**
   * Outcome updateManyAndReturn
   */
  export type OutcomeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outcome
     */
    select?: OutcomeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Outcome
     */
    omit?: OutcomeOmit<ExtArgs> | null
    /**
     * The data used to update Outcomes.
     */
    data: XOR<OutcomeUpdateManyMutationInput, OutcomeUncheckedUpdateManyInput>
    /**
     * Filter which Outcomes to update
     */
    where?: OutcomeWhereInput
    /**
     * Limit how many Outcomes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutcomeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Outcome upsert
   */
  export type OutcomeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outcome
     */
    select?: OutcomeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Outcome
     */
    omit?: OutcomeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutcomeInclude<ExtArgs> | null
    /**
     * The filter to search for the Outcome to update in case it exists.
     */
    where: OutcomeWhereUniqueInput
    /**
     * In case the Outcome found by the `where` argument doesn't exist, create a new Outcome with this data.
     */
    create: XOR<OutcomeCreateInput, OutcomeUncheckedCreateInput>
    /**
     * In case the Outcome was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OutcomeUpdateInput, OutcomeUncheckedUpdateInput>
  }

  /**
   * Outcome delete
   */
  export type OutcomeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outcome
     */
    select?: OutcomeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Outcome
     */
    omit?: OutcomeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutcomeInclude<ExtArgs> | null
    /**
     * Filter which Outcome to delete.
     */
    where: OutcomeWhereUniqueInput
  }

  /**
   * Outcome deleteMany
   */
  export type OutcomeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Outcomes to delete
     */
    where?: OutcomeWhereInput
    /**
     * Limit how many Outcomes to delete.
     */
    limit?: number
  }

  /**
   * Outcome without action
   */
  export type OutcomeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outcome
     */
    select?: OutcomeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Outcome
     */
    omit?: OutcomeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutcomeInclude<ExtArgs> | null
  }


  /**
   * Model SeoPage
   */

  export type AggregateSeoPage = {
    _count: SeoPageCountAggregateOutputType | null
    _avg: SeoPageAvgAggregateOutputType | null
    _sum: SeoPageSumAggregateOutputType | null
    _min: SeoPageMinAggregateOutputType | null
    _max: SeoPageMaxAggregateOutputType | null
  }

  export type SeoPageAvgAggregateOutputType = {
    id: number | null
    keywordId: number | null
  }

  export type SeoPageSumAggregateOutputType = {
    id: number | null
    keywordId: number | null
  }

  export type SeoPageMinAggregateOutputType = {
    id: number | null
    keywordId: number | null
    pageType: string | null
    slug: string | null
    title: string | null
    metaDescription: string | null
    lastGenerated: Date | null
    indexed: boolean | null
  }

  export type SeoPageMaxAggregateOutputType = {
    id: number | null
    keywordId: number | null
    pageType: string | null
    slug: string | null
    title: string | null
    metaDescription: string | null
    lastGenerated: Date | null
    indexed: boolean | null
  }

  export type SeoPageCountAggregateOutputType = {
    id: number
    keywordId: number
    pageType: number
    slug: number
    title: number
    metaDescription: number
    lastGenerated: number
    indexed: number
    _all: number
  }


  export type SeoPageAvgAggregateInputType = {
    id?: true
    keywordId?: true
  }

  export type SeoPageSumAggregateInputType = {
    id?: true
    keywordId?: true
  }

  export type SeoPageMinAggregateInputType = {
    id?: true
    keywordId?: true
    pageType?: true
    slug?: true
    title?: true
    metaDescription?: true
    lastGenerated?: true
    indexed?: true
  }

  export type SeoPageMaxAggregateInputType = {
    id?: true
    keywordId?: true
    pageType?: true
    slug?: true
    title?: true
    metaDescription?: true
    lastGenerated?: true
    indexed?: true
  }

  export type SeoPageCountAggregateInputType = {
    id?: true
    keywordId?: true
    pageType?: true
    slug?: true
    title?: true
    metaDescription?: true
    lastGenerated?: true
    indexed?: true
    _all?: true
  }

  export type SeoPageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SeoPage to aggregate.
     */
    where?: SeoPageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SeoPages to fetch.
     */
    orderBy?: SeoPageOrderByWithRelationInput | SeoPageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SeoPageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SeoPages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SeoPages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SeoPages
    **/
    _count?: true | SeoPageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SeoPageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SeoPageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SeoPageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SeoPageMaxAggregateInputType
  }

  export type GetSeoPageAggregateType<T extends SeoPageAggregateArgs> = {
        [P in keyof T & keyof AggregateSeoPage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSeoPage[P]>
      : GetScalarType<T[P], AggregateSeoPage[P]>
  }




  export type SeoPageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SeoPageWhereInput
    orderBy?: SeoPageOrderByWithAggregationInput | SeoPageOrderByWithAggregationInput[]
    by: SeoPageScalarFieldEnum[] | SeoPageScalarFieldEnum
    having?: SeoPageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SeoPageCountAggregateInputType | true
    _avg?: SeoPageAvgAggregateInputType
    _sum?: SeoPageSumAggregateInputType
    _min?: SeoPageMinAggregateInputType
    _max?: SeoPageMaxAggregateInputType
  }

  export type SeoPageGroupByOutputType = {
    id: number
    keywordId: number
    pageType: string | null
    slug: string
    title: string | null
    metaDescription: string | null
    lastGenerated: Date | null
    indexed: boolean
    _count: SeoPageCountAggregateOutputType | null
    _avg: SeoPageAvgAggregateOutputType | null
    _sum: SeoPageSumAggregateOutputType | null
    _min: SeoPageMinAggregateOutputType | null
    _max: SeoPageMaxAggregateOutputType | null
  }

  type GetSeoPageGroupByPayload<T extends SeoPageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SeoPageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SeoPageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SeoPageGroupByOutputType[P]>
            : GetScalarType<T[P], SeoPageGroupByOutputType[P]>
        }
      >
    >


  export type SeoPageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    keywordId?: boolean
    pageType?: boolean
    slug?: boolean
    title?: boolean
    metaDescription?: boolean
    lastGenerated?: boolean
    indexed?: boolean
    keyword?: boolean | KeywordDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["seoPage"]>

  export type SeoPageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    keywordId?: boolean
    pageType?: boolean
    slug?: boolean
    title?: boolean
    metaDescription?: boolean
    lastGenerated?: boolean
    indexed?: boolean
    keyword?: boolean | KeywordDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["seoPage"]>

  export type SeoPageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    keywordId?: boolean
    pageType?: boolean
    slug?: boolean
    title?: boolean
    metaDescription?: boolean
    lastGenerated?: boolean
    indexed?: boolean
    keyword?: boolean | KeywordDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["seoPage"]>

  export type SeoPageSelectScalar = {
    id?: boolean
    keywordId?: boolean
    pageType?: boolean
    slug?: boolean
    title?: boolean
    metaDescription?: boolean
    lastGenerated?: boolean
    indexed?: boolean
  }

  export type SeoPageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "keywordId" | "pageType" | "slug" | "title" | "metaDescription" | "lastGenerated" | "indexed", ExtArgs["result"]["seoPage"]>
  export type SeoPageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    keyword?: boolean | KeywordDefaultArgs<ExtArgs>
  }
  export type SeoPageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    keyword?: boolean | KeywordDefaultArgs<ExtArgs>
  }
  export type SeoPageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    keyword?: boolean | KeywordDefaultArgs<ExtArgs>
  }

  export type $SeoPagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SeoPage"
    objects: {
      keyword: Prisma.$KeywordPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      keywordId: number
      pageType: string | null
      slug: string
      title: string | null
      metaDescription: string | null
      lastGenerated: Date | null
      indexed: boolean
    }, ExtArgs["result"]["seoPage"]>
    composites: {}
  }

  type SeoPageGetPayload<S extends boolean | null | undefined | SeoPageDefaultArgs> = $Result.GetResult<Prisma.$SeoPagePayload, S>

  type SeoPageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SeoPageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SeoPageCountAggregateInputType | true
    }

  export interface SeoPageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SeoPage'], meta: { name: 'SeoPage' } }
    /**
     * Find zero or one SeoPage that matches the filter.
     * @param {SeoPageFindUniqueArgs} args - Arguments to find a SeoPage
     * @example
     * // Get one SeoPage
     * const seoPage = await prisma.seoPage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SeoPageFindUniqueArgs>(args: SelectSubset<T, SeoPageFindUniqueArgs<ExtArgs>>): Prisma__SeoPageClient<$Result.GetResult<Prisma.$SeoPagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SeoPage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SeoPageFindUniqueOrThrowArgs} args - Arguments to find a SeoPage
     * @example
     * // Get one SeoPage
     * const seoPage = await prisma.seoPage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SeoPageFindUniqueOrThrowArgs>(args: SelectSubset<T, SeoPageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SeoPageClient<$Result.GetResult<Prisma.$SeoPagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SeoPage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeoPageFindFirstArgs} args - Arguments to find a SeoPage
     * @example
     * // Get one SeoPage
     * const seoPage = await prisma.seoPage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SeoPageFindFirstArgs>(args?: SelectSubset<T, SeoPageFindFirstArgs<ExtArgs>>): Prisma__SeoPageClient<$Result.GetResult<Prisma.$SeoPagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SeoPage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeoPageFindFirstOrThrowArgs} args - Arguments to find a SeoPage
     * @example
     * // Get one SeoPage
     * const seoPage = await prisma.seoPage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SeoPageFindFirstOrThrowArgs>(args?: SelectSubset<T, SeoPageFindFirstOrThrowArgs<ExtArgs>>): Prisma__SeoPageClient<$Result.GetResult<Prisma.$SeoPagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SeoPages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeoPageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SeoPages
     * const seoPages = await prisma.seoPage.findMany()
     * 
     * // Get first 10 SeoPages
     * const seoPages = await prisma.seoPage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const seoPageWithIdOnly = await prisma.seoPage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SeoPageFindManyArgs>(args?: SelectSubset<T, SeoPageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeoPagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SeoPage.
     * @param {SeoPageCreateArgs} args - Arguments to create a SeoPage.
     * @example
     * // Create one SeoPage
     * const SeoPage = await prisma.seoPage.create({
     *   data: {
     *     // ... data to create a SeoPage
     *   }
     * })
     * 
     */
    create<T extends SeoPageCreateArgs>(args: SelectSubset<T, SeoPageCreateArgs<ExtArgs>>): Prisma__SeoPageClient<$Result.GetResult<Prisma.$SeoPagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SeoPages.
     * @param {SeoPageCreateManyArgs} args - Arguments to create many SeoPages.
     * @example
     * // Create many SeoPages
     * const seoPage = await prisma.seoPage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SeoPageCreateManyArgs>(args?: SelectSubset<T, SeoPageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SeoPages and returns the data saved in the database.
     * @param {SeoPageCreateManyAndReturnArgs} args - Arguments to create many SeoPages.
     * @example
     * // Create many SeoPages
     * const seoPage = await prisma.seoPage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SeoPages and only return the `id`
     * const seoPageWithIdOnly = await prisma.seoPage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SeoPageCreateManyAndReturnArgs>(args?: SelectSubset<T, SeoPageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeoPagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SeoPage.
     * @param {SeoPageDeleteArgs} args - Arguments to delete one SeoPage.
     * @example
     * // Delete one SeoPage
     * const SeoPage = await prisma.seoPage.delete({
     *   where: {
     *     // ... filter to delete one SeoPage
     *   }
     * })
     * 
     */
    delete<T extends SeoPageDeleteArgs>(args: SelectSubset<T, SeoPageDeleteArgs<ExtArgs>>): Prisma__SeoPageClient<$Result.GetResult<Prisma.$SeoPagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SeoPage.
     * @param {SeoPageUpdateArgs} args - Arguments to update one SeoPage.
     * @example
     * // Update one SeoPage
     * const seoPage = await prisma.seoPage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SeoPageUpdateArgs>(args: SelectSubset<T, SeoPageUpdateArgs<ExtArgs>>): Prisma__SeoPageClient<$Result.GetResult<Prisma.$SeoPagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SeoPages.
     * @param {SeoPageDeleteManyArgs} args - Arguments to filter SeoPages to delete.
     * @example
     * // Delete a few SeoPages
     * const { count } = await prisma.seoPage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SeoPageDeleteManyArgs>(args?: SelectSubset<T, SeoPageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SeoPages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeoPageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SeoPages
     * const seoPage = await prisma.seoPage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SeoPageUpdateManyArgs>(args: SelectSubset<T, SeoPageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SeoPages and returns the data updated in the database.
     * @param {SeoPageUpdateManyAndReturnArgs} args - Arguments to update many SeoPages.
     * @example
     * // Update many SeoPages
     * const seoPage = await prisma.seoPage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SeoPages and only return the `id`
     * const seoPageWithIdOnly = await prisma.seoPage.updateManyAndReturn({
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
    updateManyAndReturn<T extends SeoPageUpdateManyAndReturnArgs>(args: SelectSubset<T, SeoPageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeoPagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SeoPage.
     * @param {SeoPageUpsertArgs} args - Arguments to update or create a SeoPage.
     * @example
     * // Update or create a SeoPage
     * const seoPage = await prisma.seoPage.upsert({
     *   create: {
     *     // ... data to create a SeoPage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SeoPage we want to update
     *   }
     * })
     */
    upsert<T extends SeoPageUpsertArgs>(args: SelectSubset<T, SeoPageUpsertArgs<ExtArgs>>): Prisma__SeoPageClient<$Result.GetResult<Prisma.$SeoPagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SeoPages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeoPageCountArgs} args - Arguments to filter SeoPages to count.
     * @example
     * // Count the number of SeoPages
     * const count = await prisma.seoPage.count({
     *   where: {
     *     // ... the filter for the SeoPages we want to count
     *   }
     * })
    **/
    count<T extends SeoPageCountArgs>(
      args?: Subset<T, SeoPageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SeoPageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SeoPage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeoPageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SeoPageAggregateArgs>(args: Subset<T, SeoPageAggregateArgs>): Prisma.PrismaPromise<GetSeoPageAggregateType<T>>

    /**
     * Group by SeoPage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeoPageGroupByArgs} args - Group by arguments.
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
      T extends SeoPageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SeoPageGroupByArgs['orderBy'] }
        : { orderBy?: SeoPageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SeoPageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSeoPageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SeoPage model
   */
  readonly fields: SeoPageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SeoPage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SeoPageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    keyword<T extends KeywordDefaultArgs<ExtArgs> = {}>(args?: Subset<T, KeywordDefaultArgs<ExtArgs>>): Prisma__KeywordClient<$Result.GetResult<Prisma.$KeywordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the SeoPage model
   */
  interface SeoPageFieldRefs {
    readonly id: FieldRef<"SeoPage", 'Int'>
    readonly keywordId: FieldRef<"SeoPage", 'Int'>
    readonly pageType: FieldRef<"SeoPage", 'String'>
    readonly slug: FieldRef<"SeoPage", 'String'>
    readonly title: FieldRef<"SeoPage", 'String'>
    readonly metaDescription: FieldRef<"SeoPage", 'String'>
    readonly lastGenerated: FieldRef<"SeoPage", 'DateTime'>
    readonly indexed: FieldRef<"SeoPage", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * SeoPage findUnique
   */
  export type SeoPageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeoPage
     */
    select?: SeoPageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeoPage
     */
    omit?: SeoPageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeoPageInclude<ExtArgs> | null
    /**
     * Filter, which SeoPage to fetch.
     */
    where: SeoPageWhereUniqueInput
  }

  /**
   * SeoPage findUniqueOrThrow
   */
  export type SeoPageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeoPage
     */
    select?: SeoPageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeoPage
     */
    omit?: SeoPageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeoPageInclude<ExtArgs> | null
    /**
     * Filter, which SeoPage to fetch.
     */
    where: SeoPageWhereUniqueInput
  }

  /**
   * SeoPage findFirst
   */
  export type SeoPageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeoPage
     */
    select?: SeoPageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeoPage
     */
    omit?: SeoPageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeoPageInclude<ExtArgs> | null
    /**
     * Filter, which SeoPage to fetch.
     */
    where?: SeoPageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SeoPages to fetch.
     */
    orderBy?: SeoPageOrderByWithRelationInput | SeoPageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SeoPages.
     */
    cursor?: SeoPageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SeoPages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SeoPages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SeoPages.
     */
    distinct?: SeoPageScalarFieldEnum | SeoPageScalarFieldEnum[]
  }

  /**
   * SeoPage findFirstOrThrow
   */
  export type SeoPageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeoPage
     */
    select?: SeoPageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeoPage
     */
    omit?: SeoPageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeoPageInclude<ExtArgs> | null
    /**
     * Filter, which SeoPage to fetch.
     */
    where?: SeoPageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SeoPages to fetch.
     */
    orderBy?: SeoPageOrderByWithRelationInput | SeoPageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SeoPages.
     */
    cursor?: SeoPageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SeoPages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SeoPages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SeoPages.
     */
    distinct?: SeoPageScalarFieldEnum | SeoPageScalarFieldEnum[]
  }

  /**
   * SeoPage findMany
   */
  export type SeoPageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeoPage
     */
    select?: SeoPageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeoPage
     */
    omit?: SeoPageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeoPageInclude<ExtArgs> | null
    /**
     * Filter, which SeoPages to fetch.
     */
    where?: SeoPageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SeoPages to fetch.
     */
    orderBy?: SeoPageOrderByWithRelationInput | SeoPageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SeoPages.
     */
    cursor?: SeoPageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SeoPages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SeoPages.
     */
    skip?: number
    distinct?: SeoPageScalarFieldEnum | SeoPageScalarFieldEnum[]
  }

  /**
   * SeoPage create
   */
  export type SeoPageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeoPage
     */
    select?: SeoPageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeoPage
     */
    omit?: SeoPageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeoPageInclude<ExtArgs> | null
    /**
     * The data needed to create a SeoPage.
     */
    data: XOR<SeoPageCreateInput, SeoPageUncheckedCreateInput>
  }

  /**
   * SeoPage createMany
   */
  export type SeoPageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SeoPages.
     */
    data: SeoPageCreateManyInput | SeoPageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SeoPage createManyAndReturn
   */
  export type SeoPageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeoPage
     */
    select?: SeoPageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SeoPage
     */
    omit?: SeoPageOmit<ExtArgs> | null
    /**
     * The data used to create many SeoPages.
     */
    data: SeoPageCreateManyInput | SeoPageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeoPageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SeoPage update
   */
  export type SeoPageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeoPage
     */
    select?: SeoPageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeoPage
     */
    omit?: SeoPageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeoPageInclude<ExtArgs> | null
    /**
     * The data needed to update a SeoPage.
     */
    data: XOR<SeoPageUpdateInput, SeoPageUncheckedUpdateInput>
    /**
     * Choose, which SeoPage to update.
     */
    where: SeoPageWhereUniqueInput
  }

  /**
   * SeoPage updateMany
   */
  export type SeoPageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SeoPages.
     */
    data: XOR<SeoPageUpdateManyMutationInput, SeoPageUncheckedUpdateManyInput>
    /**
     * Filter which SeoPages to update
     */
    where?: SeoPageWhereInput
    /**
     * Limit how many SeoPages to update.
     */
    limit?: number
  }

  /**
   * SeoPage updateManyAndReturn
   */
  export type SeoPageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeoPage
     */
    select?: SeoPageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SeoPage
     */
    omit?: SeoPageOmit<ExtArgs> | null
    /**
     * The data used to update SeoPages.
     */
    data: XOR<SeoPageUpdateManyMutationInput, SeoPageUncheckedUpdateManyInput>
    /**
     * Filter which SeoPages to update
     */
    where?: SeoPageWhereInput
    /**
     * Limit how many SeoPages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeoPageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SeoPage upsert
   */
  export type SeoPageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeoPage
     */
    select?: SeoPageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeoPage
     */
    omit?: SeoPageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeoPageInclude<ExtArgs> | null
    /**
     * The filter to search for the SeoPage to update in case it exists.
     */
    where: SeoPageWhereUniqueInput
    /**
     * In case the SeoPage found by the `where` argument doesn't exist, create a new SeoPage with this data.
     */
    create: XOR<SeoPageCreateInput, SeoPageUncheckedCreateInput>
    /**
     * In case the SeoPage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SeoPageUpdateInput, SeoPageUncheckedUpdateInput>
  }

  /**
   * SeoPage delete
   */
  export type SeoPageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeoPage
     */
    select?: SeoPageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeoPage
     */
    omit?: SeoPageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeoPageInclude<ExtArgs> | null
    /**
     * Filter which SeoPage to delete.
     */
    where: SeoPageWhereUniqueInput
  }

  /**
   * SeoPage deleteMany
   */
  export type SeoPageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SeoPages to delete
     */
    where?: SeoPageWhereInput
    /**
     * Limit how many SeoPages to delete.
     */
    limit?: number
  }

  /**
   * SeoPage without action
   */
  export type SeoPageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeoPage
     */
    select?: SeoPageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeoPage
     */
    omit?: SeoPageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeoPageInclude<ExtArgs> | null
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


  export const KeywordScalarFieldEnum: {
    id: 'id',
    keyword: 'keyword',
    slug: 'slug',
    domain: 'domain',
    createdAt: 'createdAt',
    lastAnalyzed: 'lastAnalyzed'
  };

  export type KeywordScalarFieldEnum = (typeof KeywordScalarFieldEnum)[keyof typeof KeywordScalarFieldEnum]


  export const DemandSignalScalarFieldEnum: {
    id: 'id',
    keywordId: 'keywordId',
    source: 'source',
    postCount: 'postCount',
    avgComments: 'avgComments',
    sentimentScore: 'sentimentScore',
    recencyScore: 'recencyScore',
    rawData: 'rawData',
    collectedAt: 'collectedAt'
  };

  export type DemandSignalScalarFieldEnum = (typeof DemandSignalScalarFieldEnum)[keyof typeof DemandSignalScalarFieldEnum]


  export const CompetitionSignalScalarFieldEnum: {
    id: 'id',
    keywordId: 'keywordId',
    topResults: 'topResults',
    avgDomainStrength: 'avgDomainStrength',
    uniqueDomainsTop10: 'uniqueDomainsTop10',
    avgContentLength: 'avgContentLength',
    avgContentAgeDays: 'avgContentAgeDays',
    indexedPagesEstimate: 'indexedPagesEstimate',
    collectedAt: 'collectedAt'
  };

  export type CompetitionSignalScalarFieldEnum = (typeof CompetitionSignalScalarFieldEnum)[keyof typeof CompetitionSignalScalarFieldEnum]


  export const TrendSignalScalarFieldEnum: {
    id: 'id',
    keywordId: 'keywordId',
    interestData: 'interestData',
    slope: 'slope',
    variance: 'variance',
    relatedQueries: 'relatedQueries',
    collectedAt: 'collectedAt'
  };

  export type TrendSignalScalarFieldEnum = (typeof TrendSignalScalarFieldEnum)[keyof typeof TrendSignalScalarFieldEnum]


  export const FeasibilityScoreScalarFieldEnum: {
    id: 'id',
    keywordId: 'keywordId',
    demandScore: 'demandScore',
    competitionScore: 'competitionScore',
    constraintPressure: 'constraintPressure',
    feasibilityScore: 'feasibilityScore',
    difficulty: 'difficulty',
    timeRangeMin: 'timeRangeMin',
    timeRangeMax: 'timeRangeMax',
    regime: 'regime',
    successBand: 'successBand',
    constraints: 'constraints',
    conditions: 'conditions',
    signalVersions: 'signalVersions',
    scoredAt: 'scoredAt'
  };

  export type FeasibilityScoreScalarFieldEnum = (typeof FeasibilityScoreScalarFieldEnum)[keyof typeof FeasibilityScoreScalarFieldEnum]


  export const OutcomeScalarFieldEnum: {
    id: 'id',
    keywordId: 'keywordId',
    scoreId: 'scoreId',
    actualResult: 'actualResult',
    monthsElapsed: 'monthsElapsed',
    trafficAchieved: 'trafficAchieved',
    notes: 'notes',
    reportedAt: 'reportedAt'
  };

  export type OutcomeScalarFieldEnum = (typeof OutcomeScalarFieldEnum)[keyof typeof OutcomeScalarFieldEnum]


  export const SeoPageScalarFieldEnum: {
    id: 'id',
    keywordId: 'keywordId',
    pageType: 'pageType',
    slug: 'slug',
    title: 'title',
    metaDescription: 'metaDescription',
    lastGenerated: 'lastGenerated',
    indexed: 'indexed'
  };

  export type SeoPageScalarFieldEnum = (typeof SeoPageScalarFieldEnum)[keyof typeof SeoPageScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


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


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


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
   * Reference to a field of type 'Domain'
   */
  export type EnumDomainFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Domain'>
    


  /**
   * Reference to a field of type 'Domain[]'
   */
  export type ListEnumDomainFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Domain[]'>
    


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
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'Difficulty'
   */
  export type EnumDifficultyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Difficulty'>
    


  /**
   * Reference to a field of type 'Difficulty[]'
   */
  export type ListEnumDifficultyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Difficulty[]'>
    


  /**
   * Reference to a field of type 'Regime'
   */
  export type EnumRegimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Regime'>
    


  /**
   * Reference to a field of type 'Regime[]'
   */
  export type ListEnumRegimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Regime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type KeywordWhereInput = {
    AND?: KeywordWhereInput | KeywordWhereInput[]
    OR?: KeywordWhereInput[]
    NOT?: KeywordWhereInput | KeywordWhereInput[]
    id?: IntFilter<"Keyword"> | number
    keyword?: StringFilter<"Keyword"> | string
    slug?: StringFilter<"Keyword"> | string
    domain?: EnumDomainNullableFilter<"Keyword"> | $Enums.Domain | null
    createdAt?: DateTimeFilter<"Keyword"> | Date | string
    lastAnalyzed?: DateTimeNullableFilter<"Keyword"> | Date | string | null
    demandSignals?: DemandSignalListRelationFilter
    competitionSignals?: CompetitionSignalListRelationFilter
    trendSignals?: TrendSignalListRelationFilter
    feasibilityScores?: FeasibilityScoreListRelationFilter
    outcomes?: OutcomeListRelationFilter
    seoPages?: SeoPageListRelationFilter
  }

  export type KeywordOrderByWithRelationInput = {
    id?: SortOrder
    keyword?: SortOrder
    slug?: SortOrder
    domain?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    lastAnalyzed?: SortOrderInput | SortOrder
    demandSignals?: DemandSignalOrderByRelationAggregateInput
    competitionSignals?: CompetitionSignalOrderByRelationAggregateInput
    trendSignals?: TrendSignalOrderByRelationAggregateInput
    feasibilityScores?: FeasibilityScoreOrderByRelationAggregateInput
    outcomes?: OutcomeOrderByRelationAggregateInput
    seoPages?: SeoPageOrderByRelationAggregateInput
  }

  export type KeywordWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    keyword?: string
    slug?: string
    AND?: KeywordWhereInput | KeywordWhereInput[]
    OR?: KeywordWhereInput[]
    NOT?: KeywordWhereInput | KeywordWhereInput[]
    domain?: EnumDomainNullableFilter<"Keyword"> | $Enums.Domain | null
    createdAt?: DateTimeFilter<"Keyword"> | Date | string
    lastAnalyzed?: DateTimeNullableFilter<"Keyword"> | Date | string | null
    demandSignals?: DemandSignalListRelationFilter
    competitionSignals?: CompetitionSignalListRelationFilter
    trendSignals?: TrendSignalListRelationFilter
    feasibilityScores?: FeasibilityScoreListRelationFilter
    outcomes?: OutcomeListRelationFilter
    seoPages?: SeoPageListRelationFilter
  }, "id" | "keyword" | "slug">

  export type KeywordOrderByWithAggregationInput = {
    id?: SortOrder
    keyword?: SortOrder
    slug?: SortOrder
    domain?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    lastAnalyzed?: SortOrderInput | SortOrder
    _count?: KeywordCountOrderByAggregateInput
    _avg?: KeywordAvgOrderByAggregateInput
    _max?: KeywordMaxOrderByAggregateInput
    _min?: KeywordMinOrderByAggregateInput
    _sum?: KeywordSumOrderByAggregateInput
  }

  export type KeywordScalarWhereWithAggregatesInput = {
    AND?: KeywordScalarWhereWithAggregatesInput | KeywordScalarWhereWithAggregatesInput[]
    OR?: KeywordScalarWhereWithAggregatesInput[]
    NOT?: KeywordScalarWhereWithAggregatesInput | KeywordScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Keyword"> | number
    keyword?: StringWithAggregatesFilter<"Keyword"> | string
    slug?: StringWithAggregatesFilter<"Keyword"> | string
    domain?: EnumDomainNullableWithAggregatesFilter<"Keyword"> | $Enums.Domain | null
    createdAt?: DateTimeWithAggregatesFilter<"Keyword"> | Date | string
    lastAnalyzed?: DateTimeNullableWithAggregatesFilter<"Keyword"> | Date | string | null
  }

  export type DemandSignalWhereInput = {
    AND?: DemandSignalWhereInput | DemandSignalWhereInput[]
    OR?: DemandSignalWhereInput[]
    NOT?: DemandSignalWhereInput | DemandSignalWhereInput[]
    id?: IntFilter<"DemandSignal"> | number
    keywordId?: IntFilter<"DemandSignal"> | number
    source?: StringFilter<"DemandSignal"> | string
    postCount?: IntNullableFilter<"DemandSignal"> | number | null
    avgComments?: FloatNullableFilter<"DemandSignal"> | number | null
    sentimentScore?: FloatNullableFilter<"DemandSignal"> | number | null
    recencyScore?: FloatNullableFilter<"DemandSignal"> | number | null
    rawData?: JsonNullableFilter<"DemandSignal">
    collectedAt?: DateTimeFilter<"DemandSignal"> | Date | string
    keyword?: XOR<KeywordScalarRelationFilter, KeywordWhereInput>
  }

  export type DemandSignalOrderByWithRelationInput = {
    id?: SortOrder
    keywordId?: SortOrder
    source?: SortOrder
    postCount?: SortOrderInput | SortOrder
    avgComments?: SortOrderInput | SortOrder
    sentimentScore?: SortOrderInput | SortOrder
    recencyScore?: SortOrderInput | SortOrder
    rawData?: SortOrderInput | SortOrder
    collectedAt?: SortOrder
    keyword?: KeywordOrderByWithRelationInput
  }

  export type DemandSignalWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DemandSignalWhereInput | DemandSignalWhereInput[]
    OR?: DemandSignalWhereInput[]
    NOT?: DemandSignalWhereInput | DemandSignalWhereInput[]
    keywordId?: IntFilter<"DemandSignal"> | number
    source?: StringFilter<"DemandSignal"> | string
    postCount?: IntNullableFilter<"DemandSignal"> | number | null
    avgComments?: FloatNullableFilter<"DemandSignal"> | number | null
    sentimentScore?: FloatNullableFilter<"DemandSignal"> | number | null
    recencyScore?: FloatNullableFilter<"DemandSignal"> | number | null
    rawData?: JsonNullableFilter<"DemandSignal">
    collectedAt?: DateTimeFilter<"DemandSignal"> | Date | string
    keyword?: XOR<KeywordScalarRelationFilter, KeywordWhereInput>
  }, "id">

  export type DemandSignalOrderByWithAggregationInput = {
    id?: SortOrder
    keywordId?: SortOrder
    source?: SortOrder
    postCount?: SortOrderInput | SortOrder
    avgComments?: SortOrderInput | SortOrder
    sentimentScore?: SortOrderInput | SortOrder
    recencyScore?: SortOrderInput | SortOrder
    rawData?: SortOrderInput | SortOrder
    collectedAt?: SortOrder
    _count?: DemandSignalCountOrderByAggregateInput
    _avg?: DemandSignalAvgOrderByAggregateInput
    _max?: DemandSignalMaxOrderByAggregateInput
    _min?: DemandSignalMinOrderByAggregateInput
    _sum?: DemandSignalSumOrderByAggregateInput
  }

  export type DemandSignalScalarWhereWithAggregatesInput = {
    AND?: DemandSignalScalarWhereWithAggregatesInput | DemandSignalScalarWhereWithAggregatesInput[]
    OR?: DemandSignalScalarWhereWithAggregatesInput[]
    NOT?: DemandSignalScalarWhereWithAggregatesInput | DemandSignalScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"DemandSignal"> | number
    keywordId?: IntWithAggregatesFilter<"DemandSignal"> | number
    source?: StringWithAggregatesFilter<"DemandSignal"> | string
    postCount?: IntNullableWithAggregatesFilter<"DemandSignal"> | number | null
    avgComments?: FloatNullableWithAggregatesFilter<"DemandSignal"> | number | null
    sentimentScore?: FloatNullableWithAggregatesFilter<"DemandSignal"> | number | null
    recencyScore?: FloatNullableWithAggregatesFilter<"DemandSignal"> | number | null
    rawData?: JsonNullableWithAggregatesFilter<"DemandSignal">
    collectedAt?: DateTimeWithAggregatesFilter<"DemandSignal"> | Date | string
  }

  export type CompetitionSignalWhereInput = {
    AND?: CompetitionSignalWhereInput | CompetitionSignalWhereInput[]
    OR?: CompetitionSignalWhereInput[]
    NOT?: CompetitionSignalWhereInput | CompetitionSignalWhereInput[]
    id?: IntFilter<"CompetitionSignal"> | number
    keywordId?: IntFilter<"CompetitionSignal"> | number
    topResults?: JsonNullableFilter<"CompetitionSignal">
    avgDomainStrength?: FloatNullableFilter<"CompetitionSignal"> | number | null
    uniqueDomainsTop10?: IntNullableFilter<"CompetitionSignal"> | number | null
    avgContentLength?: IntNullableFilter<"CompetitionSignal"> | number | null
    avgContentAgeDays?: IntNullableFilter<"CompetitionSignal"> | number | null
    indexedPagesEstimate?: BigIntNullableFilter<"CompetitionSignal"> | bigint | number | null
    collectedAt?: DateTimeFilter<"CompetitionSignal"> | Date | string
    keyword?: XOR<KeywordScalarRelationFilter, KeywordWhereInput>
  }

  export type CompetitionSignalOrderByWithRelationInput = {
    id?: SortOrder
    keywordId?: SortOrder
    topResults?: SortOrderInput | SortOrder
    avgDomainStrength?: SortOrderInput | SortOrder
    uniqueDomainsTop10?: SortOrderInput | SortOrder
    avgContentLength?: SortOrderInput | SortOrder
    avgContentAgeDays?: SortOrderInput | SortOrder
    indexedPagesEstimate?: SortOrderInput | SortOrder
    collectedAt?: SortOrder
    keyword?: KeywordOrderByWithRelationInput
  }

  export type CompetitionSignalWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CompetitionSignalWhereInput | CompetitionSignalWhereInput[]
    OR?: CompetitionSignalWhereInput[]
    NOT?: CompetitionSignalWhereInput | CompetitionSignalWhereInput[]
    keywordId?: IntFilter<"CompetitionSignal"> | number
    topResults?: JsonNullableFilter<"CompetitionSignal">
    avgDomainStrength?: FloatNullableFilter<"CompetitionSignal"> | number | null
    uniqueDomainsTop10?: IntNullableFilter<"CompetitionSignal"> | number | null
    avgContentLength?: IntNullableFilter<"CompetitionSignal"> | number | null
    avgContentAgeDays?: IntNullableFilter<"CompetitionSignal"> | number | null
    indexedPagesEstimate?: BigIntNullableFilter<"CompetitionSignal"> | bigint | number | null
    collectedAt?: DateTimeFilter<"CompetitionSignal"> | Date | string
    keyword?: XOR<KeywordScalarRelationFilter, KeywordWhereInput>
  }, "id">

  export type CompetitionSignalOrderByWithAggregationInput = {
    id?: SortOrder
    keywordId?: SortOrder
    topResults?: SortOrderInput | SortOrder
    avgDomainStrength?: SortOrderInput | SortOrder
    uniqueDomainsTop10?: SortOrderInput | SortOrder
    avgContentLength?: SortOrderInput | SortOrder
    avgContentAgeDays?: SortOrderInput | SortOrder
    indexedPagesEstimate?: SortOrderInput | SortOrder
    collectedAt?: SortOrder
    _count?: CompetitionSignalCountOrderByAggregateInput
    _avg?: CompetitionSignalAvgOrderByAggregateInput
    _max?: CompetitionSignalMaxOrderByAggregateInput
    _min?: CompetitionSignalMinOrderByAggregateInput
    _sum?: CompetitionSignalSumOrderByAggregateInput
  }

  export type CompetitionSignalScalarWhereWithAggregatesInput = {
    AND?: CompetitionSignalScalarWhereWithAggregatesInput | CompetitionSignalScalarWhereWithAggregatesInput[]
    OR?: CompetitionSignalScalarWhereWithAggregatesInput[]
    NOT?: CompetitionSignalScalarWhereWithAggregatesInput | CompetitionSignalScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CompetitionSignal"> | number
    keywordId?: IntWithAggregatesFilter<"CompetitionSignal"> | number
    topResults?: JsonNullableWithAggregatesFilter<"CompetitionSignal">
    avgDomainStrength?: FloatNullableWithAggregatesFilter<"CompetitionSignal"> | number | null
    uniqueDomainsTop10?: IntNullableWithAggregatesFilter<"CompetitionSignal"> | number | null
    avgContentLength?: IntNullableWithAggregatesFilter<"CompetitionSignal"> | number | null
    avgContentAgeDays?: IntNullableWithAggregatesFilter<"CompetitionSignal"> | number | null
    indexedPagesEstimate?: BigIntNullableWithAggregatesFilter<"CompetitionSignal"> | bigint | number | null
    collectedAt?: DateTimeWithAggregatesFilter<"CompetitionSignal"> | Date | string
  }

  export type TrendSignalWhereInput = {
    AND?: TrendSignalWhereInput | TrendSignalWhereInput[]
    OR?: TrendSignalWhereInput[]
    NOT?: TrendSignalWhereInput | TrendSignalWhereInput[]
    id?: IntFilter<"TrendSignal"> | number
    keywordId?: IntFilter<"TrendSignal"> | number
    interestData?: JsonNullableFilter<"TrendSignal">
    slope?: FloatNullableFilter<"TrendSignal"> | number | null
    variance?: FloatNullableFilter<"TrendSignal"> | number | null
    relatedQueries?: JsonNullableFilter<"TrendSignal">
    collectedAt?: DateTimeFilter<"TrendSignal"> | Date | string
    keyword?: XOR<KeywordScalarRelationFilter, KeywordWhereInput>
  }

  export type TrendSignalOrderByWithRelationInput = {
    id?: SortOrder
    keywordId?: SortOrder
    interestData?: SortOrderInput | SortOrder
    slope?: SortOrderInput | SortOrder
    variance?: SortOrderInput | SortOrder
    relatedQueries?: SortOrderInput | SortOrder
    collectedAt?: SortOrder
    keyword?: KeywordOrderByWithRelationInput
  }

  export type TrendSignalWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TrendSignalWhereInput | TrendSignalWhereInput[]
    OR?: TrendSignalWhereInput[]
    NOT?: TrendSignalWhereInput | TrendSignalWhereInput[]
    keywordId?: IntFilter<"TrendSignal"> | number
    interestData?: JsonNullableFilter<"TrendSignal">
    slope?: FloatNullableFilter<"TrendSignal"> | number | null
    variance?: FloatNullableFilter<"TrendSignal"> | number | null
    relatedQueries?: JsonNullableFilter<"TrendSignal">
    collectedAt?: DateTimeFilter<"TrendSignal"> | Date | string
    keyword?: XOR<KeywordScalarRelationFilter, KeywordWhereInput>
  }, "id">

  export type TrendSignalOrderByWithAggregationInput = {
    id?: SortOrder
    keywordId?: SortOrder
    interestData?: SortOrderInput | SortOrder
    slope?: SortOrderInput | SortOrder
    variance?: SortOrderInput | SortOrder
    relatedQueries?: SortOrderInput | SortOrder
    collectedAt?: SortOrder
    _count?: TrendSignalCountOrderByAggregateInput
    _avg?: TrendSignalAvgOrderByAggregateInput
    _max?: TrendSignalMaxOrderByAggregateInput
    _min?: TrendSignalMinOrderByAggregateInput
    _sum?: TrendSignalSumOrderByAggregateInput
  }

  export type TrendSignalScalarWhereWithAggregatesInput = {
    AND?: TrendSignalScalarWhereWithAggregatesInput | TrendSignalScalarWhereWithAggregatesInput[]
    OR?: TrendSignalScalarWhereWithAggregatesInput[]
    NOT?: TrendSignalScalarWhereWithAggregatesInput | TrendSignalScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TrendSignal"> | number
    keywordId?: IntWithAggregatesFilter<"TrendSignal"> | number
    interestData?: JsonNullableWithAggregatesFilter<"TrendSignal">
    slope?: FloatNullableWithAggregatesFilter<"TrendSignal"> | number | null
    variance?: FloatNullableWithAggregatesFilter<"TrendSignal"> | number | null
    relatedQueries?: JsonNullableWithAggregatesFilter<"TrendSignal">
    collectedAt?: DateTimeWithAggregatesFilter<"TrendSignal"> | Date | string
  }

  export type FeasibilityScoreWhereInput = {
    AND?: FeasibilityScoreWhereInput | FeasibilityScoreWhereInput[]
    OR?: FeasibilityScoreWhereInput[]
    NOT?: FeasibilityScoreWhereInput | FeasibilityScoreWhereInput[]
    id?: IntFilter<"FeasibilityScore"> | number
    keywordId?: IntFilter<"FeasibilityScore"> | number
    demandScore?: FloatFilter<"FeasibilityScore"> | number
    competitionScore?: FloatFilter<"FeasibilityScore"> | number
    constraintPressure?: FloatFilter<"FeasibilityScore"> | number
    feasibilityScore?: FloatFilter<"FeasibilityScore"> | number
    difficulty?: EnumDifficultyFilter<"FeasibilityScore"> | $Enums.Difficulty
    timeRangeMin?: IntNullableFilter<"FeasibilityScore"> | number | null
    timeRangeMax?: IntNullableFilter<"FeasibilityScore"> | number | null
    regime?: EnumRegimeNullableFilter<"FeasibilityScore"> | $Enums.Regime | null
    successBand?: JsonNullableFilter<"FeasibilityScore">
    constraints?: JsonNullableFilter<"FeasibilityScore">
    conditions?: JsonNullableFilter<"FeasibilityScore">
    signalVersions?: JsonNullableFilter<"FeasibilityScore">
    scoredAt?: DateTimeFilter<"FeasibilityScore"> | Date | string
    keyword?: XOR<KeywordScalarRelationFilter, KeywordWhereInput>
    outcomes?: OutcomeListRelationFilter
  }

  export type FeasibilityScoreOrderByWithRelationInput = {
    id?: SortOrder
    keywordId?: SortOrder
    demandScore?: SortOrder
    competitionScore?: SortOrder
    constraintPressure?: SortOrder
    feasibilityScore?: SortOrder
    difficulty?: SortOrder
    timeRangeMin?: SortOrderInput | SortOrder
    timeRangeMax?: SortOrderInput | SortOrder
    regime?: SortOrderInput | SortOrder
    successBand?: SortOrderInput | SortOrder
    constraints?: SortOrderInput | SortOrder
    conditions?: SortOrderInput | SortOrder
    signalVersions?: SortOrderInput | SortOrder
    scoredAt?: SortOrder
    keyword?: KeywordOrderByWithRelationInput
    outcomes?: OutcomeOrderByRelationAggregateInput
  }

  export type FeasibilityScoreWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FeasibilityScoreWhereInput | FeasibilityScoreWhereInput[]
    OR?: FeasibilityScoreWhereInput[]
    NOT?: FeasibilityScoreWhereInput | FeasibilityScoreWhereInput[]
    keywordId?: IntFilter<"FeasibilityScore"> | number
    demandScore?: FloatFilter<"FeasibilityScore"> | number
    competitionScore?: FloatFilter<"FeasibilityScore"> | number
    constraintPressure?: FloatFilter<"FeasibilityScore"> | number
    feasibilityScore?: FloatFilter<"FeasibilityScore"> | number
    difficulty?: EnumDifficultyFilter<"FeasibilityScore"> | $Enums.Difficulty
    timeRangeMin?: IntNullableFilter<"FeasibilityScore"> | number | null
    timeRangeMax?: IntNullableFilter<"FeasibilityScore"> | number | null
    regime?: EnumRegimeNullableFilter<"FeasibilityScore"> | $Enums.Regime | null
    successBand?: JsonNullableFilter<"FeasibilityScore">
    constraints?: JsonNullableFilter<"FeasibilityScore">
    conditions?: JsonNullableFilter<"FeasibilityScore">
    signalVersions?: JsonNullableFilter<"FeasibilityScore">
    scoredAt?: DateTimeFilter<"FeasibilityScore"> | Date | string
    keyword?: XOR<KeywordScalarRelationFilter, KeywordWhereInput>
    outcomes?: OutcomeListRelationFilter
  }, "id">

  export type FeasibilityScoreOrderByWithAggregationInput = {
    id?: SortOrder
    keywordId?: SortOrder
    demandScore?: SortOrder
    competitionScore?: SortOrder
    constraintPressure?: SortOrder
    feasibilityScore?: SortOrder
    difficulty?: SortOrder
    timeRangeMin?: SortOrderInput | SortOrder
    timeRangeMax?: SortOrderInput | SortOrder
    regime?: SortOrderInput | SortOrder
    successBand?: SortOrderInput | SortOrder
    constraints?: SortOrderInput | SortOrder
    conditions?: SortOrderInput | SortOrder
    signalVersions?: SortOrderInput | SortOrder
    scoredAt?: SortOrder
    _count?: FeasibilityScoreCountOrderByAggregateInput
    _avg?: FeasibilityScoreAvgOrderByAggregateInput
    _max?: FeasibilityScoreMaxOrderByAggregateInput
    _min?: FeasibilityScoreMinOrderByAggregateInput
    _sum?: FeasibilityScoreSumOrderByAggregateInput
  }

  export type FeasibilityScoreScalarWhereWithAggregatesInput = {
    AND?: FeasibilityScoreScalarWhereWithAggregatesInput | FeasibilityScoreScalarWhereWithAggregatesInput[]
    OR?: FeasibilityScoreScalarWhereWithAggregatesInput[]
    NOT?: FeasibilityScoreScalarWhereWithAggregatesInput | FeasibilityScoreScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"FeasibilityScore"> | number
    keywordId?: IntWithAggregatesFilter<"FeasibilityScore"> | number
    demandScore?: FloatWithAggregatesFilter<"FeasibilityScore"> | number
    competitionScore?: FloatWithAggregatesFilter<"FeasibilityScore"> | number
    constraintPressure?: FloatWithAggregatesFilter<"FeasibilityScore"> | number
    feasibilityScore?: FloatWithAggregatesFilter<"FeasibilityScore"> | number
    difficulty?: EnumDifficultyWithAggregatesFilter<"FeasibilityScore"> | $Enums.Difficulty
    timeRangeMin?: IntNullableWithAggregatesFilter<"FeasibilityScore"> | number | null
    timeRangeMax?: IntNullableWithAggregatesFilter<"FeasibilityScore"> | number | null
    regime?: EnumRegimeNullableWithAggregatesFilter<"FeasibilityScore"> | $Enums.Regime | null
    successBand?: JsonNullableWithAggregatesFilter<"FeasibilityScore">
    constraints?: JsonNullableWithAggregatesFilter<"FeasibilityScore">
    conditions?: JsonNullableWithAggregatesFilter<"FeasibilityScore">
    signalVersions?: JsonNullableWithAggregatesFilter<"FeasibilityScore">
    scoredAt?: DateTimeWithAggregatesFilter<"FeasibilityScore"> | Date | string
  }

  export type OutcomeWhereInput = {
    AND?: OutcomeWhereInput | OutcomeWhereInput[]
    OR?: OutcomeWhereInput[]
    NOT?: OutcomeWhereInput | OutcomeWhereInput[]
    id?: IntFilter<"Outcome"> | number
    keywordId?: IntFilter<"Outcome"> | number
    scoreId?: IntFilter<"Outcome"> | number
    actualResult?: StringNullableFilter<"Outcome"> | string | null
    monthsElapsed?: IntNullableFilter<"Outcome"> | number | null
    trafficAchieved?: IntNullableFilter<"Outcome"> | number | null
    notes?: StringNullableFilter<"Outcome"> | string | null
    reportedAt?: DateTimeFilter<"Outcome"> | Date | string
    keyword?: XOR<KeywordScalarRelationFilter, KeywordWhereInput>
    score?: XOR<FeasibilityScoreScalarRelationFilter, FeasibilityScoreWhereInput>
  }

  export type OutcomeOrderByWithRelationInput = {
    id?: SortOrder
    keywordId?: SortOrder
    scoreId?: SortOrder
    actualResult?: SortOrderInput | SortOrder
    monthsElapsed?: SortOrderInput | SortOrder
    trafficAchieved?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    reportedAt?: SortOrder
    keyword?: KeywordOrderByWithRelationInput
    score?: FeasibilityScoreOrderByWithRelationInput
  }

  export type OutcomeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: OutcomeWhereInput | OutcomeWhereInput[]
    OR?: OutcomeWhereInput[]
    NOT?: OutcomeWhereInput | OutcomeWhereInput[]
    keywordId?: IntFilter<"Outcome"> | number
    scoreId?: IntFilter<"Outcome"> | number
    actualResult?: StringNullableFilter<"Outcome"> | string | null
    monthsElapsed?: IntNullableFilter<"Outcome"> | number | null
    trafficAchieved?: IntNullableFilter<"Outcome"> | number | null
    notes?: StringNullableFilter<"Outcome"> | string | null
    reportedAt?: DateTimeFilter<"Outcome"> | Date | string
    keyword?: XOR<KeywordScalarRelationFilter, KeywordWhereInput>
    score?: XOR<FeasibilityScoreScalarRelationFilter, FeasibilityScoreWhereInput>
  }, "id">

  export type OutcomeOrderByWithAggregationInput = {
    id?: SortOrder
    keywordId?: SortOrder
    scoreId?: SortOrder
    actualResult?: SortOrderInput | SortOrder
    monthsElapsed?: SortOrderInput | SortOrder
    trafficAchieved?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    reportedAt?: SortOrder
    _count?: OutcomeCountOrderByAggregateInput
    _avg?: OutcomeAvgOrderByAggregateInput
    _max?: OutcomeMaxOrderByAggregateInput
    _min?: OutcomeMinOrderByAggregateInput
    _sum?: OutcomeSumOrderByAggregateInput
  }

  export type OutcomeScalarWhereWithAggregatesInput = {
    AND?: OutcomeScalarWhereWithAggregatesInput | OutcomeScalarWhereWithAggregatesInput[]
    OR?: OutcomeScalarWhereWithAggregatesInput[]
    NOT?: OutcomeScalarWhereWithAggregatesInput | OutcomeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Outcome"> | number
    keywordId?: IntWithAggregatesFilter<"Outcome"> | number
    scoreId?: IntWithAggregatesFilter<"Outcome"> | number
    actualResult?: StringNullableWithAggregatesFilter<"Outcome"> | string | null
    monthsElapsed?: IntNullableWithAggregatesFilter<"Outcome"> | number | null
    trafficAchieved?: IntNullableWithAggregatesFilter<"Outcome"> | number | null
    notes?: StringNullableWithAggregatesFilter<"Outcome"> | string | null
    reportedAt?: DateTimeWithAggregatesFilter<"Outcome"> | Date | string
  }

  export type SeoPageWhereInput = {
    AND?: SeoPageWhereInput | SeoPageWhereInput[]
    OR?: SeoPageWhereInput[]
    NOT?: SeoPageWhereInput | SeoPageWhereInput[]
    id?: IntFilter<"SeoPage"> | number
    keywordId?: IntFilter<"SeoPage"> | number
    pageType?: StringNullableFilter<"SeoPage"> | string | null
    slug?: StringFilter<"SeoPage"> | string
    title?: StringNullableFilter<"SeoPage"> | string | null
    metaDescription?: StringNullableFilter<"SeoPage"> | string | null
    lastGenerated?: DateTimeNullableFilter<"SeoPage"> | Date | string | null
    indexed?: BoolFilter<"SeoPage"> | boolean
    keyword?: XOR<KeywordScalarRelationFilter, KeywordWhereInput>
  }

  export type SeoPageOrderByWithRelationInput = {
    id?: SortOrder
    keywordId?: SortOrder
    pageType?: SortOrderInput | SortOrder
    slug?: SortOrder
    title?: SortOrderInput | SortOrder
    metaDescription?: SortOrderInput | SortOrder
    lastGenerated?: SortOrderInput | SortOrder
    indexed?: SortOrder
    keyword?: KeywordOrderByWithRelationInput
  }

  export type SeoPageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    slug?: string
    AND?: SeoPageWhereInput | SeoPageWhereInput[]
    OR?: SeoPageWhereInput[]
    NOT?: SeoPageWhereInput | SeoPageWhereInput[]
    keywordId?: IntFilter<"SeoPage"> | number
    pageType?: StringNullableFilter<"SeoPage"> | string | null
    title?: StringNullableFilter<"SeoPage"> | string | null
    metaDescription?: StringNullableFilter<"SeoPage"> | string | null
    lastGenerated?: DateTimeNullableFilter<"SeoPage"> | Date | string | null
    indexed?: BoolFilter<"SeoPage"> | boolean
    keyword?: XOR<KeywordScalarRelationFilter, KeywordWhereInput>
  }, "id" | "slug">

  export type SeoPageOrderByWithAggregationInput = {
    id?: SortOrder
    keywordId?: SortOrder
    pageType?: SortOrderInput | SortOrder
    slug?: SortOrder
    title?: SortOrderInput | SortOrder
    metaDescription?: SortOrderInput | SortOrder
    lastGenerated?: SortOrderInput | SortOrder
    indexed?: SortOrder
    _count?: SeoPageCountOrderByAggregateInput
    _avg?: SeoPageAvgOrderByAggregateInput
    _max?: SeoPageMaxOrderByAggregateInput
    _min?: SeoPageMinOrderByAggregateInput
    _sum?: SeoPageSumOrderByAggregateInput
  }

  export type SeoPageScalarWhereWithAggregatesInput = {
    AND?: SeoPageScalarWhereWithAggregatesInput | SeoPageScalarWhereWithAggregatesInput[]
    OR?: SeoPageScalarWhereWithAggregatesInput[]
    NOT?: SeoPageScalarWhereWithAggregatesInput | SeoPageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SeoPage"> | number
    keywordId?: IntWithAggregatesFilter<"SeoPage"> | number
    pageType?: StringNullableWithAggregatesFilter<"SeoPage"> | string | null
    slug?: StringWithAggregatesFilter<"SeoPage"> | string
    title?: StringNullableWithAggregatesFilter<"SeoPage"> | string | null
    metaDescription?: StringNullableWithAggregatesFilter<"SeoPage"> | string | null
    lastGenerated?: DateTimeNullableWithAggregatesFilter<"SeoPage"> | Date | string | null
    indexed?: BoolWithAggregatesFilter<"SeoPage"> | boolean
  }

  export type KeywordCreateInput = {
    keyword: string
    slug: string
    domain?: $Enums.Domain | null
    createdAt?: Date | string
    lastAnalyzed?: Date | string | null
    demandSignals?: DemandSignalCreateNestedManyWithoutKeywordInput
    competitionSignals?: CompetitionSignalCreateNestedManyWithoutKeywordInput
    trendSignals?: TrendSignalCreateNestedManyWithoutKeywordInput
    feasibilityScores?: FeasibilityScoreCreateNestedManyWithoutKeywordInput
    outcomes?: OutcomeCreateNestedManyWithoutKeywordInput
    seoPages?: SeoPageCreateNestedManyWithoutKeywordInput
  }

  export type KeywordUncheckedCreateInput = {
    id?: number
    keyword: string
    slug: string
    domain?: $Enums.Domain | null
    createdAt?: Date | string
    lastAnalyzed?: Date | string | null
    demandSignals?: DemandSignalUncheckedCreateNestedManyWithoutKeywordInput
    competitionSignals?: CompetitionSignalUncheckedCreateNestedManyWithoutKeywordInput
    trendSignals?: TrendSignalUncheckedCreateNestedManyWithoutKeywordInput
    feasibilityScores?: FeasibilityScoreUncheckedCreateNestedManyWithoutKeywordInput
    outcomes?: OutcomeUncheckedCreateNestedManyWithoutKeywordInput
    seoPages?: SeoPageUncheckedCreateNestedManyWithoutKeywordInput
  }

  export type KeywordUpdateInput = {
    keyword?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    domain?: NullableEnumDomainFieldUpdateOperationsInput | $Enums.Domain | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastAnalyzed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    demandSignals?: DemandSignalUpdateManyWithoutKeywordNestedInput
    competitionSignals?: CompetitionSignalUpdateManyWithoutKeywordNestedInput
    trendSignals?: TrendSignalUpdateManyWithoutKeywordNestedInput
    feasibilityScores?: FeasibilityScoreUpdateManyWithoutKeywordNestedInput
    outcomes?: OutcomeUpdateManyWithoutKeywordNestedInput
    seoPages?: SeoPageUpdateManyWithoutKeywordNestedInput
  }

  export type KeywordUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    keyword?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    domain?: NullableEnumDomainFieldUpdateOperationsInput | $Enums.Domain | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastAnalyzed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    demandSignals?: DemandSignalUncheckedUpdateManyWithoutKeywordNestedInput
    competitionSignals?: CompetitionSignalUncheckedUpdateManyWithoutKeywordNestedInput
    trendSignals?: TrendSignalUncheckedUpdateManyWithoutKeywordNestedInput
    feasibilityScores?: FeasibilityScoreUncheckedUpdateManyWithoutKeywordNestedInput
    outcomes?: OutcomeUncheckedUpdateManyWithoutKeywordNestedInput
    seoPages?: SeoPageUncheckedUpdateManyWithoutKeywordNestedInput
  }

  export type KeywordCreateManyInput = {
    id?: number
    keyword: string
    slug: string
    domain?: $Enums.Domain | null
    createdAt?: Date | string
    lastAnalyzed?: Date | string | null
  }

  export type KeywordUpdateManyMutationInput = {
    keyword?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    domain?: NullableEnumDomainFieldUpdateOperationsInput | $Enums.Domain | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastAnalyzed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type KeywordUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    keyword?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    domain?: NullableEnumDomainFieldUpdateOperationsInput | $Enums.Domain | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastAnalyzed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DemandSignalCreateInput = {
    source: string
    postCount?: number | null
    avgComments?: number | null
    sentimentScore?: number | null
    recencyScore?: number | null
    rawData?: NullableJsonNullValueInput | InputJsonValue
    collectedAt?: Date | string
    keyword: KeywordCreateNestedOneWithoutDemandSignalsInput
  }

  export type DemandSignalUncheckedCreateInput = {
    id?: number
    keywordId: number
    source: string
    postCount?: number | null
    avgComments?: number | null
    sentimentScore?: number | null
    recencyScore?: number | null
    rawData?: NullableJsonNullValueInput | InputJsonValue
    collectedAt?: Date | string
  }

  export type DemandSignalUpdateInput = {
    source?: StringFieldUpdateOperationsInput | string
    postCount?: NullableIntFieldUpdateOperationsInput | number | null
    avgComments?: NullableFloatFieldUpdateOperationsInput | number | null
    sentimentScore?: NullableFloatFieldUpdateOperationsInput | number | null
    recencyScore?: NullableFloatFieldUpdateOperationsInput | number | null
    rawData?: NullableJsonNullValueInput | InputJsonValue
    collectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    keyword?: KeywordUpdateOneRequiredWithoutDemandSignalsNestedInput
  }

  export type DemandSignalUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    keywordId?: IntFieldUpdateOperationsInput | number
    source?: StringFieldUpdateOperationsInput | string
    postCount?: NullableIntFieldUpdateOperationsInput | number | null
    avgComments?: NullableFloatFieldUpdateOperationsInput | number | null
    sentimentScore?: NullableFloatFieldUpdateOperationsInput | number | null
    recencyScore?: NullableFloatFieldUpdateOperationsInput | number | null
    rawData?: NullableJsonNullValueInput | InputJsonValue
    collectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DemandSignalCreateManyInput = {
    id?: number
    keywordId: number
    source: string
    postCount?: number | null
    avgComments?: number | null
    sentimentScore?: number | null
    recencyScore?: number | null
    rawData?: NullableJsonNullValueInput | InputJsonValue
    collectedAt?: Date | string
  }

  export type DemandSignalUpdateManyMutationInput = {
    source?: StringFieldUpdateOperationsInput | string
    postCount?: NullableIntFieldUpdateOperationsInput | number | null
    avgComments?: NullableFloatFieldUpdateOperationsInput | number | null
    sentimentScore?: NullableFloatFieldUpdateOperationsInput | number | null
    recencyScore?: NullableFloatFieldUpdateOperationsInput | number | null
    rawData?: NullableJsonNullValueInput | InputJsonValue
    collectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DemandSignalUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    keywordId?: IntFieldUpdateOperationsInput | number
    source?: StringFieldUpdateOperationsInput | string
    postCount?: NullableIntFieldUpdateOperationsInput | number | null
    avgComments?: NullableFloatFieldUpdateOperationsInput | number | null
    sentimentScore?: NullableFloatFieldUpdateOperationsInput | number | null
    recencyScore?: NullableFloatFieldUpdateOperationsInput | number | null
    rawData?: NullableJsonNullValueInput | InputJsonValue
    collectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompetitionSignalCreateInput = {
    topResults?: NullableJsonNullValueInput | InputJsonValue
    avgDomainStrength?: number | null
    uniqueDomainsTop10?: number | null
    avgContentLength?: number | null
    avgContentAgeDays?: number | null
    indexedPagesEstimate?: bigint | number | null
    collectedAt?: Date | string
    keyword: KeywordCreateNestedOneWithoutCompetitionSignalsInput
  }

  export type CompetitionSignalUncheckedCreateInput = {
    id?: number
    keywordId: number
    topResults?: NullableJsonNullValueInput | InputJsonValue
    avgDomainStrength?: number | null
    uniqueDomainsTop10?: number | null
    avgContentLength?: number | null
    avgContentAgeDays?: number | null
    indexedPagesEstimate?: bigint | number | null
    collectedAt?: Date | string
  }

  export type CompetitionSignalUpdateInput = {
    topResults?: NullableJsonNullValueInput | InputJsonValue
    avgDomainStrength?: NullableFloatFieldUpdateOperationsInput | number | null
    uniqueDomainsTop10?: NullableIntFieldUpdateOperationsInput | number | null
    avgContentLength?: NullableIntFieldUpdateOperationsInput | number | null
    avgContentAgeDays?: NullableIntFieldUpdateOperationsInput | number | null
    indexedPagesEstimate?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    collectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    keyword?: KeywordUpdateOneRequiredWithoutCompetitionSignalsNestedInput
  }

  export type CompetitionSignalUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    keywordId?: IntFieldUpdateOperationsInput | number
    topResults?: NullableJsonNullValueInput | InputJsonValue
    avgDomainStrength?: NullableFloatFieldUpdateOperationsInput | number | null
    uniqueDomainsTop10?: NullableIntFieldUpdateOperationsInput | number | null
    avgContentLength?: NullableIntFieldUpdateOperationsInput | number | null
    avgContentAgeDays?: NullableIntFieldUpdateOperationsInput | number | null
    indexedPagesEstimate?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    collectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompetitionSignalCreateManyInput = {
    id?: number
    keywordId: number
    topResults?: NullableJsonNullValueInput | InputJsonValue
    avgDomainStrength?: number | null
    uniqueDomainsTop10?: number | null
    avgContentLength?: number | null
    avgContentAgeDays?: number | null
    indexedPagesEstimate?: bigint | number | null
    collectedAt?: Date | string
  }

  export type CompetitionSignalUpdateManyMutationInput = {
    topResults?: NullableJsonNullValueInput | InputJsonValue
    avgDomainStrength?: NullableFloatFieldUpdateOperationsInput | number | null
    uniqueDomainsTop10?: NullableIntFieldUpdateOperationsInput | number | null
    avgContentLength?: NullableIntFieldUpdateOperationsInput | number | null
    avgContentAgeDays?: NullableIntFieldUpdateOperationsInput | number | null
    indexedPagesEstimate?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    collectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompetitionSignalUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    keywordId?: IntFieldUpdateOperationsInput | number
    topResults?: NullableJsonNullValueInput | InputJsonValue
    avgDomainStrength?: NullableFloatFieldUpdateOperationsInput | number | null
    uniqueDomainsTop10?: NullableIntFieldUpdateOperationsInput | number | null
    avgContentLength?: NullableIntFieldUpdateOperationsInput | number | null
    avgContentAgeDays?: NullableIntFieldUpdateOperationsInput | number | null
    indexedPagesEstimate?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    collectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrendSignalCreateInput = {
    interestData?: NullableJsonNullValueInput | InputJsonValue
    slope?: number | null
    variance?: number | null
    relatedQueries?: NullableJsonNullValueInput | InputJsonValue
    collectedAt?: Date | string
    keyword: KeywordCreateNestedOneWithoutTrendSignalsInput
  }

  export type TrendSignalUncheckedCreateInput = {
    id?: number
    keywordId: number
    interestData?: NullableJsonNullValueInput | InputJsonValue
    slope?: number | null
    variance?: number | null
    relatedQueries?: NullableJsonNullValueInput | InputJsonValue
    collectedAt?: Date | string
  }

  export type TrendSignalUpdateInput = {
    interestData?: NullableJsonNullValueInput | InputJsonValue
    slope?: NullableFloatFieldUpdateOperationsInput | number | null
    variance?: NullableFloatFieldUpdateOperationsInput | number | null
    relatedQueries?: NullableJsonNullValueInput | InputJsonValue
    collectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    keyword?: KeywordUpdateOneRequiredWithoutTrendSignalsNestedInput
  }

  export type TrendSignalUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    keywordId?: IntFieldUpdateOperationsInput | number
    interestData?: NullableJsonNullValueInput | InputJsonValue
    slope?: NullableFloatFieldUpdateOperationsInput | number | null
    variance?: NullableFloatFieldUpdateOperationsInput | number | null
    relatedQueries?: NullableJsonNullValueInput | InputJsonValue
    collectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrendSignalCreateManyInput = {
    id?: number
    keywordId: number
    interestData?: NullableJsonNullValueInput | InputJsonValue
    slope?: number | null
    variance?: number | null
    relatedQueries?: NullableJsonNullValueInput | InputJsonValue
    collectedAt?: Date | string
  }

  export type TrendSignalUpdateManyMutationInput = {
    interestData?: NullableJsonNullValueInput | InputJsonValue
    slope?: NullableFloatFieldUpdateOperationsInput | number | null
    variance?: NullableFloatFieldUpdateOperationsInput | number | null
    relatedQueries?: NullableJsonNullValueInput | InputJsonValue
    collectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrendSignalUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    keywordId?: IntFieldUpdateOperationsInput | number
    interestData?: NullableJsonNullValueInput | InputJsonValue
    slope?: NullableFloatFieldUpdateOperationsInput | number | null
    variance?: NullableFloatFieldUpdateOperationsInput | number | null
    relatedQueries?: NullableJsonNullValueInput | InputJsonValue
    collectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeasibilityScoreCreateInput = {
    demandScore: number
    competitionScore: number
    constraintPressure: number
    feasibilityScore: number
    difficulty: $Enums.Difficulty
    timeRangeMin?: number | null
    timeRangeMax?: number | null
    regime?: $Enums.Regime | null
    successBand?: NullableJsonNullValueInput | InputJsonValue
    constraints?: NullableJsonNullValueInput | InputJsonValue
    conditions?: NullableJsonNullValueInput | InputJsonValue
    signalVersions?: NullableJsonNullValueInput | InputJsonValue
    scoredAt?: Date | string
    keyword: KeywordCreateNestedOneWithoutFeasibilityScoresInput
    outcomes?: OutcomeCreateNestedManyWithoutScoreInput
  }

  export type FeasibilityScoreUncheckedCreateInput = {
    id?: number
    keywordId: number
    demandScore: number
    competitionScore: number
    constraintPressure: number
    feasibilityScore: number
    difficulty: $Enums.Difficulty
    timeRangeMin?: number | null
    timeRangeMax?: number | null
    regime?: $Enums.Regime | null
    successBand?: NullableJsonNullValueInput | InputJsonValue
    constraints?: NullableJsonNullValueInput | InputJsonValue
    conditions?: NullableJsonNullValueInput | InputJsonValue
    signalVersions?: NullableJsonNullValueInput | InputJsonValue
    scoredAt?: Date | string
    outcomes?: OutcomeUncheckedCreateNestedManyWithoutScoreInput
  }

  export type FeasibilityScoreUpdateInput = {
    demandScore?: FloatFieldUpdateOperationsInput | number
    competitionScore?: FloatFieldUpdateOperationsInput | number
    constraintPressure?: FloatFieldUpdateOperationsInput | number
    feasibilityScore?: FloatFieldUpdateOperationsInput | number
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    timeRangeMin?: NullableIntFieldUpdateOperationsInput | number | null
    timeRangeMax?: NullableIntFieldUpdateOperationsInput | number | null
    regime?: NullableEnumRegimeFieldUpdateOperationsInput | $Enums.Regime | null
    successBand?: NullableJsonNullValueInput | InputJsonValue
    constraints?: NullableJsonNullValueInput | InputJsonValue
    conditions?: NullableJsonNullValueInput | InputJsonValue
    signalVersions?: NullableJsonNullValueInput | InputJsonValue
    scoredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    keyword?: KeywordUpdateOneRequiredWithoutFeasibilityScoresNestedInput
    outcomes?: OutcomeUpdateManyWithoutScoreNestedInput
  }

  export type FeasibilityScoreUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    keywordId?: IntFieldUpdateOperationsInput | number
    demandScore?: FloatFieldUpdateOperationsInput | number
    competitionScore?: FloatFieldUpdateOperationsInput | number
    constraintPressure?: FloatFieldUpdateOperationsInput | number
    feasibilityScore?: FloatFieldUpdateOperationsInput | number
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    timeRangeMin?: NullableIntFieldUpdateOperationsInput | number | null
    timeRangeMax?: NullableIntFieldUpdateOperationsInput | number | null
    regime?: NullableEnumRegimeFieldUpdateOperationsInput | $Enums.Regime | null
    successBand?: NullableJsonNullValueInput | InputJsonValue
    constraints?: NullableJsonNullValueInput | InputJsonValue
    conditions?: NullableJsonNullValueInput | InputJsonValue
    signalVersions?: NullableJsonNullValueInput | InputJsonValue
    scoredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    outcomes?: OutcomeUncheckedUpdateManyWithoutScoreNestedInput
  }

  export type FeasibilityScoreCreateManyInput = {
    id?: number
    keywordId: number
    demandScore: number
    competitionScore: number
    constraintPressure: number
    feasibilityScore: number
    difficulty: $Enums.Difficulty
    timeRangeMin?: number | null
    timeRangeMax?: number | null
    regime?: $Enums.Regime | null
    successBand?: NullableJsonNullValueInput | InputJsonValue
    constraints?: NullableJsonNullValueInput | InputJsonValue
    conditions?: NullableJsonNullValueInput | InputJsonValue
    signalVersions?: NullableJsonNullValueInput | InputJsonValue
    scoredAt?: Date | string
  }

  export type FeasibilityScoreUpdateManyMutationInput = {
    demandScore?: FloatFieldUpdateOperationsInput | number
    competitionScore?: FloatFieldUpdateOperationsInput | number
    constraintPressure?: FloatFieldUpdateOperationsInput | number
    feasibilityScore?: FloatFieldUpdateOperationsInput | number
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    timeRangeMin?: NullableIntFieldUpdateOperationsInput | number | null
    timeRangeMax?: NullableIntFieldUpdateOperationsInput | number | null
    regime?: NullableEnumRegimeFieldUpdateOperationsInput | $Enums.Regime | null
    successBand?: NullableJsonNullValueInput | InputJsonValue
    constraints?: NullableJsonNullValueInput | InputJsonValue
    conditions?: NullableJsonNullValueInput | InputJsonValue
    signalVersions?: NullableJsonNullValueInput | InputJsonValue
    scoredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeasibilityScoreUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    keywordId?: IntFieldUpdateOperationsInput | number
    demandScore?: FloatFieldUpdateOperationsInput | number
    competitionScore?: FloatFieldUpdateOperationsInput | number
    constraintPressure?: FloatFieldUpdateOperationsInput | number
    feasibilityScore?: FloatFieldUpdateOperationsInput | number
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    timeRangeMin?: NullableIntFieldUpdateOperationsInput | number | null
    timeRangeMax?: NullableIntFieldUpdateOperationsInput | number | null
    regime?: NullableEnumRegimeFieldUpdateOperationsInput | $Enums.Regime | null
    successBand?: NullableJsonNullValueInput | InputJsonValue
    constraints?: NullableJsonNullValueInput | InputJsonValue
    conditions?: NullableJsonNullValueInput | InputJsonValue
    signalVersions?: NullableJsonNullValueInput | InputJsonValue
    scoredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OutcomeCreateInput = {
    actualResult?: string | null
    monthsElapsed?: number | null
    trafficAchieved?: number | null
    notes?: string | null
    reportedAt?: Date | string
    keyword: KeywordCreateNestedOneWithoutOutcomesInput
    score: FeasibilityScoreCreateNestedOneWithoutOutcomesInput
  }

  export type OutcomeUncheckedCreateInput = {
    id?: number
    keywordId: number
    scoreId: number
    actualResult?: string | null
    monthsElapsed?: number | null
    trafficAchieved?: number | null
    notes?: string | null
    reportedAt?: Date | string
  }

  export type OutcomeUpdateInput = {
    actualResult?: NullableStringFieldUpdateOperationsInput | string | null
    monthsElapsed?: NullableIntFieldUpdateOperationsInput | number | null
    trafficAchieved?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    reportedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    keyword?: KeywordUpdateOneRequiredWithoutOutcomesNestedInput
    score?: FeasibilityScoreUpdateOneRequiredWithoutOutcomesNestedInput
  }

  export type OutcomeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    keywordId?: IntFieldUpdateOperationsInput | number
    scoreId?: IntFieldUpdateOperationsInput | number
    actualResult?: NullableStringFieldUpdateOperationsInput | string | null
    monthsElapsed?: NullableIntFieldUpdateOperationsInput | number | null
    trafficAchieved?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    reportedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OutcomeCreateManyInput = {
    id?: number
    keywordId: number
    scoreId: number
    actualResult?: string | null
    monthsElapsed?: number | null
    trafficAchieved?: number | null
    notes?: string | null
    reportedAt?: Date | string
  }

  export type OutcomeUpdateManyMutationInput = {
    actualResult?: NullableStringFieldUpdateOperationsInput | string | null
    monthsElapsed?: NullableIntFieldUpdateOperationsInput | number | null
    trafficAchieved?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    reportedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OutcomeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    keywordId?: IntFieldUpdateOperationsInput | number
    scoreId?: IntFieldUpdateOperationsInput | number
    actualResult?: NullableStringFieldUpdateOperationsInput | string | null
    monthsElapsed?: NullableIntFieldUpdateOperationsInput | number | null
    trafficAchieved?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    reportedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SeoPageCreateInput = {
    pageType?: string | null
    slug: string
    title?: string | null
    metaDescription?: string | null
    lastGenerated?: Date | string | null
    indexed?: boolean
    keyword: KeywordCreateNestedOneWithoutSeoPagesInput
  }

  export type SeoPageUncheckedCreateInput = {
    id?: number
    keywordId: number
    pageType?: string | null
    slug: string
    title?: string | null
    metaDescription?: string | null
    lastGenerated?: Date | string | null
    indexed?: boolean
  }

  export type SeoPageUpdateInput = {
    pageType?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    lastGenerated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    indexed?: BoolFieldUpdateOperationsInput | boolean
    keyword?: KeywordUpdateOneRequiredWithoutSeoPagesNestedInput
  }

  export type SeoPageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    keywordId?: IntFieldUpdateOperationsInput | number
    pageType?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    lastGenerated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    indexed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SeoPageCreateManyInput = {
    id?: number
    keywordId: number
    pageType?: string | null
    slug: string
    title?: string | null
    metaDescription?: string | null
    lastGenerated?: Date | string | null
    indexed?: boolean
  }

  export type SeoPageUpdateManyMutationInput = {
    pageType?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    lastGenerated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    indexed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SeoPageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    keywordId?: IntFieldUpdateOperationsInput | number
    pageType?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    lastGenerated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    indexed?: BoolFieldUpdateOperationsInput | boolean
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

  export type EnumDomainNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Domain | EnumDomainFieldRefInput<$PrismaModel> | null
    in?: $Enums.Domain[] | ListEnumDomainFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Domain[] | ListEnumDomainFieldRefInput<$PrismaModel> | null
    not?: NestedEnumDomainNullableFilter<$PrismaModel> | $Enums.Domain | null
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

  export type DemandSignalListRelationFilter = {
    every?: DemandSignalWhereInput
    some?: DemandSignalWhereInput
    none?: DemandSignalWhereInput
  }

  export type CompetitionSignalListRelationFilter = {
    every?: CompetitionSignalWhereInput
    some?: CompetitionSignalWhereInput
    none?: CompetitionSignalWhereInput
  }

  export type TrendSignalListRelationFilter = {
    every?: TrendSignalWhereInput
    some?: TrendSignalWhereInput
    none?: TrendSignalWhereInput
  }

  export type FeasibilityScoreListRelationFilter = {
    every?: FeasibilityScoreWhereInput
    some?: FeasibilityScoreWhereInput
    none?: FeasibilityScoreWhereInput
  }

  export type OutcomeListRelationFilter = {
    every?: OutcomeWhereInput
    some?: OutcomeWhereInput
    none?: OutcomeWhereInput
  }

  export type SeoPageListRelationFilter = {
    every?: SeoPageWhereInput
    some?: SeoPageWhereInput
    none?: SeoPageWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type DemandSignalOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CompetitionSignalOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TrendSignalOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FeasibilityScoreOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OutcomeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SeoPageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type KeywordCountOrderByAggregateInput = {
    id?: SortOrder
    keyword?: SortOrder
    slug?: SortOrder
    domain?: SortOrder
    createdAt?: SortOrder
    lastAnalyzed?: SortOrder
  }

  export type KeywordAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type KeywordMaxOrderByAggregateInput = {
    id?: SortOrder
    keyword?: SortOrder
    slug?: SortOrder
    domain?: SortOrder
    createdAt?: SortOrder
    lastAnalyzed?: SortOrder
  }

  export type KeywordMinOrderByAggregateInput = {
    id?: SortOrder
    keyword?: SortOrder
    slug?: SortOrder
    domain?: SortOrder
    createdAt?: SortOrder
    lastAnalyzed?: SortOrder
  }

  export type KeywordSumOrderByAggregateInput = {
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

  export type EnumDomainNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Domain | EnumDomainFieldRefInput<$PrismaModel> | null
    in?: $Enums.Domain[] | ListEnumDomainFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Domain[] | ListEnumDomainFieldRefInput<$PrismaModel> | null
    not?: NestedEnumDomainNullableWithAggregatesFilter<$PrismaModel> | $Enums.Domain | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumDomainNullableFilter<$PrismaModel>
    _max?: NestedEnumDomainNullableFilter<$PrismaModel>
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
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type KeywordScalarRelationFilter = {
    is?: KeywordWhereInput
    isNot?: KeywordWhereInput
  }

  export type DemandSignalCountOrderByAggregateInput = {
    id?: SortOrder
    keywordId?: SortOrder
    source?: SortOrder
    postCount?: SortOrder
    avgComments?: SortOrder
    sentimentScore?: SortOrder
    recencyScore?: SortOrder
    rawData?: SortOrder
    collectedAt?: SortOrder
  }

  export type DemandSignalAvgOrderByAggregateInput = {
    id?: SortOrder
    keywordId?: SortOrder
    postCount?: SortOrder
    avgComments?: SortOrder
    sentimentScore?: SortOrder
    recencyScore?: SortOrder
  }

  export type DemandSignalMaxOrderByAggregateInput = {
    id?: SortOrder
    keywordId?: SortOrder
    source?: SortOrder
    postCount?: SortOrder
    avgComments?: SortOrder
    sentimentScore?: SortOrder
    recencyScore?: SortOrder
    collectedAt?: SortOrder
  }

  export type DemandSignalMinOrderByAggregateInput = {
    id?: SortOrder
    keywordId?: SortOrder
    source?: SortOrder
    postCount?: SortOrder
    avgComments?: SortOrder
    sentimentScore?: SortOrder
    recencyScore?: SortOrder
    collectedAt?: SortOrder
  }

  export type DemandSignalSumOrderByAggregateInput = {
    id?: SortOrder
    keywordId?: SortOrder
    postCount?: SortOrder
    avgComments?: SortOrder
    sentimentScore?: SortOrder
    recencyScore?: SortOrder
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
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type BigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type CompetitionSignalCountOrderByAggregateInput = {
    id?: SortOrder
    keywordId?: SortOrder
    topResults?: SortOrder
    avgDomainStrength?: SortOrder
    uniqueDomainsTop10?: SortOrder
    avgContentLength?: SortOrder
    avgContentAgeDays?: SortOrder
    indexedPagesEstimate?: SortOrder
    collectedAt?: SortOrder
  }

  export type CompetitionSignalAvgOrderByAggregateInput = {
    id?: SortOrder
    keywordId?: SortOrder
    avgDomainStrength?: SortOrder
    uniqueDomainsTop10?: SortOrder
    avgContentLength?: SortOrder
    avgContentAgeDays?: SortOrder
    indexedPagesEstimate?: SortOrder
  }

  export type CompetitionSignalMaxOrderByAggregateInput = {
    id?: SortOrder
    keywordId?: SortOrder
    avgDomainStrength?: SortOrder
    uniqueDomainsTop10?: SortOrder
    avgContentLength?: SortOrder
    avgContentAgeDays?: SortOrder
    indexedPagesEstimate?: SortOrder
    collectedAt?: SortOrder
  }

  export type CompetitionSignalMinOrderByAggregateInput = {
    id?: SortOrder
    keywordId?: SortOrder
    avgDomainStrength?: SortOrder
    uniqueDomainsTop10?: SortOrder
    avgContentLength?: SortOrder
    avgContentAgeDays?: SortOrder
    indexedPagesEstimate?: SortOrder
    collectedAt?: SortOrder
  }

  export type CompetitionSignalSumOrderByAggregateInput = {
    id?: SortOrder
    keywordId?: SortOrder
    avgDomainStrength?: SortOrder
    uniqueDomainsTop10?: SortOrder
    avgContentLength?: SortOrder
    avgContentAgeDays?: SortOrder
    indexedPagesEstimate?: SortOrder
  }

  export type BigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type TrendSignalCountOrderByAggregateInput = {
    id?: SortOrder
    keywordId?: SortOrder
    interestData?: SortOrder
    slope?: SortOrder
    variance?: SortOrder
    relatedQueries?: SortOrder
    collectedAt?: SortOrder
  }

  export type TrendSignalAvgOrderByAggregateInput = {
    id?: SortOrder
    keywordId?: SortOrder
    slope?: SortOrder
    variance?: SortOrder
  }

  export type TrendSignalMaxOrderByAggregateInput = {
    id?: SortOrder
    keywordId?: SortOrder
    slope?: SortOrder
    variance?: SortOrder
    collectedAt?: SortOrder
  }

  export type TrendSignalMinOrderByAggregateInput = {
    id?: SortOrder
    keywordId?: SortOrder
    slope?: SortOrder
    variance?: SortOrder
    collectedAt?: SortOrder
  }

  export type TrendSignalSumOrderByAggregateInput = {
    id?: SortOrder
    keywordId?: SortOrder
    slope?: SortOrder
    variance?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type EnumDifficultyFilter<$PrismaModel = never> = {
    equals?: $Enums.Difficulty | EnumDifficultyFieldRefInput<$PrismaModel>
    in?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>
    notIn?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>
    not?: NestedEnumDifficultyFilter<$PrismaModel> | $Enums.Difficulty
  }

  export type EnumRegimeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Regime | EnumRegimeFieldRefInput<$PrismaModel> | null
    in?: $Enums.Regime[] | ListEnumRegimeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Regime[] | ListEnumRegimeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumRegimeNullableFilter<$PrismaModel> | $Enums.Regime | null
  }

  export type FeasibilityScoreCountOrderByAggregateInput = {
    id?: SortOrder
    keywordId?: SortOrder
    demandScore?: SortOrder
    competitionScore?: SortOrder
    constraintPressure?: SortOrder
    feasibilityScore?: SortOrder
    difficulty?: SortOrder
    timeRangeMin?: SortOrder
    timeRangeMax?: SortOrder
    regime?: SortOrder
    successBand?: SortOrder
    constraints?: SortOrder
    conditions?: SortOrder
    signalVersions?: SortOrder
    scoredAt?: SortOrder
  }

  export type FeasibilityScoreAvgOrderByAggregateInput = {
    id?: SortOrder
    keywordId?: SortOrder
    demandScore?: SortOrder
    competitionScore?: SortOrder
    constraintPressure?: SortOrder
    feasibilityScore?: SortOrder
    timeRangeMin?: SortOrder
    timeRangeMax?: SortOrder
  }

  export type FeasibilityScoreMaxOrderByAggregateInput = {
    id?: SortOrder
    keywordId?: SortOrder
    demandScore?: SortOrder
    competitionScore?: SortOrder
    constraintPressure?: SortOrder
    feasibilityScore?: SortOrder
    difficulty?: SortOrder
    timeRangeMin?: SortOrder
    timeRangeMax?: SortOrder
    regime?: SortOrder
    scoredAt?: SortOrder
  }

  export type FeasibilityScoreMinOrderByAggregateInput = {
    id?: SortOrder
    keywordId?: SortOrder
    demandScore?: SortOrder
    competitionScore?: SortOrder
    constraintPressure?: SortOrder
    feasibilityScore?: SortOrder
    difficulty?: SortOrder
    timeRangeMin?: SortOrder
    timeRangeMax?: SortOrder
    regime?: SortOrder
    scoredAt?: SortOrder
  }

  export type FeasibilityScoreSumOrderByAggregateInput = {
    id?: SortOrder
    keywordId?: SortOrder
    demandScore?: SortOrder
    competitionScore?: SortOrder
    constraintPressure?: SortOrder
    feasibilityScore?: SortOrder
    timeRangeMin?: SortOrder
    timeRangeMax?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type EnumDifficultyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Difficulty | EnumDifficultyFieldRefInput<$PrismaModel>
    in?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>
    notIn?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>
    not?: NestedEnumDifficultyWithAggregatesFilter<$PrismaModel> | $Enums.Difficulty
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDifficultyFilter<$PrismaModel>
    _max?: NestedEnumDifficultyFilter<$PrismaModel>
  }

  export type EnumRegimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Regime | EnumRegimeFieldRefInput<$PrismaModel> | null
    in?: $Enums.Regime[] | ListEnumRegimeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Regime[] | ListEnumRegimeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumRegimeNullableWithAggregatesFilter<$PrismaModel> | $Enums.Regime | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumRegimeNullableFilter<$PrismaModel>
    _max?: NestedEnumRegimeNullableFilter<$PrismaModel>
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

  export type FeasibilityScoreScalarRelationFilter = {
    is?: FeasibilityScoreWhereInput
    isNot?: FeasibilityScoreWhereInput
  }

  export type OutcomeCountOrderByAggregateInput = {
    id?: SortOrder
    keywordId?: SortOrder
    scoreId?: SortOrder
    actualResult?: SortOrder
    monthsElapsed?: SortOrder
    trafficAchieved?: SortOrder
    notes?: SortOrder
    reportedAt?: SortOrder
  }

  export type OutcomeAvgOrderByAggregateInput = {
    id?: SortOrder
    keywordId?: SortOrder
    scoreId?: SortOrder
    monthsElapsed?: SortOrder
    trafficAchieved?: SortOrder
  }

  export type OutcomeMaxOrderByAggregateInput = {
    id?: SortOrder
    keywordId?: SortOrder
    scoreId?: SortOrder
    actualResult?: SortOrder
    monthsElapsed?: SortOrder
    trafficAchieved?: SortOrder
    notes?: SortOrder
    reportedAt?: SortOrder
  }

  export type OutcomeMinOrderByAggregateInput = {
    id?: SortOrder
    keywordId?: SortOrder
    scoreId?: SortOrder
    actualResult?: SortOrder
    monthsElapsed?: SortOrder
    trafficAchieved?: SortOrder
    notes?: SortOrder
    reportedAt?: SortOrder
  }

  export type OutcomeSumOrderByAggregateInput = {
    id?: SortOrder
    keywordId?: SortOrder
    scoreId?: SortOrder
    monthsElapsed?: SortOrder
    trafficAchieved?: SortOrder
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type SeoPageCountOrderByAggregateInput = {
    id?: SortOrder
    keywordId?: SortOrder
    pageType?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    metaDescription?: SortOrder
    lastGenerated?: SortOrder
    indexed?: SortOrder
  }

  export type SeoPageAvgOrderByAggregateInput = {
    id?: SortOrder
    keywordId?: SortOrder
  }

  export type SeoPageMaxOrderByAggregateInput = {
    id?: SortOrder
    keywordId?: SortOrder
    pageType?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    metaDescription?: SortOrder
    lastGenerated?: SortOrder
    indexed?: SortOrder
  }

  export type SeoPageMinOrderByAggregateInput = {
    id?: SortOrder
    keywordId?: SortOrder
    pageType?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    metaDescription?: SortOrder
    lastGenerated?: SortOrder
    indexed?: SortOrder
  }

  export type SeoPageSumOrderByAggregateInput = {
    id?: SortOrder
    keywordId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DemandSignalCreateNestedManyWithoutKeywordInput = {
    create?: XOR<DemandSignalCreateWithoutKeywordInput, DemandSignalUncheckedCreateWithoutKeywordInput> | DemandSignalCreateWithoutKeywordInput[] | DemandSignalUncheckedCreateWithoutKeywordInput[]
    connectOrCreate?: DemandSignalCreateOrConnectWithoutKeywordInput | DemandSignalCreateOrConnectWithoutKeywordInput[]
    createMany?: DemandSignalCreateManyKeywordInputEnvelope
    connect?: DemandSignalWhereUniqueInput | DemandSignalWhereUniqueInput[]
  }

  export type CompetitionSignalCreateNestedManyWithoutKeywordInput = {
    create?: XOR<CompetitionSignalCreateWithoutKeywordInput, CompetitionSignalUncheckedCreateWithoutKeywordInput> | CompetitionSignalCreateWithoutKeywordInput[] | CompetitionSignalUncheckedCreateWithoutKeywordInput[]
    connectOrCreate?: CompetitionSignalCreateOrConnectWithoutKeywordInput | CompetitionSignalCreateOrConnectWithoutKeywordInput[]
    createMany?: CompetitionSignalCreateManyKeywordInputEnvelope
    connect?: CompetitionSignalWhereUniqueInput | CompetitionSignalWhereUniqueInput[]
  }

  export type TrendSignalCreateNestedManyWithoutKeywordInput = {
    create?: XOR<TrendSignalCreateWithoutKeywordInput, TrendSignalUncheckedCreateWithoutKeywordInput> | TrendSignalCreateWithoutKeywordInput[] | TrendSignalUncheckedCreateWithoutKeywordInput[]
    connectOrCreate?: TrendSignalCreateOrConnectWithoutKeywordInput | TrendSignalCreateOrConnectWithoutKeywordInput[]
    createMany?: TrendSignalCreateManyKeywordInputEnvelope
    connect?: TrendSignalWhereUniqueInput | TrendSignalWhereUniqueInput[]
  }

  export type FeasibilityScoreCreateNestedManyWithoutKeywordInput = {
    create?: XOR<FeasibilityScoreCreateWithoutKeywordInput, FeasibilityScoreUncheckedCreateWithoutKeywordInput> | FeasibilityScoreCreateWithoutKeywordInput[] | FeasibilityScoreUncheckedCreateWithoutKeywordInput[]
    connectOrCreate?: FeasibilityScoreCreateOrConnectWithoutKeywordInput | FeasibilityScoreCreateOrConnectWithoutKeywordInput[]
    createMany?: FeasibilityScoreCreateManyKeywordInputEnvelope
    connect?: FeasibilityScoreWhereUniqueInput | FeasibilityScoreWhereUniqueInput[]
  }

  export type OutcomeCreateNestedManyWithoutKeywordInput = {
    create?: XOR<OutcomeCreateWithoutKeywordInput, OutcomeUncheckedCreateWithoutKeywordInput> | OutcomeCreateWithoutKeywordInput[] | OutcomeUncheckedCreateWithoutKeywordInput[]
    connectOrCreate?: OutcomeCreateOrConnectWithoutKeywordInput | OutcomeCreateOrConnectWithoutKeywordInput[]
    createMany?: OutcomeCreateManyKeywordInputEnvelope
    connect?: OutcomeWhereUniqueInput | OutcomeWhereUniqueInput[]
  }

  export type SeoPageCreateNestedManyWithoutKeywordInput = {
    create?: XOR<SeoPageCreateWithoutKeywordInput, SeoPageUncheckedCreateWithoutKeywordInput> | SeoPageCreateWithoutKeywordInput[] | SeoPageUncheckedCreateWithoutKeywordInput[]
    connectOrCreate?: SeoPageCreateOrConnectWithoutKeywordInput | SeoPageCreateOrConnectWithoutKeywordInput[]
    createMany?: SeoPageCreateManyKeywordInputEnvelope
    connect?: SeoPageWhereUniqueInput | SeoPageWhereUniqueInput[]
  }

  export type DemandSignalUncheckedCreateNestedManyWithoutKeywordInput = {
    create?: XOR<DemandSignalCreateWithoutKeywordInput, DemandSignalUncheckedCreateWithoutKeywordInput> | DemandSignalCreateWithoutKeywordInput[] | DemandSignalUncheckedCreateWithoutKeywordInput[]
    connectOrCreate?: DemandSignalCreateOrConnectWithoutKeywordInput | DemandSignalCreateOrConnectWithoutKeywordInput[]
    createMany?: DemandSignalCreateManyKeywordInputEnvelope
    connect?: DemandSignalWhereUniqueInput | DemandSignalWhereUniqueInput[]
  }

  export type CompetitionSignalUncheckedCreateNestedManyWithoutKeywordInput = {
    create?: XOR<CompetitionSignalCreateWithoutKeywordInput, CompetitionSignalUncheckedCreateWithoutKeywordInput> | CompetitionSignalCreateWithoutKeywordInput[] | CompetitionSignalUncheckedCreateWithoutKeywordInput[]
    connectOrCreate?: CompetitionSignalCreateOrConnectWithoutKeywordInput | CompetitionSignalCreateOrConnectWithoutKeywordInput[]
    createMany?: CompetitionSignalCreateManyKeywordInputEnvelope
    connect?: CompetitionSignalWhereUniqueInput | CompetitionSignalWhereUniqueInput[]
  }

  export type TrendSignalUncheckedCreateNestedManyWithoutKeywordInput = {
    create?: XOR<TrendSignalCreateWithoutKeywordInput, TrendSignalUncheckedCreateWithoutKeywordInput> | TrendSignalCreateWithoutKeywordInput[] | TrendSignalUncheckedCreateWithoutKeywordInput[]
    connectOrCreate?: TrendSignalCreateOrConnectWithoutKeywordInput | TrendSignalCreateOrConnectWithoutKeywordInput[]
    createMany?: TrendSignalCreateManyKeywordInputEnvelope
    connect?: TrendSignalWhereUniqueInput | TrendSignalWhereUniqueInput[]
  }

  export type FeasibilityScoreUncheckedCreateNestedManyWithoutKeywordInput = {
    create?: XOR<FeasibilityScoreCreateWithoutKeywordInput, FeasibilityScoreUncheckedCreateWithoutKeywordInput> | FeasibilityScoreCreateWithoutKeywordInput[] | FeasibilityScoreUncheckedCreateWithoutKeywordInput[]
    connectOrCreate?: FeasibilityScoreCreateOrConnectWithoutKeywordInput | FeasibilityScoreCreateOrConnectWithoutKeywordInput[]
    createMany?: FeasibilityScoreCreateManyKeywordInputEnvelope
    connect?: FeasibilityScoreWhereUniqueInput | FeasibilityScoreWhereUniqueInput[]
  }

  export type OutcomeUncheckedCreateNestedManyWithoutKeywordInput = {
    create?: XOR<OutcomeCreateWithoutKeywordInput, OutcomeUncheckedCreateWithoutKeywordInput> | OutcomeCreateWithoutKeywordInput[] | OutcomeUncheckedCreateWithoutKeywordInput[]
    connectOrCreate?: OutcomeCreateOrConnectWithoutKeywordInput | OutcomeCreateOrConnectWithoutKeywordInput[]
    createMany?: OutcomeCreateManyKeywordInputEnvelope
    connect?: OutcomeWhereUniqueInput | OutcomeWhereUniqueInput[]
  }

  export type SeoPageUncheckedCreateNestedManyWithoutKeywordInput = {
    create?: XOR<SeoPageCreateWithoutKeywordInput, SeoPageUncheckedCreateWithoutKeywordInput> | SeoPageCreateWithoutKeywordInput[] | SeoPageUncheckedCreateWithoutKeywordInput[]
    connectOrCreate?: SeoPageCreateOrConnectWithoutKeywordInput | SeoPageCreateOrConnectWithoutKeywordInput[]
    createMany?: SeoPageCreateManyKeywordInputEnvelope
    connect?: SeoPageWhereUniqueInput | SeoPageWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableEnumDomainFieldUpdateOperationsInput = {
    set?: $Enums.Domain | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DemandSignalUpdateManyWithoutKeywordNestedInput = {
    create?: XOR<DemandSignalCreateWithoutKeywordInput, DemandSignalUncheckedCreateWithoutKeywordInput> | DemandSignalCreateWithoutKeywordInput[] | DemandSignalUncheckedCreateWithoutKeywordInput[]
    connectOrCreate?: DemandSignalCreateOrConnectWithoutKeywordInput | DemandSignalCreateOrConnectWithoutKeywordInput[]
    upsert?: DemandSignalUpsertWithWhereUniqueWithoutKeywordInput | DemandSignalUpsertWithWhereUniqueWithoutKeywordInput[]
    createMany?: DemandSignalCreateManyKeywordInputEnvelope
    set?: DemandSignalWhereUniqueInput | DemandSignalWhereUniqueInput[]
    disconnect?: DemandSignalWhereUniqueInput | DemandSignalWhereUniqueInput[]
    delete?: DemandSignalWhereUniqueInput | DemandSignalWhereUniqueInput[]
    connect?: DemandSignalWhereUniqueInput | DemandSignalWhereUniqueInput[]
    update?: DemandSignalUpdateWithWhereUniqueWithoutKeywordInput | DemandSignalUpdateWithWhereUniqueWithoutKeywordInput[]
    updateMany?: DemandSignalUpdateManyWithWhereWithoutKeywordInput | DemandSignalUpdateManyWithWhereWithoutKeywordInput[]
    deleteMany?: DemandSignalScalarWhereInput | DemandSignalScalarWhereInput[]
  }

  export type CompetitionSignalUpdateManyWithoutKeywordNestedInput = {
    create?: XOR<CompetitionSignalCreateWithoutKeywordInput, CompetitionSignalUncheckedCreateWithoutKeywordInput> | CompetitionSignalCreateWithoutKeywordInput[] | CompetitionSignalUncheckedCreateWithoutKeywordInput[]
    connectOrCreate?: CompetitionSignalCreateOrConnectWithoutKeywordInput | CompetitionSignalCreateOrConnectWithoutKeywordInput[]
    upsert?: CompetitionSignalUpsertWithWhereUniqueWithoutKeywordInput | CompetitionSignalUpsertWithWhereUniqueWithoutKeywordInput[]
    createMany?: CompetitionSignalCreateManyKeywordInputEnvelope
    set?: CompetitionSignalWhereUniqueInput | CompetitionSignalWhereUniqueInput[]
    disconnect?: CompetitionSignalWhereUniqueInput | CompetitionSignalWhereUniqueInput[]
    delete?: CompetitionSignalWhereUniqueInput | CompetitionSignalWhereUniqueInput[]
    connect?: CompetitionSignalWhereUniqueInput | CompetitionSignalWhereUniqueInput[]
    update?: CompetitionSignalUpdateWithWhereUniqueWithoutKeywordInput | CompetitionSignalUpdateWithWhereUniqueWithoutKeywordInput[]
    updateMany?: CompetitionSignalUpdateManyWithWhereWithoutKeywordInput | CompetitionSignalUpdateManyWithWhereWithoutKeywordInput[]
    deleteMany?: CompetitionSignalScalarWhereInput | CompetitionSignalScalarWhereInput[]
  }

  export type TrendSignalUpdateManyWithoutKeywordNestedInput = {
    create?: XOR<TrendSignalCreateWithoutKeywordInput, TrendSignalUncheckedCreateWithoutKeywordInput> | TrendSignalCreateWithoutKeywordInput[] | TrendSignalUncheckedCreateWithoutKeywordInput[]
    connectOrCreate?: TrendSignalCreateOrConnectWithoutKeywordInput | TrendSignalCreateOrConnectWithoutKeywordInput[]
    upsert?: TrendSignalUpsertWithWhereUniqueWithoutKeywordInput | TrendSignalUpsertWithWhereUniqueWithoutKeywordInput[]
    createMany?: TrendSignalCreateManyKeywordInputEnvelope
    set?: TrendSignalWhereUniqueInput | TrendSignalWhereUniqueInput[]
    disconnect?: TrendSignalWhereUniqueInput | TrendSignalWhereUniqueInput[]
    delete?: TrendSignalWhereUniqueInput | TrendSignalWhereUniqueInput[]
    connect?: TrendSignalWhereUniqueInput | TrendSignalWhereUniqueInput[]
    update?: TrendSignalUpdateWithWhereUniqueWithoutKeywordInput | TrendSignalUpdateWithWhereUniqueWithoutKeywordInput[]
    updateMany?: TrendSignalUpdateManyWithWhereWithoutKeywordInput | TrendSignalUpdateManyWithWhereWithoutKeywordInput[]
    deleteMany?: TrendSignalScalarWhereInput | TrendSignalScalarWhereInput[]
  }

  export type FeasibilityScoreUpdateManyWithoutKeywordNestedInput = {
    create?: XOR<FeasibilityScoreCreateWithoutKeywordInput, FeasibilityScoreUncheckedCreateWithoutKeywordInput> | FeasibilityScoreCreateWithoutKeywordInput[] | FeasibilityScoreUncheckedCreateWithoutKeywordInput[]
    connectOrCreate?: FeasibilityScoreCreateOrConnectWithoutKeywordInput | FeasibilityScoreCreateOrConnectWithoutKeywordInput[]
    upsert?: FeasibilityScoreUpsertWithWhereUniqueWithoutKeywordInput | FeasibilityScoreUpsertWithWhereUniqueWithoutKeywordInput[]
    createMany?: FeasibilityScoreCreateManyKeywordInputEnvelope
    set?: FeasibilityScoreWhereUniqueInput | FeasibilityScoreWhereUniqueInput[]
    disconnect?: FeasibilityScoreWhereUniqueInput | FeasibilityScoreWhereUniqueInput[]
    delete?: FeasibilityScoreWhereUniqueInput | FeasibilityScoreWhereUniqueInput[]
    connect?: FeasibilityScoreWhereUniqueInput | FeasibilityScoreWhereUniqueInput[]
    update?: FeasibilityScoreUpdateWithWhereUniqueWithoutKeywordInput | FeasibilityScoreUpdateWithWhereUniqueWithoutKeywordInput[]
    updateMany?: FeasibilityScoreUpdateManyWithWhereWithoutKeywordInput | FeasibilityScoreUpdateManyWithWhereWithoutKeywordInput[]
    deleteMany?: FeasibilityScoreScalarWhereInput | FeasibilityScoreScalarWhereInput[]
  }

  export type OutcomeUpdateManyWithoutKeywordNestedInput = {
    create?: XOR<OutcomeCreateWithoutKeywordInput, OutcomeUncheckedCreateWithoutKeywordInput> | OutcomeCreateWithoutKeywordInput[] | OutcomeUncheckedCreateWithoutKeywordInput[]
    connectOrCreate?: OutcomeCreateOrConnectWithoutKeywordInput | OutcomeCreateOrConnectWithoutKeywordInput[]
    upsert?: OutcomeUpsertWithWhereUniqueWithoutKeywordInput | OutcomeUpsertWithWhereUniqueWithoutKeywordInput[]
    createMany?: OutcomeCreateManyKeywordInputEnvelope
    set?: OutcomeWhereUniqueInput | OutcomeWhereUniqueInput[]
    disconnect?: OutcomeWhereUniqueInput | OutcomeWhereUniqueInput[]
    delete?: OutcomeWhereUniqueInput | OutcomeWhereUniqueInput[]
    connect?: OutcomeWhereUniqueInput | OutcomeWhereUniqueInput[]
    update?: OutcomeUpdateWithWhereUniqueWithoutKeywordInput | OutcomeUpdateWithWhereUniqueWithoutKeywordInput[]
    updateMany?: OutcomeUpdateManyWithWhereWithoutKeywordInput | OutcomeUpdateManyWithWhereWithoutKeywordInput[]
    deleteMany?: OutcomeScalarWhereInput | OutcomeScalarWhereInput[]
  }

  export type SeoPageUpdateManyWithoutKeywordNestedInput = {
    create?: XOR<SeoPageCreateWithoutKeywordInput, SeoPageUncheckedCreateWithoutKeywordInput> | SeoPageCreateWithoutKeywordInput[] | SeoPageUncheckedCreateWithoutKeywordInput[]
    connectOrCreate?: SeoPageCreateOrConnectWithoutKeywordInput | SeoPageCreateOrConnectWithoutKeywordInput[]
    upsert?: SeoPageUpsertWithWhereUniqueWithoutKeywordInput | SeoPageUpsertWithWhereUniqueWithoutKeywordInput[]
    createMany?: SeoPageCreateManyKeywordInputEnvelope
    set?: SeoPageWhereUniqueInput | SeoPageWhereUniqueInput[]
    disconnect?: SeoPageWhereUniqueInput | SeoPageWhereUniqueInput[]
    delete?: SeoPageWhereUniqueInput | SeoPageWhereUniqueInput[]
    connect?: SeoPageWhereUniqueInput | SeoPageWhereUniqueInput[]
    update?: SeoPageUpdateWithWhereUniqueWithoutKeywordInput | SeoPageUpdateWithWhereUniqueWithoutKeywordInput[]
    updateMany?: SeoPageUpdateManyWithWhereWithoutKeywordInput | SeoPageUpdateManyWithWhereWithoutKeywordInput[]
    deleteMany?: SeoPageScalarWhereInput | SeoPageScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DemandSignalUncheckedUpdateManyWithoutKeywordNestedInput = {
    create?: XOR<DemandSignalCreateWithoutKeywordInput, DemandSignalUncheckedCreateWithoutKeywordInput> | DemandSignalCreateWithoutKeywordInput[] | DemandSignalUncheckedCreateWithoutKeywordInput[]
    connectOrCreate?: DemandSignalCreateOrConnectWithoutKeywordInput | DemandSignalCreateOrConnectWithoutKeywordInput[]
    upsert?: DemandSignalUpsertWithWhereUniqueWithoutKeywordInput | DemandSignalUpsertWithWhereUniqueWithoutKeywordInput[]
    createMany?: DemandSignalCreateManyKeywordInputEnvelope
    set?: DemandSignalWhereUniqueInput | DemandSignalWhereUniqueInput[]
    disconnect?: DemandSignalWhereUniqueInput | DemandSignalWhereUniqueInput[]
    delete?: DemandSignalWhereUniqueInput | DemandSignalWhereUniqueInput[]
    connect?: DemandSignalWhereUniqueInput | DemandSignalWhereUniqueInput[]
    update?: DemandSignalUpdateWithWhereUniqueWithoutKeywordInput | DemandSignalUpdateWithWhereUniqueWithoutKeywordInput[]
    updateMany?: DemandSignalUpdateManyWithWhereWithoutKeywordInput | DemandSignalUpdateManyWithWhereWithoutKeywordInput[]
    deleteMany?: DemandSignalScalarWhereInput | DemandSignalScalarWhereInput[]
  }

  export type CompetitionSignalUncheckedUpdateManyWithoutKeywordNestedInput = {
    create?: XOR<CompetitionSignalCreateWithoutKeywordInput, CompetitionSignalUncheckedCreateWithoutKeywordInput> | CompetitionSignalCreateWithoutKeywordInput[] | CompetitionSignalUncheckedCreateWithoutKeywordInput[]
    connectOrCreate?: CompetitionSignalCreateOrConnectWithoutKeywordInput | CompetitionSignalCreateOrConnectWithoutKeywordInput[]
    upsert?: CompetitionSignalUpsertWithWhereUniqueWithoutKeywordInput | CompetitionSignalUpsertWithWhereUniqueWithoutKeywordInput[]
    createMany?: CompetitionSignalCreateManyKeywordInputEnvelope
    set?: CompetitionSignalWhereUniqueInput | CompetitionSignalWhereUniqueInput[]
    disconnect?: CompetitionSignalWhereUniqueInput | CompetitionSignalWhereUniqueInput[]
    delete?: CompetitionSignalWhereUniqueInput | CompetitionSignalWhereUniqueInput[]
    connect?: CompetitionSignalWhereUniqueInput | CompetitionSignalWhereUniqueInput[]
    update?: CompetitionSignalUpdateWithWhereUniqueWithoutKeywordInput | CompetitionSignalUpdateWithWhereUniqueWithoutKeywordInput[]
    updateMany?: CompetitionSignalUpdateManyWithWhereWithoutKeywordInput | CompetitionSignalUpdateManyWithWhereWithoutKeywordInput[]
    deleteMany?: CompetitionSignalScalarWhereInput | CompetitionSignalScalarWhereInput[]
  }

  export type TrendSignalUncheckedUpdateManyWithoutKeywordNestedInput = {
    create?: XOR<TrendSignalCreateWithoutKeywordInput, TrendSignalUncheckedCreateWithoutKeywordInput> | TrendSignalCreateWithoutKeywordInput[] | TrendSignalUncheckedCreateWithoutKeywordInput[]
    connectOrCreate?: TrendSignalCreateOrConnectWithoutKeywordInput | TrendSignalCreateOrConnectWithoutKeywordInput[]
    upsert?: TrendSignalUpsertWithWhereUniqueWithoutKeywordInput | TrendSignalUpsertWithWhereUniqueWithoutKeywordInput[]
    createMany?: TrendSignalCreateManyKeywordInputEnvelope
    set?: TrendSignalWhereUniqueInput | TrendSignalWhereUniqueInput[]
    disconnect?: TrendSignalWhereUniqueInput | TrendSignalWhereUniqueInput[]
    delete?: TrendSignalWhereUniqueInput | TrendSignalWhereUniqueInput[]
    connect?: TrendSignalWhereUniqueInput | TrendSignalWhereUniqueInput[]
    update?: TrendSignalUpdateWithWhereUniqueWithoutKeywordInput | TrendSignalUpdateWithWhereUniqueWithoutKeywordInput[]
    updateMany?: TrendSignalUpdateManyWithWhereWithoutKeywordInput | TrendSignalUpdateManyWithWhereWithoutKeywordInput[]
    deleteMany?: TrendSignalScalarWhereInput | TrendSignalScalarWhereInput[]
  }

  export type FeasibilityScoreUncheckedUpdateManyWithoutKeywordNestedInput = {
    create?: XOR<FeasibilityScoreCreateWithoutKeywordInput, FeasibilityScoreUncheckedCreateWithoutKeywordInput> | FeasibilityScoreCreateWithoutKeywordInput[] | FeasibilityScoreUncheckedCreateWithoutKeywordInput[]
    connectOrCreate?: FeasibilityScoreCreateOrConnectWithoutKeywordInput | FeasibilityScoreCreateOrConnectWithoutKeywordInput[]
    upsert?: FeasibilityScoreUpsertWithWhereUniqueWithoutKeywordInput | FeasibilityScoreUpsertWithWhereUniqueWithoutKeywordInput[]
    createMany?: FeasibilityScoreCreateManyKeywordInputEnvelope
    set?: FeasibilityScoreWhereUniqueInput | FeasibilityScoreWhereUniqueInput[]
    disconnect?: FeasibilityScoreWhereUniqueInput | FeasibilityScoreWhereUniqueInput[]
    delete?: FeasibilityScoreWhereUniqueInput | FeasibilityScoreWhereUniqueInput[]
    connect?: FeasibilityScoreWhereUniqueInput | FeasibilityScoreWhereUniqueInput[]
    update?: FeasibilityScoreUpdateWithWhereUniqueWithoutKeywordInput | FeasibilityScoreUpdateWithWhereUniqueWithoutKeywordInput[]
    updateMany?: FeasibilityScoreUpdateManyWithWhereWithoutKeywordInput | FeasibilityScoreUpdateManyWithWhereWithoutKeywordInput[]
    deleteMany?: FeasibilityScoreScalarWhereInput | FeasibilityScoreScalarWhereInput[]
  }

  export type OutcomeUncheckedUpdateManyWithoutKeywordNestedInput = {
    create?: XOR<OutcomeCreateWithoutKeywordInput, OutcomeUncheckedCreateWithoutKeywordInput> | OutcomeCreateWithoutKeywordInput[] | OutcomeUncheckedCreateWithoutKeywordInput[]
    connectOrCreate?: OutcomeCreateOrConnectWithoutKeywordInput | OutcomeCreateOrConnectWithoutKeywordInput[]
    upsert?: OutcomeUpsertWithWhereUniqueWithoutKeywordInput | OutcomeUpsertWithWhereUniqueWithoutKeywordInput[]
    createMany?: OutcomeCreateManyKeywordInputEnvelope
    set?: OutcomeWhereUniqueInput | OutcomeWhereUniqueInput[]
    disconnect?: OutcomeWhereUniqueInput | OutcomeWhereUniqueInput[]
    delete?: OutcomeWhereUniqueInput | OutcomeWhereUniqueInput[]
    connect?: OutcomeWhereUniqueInput | OutcomeWhereUniqueInput[]
    update?: OutcomeUpdateWithWhereUniqueWithoutKeywordInput | OutcomeUpdateWithWhereUniqueWithoutKeywordInput[]
    updateMany?: OutcomeUpdateManyWithWhereWithoutKeywordInput | OutcomeUpdateManyWithWhereWithoutKeywordInput[]
    deleteMany?: OutcomeScalarWhereInput | OutcomeScalarWhereInput[]
  }

  export type SeoPageUncheckedUpdateManyWithoutKeywordNestedInput = {
    create?: XOR<SeoPageCreateWithoutKeywordInput, SeoPageUncheckedCreateWithoutKeywordInput> | SeoPageCreateWithoutKeywordInput[] | SeoPageUncheckedCreateWithoutKeywordInput[]
    connectOrCreate?: SeoPageCreateOrConnectWithoutKeywordInput | SeoPageCreateOrConnectWithoutKeywordInput[]
    upsert?: SeoPageUpsertWithWhereUniqueWithoutKeywordInput | SeoPageUpsertWithWhereUniqueWithoutKeywordInput[]
    createMany?: SeoPageCreateManyKeywordInputEnvelope
    set?: SeoPageWhereUniqueInput | SeoPageWhereUniqueInput[]
    disconnect?: SeoPageWhereUniqueInput | SeoPageWhereUniqueInput[]
    delete?: SeoPageWhereUniqueInput | SeoPageWhereUniqueInput[]
    connect?: SeoPageWhereUniqueInput | SeoPageWhereUniqueInput[]
    update?: SeoPageUpdateWithWhereUniqueWithoutKeywordInput | SeoPageUpdateWithWhereUniqueWithoutKeywordInput[]
    updateMany?: SeoPageUpdateManyWithWhereWithoutKeywordInput | SeoPageUpdateManyWithWhereWithoutKeywordInput[]
    deleteMany?: SeoPageScalarWhereInput | SeoPageScalarWhereInput[]
  }

  export type KeywordCreateNestedOneWithoutDemandSignalsInput = {
    create?: XOR<KeywordCreateWithoutDemandSignalsInput, KeywordUncheckedCreateWithoutDemandSignalsInput>
    connectOrCreate?: KeywordCreateOrConnectWithoutDemandSignalsInput
    connect?: KeywordWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type KeywordUpdateOneRequiredWithoutDemandSignalsNestedInput = {
    create?: XOR<KeywordCreateWithoutDemandSignalsInput, KeywordUncheckedCreateWithoutDemandSignalsInput>
    connectOrCreate?: KeywordCreateOrConnectWithoutDemandSignalsInput
    upsert?: KeywordUpsertWithoutDemandSignalsInput
    connect?: KeywordWhereUniqueInput
    update?: XOR<XOR<KeywordUpdateToOneWithWhereWithoutDemandSignalsInput, KeywordUpdateWithoutDemandSignalsInput>, KeywordUncheckedUpdateWithoutDemandSignalsInput>
  }

  export type KeywordCreateNestedOneWithoutCompetitionSignalsInput = {
    create?: XOR<KeywordCreateWithoutCompetitionSignalsInput, KeywordUncheckedCreateWithoutCompetitionSignalsInput>
    connectOrCreate?: KeywordCreateOrConnectWithoutCompetitionSignalsInput
    connect?: KeywordWhereUniqueInput
  }

  export type NullableBigIntFieldUpdateOperationsInput = {
    set?: bigint | number | null
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type KeywordUpdateOneRequiredWithoutCompetitionSignalsNestedInput = {
    create?: XOR<KeywordCreateWithoutCompetitionSignalsInput, KeywordUncheckedCreateWithoutCompetitionSignalsInput>
    connectOrCreate?: KeywordCreateOrConnectWithoutCompetitionSignalsInput
    upsert?: KeywordUpsertWithoutCompetitionSignalsInput
    connect?: KeywordWhereUniqueInput
    update?: XOR<XOR<KeywordUpdateToOneWithWhereWithoutCompetitionSignalsInput, KeywordUpdateWithoutCompetitionSignalsInput>, KeywordUncheckedUpdateWithoutCompetitionSignalsInput>
  }

  export type KeywordCreateNestedOneWithoutTrendSignalsInput = {
    create?: XOR<KeywordCreateWithoutTrendSignalsInput, KeywordUncheckedCreateWithoutTrendSignalsInput>
    connectOrCreate?: KeywordCreateOrConnectWithoutTrendSignalsInput
    connect?: KeywordWhereUniqueInput
  }

  export type KeywordUpdateOneRequiredWithoutTrendSignalsNestedInput = {
    create?: XOR<KeywordCreateWithoutTrendSignalsInput, KeywordUncheckedCreateWithoutTrendSignalsInput>
    connectOrCreate?: KeywordCreateOrConnectWithoutTrendSignalsInput
    upsert?: KeywordUpsertWithoutTrendSignalsInput
    connect?: KeywordWhereUniqueInput
    update?: XOR<XOR<KeywordUpdateToOneWithWhereWithoutTrendSignalsInput, KeywordUpdateWithoutTrendSignalsInput>, KeywordUncheckedUpdateWithoutTrendSignalsInput>
  }

  export type KeywordCreateNestedOneWithoutFeasibilityScoresInput = {
    create?: XOR<KeywordCreateWithoutFeasibilityScoresInput, KeywordUncheckedCreateWithoutFeasibilityScoresInput>
    connectOrCreate?: KeywordCreateOrConnectWithoutFeasibilityScoresInput
    connect?: KeywordWhereUniqueInput
  }

  export type OutcomeCreateNestedManyWithoutScoreInput = {
    create?: XOR<OutcomeCreateWithoutScoreInput, OutcomeUncheckedCreateWithoutScoreInput> | OutcomeCreateWithoutScoreInput[] | OutcomeUncheckedCreateWithoutScoreInput[]
    connectOrCreate?: OutcomeCreateOrConnectWithoutScoreInput | OutcomeCreateOrConnectWithoutScoreInput[]
    createMany?: OutcomeCreateManyScoreInputEnvelope
    connect?: OutcomeWhereUniqueInput | OutcomeWhereUniqueInput[]
  }

  export type OutcomeUncheckedCreateNestedManyWithoutScoreInput = {
    create?: XOR<OutcomeCreateWithoutScoreInput, OutcomeUncheckedCreateWithoutScoreInput> | OutcomeCreateWithoutScoreInput[] | OutcomeUncheckedCreateWithoutScoreInput[]
    connectOrCreate?: OutcomeCreateOrConnectWithoutScoreInput | OutcomeCreateOrConnectWithoutScoreInput[]
    createMany?: OutcomeCreateManyScoreInputEnvelope
    connect?: OutcomeWhereUniqueInput | OutcomeWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumDifficultyFieldUpdateOperationsInput = {
    set?: $Enums.Difficulty
  }

  export type NullableEnumRegimeFieldUpdateOperationsInput = {
    set?: $Enums.Regime | null
  }

  export type KeywordUpdateOneRequiredWithoutFeasibilityScoresNestedInput = {
    create?: XOR<KeywordCreateWithoutFeasibilityScoresInput, KeywordUncheckedCreateWithoutFeasibilityScoresInput>
    connectOrCreate?: KeywordCreateOrConnectWithoutFeasibilityScoresInput
    upsert?: KeywordUpsertWithoutFeasibilityScoresInput
    connect?: KeywordWhereUniqueInput
    update?: XOR<XOR<KeywordUpdateToOneWithWhereWithoutFeasibilityScoresInput, KeywordUpdateWithoutFeasibilityScoresInput>, KeywordUncheckedUpdateWithoutFeasibilityScoresInput>
  }

  export type OutcomeUpdateManyWithoutScoreNestedInput = {
    create?: XOR<OutcomeCreateWithoutScoreInput, OutcomeUncheckedCreateWithoutScoreInput> | OutcomeCreateWithoutScoreInput[] | OutcomeUncheckedCreateWithoutScoreInput[]
    connectOrCreate?: OutcomeCreateOrConnectWithoutScoreInput | OutcomeCreateOrConnectWithoutScoreInput[]
    upsert?: OutcomeUpsertWithWhereUniqueWithoutScoreInput | OutcomeUpsertWithWhereUniqueWithoutScoreInput[]
    createMany?: OutcomeCreateManyScoreInputEnvelope
    set?: OutcomeWhereUniqueInput | OutcomeWhereUniqueInput[]
    disconnect?: OutcomeWhereUniqueInput | OutcomeWhereUniqueInput[]
    delete?: OutcomeWhereUniqueInput | OutcomeWhereUniqueInput[]
    connect?: OutcomeWhereUniqueInput | OutcomeWhereUniqueInput[]
    update?: OutcomeUpdateWithWhereUniqueWithoutScoreInput | OutcomeUpdateWithWhereUniqueWithoutScoreInput[]
    updateMany?: OutcomeUpdateManyWithWhereWithoutScoreInput | OutcomeUpdateManyWithWhereWithoutScoreInput[]
    deleteMany?: OutcomeScalarWhereInput | OutcomeScalarWhereInput[]
  }

  export type OutcomeUncheckedUpdateManyWithoutScoreNestedInput = {
    create?: XOR<OutcomeCreateWithoutScoreInput, OutcomeUncheckedCreateWithoutScoreInput> | OutcomeCreateWithoutScoreInput[] | OutcomeUncheckedCreateWithoutScoreInput[]
    connectOrCreate?: OutcomeCreateOrConnectWithoutScoreInput | OutcomeCreateOrConnectWithoutScoreInput[]
    upsert?: OutcomeUpsertWithWhereUniqueWithoutScoreInput | OutcomeUpsertWithWhereUniqueWithoutScoreInput[]
    createMany?: OutcomeCreateManyScoreInputEnvelope
    set?: OutcomeWhereUniqueInput | OutcomeWhereUniqueInput[]
    disconnect?: OutcomeWhereUniqueInput | OutcomeWhereUniqueInput[]
    delete?: OutcomeWhereUniqueInput | OutcomeWhereUniqueInput[]
    connect?: OutcomeWhereUniqueInput | OutcomeWhereUniqueInput[]
    update?: OutcomeUpdateWithWhereUniqueWithoutScoreInput | OutcomeUpdateWithWhereUniqueWithoutScoreInput[]
    updateMany?: OutcomeUpdateManyWithWhereWithoutScoreInput | OutcomeUpdateManyWithWhereWithoutScoreInput[]
    deleteMany?: OutcomeScalarWhereInput | OutcomeScalarWhereInput[]
  }

  export type KeywordCreateNestedOneWithoutOutcomesInput = {
    create?: XOR<KeywordCreateWithoutOutcomesInput, KeywordUncheckedCreateWithoutOutcomesInput>
    connectOrCreate?: KeywordCreateOrConnectWithoutOutcomesInput
    connect?: KeywordWhereUniqueInput
  }

  export type FeasibilityScoreCreateNestedOneWithoutOutcomesInput = {
    create?: XOR<FeasibilityScoreCreateWithoutOutcomesInput, FeasibilityScoreUncheckedCreateWithoutOutcomesInput>
    connectOrCreate?: FeasibilityScoreCreateOrConnectWithoutOutcomesInput
    connect?: FeasibilityScoreWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type KeywordUpdateOneRequiredWithoutOutcomesNestedInput = {
    create?: XOR<KeywordCreateWithoutOutcomesInput, KeywordUncheckedCreateWithoutOutcomesInput>
    connectOrCreate?: KeywordCreateOrConnectWithoutOutcomesInput
    upsert?: KeywordUpsertWithoutOutcomesInput
    connect?: KeywordWhereUniqueInput
    update?: XOR<XOR<KeywordUpdateToOneWithWhereWithoutOutcomesInput, KeywordUpdateWithoutOutcomesInput>, KeywordUncheckedUpdateWithoutOutcomesInput>
  }

  export type FeasibilityScoreUpdateOneRequiredWithoutOutcomesNestedInput = {
    create?: XOR<FeasibilityScoreCreateWithoutOutcomesInput, FeasibilityScoreUncheckedCreateWithoutOutcomesInput>
    connectOrCreate?: FeasibilityScoreCreateOrConnectWithoutOutcomesInput
    upsert?: FeasibilityScoreUpsertWithoutOutcomesInput
    connect?: FeasibilityScoreWhereUniqueInput
    update?: XOR<XOR<FeasibilityScoreUpdateToOneWithWhereWithoutOutcomesInput, FeasibilityScoreUpdateWithoutOutcomesInput>, FeasibilityScoreUncheckedUpdateWithoutOutcomesInput>
  }

  export type KeywordCreateNestedOneWithoutSeoPagesInput = {
    create?: XOR<KeywordCreateWithoutSeoPagesInput, KeywordUncheckedCreateWithoutSeoPagesInput>
    connectOrCreate?: KeywordCreateOrConnectWithoutSeoPagesInput
    connect?: KeywordWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type KeywordUpdateOneRequiredWithoutSeoPagesNestedInput = {
    create?: XOR<KeywordCreateWithoutSeoPagesInput, KeywordUncheckedCreateWithoutSeoPagesInput>
    connectOrCreate?: KeywordCreateOrConnectWithoutSeoPagesInput
    upsert?: KeywordUpsertWithoutSeoPagesInput
    connect?: KeywordWhereUniqueInput
    update?: XOR<XOR<KeywordUpdateToOneWithWhereWithoutSeoPagesInput, KeywordUpdateWithoutSeoPagesInput>, KeywordUncheckedUpdateWithoutSeoPagesInput>
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

  export type NestedEnumDomainNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Domain | EnumDomainFieldRefInput<$PrismaModel> | null
    in?: $Enums.Domain[] | ListEnumDomainFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Domain[] | ListEnumDomainFieldRefInput<$PrismaModel> | null
    not?: NestedEnumDomainNullableFilter<$PrismaModel> | $Enums.Domain | null
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

  export type NestedEnumDomainNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Domain | EnumDomainFieldRefInput<$PrismaModel> | null
    in?: $Enums.Domain[] | ListEnumDomainFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Domain[] | ListEnumDomainFieldRefInput<$PrismaModel> | null
    not?: NestedEnumDomainNullableWithAggregatesFilter<$PrismaModel> | $Enums.Domain | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumDomainNullableFilter<$PrismaModel>
    _max?: NestedEnumDomainNullableFilter<$PrismaModel>
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
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedBigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type NestedBigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type NestedEnumDifficultyFilter<$PrismaModel = never> = {
    equals?: $Enums.Difficulty | EnumDifficultyFieldRefInput<$PrismaModel>
    in?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>
    notIn?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>
    not?: NestedEnumDifficultyFilter<$PrismaModel> | $Enums.Difficulty
  }

  export type NestedEnumRegimeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Regime | EnumRegimeFieldRefInput<$PrismaModel> | null
    in?: $Enums.Regime[] | ListEnumRegimeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Regime[] | ListEnumRegimeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumRegimeNullableFilter<$PrismaModel> | $Enums.Regime | null
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumDifficultyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Difficulty | EnumDifficultyFieldRefInput<$PrismaModel>
    in?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>
    notIn?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>
    not?: NestedEnumDifficultyWithAggregatesFilter<$PrismaModel> | $Enums.Difficulty
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDifficultyFilter<$PrismaModel>
    _max?: NestedEnumDifficultyFilter<$PrismaModel>
  }

  export type NestedEnumRegimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Regime | EnumRegimeFieldRefInput<$PrismaModel> | null
    in?: $Enums.Regime[] | ListEnumRegimeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Regime[] | ListEnumRegimeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumRegimeNullableWithAggregatesFilter<$PrismaModel> | $Enums.Regime | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumRegimeNullableFilter<$PrismaModel>
    _max?: NestedEnumRegimeNullableFilter<$PrismaModel>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DemandSignalCreateWithoutKeywordInput = {
    source: string
    postCount?: number | null
    avgComments?: number | null
    sentimentScore?: number | null
    recencyScore?: number | null
    rawData?: NullableJsonNullValueInput | InputJsonValue
    collectedAt?: Date | string
  }

  export type DemandSignalUncheckedCreateWithoutKeywordInput = {
    id?: number
    source: string
    postCount?: number | null
    avgComments?: number | null
    sentimentScore?: number | null
    recencyScore?: number | null
    rawData?: NullableJsonNullValueInput | InputJsonValue
    collectedAt?: Date | string
  }

  export type DemandSignalCreateOrConnectWithoutKeywordInput = {
    where: DemandSignalWhereUniqueInput
    create: XOR<DemandSignalCreateWithoutKeywordInput, DemandSignalUncheckedCreateWithoutKeywordInput>
  }

  export type DemandSignalCreateManyKeywordInputEnvelope = {
    data: DemandSignalCreateManyKeywordInput | DemandSignalCreateManyKeywordInput[]
    skipDuplicates?: boolean
  }

  export type CompetitionSignalCreateWithoutKeywordInput = {
    topResults?: NullableJsonNullValueInput | InputJsonValue
    avgDomainStrength?: number | null
    uniqueDomainsTop10?: number | null
    avgContentLength?: number | null
    avgContentAgeDays?: number | null
    indexedPagesEstimate?: bigint | number | null
    collectedAt?: Date | string
  }

  export type CompetitionSignalUncheckedCreateWithoutKeywordInput = {
    id?: number
    topResults?: NullableJsonNullValueInput | InputJsonValue
    avgDomainStrength?: number | null
    uniqueDomainsTop10?: number | null
    avgContentLength?: number | null
    avgContentAgeDays?: number | null
    indexedPagesEstimate?: bigint | number | null
    collectedAt?: Date | string
  }

  export type CompetitionSignalCreateOrConnectWithoutKeywordInput = {
    where: CompetitionSignalWhereUniqueInput
    create: XOR<CompetitionSignalCreateWithoutKeywordInput, CompetitionSignalUncheckedCreateWithoutKeywordInput>
  }

  export type CompetitionSignalCreateManyKeywordInputEnvelope = {
    data: CompetitionSignalCreateManyKeywordInput | CompetitionSignalCreateManyKeywordInput[]
    skipDuplicates?: boolean
  }

  export type TrendSignalCreateWithoutKeywordInput = {
    interestData?: NullableJsonNullValueInput | InputJsonValue
    slope?: number | null
    variance?: number | null
    relatedQueries?: NullableJsonNullValueInput | InputJsonValue
    collectedAt?: Date | string
  }

  export type TrendSignalUncheckedCreateWithoutKeywordInput = {
    id?: number
    interestData?: NullableJsonNullValueInput | InputJsonValue
    slope?: number | null
    variance?: number | null
    relatedQueries?: NullableJsonNullValueInput | InputJsonValue
    collectedAt?: Date | string
  }

  export type TrendSignalCreateOrConnectWithoutKeywordInput = {
    where: TrendSignalWhereUniqueInput
    create: XOR<TrendSignalCreateWithoutKeywordInput, TrendSignalUncheckedCreateWithoutKeywordInput>
  }

  export type TrendSignalCreateManyKeywordInputEnvelope = {
    data: TrendSignalCreateManyKeywordInput | TrendSignalCreateManyKeywordInput[]
    skipDuplicates?: boolean
  }

  export type FeasibilityScoreCreateWithoutKeywordInput = {
    demandScore: number
    competitionScore: number
    constraintPressure: number
    feasibilityScore: number
    difficulty: $Enums.Difficulty
    timeRangeMin?: number | null
    timeRangeMax?: number | null
    regime?: $Enums.Regime | null
    successBand?: NullableJsonNullValueInput | InputJsonValue
    constraints?: NullableJsonNullValueInput | InputJsonValue
    conditions?: NullableJsonNullValueInput | InputJsonValue
    signalVersions?: NullableJsonNullValueInput | InputJsonValue
    scoredAt?: Date | string
    outcomes?: OutcomeCreateNestedManyWithoutScoreInput
  }

  export type FeasibilityScoreUncheckedCreateWithoutKeywordInput = {
    id?: number
    demandScore: number
    competitionScore: number
    constraintPressure: number
    feasibilityScore: number
    difficulty: $Enums.Difficulty
    timeRangeMin?: number | null
    timeRangeMax?: number | null
    regime?: $Enums.Regime | null
    successBand?: NullableJsonNullValueInput | InputJsonValue
    constraints?: NullableJsonNullValueInput | InputJsonValue
    conditions?: NullableJsonNullValueInput | InputJsonValue
    signalVersions?: NullableJsonNullValueInput | InputJsonValue
    scoredAt?: Date | string
    outcomes?: OutcomeUncheckedCreateNestedManyWithoutScoreInput
  }

  export type FeasibilityScoreCreateOrConnectWithoutKeywordInput = {
    where: FeasibilityScoreWhereUniqueInput
    create: XOR<FeasibilityScoreCreateWithoutKeywordInput, FeasibilityScoreUncheckedCreateWithoutKeywordInput>
  }

  export type FeasibilityScoreCreateManyKeywordInputEnvelope = {
    data: FeasibilityScoreCreateManyKeywordInput | FeasibilityScoreCreateManyKeywordInput[]
    skipDuplicates?: boolean
  }

  export type OutcomeCreateWithoutKeywordInput = {
    actualResult?: string | null
    monthsElapsed?: number | null
    trafficAchieved?: number | null
    notes?: string | null
    reportedAt?: Date | string
    score: FeasibilityScoreCreateNestedOneWithoutOutcomesInput
  }

  export type OutcomeUncheckedCreateWithoutKeywordInput = {
    id?: number
    scoreId: number
    actualResult?: string | null
    monthsElapsed?: number | null
    trafficAchieved?: number | null
    notes?: string | null
    reportedAt?: Date | string
  }

  export type OutcomeCreateOrConnectWithoutKeywordInput = {
    where: OutcomeWhereUniqueInput
    create: XOR<OutcomeCreateWithoutKeywordInput, OutcomeUncheckedCreateWithoutKeywordInput>
  }

  export type OutcomeCreateManyKeywordInputEnvelope = {
    data: OutcomeCreateManyKeywordInput | OutcomeCreateManyKeywordInput[]
    skipDuplicates?: boolean
  }

  export type SeoPageCreateWithoutKeywordInput = {
    pageType?: string | null
    slug: string
    title?: string | null
    metaDescription?: string | null
    lastGenerated?: Date | string | null
    indexed?: boolean
  }

  export type SeoPageUncheckedCreateWithoutKeywordInput = {
    id?: number
    pageType?: string | null
    slug: string
    title?: string | null
    metaDescription?: string | null
    lastGenerated?: Date | string | null
    indexed?: boolean
  }

  export type SeoPageCreateOrConnectWithoutKeywordInput = {
    where: SeoPageWhereUniqueInput
    create: XOR<SeoPageCreateWithoutKeywordInput, SeoPageUncheckedCreateWithoutKeywordInput>
  }

  export type SeoPageCreateManyKeywordInputEnvelope = {
    data: SeoPageCreateManyKeywordInput | SeoPageCreateManyKeywordInput[]
    skipDuplicates?: boolean
  }

  export type DemandSignalUpsertWithWhereUniqueWithoutKeywordInput = {
    where: DemandSignalWhereUniqueInput
    update: XOR<DemandSignalUpdateWithoutKeywordInput, DemandSignalUncheckedUpdateWithoutKeywordInput>
    create: XOR<DemandSignalCreateWithoutKeywordInput, DemandSignalUncheckedCreateWithoutKeywordInput>
  }

  export type DemandSignalUpdateWithWhereUniqueWithoutKeywordInput = {
    where: DemandSignalWhereUniqueInput
    data: XOR<DemandSignalUpdateWithoutKeywordInput, DemandSignalUncheckedUpdateWithoutKeywordInput>
  }

  export type DemandSignalUpdateManyWithWhereWithoutKeywordInput = {
    where: DemandSignalScalarWhereInput
    data: XOR<DemandSignalUpdateManyMutationInput, DemandSignalUncheckedUpdateManyWithoutKeywordInput>
  }

  export type DemandSignalScalarWhereInput = {
    AND?: DemandSignalScalarWhereInput | DemandSignalScalarWhereInput[]
    OR?: DemandSignalScalarWhereInput[]
    NOT?: DemandSignalScalarWhereInput | DemandSignalScalarWhereInput[]
    id?: IntFilter<"DemandSignal"> | number
    keywordId?: IntFilter<"DemandSignal"> | number
    source?: StringFilter<"DemandSignal"> | string
    postCount?: IntNullableFilter<"DemandSignal"> | number | null
    avgComments?: FloatNullableFilter<"DemandSignal"> | number | null
    sentimentScore?: FloatNullableFilter<"DemandSignal"> | number | null
    recencyScore?: FloatNullableFilter<"DemandSignal"> | number | null
    rawData?: JsonNullableFilter<"DemandSignal">
    collectedAt?: DateTimeFilter<"DemandSignal"> | Date | string
  }

  export type CompetitionSignalUpsertWithWhereUniqueWithoutKeywordInput = {
    where: CompetitionSignalWhereUniqueInput
    update: XOR<CompetitionSignalUpdateWithoutKeywordInput, CompetitionSignalUncheckedUpdateWithoutKeywordInput>
    create: XOR<CompetitionSignalCreateWithoutKeywordInput, CompetitionSignalUncheckedCreateWithoutKeywordInput>
  }

  export type CompetitionSignalUpdateWithWhereUniqueWithoutKeywordInput = {
    where: CompetitionSignalWhereUniqueInput
    data: XOR<CompetitionSignalUpdateWithoutKeywordInput, CompetitionSignalUncheckedUpdateWithoutKeywordInput>
  }

  export type CompetitionSignalUpdateManyWithWhereWithoutKeywordInput = {
    where: CompetitionSignalScalarWhereInput
    data: XOR<CompetitionSignalUpdateManyMutationInput, CompetitionSignalUncheckedUpdateManyWithoutKeywordInput>
  }

  export type CompetitionSignalScalarWhereInput = {
    AND?: CompetitionSignalScalarWhereInput | CompetitionSignalScalarWhereInput[]
    OR?: CompetitionSignalScalarWhereInput[]
    NOT?: CompetitionSignalScalarWhereInput | CompetitionSignalScalarWhereInput[]
    id?: IntFilter<"CompetitionSignal"> | number
    keywordId?: IntFilter<"CompetitionSignal"> | number
    topResults?: JsonNullableFilter<"CompetitionSignal">
    avgDomainStrength?: FloatNullableFilter<"CompetitionSignal"> | number | null
    uniqueDomainsTop10?: IntNullableFilter<"CompetitionSignal"> | number | null
    avgContentLength?: IntNullableFilter<"CompetitionSignal"> | number | null
    avgContentAgeDays?: IntNullableFilter<"CompetitionSignal"> | number | null
    indexedPagesEstimate?: BigIntNullableFilter<"CompetitionSignal"> | bigint | number | null
    collectedAt?: DateTimeFilter<"CompetitionSignal"> | Date | string
  }

  export type TrendSignalUpsertWithWhereUniqueWithoutKeywordInput = {
    where: TrendSignalWhereUniqueInput
    update: XOR<TrendSignalUpdateWithoutKeywordInput, TrendSignalUncheckedUpdateWithoutKeywordInput>
    create: XOR<TrendSignalCreateWithoutKeywordInput, TrendSignalUncheckedCreateWithoutKeywordInput>
  }

  export type TrendSignalUpdateWithWhereUniqueWithoutKeywordInput = {
    where: TrendSignalWhereUniqueInput
    data: XOR<TrendSignalUpdateWithoutKeywordInput, TrendSignalUncheckedUpdateWithoutKeywordInput>
  }

  export type TrendSignalUpdateManyWithWhereWithoutKeywordInput = {
    where: TrendSignalScalarWhereInput
    data: XOR<TrendSignalUpdateManyMutationInput, TrendSignalUncheckedUpdateManyWithoutKeywordInput>
  }

  export type TrendSignalScalarWhereInput = {
    AND?: TrendSignalScalarWhereInput | TrendSignalScalarWhereInput[]
    OR?: TrendSignalScalarWhereInput[]
    NOT?: TrendSignalScalarWhereInput | TrendSignalScalarWhereInput[]
    id?: IntFilter<"TrendSignal"> | number
    keywordId?: IntFilter<"TrendSignal"> | number
    interestData?: JsonNullableFilter<"TrendSignal">
    slope?: FloatNullableFilter<"TrendSignal"> | number | null
    variance?: FloatNullableFilter<"TrendSignal"> | number | null
    relatedQueries?: JsonNullableFilter<"TrendSignal">
    collectedAt?: DateTimeFilter<"TrendSignal"> | Date | string
  }

  export type FeasibilityScoreUpsertWithWhereUniqueWithoutKeywordInput = {
    where: FeasibilityScoreWhereUniqueInput
    update: XOR<FeasibilityScoreUpdateWithoutKeywordInput, FeasibilityScoreUncheckedUpdateWithoutKeywordInput>
    create: XOR<FeasibilityScoreCreateWithoutKeywordInput, FeasibilityScoreUncheckedCreateWithoutKeywordInput>
  }

  export type FeasibilityScoreUpdateWithWhereUniqueWithoutKeywordInput = {
    where: FeasibilityScoreWhereUniqueInput
    data: XOR<FeasibilityScoreUpdateWithoutKeywordInput, FeasibilityScoreUncheckedUpdateWithoutKeywordInput>
  }

  export type FeasibilityScoreUpdateManyWithWhereWithoutKeywordInput = {
    where: FeasibilityScoreScalarWhereInput
    data: XOR<FeasibilityScoreUpdateManyMutationInput, FeasibilityScoreUncheckedUpdateManyWithoutKeywordInput>
  }

  export type FeasibilityScoreScalarWhereInput = {
    AND?: FeasibilityScoreScalarWhereInput | FeasibilityScoreScalarWhereInput[]
    OR?: FeasibilityScoreScalarWhereInput[]
    NOT?: FeasibilityScoreScalarWhereInput | FeasibilityScoreScalarWhereInput[]
    id?: IntFilter<"FeasibilityScore"> | number
    keywordId?: IntFilter<"FeasibilityScore"> | number
    demandScore?: FloatFilter<"FeasibilityScore"> | number
    competitionScore?: FloatFilter<"FeasibilityScore"> | number
    constraintPressure?: FloatFilter<"FeasibilityScore"> | number
    feasibilityScore?: FloatFilter<"FeasibilityScore"> | number
    difficulty?: EnumDifficultyFilter<"FeasibilityScore"> | $Enums.Difficulty
    timeRangeMin?: IntNullableFilter<"FeasibilityScore"> | number | null
    timeRangeMax?: IntNullableFilter<"FeasibilityScore"> | number | null
    regime?: EnumRegimeNullableFilter<"FeasibilityScore"> | $Enums.Regime | null
    successBand?: JsonNullableFilter<"FeasibilityScore">
    constraints?: JsonNullableFilter<"FeasibilityScore">
    conditions?: JsonNullableFilter<"FeasibilityScore">
    signalVersions?: JsonNullableFilter<"FeasibilityScore">
    scoredAt?: DateTimeFilter<"FeasibilityScore"> | Date | string
  }

  export type OutcomeUpsertWithWhereUniqueWithoutKeywordInput = {
    where: OutcomeWhereUniqueInput
    update: XOR<OutcomeUpdateWithoutKeywordInput, OutcomeUncheckedUpdateWithoutKeywordInput>
    create: XOR<OutcomeCreateWithoutKeywordInput, OutcomeUncheckedCreateWithoutKeywordInput>
  }

  export type OutcomeUpdateWithWhereUniqueWithoutKeywordInput = {
    where: OutcomeWhereUniqueInput
    data: XOR<OutcomeUpdateWithoutKeywordInput, OutcomeUncheckedUpdateWithoutKeywordInput>
  }

  export type OutcomeUpdateManyWithWhereWithoutKeywordInput = {
    where: OutcomeScalarWhereInput
    data: XOR<OutcomeUpdateManyMutationInput, OutcomeUncheckedUpdateManyWithoutKeywordInput>
  }

  export type OutcomeScalarWhereInput = {
    AND?: OutcomeScalarWhereInput | OutcomeScalarWhereInput[]
    OR?: OutcomeScalarWhereInput[]
    NOT?: OutcomeScalarWhereInput | OutcomeScalarWhereInput[]
    id?: IntFilter<"Outcome"> | number
    keywordId?: IntFilter<"Outcome"> | number
    scoreId?: IntFilter<"Outcome"> | number
    actualResult?: StringNullableFilter<"Outcome"> | string | null
    monthsElapsed?: IntNullableFilter<"Outcome"> | number | null
    trafficAchieved?: IntNullableFilter<"Outcome"> | number | null
    notes?: StringNullableFilter<"Outcome"> | string | null
    reportedAt?: DateTimeFilter<"Outcome"> | Date | string
  }

  export type SeoPageUpsertWithWhereUniqueWithoutKeywordInput = {
    where: SeoPageWhereUniqueInput
    update: XOR<SeoPageUpdateWithoutKeywordInput, SeoPageUncheckedUpdateWithoutKeywordInput>
    create: XOR<SeoPageCreateWithoutKeywordInput, SeoPageUncheckedCreateWithoutKeywordInput>
  }

  export type SeoPageUpdateWithWhereUniqueWithoutKeywordInput = {
    where: SeoPageWhereUniqueInput
    data: XOR<SeoPageUpdateWithoutKeywordInput, SeoPageUncheckedUpdateWithoutKeywordInput>
  }

  export type SeoPageUpdateManyWithWhereWithoutKeywordInput = {
    where: SeoPageScalarWhereInput
    data: XOR<SeoPageUpdateManyMutationInput, SeoPageUncheckedUpdateManyWithoutKeywordInput>
  }

  export type SeoPageScalarWhereInput = {
    AND?: SeoPageScalarWhereInput | SeoPageScalarWhereInput[]
    OR?: SeoPageScalarWhereInput[]
    NOT?: SeoPageScalarWhereInput | SeoPageScalarWhereInput[]
    id?: IntFilter<"SeoPage"> | number
    keywordId?: IntFilter<"SeoPage"> | number
    pageType?: StringNullableFilter<"SeoPage"> | string | null
    slug?: StringFilter<"SeoPage"> | string
    title?: StringNullableFilter<"SeoPage"> | string | null
    metaDescription?: StringNullableFilter<"SeoPage"> | string | null
    lastGenerated?: DateTimeNullableFilter<"SeoPage"> | Date | string | null
    indexed?: BoolFilter<"SeoPage"> | boolean
  }

  export type KeywordCreateWithoutDemandSignalsInput = {
    keyword: string
    slug: string
    domain?: $Enums.Domain | null
    createdAt?: Date | string
    lastAnalyzed?: Date | string | null
    competitionSignals?: CompetitionSignalCreateNestedManyWithoutKeywordInput
    trendSignals?: TrendSignalCreateNestedManyWithoutKeywordInput
    feasibilityScores?: FeasibilityScoreCreateNestedManyWithoutKeywordInput
    outcomes?: OutcomeCreateNestedManyWithoutKeywordInput
    seoPages?: SeoPageCreateNestedManyWithoutKeywordInput
  }

  export type KeywordUncheckedCreateWithoutDemandSignalsInput = {
    id?: number
    keyword: string
    slug: string
    domain?: $Enums.Domain | null
    createdAt?: Date | string
    lastAnalyzed?: Date | string | null
    competitionSignals?: CompetitionSignalUncheckedCreateNestedManyWithoutKeywordInput
    trendSignals?: TrendSignalUncheckedCreateNestedManyWithoutKeywordInput
    feasibilityScores?: FeasibilityScoreUncheckedCreateNestedManyWithoutKeywordInput
    outcomes?: OutcomeUncheckedCreateNestedManyWithoutKeywordInput
    seoPages?: SeoPageUncheckedCreateNestedManyWithoutKeywordInput
  }

  export type KeywordCreateOrConnectWithoutDemandSignalsInput = {
    where: KeywordWhereUniqueInput
    create: XOR<KeywordCreateWithoutDemandSignalsInput, KeywordUncheckedCreateWithoutDemandSignalsInput>
  }

  export type KeywordUpsertWithoutDemandSignalsInput = {
    update: XOR<KeywordUpdateWithoutDemandSignalsInput, KeywordUncheckedUpdateWithoutDemandSignalsInput>
    create: XOR<KeywordCreateWithoutDemandSignalsInput, KeywordUncheckedCreateWithoutDemandSignalsInput>
    where?: KeywordWhereInput
  }

  export type KeywordUpdateToOneWithWhereWithoutDemandSignalsInput = {
    where?: KeywordWhereInput
    data: XOR<KeywordUpdateWithoutDemandSignalsInput, KeywordUncheckedUpdateWithoutDemandSignalsInput>
  }

  export type KeywordUpdateWithoutDemandSignalsInput = {
    keyword?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    domain?: NullableEnumDomainFieldUpdateOperationsInput | $Enums.Domain | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastAnalyzed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    competitionSignals?: CompetitionSignalUpdateManyWithoutKeywordNestedInput
    trendSignals?: TrendSignalUpdateManyWithoutKeywordNestedInput
    feasibilityScores?: FeasibilityScoreUpdateManyWithoutKeywordNestedInput
    outcomes?: OutcomeUpdateManyWithoutKeywordNestedInput
    seoPages?: SeoPageUpdateManyWithoutKeywordNestedInput
  }

  export type KeywordUncheckedUpdateWithoutDemandSignalsInput = {
    id?: IntFieldUpdateOperationsInput | number
    keyword?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    domain?: NullableEnumDomainFieldUpdateOperationsInput | $Enums.Domain | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastAnalyzed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    competitionSignals?: CompetitionSignalUncheckedUpdateManyWithoutKeywordNestedInput
    trendSignals?: TrendSignalUncheckedUpdateManyWithoutKeywordNestedInput
    feasibilityScores?: FeasibilityScoreUncheckedUpdateManyWithoutKeywordNestedInput
    outcomes?: OutcomeUncheckedUpdateManyWithoutKeywordNestedInput
    seoPages?: SeoPageUncheckedUpdateManyWithoutKeywordNestedInput
  }

  export type KeywordCreateWithoutCompetitionSignalsInput = {
    keyword: string
    slug: string
    domain?: $Enums.Domain | null
    createdAt?: Date | string
    lastAnalyzed?: Date | string | null
    demandSignals?: DemandSignalCreateNestedManyWithoutKeywordInput
    trendSignals?: TrendSignalCreateNestedManyWithoutKeywordInput
    feasibilityScores?: FeasibilityScoreCreateNestedManyWithoutKeywordInput
    outcomes?: OutcomeCreateNestedManyWithoutKeywordInput
    seoPages?: SeoPageCreateNestedManyWithoutKeywordInput
  }

  export type KeywordUncheckedCreateWithoutCompetitionSignalsInput = {
    id?: number
    keyword: string
    slug: string
    domain?: $Enums.Domain | null
    createdAt?: Date | string
    lastAnalyzed?: Date | string | null
    demandSignals?: DemandSignalUncheckedCreateNestedManyWithoutKeywordInput
    trendSignals?: TrendSignalUncheckedCreateNestedManyWithoutKeywordInput
    feasibilityScores?: FeasibilityScoreUncheckedCreateNestedManyWithoutKeywordInput
    outcomes?: OutcomeUncheckedCreateNestedManyWithoutKeywordInput
    seoPages?: SeoPageUncheckedCreateNestedManyWithoutKeywordInput
  }

  export type KeywordCreateOrConnectWithoutCompetitionSignalsInput = {
    where: KeywordWhereUniqueInput
    create: XOR<KeywordCreateWithoutCompetitionSignalsInput, KeywordUncheckedCreateWithoutCompetitionSignalsInput>
  }

  export type KeywordUpsertWithoutCompetitionSignalsInput = {
    update: XOR<KeywordUpdateWithoutCompetitionSignalsInput, KeywordUncheckedUpdateWithoutCompetitionSignalsInput>
    create: XOR<KeywordCreateWithoutCompetitionSignalsInput, KeywordUncheckedCreateWithoutCompetitionSignalsInput>
    where?: KeywordWhereInput
  }

  export type KeywordUpdateToOneWithWhereWithoutCompetitionSignalsInput = {
    where?: KeywordWhereInput
    data: XOR<KeywordUpdateWithoutCompetitionSignalsInput, KeywordUncheckedUpdateWithoutCompetitionSignalsInput>
  }

  export type KeywordUpdateWithoutCompetitionSignalsInput = {
    keyword?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    domain?: NullableEnumDomainFieldUpdateOperationsInput | $Enums.Domain | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastAnalyzed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    demandSignals?: DemandSignalUpdateManyWithoutKeywordNestedInput
    trendSignals?: TrendSignalUpdateManyWithoutKeywordNestedInput
    feasibilityScores?: FeasibilityScoreUpdateManyWithoutKeywordNestedInput
    outcomes?: OutcomeUpdateManyWithoutKeywordNestedInput
    seoPages?: SeoPageUpdateManyWithoutKeywordNestedInput
  }

  export type KeywordUncheckedUpdateWithoutCompetitionSignalsInput = {
    id?: IntFieldUpdateOperationsInput | number
    keyword?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    domain?: NullableEnumDomainFieldUpdateOperationsInput | $Enums.Domain | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastAnalyzed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    demandSignals?: DemandSignalUncheckedUpdateManyWithoutKeywordNestedInput
    trendSignals?: TrendSignalUncheckedUpdateManyWithoutKeywordNestedInput
    feasibilityScores?: FeasibilityScoreUncheckedUpdateManyWithoutKeywordNestedInput
    outcomes?: OutcomeUncheckedUpdateManyWithoutKeywordNestedInput
    seoPages?: SeoPageUncheckedUpdateManyWithoutKeywordNestedInput
  }

  export type KeywordCreateWithoutTrendSignalsInput = {
    keyword: string
    slug: string
    domain?: $Enums.Domain | null
    createdAt?: Date | string
    lastAnalyzed?: Date | string | null
    demandSignals?: DemandSignalCreateNestedManyWithoutKeywordInput
    competitionSignals?: CompetitionSignalCreateNestedManyWithoutKeywordInput
    feasibilityScores?: FeasibilityScoreCreateNestedManyWithoutKeywordInput
    outcomes?: OutcomeCreateNestedManyWithoutKeywordInput
    seoPages?: SeoPageCreateNestedManyWithoutKeywordInput
  }

  export type KeywordUncheckedCreateWithoutTrendSignalsInput = {
    id?: number
    keyword: string
    slug: string
    domain?: $Enums.Domain | null
    createdAt?: Date | string
    lastAnalyzed?: Date | string | null
    demandSignals?: DemandSignalUncheckedCreateNestedManyWithoutKeywordInput
    competitionSignals?: CompetitionSignalUncheckedCreateNestedManyWithoutKeywordInput
    feasibilityScores?: FeasibilityScoreUncheckedCreateNestedManyWithoutKeywordInput
    outcomes?: OutcomeUncheckedCreateNestedManyWithoutKeywordInput
    seoPages?: SeoPageUncheckedCreateNestedManyWithoutKeywordInput
  }

  export type KeywordCreateOrConnectWithoutTrendSignalsInput = {
    where: KeywordWhereUniqueInput
    create: XOR<KeywordCreateWithoutTrendSignalsInput, KeywordUncheckedCreateWithoutTrendSignalsInput>
  }

  export type KeywordUpsertWithoutTrendSignalsInput = {
    update: XOR<KeywordUpdateWithoutTrendSignalsInput, KeywordUncheckedUpdateWithoutTrendSignalsInput>
    create: XOR<KeywordCreateWithoutTrendSignalsInput, KeywordUncheckedCreateWithoutTrendSignalsInput>
    where?: KeywordWhereInput
  }

  export type KeywordUpdateToOneWithWhereWithoutTrendSignalsInput = {
    where?: KeywordWhereInput
    data: XOR<KeywordUpdateWithoutTrendSignalsInput, KeywordUncheckedUpdateWithoutTrendSignalsInput>
  }

  export type KeywordUpdateWithoutTrendSignalsInput = {
    keyword?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    domain?: NullableEnumDomainFieldUpdateOperationsInput | $Enums.Domain | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastAnalyzed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    demandSignals?: DemandSignalUpdateManyWithoutKeywordNestedInput
    competitionSignals?: CompetitionSignalUpdateManyWithoutKeywordNestedInput
    feasibilityScores?: FeasibilityScoreUpdateManyWithoutKeywordNestedInput
    outcomes?: OutcomeUpdateManyWithoutKeywordNestedInput
    seoPages?: SeoPageUpdateManyWithoutKeywordNestedInput
  }

  export type KeywordUncheckedUpdateWithoutTrendSignalsInput = {
    id?: IntFieldUpdateOperationsInput | number
    keyword?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    domain?: NullableEnumDomainFieldUpdateOperationsInput | $Enums.Domain | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastAnalyzed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    demandSignals?: DemandSignalUncheckedUpdateManyWithoutKeywordNestedInput
    competitionSignals?: CompetitionSignalUncheckedUpdateManyWithoutKeywordNestedInput
    feasibilityScores?: FeasibilityScoreUncheckedUpdateManyWithoutKeywordNestedInput
    outcomes?: OutcomeUncheckedUpdateManyWithoutKeywordNestedInput
    seoPages?: SeoPageUncheckedUpdateManyWithoutKeywordNestedInput
  }

  export type KeywordCreateWithoutFeasibilityScoresInput = {
    keyword: string
    slug: string
    domain?: $Enums.Domain | null
    createdAt?: Date | string
    lastAnalyzed?: Date | string | null
    demandSignals?: DemandSignalCreateNestedManyWithoutKeywordInput
    competitionSignals?: CompetitionSignalCreateNestedManyWithoutKeywordInput
    trendSignals?: TrendSignalCreateNestedManyWithoutKeywordInput
    outcomes?: OutcomeCreateNestedManyWithoutKeywordInput
    seoPages?: SeoPageCreateNestedManyWithoutKeywordInput
  }

  export type KeywordUncheckedCreateWithoutFeasibilityScoresInput = {
    id?: number
    keyword: string
    slug: string
    domain?: $Enums.Domain | null
    createdAt?: Date | string
    lastAnalyzed?: Date | string | null
    demandSignals?: DemandSignalUncheckedCreateNestedManyWithoutKeywordInput
    competitionSignals?: CompetitionSignalUncheckedCreateNestedManyWithoutKeywordInput
    trendSignals?: TrendSignalUncheckedCreateNestedManyWithoutKeywordInput
    outcomes?: OutcomeUncheckedCreateNestedManyWithoutKeywordInput
    seoPages?: SeoPageUncheckedCreateNestedManyWithoutKeywordInput
  }

  export type KeywordCreateOrConnectWithoutFeasibilityScoresInput = {
    where: KeywordWhereUniqueInput
    create: XOR<KeywordCreateWithoutFeasibilityScoresInput, KeywordUncheckedCreateWithoutFeasibilityScoresInput>
  }

  export type OutcomeCreateWithoutScoreInput = {
    actualResult?: string | null
    monthsElapsed?: number | null
    trafficAchieved?: number | null
    notes?: string | null
    reportedAt?: Date | string
    keyword: KeywordCreateNestedOneWithoutOutcomesInput
  }

  export type OutcomeUncheckedCreateWithoutScoreInput = {
    id?: number
    keywordId: number
    actualResult?: string | null
    monthsElapsed?: number | null
    trafficAchieved?: number | null
    notes?: string | null
    reportedAt?: Date | string
  }

  export type OutcomeCreateOrConnectWithoutScoreInput = {
    where: OutcomeWhereUniqueInput
    create: XOR<OutcomeCreateWithoutScoreInput, OutcomeUncheckedCreateWithoutScoreInput>
  }

  export type OutcomeCreateManyScoreInputEnvelope = {
    data: OutcomeCreateManyScoreInput | OutcomeCreateManyScoreInput[]
    skipDuplicates?: boolean
  }

  export type KeywordUpsertWithoutFeasibilityScoresInput = {
    update: XOR<KeywordUpdateWithoutFeasibilityScoresInput, KeywordUncheckedUpdateWithoutFeasibilityScoresInput>
    create: XOR<KeywordCreateWithoutFeasibilityScoresInput, KeywordUncheckedCreateWithoutFeasibilityScoresInput>
    where?: KeywordWhereInput
  }

  export type KeywordUpdateToOneWithWhereWithoutFeasibilityScoresInput = {
    where?: KeywordWhereInput
    data: XOR<KeywordUpdateWithoutFeasibilityScoresInput, KeywordUncheckedUpdateWithoutFeasibilityScoresInput>
  }

  export type KeywordUpdateWithoutFeasibilityScoresInput = {
    keyword?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    domain?: NullableEnumDomainFieldUpdateOperationsInput | $Enums.Domain | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastAnalyzed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    demandSignals?: DemandSignalUpdateManyWithoutKeywordNestedInput
    competitionSignals?: CompetitionSignalUpdateManyWithoutKeywordNestedInput
    trendSignals?: TrendSignalUpdateManyWithoutKeywordNestedInput
    outcomes?: OutcomeUpdateManyWithoutKeywordNestedInput
    seoPages?: SeoPageUpdateManyWithoutKeywordNestedInput
  }

  export type KeywordUncheckedUpdateWithoutFeasibilityScoresInput = {
    id?: IntFieldUpdateOperationsInput | number
    keyword?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    domain?: NullableEnumDomainFieldUpdateOperationsInput | $Enums.Domain | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastAnalyzed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    demandSignals?: DemandSignalUncheckedUpdateManyWithoutKeywordNestedInput
    competitionSignals?: CompetitionSignalUncheckedUpdateManyWithoutKeywordNestedInput
    trendSignals?: TrendSignalUncheckedUpdateManyWithoutKeywordNestedInput
    outcomes?: OutcomeUncheckedUpdateManyWithoutKeywordNestedInput
    seoPages?: SeoPageUncheckedUpdateManyWithoutKeywordNestedInput
  }

  export type OutcomeUpsertWithWhereUniqueWithoutScoreInput = {
    where: OutcomeWhereUniqueInput
    update: XOR<OutcomeUpdateWithoutScoreInput, OutcomeUncheckedUpdateWithoutScoreInput>
    create: XOR<OutcomeCreateWithoutScoreInput, OutcomeUncheckedCreateWithoutScoreInput>
  }

  export type OutcomeUpdateWithWhereUniqueWithoutScoreInput = {
    where: OutcomeWhereUniqueInput
    data: XOR<OutcomeUpdateWithoutScoreInput, OutcomeUncheckedUpdateWithoutScoreInput>
  }

  export type OutcomeUpdateManyWithWhereWithoutScoreInput = {
    where: OutcomeScalarWhereInput
    data: XOR<OutcomeUpdateManyMutationInput, OutcomeUncheckedUpdateManyWithoutScoreInput>
  }

  export type KeywordCreateWithoutOutcomesInput = {
    keyword: string
    slug: string
    domain?: $Enums.Domain | null
    createdAt?: Date | string
    lastAnalyzed?: Date | string | null
    demandSignals?: DemandSignalCreateNestedManyWithoutKeywordInput
    competitionSignals?: CompetitionSignalCreateNestedManyWithoutKeywordInput
    trendSignals?: TrendSignalCreateNestedManyWithoutKeywordInput
    feasibilityScores?: FeasibilityScoreCreateNestedManyWithoutKeywordInput
    seoPages?: SeoPageCreateNestedManyWithoutKeywordInput
  }

  export type KeywordUncheckedCreateWithoutOutcomesInput = {
    id?: number
    keyword: string
    slug: string
    domain?: $Enums.Domain | null
    createdAt?: Date | string
    lastAnalyzed?: Date | string | null
    demandSignals?: DemandSignalUncheckedCreateNestedManyWithoutKeywordInput
    competitionSignals?: CompetitionSignalUncheckedCreateNestedManyWithoutKeywordInput
    trendSignals?: TrendSignalUncheckedCreateNestedManyWithoutKeywordInput
    feasibilityScores?: FeasibilityScoreUncheckedCreateNestedManyWithoutKeywordInput
    seoPages?: SeoPageUncheckedCreateNestedManyWithoutKeywordInput
  }

  export type KeywordCreateOrConnectWithoutOutcomesInput = {
    where: KeywordWhereUniqueInput
    create: XOR<KeywordCreateWithoutOutcomesInput, KeywordUncheckedCreateWithoutOutcomesInput>
  }

  export type FeasibilityScoreCreateWithoutOutcomesInput = {
    demandScore: number
    competitionScore: number
    constraintPressure: number
    feasibilityScore: number
    difficulty: $Enums.Difficulty
    timeRangeMin?: number | null
    timeRangeMax?: number | null
    regime?: $Enums.Regime | null
    successBand?: NullableJsonNullValueInput | InputJsonValue
    constraints?: NullableJsonNullValueInput | InputJsonValue
    conditions?: NullableJsonNullValueInput | InputJsonValue
    signalVersions?: NullableJsonNullValueInput | InputJsonValue
    scoredAt?: Date | string
    keyword: KeywordCreateNestedOneWithoutFeasibilityScoresInput
  }

  export type FeasibilityScoreUncheckedCreateWithoutOutcomesInput = {
    id?: number
    keywordId: number
    demandScore: number
    competitionScore: number
    constraintPressure: number
    feasibilityScore: number
    difficulty: $Enums.Difficulty
    timeRangeMin?: number | null
    timeRangeMax?: number | null
    regime?: $Enums.Regime | null
    successBand?: NullableJsonNullValueInput | InputJsonValue
    constraints?: NullableJsonNullValueInput | InputJsonValue
    conditions?: NullableJsonNullValueInput | InputJsonValue
    signalVersions?: NullableJsonNullValueInput | InputJsonValue
    scoredAt?: Date | string
  }

  export type FeasibilityScoreCreateOrConnectWithoutOutcomesInput = {
    where: FeasibilityScoreWhereUniqueInput
    create: XOR<FeasibilityScoreCreateWithoutOutcomesInput, FeasibilityScoreUncheckedCreateWithoutOutcomesInput>
  }

  export type KeywordUpsertWithoutOutcomesInput = {
    update: XOR<KeywordUpdateWithoutOutcomesInput, KeywordUncheckedUpdateWithoutOutcomesInput>
    create: XOR<KeywordCreateWithoutOutcomesInput, KeywordUncheckedCreateWithoutOutcomesInput>
    where?: KeywordWhereInput
  }

  export type KeywordUpdateToOneWithWhereWithoutOutcomesInput = {
    where?: KeywordWhereInput
    data: XOR<KeywordUpdateWithoutOutcomesInput, KeywordUncheckedUpdateWithoutOutcomesInput>
  }

  export type KeywordUpdateWithoutOutcomesInput = {
    keyword?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    domain?: NullableEnumDomainFieldUpdateOperationsInput | $Enums.Domain | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastAnalyzed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    demandSignals?: DemandSignalUpdateManyWithoutKeywordNestedInput
    competitionSignals?: CompetitionSignalUpdateManyWithoutKeywordNestedInput
    trendSignals?: TrendSignalUpdateManyWithoutKeywordNestedInput
    feasibilityScores?: FeasibilityScoreUpdateManyWithoutKeywordNestedInput
    seoPages?: SeoPageUpdateManyWithoutKeywordNestedInput
  }

  export type KeywordUncheckedUpdateWithoutOutcomesInput = {
    id?: IntFieldUpdateOperationsInput | number
    keyword?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    domain?: NullableEnumDomainFieldUpdateOperationsInput | $Enums.Domain | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastAnalyzed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    demandSignals?: DemandSignalUncheckedUpdateManyWithoutKeywordNestedInput
    competitionSignals?: CompetitionSignalUncheckedUpdateManyWithoutKeywordNestedInput
    trendSignals?: TrendSignalUncheckedUpdateManyWithoutKeywordNestedInput
    feasibilityScores?: FeasibilityScoreUncheckedUpdateManyWithoutKeywordNestedInput
    seoPages?: SeoPageUncheckedUpdateManyWithoutKeywordNestedInput
  }

  export type FeasibilityScoreUpsertWithoutOutcomesInput = {
    update: XOR<FeasibilityScoreUpdateWithoutOutcomesInput, FeasibilityScoreUncheckedUpdateWithoutOutcomesInput>
    create: XOR<FeasibilityScoreCreateWithoutOutcomesInput, FeasibilityScoreUncheckedCreateWithoutOutcomesInput>
    where?: FeasibilityScoreWhereInput
  }

  export type FeasibilityScoreUpdateToOneWithWhereWithoutOutcomesInput = {
    where?: FeasibilityScoreWhereInput
    data: XOR<FeasibilityScoreUpdateWithoutOutcomesInput, FeasibilityScoreUncheckedUpdateWithoutOutcomesInput>
  }

  export type FeasibilityScoreUpdateWithoutOutcomesInput = {
    demandScore?: FloatFieldUpdateOperationsInput | number
    competitionScore?: FloatFieldUpdateOperationsInput | number
    constraintPressure?: FloatFieldUpdateOperationsInput | number
    feasibilityScore?: FloatFieldUpdateOperationsInput | number
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    timeRangeMin?: NullableIntFieldUpdateOperationsInput | number | null
    timeRangeMax?: NullableIntFieldUpdateOperationsInput | number | null
    regime?: NullableEnumRegimeFieldUpdateOperationsInput | $Enums.Regime | null
    successBand?: NullableJsonNullValueInput | InputJsonValue
    constraints?: NullableJsonNullValueInput | InputJsonValue
    conditions?: NullableJsonNullValueInput | InputJsonValue
    signalVersions?: NullableJsonNullValueInput | InputJsonValue
    scoredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    keyword?: KeywordUpdateOneRequiredWithoutFeasibilityScoresNestedInput
  }

  export type FeasibilityScoreUncheckedUpdateWithoutOutcomesInput = {
    id?: IntFieldUpdateOperationsInput | number
    keywordId?: IntFieldUpdateOperationsInput | number
    demandScore?: FloatFieldUpdateOperationsInput | number
    competitionScore?: FloatFieldUpdateOperationsInput | number
    constraintPressure?: FloatFieldUpdateOperationsInput | number
    feasibilityScore?: FloatFieldUpdateOperationsInput | number
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    timeRangeMin?: NullableIntFieldUpdateOperationsInput | number | null
    timeRangeMax?: NullableIntFieldUpdateOperationsInput | number | null
    regime?: NullableEnumRegimeFieldUpdateOperationsInput | $Enums.Regime | null
    successBand?: NullableJsonNullValueInput | InputJsonValue
    constraints?: NullableJsonNullValueInput | InputJsonValue
    conditions?: NullableJsonNullValueInput | InputJsonValue
    signalVersions?: NullableJsonNullValueInput | InputJsonValue
    scoredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KeywordCreateWithoutSeoPagesInput = {
    keyword: string
    slug: string
    domain?: $Enums.Domain | null
    createdAt?: Date | string
    lastAnalyzed?: Date | string | null
    demandSignals?: DemandSignalCreateNestedManyWithoutKeywordInput
    competitionSignals?: CompetitionSignalCreateNestedManyWithoutKeywordInput
    trendSignals?: TrendSignalCreateNestedManyWithoutKeywordInput
    feasibilityScores?: FeasibilityScoreCreateNestedManyWithoutKeywordInput
    outcomes?: OutcomeCreateNestedManyWithoutKeywordInput
  }

  export type KeywordUncheckedCreateWithoutSeoPagesInput = {
    id?: number
    keyword: string
    slug: string
    domain?: $Enums.Domain | null
    createdAt?: Date | string
    lastAnalyzed?: Date | string | null
    demandSignals?: DemandSignalUncheckedCreateNestedManyWithoutKeywordInput
    competitionSignals?: CompetitionSignalUncheckedCreateNestedManyWithoutKeywordInput
    trendSignals?: TrendSignalUncheckedCreateNestedManyWithoutKeywordInput
    feasibilityScores?: FeasibilityScoreUncheckedCreateNestedManyWithoutKeywordInput
    outcomes?: OutcomeUncheckedCreateNestedManyWithoutKeywordInput
  }

  export type KeywordCreateOrConnectWithoutSeoPagesInput = {
    where: KeywordWhereUniqueInput
    create: XOR<KeywordCreateWithoutSeoPagesInput, KeywordUncheckedCreateWithoutSeoPagesInput>
  }

  export type KeywordUpsertWithoutSeoPagesInput = {
    update: XOR<KeywordUpdateWithoutSeoPagesInput, KeywordUncheckedUpdateWithoutSeoPagesInput>
    create: XOR<KeywordCreateWithoutSeoPagesInput, KeywordUncheckedCreateWithoutSeoPagesInput>
    where?: KeywordWhereInput
  }

  export type KeywordUpdateToOneWithWhereWithoutSeoPagesInput = {
    where?: KeywordWhereInput
    data: XOR<KeywordUpdateWithoutSeoPagesInput, KeywordUncheckedUpdateWithoutSeoPagesInput>
  }

  export type KeywordUpdateWithoutSeoPagesInput = {
    keyword?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    domain?: NullableEnumDomainFieldUpdateOperationsInput | $Enums.Domain | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastAnalyzed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    demandSignals?: DemandSignalUpdateManyWithoutKeywordNestedInput
    competitionSignals?: CompetitionSignalUpdateManyWithoutKeywordNestedInput
    trendSignals?: TrendSignalUpdateManyWithoutKeywordNestedInput
    feasibilityScores?: FeasibilityScoreUpdateManyWithoutKeywordNestedInput
    outcomes?: OutcomeUpdateManyWithoutKeywordNestedInput
  }

  export type KeywordUncheckedUpdateWithoutSeoPagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    keyword?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    domain?: NullableEnumDomainFieldUpdateOperationsInput | $Enums.Domain | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastAnalyzed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    demandSignals?: DemandSignalUncheckedUpdateManyWithoutKeywordNestedInput
    competitionSignals?: CompetitionSignalUncheckedUpdateManyWithoutKeywordNestedInput
    trendSignals?: TrendSignalUncheckedUpdateManyWithoutKeywordNestedInput
    feasibilityScores?: FeasibilityScoreUncheckedUpdateManyWithoutKeywordNestedInput
    outcomes?: OutcomeUncheckedUpdateManyWithoutKeywordNestedInput
  }

  export type DemandSignalCreateManyKeywordInput = {
    id?: number
    source: string
    postCount?: number | null
    avgComments?: number | null
    sentimentScore?: number | null
    recencyScore?: number | null
    rawData?: NullableJsonNullValueInput | InputJsonValue
    collectedAt?: Date | string
  }

  export type CompetitionSignalCreateManyKeywordInput = {
    id?: number
    topResults?: NullableJsonNullValueInput | InputJsonValue
    avgDomainStrength?: number | null
    uniqueDomainsTop10?: number | null
    avgContentLength?: number | null
    avgContentAgeDays?: number | null
    indexedPagesEstimate?: bigint | number | null
    collectedAt?: Date | string
  }

  export type TrendSignalCreateManyKeywordInput = {
    id?: number
    interestData?: NullableJsonNullValueInput | InputJsonValue
    slope?: number | null
    variance?: number | null
    relatedQueries?: NullableJsonNullValueInput | InputJsonValue
    collectedAt?: Date | string
  }

  export type FeasibilityScoreCreateManyKeywordInput = {
    id?: number
    demandScore: number
    competitionScore: number
    constraintPressure: number
    feasibilityScore: number
    difficulty: $Enums.Difficulty
    timeRangeMin?: number | null
    timeRangeMax?: number | null
    regime?: $Enums.Regime | null
    successBand?: NullableJsonNullValueInput | InputJsonValue
    constraints?: NullableJsonNullValueInput | InputJsonValue
    conditions?: NullableJsonNullValueInput | InputJsonValue
    signalVersions?: NullableJsonNullValueInput | InputJsonValue
    scoredAt?: Date | string
  }

  export type OutcomeCreateManyKeywordInput = {
    id?: number
    scoreId: number
    actualResult?: string | null
    monthsElapsed?: number | null
    trafficAchieved?: number | null
    notes?: string | null
    reportedAt?: Date | string
  }

  export type SeoPageCreateManyKeywordInput = {
    id?: number
    pageType?: string | null
    slug: string
    title?: string | null
    metaDescription?: string | null
    lastGenerated?: Date | string | null
    indexed?: boolean
  }

  export type DemandSignalUpdateWithoutKeywordInput = {
    source?: StringFieldUpdateOperationsInput | string
    postCount?: NullableIntFieldUpdateOperationsInput | number | null
    avgComments?: NullableFloatFieldUpdateOperationsInput | number | null
    sentimentScore?: NullableFloatFieldUpdateOperationsInput | number | null
    recencyScore?: NullableFloatFieldUpdateOperationsInput | number | null
    rawData?: NullableJsonNullValueInput | InputJsonValue
    collectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DemandSignalUncheckedUpdateWithoutKeywordInput = {
    id?: IntFieldUpdateOperationsInput | number
    source?: StringFieldUpdateOperationsInput | string
    postCount?: NullableIntFieldUpdateOperationsInput | number | null
    avgComments?: NullableFloatFieldUpdateOperationsInput | number | null
    sentimentScore?: NullableFloatFieldUpdateOperationsInput | number | null
    recencyScore?: NullableFloatFieldUpdateOperationsInput | number | null
    rawData?: NullableJsonNullValueInput | InputJsonValue
    collectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DemandSignalUncheckedUpdateManyWithoutKeywordInput = {
    id?: IntFieldUpdateOperationsInput | number
    source?: StringFieldUpdateOperationsInput | string
    postCount?: NullableIntFieldUpdateOperationsInput | number | null
    avgComments?: NullableFloatFieldUpdateOperationsInput | number | null
    sentimentScore?: NullableFloatFieldUpdateOperationsInput | number | null
    recencyScore?: NullableFloatFieldUpdateOperationsInput | number | null
    rawData?: NullableJsonNullValueInput | InputJsonValue
    collectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompetitionSignalUpdateWithoutKeywordInput = {
    topResults?: NullableJsonNullValueInput | InputJsonValue
    avgDomainStrength?: NullableFloatFieldUpdateOperationsInput | number | null
    uniqueDomainsTop10?: NullableIntFieldUpdateOperationsInput | number | null
    avgContentLength?: NullableIntFieldUpdateOperationsInput | number | null
    avgContentAgeDays?: NullableIntFieldUpdateOperationsInput | number | null
    indexedPagesEstimate?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    collectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompetitionSignalUncheckedUpdateWithoutKeywordInput = {
    id?: IntFieldUpdateOperationsInput | number
    topResults?: NullableJsonNullValueInput | InputJsonValue
    avgDomainStrength?: NullableFloatFieldUpdateOperationsInput | number | null
    uniqueDomainsTop10?: NullableIntFieldUpdateOperationsInput | number | null
    avgContentLength?: NullableIntFieldUpdateOperationsInput | number | null
    avgContentAgeDays?: NullableIntFieldUpdateOperationsInput | number | null
    indexedPagesEstimate?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    collectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompetitionSignalUncheckedUpdateManyWithoutKeywordInput = {
    id?: IntFieldUpdateOperationsInput | number
    topResults?: NullableJsonNullValueInput | InputJsonValue
    avgDomainStrength?: NullableFloatFieldUpdateOperationsInput | number | null
    uniqueDomainsTop10?: NullableIntFieldUpdateOperationsInput | number | null
    avgContentLength?: NullableIntFieldUpdateOperationsInput | number | null
    avgContentAgeDays?: NullableIntFieldUpdateOperationsInput | number | null
    indexedPagesEstimate?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    collectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrendSignalUpdateWithoutKeywordInput = {
    interestData?: NullableJsonNullValueInput | InputJsonValue
    slope?: NullableFloatFieldUpdateOperationsInput | number | null
    variance?: NullableFloatFieldUpdateOperationsInput | number | null
    relatedQueries?: NullableJsonNullValueInput | InputJsonValue
    collectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrendSignalUncheckedUpdateWithoutKeywordInput = {
    id?: IntFieldUpdateOperationsInput | number
    interestData?: NullableJsonNullValueInput | InputJsonValue
    slope?: NullableFloatFieldUpdateOperationsInput | number | null
    variance?: NullableFloatFieldUpdateOperationsInput | number | null
    relatedQueries?: NullableJsonNullValueInput | InputJsonValue
    collectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrendSignalUncheckedUpdateManyWithoutKeywordInput = {
    id?: IntFieldUpdateOperationsInput | number
    interestData?: NullableJsonNullValueInput | InputJsonValue
    slope?: NullableFloatFieldUpdateOperationsInput | number | null
    variance?: NullableFloatFieldUpdateOperationsInput | number | null
    relatedQueries?: NullableJsonNullValueInput | InputJsonValue
    collectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeasibilityScoreUpdateWithoutKeywordInput = {
    demandScore?: FloatFieldUpdateOperationsInput | number
    competitionScore?: FloatFieldUpdateOperationsInput | number
    constraintPressure?: FloatFieldUpdateOperationsInput | number
    feasibilityScore?: FloatFieldUpdateOperationsInput | number
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    timeRangeMin?: NullableIntFieldUpdateOperationsInput | number | null
    timeRangeMax?: NullableIntFieldUpdateOperationsInput | number | null
    regime?: NullableEnumRegimeFieldUpdateOperationsInput | $Enums.Regime | null
    successBand?: NullableJsonNullValueInput | InputJsonValue
    constraints?: NullableJsonNullValueInput | InputJsonValue
    conditions?: NullableJsonNullValueInput | InputJsonValue
    signalVersions?: NullableJsonNullValueInput | InputJsonValue
    scoredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    outcomes?: OutcomeUpdateManyWithoutScoreNestedInput
  }

  export type FeasibilityScoreUncheckedUpdateWithoutKeywordInput = {
    id?: IntFieldUpdateOperationsInput | number
    demandScore?: FloatFieldUpdateOperationsInput | number
    competitionScore?: FloatFieldUpdateOperationsInput | number
    constraintPressure?: FloatFieldUpdateOperationsInput | number
    feasibilityScore?: FloatFieldUpdateOperationsInput | number
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    timeRangeMin?: NullableIntFieldUpdateOperationsInput | number | null
    timeRangeMax?: NullableIntFieldUpdateOperationsInput | number | null
    regime?: NullableEnumRegimeFieldUpdateOperationsInput | $Enums.Regime | null
    successBand?: NullableJsonNullValueInput | InputJsonValue
    constraints?: NullableJsonNullValueInput | InputJsonValue
    conditions?: NullableJsonNullValueInput | InputJsonValue
    signalVersions?: NullableJsonNullValueInput | InputJsonValue
    scoredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    outcomes?: OutcomeUncheckedUpdateManyWithoutScoreNestedInput
  }

  export type FeasibilityScoreUncheckedUpdateManyWithoutKeywordInput = {
    id?: IntFieldUpdateOperationsInput | number
    demandScore?: FloatFieldUpdateOperationsInput | number
    competitionScore?: FloatFieldUpdateOperationsInput | number
    constraintPressure?: FloatFieldUpdateOperationsInput | number
    feasibilityScore?: FloatFieldUpdateOperationsInput | number
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    timeRangeMin?: NullableIntFieldUpdateOperationsInput | number | null
    timeRangeMax?: NullableIntFieldUpdateOperationsInput | number | null
    regime?: NullableEnumRegimeFieldUpdateOperationsInput | $Enums.Regime | null
    successBand?: NullableJsonNullValueInput | InputJsonValue
    constraints?: NullableJsonNullValueInput | InputJsonValue
    conditions?: NullableJsonNullValueInput | InputJsonValue
    signalVersions?: NullableJsonNullValueInput | InputJsonValue
    scoredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OutcomeUpdateWithoutKeywordInput = {
    actualResult?: NullableStringFieldUpdateOperationsInput | string | null
    monthsElapsed?: NullableIntFieldUpdateOperationsInput | number | null
    trafficAchieved?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    reportedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    score?: FeasibilityScoreUpdateOneRequiredWithoutOutcomesNestedInput
  }

  export type OutcomeUncheckedUpdateWithoutKeywordInput = {
    id?: IntFieldUpdateOperationsInput | number
    scoreId?: IntFieldUpdateOperationsInput | number
    actualResult?: NullableStringFieldUpdateOperationsInput | string | null
    monthsElapsed?: NullableIntFieldUpdateOperationsInput | number | null
    trafficAchieved?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    reportedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OutcomeUncheckedUpdateManyWithoutKeywordInput = {
    id?: IntFieldUpdateOperationsInput | number
    scoreId?: IntFieldUpdateOperationsInput | number
    actualResult?: NullableStringFieldUpdateOperationsInput | string | null
    monthsElapsed?: NullableIntFieldUpdateOperationsInput | number | null
    trafficAchieved?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    reportedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SeoPageUpdateWithoutKeywordInput = {
    pageType?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    lastGenerated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    indexed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SeoPageUncheckedUpdateWithoutKeywordInput = {
    id?: IntFieldUpdateOperationsInput | number
    pageType?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    lastGenerated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    indexed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SeoPageUncheckedUpdateManyWithoutKeywordInput = {
    id?: IntFieldUpdateOperationsInput | number
    pageType?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    lastGenerated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    indexed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type OutcomeCreateManyScoreInput = {
    id?: number
    keywordId: number
    actualResult?: string | null
    monthsElapsed?: number | null
    trafficAchieved?: number | null
    notes?: string | null
    reportedAt?: Date | string
  }

  export type OutcomeUpdateWithoutScoreInput = {
    actualResult?: NullableStringFieldUpdateOperationsInput | string | null
    monthsElapsed?: NullableIntFieldUpdateOperationsInput | number | null
    trafficAchieved?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    reportedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    keyword?: KeywordUpdateOneRequiredWithoutOutcomesNestedInput
  }

  export type OutcomeUncheckedUpdateWithoutScoreInput = {
    id?: IntFieldUpdateOperationsInput | number
    keywordId?: IntFieldUpdateOperationsInput | number
    actualResult?: NullableStringFieldUpdateOperationsInput | string | null
    monthsElapsed?: NullableIntFieldUpdateOperationsInput | number | null
    trafficAchieved?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    reportedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OutcomeUncheckedUpdateManyWithoutScoreInput = {
    id?: IntFieldUpdateOperationsInput | number
    keywordId?: IntFieldUpdateOperationsInput | number
    actualResult?: NullableStringFieldUpdateOperationsInput | string | null
    monthsElapsed?: NullableIntFieldUpdateOperationsInput | number | null
    trafficAchieved?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    reportedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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