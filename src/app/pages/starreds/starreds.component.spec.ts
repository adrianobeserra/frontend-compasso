import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarredsComponent } from './starreds.component';

describe('StarredsComponent', () => {
  let component: StarredsComponent;
  let fixture: ComponentFixture<StarredsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarredsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarredsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
