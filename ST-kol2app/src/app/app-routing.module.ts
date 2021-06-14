import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { STForumComponent } from './components/st-forum/st-forum.component';
import { STForumDetailsComponent } from './components/st-forum-details/st-forum-details.component';

const routes: Routes = [
  {
    path: '',
    component: STForumComponent,
  },
  {
    path: 'forum',
    component: STForumComponent,
  },
  {
    path: 'forum/detail/:id',
    component: STForumDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
