export function removeSearchInHistory(search: string) {
  const history = localStorage.getItem('history')!;

  const historyArray = JSON.parse(history);
  historyArray.filter((item: string) => item !== search);
  localStorage.setItem('history', JSON.stringify(historyArray));
}
