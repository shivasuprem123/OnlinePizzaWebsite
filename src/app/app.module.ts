import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterService } from './SharedServices/register.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { PizzaComponent } from './pizza/pizza.component';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { MenuComponent } from './menu/menu.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CheckoutService } from './SharedServices/checkout.service';
import { OrdersComponent } from './orders/orders.component';
import { PizzaListComponent } from './pizza-list/pizza-list.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    
    HomeComponent,
    SignInComponent,
    PizzaComponent,
    MenuComponent,
    CheckoutComponent,
    OrdersComponent,
    PizzaListComponent
  ],
  imports: [
   
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule,
    ToastrModule.forRoot({
      progressBar:true
    })
    
    
    
  ],
  providers: [RegisterService,CheckoutService],
  bootstrap: [AppComponent]
})
export class AppModule { }
