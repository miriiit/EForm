import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFormioComponent } from './view-formio.component';

describe('ViewFormioComponent', () => {
  let component: ViewFormioComponent;
  let fixture: ComponentFixture<ViewFormioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewFormioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewFormioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
