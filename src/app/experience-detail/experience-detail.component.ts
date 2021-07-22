import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-experience-detail',
  templateUrl: './experience-detail.component.html',
  styleUrls: ['./experience-detail.component.css']
})
export class ExperienceDetailComponent implements OnInit {

  orderForm: FormGroup;
  items: FormArray;
  experianceDetail: any;

  // constructor(private formBuilder: FormBuilder) { }

  constructor(private formBuilder: FormBuilder, 
    private heroService: HeroService) { 
      this.heroService.experianceDetail.subscribe(res=>{
        this.experianceDetail = res;
        console.log("res",res)
      })
    }
  ngOnInit() {
    this.orderForm = new FormGroup({
      items: new FormArray([
        // companyName:['', Validators.required],
        // position: ['', Validators.required],
        // totalYear: ['', Validators.required],
        // lastCtc: ['', Validators.required]
      ])
      // bankName: ['', Validators.required],
    });
   
  }

  createItem(): FormGroup {
    return this.formBuilder.group({      
      companyName: '',
      position: '',
      totalYear: '',
      lastCtc: ''
    });
  }

  addItem(): void {
    this.items = this.orderForm.get('items') as FormArray;
    this.items.push(this.createItem());
    console.log("this.order",this.orderForm)
  }
  onSubmit() { 
    this.heroService.experianceDetail.next(this.orderForm.value)

  }
}
