import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrossEjerciciosPageRoutingModule } from './cross-ejercicios-routing.module';

import { CrossEjerciciosPage } from './cross-ejercicios.page';
import {shareModule} from '../../../../share/share.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrossEjerciciosPageRoutingModule,
    shareModule,
  ],
  declarations: [CrossEjerciciosPage]
})
export class CrossEjerciciosPageModule {}
