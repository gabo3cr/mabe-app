import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserDeniedPage } from './user-denied.page';

const routes: Routes = [
  {
    path: '',
    component: UserDeniedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserDeniedPageRoutingModule {}
