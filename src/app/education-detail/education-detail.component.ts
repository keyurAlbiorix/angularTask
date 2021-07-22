import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators, FormGroupDirective } from '@angular/forms';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-education-detail',
  templateUrl: './education-detail.component.html',
  styleUrls: ['./education-detail.component.css']
})
export class EducationDetailComponent implements OnInit {
  orderForm: FormGroup;
  items: FormArray;
  educationalDetail: any;
  isDisabled:any = true; 
  // constructor(private formBuilder: FormBuilder,private parent: FormGroupDirective) { }
  
  constructor(private _formBuilder: FormBuilder, 
    private heroService: HeroService) { 
      this.heroService.educationalDetail.subscribe(res=>{
        this.educationalDetail = res;
        console.log("res",res)
      })
    }
  ngOnInit() {
    this.orderForm = new FormGroup({
      items: new FormArray([])
     
    });
    console.log("this.orderForm",  this.orderForm)
    // this.orderForm = this.parent.form;
    // this.orderForm.addControl('address', new FormGroup({
    //   name: new FormControl(),
    //   description: new FormControl(),
    //   price: new FormControl()
    // }))
  }
  
  createItem(): FormGroup {
    return this._formBuilder.group({
      name: '',
      description: '',
      price: ''
    });
  }
  
  addItem(): void {
    this.isDisabled = true; 
    this.items = this.orderForm.get('items') as FormArray;
    this.items.push(this.createItem());
    console.log("this.items.push",this.items.push)
  }
  onSubmit(){
    this.heroService.educationalDetail.next(this.orderForm.value)
    console.log("this.orderForm",this.orderForm.value)
  }
  test() {
    // console.log("this.orderForm.controls['name']",this.orderForm.controls['name'].enable());

    this.isDisabled = !this.isDisabled;
  //   if(this.isDisabled){
  //     this.orderForm.controls['name'].disable();
  //   }
  //   else{
  //     this.orderForm.controls['name'].enable();
  //   }
  // // this.isDisabled ? this.orderForm.controls['name'].disable() : this.orderForm.controls['name'].enable()
  }
}
 