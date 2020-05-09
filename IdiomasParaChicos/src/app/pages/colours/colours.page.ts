import { Component } from '@angular/core';
import { Global } from 'src/app/global';
import { SmartAudioService } from 'src/app/services/smart-audio.service';

@Component({
  selector: 'app-colours',
  templateUrl: 'colours.page.html',
  styleUrls: ['colours.page.scss']
})
export class ColoursPage {

  private lng: string;

  constructor(private global: Global, private smartAudioService: SmartAudioService) { }

  sound(type: string) {
    switch (this.global.language) {
      case "spanish":
        this.lng = "es";
        break;
      case "english":
        this.lng = "en";
        break;
      case "portuguese":
        this.lng = "pr";
        break;
    }

    switch (type) {
      case "azul":
        this.smartAudioService.play("azul-" + this.lng);
        break;
      case "rojo":
        this.smartAudioService.play("rojo-" + this.lng);
        break;
      case "amarillo":
        this.smartAudioService.play("amarillo-" + this.lng);
        break;
    }
  }
}
