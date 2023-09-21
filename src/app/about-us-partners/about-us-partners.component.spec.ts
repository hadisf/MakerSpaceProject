import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsPartnersComponent } from './about-us-partners.component';

describe('AboutUsPartnersComponent', () => {
  let component: AboutUsPartnersComponent;
  let fixture: ComponentFixture<AboutUsPartnersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutUsPartnersComponent]
    });
    fixture = TestBed.createComponent(AboutUsPartnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
