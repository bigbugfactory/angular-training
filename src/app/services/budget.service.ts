import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { BudgetEntry } from '../models/budget-entry';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {
  budget: BudgetEntry[] = [];
  data$ = new BehaviorSubject<BudgetEntry[]>(this.budget);

  constructor() { }

  addEntry(entry: BudgetEntry): void {
    this.budget.push(entry);
    this.data$.next(this.budget);
  }
}
