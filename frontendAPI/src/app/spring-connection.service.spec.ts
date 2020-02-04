import { TestBed } from '@angular/core/testing';

import { SpringConnectionService } from './spring-connection.service';

describe('SpringConnectionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SpringConnectionService = TestBed.get(SpringConnectionService);
    expect(service).toBeTruthy();
  });
});
