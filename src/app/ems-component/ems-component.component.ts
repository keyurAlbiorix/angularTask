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
    console.log("this.perdata",this.perdata )
      // this.personalDetail = JSON.parse(localStorage.getItem('keyur'));
    // this.myForm = JSON.parse(localStorage.getItem('Users'));
    // this.items = Array(150).fill(0).map((x, i) => ({ id: (i + 1), name: `Item ${i + 1}`}));
  }
  getArrayLenght(length) {
    return new Array(length / 20)
  }
  getIndex(pageIndex) {
    this.startIndex = pageIndex * 5;
    this.endIndex = this.startIndex + 5;
  }
  prevIndex(length) {
    this.startIndex = length * 0;
  }
  nextIndex(endIndex) {
    this.endIndex++
  }
  onChangePage(pageOfItems: Array<any>) {

  }
  ondelete(deleteme){
    console.log("deleteme",deleteme)
    this.personalDetail.splice(this.personalDetail.indexOf(deleteme),1)
    console.log("this.personalDetail", this.personalDetail.splice)
  }
}
