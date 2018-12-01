import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumComponent } from './album/album.component';
import { ShareModule } from '../share/share.module';
import { AddAlbumComponent } from './add-album/add-album.component';
import { Routes, RouterModule } from '@angular/router';
import { GuardService } from '../guard.service';
import { UpdateAlbumComponent } from './update-album/update-album.component';

const routes: Routes = [
  { path: 'admin/add', /*canActivate: [GuardService],*/ component: AddAlbumComponent },
  { path: 'admin/update/:id', /*canActivate: [GuardService],*/ component: UpdateAlbumComponent },
]

@NgModule({
  imports: [
    CommonModule,
    ShareModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AlbumComponent, AddAlbumComponent, UpdateAlbumComponent],
  exports : [AlbumComponent]
})
export class AdminModule { }
