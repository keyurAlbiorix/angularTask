import {  Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HeroService } from '../hero.service';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit {
  sportsForm: FormGroup;
  submitted = false;
  fromPage: any;
  id: number;
  title = '';
dataSports:'';
titleButton='';
public constructor(private formBuilder: FormBuilder,private titleService: Title,
    private apiCall: HeroService,
    private router: Router,
    private fb: FormBuilder,
    private toastr: ToastrService,
    private route: ActivatedRoute) {
      this.route.queryParams
    .subscribe(
      (params) => {
        this.id = params['id'];
        this.title = "Update sports";
        this.titleButton= "Update Sports";
      }
    ); 
    }
    // public setTitle(newTitle: string) {
    //   this.titleService.setTitle(newTitle);
    // }
  ngOnInit(): void {
    if(this.id){
    this.findsport()
    }else{
    this.title = "Add sports"
    this.titleButton= "Add sports";
  }
    this.initlogData(null)
}
findsport(){
  this.apiCall.findsport(this.id).subscribe((res:any) => {
    this.dataSports = res.sports
    this.initlogData(this.dataSports);
  })
}
 initlogData(item){
   if(this.id){
    this.sportsForm = this.fb.group({
      sports: [item, Validators.required],
    });
   }
   else{
    this.sportsForm = this.fb.group({
      sports: ['', Validators.required],
    });
  }
  }
  get f() { return this.sportsForm.controls; }
  addsport(){
    let userData=
    {
      sports:this.sportsForm.value.sports,
    }
    this.apiCall.addSport(userData).subscribe((res:any) => {
      
      if(res)
      {
        this.toastr.success(res.message);
        this.router.navigate(['/sportsList']);
      }
      else{
        this.toastr.error(res.message);
      }
    },(err:any)=>{
      this.toastr.error(err.error.message);
    })
  }
 
  onSubmit() {
    // this.submitted = true;

    // if (this.sportsForm.invalid) {
    //     return;
    // }
    if(this.id)
    this.sports_update()
    else
    this.addsport()
  }

    onReset() {
        this.submitted = false;
        this.sportsForm.reset();
    }
    sports_update(){
      let sportsData=
      {
        id:this.id,
        sports: this.sportsForm.value.sports,
      }
      this.apiCall.sports_update(sportsData).subscribe((res:any) => {
        if(res)
        {
          this.toastr.success(res.message);
          this.router.navigate(['/sportsList']);
        }
        else{
          this.toastr.error(res.message);
        }
      },(err:any)=>{
        this.toastr.error(err.error.message);
      })
    }
}
