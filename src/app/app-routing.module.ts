import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SearchDetailComponent } from './search-detail/search-detail.component';
import { MovieComponent } from './movie/movie.component';
import { SeriesComponent } from './series/series.component';


const routes: Routes = [
  { path: '', redirectTo: '/search', pathMatch: 'full' },
  { path: 'search', component: SearchDetailComponent },
  { path: 'movie', component: MovieComponent },
  { path: 'series', component: SeriesComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
