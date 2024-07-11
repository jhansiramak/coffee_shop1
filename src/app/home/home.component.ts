import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiCallService } from '../apicalls/apicall.service';

import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from "../pipes/search.pipe";
import { RouterLink } from '@angular/router';
import { ProductService } from '../apicalls/product.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
//   isLoggedIn;
//   catalogbanner1: any;
//   catalogbanner2: any;
//   catalogbanner3: any;
//   catalogproducts: any;
//   errormessage: any;
//   subcategories: any;
//   categories: any;
//   searchkeyproducts: any;
//   categoryproductslist: any;
//   count: any;

//   constructor(private apiCall: ApiCallService, private router: Router) { }

//   ngOnInit(): void {
//     this.isLoggedIn=this.apiCall.isLoggedIn();

//     this.apiCall.fetchclient_id().subscribe((res: any)=>{
//       this.apiCall.setclient_id(res['client_id']);
//     })

//     this.apiCall.getfreedeliveryamount().subscribe((res: any)=>{
//       // this.apiCall.setfree_delivery_min_amt(res['free_delivery_min_amt']);
//       // this.apiCall.setsendsms_enabled(res['sendsms_enabled']);


//     })

//     this.getcatalogbanners()
//     this.fetchallproducts()
//     this.getcategories()
//     this.getclienttemplateid()

//   }
//   getclienttemplateid(){
//   this.apiCall.getclienttemplateid().subscribe((res: any)=>{
//     this.apiCall.settemplate_id(res.result[0]['template_id']);
//   })
//   }

//   getalladdtocartproducts() {
//     const data={cust_id:this.apiCall.getcust_id(),client_id: this.apiCall.getclient_id()}
//     this.apiCall.getalladdtocartproducts(data).subscribe((res: any) => {
//       if (res.status == 'error') {
//       }else{
//         this.count = res.result.length;
//         this.apiCall.getcartcount(this.count );
//       }

//     })
//   }




//   fetchallproducts(){
//     const data ={client_id: this.apiCall.getclient_id()}
//     this.apiCall.fetchallproducts(data).subscribe((res: any)=>{
//       console.log(res)
//       this.catalogproducts=res.data;
//     })
//   }


//   getcategories(){
//     const data={client_id: this.apiCall.getclient_id()}
//     this.apiCall.getcategories(data).subscribe((res: any)=>{
//       this.categories = res.result;
//     })
//   }

//   getsubcategories(cat_id:any){

//     const data={client_id: this.apiCall.getclient_id(),cat_id:cat_id}
//     this.apiCall.getsubcategories(data).subscribe((res: any)=>{
//       this.subcategories = res.result;
//     })
//   }


//   getcatalogproducts(subcat_id:any){
//     const data={client_id: this.apiCall.getclient_id(),subcat_id:subcat_id}
//     this.apiCall.getcatalogproducts(data).subscribe((res: any)=>{
//       this.catalogproducts=''
//       this.categoryproductslist = res.result;
//       console.log(this.categoryproductslist)
//       if(res.status=='error'){
//         this.errormessage=res.message
//       }
//     })
//   }

//   getcatalogbanners(){
//     const data={client_id: this.apiCall.getclient_id()}
//     this.apiCall.getcatalogbanners(data).subscribe((res: any)=>{
//       this.catalogbanner1 = res.result[0];
//       this.catalogbanner2 = res.result[1];
//       this.catalogbanner3 = res.result[2];
//     })
//   }



//   onLogout(){
//     this.apiCall.deleteToken();
//     this.router.navigate(['/login']);
//   }


//   onChange(event) {
//     this.getsubcategories(event.target.value)
// }
// onChangesubcat(event) {
//   this.getcatalogproducts(event.target.value)
// }




// checkisLoggedIn(el) {
//   if (!this.isLoggedIn) {
//     this.router.navigate(['/login'])


//   } else {
//     this.saveproductstoaddtocart(el)

//   }
// }

// saveproductstoaddtocart(product) {
//   const data = { product_id: product.product_id, cust_id: this.apiCall.getcust_id(),client_id:this.apiCall.getclient_id(),product_qty:1,product_size:product.product_size,product_total_price:product.product_offered_price,product_qty_unit:product.product_size,product_unit_price:product.product_offered_price}
//   this.apiCall.saveproductstoaddtocart(data).subscribe((res: any) => {
//     alert('Product added to cart successfully');
//     this.getalladdtocartproducts()
//   })
// }


// freesearchproducts(data){

//    data.client_id=this.apiCall.getclient_id()
// //   this.apiCall.freesearchproducts(data).subscribe((res: any)=>{
// //     console.log(res)
// //     this.catalogproducts=''
// //     this.searchkeyproducts=res.result;

// //   },err=>{
// //     alert(err.error.message)
// //   })
//   }
productsArr: any[] = [];
searchText: string = '';
p: number = 1;

constructor(private productService: ProductService) { }

ngOnInit(): void {
  // Assuming getProductDetails returns an array of products
  this.productsArr=this.productService.getAllProducts()
}
}
