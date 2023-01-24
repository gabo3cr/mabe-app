import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule), canActivate: [AuthGuard]
  },
  {
    path: 'message/:id',
    loadChildren: () => import('./view-message/view-message.module').then( m => m.ViewMessagePageModule), canActivate: [AuthGuard]
  },
  {
    path: '', 
    redirectTo: 'form',
    pathMatch: 'full'
  },
  {
    path: 'form',
    loadChildren: () => import('./form/form.module').then( m => m.FormPageModule), 
  },
  {
    path: 'user-page',
    loadChildren: () => import('./user-page/user-page.module').then( m => m.UserPagePageModule), canActivate: [AuthGuard]
  },
  {
    path: 'authorized-user',
    loadChildren: () => import('./authorized-user/authorized-user.module').then( m => m.AuthorizedUserPageModule), canActivate: [AuthGuard]
  },
  {
    path: 'user-denied',
    loadChildren: () => import('./user-denied/user-denied.module').then( m => m.UserDeniedPageModule), canActivate: [AuthGuard]
  },
  {
    path: 'qrscreen',
    loadChildren: () => import('./qrscreen/qrscreen.module').then( m => m.QRscreenPageModule), canActivate: [AuthGuard]
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
