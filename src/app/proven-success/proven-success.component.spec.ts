import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvenSuccessComponent } from './proven-success.component';

describe('ProvenSuccessComponent', () => {
  let component: ProvenSuccessComponent;
  let fixture: ComponentFixture<ProvenSuccessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProvenSuccessComponent]
    });
    fixture = TestBed.createComponent(ProvenSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
