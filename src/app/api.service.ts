import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthServiceService } from './services/authService/auth-service.service';



@Injectable({
  providedIn: 'root'
})
export class ApiService {
 
  private httpClient: HttpClient;
  

  constructor(private authService: AuthServiceService) { 
  }

  setAuthHeaderValue(): void {
    
  }

  get(url: string) : any {
    return this.httpClient.get(url);
  }
}
