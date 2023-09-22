import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatingTeamComponent } from './operating-team.component';

describe('OperatingTeamComponent', () => {
  let component: OperatingTeamComponent;
  let fixture: ComponentFixture<OperatingTeamComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OperatingTeamComponent]
    });
    fixture = TestBed.createComponent(OperatingTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
