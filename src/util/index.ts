import dayjs from "dayjs";

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
  export type String = "";
  export type Object = Record<string, never>;
  export type Array = never[];
}

type Empty = Empty.Array | Empty.Object | Empty.String;

export function isEmpty<T extends string | any[] | object>(
  subject: T | Empty
): subject is Bottom<T> {
  switch (typeof subject) {
    case "object":
      return Object.keys(subject).length === 0;
    case "string":
      return subject === "";
    default:
      return false;
  }
}

type Bottom<T> = T extends string
  ? Empty.String
  : T extends any[]
  ? Empty.Array
  : T extends object
  ? Empty.Object
  : never;

export function formatNotificationDate(date: Date) {
  const now = dayjs();
  const inputDate = dayjs(date);

  const diffInMinutes = now.diff(inputDate, "minute");
  const diffInHours = now.diff(inputDate, "hour");
  const diffInDays = now.diff(inputDate, "day");

  if (diffInMinutes < 60) {
    return `${diffInMinutes} min${diffInMinutes !== 1 ? "s" : ""} ago`;
  } else if (diffInHours < 24) {
    return `${diffInHours} hour${diffInHours !== 1 ? "s" : ""} ago`;
  } else {
    return `${diffInDays} day${diffInDays !== 1 ? "s" : ""} ago`;
  }
}

export function formatCurrency(param: string | number) {
  if (!param && param !== 0) return;
  const currency = "" + Number(param).toFixed(2) || "";
  return currency.replace(/,/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function reverseCurrencyFormat(param: string) {
  try {
    return Number(param.replace(/\D/g, "")) / 100;
  } catch (error) {
    return "";
  }
}

export function isNotNullOrUndefined<T>(value: T | null | undefined): value is T {
  return value !== null && value !== undefined;
}
