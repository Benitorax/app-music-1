import { Component, OnInit } from '@angular/core';

import { Album } from '../album';
import { ALBUMS } from '../mock-albums';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {

  titlePage: string = "Page princiaple Albums Music";
  albums: Album[] = ALBUMS;
  selectedAlbum : Album;
  status: string = null; // pour gérer l'affichage des caractères [play] 

  constructor() { }


  onSelect(album: Album) {
    //console.log(album);
    this.selectedAlbum = album;
  }

  ngOnInit() {
  }

  playParent($event){
    this.status = $event.id; // identifiant unique
  }
}
