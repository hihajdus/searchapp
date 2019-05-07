import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-search-detail',
  templateUrl: './search-detail.component.html',
  styleUrls: ['./search-detail.component.scss'],
  providers: [SearchService]
})
export class SearchDetailComponent {

  words: any;
  constructor(private service: SearchService) {

  }

  search(term) {
    this.service.search_word(term)
    .subscribe(res => {
      this.words = res;
    })
  }
}
