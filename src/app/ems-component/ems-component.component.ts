import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-ems-component',
  templateUrl: './ems-component.component.html',
  styleUrls: ['./ems-component.component.css']
})
export class EmsComponentComponent implements OnInit {
  startIndex = 0;
  endIndex = 5;
  data$: Observable<any>;
  personalDetail: any;
  perdata: any;
  professionalData: any;
  constructor(private heroService: HeroService) {
    this.personalDetailFunc()
  }

  personalDetailFunc() {
    this.heroService.personalDetail.subscribe(res => {
      this.personalDetail = res;
    })
  }

  ngOnInit(): void {
    let personalDetailData = JSON.parse(localStorage.getItem('personalDetail'))
    this.perdata = personalDetailData
  }
  
  onChangePage(pageOfItems: Array<any>) {
  }
  ondelete(deleteme){
    this.perdata.splice(this.perdata.indexOf(deleteme),1)
  }
  updateData(item){
    console.log("this.perdata",item)
    localStorage.setItem("updateData", JSON.stringify(item)) 
  }
  addData(){
    localStorage.setItem("updateData", JSON.stringify({})) 
  }
}
