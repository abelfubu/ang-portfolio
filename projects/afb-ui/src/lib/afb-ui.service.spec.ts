import { TestBed } from '@angular/core/testing';

import { AfbUiService } from './afb-ui.service';

describe('AfbUiService', () => {
  let service: AfbUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AfbUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
