import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimalsPage } from './animals.page';

const routes: Routes = [
  {
    path: '',
    component: AnimalsPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnimalsPageRoutingModule {}
