import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import * as firebase from 'firebase';

import { AppComponent } from './app.component';
import { AlbumsComponent } from './albums/albums.component';
import { AlbumDetailsComponent } from './album-details/album-details.component';
import { FormsModule } from "@angular/forms";
import { SearchComponent } from './search/search.component';
import { AlbumDescriptionComponent } from './album-description/album-description.component';
import { LoginComponent } from './login/login.component';
import {AppRoutingModule} from './app-routing.module';
import { PaginateComponent } from './paginate/paginate.component';
import { AudioPlayerComponent } from './audio-player/audio-player.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AlbumComponent } from './admin/album/album.component';


const firebaseConfig = {
  apiKey: "AIzaSyCCESVZgzUTrDrXzo_tfoePnUMFAK735HA",
  authDomain: "music-60f33.firebaseapp.com",
  databaseURL: "https://music-60f33.firebaseio.com",
  projectId: "music-60f33",
  storageBucket: "music-60f33.appspot.com",
  messagingSenderId: "494105274791"
};

firebase.initializeApp(firebaseConfig);

@NgModule({
  declarations: [
    AppComponent,
    AlbumsComponent,
    AlbumDetailsComponent,
    SearchComponent,
    AlbumDescriptionComponent,
    LoginComponent,
    PaginateComponent,
    AudioPlayerComponent,
    DashboardComponent,
    AlbumComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }