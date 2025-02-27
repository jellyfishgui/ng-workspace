import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot([
    {
      path: '',
      loadChildren: () => import('./remote-entry/entry.module').then(m => m.RemoteEntryModule)
    }
  ],
  {initialNavigation :'enabledBlocking'}
)],
declarations: [AppComponent],
bootstrap: [AppComponent]
})
export class AppModule {}
