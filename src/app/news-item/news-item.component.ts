import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewsItem } from '../models/newsitem.model';

@Component({
  selector: 'ne-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.scss']
})
export class NewsItemComponent implements OnInit {

  @Input() newsItem!: NewsItem;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onClicked() {
    console.log('clicked');
    this.router.navigateByUrl('detail', { state: this.newsItem });
  }

}
