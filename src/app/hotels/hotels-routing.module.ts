import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HotelsComponent } from './hotels/hotels.component';
import { HotelDetailComponent } from './hotel-detail/hotel-detail.component';
import { CommentsComponent } from './comments/comments.component';
import { HotelContactsComponent } from './hotel-contacts/hotel-contacts.component';

const routes: Routes = [
  { path: '', component: HotelsComponent },
  {
    path: ':id', component: HotelDetailComponent, children: [
      {path: '', redirectTo: 'comments'},
      {
        path: 'comments',
        component: CommentsComponent
      },
      {
        path: 'contacts',
        component: HotelContactsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HotelsRoutingModule { }
