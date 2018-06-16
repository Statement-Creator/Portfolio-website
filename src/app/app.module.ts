import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule,Router} from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ContactComponent } from './contact/contact.component';
import { DiscoverComponent } from './discover/discover.component';

const routes = [
  {path:'',component:HomepageComponent},
  {path:'contact',component:ContactComponent},
  {path:'discover',component:DiscoverComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ContactComponent,
    DiscoverComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
