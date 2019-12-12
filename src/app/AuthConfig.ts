import { AuthConfig } from 'angular-oauth2-oidc';

export const authConfig: AuthConfig = {

  // Url of the Identity Provider
  issuer: 'http://localhost/identityserver',

  // URL of the SPA to redirect the user to after login
  redirectUri: 'http://localhost:4200',

  // The SPA's id. The SPA is registered with this id at the auth-server
  clientId: 'AngularApp',
  postLogoutRedirectUri: 'http://localhost:4200', 
  responseType: 'id_token token',

  // set the scope for the permissions the client should request
  // The first three are defined by OIDC. The 4th is a usecase-specific one
  scope: 'openid api api2 profile',
}