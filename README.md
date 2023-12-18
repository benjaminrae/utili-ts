# utili-TS

TypeScript Utility Types

## Object Types

### `WithRequired<Type, Key extends keyof Type>`

Makes the specified properties required.

```ts
type Foo = {
  a?: string;
  b?: number;
};

type Bar = WithRequired<Foo, 'a'>;
// { a: string; b?: number; }
```

### `WithOptional<Type, Key extends keyof Type>`

Makes the specified properties optional.

```ts
type Foo = {
  a: string;
  b: number;
};

type Bar = WithOptional<Foo, 'a'>;
// { a?: string; b: number; }
```

### `WithImmutable<Type, Key extends keyof Type>`

Makes the specified properties immutable (readonly).

```ts
type Foo = {
  a: string;
  b: number;
};

type Bar = WithImmutable<Foo, 'a'>;
// { readonly a: string; b: number; }
```

### `WithMutable<Type, Key extends keyof Type>`

Makes the specified properties mutable (non-readonly).

```ts
type Foo = {
  readonly a: string;
  b: number;
};

type Bar = WithMutable<Foo, 'a'>;
// { a: string; b: number; }
```

## Assertions

### `Expect<Type>`

Asserts that `Type` is `true`.

```ts
type Foo = Expect<true>;
// true

type Bar = Expect<false>;
// false
```

### `Equal<First, Second>`

Asserts that `First` and `Second` are equal.

```ts
type Foo = Equal<string, string>;
// true

type Bar = Equal<string, number>;
// false
```

### `Not<Type>`

Asserts that `Type` is `false`.

```ts
type Foo = Not<false>;
// true

type Bar = Not<true>;
// false

type Baz = Not<Equal<string, number>>;
// true
```

### `StructurallyEqual<First, Second>`

Asserts that `First` and `Second` are structurally equal. This is often required to check equality of generic and mapped types.

```ts
type Foo = StructurallyEqual<{ a: string }, { a: string }>;
// true

type Bar = StructurallyEqual<{ a: string }, { a: number }>;
// false
```
