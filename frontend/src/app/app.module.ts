import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { InformedSearchComponent } from './informed-search/informed-search.component';
import { ResultsViewComponent } from './results-view/results-view.component';
import { SourcesViewComponent } from './sources-view/sources-view.component';

const routes : Routes = [
  {path:'', redirectTo:'search', pathMatch:'full'},
  {path:'search', component:InformedSearchComponent},
  {path:'results', component:ResultsViewComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    InformedSearchComponent,
    ResultsViewComponent,
    SourcesViewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
