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

    let promise = new Promise((resolve, reject) => {
      resolve(this.search.findResources());
    }).then((data) =>{
      this.sources = data;
      alert(data);
    }
    );

    // this.search.findResources().then((data) => {
    //   this.sources = data;
    // });

    // this.sources = this.search.findResources();
    // console.log('Sources: ' + this.sources);
  }

}
