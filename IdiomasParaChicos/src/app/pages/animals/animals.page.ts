import { Component } from '@angular/core';
import { Global } from 'src/app/global';
import { SmartAudioService } from 'src/app/services/smart-audio.service';

@Component({
  selector: 'app-animals',
  templateUrl: 'animals.page.html',
  styleUrls: ['animals.page.scss']
})
export class AnimalsPage {

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
      case "leon":
        this.smartAudioService.play("leon-" + this.lng);
        break;
      case "vaca":
        this.smartAudioService.play("vaca-" + this.lng);
        break;
      case "mono":
        this.smartAudioService.play("mono-" + this.lng);
        break;
    }
  }
}
