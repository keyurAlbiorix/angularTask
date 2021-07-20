import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-experience-detail',
  templateUrl: './experience-detail.component.html',
  styleUrls: ['./experience-detail.component.css']
})
export class ExperienceDetailComponent implements OnInit {

  orderForm: FormGroup;
  items: FormArray;

  constructor(private formBuilder: FormBuilder) { }
  
  ngOnInit() {
    this.orderForm = new FormGroup({
      items: new FormArray([])
    });
  }
  
  createItem(): FormGroup {
    return this.formBuilder.group({
      companyName: '',
      position: '',
      totalYear: '',
      lastCtc:''
    });
  }
  
  addItem(): void {
    this.items = this.orderForm.get('items') as FormArray;
    this.items.push(this.createItem());
  }

}
