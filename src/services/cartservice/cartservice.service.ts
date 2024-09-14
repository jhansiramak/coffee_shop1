import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartserviceService {
  cart=[]
  private cartCount=new BehaviorSubject<number>(0);
  cartCount$=this.cartCount.asObservable();
  constructor() { }
  addToCart(items:any){
    this.cart.push(items);
    let currentCount=this.cartCount.value;
    this.cartCount.next(currentCount+1);
  }
  getCartItems(){
    return this.cart;
    console.log(this.cart)
  }
}
