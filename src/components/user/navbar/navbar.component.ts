import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { ApiCallService } from '../../../services/apicalls/apicall.service';
import { every } from 'rxjs';
import { CartserviceService } from 'src/services/cartservice/cartservice.service';

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
  count: any;
  policydocs: any;
  email: any;
  showCartIcon:boolean=true;
  cartCount:number=0;
  constructor(private router: Router, private apiCall: ApiCallService, private route: ActivatedRoute, private cartService:CartserviceService) {

  }

  ngOnInit(): void {
    debugger
    this.apiCall.loggedIn.subscribe(logged => {
      this.isLoggedIn = logged;
      this.getclientorgname();
      this.cartService.cartCount$.subscribe(count => {
        this.cartCount = count;
      });
    });

    this.apiCall.cartdata.subscribe(cartlength => {
      console.log(cartlength)
      this.count = cartlength;
    }) 
     this.router.events.subscribe(event=>{
      if(event instanceof NavigationEnd){
          // List of routes where the cart icon should be hidden
        const hiddenRoutes=['/login','/signup','']; // Check for '' (empty string) for introduction
        this.showCartIcon=!hiddenRoutes.some(route=>event.url===route||event.url==='/')// Handle empty string and root
      }
     })

    //  this.cartcount=parseInt(localStorage.getItem('count'))
  }


  onLogout() {
    this.apiCall.deleteToken();
    this.isLoggedIn = false;
    this.router.navigate(['/login']);
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
