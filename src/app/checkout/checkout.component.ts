import { Component, OnInit } from '@angular/core';
import { CheckoutService } from '../SharedServices/checkout.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor(
    public service:CheckoutService,
    private toastrservice: ToastrService
    ) { }

  ngOnInit(): void {
  }
  onSumbit()
  {
    this.service.register().subscribe(
      (res:any)=>
      {
        if(res.succeeded)
        {
          this.service.formModel.reset();
          this.toastrservice.success('Transaction Sucessfull','  Pizza ordered  Sucessful.');
        }
        else {
         
        }
      },
      
    );
  }

}
