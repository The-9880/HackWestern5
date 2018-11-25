import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

import { Keyword } from './keyword';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private keyWords : Keyword[] = [];

  constructor(private http : HttpClient, private router : Router) { }

  keywords(text: string)
  {
      this.http.post('/api/keywords', {text}).subscribe(data => {

      for(var i = 1; i < data.list.length; i++ )
      {
        this.keyWords.push(data.list[i]);
      }

      console.log(this.keyWords);
      this.router.navigateByUrl('/results');
    });
  }

  test() : Observable<any>
  {
    return this.http.get('/api').pipe();
  }
}
