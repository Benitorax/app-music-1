import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlaylistRoutingModule } from './playlist-routing.module';
import { MusicListComponent } from './music-list/music-list.component';
import { MusicService } from './music.service';
import { MusicTagDirective } from './music-tag.directive';

@NgModule({
  declarations: [MusicListComponent, MusicTagDirective],
  imports: [
    CommonModule,
    PlaylistRoutingModule
  ],
  providers : []
})

export class PlaylistModule { }
