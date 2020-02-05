import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { DataService } from '../services/data.service';
import { Film } from '../interfaces/film.interface';

@Component({
  templateUrl: 'film.component.html',
  styleUrls: ['film.component.scss']
})
export class FilmComponent {

  public film: Film;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly dataService: DataService
  ) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.film = this.dataService.getStarWarsFilm(parseInt(paramMap.get('id'), 10));
    });
  }

}
