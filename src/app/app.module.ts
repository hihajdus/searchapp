import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SearchDetailComponent } from './search-detail/search-detail.component';
import { SearchService } from './search.service';

@NgModule({
  declarations: [
    AppComponent,
    SearchDetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
