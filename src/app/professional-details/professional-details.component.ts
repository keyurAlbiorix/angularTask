import { Component, OnInit } from '@angular/core';
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

 
  thirdFormGroup:FormGroup;
  submitted: boolean;
  chosenYearDate: Date;
  chosenMonthDate: Date = new Date(2020,0,1);
  bankNameMat: any;
  professionalDetail: any;
  fileName: any;
  fileData:any;
  perdata: any;
  constructor(private _formBuilder: FormBuilder, private router: Router,
    private heroService: HeroService) { 
      this.heroService.professionalDetail.subscribe(res=>{
        this.professionalDetail = res;
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
  }
  formData(){
    this.thirdFormGroup = this._formBuilder.group({
      Designation: ['', Validators.required],
      Department:['',Validators.required],
      currentLocation:['',Validators.required],
      skill:['',Validators.required],
      panCardNum:['',Validators.required],
      });
  }
  updateFormData(){
    this.thirdFormGroup = this._formBuilder.group({
      Designation: [this.perdata.Designation, Validators.required],
      Department:[this.perdata.Department,Validators.required],
      currentLocation:[this.perdata.currentLocation,Validators.required],
      skill:[this.perdata.skill,Validators.required],
      panCardNum:[this.perdata.panCardNum,Validators.required],
      });
  }
  onSubmit(){
    console.log("years,months", this.thirdFormGroup.value)
    this.heroService.professionalDetail.next(this.thirdFormGroup.value)
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

public onFileChange(event) {
  const reader = new FileReader();

  if (event.target.files && event.target.files.length) {
    this.fileName = event.target.files[0].name;
    const [file] = event.target.files;
    reader.readAsDataURL(file);
    reader.onload = () => {
      localStorage.setItem(this.fileName, reader.result as string);
    };
  }
}
onClick() {
  this.fileData = localStorage.getItem(this.fileName);
  window.open(this.fileData,"_blank");
}


//  fileChangeEvent(fileInput) {
//   if (fileInput.target.files && fileInput.target.files[0] ) {
//     this.fileData = localStorage.getItem(this.fileName);
//     var blob = new Blob( this.fileData );
//     var url = window.URL.createObjectURL(blob);
//   }
  // }
}
