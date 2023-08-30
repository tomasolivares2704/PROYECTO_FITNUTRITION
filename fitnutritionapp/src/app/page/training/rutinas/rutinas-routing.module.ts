import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RutinasPage } from './rutinas.page';

const routes: Routes = [
  {
    path: '',
    component: RutinasPage
  },
  {
    path: 'cardi-lunes',
    loadChildren: () => import('./cardi-lunes/cardi-lunes.module').then( m => m.CardiLunesPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RutinasPageRoutingModule {}
