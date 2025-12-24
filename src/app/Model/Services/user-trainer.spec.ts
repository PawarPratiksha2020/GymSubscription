import { TestBed } from '@angular/core/testing';

import { UserTrainer } from './user-trainer';

describe('UserTrainer', () => {
  let service: UserTrainer;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserTrainer);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
