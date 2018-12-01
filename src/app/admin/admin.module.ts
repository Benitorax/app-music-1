import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumComponent } from './album/album.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AlbumComponent],
  exports : [AlbumComponent]
})
export class AdminModule { }
