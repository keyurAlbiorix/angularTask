import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { HeroService } from '../hero.service';
import { HttpClient } from '@angular/common/http';
import { Router, RouterModule, Routes } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  show = false;
  myForm: FormGroup;
  users:any=[];
  password;
  email:'';
  constructor(private fb: FormBuilder,private apiCall: HeroService, 
    private httpClient: HttpClient,private router: Router, private formBuilder: FormBuilder,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.initData()
    this.password = 'password';
  }
  get f() { return this.myForm.controls; }

  initData(){
  this.myForm= this.formBuilder.group({
    email:['', Validators.required],
    password:['', Validators.required],
    resPassword:['', Validators.required]
  },{validator: this.checkIfMatchingPasswords('password', 'resPassword')})
  }
  checkIfMatchingPasswords(passwordKey: string, passwordConfirmationKey: string) {
  return (group: FormGroup) => {
    let passwordInput = group.controls[passwordKey],
        passwordConfirmationInput = group.controls[passwordConfirmationKey];
    if (passwordInput.value !== passwordConfirmationInput.value) {
      return passwordConfirmationInput.setErrors({notEquivalent: true})
    }
    else {
        return passwordConfirmationInput.setErrors(null);
    }
  }
  }
  register():void{
    let userData=
    {
      email:this.myForm.value.email,
      password:this.myForm.value.password
    }
    this.apiCall.user(userData).subscribe((res:any) => {
      console.log(res,"::users");
      if(res)
      {
        this.toastr.success(res.message);
        this.router.navigate(['/login']);
      }
      else{
        this.toastr.error(res.message);
      }
    },(err:any)=>{
      this.toastr.error(err.error.message);
      console.log("err",err.error.message)
    })
   
  }
  onSubmit() {
    if (this.myForm.invalid) {
      return;
  }
  this.register()
  }
  
  onClicked() {
    if (this.password === 'password') {
      this.password = 'text';
      this.show = true;
    } else {
      this.password = 'password';
      this.show = false;
    }
  }
}
