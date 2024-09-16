import { Component, OnInit } from '@angular/core';
import { CartserviceService } from 'src/services/cartservice/cartservice.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: any;
  uniqueItems: any;
  cartCount: number = 0;
  price: any;
  totalPrice: number;
  increasecount: number;
  decreaseCount: number;
  btnDelete:boolean=false;
  btndecrease:boolean=true;
  constructor(private cartService:CartserviceService){

  }
  ngOnInit(): void {
    debugger
    this.cartItems = this.cartService.getCartItems();
    this.cartItems.forEach(innerArray => {
      debugger;
      this.uniqueItems = innerArray;
      console.log("uniqueItems",this.uniqueItems)
      this.price = this.uniqueItems.map(item => item.price);
    });

    this.cartService.cartCount$.subscribe(count => {
      this.cartCount = count;
    });

    this.totalPrice = this.price[0] * this.cartCount;

    // console.log(this.cartItems)
  }


  increaseQuantity(price:any) {
    debugger
    this.increasecount = ++this.cartCount;
    this.totalPrice = price* this.increasecount;
    if(this.increasecount>1){
      this.btndecrease=true;
    }
    this.cartService.updateCartCount()
    // this.updateCartCount() 
  }
  decreaseQuantity(price:any) {
    if (this.cartCount > 1) {
      this.decreaseCount =--this.cartCount;
      this.totalPrice = price * this.decreaseCount;
      if(this.decreaseCount ===1){
        this.btndecrease=false;
        this.btnDelete=true;
      }
      this.cartService.updateCartCountonDecrement()
      // this.updateCartCount() 
      // Only decrement if cartCount is greater than 0
    }
    
  // ngOnInit(): void {
  //   // debugger
  //   // this.cartItems=this.cartService.getCartItems();
  //   // this.cartItems.forEach(innerArray => {
  //   //   innerArray.forEach(item => {
  //   //     console.log(`Title: ${item.title}, Price: ${item.price}`);
  //   //   });
  //   // });
  //   // // console.log(this.cartItems)

  // }
  }
  deleteItem(item: any) {
    debugger;
    const index = this.uniqueItems.indexOf(item);
    if (index > -1) {
      this.uniqueItems.splice(index, 1);
      // this.cartCount=0
      this.updateCartCount() 
    }
  

  }
  updateCartCount() {
    // Calculate the total count based on item quantities
    const newCount = this.uniqueItems.reduce((acc, item) => acc + (item.quantity || 0), 0);
    
    // Emit the new count using the cartService
    this.cartService.deleteCartCount(newCount);
  }
   
}
