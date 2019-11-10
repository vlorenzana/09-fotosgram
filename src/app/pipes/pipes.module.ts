import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomzanitizerPipePipe } from './domzanitizer-pipe.pipe';
import { DomSanitizer } from '@angular/platform-browser';



@NgModule({
  declarations: [DomzanitizerPipePipe],
  exports:[ DomzanitizerPipePipe]
})
export class PipesModule { }
