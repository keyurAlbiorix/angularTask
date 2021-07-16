import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  myForm:FormGroup;
  user:any={};
  value = [
    {
      seat1: '1212',
      seat2: 'keyur.......',
      seat3: 'keyurdefined'
    }
  ];
  buttons = [
    {
      name: 'Red',
      id: 'btn1'
     
    },
    {
      name: 'Green',
      id: 'btn2'
    },
    {
      name: 'Blue',
      id: 'btn3'
    }
    ];

arrayEmpty:any = [];
  color="yellow";
  temp=0;
  constructor(private fb: FormBuilder, private router: Router) { }
  
  ngOnInit(): void {
  this.getData()
  }
  
getData(){
  this.myForm = this.fb.group({
    title: ['', Validators.required],
    description: ['', [Validators.required]],
    notificationType: ['', Validators.required]
  });
}
  onChnage(){
      if(this.buttons[this.temp] && this.buttons[this.temp].name){
      this.color=this.buttons[this.temp].name
      } else {
        this.temp = 0;
      }
     this.buttons.length < this.temp ? this.temp-- : this.temp++;
      console.log(this.temp);
  }
  onSubmit(){
    // player perameter
    // console.log("player",player)
    // this.arrayEmpty.push(player) 
    // console.log("this.arrayEmpty.push",this.arrayEmpty) 
    this.user = Object.assign(this.user, this.myForm.value)
    this.addUser(this.user);
    this.myForm.reset();
    this.router.navigate(['/displayData']);
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
  // localStorage.setItem('dataSource',JSON.stringify(this.myForm.value));
  onDelete(deleteme){
    this.arrayEmpty.splice(this.arrayEmpty.indexOf(deleteme),1)
  }
}
