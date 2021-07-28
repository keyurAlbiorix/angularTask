import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { HeroService } from '../hero.service';
import { EditRestapisComponent } from '../edit-restapis/edit-restapis.component';
@Component({
  selector: 'app-rest-api',
  templateUrl: './rest-api.component.html',
  styleUrls: ['./rest-api.component.css']
})
export class RestApiComponent implements OnInit {
  
  constructor(private fb: FormBuilder, private apiCall: HeroService,  public dialog: MatDialog) { }
  users:any = [];
  ngOnInit(): void {
    this.getData()
  }

  getData(){
      this.apiCall.getAllFAQs().subscribe((users:any) => {
        this.users = users.data;
      })
    }
    ondelete(player){
      this.users.splice(player,1)
    }
    openDialog(player){
      const dialogRef = this.dialog.open(EditRestapisComponent, {
        width: '250px',
        data:  player
      });
       
    dialogRef.afterClosed().subscribe(result => {
      this.getData()
    });
  }     
}
