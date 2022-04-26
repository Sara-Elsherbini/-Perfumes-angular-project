import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from '../shared-classes-and-types/IProduct';


@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.scss']
})
export class ViewProductComponent implements OnInit {



  product!:  IProduct;
  constructor( private httpClient: HttpClient, private acctivatedRoute: ActivatedRoute ) { }
  productId: any;

  ngOnInit(): void {
    this.productId = this.acctivatedRoute.snapshot.paramMap.get("id");
    this.getProduct();
  }
  getProduct(){
    this.httpClient.get<any>(`https://6217b6d27e1fb01b2d5e4412.mockapi.io/products/${this.productId}`).subscribe(
      response => {
        this.product = response;
        console.log(this.product);
      }
    );

}}
