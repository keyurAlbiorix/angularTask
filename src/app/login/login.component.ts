import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { HeroService } from '../hero.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myForm: FormGroup;
  disabled = false;
  users = [];
  name:'';
  password:'';
  constructor(private fb: FormBuilder,
    private apiCall: HeroService, private httpClient: HttpClient,
    private router: Router, private toastr: ToastrService) {
  }
  ngOnInit(): void {
    this.initlogData()
  }
  get f() { return this.myForm.controls; }
  logIn():void{
    let userData=
    {
      email:this.myForm.value.email,
      password:this.myForm.value.password
    }
    this.apiCall.logIn(userData).subscribe((res:any) => {
      localStorage.setItem('token',res.token)
      this.router.navigate(['/test'])
      console.log(res,"::users");
      if(res)
      {
        // alert(res.message)
        this.toastr.success(res.message,"LogIn SuccessFull");
        this.router.navigate(['/test']);
      }
      else{
        this.toastr.error(res.message);
        // alert("")
      }
    },(err:any)=>{
      //toastr
      this.toastr.error(err.error.message);
      console.log("err",err.error.message)
    })
  }
  initlogData(){
    this.myForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', [Validators.required]],
    });
  }
  onSubmit() {
    console.log('Name',this.myForm);
    if (this.myForm.invalid) {
      return;
  }
  this.logIn()
  }
}
