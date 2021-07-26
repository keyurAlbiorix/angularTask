import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-ems-component',
  templateUrl: './ems-component.component.html',
  styleUrls: ['./ems-component.component.css']
})
export class EmsComponentComponent implements OnInit {
  // pageOfItems: Array<any>;
  startIndex = 0;
  endIndex = 5;
  data$:Observable<any>;
  personalDetail: any;
  
  constructor( private heroService: HeroService) {
    this.personalDetailFunc()
   }

  personalDetailFunc() {
    this.heroService.personalDetail.subscribe(res => {
      this.personalDetail = res;
    })
  }

  ngOnInit(): void {
      // this.items = Array(150).fill(0).map((x, i) => ({ id: (i + 1), name: `Item ${i + 1}`}));
  }
  getArrayLenght(length){
    return new Array(length/20)
  } 
  getIndex(pageIndex){
    this.startIndex = pageIndex * 5;
   this.endIndex = this.startIndex + 5;
   console.log(this.startIndex);
  }
  prevIndex(length){
    this.startIndex = length * 0;
    console.log(this.startIndex)
  }
  nextIndex(endIndex){
    this.endIndex++
    console.log(this.endIndex)
  }
  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    // this.pageOfItems = pageOfItems;
}
}
