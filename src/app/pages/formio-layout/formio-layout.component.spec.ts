import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormioLayoutComponent } from './formio-layout.component';

describe('FormioLayoutComponent', () => {
  let component: FormioLayoutComponent;
  let fixture: ComponentFixture<FormioLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormioLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormioLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
