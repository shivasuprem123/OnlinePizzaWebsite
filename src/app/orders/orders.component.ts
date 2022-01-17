import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CheckOut } from '../classes/CheckOut';
import { CheckoutService } from '../SharedServices/checkout.service';
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  constructor(private _CheckOutService:CheckoutService, private router:Router) { }
  lstCheckOut!: CheckOut[] ;
 
  ngOnInit() {
    this._CheckOutService.getOrders()
    .subscribe
    (
      data=>
      {
          this.lstCheckOut = data;
      }
    )
  }
  onLogout() {
    localStorage.removeItem('token');
    this.router.navigate(['/log-in']);
 }
}