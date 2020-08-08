import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { ModalTemplateComponent } from './components/modal-template/modal-template.component';
import { DataService } from './services/dataService'; 

@NgModule({
  declarations: [
    AppComponent,
    ModalTemplateComponent
  ],
  imports: [
    BrowserModule,
    DragDropModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ DataService ],
  bootstrap: [AppComponent],
  entryComponents: [
    ModalTemplateComponent
  ]
})
export class AppModule { }