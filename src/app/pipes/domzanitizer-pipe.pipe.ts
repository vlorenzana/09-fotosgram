import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'domzanitizerPipe'
})
export class DomzanitizerPipePipe implements PipeTransform {

  constructor(private domSanitize: DomSanitizer) {}
  transform(img: string): any {
    const domImg = `background-image: url('${ img }')`;
    return this.domSanitize.bypassSecurityTrustStyle(domImg);
  }

}
