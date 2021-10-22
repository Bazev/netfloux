import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthGuard} from "./guards/auth/auth.guard";
import {AuthComponent} from "./views/auth/auth.component";
import {ErrorComponent} from "./views/error/error.component";
import {SeriesViewComponent} from "./views/series-view/series-view.component";
import {SingleSerieViewComponent} from "./views/single-serie-view/single-serie-view.component";
import {NewSerieViewComponent} from "./views/new-serie-view/new-serie-view.component";
import {EditSerieViewComponent} from "./views/edit-serie-view/edit-serie-view.component";


const routes: Routes = [
  {path:'', canActivate: [AuthGuard], component:SeriesViewComponent},
  {path: 'home', canActivate: [AuthGuard], component: SeriesViewComponent},
  {path:'series', canActivate:[AuthGuard], component:SeriesViewComponent},
  {path:'series/new', canActivate:[AuthGuard], component:NewSerieViewComponent},
  {path:'series/:id', canActivate:[AuthGuard], component: SingleSerieViewComponent},
  {path:'series/:id/edit', canActivate:[AuthGuard], component : EditSerieViewComponent},
  {path: 'auth', component: AuthComponent},
  {path: 'not-found', component: ErrorComponent},
  {path: '**', redirectTo: 'not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
