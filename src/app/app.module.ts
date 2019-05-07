import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchDetailComponent } from './search-detail/search-detail.component';
import { SearchService } from './search.service';

@NgModule({
  declarations: [
    AppComponent,
    SearchDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
