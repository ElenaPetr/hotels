import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FragmentsModule } from './fragments/fragments.module';
import { SharedModule } from './shared/shared.module';
import { HotelsModule } from './pages/hotels/hotels.module';
import { HttpInterceptorService } from './shared/services/http-interceptor.service';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { AboutComponent } from './pages/about/about.component';
import { AppRoutingModule } from './app-routing.module';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { UsersModule } from './pages/users/users.module';
import {StoreModule} from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers } from './reducers/index';
import { environment } from 'src/environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { FavoriteEffects } from './pages/hotels/favorite-hotels/state/favorite.effects';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundPageComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FragmentsModule,
    SharedModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, { runtimeChecks : { }}),
    EffectsModule.forRoot([FavoriteEffects]),
    // EffectsModule.forFeature([FavoriteEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
