import { Component, Inject, OnInit, Optional } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
// import { title } from 'process';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-edit-restapis',
  templateUrl: './edit-restapis.component.html',
  styleUrls: ['./edit-restapis.component.css']
})
export class EditRestapisComponent implements OnInit {
  myForm: FormGroup;
  users:any = [];
  fromPage: any;
  constructor(private apiCall: HeroService,
    private toastr: ToastrService,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<EditRestapisComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any) {
      console.log("reeeeeesssssssssss",data)
      this.fromPage = data;
     }

  ngOnInit(): void {
    this.initlogData()
  }

  initlogData(){
    this.myForm = this.fb.group({
      title: [this.fromPage.faqs[0].items[0].title, Validators.required],
    });
    console.log(this.fromPage,"::title")

  }
  onSubmit(form: FormGroup) {
    console.log('Valid?', form.valid); // true or false
    console.log('Name', form.value.name);
    this.update_users()
    this.closeDialog()
    this.initlogData()
  }
  closeDialog(){
    this.dialogRef.close();
  }
  update_users(){
    let userData=
    {
      id:this.fromPage._id,
      title: this.myForm.value.title,
    }
    console.log("userData",userData)
    this.apiCall.updateFAQPageDetails(userData).subscribe((res:any) => {
      console.log(res,"::users");
      if(res)
      {
        this.toastr.success(res.message);
      }
      else{
        this.toastr.error(res.message);
      }
    },(err:any)=>{
      this.toastr.error(err.error.message);
      console.log("err",err.error.message)
    })
  }
}
