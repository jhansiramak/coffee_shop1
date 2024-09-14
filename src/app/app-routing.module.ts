import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SignupComponent } from '../components/user/signup/signup.component';
import { SignInComponent } from '../components/user/signin/signin.component';
import { HomeComponent } from '../components/home/home.component';
import { IntroductionComponent } from 'src/components/introduction/introduction.component';
import { CoffeedetailsComponent } from 'src/components/coffeedetails/coffeedetails.component';
import { CartComponent } from 'src/components/cart-details/cart/cart.component';

const routes: Routes = [
 
  {
    path: 'login',
    component: SignInComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: '', redirectTo: '/', pathMatch: 'full'
  },
  { path: 'home', component: HomeComponent },
  { path: '', component: IntroductionComponent },
  { path: 'details/:id', component: CoffeedetailsComponent },
  { path: 'cart', component: CartComponent }

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
