import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentOrganizationDetailComponent } from './current-organization-detail.component';

describe('CurrentOrganizationDetailComponent', () => {
  let component: CurrentOrganizationDetailComponent;
  let fixture: ComponentFixture<CurrentOrganizationDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentOrganizationDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentOrganizationDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
