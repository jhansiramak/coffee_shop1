import { Component, OnInit } from '@angular/core';
import { CartserviceService } from 'src/services/cartservice/cartservice.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems:any;
  constructor(private cartService:CartserviceService){

  }
  ngOnInit(): void {
    debugger
    this.cartItems=this.cartService.getCartItems();
    this.cartItems.forEach(innerArray => {
      innerArray.forEach(item => {
        console.log(`Title: ${item.title}, Price: ${item.price}`);
      });
    });
    // console.log(this.cartItems)
  }
}
