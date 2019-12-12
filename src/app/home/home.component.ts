import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../services/authService/auth-service.service';
import { OAuthService } from 'angular-oauth2-oidc';
import { Router } from '@angular/router'

@Component({
  selector: 'Home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private oauthService: OAuthService, private router: Router) {
  }

  ngOnInit() {
  }

  public login() {
    this.oauthService.initLoginFlow();
  }

  public redirectToContent(){
    this.router.navigate(["/content"]);
  }

  public logout() {
    this.oauthService.logOut();
  }

  public get name() {
    let claims: any = this.oauthService.getIdentityClaims();
    if (!claims) return null;
    console.log(claims);
    
    return claims.name;
  }

  public get isAuthenticated() {
    return this.oauthService.hasValidAccessToken();
  }
}
