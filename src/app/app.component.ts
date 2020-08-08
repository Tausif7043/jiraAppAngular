// app.component.ts
import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalTemplateComponent } from './components/modal-template/modal-template.component';
import { DataService } from './services/dataService';
import { from } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Jira Application';
  backlogs = [];
  development = [];
  review = [];
  acceptance = [];
  
  constructor(private modalService: NgbModal,
    private dataService: DataService) {
    let self = this;
    this.dataService.getData.subscribe(data => (!(Object.entries(data).length === 0 && data.constructor === Object)) ? self.backlogs.push(data) : '');
  }

  openFormModal() {
    this.modalService.open(ModalTemplateComponent);
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

}