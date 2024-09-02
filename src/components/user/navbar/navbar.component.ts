import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiCallService } from '../../../services/apicalls/apicall.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLoggedIn: Boolean = false;
  elements: any;
  mobilenumber: any;
  orgn_name: any;
  orgn_logo: any;
  aboutus: any;
  cartcount: any;
  count: any;
  policydocs: any;
  email: any;
  constructor(private router: Router, private apiCall: ApiCallService, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.apiCall.loggedIn.subscribe(logged => {
      this.isLoggedIn = logged;
      this.getclientorgname();
      this.getalladdtocartproducts()
    });

    this.apiCall.cartdata.subscribe(cartlength => {
      console.log(cartlength)
      this.count = cartlength;
    })
  }


  onLogout() {
    this.apiCall.deleteToken();
    this.isLoggedIn = false;
    this.router.navigate(['/login']);
  }

  getalladdtocartproducts() {
    const data = { cust_id: this.apiCall.getcust_id(), client_id: this.apiCall.getclient_id() }
    this.apiCall.getalladdtocartproducts(data).subscribe((res: any) => {
      this.cartcount = res.result
      this.count = this.cartcount.length;
      console.log(this.count)
    })
  }



  getpolicydocs() {
    const data = { mobilenumber: this.mobilenumber }
    this.apiCall.getpolicydocs(data).subscribe((res: any) => {
      this.policydocs = res.result[0];

    })
  }

  getsaleshistorydetails() {
    this.apiCall.getsaleshistorydetails().subscribe((res: any) => {
      console.log(res)
      this.elements = res.result;
    })
  }

  getclientorgname() {
    const data = { client_id: this.apiCall.getclient_id() }
    this.apiCall.getclientorgname(data).subscribe((res: any) => {
      this.orgn_name = res.result[0].orgn_name;
      this.orgn_logo = res.result[0].orgn_logo;
      this.aboutus = res.result[0].aboutus1;
      this.mobilenumber = res.result[0].mobilenumber;
      this.email = res.result[0].email;
      
    })
  }

}
