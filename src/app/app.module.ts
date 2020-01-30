
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './home/navbar/navbar.component';
import { BodyComponent } from './home/body/body.component';
import { TopNavbarComponent } from './Home/top-navbar/top-navbar.component';
import { Slide1Component } from './home/slide1/slide1.component';
import { FooterComponent } from './home/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { Card1Component } from './home/card1/card1.component';
import { Card2Component } from './home/card2/card2.component';
import { Card3Component } from './home/card3/card3.component';
import { Card4Component } from './home/card4/card4.component';
import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { DetailComponent } from './detail/detail.component';
import { UpsellComponent } from './upsell/upsell.component';
import {HttpClientModule}  from '@angular/common/http';
import { ShopComponent } from './shop/shop.component';






@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BodyComponent,
    TopNavbarComponent,
    Slide1Component,
    FooterComponent,
    Card1Component,
    Card2Component,
    Card3Component,
    Card4Component,
    ProductsComponent,
    HomeComponent,
    ContactComponent,
    LoginComponent,
    DetailComponent,
    UpsellComponent,
    ShopComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MDBBootstrapModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
