import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './view-model/home/home.component';
import { SummaryComponent } from './view-model/summary/summary.component';
import { NavbarComponent } from './view-model/navbar/navbar.component';
import { ArchitectureService } from './service/architecture.service';
import { SelectArchitectureGridComponent } from './view-model/select-architecture-grid/select-architecture-grid.component';
import { DxDataGridModule, DxDropDownBoxModule } from 'devextreme-angular';
import { SelectArchitectureDropdownComponent } from './view-model/select-architecture-dropdown/select-architecture-dropdown.component';
import { RelatedArchitecturesGridComponent } from './view-model/related-architectures-grid/related-architectures-grid.component';
import { RelatedViewpointsGridComponent } from './view-model/related-viewpoints-grid/related-viewpoints-grid.component';
import { DiagramModalPopupComponent } from './view-model/diagram-modal-popup/diagram-modal-popup.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModelDiagramComponent } from './view-model/common-model-diagram/common-model-diagram.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SummaryComponent,
    NavbarComponent,
    SelectArchitectureGridComponent,
    SelectArchitectureDropdownComponent,
    RelatedArchitecturesGridComponent,
    RelatedViewpointsGridComponent,
    DiagramModalPopupComponent,
    CommonModelDiagramComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    DxDataGridModule,
    DxDropDownBoxModule,
    NgbModule
  ],
  providers: [
    ArchitectureService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
