import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
@Injectable()

export class DataService {
  private _dataSrc = new BehaviorSubject(['Life goal One', 'Life goal Two']);
  dataSrcArr =  this._dataSrc.asObservable();
  constructor() { }

  changeGoal(newItem) {
    this._dataSrc.next(newItem);
  }
}
