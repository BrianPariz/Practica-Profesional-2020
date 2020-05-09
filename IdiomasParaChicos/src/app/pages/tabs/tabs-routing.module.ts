import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'animals',
        loadChildren: () => import('../animals/animals.module').then(m => m.AnimalsPageModule)
      },
      {
        path: 'colours',
        loadChildren: () => import('../colours/colours.module').then(m => m.ColoursPageModule)
      },
      {
        path: 'numbers',
        loadChildren: () => import('../numbers/numbers.module').then(m => m.NumbersPageModule)
      },  
      {
        path: '',
        redirectTo: '/tabs/animals',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/animals',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
