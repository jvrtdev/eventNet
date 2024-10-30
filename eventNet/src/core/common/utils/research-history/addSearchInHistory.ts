export function addSearchInHistory(search: string) {
  let history = localStorage.getItem('history');
  console.log('antes do if', history);
  if (history) {
    const historyArray = JSON.parse(history);
    historyArray.push(search);
    console.log('dentro do if', historyArray);
    localStorage.setItem('history', JSON.stringify(historyArray));
  } else {
    console.log('linha 11 do search fora do if');
    localStorage.setItem('history', JSON.stringify([search]));
  }
}
