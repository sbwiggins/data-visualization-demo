import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './view-model/home/home.component';
import { SummaryComponent } from './view-model/summary/summary.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'summary',
    component: SummaryComponent
  },
  // {
  //   path: 'followers',
  //   component: GithubFollowersComponent
  // },
  // {
  //   path: 'posts',
  //   component: PostsComponent
  // },
  // {
  //   path: '**',
  //   component: NotFoundComponent
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
