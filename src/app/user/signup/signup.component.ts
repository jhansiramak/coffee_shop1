import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiCallService } from 'src/app/apicalls/apicall.service';


@Component({
  selector: 'app-sign-up',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  showSucessMessage!: boolean;
  serverErrorMessages: string | undefined;
  ischecked: Boolean = false;
  constructor(public userService: ApiCallService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  checkterms(event: { target: { checked: Boolean; }; }){
    console.log(event.target.checked)
this.ischecked=event.target.checked
  }

  onSubmit(form: NgForm) {
    console.log(this.ischecked)
    if (this.ischecked) {
      const data = form.value
      data.client_id = this.userService.getclient_id();
      this.userService.postUser(data).subscribe(
        (res: any) => {
          alert(res.message)
          this.showSucessMessage = res.message
          this.showSucessMessage = true;

          setTimeout(() => this.showSucessMessage = false, 4000);
          this.resetForm(form);
          this.router.navigate(['/login'])
        },
        err => {
          if (err.status === 422) {
            this.serverErrorMessages = err.error.join('<br/>');
          }
          else if (err.status === 400) {
            this.serverErrorMessages = err.error.message;
          }
          else
            this.serverErrorMessages = 'Something went wrong.Please contact admin.';
        }
      );
    }else{
      alert('Sorry! Please Read and  Click Agree to use the services offered on www.patanjalimegastore.in')
    }

  }

  resetForm(form: NgForm) {
    this.userService.selectedUser = {
      clientmobilenumber: '',
      mobile_number: '',
      email_id: '',
      password: '',
      user_name: ''
    };
    form.resetForm();
    this.serverErrorMessages = '';
  }

}
