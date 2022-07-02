import { Pipe, PipeTransform } from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";

@Pipe({
  name: 'safeUrl'
})
export class SafeUrlPipe implements PipeTransform {

  constructor(private domSanitizer: DomSanitizer) {}
  transform(value: any, prefix = '') {
    return this.domSanitizer.bypassSecurityTrustUrl(prefix + value);
  }

}
