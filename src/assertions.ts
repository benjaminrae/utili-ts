export type Expect<Type extends true> = Type;

export type Equal<First, Second> = (<Type>() => Type extends First
  ? 1
  : 2) extends <Type>() => Type extends Second ? 1 : 2
  ? true
  : false;

export type Not<Type extends boolean> = Type extends true ? false : true;

export type StructurallyEqual<First, Second> = Equal<
  MergeStructures<First>,
  MergeStructures<Second>
>;

type MergeStructures<Type> = Type extends object
  ? {
      [Key in keyof Type]: MergeStructures<Type[Key]>;
    }
  : Type;
