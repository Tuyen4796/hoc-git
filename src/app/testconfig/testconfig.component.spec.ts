import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestconfigComponent } from './testconfig.component';

describe('TestconfigComponent', () => {
  let component: TestconfigComponent;
  let fixture: ComponentFixture<TestconfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestconfigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestconfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
