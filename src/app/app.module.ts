import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WhetherComponent } from './components/whether/whether.component';
import { ProfileComponent } from './components/profile/profile.component';
import { FragmentsModule } from './fragments/fragments.module';

@NgModule({
  declarations: [
    AppComponent,
    WhetherComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FragmentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
