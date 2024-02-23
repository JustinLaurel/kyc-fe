import dayjs from "dayjs";

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
