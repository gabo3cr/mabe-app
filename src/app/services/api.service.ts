import { Injectable } from '@angular/core';
import { HTTP } from '@awesome-cordova-plugins/http/ngx';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url = 'http://181.167.206.232:8081';

    

  constructor(private http: HTTP) { }

  getToken() {
    
  const headers= { "Content-Type": "application/json" }

    return new Promise((resolve, reject) => {
      this.http.post(this.url + '/api-token-auth/', {"username": "admin", "password": "zkteco1234"}, headers)
        .then(response => {
          resolve(JSON.parse(response.data));
        }, (error) => {
          reject(error);
        });
    });
  }

  getUserInfo(data: string) {
    const headers = { "Content-Type": "application/json", "Authorization": `Token ${ localStorage.getItem('token') }` };
    const dataHandle = data.split('|');
    console.log("Parseo informacion tarjeta", dataHandle);
    return new Promise((resolve, reject) => {
      this.http.get(this.url + `/personnel/api/employee/?card_no=${dataHandle[1]}`, {}, headers)
        .then(response => {
          resolve(JSON.parse(response.data));
        }, (error) => {
          reject(error);
        });
    });
  }
}
