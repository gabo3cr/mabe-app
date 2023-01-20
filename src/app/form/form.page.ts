import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { ToastController } from '@ionic/angular';
import { Location, ɵNullViewportScroller } from '@angular/common';

@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})


export class FormPage implements OnInit {

  tokenLogin = sessionStorage;

  formPassword = new FormGroup({
    clave: new FormControl('')
  });

  constructor(private router: Router,
    private authService: AuthService,
    private toastController: ToastController,
    private location: Location) {

    this.iniciarSesion(); {

      if (authService.setToken(), this.tokenLogin) {
        sessionStorage.getItem('tokenLogin',)
        //this.router.navigate(['form']);
        console.log("token is: ", this.tokenLogin)
      } else {
        this.router.navigate(['forms']);
      }
    }
  }

  ngOnInit() { }

  public iniciarSesion(): void {

    this.authService.loginIn(this.formPassword.value)
      .subscribe((response) => {
        if ((response.data && response.login)) {
          console.log(response)
          this.router.navigate(['home'])
          this.successToast();
        } else {
          console.log(response.data)
          this.errorToast();
        }

      }, (error) => {
        console.log(error)
        this.errorToast();
      });

  }


  async errorToast() {
    const toast = await this.toastController.create({
      message: 'El usuario no se encuentra registrado en sistema.',
      duration: 2500,
      position: 'top',

    });

    await toast.present();
  }

  async successToast() {
    const toast = await this.toastController.create({
      message: 'La licencia ha sido activada.',
      duration: 2500,
      position: 'top',

    });

    await toast.present();
  }

}
