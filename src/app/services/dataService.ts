import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DataService {
  constructor() { }
  private messageSource = new BehaviorSubject({});
  
  setData(data){
    this.messageSource.next(data);
  }

  getData = this.messageSource.asObservable();

}