import { Component, OnInit,Input, OnChanges, SimpleChanges } from '@angular/core';
import { Architecture } from 'src/app/model/architecture';
import { RelatedArchitecture } from  'src/app/model/related-architecture'
import { ArchitectureService } from 'src/app/service/architecture.service';
import ArrayStore from "devextreme/data/array_store";

@Component({
  selector: 'related-architectures-grid',
  templateUrl: '../../view/related-architectures-grid/related-architectures-grid.component.html',
  styleUrls: ['../../view/related-architectures-grid/related-architectures-grid.component.css']
})
export class RelatedArchitecturesGridComponent implements OnInit, OnChanges {

  modelData: any
  @Input() selectedRow : any

  constructor(private service: ArchitectureService) { }

  ngOnInit(): void {

    this.selectedRow = new Architecture(512,"IADS Architecture 2") 
    
    this.service.getRelatedArchitecturesGridData(this.selectedRow.architectureId)          
      .subscribe(response =>  this.modelData = this.createStore(response))  

  }

  ngOnChanges(changes: SimpleChanges){
    
     if (changes['selectedRow'].currentValue){           

      this.service.getRelatedArchitecturesGridData(this.selectedRow.architectureId)          
      .subscribe(response =>  this.modelData = this.createStore(response))

     }
    
  }

  createStore = (response: any) =>
      new ArrayStore({
        key: ["architectureId", "relatedArchId"],
        data: response.json().map(item =>
            new RelatedArchitecture(
                item.architectureId,
                item.architectureName,
                null,
                null,
                item.relatedArchId,
                item.relatedArchName,
                null,
                null,
                item.relateTypeId,
                item.relateTypeName                        
            ))          
      })   

  


}
