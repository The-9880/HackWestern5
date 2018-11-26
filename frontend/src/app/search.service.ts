import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap, first } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

import { Keyword } from './keyword';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private APIkey: String = "AIzaSyAkpbzS4JKcqMsuDRAF6V1yCySTe5aR6ec";

  // array of the most relevant keywords.
  private keyWordsO : Keyword[] = [];
  private keyWords : String[] = [];

  constructor(private http : HttpClient, private router : Router) { }

  // function finds keywords based on the given text and caches them
  keywords(text: string)
  {
      this.http.post('/api/keywords', {text}).subscribe(data => {

      for(var i = 1; i < data.list.length; i++ )
      {
        if(data.list[i].relevance >= 0.65)
          this.keyWordsO.push(data.list[i]);
      }

      for(var x of this.keyWordsO)
      {
        this.keyWords.push(x.text);
      }

      console.log(this.keyWordsO);
      this.router.navigateByUrl('/results');
    });
  }

  // Function to return best results matching keywords.
  findResources() : String[]
  {
    var temp = [];

    // run the first query separately.
    var firstQuery = String(this.keyWords.join(' '));
    firstQuery = firstQuery.replace(' ', "%20");
    
    var url = `https://www.googleapis.com/customsearch/v1?q=${firstQuery}
        &cx=004783182965789597506:xaux1pp2owy&key=${this.APIkey}`;


    var promiseList = [];

    promiseList.push(this.http.post('/api/query', {url}, {responseType:'text'}).toPromise());

    // for(var x of this.keyWords)
    // {
    //   var y = x.replace(" ", "%20");
    //   promiseList.push(this.http.post('/api/query', {y}, {responseType:'text'}).toPromise());
    // }

    Promise.all(promiseList).then((vals) => {
      alert(vals[0]);
      console.log(vals);
      temp.push(...vals);
      console.log(temp);
      return temp;
    });
  }

  // Function returns a copy of the array of keywords
  announce()
  {
    return this.keyWords;
  }
}
