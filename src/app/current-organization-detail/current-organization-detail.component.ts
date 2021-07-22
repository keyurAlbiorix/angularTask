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
      this.heroService.personalDetail.subscribe(res=>{
        this.personalDetail = res;
       
        console.log("rescurrent-organization-detail.component",res)
      })
      this.heroService.bankNameMat.subscribe(res=>{
        this.bankNameMat = res;
      })

      this.heroService.professionalDetail.subscribe(res=>{
        this.professionalDetail = res;
        console.log("res",res)
      })
      
      this.heroService.educationalDetail.subscribe(res=>{
        this.educationalDetail = res;
        console.log("res",res)
      })

            
      this.heroService.experianceDetail.subscribe(res=>{
        this.experianceDetail = res;
        console.log("res",res)
      })
    }

    // constructor(private _formBuilder: FormBuilder, private cd: ChangeDetectorRef,
    //   private heroService: HeroService) { 
    //     this.heroService.bankNameMat.subscribe(res=>{
    //       this.bankNameMat = res;
    //       console.log("res.......",res)
    //     })
    //     this.bankData=this.bankNameMat
    //     console.log(" this.bankData.......", this.bankData)
    //   }
  
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
