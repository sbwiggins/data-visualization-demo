import { Component, OnInit, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'select-architecture-dropdown',
  templateUrl: '../../view/select-architecture-dropdown/select-architecture-dropdown.component.html',
  styleUrls: ['../../view/select-architecture-dropdown/select-architecture-dropdown.component.css']
})
export class SelectArchitectureDropdownComponent implements OnInit {

  dxDropDownBox : any
  @Output() selection = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  saveGridInstance = (instance:any) =>  this.dxDropDownBox = instance.component    

  onRowChanged = (row) =>  this.selection.emit(row)
  
}
