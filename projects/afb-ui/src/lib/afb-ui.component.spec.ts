import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfbUiComponent } from './afb-ui.component';

describe('AfbUiComponent', () => {
  let component: AfbUiComponent;
  let fixture: ComponentFixture<AfbUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfbUiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfbUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
