import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { BankComponentComponent } from './bank-component/bank-component.component';
import { CurrentOrganizationDetailComponent } from './current-organization-detail/current-organization-detail.component';
import { DisplayDataComponent } from './display-data/display-data.component';
import { EducationDetailComponent } from './education-detail/education-detail.component';
import { EmsComponentComponent } from './ems-component/ems-component.component';
import { ExperienceDetailComponent } from './experience-detail/experience-detail.component';
import { HeroService } from './hero.service';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PersonalDetailComponent } from './personal-detail/personal-detail.component';
import { ProductComponent } from './product/product.component';
import { ProfessionalDetailsComponent } from './professional-details/professional-details.component';
import { RegisterComponent } from './register/register.component';
import { RestApiComponent } from './rest-api/rest-api.component';
import { SaveButtonComponent } from './save-button/save-button.component';
import { SportsListComponent } from './sports-list/sports-list.component';
import { SportsComponent } from './sports/sports.component';
import { StrapperComponent } from './strapper/strapper.component';
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
  {path: 'bankComponent', component:BankComponentComponent,canActivate: [AuthGuard]},
  {path: 'personaldetail', component:PersonalDetailComponent,canActivate: [AuthGuard]},
  {path: 'ProfessionalDetailsComponent', component:ProfessionalDetailsComponent,canActivate: [AuthGuard]},
  {path: 'EducationDetailComponent', component:EducationDetailComponent,canActivate: [AuthGuard]},
  {path: 'saveButon', component:SaveButtonComponent,canActivate: [AuthGuard]},
  {path: 'ExperienceDetailComponent', component:ExperienceDetailComponent,canActivate: [AuthGuard]},
  {path: 'CurrentOrganizationDetailComponent', component:CurrentOrganizationDetailComponent,canActivate: [AuthGuard]},
  {path: 'strapper', component:StrapperComponent,canActivate: [AuthGuard]},
  {path: 'Ems', component:EmsComponentComponent,canActivate: [AuthGuard]},
  {path: 'restapi', component:RestApiComponent, canActivate: [AuthGuard]},
  {path: 'sportsList', component:SportsListComponent, canActivate: [AuthGuard]},
  {path: 'product', component:ProductComponent,canActivate: [AuthGuard]},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
