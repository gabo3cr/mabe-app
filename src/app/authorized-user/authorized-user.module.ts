import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AuthorizedUserPageRoutingModule } from './authorized-user-routing.module';

import { AuthorizedUserPage } from './authorized-user.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AuthorizedUserPageRoutingModule
  ],
  declarations: [AuthorizedUserPage]
})
export class AuthorizedUserPageModule {}
