import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CroosfitPageRoutingModule } from './croosfit-routing.module';

import { CroosfitPage } from './croosfit.page';
import {shareModule} from '../../../share/share.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CroosfitPageRoutingModule,
    shareModule
  ],
  declarations: [CroosfitPage]
})
export class CroosfitPageModule {}
