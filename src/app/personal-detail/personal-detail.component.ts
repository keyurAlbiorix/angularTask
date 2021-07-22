import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-personal-detail',
  templateUrl: './personal-detail.component.html',
  styleUrls: ['./personal-detail.component.css']
})
export class PersonalDetailComponent implements OnInit {

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  submitted: boolean;
  BankComponentComponent: '';

  percentDone: number;
  uploadSuccess: boolean;
  fileName: string;
  fileData: any;

  marked = false;
  theCheckbox = false;
  personalDetail: any;
   win:any;
  name = 'Angular';
  fileToUpload: any;
  imageUrl: any;
  // constructor(private _formBuilder: FormBuilder) { }
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
    const fileData = localStorage.getItem(this.fileName);
    setTimeout(function () {
      document.body.appendChild(
        // this.win = window.open();
        // this.win.document.write('<iframe width="560" height="315" src="//www.youtube.com/embed/mTWfqi3-3qU" frameborder="0" allowfullscreen></iframe>')
        document.createElement("iframe"),
      ).src = fileData;
    }, 0);
    console.log("document.createelement",document.createElement)
  }

  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
      firstName: ['', Validators.required],
      middelName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      mobileNumber: ['', Validators.required],
      contactNumber: ['', Validators.required],
      presentAddress: ['', Validators.required],
      permanentAddress: ['', Validators.required],
      file: [null]
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
    this.heroService.personalDetail.next(this.firstFormGroup.value)
  }
  toggleVisibility(firstFormGroup) {
    firstFormGroup.permanentAddress.value = firstFormGroup.presentAddress.value
  }
  //  copy()
  // {
  //   document.getElementById('n2').value = textbox.value;
  // }
  // var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
  $scope.showPassword = '';
  $scope.password = '';
  $scope.checkboxModel = false;
  $scope.showHidePassword = function(checkboxModel) {
    $scope.showPassword = checkboxModel ? '' : $scope.password;
  }
});
}
