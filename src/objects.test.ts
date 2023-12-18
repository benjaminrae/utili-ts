import { Equal, Expect, Not, StructurallyEqual } from './assertions';
import {
  AnyObject,
  IsOptional,
  IsRequired,
  WithImmutable,
  WithMutable,
  WithOptional,
  WithRequired,
} from './objects';

type User = {
  name: string;
  id: number;
  readonly isActive: boolean;
  metadata?: unknown;
};

export type cases = [
  /**
   * AnyObject
   */
  Expect<Equal<AnyObject, { [key: string]: any }>>,
  Expect<Equal<AnyObject, Record<string, any>>>,

  Expect<Not<Equal<AnyObject, boolean>>>,

  /**
   * WithRequired
   */
  Expect<
    StructurallyEqual<
      WithRequired<User, 'metadata'>,
      {
        name: string;
        id: number;
        readonly isActive: boolean;
        metadata: unknown;
      }
    >
  >,

  Expect<Not<StructurallyEqual<WithRequired<User, 'metadata'>, User>>>,

  /**
   * WithOptional
   */
  Expect<
    StructurallyEqual<
      WithOptional<User, 'name' | 'id'>,
      {
        name?: string;
        id?: number;
        readonly isActive: boolean;
        metadata?: unknown;
      }
    >
  >,

  Expect<Not<StructurallyEqual<WithOptional<User, 'name'>, User>>>,

  /**
   * WithImmutable
   */
  Expect<
    StructurallyEqual<
      WithImmutable<User, 'name'>,
      {
        readonly name: string;
        id: number;
        readonly isActive: boolean;
        metadata?: unknown;
      }
    >
  >,

  Expect<Not<StructurallyEqual<WithImmutable<User, 'name'>, User>>>,

  /**
   * WithMutable
   */
  Expect<
    StructurallyEqual<
      WithMutable<User, 'isActive'>,
      {
        name: string;
        id: number;
        isActive: boolean;
        metadata?: unknown;
      }
    >
  >,

  Expect<Not<StructurallyEqual<WithMutable<User, 'isActive'>, User>>>,

  /**
   * IsRequired
   */
  Expect<Equal<IsRequired<User, 'name'>, true>>,

  Expect<Not<Equal<IsRequired<User, 'metadata'>, true>>>,

  /**
   * IsOptional
   */
  Expect<Equal<IsOptional<User, 'metadata'>, true>>,

  Expect<Not<Equal<IsOptional<User, 'name'>, true>>>
];
