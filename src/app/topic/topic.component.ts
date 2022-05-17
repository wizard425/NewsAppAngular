import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsItem } from '../models/newsitem.model';
import { NewsService } from '../services/news.service';

@Component({
  selector: 'ne-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.scss']
})
export class TopicComponent implements OnInit {

  topic: string = "";
  newsItems: NewsItem[] = [];

  constructor(private activatedRoute: ActivatedRoute,
    private newsService: NewsService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.newsService.getNewsFromTopic(params.topic).subscribe(res => {
        this.newsItems = res.results;
      });
    })
  }

}
