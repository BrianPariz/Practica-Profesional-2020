import { Component } from '@angular/core';
import { LoadingService } from 'src/app/services/loading.service';
import { timeInterval } from 'rxjs/operators';
import { Global } from 'src/app/global';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private loadingService: LoadingService, private global: Global) { }

  next(language: string) {
    this.loadingService.showLoading("Espere..");
    this.global.language = language;
    this.loadingService.closeLoadingAndRedirect("/tabs");
  }
}
