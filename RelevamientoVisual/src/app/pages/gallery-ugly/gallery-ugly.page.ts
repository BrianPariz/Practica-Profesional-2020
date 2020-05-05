import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-gallery-ugly',
  templateUrl: './gallery-ugly.page.html',
  styleUrls: ['./gallery-ugly.page.scss'],
})
export class GalleryUglyPage implements OnInit {

  @Output() actualizarListado: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  actualizar(){
    this.actualizarListado.emit(true);
  }

}
