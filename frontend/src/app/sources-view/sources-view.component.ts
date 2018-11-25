import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
import { Keyword } from '../keyword';

@Component({
  selector: 'app-sources-view',
  templateUrl: './sources-view.component.html',
  styleUrls: ['./sources-view.component.css']
})
export class SourcesViewComponent implements OnInit {

  private sources : String[] = [];

  constructor(private search : SearchService) { }

  ngOnInit() {

    var these = this.search.announce();

    for(var x of these)
    {
      this.sources.push(x.text);
    }
  }

}
