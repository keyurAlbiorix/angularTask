import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  power: ''
  selectedGender='';
  form: FormGroup;
  submitted = false;
  submittedData:any= {};

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      title: ['', Validators.required],
      productName: ['', Validators.required],
      price: ['', Validators.required],
      power: ['', [Validators.required]],
  });
  console.log("this.form",this.form)
  }
  radioChangeHandler(event: any) {
    this.selectedGender = event.target.value;
  }

  onSubmit(){
    this.submitted = true;
    this.submittedData = this.form.value;
  }
}
