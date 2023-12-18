export type Debug<Type> = { [Key in keyof Type]: Type[Key] };
