import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private searchTerm : string;

  constructor(private http : HttpClient) { }

  test() : Observable<any>
  {
    return this.http.get('/api').pipe();
  }
}
