import { TestBed } from '@angular/core/testing';

import { UserCreation } from './user-creation';

describe('UserCreation', () => {
  let service: UserCreation;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserCreation);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
