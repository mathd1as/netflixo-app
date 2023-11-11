import { Component } from '@angular/core';
import { NowPlayngMoviesService } from './now-playng-movies.service';

@Component({
  selector: 'now-playng-movies',
  templateUrl: './now-playng-movies.component.html',
  styleUrls: ['./now-playng-movies.component.css'],
})
export class NowPlayngMoviesComponent {
  constructor(private nowPlayngService: NowPlayngMoviesService) {}

  public nowPlayngMovies = [];

  ngOnInit(): void {
    this.nowPlayngService.getMoviesNowPlayng().subscribe((reponse) => {
      this.nowPlayngMovies = reponse.results;
      console.log(reponse);
    });
  }
}
