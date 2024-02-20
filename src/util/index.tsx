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
