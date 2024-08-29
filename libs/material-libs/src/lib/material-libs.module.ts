import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
} from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

const MAT_MODULES = [MatButtonModule, MatCardModule];

@NgModule({
  imports: [CommonModule],
  exports: [...MAT_MODULES],
})
export class MaterialLibsModule {}
