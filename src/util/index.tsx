export type ValueOf<T> = T[keyof T];

// If Record<Enum, string> is set as a type, the variable must now be an object with all values of Enum as keys
export type PartialRecord<K extends keyof any, T> = {
  [P in K]?: T;
};

export function convertNullToEmptyString<T>(object: Record<string, any>) {
  const newObj = { ...object };
  const keys = Object.keys(newObj);
  for (const key of keys) {
    if (newObj[key] === null) {
      newObj[key] = "";
    }
  }
  return newObj as T;
}

namespace Empty {
  export type String = '';
  export type Object = Record<string, never>;
  export type Array = never[];
}

type Empty =
  | Empty.Array
  | Empty.Object
  | Empty.String;

export function isEmpty<T extends string | any[] | object>(subject: T | Empty): subject is Bottom<T> {
  switch (typeof subject) {
    case 'object':
      return (Object.keys(subject).length === 0);
    case 'string':
      return (subject === '');
    default:
      return false;
  }
}

type Bottom<T> =
  T extends string
    ? Empty.String
    : T extends any[]
        ? Empty.Array
        : T extends object
            ? Empty.Object
            : never;
