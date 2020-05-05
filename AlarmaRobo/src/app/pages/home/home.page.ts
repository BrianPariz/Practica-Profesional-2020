import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  private isAlarmActivated: Boolean;
  constructor() { }

  ngOnInit() {
  }

  setAlarm(isAlarmActivated:Boolean){
    this.isAlarmActivated = isAlarmActivated;
  }
}