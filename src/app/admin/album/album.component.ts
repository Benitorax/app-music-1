import { Component, OnInit } from '@angular/core';
import { AlbumService } from '../../album.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {

  albums;
  count ;

  constructor(private aS : AlbumService) { }

  ngOnInit() {
    this.albums = this.aS.paginate(0, 10);
    this.count = this.aS.count();
  }

}
