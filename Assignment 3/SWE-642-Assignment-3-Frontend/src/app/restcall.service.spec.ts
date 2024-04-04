// 1. Sree Charitha Meka – G01410061
// 2. Nagasumukh Hunsur Dinesh - G01394230

/*
 * restcall.service.spec.ts
 * Description: Unit tests for the restcall service.
 */
import { TestBed } from '@angular/core/testing';
import { RestcallService } from './restcall.service';

describe('RestcallService', () => {
  let service: RestcallService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestcallService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
