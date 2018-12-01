import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class GuardService implements CanActivate {

  // on injecte par dépendance le service AuthService
  constructor(private aS: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): any | boolean {

    if (this.aS.authenticated()) return true;

    return this.aS.currentUserObservable().onAuthStateChanged(
      user => {
        if (user === null) {
          console.log('auth login redirect')
          this.router.navigate(['/login'], {
            queryParams: { messageError: 'Error authentification' }
          });
        }
      }
    )
  }

}