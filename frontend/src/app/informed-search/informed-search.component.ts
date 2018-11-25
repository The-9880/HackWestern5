import { Component, OnInit } from '@angular/core';

import { SearchService } from '../search.service';

@Component({
  selector: 'app-informed-search',
  templateUrl: './informed-search.component.html',
  styleUrls: ['./informed-search.component.css']
})
export class InformedSearchComponent implements OnInit {

  constructor(private search : SearchService) { }

  ngOnInit() {
  }

  onClick(text:string)
  {
    this.search.keywords(text);
  }

}
