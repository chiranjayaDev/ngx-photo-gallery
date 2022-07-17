import {Component, Input, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'ngx-photo-gallery',
  templateUrl: './ngx-photo-gallery.component.html',
  styleUrls: ['./ngx-photo-gallery.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NgxPhotoGalleryComponent{

  constructor() {
  }

  @Input() images: Array<{type: string,url: string}> = [];
  @Input() albumTitle = '';
  @Input() searchAlt = '';
  @Input() brightness = '1';
  @Input() searchImageBase64 = '';

}
