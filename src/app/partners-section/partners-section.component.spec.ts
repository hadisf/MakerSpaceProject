import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnersSectionComponent } from './partners-section.component';

describe('PartnersSectionComponent', () => {
  let component: PartnersSectionComponent;
  let fixture: ComponentFixture<PartnersSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PartnersSectionComponent]
    });
    fixture = TestBed.createComponent(PartnersSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
