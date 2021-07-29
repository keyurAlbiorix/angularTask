import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray} from '@angular/forms';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-education-detail',
  templateUrl: './education-detail.component.html',
  styleUrls: ['./education-detail.component.css']
})
export class EducationDetailComponent implements OnInit {
  fourthFormGroup: FormGroup;
  items: FormArray;
  educationalDetail: any;
  isDisabled:any = true; 
  disableTextbox: boolean = false;
  // fourthFormGroup:FormGroup;
  constructor(private _formBuilder: FormBuilder, 
    private heroService: HeroService) { 
      this.heroService.educationalDetail.subscribe(res=>{
        this.educationalDetail = res;
      })
    }
  ngOnInit() {
    
    this.fourthFormGroup = new FormGroup({
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
    this.items = this.fourthFormGroup.get('items') as FormArray;
    this.items.push(this.createItem());
  }
  onSubmit(){
    this.heroService.educationalDetail.next(this.fourthFormGroup.value)
  }
  test() {
    this.isDisabled = !this.isDisabled;
  }
  toggleDisable() {
    // this.fourthFormGroup.controls['name'].Enable() =
  }
}
 