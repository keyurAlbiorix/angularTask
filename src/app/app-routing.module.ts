import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { DisplayDataComponent } from './display-data/display-data.component';
import { HeroService } from './hero.service';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductComponent } from './product/product.component';
import { RegisterComponent } from './register/register.component';
import { RestApiComponent } from './rest-api/rest-api.component';
import { SportsListComponent } from './sports-list/sports-list.component';
import { SportsComponent } from './sports/sports.component';
// import { LoginComponent } from './login/login.component';
// import { RegisterComponent } from './register/register.component';
import { TestComponent } from './test/test.component';
const routes: Routes = [

  // {path: '',component: LoginComponent},
  // {path: '', component:RegisterComponent}
  {path: 'test', component:TestComponent, canActivate: [AuthGuard]},
  {
    path: 'navbar', component:NavbarComponent
  },
  {path: 'Home', component:HomeComponent},
  {path: 'displayData', component:DisplayDataComponent},
  {path: 'login', component:LoginComponent},
  {path: 'register', component:RegisterComponent},
  {path: 'hero', component:HeroService},
  {path: 'sports', component:SportsComponent,canActivate: [AuthGuard]},
  {path: 'restapi', component:RestApiComponent, canActivate: [AuthGuard]},
  {path: 'sportsList', component:SportsListComponent, canActivate: [AuthGuard]},
  {path: 'product', component:ProductComponent,canActivate: [AuthGuard]},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
