import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import { MatStepper } from '@angular/material/stepper';
import { Router } from '@angular/router';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-strapper',
  templateUrl: './strapper.component.html',
  styleUrls: ['./strapper.component.css'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {displayDefaultIndicatorType: false}
  }]
})
export class StrapperComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  submitted: boolean;
  BankComponentComponent:'';

  percentDone: number;
  uploadSuccess: boolean;
  fileName: string;
  fileData: any;

  marked = false;
  theCheckbox = false;
  personalDetail: any;

  // constructor(private _formBuilder: FormBuilder) { }
  constructor(private _formBuilder: FormBuilder, private router: Router, private cd: ChangeDetectorRef,
    private heroService: HeroService) { 
      this.heroService.personalDetail.subscribe(res=>{
        this.personalDetail = res;
        console.log("res",res)
      })
    }
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
    const fileData = localStorage.getItem(this.fileName);
    setTimeout(function() {
      //FireFox seems to require a setTimeout for this to work.
      document.body.appendChild(
        document.createElement("iframe")
      ).src = fileData;
    }, 0);
  }


  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
      firstName:['',Validators.required],
      middelName:['',Validators.required],
      lastName:['',Validators.required],
      email:['',Validators.required],
      mobileNumber:['',Validators.required],
      contactNumber:['',Validators.required],
      presentAddress:['',Validators.required],
      permanentAddress:['',Validators.required],
      file: [null]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }
  goBack(stepper: MatStepper){
    stepper.previous();
}

goForward(stepper: MatStepper){
    stepper.next();
}

name = 'Angular';
fileToUpload: any;
imageUrl: any;
handleFileInput(file: FileList) {
  this.fileToUpload = file.item(0);

  //Show image preview
  let reader = new FileReader();
  reader.onload = (event: any) => {
    this.imageUrl = event.target.result;
  }
  reader.readAsDataURL(this.fileToUpload);
}
onSubmit() {
  this.heroService.personalDetail.next(this.firstFormGroup.value)
}
toggleVisibility(e){
  this.marked= e.checked;
  console.log(" e.target.checked", e)
}
}
