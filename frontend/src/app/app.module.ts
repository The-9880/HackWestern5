import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { InformedSearchComponent } from './informed-search/informed-search.component';

const routes : Routes = [
]

@NgModule({
  declarations: [
    AppComponent,
    InformedSearchComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
