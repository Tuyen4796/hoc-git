import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OzakiComponent } from './ozaki.component';

describe('OzakiComponent', () => {
  let component: OzakiComponent;
  let fixture: ComponentFixture<OzakiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OzakiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OzakiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
