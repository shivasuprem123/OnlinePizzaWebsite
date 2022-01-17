import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PizzalistService {
 
  constructor(private http:HttpClient) { }
  getPizza():Observable<any> {
    return this.http.get("https://localhost:44335/api/Pizza")

  }
}
