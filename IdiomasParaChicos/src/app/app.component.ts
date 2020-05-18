import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SmartAudioService } from './services/smart-audio.service';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private statusBar: StatusBar,
    private splashScreen: SplashScreen,
    private smartAudioService: SmartAudioService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.splashScreen.hide();
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.smartAudioService.preload('vaca-es', 'assets/sounds/vaca-es.mp3');
      this.smartAudioService.preload('vaca-en', 'assets/sounds/vaca-en.mp3');
      this.smartAudioService.preload('vaca-pr', 'assets/sounds/vaca-pr.mp3');
      this.smartAudioService.preload('mono-es', 'assets/sounds/mono-es.mp3');
      this.smartAudioService.preload('mono-en', 'assets/sounds/mono-en.mp3');
      this.smartAudioService.preload('mono-pr', 'assets/sounds/mono-pr.mp3');
      this.smartAudioService.preload('leon-es', 'assets/sounds/leon-es.mp3');
      this.smartAudioService.preload('leon-en', 'assets/sounds/leon-en.mp3');
      this.smartAudioService.preload('leon-pr', 'assets/sounds/leon-pr.mp3');
      this.smartAudioService.preload('pato-es', 'assets/sounds/pato-es.mp3');
      this.smartAudioService.preload('pato-en', 'assets/sounds/pato-en.mp3');
      this.smartAudioService.preload('pato-pr', 'assets/sounds/pato-pr.mp3');
      this.smartAudioService.preload('caballo-es', 'assets/sounds/caballo-es.mp3');
      this.smartAudioService.preload('caballo-en', 'assets/sounds/caballo-en.mp3');
      this.smartAudioService.preload('caballo-pr', 'assets/sounds/caballo-pr.mp3');
      this.smartAudioService.preload('elefante-es', 'assets/sounds/elefante-es.mp3');
      this.smartAudioService.preload('elefante-en', 'assets/sounds/elefante-en.mp3');
      this.smartAudioService.preload('elefante-pr', 'assets/sounds/elefante-pr.mp3');
      this.smartAudioService.preload('azul-es', 'assets/sounds/azul-es.mp3');
      this.smartAudioService.preload('azul-en', 'assets/sounds/azul-en.mp3');
      this.smartAudioService.preload('azul-pr', 'assets/sounds/azul-pr.mp3');
      this.smartAudioService.preload('rojo-es', 'assets/sounds/rojo-es.mp3');
      this.smartAudioService.preload('rojo-en', 'assets/sounds/rojo-en.mp3');
      this.smartAudioService.preload('rojo-pr', 'assets/sounds/rojo-pr.mp3');
      this.smartAudioService.preload('amarillo-es', 'assets/sounds/amarillo-es.mp3');
      this.smartAudioService.preload('amarillo-en', 'assets/sounds/amarillo-en.mp3');
      this.smartAudioService.preload('amarillo-pr', 'assets/sounds/amarillo-pr.mp3');
      this.smartAudioService.preload('violeta-es', 'assets/sounds/violeta-es.mp3');
      this.smartAudioService.preload('violeta-en', 'assets/sounds/violeta-en.mp3');
      this.smartAudioService.preload('violeta-pr', 'assets/sounds/violeta-pr.mp3');
      this.smartAudioService.preload('verde-es', 'assets/sounds/verde-es.mp3');
      this.smartAudioService.preload('verde-en', 'assets/sounds/verde-en.mp3');
      this.smartAudioService.preload('verde-pr', 'assets/sounds/verde-pr.mp3');
      this.smartAudioService.preload('naranja-es', 'assets/sounds/naranja-es.mp3');
      this.smartAudioService.preload('naranja-en', 'assets/sounds/naranja-en.mp3');
      this.smartAudioService.preload('naranja-pr', 'assets/sounds/naranja-pr.mp3');
      this.smartAudioService.preload('uno-es', 'assets/sounds/uno-es.mp3');
      this.smartAudioService.preload('uno-en', 'assets/sounds/uno-en.mp3');
      this.smartAudioService.preload('uno-pr', 'assets/sounds/uno-pr.mp3');
      this.smartAudioService.preload('dos-es', 'assets/sounds/dos-es.mp3');
      this.smartAudioService.preload('dos-en', 'assets/sounds/dos-en.mp3');
      this.smartAudioService.preload('dos-pr', 'assets/sounds/dos-pr.mp3');
      this.smartAudioService.preload('tres-es', 'assets/sounds/tres-es.mp3');
      this.smartAudioService.preload('tres-en', 'assets/sounds/tres-en.mp3');
      this.smartAudioService.preload('tres-pr', 'assets/sounds/tres-pr.mp3');
      this.smartAudioService.preload('cuatro-es', 'assets/sounds/cuatro-es.mp3');
      this.smartAudioService.preload('cuatro-en', 'assets/sounds/cuatro-en.mp3');
      this.smartAudioService.preload('cuatro-pr', 'assets/sounds/cuatro-pr.mp3');
      this.smartAudioService.preload('cinco-es', 'assets/sounds/cinco-es.mp3');
      this.smartAudioService.preload('cinco-en', 'assets/sounds/cinco-en.mp3');
      this.smartAudioService.preload('cinco-pr', 'assets/sounds/cinco-pr.mp3');
      this.smartAudioService.preload('seis-es', 'assets/sounds/seis-es.mp3');
      this.smartAudioService.preload('seis-en', 'assets/sounds/seis-en.mp3');
      this.smartAudioService.preload('seis-pr', 'assets/sounds/seis-pr.mp3');
    });
  }
}
