import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from "@angular/router";
import { ApiCallService } from 'src/services/apicalls/apicall.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SignInComponent implements OnInit {
  signInForm: FormGroup;
  serverErrorMessages: string;

  constructor(private fb: FormBuilder, private userService: ApiCallService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    if (this.userService.isLoggedIn()) {
      this.router.navigateByUrl('/home');
    }

    this.signInForm = this.fb.group({
      mobilenumber: ['', [Validators.required, Validators.pattern(/.{5,10}/)]],
      password: ['', [Validators.required, Validators.minLength(4)]]
    });
  }

  onSubmit() {
    if (this.signInForm.valid) {
      const formValue = this.signInForm.value;
      formValue.client_id = this.userService.getclient_id();
      
      this.userService.login(formValue).subscribe(
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
}
