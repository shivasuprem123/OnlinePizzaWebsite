import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

   readonly BaseURI='https://localhost:44335/api';
  constructor(
    private fb:FormBuilder,
    private http:HttpClient
  ) { }

  getOrders():Observable<any> {
    return this.http.get("https://localhost:44335/api/CheckOut")

  }

 //https://localhost:44335/api/CheckOut
  formModel=this.fb.group({
    Name:['',Validators.required],
    MobileNumber:['',Validators.required],
    Place:['',Validators.required],
    city:['',Validators.required],
    Email:['',Validators.required]
  });
register()
{
  var body={
    Name:this.formModel.value.Name,
    MobileNumber:this.formModel.value.MobileNumber,
    Place:this.formModel.value.Place,
    city:this.formModel.value.city,
    Email:this.formModel.value.Email
  };
 return  this.http.post(this.BaseURI+'/CheckOut',body);
}

}
