import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { NewsModel } from '../models/news.model';
import { ApiModel } from '../models/api.model';

const apiUrl = 'https://stocknewsapi.com/api/v1/category?section=general&items=10&token=pjzvc2oewkqsbinorcxf37p0wpikhy505wp5rpas';

@Injectable({
    providedIn: 'root',
})

export class NewsService {
    constructor (private httpClient: HttpClient) {}

    fetchNews(){
        return this.httpClient.get<ApiModel<NewsModel[]>>(
            `${apiUrl}`
        ).pipe();
    }
}