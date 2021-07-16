import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
// import { MatCardModule } from '@angular/material/card';
// import { MatSliderModule } from '@angular/material/slider';
// import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { EditComComponent } from '../edit-com/edit-com.component';
import { HeroService } from '../hero.service';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  myForm: FormGroup;
  users:any = [];
  constructor(private fb: FormBuilder, 
    private toastr: ToastrService,
    public dialog: MatDialog, private apiCall: HeroService, private httpClient: HttpClient) {
  }
  username:string="Push array";
  myuser = '';
  ngOnInit(){
    // console.log(this.arra1,"arra1");
    this.myForm = this.fb.group({
      name: ['Keyur', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      age: ['', Validators.required],
      Note: ['', [Validators.required, Validators.minLength(15)]],
    });
    //user
    // getUsers
    this.getData()
   
  }
getData(){
  this.apiCall.findAllAtheletes().subscribe((users:any) => {
    console.log(users,"::users");
    this.users = users.data;
  },(err:any)=>{
    this.toastr.error(err.error.message);
    console.log("err",err.error.message)
  })
}
  openDialog(player){
    console.log("name: this.name", this.myForm.value)
    const dialogRef = this.dialog.open(EditComComponent, {
      width: '250px',
      data: player
    });
   
    dialogRef.afterClosed().subscribe(result => {
      // this.animal = result;
      // this.name= result
      this.getData()
      console.log('The dialog was closed',result);
    });
  }
  showMe:boolean=false;
  disabled = false;
  name = new FormControl('');
  title = '';
  email:'';
  note:'';
  age:'';
  number1 ;
  number2; 
  sum : number;
  num :string
  text:string;
  namee:string;
  phone_no:string;
  arra1:any=[
    {id:1, namee:'test1', age:'1',phone_no:'1212'},
    {id:2, namee:'test2', age:'2',phone_no:'1212'},
    {id:3, namee:'test3', age:'3',phone_no:'1212'},
    {id:4, namee:'test4', age:'4',phone_no:'1212'},
    {id:5, namee:'test5', age:'5',phone_no:'1212'},
    {id:6, namee:'test6', age:'6',phone_no:'1212'},
    {id:7, namee:'test7', age:'7',phone_no:'1221'},
  ];
 userData:any = [
    {
        id : 1,
        name : "John",
        email : "john@domain.com",
        address: [ 
            {id:0,city:"Ahmedabaad",state:"Gujarat",zip:"636345"},
            {id:1,city:"Surat",state:"Gujarat",zip:"23443"}
         ]
    },
    {
        id : 2,
        name : "Etst",
        email : "est@domain.com",
        address: [ 
            {id:2,city:"Barodra",state:"Gujarat",zip:"54546"},
            {id:3,city:"Surat",state:"Gujarat",zip:"65767"}
         ]
    },
    {
        id : 3,
        name : "Fretg",
        email :" fgdg@gad.com",
       
    },
    {
      id : 4,
      name : "Keyur",
      email :" keyuir@gad.com",
      address: [ ]
  }
];

  showText(title:string) {
  this.title=title
  };
  add(){
    // this.sum = parseInt(this.number1) + parseInt(this.number2);
    console.log(this.number2);
    
    if((this.number2 % 2) == 0){
      return this.num='even'
    }
    else{
   return this.num='odd'
    }
  }

  onSubmit(form: FormGroup) {
    console.log('Valid?', form.valid); // true or false
    console.log('Name', form.value.name);
    console.log('Email', form.value.email);
    console.log('Age', form.value.age);
    console.log('Note', form.value.Note);
    // console.log('Name = ' + name);
    // console.log('Email = ' + email);
    // console.log('age = ' + age);
    // console.log('Note = ' + Note);
  }
  toggleTag(){
    this.showMe=!this.showMe
  }

  profileForm = new FormGroup({
    // firstName: new FormControl(''),
    number1 : new FormControl(''),
    number2 : new FormControl(''),
    });

    // onclick(myuser:string){
    //   this.myuser=myuser
    // }
    adde(){}


    CreateUser:string = "Enter UserName"

    userlist = []
  
    onclick(prouser){
      
      if(prouser.value.length > 0)
      {
        this.userlist.push(prouser.value);
        prouser.value = '';
      }
    }
      //   onSubmit(name:any, email:any) {
       //     console.log('Name = ' + name);
       //     console.log('Email = ' + email);
       //  }
    ondelete(deleteme)
    {
      this.users.splice(deleteme,1)
    }

}
// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// @Component({
//   selector: 'app-test',
//   templateUrl: './test.component.html',
//   styleUrls: ['./test.component.css']
// })
// export class TestComponent implements OnInit {
//   myForm: FormGroup;

//   constructor(private fb: FormBuilder) {}

//   ngOnInit() : void {
//     // this.myForm = this.fb.group({
//     //   name: ['Sammy', Validators.required],
//     //   email: ['', [Validators.required, Validators.email]],
//     //   message: ['', [Validators.required, Validators.minLength(15)]],
//     // });
//   }

//   // onSubmit(form: FormGroup) {
//   //   console.log('Valid?', form.valid); // true or false
//   //   console.log('Name', form.value.name);
//   //   console.log('Email', form.value.email);
//   //   console.log('Message', form.value.message);
//   // }
// }