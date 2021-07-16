import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

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
      // power: '',
      power: ['', [Validators.required]],
    }, {
      // validator: MustMatch('password', 'confirmPassword')

  });
  console.log("this.form",this.form)
  }
  // get productName(){
  //   return this.form.get('productName')
  // }
  radioChangeHandler(event: any) {
    this.selectedGender = event.target.value;
  }

  onSubmit(){
    this.submitted = true;
    // alert(JSON.stringify(this.form.value));
    this.submittedData = this.form.value;
    console.log("this.submittedData",this.submittedData)
  }
}
