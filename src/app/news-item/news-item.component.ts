import { Component, Input, OnInit } from '@angular/core';
import { NewsItem } from '../models/newsitem.model';

@Component({
  selector: 'ne-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.scss']
})
export class NewsItemComponent implements OnInit {

  @Input() newsItem!: NewsItem;

  constructor() { }

  ngOnInit(): void {
  }

}
