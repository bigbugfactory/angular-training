import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { BudgetEntry } from './models/budget-entry';
import { BudgetService } from './services/budget.service';
import { checkIfOtherThanZero } from './validators/different-than-zero.validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'budget-app';
  array = this.budgetService.budget;
  budgetForm: FormGroup;

  constructor(private budgetService: BudgetService) {
    this.budgetService = budgetService;

    this.budgetForm = new FormGroup({
      item: new FormControl('', [Validators.required, Validators.minLength(3)]),
      price: new FormControl(0, [Validators.required, checkIfOtherThanZero()])
    });
  }

  onSubmit(): void {
    const entry: BudgetEntry = { 'item': String(this.budgetForm.value.item), "price": Number(this.budgetForm.value.price) }; 
    this.budgetService.addEntry(entry);

    this.budgetForm.reset();
  }
}

