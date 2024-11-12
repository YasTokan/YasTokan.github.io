import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyJournayComponent } from './my-journay.component';

describe('MyJournayComponent', () => {
  let component: MyJournayComponent;
  let fixture: ComponentFixture<MyJournayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyJournayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyJournayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
