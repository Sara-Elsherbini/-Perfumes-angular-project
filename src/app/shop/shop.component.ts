import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { response } from 'express';
import { ApiService } from '../service/api.service';
import { CartService } from '../service/cart.service';
import { IProduct } from '../shared-classes-and-types/IProduct';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})

export class ShopComponent implements OnInit {
  products!: IProduct[];
  public productList:any;

  constructor(private api:ApiService,private cartservice:CartService) { }

  ngOnInit(): void {
    this.api.getproduct().subscribe(res=>{
    this.productList=res;
    this.productList.forEach((a:any )=> {
       Object.assign(a,{quantity:1,total:a.price});
    });
    })
  }
  addtoCart(item:any)
  {
    this.cartservice.addtoCart(item);

  }
}
