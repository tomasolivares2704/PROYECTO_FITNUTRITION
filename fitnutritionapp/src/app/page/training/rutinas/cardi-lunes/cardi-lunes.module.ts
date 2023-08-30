import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CardiLunesPageRoutingModule } from './cardi-lunes-routing.module';

import { CardiLunesPage } from './cardi-lunes.page';

import {shareModule} from '../../../../share/share.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CardiLunesPageRoutingModule,
    shareModule
  ],
  declarations: [CardiLunesPage]
})
export class CardiLunesPageModule {}
