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

  private APIkey: String = "AIzaSyAkpbzS4JKcqMsuDRAF6V1yCySTe5aR6ec";

  private keyWords : Keyword[] = [];

  constructor(private http : HttpClient, private router : Router) { }

  // function finds keywords based on the given text and caches them
  keywords(text: string)
  {
      this.http.post('/api/keywords', {text}).subscribe(data => {

      for(var i = 1; i < data.list.length; i++ )
      {
        if(data.list[i].relevance >= 0.65)
          this.keyWords.push(data.list[i]);
      }

      console.log(this.keyWords);
      this.router.navigateByUrl('/results');
    });
  }

  // Function to return best results matching keywords.
  findResources() : String[]
  {
    var temp = [];

    return temp;
  }

  // Function returns a copy of the array of keywords
  announce()
  {
    return this.keyWords;
  }
}
