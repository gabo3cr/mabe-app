import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserDeniedPageRoutingModule } from './user-denied-routing.module';

import { UserDeniedPage } from './user-denied.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserDeniedPageRoutingModule
  ],
  declarations: [UserDeniedPage]
})
export class UserDeniedPageModule {}
