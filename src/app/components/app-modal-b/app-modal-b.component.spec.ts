import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppModalBComponent } from './app-modal-b.component';

describe('AppModalBComponent', () => {
  let component: AppModalBComponent;
  let fixture: ComponentFixture<AppModalBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppModalBComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppModalBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
