import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AnimalsPage } from './animals.page';

import { AnimalsPageRoutingModule } from './animals-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    AnimalsPageRoutingModule
  ],
  declarations: [AnimalsPage]
})
export class AnimalsPageModule {}
