import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QRscreenPageRoutingModule } from './qrscreen-routing.module';

import { QRscreenPage } from './qrscreen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QRscreenPageRoutingModule
  ],
  declarations: [QRscreenPage]
})
export class QRscreenPageModule {}
