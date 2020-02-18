import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminupdatesComponent } from './adminupdates.component';

describe('AdminupdatesComponent', () => {
  let component: AdminupdatesComponent;
  let fixture: ComponentFixture<AdminupdatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminupdatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminupdatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
