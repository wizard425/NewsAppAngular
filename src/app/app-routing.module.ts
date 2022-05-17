import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewsDetailComponent } from './news-detail/news-detail.component';
import { TopicComponent } from './topic/topic.component';

const routes: Routes = [
  {
    path: 'detail',
    component: NewsDetailComponent
  },
  {
    path: 'topic/:topic',
    component: TopicComponent
  },
  {
    path: ':category',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
