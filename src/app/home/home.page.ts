import { Component } from '@angular/core';
import { DataService, Message } from '../services/data.service';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { AuthService } from '../services/auth.service';
import { FormPage } from '../form/form.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private data: DataService,
    private apiService: ApiService,
    private router: Router,
    private authService: AuthService) {

    localStorage.getItem('tokenLogin',)

  }

  refresh(ev) {
    setTimeout(() => {
      ev.detail.complete();
    }, 3000);
  }


  ngOnInit() { }


  getMessages(): Message[] {
    return this.data.getMessages();
  }

  async getTokenAndRedirectQr() {
    try {
      //se obtiene el toker del servicio
      const response: any = await this.apiService.getToken();
      console.log(response);
      // guardar token en localstorage
      localStorage.setItem("token", response.token);
      //redirecionar pantalla QR
      this.router.navigate(['/qrscreen']);
    } catch (error) {
      //agregar un modal con el error
      console.error("Ocurrio error llamando servicio: ", error);
    }
  }
}
