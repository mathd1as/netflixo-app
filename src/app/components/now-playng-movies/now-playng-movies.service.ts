import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NowPlayngMoviesService {
  constructor(private http: HttpClient) {}

  getMoviesNowPlayng() {
    return this.http.get<any>(
      'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1',
      {
        headers: {
          accept: 'application/json',
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMzYyNWI5ZWFkYTEwMjI0MzcxNjg3ZDFiNzA4Y2NmZiIsInN1YiI6IjY1NDdmMWJiZmQ0ZjgwMDEwMWI2NjU1NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.G4-dbV1WBprfXby0Yv_WrbjKz3yE95qAcQEOr5mbglk',
        },
      }
    );
  }
}
