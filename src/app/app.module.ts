import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DestinationListComponent } from './destination-list/destination-list.component';
import { DestinationDetailComponent } from './destination-detail/destination-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    DestinationListComponent,
    DestinationDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
