import { Component } from '@angular/core';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  public nowPlayngMovies = [];

  constructor(private homeService: HomeService) {}

  ngOnInit(): void {
    this.homeService.getMoviesNowPlayng().subscribe((reponse) => {
      this.nowPlayngMovies = reponse.results;
      console.log(reponse);
    });
  }
}
