import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from '../SharedServices/register.service';
import { ToastrService } from 'ngx-toastr';
import { Injectable } from '@angular/core'; // at top

@Injectable({
  providedIn: 'root' // just before your class
})

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  
 
  constructor(
    public service:RegisterService,
    private router:Router, 
    public toaster:ToastrService
    ) { }

  ngOnInit(): void {
    this.service.formModel.reset();

  }
  
  onSubmit() 
  {
    this.service.login().subscribe(
      (res: any) => 
      {
        localStorage.setItem('token', res.token);
        this.router.navigateByUrl('/home');
      },

      err=>{console.log(err);}
     
      
    );
    console.log("Created");
  }
}