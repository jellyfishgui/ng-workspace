import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonCardComponent } from './common-card/common-card.component';
import { MaterialLibsModule } from '@ng-workspace/material-libs';

@NgModule({
  declarations: [CommonCardComponent],
  imports: [CommonModule, MaterialLibsModule],
  exports: [CommonCardComponent],
})
export class SharedUiModule {}
