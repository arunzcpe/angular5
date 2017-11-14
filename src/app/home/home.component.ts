import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  itemCount: number;
  btnText: string = 'Add an Item';
  goalText: string = 'My Life goal 1';
  goals = ['Life goal 1', 'Lift Goal 2'];

  constructor(private _data:DataService) {
  }

  ngOnInit() {
    this._data.dataSrcArr.subscribe(response => this.goals = response);
    this.itemCount = this.goals.length;
    this._data.changeGoal(this.goals);
  }

  addItem() {
    this.goals.push(this.goalText);
    this.goalText = '';
    this.itemCount = this.goals.length;
    this._data.changeGoal(this.goals);
  }

  removeItem(arrIndex) {
    this.goals.splice(arrIndex, 1);
    this.itemCount = this.goals.length;
    this._data.changeGoal(this.goals);
  }
}
