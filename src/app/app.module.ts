import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MainCounterComponent } from './controls/main-counter/main-counter.component';
import { SingleEntryComponent } from './controls/single-entry/single-entry.component';
import { CountValuePipe } from './pipes/count-value.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MainCounterComponent,
    SingleEntryComponent,
    CountValuePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
