import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminarmasComponent } from './adminarmas.component';

describe('AdminarmasComponent', () => {
  let component: AdminarmasComponent;
  let fixture: ComponentFixture<AdminarmasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminarmasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminarmasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
