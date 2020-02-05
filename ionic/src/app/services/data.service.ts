import { forkJoin, Observable } from 'rxjs';
import { flatMap, map } from 'rxjs/operators';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Film } from '../interfaces/film.interface';

@Injectable({
  providedIn: 'root',
})
export class DataService {

  private readonly swApiUrl = 'https://swapi.co/api/films/';
  private readonly omdbApiUrl = 'http://www.omdbapi.com/';
  private readonly omdbKey = 'c20ae1e1';
  private readonly omdbUserId = 'tt3896198';

  constructor(
    private readonly httpClient: HttpClient
  ) {}

  public getStarWarsFilms() {
    return this.httpClient.get<{results: Film[]}>(this.swApiUrl).pipe(
      map(response => response.results.sort((a, b) => a.episode_id - b.episode_id)),
      flatMap((films: Film[]) => this.addPosterToFilms(films))
    );
  }

  private addPosterToFilms(films: Film[]): Observable<Film[]> {
    return forkJoin(
      films.map((film: Film) => this.addPosterToFilm(film))
    );
  }

  private addPosterToFilm(film: Film): Observable<Film> {
    return this.httpClient.get<{Poster: string}>(this.omdbApiUrl, {
      params: {
        apikey: this.omdbKey,
        i: this.omdbUserId,
        t: film.title,
        y: film.release_date.substring(0,4)
      }
    }).pipe(
      map(omdbFilm => ({
        ...film,
        poster: omdbFilm.Poster
      }))
    )
  }

}
