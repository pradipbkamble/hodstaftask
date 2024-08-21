import { TestBed } from '@angular/core/testing';

import { GmailservService } from './gmailserv.service';

describe('GmailservService', () => {
  let service: GmailservService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GmailservService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
