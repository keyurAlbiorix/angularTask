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
  disableTextbox: boolean = false;
  
  constructor(private _formBuilder: FormBuilder, 
    private heroService: HeroService) { 
      this.heroService.educationalDetail.subscribe(res=>{
        this.educationalDetail = res;
      })
    }
  ngOnInit() {
    this.orderForm = new FormGroup({
      items: new FormArray([])
    });
  }
  
  createItem(): FormGroup {
    return this._formBuilder.group({
      name:  '',
      description: '',
      price: ''
    });
  }
  
  addItem(): void {
    this.isDisabled = true; 
    this.items = this.orderForm.get('items') as FormArray;
    this.items.push(this.createItem());
  }
  onSubmit(){
    this.heroService.educationalDetail.next(this.orderForm.value)
  }
  test() {
    this.isDisabled = !this.isDisabled;
  }
  toggleDisable() {
    // this.orderForm.controls['name'].Enable() =
  }
}
 