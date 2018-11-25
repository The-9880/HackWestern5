import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SearchService } from '../search.service';

@Component({
  selector: 'app-informed-search',
  templateUrl: './informed-search.component.html',
  styleUrls: ['./informed-search.component.css']
})
export class InformedSearchComponent implements OnInit {

  constructor(private router : Router, private search : SearchService) { }

  ngOnInit() {
  }

  onClick(text:string)
  {
    // pass this to the service and let the service do its stuff
    // meanwhile, we'll reroute to the next place.
    alert(text);
    this.search.test().subscribe((data)=>console.log(data));
    this.router.navigateByUrl('/results');

  }

}
