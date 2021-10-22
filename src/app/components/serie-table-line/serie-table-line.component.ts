import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {SerieService} from "../../services/serie/serie.service";

@Component({
  selector: '[app-serie-table-line]',
  templateUrl: './serie-table-line.component.html',
  styleUrls: ['./serie-table-line.component.css']
})
export class SerieTableLineComponent implements OnInit {

  @Input() id: number;
  @Input() name : string |undefined;
  @Input() dateFirstSaison : Date | undefined;

  constructor(private serieService:SerieService) {
    this.id = 0;
  }

  ngOnInit(): void {
  }

  onClickDeleteSerie() {
    this.serieService.deleteSerie(this.id)

  }
}
