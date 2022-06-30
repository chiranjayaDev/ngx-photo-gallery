import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxPhotoGalleryComponent } from './ngx-photo-gallery.component';

describe('NgxPhotoGalleryComponent', () => {
  let component: NgxPhotoGalleryComponent;
  let fixture: ComponentFixture<NgxPhotoGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxPhotoGalleryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxPhotoGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
