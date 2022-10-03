import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueFourComponent } from './que-four.component';

describe('QueFourComponent', () => {
  let component: QueFourComponent;
  let fixture: ComponentFixture<QueFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QueFourComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QueFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
