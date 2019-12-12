import { Injectable } from '@angular/core';
import Axios from 'axios';
import { authConfig } from '../../AuthConfig';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private userData: any;
  private isAuthenticated: boolean;

  constructor() {
  }

  
}
