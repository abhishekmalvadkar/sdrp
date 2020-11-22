import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductCategoryComponent } from './product-category/product-category.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FactsheetComponent } from './factsheet/factsheet.component';
import { WhyUsComponent } from './why-us/why-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ProductComponent } from './product/product.component';


const routes: Routes = [
  {path: '' , component: HomeComponent},
  {path: 'product-category' , component: ProductCategoryComponent},
  {path: 'about-us' , component: AboutUsComponent},
  {path: 'factsheet' , component: FactsheetComponent},
  {path: 'why-us' , component: WhyUsComponent},
  {path: 'navigation' , component: NavigationComponent},
  {path: 'products/:id' , component: ProductComponent},
  {path: 'contact-us' , component: ContactUsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes ,  {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
