import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueThreeComponent } from './que-three.component';

describe('QueThreeComponent', () => {
  let component: QueThreeComponent;
  let fixture: ComponentFixture<QueThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QueThreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QueThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
