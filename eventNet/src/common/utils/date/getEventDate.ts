import { FormatDatetime } from './formatDatetime';
import { formatToEventDate } from './formatToEventDate';

export function GetEventDate(
  startDatetime: string,
  endDatetime: string
): string {
  const startDate = FormatDatetime(startDatetime);
  const endDate = FormatDatetime(endDatetime);

  return formatToEventDate(startDate, endDate)
}
