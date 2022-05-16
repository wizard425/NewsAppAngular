import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewsItem } from '../models/newsitem.model';

@Component({
  selector: 'ne-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.scss']
})
export class NewsDetailComponent implements OnInit {

  item!: any;

  constructor(private router: Router) {
    let i = this.router.getCurrentNavigation()?.extras.state;
    if (i)
      this.item = i;
  }

  ngOnInit(): void {
  }

}
