import {Component, OnDestroy, OnInit} from '@angular/core';
import {Serie} from "../../models/serie";
import {Subscription} from "rxjs";
import {SerieService} from "../../services/serie/serie.service";
import {Comment} from "../../models/comment";

@Component({
  selector: 'app-series-view',
  templateUrl: './series-view.component.html',
  styleUrls: ['./series-view.component.css']
})
export class SeriesViewComponent implements OnInit, OnDestroy {
  series: Array<Serie>;
  seriesSub: Subscription;
  comments : Array<Comment>

  constructor(private serieService: SerieService) {
    this.series = [];
    this.seriesSub = new Subscription();
    this.comments = [];
  }

  ngOnInit(): void {
    this.seriesSub = this.serieService.series.subscribe
    (series => {
      this.series = series;
    })
  }

  ngOnDestroy() {
    this.seriesSub.unsubscribe();
  }
}
