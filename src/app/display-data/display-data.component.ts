import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-data',
  templateUrl: './display-data.component.html',
  styleUrls: ['./display-data.component.css']
})
export class DisplayDataComponent implements OnInit {
  myForm:any={};
  user:any={};
  constructor() { }
  users:any = [];
  ngOnInit(): void {
    // localStorage.getItem('token')
    this.myForm = JSON.parse(localStorage.getItem('Users'));
    console.log("this.myForm",this.myForm)
    this.user = Object.assign(this.user, this.myForm.value)
    this.addUser(this.user);
  }

  addUser(user){
    let users = [];
    if(localStorage.getItem('Users')){
    users= JSON.parse(localStorage.getItem('Users'));
    users =[user, ...users];
    }
    else{
      users =[user];
    }
    localStorage.setItem('Users',JSON.stringify(users));
  }
}
