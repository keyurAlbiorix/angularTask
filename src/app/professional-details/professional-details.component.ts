import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { Router } from '@angular/router';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-professional-details',
  templateUrl: './professional-details.component.html',
  styleUrls: ['./professional-details.component.css']
})
export class ProfessionalDetailsComponent implements OnInit {

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  submitted: boolean;
  chosenYearDate: Date;
  chosenMonthDate: Date = new Date(2020,0,1);
  bankNameMat: any;
  professionalDetail: any;
  constructor(private _formBuilder: FormBuilder, private router: Router,
    private heroService: HeroService) { 
      this.heroService.professionalDetail.subscribe(res=>{
        this.professionalDetail = res;
        console.log("res",res)
      })
    }

  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      Designation: ['', Validators.required],
      Department:['',Validators.required],
      currentLocation:['',Validators.required],
      skill:['',Validators.required],
      panCardNum:['',Validators.required],
      });
  }
  onSubmit(){
    this.heroService.professionalDetail.next(this.firstFormGroup.value)
  }
  goBack(stepper: MatStepper){
    stepper.previous();
}

goForward(stepper: MatStepper){
    stepper.next();
}

foods:any = [
  {value: 'steak-0', viewValue: '0 years'},
  {value: 'pizza-1', viewValue: '1 years'},
  {value: 'tacos-2', viewValue: '2 years'},
  {value: 'steak-0', viewValue: '3 years'},
  {value: 'pizza-1', viewValue: '4 years'},
  {value: 'tacos-2', viewValue: '5 years'},
  {value: 'steak-0', viewValue: '6 years'},
  {value: 'pizza-1', viewValue: '7 years'},
  {value: 'tacos-2', viewValue: '8 years'},
  {value: 'steak-0', viewValue: '9 years'},
  {value: 'pizza-1', viewValue: '10 years'},
  {value: 'tacos-2', viewValue: '11 years'}
];
months:any = [
  {value: 'steak-0', viewValue: '0 month'},
  {value: 'pizza-1', viewValue: '1 month'},
  {value: 'tacos-2', viewValue: '2 month'},
  {value: 'steak-0', viewValue: '3 month'},
  {value: 'pizza-1', viewValue: '4 month'},
  {value: 'tacos-2', viewValue: '5 month'},
  {value: 'steak-0', viewValue: '6 month'},
  {value: 'pizza-1', viewValue: '7 month'},
  {value: 'tacos-2', viewValue: '8 month'},
  {value: 'steak-0', viewValue: '9 month'},
  {value: 'pizza-1', viewValue: '10 month'},
  {value: 'tacos-2', viewValue: '11 month'}
];
}
