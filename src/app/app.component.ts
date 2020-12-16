import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularClient';
  constructor(){
    const pwd = process.env.USER_NAME;
    console.log(pwd);
  }
}
