import { Equal, Expect, Not } from './assertions';
import { FromStringEnum, ToNumber } from './strings';

enum StringEnum {
  A = 'a',
  B = 'b',
  C = 'c',
}

export type cases = [
  /**
   * FromStringEnum
   */
  Expect<Equal<FromStringEnum<StringEnum>, 'a' | 'b' | 'c'>>,

  Expect<Not<Equal<FromStringEnum<StringEnum>, 'a' | 'b'>>>,

  /**
   * ToNumber
   */
  Expect<Equal<ToNumber<'0'>, 0>>,
  Expect<Equal<ToNumber<'10'>, 10>>,
  Expect<Equal<ToNumber<'100'>, 100>>,
  Expect<Equal<ToNumber<'999'>, 999>>,

  Expect<Not<Equal<ToNumber<'0'>, 1>>>,

  Expect<Equal<ToNumber<'Hello World'>, never>>
];
