import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {Gallery} from "../../../demo/src/app/modals/gallery";

@Component({
  selector: 'ngx-photo-gallery',
  templateUrl: './ngx-photo-gallery.component.html',
  styleUrls: ['./ngx-photo-gallery.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NgxPhotoGalleryComponent{

  constructor() {
  }

  @Input() images: Array<Gallery> = [];
  @Input() albumTitle = '';
  @Input() searchAlt = '';
  @Input() brightness = '1';
  @Input() searchImageBase64 = '';

}
