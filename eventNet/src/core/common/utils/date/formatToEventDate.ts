import { getMonth } from "./getMonth";
import { FormattedDate } from "./types";

export function formatToEventDate(startDate: FormattedDate, endDate: FormattedDate){
  return `${startDate.day} ${getMonth(+startDate.month)} - ${
    startDate.year
  } • ${startDate.hour} > ${endDate.day} ${getMonth(+endDate.month)} - ${
    endDate.year
  } • ${endDate.hour}`
}