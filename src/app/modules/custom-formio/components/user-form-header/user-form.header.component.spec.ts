import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFormHeaderComponent } from './user-form.header.component';

describe('UserFormHeaderComponent', () => {
  let component: UserFormHeaderComponent;
  let fixture: ComponentFixture<UserFormHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserFormHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserFormHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
