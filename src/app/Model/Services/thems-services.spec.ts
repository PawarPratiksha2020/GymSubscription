import { TestBed } from '@angular/core/testing';

import { ThemsServices } from './thems-services';

describe('ThemsServices', () => {
  let service: ThemsServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThemsServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
