import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from '../components/user/navbar/navbar.component';
import { FooterComponent } from '../components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MDBBootstrapModule,WavesModule, TableModule ,IconsModule  } from 'angular-bootstrap-md';
import {NgxPaginationModule} from 'ngx-pagination';
import { SignInComponent } from '../components/user/signin/signin.component';
import { SignupComponent } from '../components/user/signup/signup.component';
import { HomeComponent } from '../components/home/home.component';
import { SearchPipe } from '../pipe/pipes/search.pipe';
import { IntroductionComponent } from '../components/introduction/introduction.component';
import { IntroductionHeaderComponent } from 'src/components/introduction-header/introduction-header.component';
import { CommonModule } from '@angular/common';
import { CoffeedetailsComponent } from 'src/components/coffeedetails/coffeedetails.component';
import { CartComponent } from 'src/components/cart-details/cart/cart.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SignInComponent,
    SignupComponent,
    HomeComponent,
    SearchPipe,
    IntroductionComponent,
    IntroductionHeaderComponent,
    CoffeedetailsComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MDBBootstrapModule.forRoot(),
    WavesModule,
    TableModule,
    IconsModule,
    NgxPaginationModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
