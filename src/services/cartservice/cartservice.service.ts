import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartserviceService {
  private cartCountSource=new BehaviorSubject<number>(0);
  constructor() { }
}
