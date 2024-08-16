import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StafLoginComponent } from './staf-login.component';

describe('StafLoginComponent', () => {
  let component: StafLoginComponent;
  let fixture: ComponentFixture<StafLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StafLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StafLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
