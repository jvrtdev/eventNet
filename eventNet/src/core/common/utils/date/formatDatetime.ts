import { FormattedDate } from "./types";

export function FormatDatetime(datetime: string) {
  const dateTimeParam = datetime.split('T');
  const date = dateTimeParam[0].split('-').reverse();
  const hour = dateTimeParam[1].split('.')[0].slice(0, -3);
  const utc = dateTimeParam[1].split(".")[1]


  const formattedDate: FormattedDate = {
    day: date[0],
    month: date[1],
    year: date[2],
    hour: hour,
    utc: utc,
    date: dateTimeParam[0].split('-').reverse().join('/'),
  };

  return formattedDate;
}
