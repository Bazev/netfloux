import {Component, Input, OnInit} from '@angular/core';
import {Serie} from "../../models/serie";
import {ActivatedRoute} from "@angular/router";
import {SerieService} from "../../services/serie/serie.service";


@Component({
  selector: 'app-single-serie-view',
  templateUrl: './single-serie-view.component.html',
  styleUrls: ['./single-serie-view.component.css']
})
export class SingleSerieViewComponent implements OnInit {
  serie: Serie | undefined;
  @Input() id: number;


  constructor(private route: ActivatedRoute, private serieService: SerieService) {
    this.id = 0;
  }

  ngOnInit(): void {
    const id = parseInt(this.route.snapshot.params.id)
    this.serieService
      .getSerieById(id)
      .then(
        (foundSerie: Serie) => {
          this.serie = foundSerie;
        }
      );
  }





}
