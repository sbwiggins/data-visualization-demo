import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Architecture } from '../../model/architecture'
import { ArchitectureService } from 'src/app/service/architecture.service';
import ArrayStore from "devextreme/data/array_store";

@Component({
  selector: 'select-architecture-grid',
  templateUrl: '../../view/select-architecture-grid/select-architecture-grid.component.html',
  styleUrls: ['../../view/select-architecture-grid/select-architecture-grid.component.css']
})

export class SelectArchitectureGridComponent implements OnInit { 
 
    modelData: any
    @Input() dxDropDownBox : any 
    @Output() change = new EventEmitter()
  
    constructor(private service: ArchitectureService) { }

    ngOnInit(): void {          
         
        this.service.getSelectArchitectureGridData()
          .subscribe(response => {       

              this.modelData = new ArrayStore({
                key: "architectureId",
                data: response.json().map(item =>
                    new Architecture(
                        item.architectureId,
                        item.architectureName,
                        item.lastModifiedBy,
                        item.lastModifiedDate,
                        item.latestRevisionId
                    ))          
              })   
          })     
    
    }

    rowClickHandler = (row) => {
      this.dxDropDownBox._popup.hide()
      this.dxDropDownBox.option("value",row.data.architectureName)  
      this.change.emit(row.data); 
    }   

}
