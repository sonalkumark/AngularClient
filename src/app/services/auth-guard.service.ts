import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanLoad, Route, Router } from "@angular/router";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { OAuthService } from 'angular-oauth2-oidc';
import { AuthServiceService } from './authService/auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate, CanLoad {

  constructor(private authService: AuthServiceService, private router: Router, private oauthService: OAuthService) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.checkUser();
  }

  canLoad(state: Route): boolean {
    return this.checkUser();
  }

  private checkUser(): boolean {
    if(!this.oauthService.hasValidAccessToken()) {
      this.router.navigate(['/unauthorized']);
      return false;
    } else {
      return true;
    }
  }
}
