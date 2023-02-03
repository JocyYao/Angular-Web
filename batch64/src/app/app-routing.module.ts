import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CustomerComponent } from './customer/customer.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';
import { RegisterComponent } from './register/register.component';
import { SupportComponent } from './support/support.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path:'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: '', component: CustomerComponent}, //the home page will be this path
  {path: 'databinding', component: DatabindingComponent},
  {path: 'contactUs', component: ContactUsComponent},
  {path: "about",  component: AboutComponent},
  {path: "product",  component: ProductComponent},
  {path: "support",  component: SupportComponent},
  {path: "user",  component: UserComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
