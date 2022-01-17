import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable(
{
  providedIn :'root'
})
export class RegisterService {

  constructor(private fb: FormBuilder, private http:HttpClient) { }

  readonly BaseURI="https://localhost:44335/api";
  
  formModel=this.fb.group(
    {
      username : ['',Validators.required,Validators.email],
      password : ['',[Validators.required,Validators.minLength(5)]]
    }
  );
  register()
  {
    var body={
      username:this.formModel.value.username,
      password:this.formModel.value.password
    };
   return  this.http.post(this.BaseURI+'/AccountMangement/CreateUser?username='+body.username+'&password='+body.password+'',null);
  }
  login()
  {
    var body={
    username:this.formModel.value.username,
    password:this.formModel.value.password
  };
  return  this.http.post(this.BaseURI+'/AccountMangement/Login',body);
  }
  
 
}
