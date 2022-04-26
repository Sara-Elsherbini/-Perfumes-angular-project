import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import  {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor( private http:HttpClient) { }
  getproduct(){
    return this.http.get<any>("https://6217b6d27e1fb01b2d5e4412.mockapi.io/products")
    .pipe(map((res:any)=>{
   return res;
    })
  
)}

  }
