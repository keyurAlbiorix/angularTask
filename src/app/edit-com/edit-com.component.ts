import { Component, Inject, OnInit, Optional } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-edit-com',
  templateUrl: './edit-com.component.html',
  styleUrls: ['./edit-com.component.css']
})
export class EditComComponent implements OnInit {
  myForm: FormGroup;
  users:any = [];
  fromPage: any;
  constructor( private apiCall: HeroService,
    private toastr: ToastrService,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<EditComComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any
    ) { 
      console.log("reeeeeesssssssssss",data)
      this.fromPage = data;
    }

  ngOnInit(): void {
    // this.getData()
    this.initlogData()
  }

initlogData(){
  this.myForm = this.fb.group({
    name: [this.fromPage.name, Validators.required],
    email: [this.fromPage.email, [Validators.required]],
    Note: [this.fromPage.createdAt, Validators.required],
    
  });
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
      name: this.myForm.value.name,
      email: this.myForm.value.email,
      Note: this.myForm.value.Note,
    }
    this.apiCall.update_users(userData).subscribe((res:any) => {
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
