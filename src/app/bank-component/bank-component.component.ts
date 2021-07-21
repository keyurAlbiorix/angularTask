import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { MatStepper } from '@angular/material/stepper';
import { HeroService } from '../hero.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bank-component',
  templateUrl: './bank-component.component.html',
  styleUrls: ['./bank-component.component.css'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: { displayDefaultIndicatorType: false }
  }]
})
export class BankComponentComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  submitted: boolean;
  userData: string;
  bankNameMat: any;

  constructor(private _formBuilder: FormBuilder, private router: Router, private cd: ChangeDetectorRef,
    private heroService: HeroService) { 
      this.heroService.bankNameMat.subscribe(res=>{
        this.bankNameMat = res;
        console.log("res",res)
      })
    }
  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      bankName: ['', Validators.required],
      accountName: ['', Validators.required],
      bankAcNum: ['', Validators.required],
      ifscCode: ['', Validators.required],
      AadhaarNum: ['', Validators.required],
      panCardNum: ['', Validators.required],
    });
    this.heroService.cast.subscribe(userData => this.userData = userData);
  }
  onSubmit() {
    this.heroService.bankNameMat.next(this.firstFormGroup.value)
    console.log(this.firstFormGroup.value,":: firstFormGroup")
    // this.router.navigate(['/ProfessionalDetailsComponent']);
  }
}
