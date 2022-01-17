import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../SharedServices/register.service';
import { ToastrService } from 'ngx-toastr';
import { of } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public service: RegisterService,private toastrservice: ToastrService) { }

  ngOnInit(): void {
    this.service.formModel.reset();
  }
  
  onSubmit(){
    this.service.register().subscribe(
      (res:any)=>
      {
        if(res.succeeded)
        {
          this.service.formModel.reset();
          this.toastrservice.success('New User Created!',' Registration Sucessful.');
        }
        else {
          res.errors.forEach((element: { code: any; description: any; }) =>
           {
            switch (element.code) 
            {
              case 'DuplicateUserName':
                this.toastrservice.error('Username is already taken','Registration failed.');
                break;
              default:
              this.toastrservice.error(element.description,'Registration failed.');
                break;
            }
          },
            (          err: any) =>{console.log(err);}
          );
        }
      },
      
    );
  }
}
