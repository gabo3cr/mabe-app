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
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './guards/auth.guard';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, ReactiveFormsModule, HttpClientModule],
  providers: [BarcodeScanner, HTTP,
    {         provide: RouteReuseStrategy, useClass: IonicRouteStrategy},
    {         provide: AuthGuard}
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
