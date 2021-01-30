import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PfolioComponent } from './pfolio/pfolio.component';
import { ByebyeComponent } from './byebye/byebye.component';



const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'home',
        component: HomeComponent,
        data: { animationState: 'homeAnime' }
      },
      {
        path: 'portfolio',
        component: PfolioComponent,
        data: { animationState: 'portAnime' }
      },
      {
        path: 'bye',
        component: ByebyeComponent,
        data: { animationState: 'byeAnime' }
      },
      {
        path: '**',
        redirectTo: 'home'
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
