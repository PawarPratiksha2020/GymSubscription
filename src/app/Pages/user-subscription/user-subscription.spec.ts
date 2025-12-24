import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSubscription } from './user-subscription';

describe('UserSubscription', () => {
  let component: UserSubscription;
  let fixture: ComponentFixture<UserSubscription>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserSubscription]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserSubscription);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
