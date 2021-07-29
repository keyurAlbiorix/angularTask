import { Component, OnInit } from '@angular/core';
import { MatStepper } from '@angular/material/stepper';

@Component({
  selector: 'app-save-button',
  templateUrl: './save-button.component.html',
  styleUrls: ['./save-button.component.css']
})
export class SaveButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  goBack(stepper: MatStepper){
    stepper.previous();
}

goForward(stepper: MatStepper){
    stepper.next();
}

}
