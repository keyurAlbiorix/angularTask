import { Component,OnInit, } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import {MatDialog,} from '@angular/material/dialog';
import { TestComponent } from './test/test.component';
import { HeroService } from './hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  myForm: FormGroup;

  constructor(private fb: FormBuilder, public dialog: MatDialog,private heroService: HeroService) {}

  // username:string="Push array";
  // myuser = '';
  ngOnInit(){

    // this.myForm = this.fb.group({
    //   name: ['Keyur', Validators.required],
    //   email: ['', [Validators.required, Validators.email]],
    //   age: ['', Validators.required],
    //   Note: ['', [Validators.required, Validators.minLength(15)]],
    // });
  }

  // openDialog(){
  //   // console.log("name: this.name", this.myForm.value)
  //   const dialogRef = this.dialog.open(TestComponent, {
  //     width: '250px',
  //     data: this.myForm.value
  //   });
   
    // dialogRef.afterClosed().subscribe(result => {
   
    //   this.name= result
    //   console.log('The dialog was closed',result);
    // });
  // }
//   showMe:boolean=false;
//   disabled = false;
//   name = new FormControl('');
//   title = '';
//   email:'';
//   note:'';
//   age:'';
//   number1 ;
//   number2; 
//   sum : number;
//   num :string
//   text:string;
//   namee:string;
//   phone_no:string;
//   arra1:any=[
//     {id:1, namee:'test1', age:'1',phone_no:'1212'},
//     {id:2, namee:'test2', age:'2',phone_no:'1212'},
//   ];
//  userData:any = [
//     {
//         id : 1,
//         name : "John",
//         email : "john@domain.com",
//         address: [ 
//             {id:0,city:"Ahmedabaad",state:"Gujarat",zip:"636345"},
//             {id:1,city:"Surat",state:"Gujarat",zip:"23443"}
//          ]
//     },
//     {
//         id : 2,
//         name : "Etst",
//         email : "est@domain.com",
//         address: [ 
//             {id:2,city:"Barodra",state:"Gujarat",zip:"54546"},
//             {id:3,city:"Surat",state:"Gujarat",zip:"65767"}
//          ]
//     },
//     {
//         id : 3,
//         name : "Fretg",
//         email :" fgdg@gad.com",
       
//     },
//     {
//       id : 4,
//       name : "Keyur",
//       email :" keyuir@gad.com",
//       address: [ ]
//   }
// ];

//   showText(title:string) {
//   this.title=title
//   };
//   add(){
//     console.log(this.number2);
//     if((this.number2 % 2) == 0){
//       return this.num='even'
//     }
//     else{
//    return this.num='odd'
//     }
//   }

//   onSubmit(form: FormGroup) {
//     console.log('Valid?', form.valid); // true or false
//     console.log('Name', form.value.name);
//   }
//   toggleTag(){
//     this.showMe=!this.showMe
//   }

//   profileForm = new FormGroup({
   
//     number1 : new FormControl(''),
//     number2 : new FormControl(''),
//     });
//     adde(){}
//     CreateUser:string = "Enter UserName"
//     userlist = []
//     onclick(prouser){
//       if(prouser.value.length > 0)
//       {
//         this.userlist.push(prouser.value);
//         prouser.value = '';
//       }
//     }
//     ondelete(deleteme)
//     {
//       this.userlist.splice(deleteme,1)
//     }
}
