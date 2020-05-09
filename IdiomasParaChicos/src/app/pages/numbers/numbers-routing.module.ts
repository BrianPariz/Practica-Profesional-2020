import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NumbersPage } from './numbers.page';

const routes: Routes = [
  {
    path: '',
    component: NumbersPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NumbersPageRoutingModule {}
