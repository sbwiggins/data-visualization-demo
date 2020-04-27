import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'summary',
  templateUrl: '../../view/summary/summary.component.html',
  styleUrls: ['../../view/summary/summary.component.css']
})
export class SummaryComponent implements OnInit {

  selectedRow : any

  constructor() { }
  
  ngOnInit(): void {

  }

  onNewSelection = (row) => this.selectedRow = row
  

}
