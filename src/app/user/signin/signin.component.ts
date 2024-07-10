import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { ApiCallService } from 'src/app/apicalls/apicall.service';


@Component({
  selector: 'app-sign-in',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SignInComponent implements OnInit {
  mobilenumber: any;

  constructor(private userService: ApiCallService,private router : Router,private route: ActivatedRoute) { }

  model ={
    mobilenumber :'',
    password:''
  };
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  serverErrorMessages: any;
  ngOnInit() {
    if(this.userService.isLoggedIn())
    this.router.navigateByUrl('/home');

  }

  onSubmit(form : NgForm){
    form.value.client_id = this.userService.getclient_id();
    this.userService.login(form.value).subscribe(
      res => {
        this.userService.setToken(res['authtoken']);
        this.userService.setcust_id(res['cust_id']);
        this.router.navigate(['/home']);
      },
      err => {
        this.serverErrorMessages = err.error.message;
      }
    );
  }

}
