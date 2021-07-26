import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TestComponent } from './test/test.component';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { NavbarComponent } from './navbar/navbar.component';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { HeroService } from './hero.service';
import { CommonModule } from '@angular/common';

import { ToastrModule } from 'ngx-toastr';
import { EditComComponent } from './edit-com/edit-com.component';
import { AuthGuard } from './auth.guard';
import { SportsComponent } from './sports/sports.component';
import { SportsListComponent } from './sports-list/sports-list.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DisplayDataComponent } from './display-data/display-data.component';
import { ProductComponent } from './product/product.component';
import { RestApiComponent } from './rest-api/rest-api.component';
import { EditRestapisComponent } from './edit-restapis/edit-restapis.component';
import { StrapperComponent } from './strapper/strapper.component';
import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { BankComponentComponent } from './bank-component/bank-component.component';
import { ProfessionalDetailsComponent } from './professional-details/professional-details.component';
import { EducationDetailComponent } from './education-detail/education-detail.component';
import { ExperienceDetailComponent } from './experience-detail/experience-detail.component';
import { CurrentOrganizationDetailComponent } from './current-organization-detail/current-organization-detail.component';
import {MatDividerModule} from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { SaveButtonComponent } from './save-button/save-button.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { PersonalDetailComponent } from './personal-detail/personal-detail.component';
import { EmsComponentComponent } from './ems-component/ems-component.component'; 
// import { JwPaginationModule } from 'jw-angular-pagination';

@NgModule({
  declarations: [
    // InputDisabledDirective,
    AppComponent,
    TestComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    EditComComponent,
    SportsComponent,
    SportsListComponent,
    DisplayDataComponent,
    DisplayDataComponent,
    ProductComponent,
    RestApiComponent,
    EditRestapisComponent,
    StrapperComponent,
    BankComponentComponent,
    ProfessionalDetailsComponent,
    EducationDetailComponent,
    ExperienceDetailComponent,
    CurrentOrganizationDetailComponent,
    SaveButtonComponent,
    PersonalDetailComponent,
    EmsComponentComponent
  ],
  imports: [MatIconModule,
    // JwPaginationModule,
    MatCheckboxModule,
    MatDividerModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatStepperModule,
    MatInputModule,
    MatButtonModule,
    MatAutocompleteModule,
    MatInputModule,
    Ng2SearchPipeModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatDialogModule,
    CommonModule,
    BrowserAnimationsModule, 
    ToastrModule.forRoot(),
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatFormFieldModule
    // MatFormFieldControl
  ],
  providers: [HeroService, AuthGuard, Title,
     { provide: MAT_DIALOG_DATA, useValue: {} },
  ],
  entryComponents:[TestComponent,RestApiComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
