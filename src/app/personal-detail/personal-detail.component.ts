import {  Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-personal-detail',
  templateUrl: './personal-detail.component.html',
  styleUrls: ['./personal-detail.component.css']
})
export class PersonalDetailComponent implements OnInit {

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  // submitted: boolean;
  BankComponentComponent: '';

  percentDone: number;
  uploadSuccess: boolean;
  fileName: string;
  fileData: any;
  marked = false;
  theCheckbox = false;
  personalDetail: any;
  win: any;
  name = 'Angular';
  fileToUpload: any;
  imageUrl: any;
  submitted = false;
  submittedData:any= {};

  constructor(private _formBuilder: FormBuilder,
    private heroService: HeroService) {
    this.heroService.personalDetail.subscribe(res => {
      this.personalDetail = res;
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
     this.fileData = localStorage.getItem(this.fileName);
  }

  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
    
      firstName: ['', Validators.required],
      middelName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      mobileNumber: ['', Validators.required],
      contactNumber: ['', Validators.required],
      presentAddress: ['', Validators.required],
      permanentAddress: ['', Validators.required],
      file: [null],
      isSameAddress: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  handleFileInput(file: FileList) {
    this.fileToUpload = file.item(0);

    let reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
    }
    reader.readAsDataURL(this.fileToUpload);
  }
  onSubmit() {
    console.log("nnnnn",this.firstFormGroup);
    
    this.heroService.personalDetail.next(this.firstFormGroup.value)
    this.submitted = true;
    this.submittedData = this.firstFormGroup.value;
  }
  toggleVisibility(firstFormGroup) {
    firstFormGroup.permanentAddress.value = firstFormGroup.presentAddress.value
  }
  checked(value) {
    if (value) {
      this.firstFormGroup.patchValue({
        permanentAddress: this.firstFormGroup.controls.presentAddress.value
      });
    }
  }
}