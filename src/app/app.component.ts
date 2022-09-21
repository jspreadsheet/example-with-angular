import { Component, ViewChild, ElementRef } from "@angular/core";
import * as jspreadsheet from "jspreadsheet-ce";
 
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.sass"]
})
export class AppComponent {
  @ViewChild("spreadsheet") spreadsheet!: ElementRef;
  title = "CodeSandbox";
 
  ngAfterViewInit() {
    jspreadsheet(this.spreadsheet.nativeElement, {
      data: [[]],
      columns: [
        { type: "dropdown", width: 100, source: ["Y", "N"] },
        { type: "color", width: 100, render: "square" }
      ],
      minDimensions: [10, 10]
    });
  }
}