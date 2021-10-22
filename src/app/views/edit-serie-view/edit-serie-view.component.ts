import { Component, OnInit } from '@angular/core';
import {SerieService} from "../../services/serie/serie.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Serie} from "../../models/serie";

@Component({
  selector: 'app-edit-serie-view',
  templateUrl: './edit-serie-view.component.html',
  styleUrls: ['./edit-serie-view.component.css']
})
export class EditSerieViewComponent implements OnInit {

  serie : Serie | undefined;

  constructor(private serieService:SerieService, private route:ActivatedRoute, private router:Router) {

  }

  ngOnInit(): void {
    const id = parseInt(this.route.snapshot.params.id);
    this.serieService
      .getSerieById(id)
      .then((serieFound : Serie) => {
        this.serie = serieFound;
      })
  }

  askToEditSerie(editedSerie: Serie) : void {
    this.serieService
      .editSerie(editedSerie)
      .then(()=>{
        this.router.navigate(['series'])
      })
  }
}
