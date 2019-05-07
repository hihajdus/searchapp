import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

@Injectable()

export class SearchService {

  url: string;

  constructor(private http: HttpClient) {
    this.url = 'http://www.omdbapi.com/?i=tt3896198&apikey=7943ac9c'
  }

  search_word(term) {
    return this.http.get(this.url + term)
    .map(res => {
      return res
    })
  }

}
