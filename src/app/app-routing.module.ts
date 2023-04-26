import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes  } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { ProductComponent } from './product/product.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';


const routes : Routes = [
  {path : 'heros',component : HeroesComponent},
  {path : 'product', component : ProductComponent},
  {path : 'add-product', component : AddProductComponent},
  {path : 'product-list', component : ProductListComponent},
  {path : 'product-detail', component : ProductDetailComponent}
]
@NgModule({
  imports : [ RouterModule.forRoot(routes)],
  exports :[RouterModule]
})
export class AppRoutingModule { }

