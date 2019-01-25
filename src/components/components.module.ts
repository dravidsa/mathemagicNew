import { NgModule } from '@angular/core';
import { SanitizeHtmlPipe  } from './sanitizehtml-pipe/sanitizehtml-pipe';
import { FilterPipe } from './../pipes/filter/filter';
@NgModule({
	declarations: [SanitizeHtmlPipe , FilterPipe ],
	imports: [],
	
exports: [SanitizeHtmlPipe ]
})
export class ComponentsModule {}
