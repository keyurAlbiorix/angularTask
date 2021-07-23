import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-current-organization-detail',
  templateUrl: './current-organization-detail.component.html',
  styleUrls: ['./current-organization-detail.component.css']
})
export class CurrentOrganizationDetailComponent implements OnInit {
  firstFormGroup: FormGroup;
  personalDetail: any;
  bankNameMat: any;
  professionalDetail: any;
  educationalDetail: any;
  experianceDetail: any;
  // constructor(private _formBuilder: FormBuilder) { }
  constructor(private _formBuilder: FormBuilder, private router: Router,
    private heroService: HeroService) {
    this.personalDetailFunc()
    this.bankNameMatFunc()
    this.educationalDetailFunc()
    this.experianceDetailFunc()
    this.professionalDetailFunc()
  }

  personalDetailFunc() {
    this.heroService.personalDetail.subscribe(res => {
      this.personalDetail = res;
    })
  }
  professionalDetailFunc() {
    this.heroService.professionalDetail.subscribe(res => {
      this.professionalDetail = res;
    })
  }
  bankNameMatFunc() {
    this.heroService.bankNameMat.subscribe(res => {
      this.bankNameMat = res;
    })
  }
  experianceDetailFunc() {
    this.heroService.experianceDetail.subscribe(res => {
      this.experianceDetail = res;
    })
  }
  educationalDetailFunc() {
    this.heroService.educationalDetail.subscribe(res => {
      this.educationalDetail = res;
    })
  }
  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      currentCtc: ['', Validators.required]
    });
  }
  onSubmit() {

  }
}
