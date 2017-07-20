import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DestinationListComponent } from './destination-list/destination-list.component';

const routes: Routes = [
  {
    path: '',
    children: [],
    component: DestinationListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
