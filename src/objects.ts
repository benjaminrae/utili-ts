export type AnyObject = Record<string, any>;

export type WithRequired<Type, Key extends keyof Type> = {
  [Property in Key]-?: Type[Property];
} & Omit<Type, Key>;

export type IsRequired<Type, Key extends keyof Type> = Pick<
  Type,
  Key
> extends Required<Pick<Type, Key>>
  ? true
  : false;

export type WithOptional<Type, Key extends keyof Type> = {
  [Property in Key]+?: Type[Property];
} & Omit<Type, Key>;

export type IsOptional<
  Type,
  Key extends keyof Type
> = undefined extends Type[Key] ? true : false;

export type WithImmutable<Type, Key extends keyof Type> = {
  readonly [Property in Key]: Type[Property];
} & Omit<Type, Key>;

export type WithMutable<Type, Key extends keyof Type> = {
  -readonly [Property in Key]: Type[Property];
} & Omit<Type, Key>;
