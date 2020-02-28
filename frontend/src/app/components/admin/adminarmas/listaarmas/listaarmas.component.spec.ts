import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaarmasComponent } from './listaarmas.component';

describe('ListaarmasComponent', () => {
  let component: ListaarmasComponent;
  let fixture: ComponentFixture<ListaarmasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaarmasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaarmasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
