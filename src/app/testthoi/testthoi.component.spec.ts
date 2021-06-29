import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestthoiComponent } from './testthoi.component';

describe('TestthoiComponent', () => {
  let component: TestthoiComponent;
  let fixture: ComponentFixture<TestthoiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestthoiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestthoiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
