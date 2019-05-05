import { Component } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-search-detail',
  templateUrl: './search-detail.component.html',
  styleUrls: ['./search-detail.component.scss'],
  providers: [SearchService]
})
export class SearchDetailComponent {
  results: Object;
  searchTerm$ = new Subject<string>();

  constructor(private searchService: SearchService) {
    this.searchService.search(this.searchTerm$)
      .subscribe(results => {
        this.results = results.results;
      });
  }

}
