import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-informed-search',
  templateUrl: './informed-search.component.html',
  styleUrls: ['./informed-search.component.css']
})
export class InformedSearchComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }

  onClick(text:string)
  {
    // pass this to the service and let the service do its stuff
    // meanwhile, we'll reroute to the next place.
    alert(text);
    this.router.navigateByUrl('/results');

  }

}
