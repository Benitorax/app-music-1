import { Injectable } from '@angular/core';

import { Album, List } from './album';
import { ALBUM_LISTS, ALBUMS } from './mock-albums';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  private _albums: Album[] = ALBUMS; // _ convention private et protected
  private _albumList: List[] = ALBUM_LISTS;

  // Observer et Observable
  sendCurrentNumberPage = new Subject<number>();
  subjectAlbum = new Subject<Album>();

  constructor() { }

  getAlbums(): Album[] {

    return this._albums.sort(
      (a, b) => { return b.duration - a.duration }
    );
  }

  getAlbum(id: string): Album {

    return this._albums.find(album => album.id === id);
  }

  // recherche d'une référence dans la liste
  getAlbumList(id: string): List {

    return this._albumList.find(list => list.id === id);
  }

  count(): number {

    return this._albums.length;
  }

  paginate(start: number, end: number): Album[] {

    return this._albums.sort(
      (a, b) => { return b.duration - a.duration }
    ).slice(start, end);
  }

  search(word: string): Album[] {
    if (word.length > 2) {
      let response = [];
      this._albums.forEach(album => {
        if (album.title.includes(word)) response.push(album);
      });

      return response;
    }
  }

  currentPage(numberPage: number) {
    // Observer notifie une information page ici numérique
    return this.sendCurrentNumberPage.next(numberPage);
  }

  switchOn(album: Album) {
    let a = this._albums.find(list => list.id === album.id);
    if (a) {
      a.status = 'on';
      // notifier à l'observable que l'album change statut
      // console.log(album.status, album.id);
      this.subjectAlbum.next(album); 
    }

  }

  switchOff(id : string) {
    let a = this._albums.find(list => list.id === id);
    if (a) {
      a.status = 'off';
    }
  }
}