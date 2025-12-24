import { TestBed } from '@angular/core/testing';

import { UserSubscription } from './user-subscription';

describe('UserSubscription', () => {
  let service: UserSubscription;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserSubscription);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
