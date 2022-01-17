import { Component, OnInit } from '@angular/core';
import { PizzalistService } from '../SharedServices/pizzalist.service';
import { Router } from '@angular/router';
import { Pizzas } from '../classes/Pizzas';

@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.css']
})
export class PizzaListComponent implements OnInit {

  constructor(private plist:PizzalistService, private router:Router) { }
  lstPizza!: Pizzas[] ;

  ngOnInit(): void {
    this.plist.getPizza()
    .subscribe
    (
      data=>
      {
          this.lstPizza = data;
      }
    )
  }
}