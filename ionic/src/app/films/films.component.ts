import { Observable } from 'rxjs';

import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Film } from '../interfaces/film.interface';
import { DataService } from '../services/data.service';

@Component({
  templateUrl: 'films.component.html',
  styleUrls: ['films.component.scss']
})
export class FilmsComponent {

  public films$: Observable<Film[]>;

  constructor(
    private readonly dataService: DataService,
    private readonly router: Router
  ) {
    this.films$ = this.dataService.getStarWarsFilms();
  }

  public onFilmClick(film: Film) {
    this.router.navigate(['films', film.episode_id]);
  }

}
