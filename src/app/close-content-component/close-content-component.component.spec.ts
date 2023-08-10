import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloseContentComponentComponent } from './close-content-component.component';

describe('CloseContentComponentComponent', () => {
  let component: CloseContentComponentComponent;
  let fixture: ComponentFixture<CloseContentComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CloseContentComponentComponent]
    });
    fixture = TestBed.createComponent(CloseContentComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
