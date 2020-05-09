import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ColoursPage } from './colours.page';

import { ColoursPageRoutingModule } from './colours-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ColoursPageRoutingModule
  ],
  declarations: [ColoursPage]
})
export class ColoursPageModule {}
