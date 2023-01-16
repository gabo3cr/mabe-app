import { Component, OnInit } from '@angular/core';
import { Style } from '@capacitor/status-bar';
import { AlertController } from '@ionic/angular';
import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-qrscreen',
  templateUrl: './qrscreen.page.html',
  styleUrls: ['./qrscreen.page.scss'],
})
export class QRscreenPage implements OnInit {


  constructor(public AlertController: AlertController,
    private barcodeScanner: BarcodeScanner,
    private service: ApiService,
    private userService: UserService,
    private router: Router,
    private toastController: ToastController,
  ) { }

  ngOnInit() {
  }

  async scan() {
    this.barcodeScanner.scan().then(barcodeData => {
      console.log("Captura info credencial: " + barcodeData.text);
      this.callGetUserById(barcodeData.text);
    }).catch(err => {
      console.log('Error', err);
    });
  }

  async fastScan() {
    this.barcodeScanner.scan().then(barcodeData => {
      console.log("Captura info credencial: " + barcodeData.text);
      this.FastcallGetUserById(barcodeData.text);
    }).catch(err => {
      console.log('Error', err);
    });
  }


  async callGetUserById(id: string) {
    try {
      const response = await this.service.getUserInfo(id);
      console.log("Response get user", response);
      const user = response['data'].length > 0 ? response['data'][0] : null;
      this.userService.cleanUser();
      if (user) {
        this.userService.setUser({ firstName: user.first_name, lastName: user.last_name, code: user.emp_code });
        //this.router.navigate(['/authorized-user']);
        this.presentUser(id);
      } else {
        this.presentToast(id);
      }

    } catch (err) {
      //pasar a pantalla de negativo
      console.log(err);
    }

  }

  async FastcallGetUserById(id: string) {
    try {
      const response = await this.service.getUserInfo(id);
      console.log("Response get user", response);
      const user = response['data'].length > 0 ? response['data'][0] : null;
      this.userService.cleanUser();
      if (user) {
        this.userService.setUser({ firstName: user.first_name, lastName: user.last_name, code: user.emp_code });
        this.fastScan()
        this.presentUser(id);
      } else {
        this.presentToast(id);
      }

    } catch (err) {
      //pasar a pantalla de negativo
      console.log(err);
    }

  }

  async presentToast(id: string) {
    const toast = await this.toastController.create({
      message: 'El usuario no se encuentra registrado en sistema.',
      duration: 2500,
      position: 'top',

    });

    await toast.present();
  }

  async presentUser(id: string) {
    const toast = await this.toastController.create({
      message: 'Ingreso Exitoso',
      duration: 2500,
      position: 'top',

    });

    await toast.present();

  }

}
