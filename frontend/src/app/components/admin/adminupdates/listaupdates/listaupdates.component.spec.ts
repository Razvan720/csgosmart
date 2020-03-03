import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaupdatesComponent } from './listaupdates.component';

describe('ListaupdatesComponent', () => {
  let component: ListaupdatesComponent;
  let fixture: ComponentFixture<ListaupdatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaupdatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaupdatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
