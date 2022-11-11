import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QRscreenPage } from './qrscreen.page';

const routes: Routes = [
  {
    path: '',
    component: QRscreenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QRscreenPageRoutingModule {}
