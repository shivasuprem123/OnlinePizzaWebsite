import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from './checkout/checkout.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { OrdersComponent } from './orders/orders.component';
import { PizzaListComponent } from './pizza-list/pizza-list.component';
import { PizzaComponent } from './pizza/pizza.component';
import { RegisterComponent } from './register/register.component';
import { SignInComponent } from './sign-in/sign-in.component';


const routes: Routes = [
  {path:'register' , component:RegisterComponent  },
  {path:'sign-in', component:SignInComponent},
  {path:'home',component:HomeComponent},
  {path:'pizza',component:PizzaComponent},
  {path:'', redirectTo:'/sign-in', pathMatch:'full'},
  {path:'menu',component:MenuComponent},
  {path:'checkout',component:CheckoutComponent},
  {path:'orders',component:OrdersComponent},
  {path:'pizza-list',component:PizzaListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
