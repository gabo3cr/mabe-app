import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthorizedUserPage } from './authorized-user.page';

const routes: Routes = [
  {
    path: '',
    component: AuthorizedUserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthorizedUserPageRoutingModule {}
