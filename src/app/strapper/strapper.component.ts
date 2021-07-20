import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import { MatStepper } from '@angular/material/stepper';
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

  constructor(private _formBuilder: FormBuilder, private cd: ChangeDetectorRef,
    private heroService: HeroService) { }


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
// @ViewChild('fileInput') el: ElementRef;
// imageUrl: any =
// 'https://i.pinimg.com/236x/d6/27/d9/d627d9cda385317de4812a4f7bd922e9--man--iron-man.jpg';
// editFile: boolean = true;
// removeUpload: boolean = false;

// uploadFile(event) {
//   let reader = new FileReader(); // HTML5 FileReader API
//   let file = event.target.files[0];
//   if (event.target.files && event.target.files[0]) {
//     reader.readAsDataURL(file);

//     // When file uploads set it to file formcontrol
//     reader.onload = () => {
//       this.imageUrl = reader.result;
//       this.firstFormGroup.patchValue({
//         file: reader.result
//       });
//       this.editFile = false;
//       this.removeUpload = true;
//     };
//     // ChangeDetectorRef since file is loading outside the zone
//     this.cd.markForCheck();
//   }
// }
// removeUploadedFile() {
//   let newFileList = Array.from(this.el.nativeElement.files);
//   this.imageUrl =
//     'https://i.pinimg.com/236x/d6/27/d9/d627d9cda385317de4812a4f7bd922e9--man--iron-man.jpg';
//   this.editFile = true;
//   this.removeUpload = false;
//   this.firstFormGroup.patchValue({
//     file: [null]
//   });
// }

// // Submit Registration Form
onSubmit() {
//   this.submitted = true;
//   if (!this.firstFormGroup.valid) {
//     alert('Please fill all the required fields to create a super hero!');
//     // return false;
//   } else {
//     console.log(this.firstFormGroup.value);
//   }
}
}
