import { Component, OnInit, OnDestroy } from '@angular/core';
import { BudgetService } from '../../services/budget.service';

@Component({
  selector: 'main-counter',
  templateUrl: './main-counter.component.html',
  styleUrls: ['./main-counter.component.css']
})
export class MainCounterComponent implements OnInit, OnDestroy {
  total: number[] = [];

  constructor(private budgetService: BudgetService) { 
    this.budgetService = budgetService;
  }

  ngOnInit() {
    this.budgetService.data$.subscribe(budgetList => {
      // let initialValue = 0;
      this.total = budgetList.map(entry => entry.price);
                             //.reduce((previousValue, currentValue) => previousValue + currentValue, initialValue);
    });
  }

  ngOnDestroy(){
    this.budgetService.data$.unsubscribe();
  }

}