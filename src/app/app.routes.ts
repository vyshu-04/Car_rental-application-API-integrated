import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { DashboardComponent } from './dashboard/dashboard.component';


export const routes: Routes = [
    {
        path:'login',
        component:LoginComponent,
    },
    {
        path:'',
        component:LoginComponent
    },
    { path:'home',component:HomeComponent},
    { path:'product',component:ProductComponent},
    {path:'services',component:ServicesComponent},
    {path:'contact',component:ContactComponent},
  {path:'dashboard',component:DashboardComponent},

];
