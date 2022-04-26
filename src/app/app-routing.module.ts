import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularMaterialComponent } from './angular-material/angular-material.component';
import { LoginComponent } from './login/login.component';
import { ShopComponent } from './shop/shop.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { CartComponent } from './cart/cart.component';


const routes: Routes = [
  {path:'',redirectTo:'/Home',pathMatch:'full'},
  {path:'Home',component:HomeComponent},
  {path:'Material',component:AngularMaterialComponent},
  {path:'Shop',component:ShopComponent},
  {path:'Login',component:LoginComponent},
  {path:'Register',component:RegisterComponent},
  {path:'cart', component:CartComponent},
  {path:'Product/:id',component:ViewProductComponent},
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
