import { TestBed } from '@angular/core/testing';

import { AdminJwtInterceptor } from './admin-jwt.interceptor';

describe('AdminJwtInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      AdminJwtInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: AdminJwtInterceptor = TestBed.inject(AdminJwtInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
