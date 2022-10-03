import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueOneComponent } from './que-one.component';

describe('QueOneComponent', () => {
  let component: QueOneComponent;
  let fixture: ComponentFixture<QueOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QueOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QueOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
