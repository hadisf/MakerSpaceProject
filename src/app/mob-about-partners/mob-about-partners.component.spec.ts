import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobAboutPartnersComponent } from './mob-about-partners.component';

describe('MobAboutPartnersComponent', () => {
  let component: MobAboutPartnersComponent;
  let fixture: ComponentFixture<MobAboutPartnersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MobAboutPartnersComponent]
    });
    fixture = TestBed.createComponent(MobAboutPartnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
