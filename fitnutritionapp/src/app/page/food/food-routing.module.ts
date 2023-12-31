import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FoodPage } from './food.page';

const routes: Routes = [
  {
    path: '',
    component: FoodPage
  },
  {
    path: 'proteina',
    loadChildren: () => import('./proteina/proteina.module').then( m => m.ProteinaPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FoodPageRoutingModule {}
