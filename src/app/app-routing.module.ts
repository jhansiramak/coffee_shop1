import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { UserComponent } from './user/user.component';
import { SignupComponent } from './user/signup/signup.component';
import { SignInComponent } from './user/signin/signin.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {

    path: '',
    component: MainComponent,
  },
  {
    path: '', redirectTo: '/', pathMatch: 'full'
  },
  {path:'',component:MainComponent,children:[
    { path: 'home', component: HomeComponent },
    {
      path: 'signup', component: UserComponent,
      children: [{ path: '', component: SignupComponent }]
    },
    {
      path: 'login', component: UserComponent,
      children: [{ path: '', component: SignInComponent }]
    },
]},

  { path: '**', component: MainComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
