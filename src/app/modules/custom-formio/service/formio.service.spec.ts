import { TestBed } from '@angular/core/testing';

import { FormioHttpService } from './formio-http.service';

describe('FormioService', () => {
  let service: FormioHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormioHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
