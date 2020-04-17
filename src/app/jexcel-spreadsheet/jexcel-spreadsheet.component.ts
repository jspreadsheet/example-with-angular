import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import * as jexcel from 'jexcel';
@Component({
  selector: 'app-jexcel-spreadsheet',
  templateUrl: './jexcel-spreadsheet.component.html',
  styleUrls: ['./jexcel-spreadsheet.component.css']
})
export class JexcelSpreadsheetComponent implements OnInit, AfterViewInit{
  @ViewChild('spreadsheet') spreadsheet: ElementRef;
  constructor() { }

  data = [
    ['Mazda', 2001, 2000],
    ['Pegeout', 2010, 5000],
    ['Honda Fit', 2009, 3000],
    ['Honda CRV', 2010, 6000],
];

  ngOnInit(): void {

  }

  ngAfterViewInit() {
    jexcel(this.spreadsheet.nativeElement, {
      data: this.data,
        columns: [
          { title: 'Model', width: 300 },
          { title: 'Price', width: 80 },
          { title: 'Model', width: 100 }
      ],
      minDimensions: [10, 10]
    });
  }

}
