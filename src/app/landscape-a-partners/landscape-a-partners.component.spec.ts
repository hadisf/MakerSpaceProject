import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandscapeAPartnersComponent } from './landscape-a-partners.component';

describe('LandscapeAPartnersComponent', () => {
  let component: LandscapeAPartnersComponent;
  let fixture: ComponentFixture<LandscapeAPartnersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LandscapeAPartnersComponent]
    });
    fixture = TestBed.createComponent(LandscapeAPartnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
