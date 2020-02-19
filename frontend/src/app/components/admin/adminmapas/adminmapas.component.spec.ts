import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminmapasComponent } from './adminmapas.component';

describe('AdminmapasComponent', () => {
  let component: AdminmapasComponent;
  let fixture: ComponentFixture<AdminmapasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminmapasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminmapasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
