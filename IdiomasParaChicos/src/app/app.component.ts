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
      this.smartAudioService.preload('azul-es', 'assets/sounds/azul-es.mp3');
      this.smartAudioService.preload('azul-en', 'assets/sounds/azul-en.mp3');
      this.smartAudioService.preload('azul-pr', 'assets/sounds/azul-pr.mp3');
      this.smartAudioService.preload('rojo-es', 'assets/sounds/rojo-es.mp3');
      this.smartAudioService.preload('rojo-en', 'assets/sounds/rojo-en.mp3');
      this.smartAudioService.preload('rojo-pr', 'assets/sounds/rojo-pr.mp3');
      this.smartAudioService.preload('amarillo-es', 'assets/sounds/amarillo-es.mp3');
      this.smartAudioService.preload('amarillo-en', 'assets/sounds/amarillo-en.mp3');
      this.smartAudioService.preload('amarillo-pr', 'assets/sounds/amarillo-pr.mp3');
      this.smartAudioService.preload('uno-es', 'assets/sounds/uno-es.mp3');
      this.smartAudioService.preload('uno-en', 'assets/sounds/uno-en.mp3');
      this.smartAudioService.preload('uno-pr', 'assets/sounds/uno-pr.mp3');
      this.smartAudioService.preload('dos-es', 'assets/sounds/dos-es.mp3');
      this.smartAudioService.preload('dos-en', 'assets/sounds/dos-en.mp3');
      this.smartAudioService.preload('dos-pr', 'assets/sounds/dos-pr.mp3');
      this.smartAudioService.preload('tres-es', 'assets/sounds/tres-es.mp3');
      this.smartAudioService.preload('tres-en', 'assets/sounds/tres-en.mp3');
      this.smartAudioService.preload('tres-pr', 'assets/sounds/tres-pr.mp3');
    });
  }
}
