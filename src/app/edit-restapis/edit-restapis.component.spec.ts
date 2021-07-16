import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRestapisComponent } from './edit-restapis.component';

describe('EditRestapisComponent', () => {
  let component: EditRestapisComponent;
  let fixture: ComponentFixture<EditRestapisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditRestapisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditRestapisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
