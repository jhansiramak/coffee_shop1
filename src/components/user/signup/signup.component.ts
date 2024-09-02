import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiCallService } from 'src/services/apicalls/apicall.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signUpForm!: FormGroup;
  showSucessMessage!: boolean;
  serverErrorMessages: string | undefined;
  ischecked: Boolean = false;

  constructor(
    private fb: FormBuilder,
    public userService: ApiCallService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    // Initialize the reactive form
    this.signUpForm = this.fb.group({
      user_name: ['', Validators.required],
      mobile_number: ['', [Validators.required, Validators.pattern('[789][0-9]{9}')]],
      email_id: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]],
      terms: [false, Validators.requiredTrue] // Add a checkbox control for terms
    });
  }

  onSubmit(): void {
    console.log(this.ischecked)
    if (this.signUpForm.valid) {
      const data = this.signUpForm.value;
      data.client_id = this.userService.getclient_id();
      this.userService.postUser(data).subscribe(
        (res: any) => {
          alert(res.message);
          this.showSucessMessage = true;

          setTimeout(() => this.showSucessMessage = false, 4000);
          this.resetForm();
          this.router.navigate(['/login']);
        },
        err => {
          if (err.status === 422) {
            this.serverErrorMessages = err.error.join('<br/>');
          } else if (err.status === 400) {
            this.serverErrorMessages = err.error.message;
          } else {
            this.serverErrorMessages = 'Something went wrong. Please contact admin.';
          }
        }
      );
    } else {
      alert('Please fill out the form correctly and agree to the terms.');
    }
  }

  resetForm(): void {
    this.signUpForm.reset();
    this.serverErrorMessages = '';
  }
}
