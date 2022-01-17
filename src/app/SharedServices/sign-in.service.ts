import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SignInService {

  constructor(private fb: FormBuilder, private http:HttpClient) { }
  formModel=this.fb.group(
    {
      username : ['',Validators.email],
      password : ['',[Validators.required,Validators.minLength(5)]]
    }
  );
  
}
