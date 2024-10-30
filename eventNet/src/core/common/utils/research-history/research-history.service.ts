import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ResearchHistoryService {
  getResearchHistory() {
    return JSON.parse(localStorage.getItem('history')!);
  }
  addSearchInHistory(search: string) {
    const history = localStorage.getItem('history');
    if (history) {
      const historyArray = JSON.parse(history);
      historyArray.push(search);
      localStorage.setItem('history', JSON.stringify(historyArray));
    } else {
      localStorage.setItem('history', JSON.stringify([search]));
    }
  }

  deleteResearchHistory() {
    localStorage.removeItem('history');
  }
}
