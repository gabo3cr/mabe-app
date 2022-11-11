import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'message/:id',
    loadChildren: () => import('./view-message/view-message.module').then( m => m.ViewMessagePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'form',
    loadChildren: () => import('./form/form.module').then( m => m.FormPageModule)
  },
  {
    path: 'user-page',
    loadChildren: () => import('./user-page/user-page.module').then( m => m.UserPagePageModule)
  },
  {
    path: 'authorized-user',
    loadChildren: () => import('./authorized-user/authorized-user.module').then( m => m.AuthorizedUserPageModule)
  },
  {
    path: 'user-denied',
    loadChildren: () => import('./user-denied/user-denied.module').then( m => m.UserDeniedPageModule)
  },
  {
    path: 'qrscreen',
    loadChildren: () => import('./qrscreen/qrscreen.module').then( m => m.QRscreenPageModule)
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
