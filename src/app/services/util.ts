import dayjs from "dayjs";

export function formatNotificationDate(date: Date) {
  const now = dayjs();
  const inputDate = dayjs(date);

  const diffInMinutes = now.diff(inputDate, 'minute');
  const diffInHours = now.diff(inputDate, 'hour');
  const diffInDays = now.diff(inputDate, 'day');

  if (diffInMinutes < 60) {
    return `${diffInMinutes} min${diffInMinutes !== 1 ? 's' : ''} ago`;
  } else if (diffInHours < 24) {
    return `${diffInHours} hour${diffInHours !== 1 ? 's' : ''} ago`;
  } else {
    return `${diffInDays} day${diffInDays !== 1 ? 's' : ''} ago`;
  }
}