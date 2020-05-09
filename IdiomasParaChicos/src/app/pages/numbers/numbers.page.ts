import { Component } from '@angular/core';
import { Global } from 'src/app/global';
import { SmartAudioService } from 'src/app/services/smart-audio.service';

@Component({
  selector: 'app-numbers',
  templateUrl: 'numbers.page.html',
  styleUrls: ['numbers.page.scss']
})
export class NumbersPage {

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
      case "uno":
        this.smartAudioService.play("uno-" + this.lng);
        break;
      case "dos":
        this.smartAudioService.play("dos-" + this.lng);
        break;
      case "tres":
        this.smartAudioService.play("tres-" + this.lng);
        break;
    }
  }
}
