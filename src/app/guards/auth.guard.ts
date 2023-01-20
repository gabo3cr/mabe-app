import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  canActivate(): boolean {
    if (this.auth) {
      this.router.navigate(['/home']);
      return false;
    }
    return true;
  }

  constructor(private auth: AuthService, private router: Router) { }
}
