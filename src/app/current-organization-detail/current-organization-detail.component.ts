import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-current-organization-detail',
  templateUrl: './current-organization-detail.component.html',
  styleUrls: ['./current-organization-detail.component.css']
})
export class CurrentOrganizationDetailComponent implements OnInit {
  firstFormGroup: FormGroup;
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      // bankName: ['', Validators.required],
      // accountName:['',Validators.required],
      currentCtc:['',Validators.required]
    });
  }
  onSubmit(){

  }
}
