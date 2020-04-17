import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { JexcelSpreadsheetComponent } from './jexcel-spreadsheet/jexcel-spreadsheet.component';

@NgModule({
  declarations: [
    AppComponent,
    JexcelSpreadsheetComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
