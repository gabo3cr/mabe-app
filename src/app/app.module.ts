import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx';
//import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module'; 
import { AuthInterceptorService } from './services/auth-interceptor.service';
import { HTTP } from '@awesome-cordova-plugins/http/ngx';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, ReactiveFormsModule],
  providers: [BarcodeScanner, HTTP,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy},
    /*{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true }*/
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
