import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { JwksValidationHandler, OAuthService, OAuthModule, OAuthStorage } from 'angular-oauth2-oidc';


import { authConfig } from './AuthConfig';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AuthGuardService } from './services/auth-guard.service';
import { AuthServiceService } from './services/authService/auth-service.service';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ContentComponent } from './content/content.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { NavigationComponent } from './navigation/navigation.component';
import { NavGroupComponent } from './navigation/nav-content/nav-group/nav-group.component';
import { NavItemComponent } from './navigation/nav-content/nav-item/nav-item.component';
import { NavLogoComponent } from './navigation/nav-logo/nav-logo.component';
import { NavContentComponent } from './navigation/nav-content/nav-content.component';
import { NavCollapseComponent } from './navigation/nav-content/nav-collapse/nav-collapse.component';
import { AuthCallbackComponent } from './components/auth-callback/auth-callback.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    LogoutComponent,
    ContentComponent,
    UnauthorizedComponent,
    NavigationComponent,
    NavGroupComponent,
    NavItemComponent,
    NavLogoComponent,
    NavContentComponent,
    NavCollapseComponent,
    AuthCallbackComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    SharedModule,
    OAuthModule.forRoot(),
  ],
  providers: [
    AuthGuardService, 
    AuthServiceService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private oauthService: OAuthService, private authService: AuthServiceService) {
    this.configure();
    // this.authService.initImplicitFlow();
  }
  private configure() {
    this.oauthService.configure(authConfig);
    this.oauthService.setStorage(sessionStorage);
    this.oauthService.tokenValidationHandler = new JwksValidationHandler();
    this.oauthService.loadDiscoveryDocumentAndTryLogin();
  }
}
