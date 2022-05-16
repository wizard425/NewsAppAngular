import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { NewsItem } from '../models/newsitem.model';
import { news } from '../testnews';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  api_key = 'pub_7426577d323e916c74763312296e65d7a9a4';
  baseUrl = "https://newsdata.io/api/1/news";

  constructor(private http: HttpClient) { }


  getLatestNews(): Observable<any> {
    //return this.http.get<any>(`${this.baseUrl}?apikey=${this.api_key}&category=${category}`);
    return new Observable(observer => {
      observer.next(news);
    });
  }
}
