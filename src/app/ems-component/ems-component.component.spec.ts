import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmsComponentComponent } from './ems-component.component';

describe('EmsComponentComponent', () => {
  let component: EmsComponentComponent;
  let fixture: ComponentFixture<EmsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmsComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
