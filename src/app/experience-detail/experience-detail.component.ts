import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-experience-detail',
  templateUrl: './experience-detail.component.html',
  styleUrls: ['./experience-detail.component.css']
})
export class ExperienceDetailComponent implements OnInit {

  fifthFormGroup: FormGroup;
  items: FormArray;
  experianceDetail: any;

  constructor(private formBuilder: FormBuilder, 
    private heroService: HeroService) { 
      this.heroService.experianceDetail.subscribe(res=>{
        this.experianceDetail = res;
      })
    }
  ngOnInit() {
    this.fifthFormGroup = new FormGroup({
      items: new FormArray([
      
      ])
    });
   
  }

  createItem(): FormGroup {
    return this.formBuilder.group({      
      companyName: '',
      position: '',
      totalYear: '',
      lastCtc: ''
    });
  }

  addItem(): void {
    this.items = this.fifthFormGroup.get('items') as FormArray;
    this.items.push(this.createItem());
  }
  onSubmit() { 
    this.heroService.experianceDetail.next(this.fifthFormGroup.value)
  }
}
