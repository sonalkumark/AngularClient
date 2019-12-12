import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContentComponent } from './content/content.component';
import { AuthGuardService } from './services/auth-guard.service';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { AuthCallbackComponent } from './components/auth-callback/auth-callback.component';


const routes: Routes = [
  {
    path: "~/",
    component: HomeComponent
  },
  {
    path: "authCallback",
    component: AuthCallbackComponent
  },
  {
    path: "content",
    component: ContentComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: "unauthorized",
    component: UnauthorizedComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
