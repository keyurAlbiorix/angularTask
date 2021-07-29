import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
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
  // firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  submitted: boolean;
  userData: string;
  bankNameMat: any;
  personalDetail: any;
  perdata: any;

  constructor(private _formBuilder: FormBuilder, private router: Router, private cd: ChangeDetectorRef,
    private heroService: HeroService) {
    this.heroService.bankNameMat.subscribe(res => {
      this.bankNameMat = res;
    })
  }
  ngOnInit(): void {
    let updateData = JSON.parse(localStorage.getItem('updateData'))
    this.perdata = updateData
    if (Object.keys(this.perdata).length === null) {
      this.formData()
    }
    else {
      this.updateFormData()
    }
    this.heroService.cast.subscribe(userData => this.userData = userData);
  }
  formData() {
    this.secondFormGroup = this._formBuilder.group({
      bankName: ['', Validators.required],
      accountName: ['', Validators.required],
      bankAcNum: ['', Validators.required],
      ifscCode: ['', Validators.required],
      AadhaarNum: ['', Validators.required],
      panCardNum: ['', Validators.required],
    });
  }
  updateFormData() {
    this.secondFormGroup = this._formBuilder.group({
      bankName: [this.perdata.bankName, Validators.required],
      accountName: [this.perdata.accountName, Validators.required],
      bankAcNum: [this.perdata.bankAcNum, Validators.required],
      ifscCode: [this.perdata.ifscCode, Validators.required],
      AadhaarNum: [this.perdata.AadhaarNum, Validators.required],
      panCardNum: [this.perdata.panCardNum, Validators.required],
    });
  }
  onSubmit() {
    this.heroService.bankNameMat.next(this.secondFormGroup.value)
  }
}
