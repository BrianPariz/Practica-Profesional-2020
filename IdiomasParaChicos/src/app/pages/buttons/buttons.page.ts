import { Component, OnInit } from '@angular/core';
import { Global } from 'src/app/global';
import { SmartAudioService } from 'src/app/services/smart-audio.service';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.page.html',
  styleUrls: ['./buttons.page.scss'],
})
export class ButtonsPage implements OnInit {

  private tema: string;
  private idioma: string;

  constructor(private global: Global, private smartAudio: SmartAudioService) {
    this.tema = global.tema;
    this.idioma = global.language;
  }

  ngOnInit() {
  }

  changeLanguage(lang: string) {
    this.idioma = lang;
    this.global.language = lang;
  }

  changeTema(tema: string) {
    this.tema = tema;
    this.global.tema = tema;
  }

  sound(sonido: string) {
    this.smartAudio.play(sonido + "-" + this.idioma);
  }
}
