import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  public products:any=[];
  public grandTotal!:number;
  constructor(private cartservice:CartService) { }

  ngOnInit(): void {
    this.cartservice.getproducts().subscribe(res=>{
      this.products =res;
      this.grandTotal=this.cartservice.getTotalPrice();
     console.log(this.products)
    }) 
  }

  removeItem(item:any)
  {
    this.cartservice.removeCartItem(item);
  }

emptycart(){
  this.cartservice.removeAllCart();
} 

}

