import { Component, Input } from '@angular/core';
import { BudgetEntry } from '../../models/budget-entry';

@Component({
  selector: 'single-entry',
  templateUrl: './single-entry.component.html',
  styleUrls: ['./single-entry.component.css']
})
export class SingleEntryComponent{
  @Input()
  array!: BudgetEntry[];
}
