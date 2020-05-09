import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NumbersPage } from './numbers.page';

import { NumbersPageRoutingModule } from './numbers-routing.module'

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: NumbersPage }]),
    NumbersPageRoutingModule,
  ],
  declarations: [NumbersPage]
})
export class NumbersPageModule {}
