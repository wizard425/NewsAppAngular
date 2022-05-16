import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsItem } from '../models/newsitem.model';
import { NewsService } from '../services/news.service';

@Component({
  selector: 'ne-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  newsItems: NewsItem[] = [];

  constructor(private newsService: NewsService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getNews();
  }

  getNews() {
      this.newsService.getLatestNews().subscribe(res => {
        this.newsItems = res;
        console.log(res);
    })
  }

}
