import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmincajasComponent } from './admincajas.component';

describe('AdmincajasComponent', () => {
  let component: AdmincajasComponent;
  let fixture: ComponentFixture<AdmincajasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmincajasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmincajasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
