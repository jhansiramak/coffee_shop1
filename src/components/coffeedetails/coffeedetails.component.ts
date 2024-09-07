import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/services/productService/product.service';

@Component({
  selector: 'app-coffeedetails',
  templateUrl: './coffeedetails.component.html',
  styleUrls: ['./coffeedetails.component.css']
})
export class CoffeedetailsComponent implements OnInit {
  id:any;
  productsArr: any[]=[];
  data:any[]=[];
  constructor(private route:ActivatedRoute,private productDetails:ProductService){}
  ngOnInit(){
    debugger 
    this.id=parseInt(this.route.snapshot.paramMap.get('id'));
    this.productsArr=this.productDetails.getAllProducts()
    console.log(this.productsArr,"iiii");
    this.getProductById(this.id)
  }
  getProductById(id:any){
    debugger
     this.data=this.productsArr.filter(x=>x.id===this.id)
    console.log(this.data,"jjjj")
  }
}
