import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvatarAIComponent } from './avatar-ai.component';

describe('AvatarAIComponent', () => {
  let component: AvatarAIComponent;
  let fixture: ComponentFixture<AvatarAIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvatarAIComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvatarAIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
