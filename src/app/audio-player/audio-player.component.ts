import { Component, OnInit } from '@angular/core';
import { AlbumService } from '../album.service';
import { interval } from 'rxjs'; // Observable
import { take, map, switchMap } from 'rxjs/operators'; // opérateurs

@Component({
  selector: 'app-audio-player',
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.scss']
})
export class AudioPlayerComponent implements OnInit {

  current: number = 1;
  total: number;
  ratio: number = 0;
  step: number;
  albumId: string;

  constructor(private aS: AlbumService) { }

  ngOnInit() {

    const interval$ = interval(12 * 100);

    this.aS.subjectAlbum
      .pipe(
        switchMap(album => {
          this.total = Math.floor(album.duration / 120)
          this.albumId = album.id;

          return interval$.pipe(
            take(this.total),
            map(x => x + 1)
          )
        }
        )
      )
      .subscribe(
        x => {
          this.current = x;
          this.ratio = Math.floor(x * (100 / this.total));
          if(this.current == this.total){
            this.aS.switchOff(this.albumId);
            this.total = null;
            this.ratio = 0;
          }
        }
      )

  }

}