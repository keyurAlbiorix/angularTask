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
  // firstFormGroup: FormGroup;
  personalDetail: any;
  bankNameMat: any;
  professionalDetail: any;
  educationalDetail: any;
  experianceDetail: any;
  CurrentOrgDetail: any;
  sixFormGroup:FormGroup;
  mergeData: any;
  list = [];
  getData: any;

  constructor(private _formBuilder: FormBuilder, private router: Router,
    private heroService: HeroService) {
    this.personalDetailFunc()
    this.bankNameMatFunc()
    this.educationalDetailFunc()
    this.experianceDetailFunc()
    this.professionalDetailFunc()
    this.CurrentOrganizationDetail()
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
  CurrentOrganizationDetail() {
    this.heroService.currentOrganizationDetail.subscribe(res => {
      this.CurrentOrgDetail = res;
    })
  }
  ngOnInit(): void {
    this.sixFormGroup = this._formBuilder.group({
      currentCtc: ['', Validators.required],
      nextaprslDate: ['', Validators.required],
      joiningDate: ['', Validators.required]
    });
  }

  onSubmit() {
    this.heroService.currentOrganizationDetail.next(this.sixFormGroup.value)
    this.getData = localStorage.getItem("personalDetail");
    this.mergeData = Object.assign(this.personalDetail,this.professionalDetail,this.bankNameMat,this.experianceDetail,this.educationalDetail)
    console.log("this.mergeData",this.mergeData);
      this.list.push(this.mergeData)
    if (this.getData == null ) {
      localStorage.setItem("personalDetail", JSON.stringify(this.list))
    }
    else {
      var storedNames =JSON.parse(localStorage.getItem("personalDetail"));
      console.log("merger Data",this.mergeData);
      this.list=[...storedNames,this.mergeData]
      localStorage.setItem("personalDetail", JSON.stringify(this.list)) 
    }    
    this.router.navigate(["/ems"]);
  }
}
