import { Pipe, PipeTransform } from "@angular/core";
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'sanitizeHtml'
})
export class SanitizeHtmlPipe implements PipeTransform {

  constructor(private _sanitizer:DomSanitizer) {
    console.log(  " in pipe") ; 
  }

  transform(v:string):SafeHtml {
    console.log ( " trying to transform "+ v ) ; 
    return this._sanitizer.bypassSecurityTrustHtml(v);
  }
}


