import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonarmasComponent } from './botonarmas.component';

describe('BotonarmasComponent', () => {
  let component: BotonarmasComponent;
  let fixture: ComponentFixture<BotonarmasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotonarmasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotonarmasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
