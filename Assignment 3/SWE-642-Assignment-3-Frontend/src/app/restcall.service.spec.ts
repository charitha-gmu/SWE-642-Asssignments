/*
 * restcall.service.spec.ts
 * Description: Unit tests for the restcall service.
 * Teammates: Mary Ashwitha Gopu - G01408743, Venkata Sree Divya Kasturi - G01411963
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
