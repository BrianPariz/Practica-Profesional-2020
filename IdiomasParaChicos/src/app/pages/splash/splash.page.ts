import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
})
export class SplashPage implements OnInit {

  splash = true;

  constructor(private router: Router) {
    setTimeout(this.alertFunc.bind(this), 3500);
  }

  ngOnInit() {
  }

  alertFunc() {
    this.splash = false;
    this.router.navigate(["/login"]);
  }
}
