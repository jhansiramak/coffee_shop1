import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

import { BehaviorSubject, Observable } from 'rxjs';

import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {


  noAuthHeader = { headers: new HttpHeaders({ NoAuth: 'True' }) };

  private loggedInSubject = new BehaviorSubject(false);
  private cartdatasource = new BehaviorSubject<string|null>(null);
  cartdata = this.cartdatasource.asObservable();


  constructor(private http: HttpClient) { }
  selectedUser : User={
    mobile_number: '',
    email_id: '',
    password: '',
    user_name:'',
    clientmobilenumber:''
  };

  getcartcount(cartdata: string): void {
    this.cartdatasource.next(cartdata);
  }

  postUser(user: User) {
    return this.http.post(environment.apiBaseUrl + '/RegisterCustomer', user, this.noAuthHeader);
  }

  login(authCredentials: any) {
    return this.http.post(environment.apiBaseUrl + '/customerlogin',authCredentials, this.noAuthHeader);
  }

  getUserProfile() {
    return this.http.get(environment.apiBaseUrl + '/userProfile');
  }


getcategories(data:any){
  return this.http.post(environment.apiBaseUrl + '/getcategories', data);
}

getsubcategories(data:any){
  return this.http.post(environment.apiBaseUrl + '/getsubcategories', data);
}

getcatalogproducts(data:any){
  return this.http.post(environment.apiBaseUrl + '/getcatalogproducts', data);
}

getallcatalogproducts(data:any){
  return this.http.post(environment.apiBaseUrl + '/getallcatalogproducts', data);
}

getcatalogbanners(data:any){
  return this.http.post(environment.apiBaseUrl + '/getcatalogbanners', data);

}

getproductdetailed(data:any){
  return this.http.post(environment.apiBaseUrl + '/getproductdetailed', data);
}

sendpaymentdetailsemail(data:any){
  return this.http.post(environment.apiBaseUrl + '/sendpaymentdetailsemail', data);
}

saveproductstoaddtocart(data:any){
  return this.http.post(environment.apiBaseUrl + '/saveproductstocart', data);

}

getalladdtocartproducts(data:any){
  return this.http.post(environment.apiBaseUrl + '/getalladdtocartproducts',data);
}

deletecart(data:any){
  return this.http.post(environment.apiBaseUrl + '/deletecart', data);
}


getorderdetails(data:any){
  return this.http.post(environment.apiBaseUrl + '/getorderdetails', data);
}

saveofflinepaymentdetails(data:any){
  return this.http.post(environment.apiBaseUrl + '/saveofflinepaymentdetails', data);

}

getsaleshistorydetails(){
  return this.http.get(environment.apiBaseUrl + '/getsaleshistorydetails/'+this.getcust_id());

}

getclientorgname(data:any){
  return this.http.post(environment.apiBaseUrl + '/getclientorgname',data);
}

getpolicydocs(data:any){
  return this.http.post(environment.apiBaseUrl + '/getpolicydocs',data);
}



offlinepaymentdetails(data:any){
  return this.http.post(environment.apiBaseUrl + '/offlinepaymentdetails',data);
}

fetchclient_id(){
  return this.http.get(environment.apiBaseUrl + '/fetchclient_id');

}

fetchallproducts(data:any){
  return this.http.post(environment.apiBaseUrl + '/fetchallproducts',data);

}

getfreedeliveryamount(){
  return this.http.get(environment.apiBaseUrl + '/getfreedeliveryamount');

}

gethealthtipsgallery(){
  return this.http.get(environment.apiBaseUrl + '/gethealthtipsgallery/'+this.getclient_id());

}

getofflinepaymentdetails(){
  return this.http.get(environment.apiBaseUrl + '/getofflinepaymentdetails/'+this.getclient_id());

}


getclientmobilenumber(){
  return this.http.get(environment.apiBaseUrl + '/getclientmobilenumber/'+this.getcust_id());

}

gethealthtipsvideos(){
  return this.http.get(environment.apiBaseUrl + '/gethealthtipsvideos/'+this.getclient_id());

}




getstoreaddress(){
  return this.http.get(environment.apiBaseUrl + '/getstoreaddress/'+this.getclient_id());
}

getsocialmedialinks(){
  return this.http.get(environment.apiBaseUrl + '/getsocialmedialinks/'+this.getclient_id());
}





getclienttemplateid(){
  return this.http.get(environment.apiBaseUrl +'/getclienttemplateid/'+this.getclient_id());
}



fetchAuthKeyData(){
  return this.http.get(environment.apiBaseUrl +'/fetchAuthKeyData/'+this.getclient_id());

}


  // Helper Methods
  setToken(
    authtoken: string) {
    localStorage.setItem('authtoken', authtoken);
  }

  setuserToken(usertoken: string) {
    localStorage.setItem('usertoken', usertoken);
  }

  getuserToken() {
    return localStorage.getItem('usertoken');
  }

  getToken() {
    return localStorage.getItem('authtoken');
  }

  setcust_id(cust_id: string) {
    localStorage.setItem('cust_id',cust_id);
  }

  setclient_id(client_id:string){
    localStorage.setItem('client_id',client_id);
  }

  settemplate_id(template_id:string){
    localStorage.setItem('template_id',template_id);
  }


  getsendsms_enabled() {
    return localStorage.getItem('sendsms_enabled');
  }

  getfree_delivery_min_amt() {
    return localStorage.getItem('free_delivery_min_amt');
  }

  getclient_id() {
    return localStorage.getItem('client_id');
  }

  gettemplate_id() {
    return localStorage.getItem('template_id');
  }

  getcust_id() {
    return localStorage.getItem('cust_id');
  }

  deleteToken() {
    localStorage.removeItem('authtoken');
    localStorage.removeItem('cust_id');
    localStorage.removeItem('template_id');
    localStorage.removeItem('sendsms_enabled');
  }


  getUserPayload() {
    let token = this.getToken();
    if (token) {
      let userPayload = atob(token.split('.')[1]);
      return JSON.parse(userPayload);
    } else {
      return null;
    }
  }

  isLoggedIn() {
    let userPayload = this.getUserPayload();
    if (userPayload ?.exp > Date.now()/1000) {
      this.loggedInSubject.next(true);
      return true;
    } else {
      return false;
    }
  }

  get loggedIn() {
    return this.loggedInSubject.asObservable();
  }


}
