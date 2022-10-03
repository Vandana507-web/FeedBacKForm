import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueFiveComponent } from './que-five.component';

describe('QueFiveComponent', () => {
  let component: QueFiveComponent;
  let fixture: ComponentFixture<QueFiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QueFiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QueFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
