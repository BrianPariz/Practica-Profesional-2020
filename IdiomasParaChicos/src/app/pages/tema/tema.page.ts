import { Component, OnInit } from '@angular/core';
import { LoadingService } from 'src/app/services/loading.service';
import { Global } from 'src/app/global';

@Component({
  selector: 'app-tema',
  templateUrl: './tema.page.html',
  styleUrls: ['./tema.page.scss'],
})
export class TemaPage {

  constructor(private loadingService: LoadingService, private global: Global) { }

  next(tema: string) {
    this.global.tema = tema;
    this.loadingService.redirectOnly("/buttons");
  }
}
