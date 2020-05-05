import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MainPage } from './main.page';

const routes: Routes = [
  {
    path: '', component: MainPage, children: [
      { path: 'gallery/lindas', loadChildren: 'src/app/pages/gallery/gallery.module#GalleryPageModule' },
      { path: 'gallery/feas', loadChildren: 'src/app/pages/gallery/gallery.module#GalleryPageModule' },
      // { path: 'home', redirectTo: '/home' },
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MainPage]
})
export class MainPageModule { }
