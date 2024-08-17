import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserCenterComponent } from './user-center.component';
import { RouterModule } from '@angular/router';

import { SharedUiModule } from '@ng-workspace/shared-ui';
@NgModule({
  declarations: [UserCenterComponent],
  imports: [
    CommonModule,
    SharedUiModule,
    RouterModule.forChild([
      {
        path: '',
        component: UserCenterComponent,
      },
    ]),
  ],
})
export class UserCenterModule {}
