import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { HeroService } from '../hero.service';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Params, Router } from '@angular/router';

@Component({
  selector: 'app-sports-list',
  templateUrl: './sports-list.component.html',
  styleUrls: ['./sports-list.component.css']
})
export class SportsListComponent implements OnInit {
  myForm: FormGroup;
  users:any = [];
  userlist: any;
  searchText;
  isDesc: boolean = false;
  column: string = 'sports';
  constructor(private fb: FormBuilder, 
    private toastr: ToastrService,
    private apiCall: HeroService, private httpClient: HttpClient,
    private router:Router,
   ) {
  }

  ngOnInit(): void {
    this.getData()
  }
  getData(){
    this.apiCall.findAllSports().subscribe((users:any) => {
      console.log(users,"::users");
      this.users = users;
    },(err:any)=>{
      this.toastr.error(err.error.message);
      console.log("err",err.error.message)
    })
  }
  onclick(prouser){
      
    if(prouser.value.length > 0)
    {
      this.userlist.push(prouser.value);
      prouser.value = '';
    }
  }
  ondelete(deleteme)
    {
      this.users.splice(deleteme,1)
    }
    onSubmit(){
      
    }
    onUpdate(player){
      console.log("player._id",player)
      this.router.navigate(['/sports'],{queryParams:{id:player}});
    }

    sort(property) {
      this.isDesc = !this.isDesc; //change the direction    
      this.column = property;
      let direction = this.isDesc ? 1 : -1;
  
      this.users.sort(function (a, b) {
        if (a[property] < b[property]) {
          return -1 * direction;
        }
        else if (a[property] > b[property]) {
          return 1 * direction;
        }
        else {
          return 0;
        }
      });
    };
}
