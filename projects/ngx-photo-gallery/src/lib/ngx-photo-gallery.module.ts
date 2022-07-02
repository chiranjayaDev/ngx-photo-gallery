import { NgModule } from '@angular/core';
import { NgxPhotoGalleryComponent } from './ngx-photo-gallery.component';
import {BrowserModule} from "@angular/platform-browser";
import { SafeUrlPipe } from './safe-url.pipe';



@NgModule({
  declarations: [
    NgxPhotoGalleryComponent,
    SafeUrlPipe
  ],
  imports: [
    BrowserModule
  ],
  exports: [
    NgxPhotoGalleryComponent
  ]
})
export class NgxPhotoGalleryModule { }
