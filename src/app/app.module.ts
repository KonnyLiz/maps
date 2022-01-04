import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
// import { AgmCoreModule } from '@agm/core';

// importando el modulo de material
import { MaterialModule } from './material.module';


import { GoogleMapsModule } from '@angular/google-maps';
import { MapComponent } from './components/map/map.component';
// AIzaSyDVhBz-lR0r853Ayp6va7p0ZMHhJHFUnJs

@NgModule({
  declarations: [
    AppComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    GoogleMapsModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
