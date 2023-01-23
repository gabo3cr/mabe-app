import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

interface FormPage {
  clave: string
}

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  isLoggedIn: boolean = false;
  tokenLogin = 'jwtkc';


  url = environment.loginUrl;
  //url = "http://localhost/mabe-licencia/";  

  constructor(private http: HttpClient, private router: Router) { }

  public readToken(): string {
    return sessionStorage.getItem('jwtkc');
  }

  public removeItems(){
    sessionStorage.removeItem('jwtkc');   
  }

  setToken(value: string){
    sessionStorage.setItem('jwtkc', value);    
  }

  public verificarPassword(obj: FormPage) {
    return this.http.post<any>(this.url + `auth/`, obj);
  }

  public loginIn(obj: FormPage) {
    this.tokenLogin;
    //console.log("aqui entra el guard: ", this.isLoggedIn)
    return this.http.post<any>(this.url + `auth/`, obj);
  }
}
