import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CardiLunesPage } from './cardi-lunes.page';

const routes: Routes = [
  {
    path: '',
    component: CardiLunesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CardiLunesPageRoutingModule {}
