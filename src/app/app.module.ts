import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchDetailComponent } from './search-detail/search-detail.component';
import { SearchService } from './search.service';
import { AppRoutingModule } from './app-routing.module';
import { MovieComponent } from './movie/movie.component';
import { SeriesComponent } from './series/series.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchDetailComponent,
    MovieComponent,
    SeriesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
