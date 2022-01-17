import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css']
})
export class PizzaComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  LogOut(){
    localStorage.removeItem('token');
    this.router.navigate(['/register']);
  }

}
