import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { STForumComponent } from './components/st-forum/st-forum.component';
import { STForumItemComponent } from './components/st-forum-item/st-forum-item.component';
import { STForumDetailsComponent } from './components/st-forum-details/st-forum-details.component';
import { HttpClientModule } from '@angular/common/http';
import { STDataService } from './services/st-data.service';

@NgModule({
  declarations: [
    AppComponent,
    STForumComponent,
    STForumItemComponent,
    STForumDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    STDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
