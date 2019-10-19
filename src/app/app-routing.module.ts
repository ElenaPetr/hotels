import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/hotels', pathMatch: 'full' },
  { path: 'contacts', loadChildren: () => import('./pages/contacts/contacts.module').then(mod => mod.ContactsModule) },
  { path: 'about', loadChildren: () => import('./pages/about/about.module').then(mod => mod.AboutModule) },
  {
    path: 'hotels', loadChildren: () => import('./pages/hotels/hotels.module').then(mod => mod.HotelsModule)
  },
  {
    path: 'users', loadChildren: () => import('./pages/users/users.module').then(mod => mod.UsersModule)
  },
  { path: '**', component: NotFoundPageComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
