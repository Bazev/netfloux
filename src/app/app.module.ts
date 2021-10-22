import {LOCALE_ID, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ErrorComponent } from './views/error/error.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AuthComponent } from './views/auth/auth.component';
import { SerieTableComponent } from './components/series-table/serie-table.component';
import {SerieTableLineComponent} from "./components/serie-table-line/serie-table-line.component";
import { SeriesViewComponent } from './views/series-view/series-view.component';
import {SingleSerieViewComponent} from "./views/single-serie-view/single-serie-view.component";
import {SerieService} from "./services/serie/serie.service";
import {AuthService} from "./services/auth/auth.service";
import {AuthGuard} from "./guards/auth/auth.guard";
import { NewSerieViewComponent } from './views/new-serie-view/new-serie-view.component';
import { SerieFormComponent } from './components/serie-form/serie-form.component';
import { EditSerieViewComponent } from './views/edit-serie-view/edit-serie-view.component';
import { CommentsComponent } from './components/comments/comments.component';
import { AddCommentViewComponent } from './views/add-comment-view/add-comment-view.component';
import { CommentFormComponent } from './components/comment-form/comment-form.component';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ErrorComponent,
    AuthComponent,
    SerieTableComponent,
    SerieTableLineComponent,
    SeriesViewComponent,
    SingleSerieViewComponent,
    NewSerieViewComponent,
    SerieFormComponent,
    EditSerieViewComponent,
    CommentsComponent,
    AddCommentViewComponent,
    CommentFormComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [SerieService, AuthService, AuthGuard,
    { provide: LOCALE_ID, useValue: 'fr-FR'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
