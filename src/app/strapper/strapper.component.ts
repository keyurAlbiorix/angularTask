import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';

import { HeroService } from '../hero.service';

@Component({
  selector: 'app-strapper',
  templateUrl: './strapper.component.html',
  styleUrls: ['./strapper.component.css'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: { displayDefaultIndicatorType: false }
  }]
})
export class StrapperComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  
  thirdFormGroup:FormGroup;
  fourthFormGroup:FormGroup;
  fifthFormGroup:FormGroup;
  sixFormGroup:FormGroup;
  submitted: boolean;
  BankComponentComponent: '';

  percentDone: number;
  uploadSuccess: boolean;
  fileName: string;
  fileData: any;

  marked = false;
  theCheckbox = false;
  personalDetail: any;

  constructor(private _formBuilder: FormBuilder,
    private heroService: HeroService) {
    this.heroService.personalDetail.subscribe(res => {
      this.personalDetail = res;
    })
  }

  onClick() {

  } 
  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({

    });
    this.secondFormGroup = this._formBuilder.group({

    });
  }

  onSubmit() {
  }

}
