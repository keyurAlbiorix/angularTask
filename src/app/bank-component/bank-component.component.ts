import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import { MatStepper } from '@angular/material/stepper';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-bank-component',
  templateUrl: './bank-component.component.html',
  styleUrls: ['./bank-component.component.css'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {displayDefaultIndicatorType: false}
  }]
})
export class BankComponentComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  submitted: boolean;
  userData:string;
  constructor(private _formBuilder: FormBuilder, private cd: ChangeDetectorRef, 
    private heroService: HeroService) { }

  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      bankName: ['', Validators.required],
      accountName:['',Validators.required],
      bankAcNum:['',Validators.required],
      ifscCode:['',Validators.required],
      AadhaarNum:['',Validators.required],
      panCardNum:['',Validators.required],
    });
    this.heroService.cast.subscribe(userData=> this.userData=userData);      
  }
  onSubmit(){

  }
  goBack(stepper: MatStepper){
    stepper.previous();
}

goForward(stepper: MatStepper){
    stepper.next();
}
}
