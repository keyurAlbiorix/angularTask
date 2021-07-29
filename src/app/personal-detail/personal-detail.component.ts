import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-personal-detail',
  templateUrl: './personal-detail.component.html',
  styleUrls: ['./personal-detail.component.css']
})
export class PersonalDetailComponent implements OnInit {

  firstFormGroup: FormGroup;
  // secondFormGroup: FormGroup;
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
  submittedData: any = {};
  perdata: any;

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
    let updateData = JSON.parse(localStorage.getItem('updateData'))
    this.perdata = updateData
    if (Object.keys(this.perdata).length === null) {
      this.formData()
    }
    else {
      this.updateFormData()
    }
  }

  formData() {
    this.firstFormGroup = this._formBuilder.group({
      firstName: ['', Validators.required],
      middelName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      imageData: ['', Validators.required],
      birthDate: ['', Validators.required],
      mobileNumber: ['', Validators.required],
      contactNumber: ['', Validators.required],
      presentAddress: ['', Validators.required],
      permanentAddress: ['', Validators.required],
      file: [null],
      isSameAddress: ['', Validators.required],
    });
  }
  updateFormData() {
    this.firstFormGroup = this._formBuilder.group({
      firstName: [this.perdata.firstName, Validators.required],
      middelName: [this.perdata.middelName, Validators.required],
      lastName: [this.perdata.lastName, Validators.required],
      email: [this.perdata.email, Validators.required],
      imageData: ['', Validators.required],
      birthDate: [this.perdata.birthDate, Validators.required],
      mobileNumber: [this.perdata.mobileNumber, Validators.required],
      contactNumber: [this.perdata.contactNumber, Validators.required],
      presentAddress: [this.perdata.presentAddress, Validators.required],
      permanentAddress: [this.perdata.permanentAddress, Validators.required],
      // file: [this.perdata.file],
      isSameAddress: [this.perdata.isSameAddress, Validators.required],
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