import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HttpClientModule } from '@angular/common/http';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { NowPlayngMoviesComponent } from './components/now-playng-movies/now-playng-movies.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, HeaderComponent, MovieCardComponent, NowPlayngMoviesComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatToolbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
