import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AboutComponent implements OnInit {
  goals:any;
  //Dependency Injection
  constructor(private route:ActivatedRoute, private homeRoute:Router, private _data:DataService) {
    this.route.params.subscribe(res => console.log(res.id));
  }

  ngOnInit() {
    this._data.dataSrcArr.subscribe(response => this.goals = response);
  }
  goHome() {
    this.homeRoute.navigate(['']);
  }
}
