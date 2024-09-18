import { FormatDatetime } from './formatDatetime';

export function formatPostDate(date: string): string {
  const formatedDate = FormatDatetime(String(date));
  return `${formatedDate.hour} • ${formatedDate.date}`;
}
