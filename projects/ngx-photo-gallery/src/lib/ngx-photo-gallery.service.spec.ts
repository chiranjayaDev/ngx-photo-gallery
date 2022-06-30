import { TestBed } from '@angular/core/testing';

import { NgxPhotoGalleryService } from './ngx-photo-gallery.service';

describe('NgxPhotoGalleryService', () => {
  let service: NgxPhotoGalleryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxPhotoGalleryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
