export type AnyObject = Record<string, any>;

export type WithRequired<T, K extends keyof T> = { [P in K]-?: T[P] } & Omit<
  T,
  K
>;

export type WithOptional<T, K extends keyof T> = { [P in K]+?: T[P] } & Omit<
  T,
  K
>;

export type WithImmutable<T, K extends keyof T> = {
  readonly [P in K]: T[P];
} & Omit<T, K>;

export type WithMutable<T, K extends keyof T> = {
  -readonly [P in K]: T[P];
} & Omit<T, K>;
