import { TestBed } from '@angular/core/testing';

import { WsService } from './ws.service';

describe('WsServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WsService = TestBed.get(WsService);
    expect(service).toBeTruthy();
  });
});
