import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { InputCardComponent } from './input-card.component';

describe('InputCardComponent', () => {
  let component: InputCardComponent;
  let fixture: ComponentFixture<InputCardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [InputCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InputCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
