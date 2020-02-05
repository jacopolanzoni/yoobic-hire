import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { FilmComponent } from './film.component';
import { FilmsComponent } from './films.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      { path: ':id', component: FilmComponent },
      { path: '', component: FilmsComponent }
    ])
  ],
  declarations: [
    FilmComponent,
    FilmsComponent
  ]
})
export class FilmModule {}
