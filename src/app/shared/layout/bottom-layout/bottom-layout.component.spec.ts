import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomLayoutComponent } from './bottom-layout.component';

describe('BottomLayoutComponent', () => {
  let component: BottomLayoutComponent;
  let fixture: ComponentFixture<BottomLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BottomLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
