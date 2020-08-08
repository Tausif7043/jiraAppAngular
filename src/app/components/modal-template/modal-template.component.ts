import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from "@angular/forms";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { DataService } from '../../services/dataService';
@Component({
  selector: "app-modal-template",
  templateUrl: "./modal-template.component.html",
  styleUrls: ["./modal-template.component.css"],
})
export class ModalTemplateComponent implements OnInit {
  @Output() messageEvent = new EventEmitter<string>();
  taskForm: FormGroup;
  constructor(
    public activeModal: NgbActiveModal,
    private formBuilder: FormBuilder,
    private dataService: DataService
  ) {
    this.createForm();
  }
  ngOnInit() {}

  createForm() {
    this.taskForm = this.formBuilder.group({
      title: "",
      description: "",
      dueDate: "",
    });
  }

  
  submitForm() {
    this.dataService.setData(this.taskForm.value);
    this.activeModal.close(this.taskForm.value);
  }
}
