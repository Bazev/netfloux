import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Serie} from "../../models/serie";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-serie-form',
  templateUrl: './serie-form.component.html',
  styleUrls: ['./serie-form.component.css']
})
export class SerieFormComponent implements OnInit {

  @Input() serieToEdit : Serie | undefined;
  @Input() submitLabel : string;

  @Output() formSubmitted : EventEmitter<Serie>

  formSerie : FormGroup;
  serie : Serie ;

  constructor() {
    this.serie = new Serie('', new Date(), 0, '', '', '', []);
    this.formSerie = new FormGroup({});
    this.formSubmitted = new EventEmitter<Serie>();
    this.submitLabel='';
  }

  ngOnInit(): void {
    if (this.serieToEdit) {
      this.serie = this.serieToEdit
    }
    this.initForm();

    if (this.serieToEdit) {
      this.serie = this.serieToEdit;
    }else {
      this.serie = new Serie('', new Date(), 0, '', '', '', [])
    }
  }
  onSubmitSerieForm():void {
    if (this.formSerie.valid) {
      this.formSubmitted.emit(this.serie)
    }

  }

  private initForm() {
    this.formSerie.addControl(
      'description',
      new FormControl(
        null,
        [Validators.required, Validators.minLength(10), Validators.maxLength(250)]
      )
    );
    this.formSerie.addControl(
      'name',
      new FormControl(
        null,
        [Validators.required]
      )
    );
    this.formSerie.addControl(
      'review',
      new FormControl(
        null,
        [Validators.required]
      )
    );
    this.formSerie.addControl(
      'dateFirstSaison',
      new FormControl(
        null,
        [Validators.required]
      )
    );
    this.formSerie.addControl(
      'nbsaison',
      new FormControl(
        null,
        [Validators.required]
      )
    )
  }
}
