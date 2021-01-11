import { Component, OnInit } from '@angular/core';
import { NewsModel } from '../models/news.model';
import { NewsService } from '../services/news.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  newsListing: NewsModel[] = [];

  constructor(
    private readonly newsService: NewsService
  ) { }

  ngOnInit() {
     this.getAllNews();
  }

  getAllNews(){
    this.newsService.fetchNews().subscribe(
      (result) => {
        this.newsListing = result.data;
        console.log(this.newsListing);
      }, (error) => {
        console.log(error);
      }
    )
  }

}
