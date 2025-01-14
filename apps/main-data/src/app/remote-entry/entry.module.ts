import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { remoteRoutes } from './entry.routes';
import { RemoteEntryComponent } from './entry.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { CommonModule } from '@angular/common';
import { SharedUiModule } from '@ng-workspace/shared-ui';

@NgModule({
  imports: [
    RouterModule.forChild([...remoteRoutes]),
    CommonModule,
    SharedUiModule,
  ],
  declarations: [RemoteEntryComponent, NxWelcomeComponent],
  providers: [
    // provideZoneChangeDetection({ eventCoalescing: true }),
    // provideRouter(appRoutes),
  ],
})
export class RemoteEntryModule {}
