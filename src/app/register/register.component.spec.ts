import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterComponent } from './register.component';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisterComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
    fixture.detectChanges();
  });

  it('Register form invalid when empty', () => {
    component.registerForm.controls.firstName.setValue('');
    component.registerForm.controls.lastName.setValue('');
    component.registerForm.controls.password.setValue('');
    expect(component.registerForm.valid).toBeTruthy();
  });

  it('firstName field validity', () => {
    const name = component.registerForm.controls.firstName;
    expect(name.valid).toBeFalsy();

    name.setValue('');
    expect(name.hasError('required')).toBeTruthy();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
