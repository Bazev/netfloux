import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Comment} from "../../models/comment";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Serie} from "../../models/serie";
import {SerieService} from "../../services/serie/serie.service";

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css']
})
export class CommentFormComponent implements OnInit {
  @Output() formSubmitted : EventEmitter<Comment>
  @Input() serie : Serie;
  formComment : FormGroup;
  comment : Comment ;

  constructor(private serieService:SerieService) {
    this.serie = new Serie('', new Date(), 0, '', '', '', [])
    this.formSubmitted = new EventEmitter<Comment>()
    this.formComment = new FormGroup({});
    this.comment = new Comment(new Date(), '','')
  }

  ngOnInit(): void {
    this.initForm()
  }

  onSubmitCommentForm() : void {
    if (this.formComment.valid) {
      this.serieService.addCom(this.formComment.value, this.serie)
      this.formComment.reset()
    }
  }

  private initForm() {
    this.formComment.addControl(
      'author',
      new FormControl(
        null,
        [Validators.required]
      )
    );
    this.formComment.addControl(
      'content',
      new FormControl(
        null,
        [Validators.required, Validators.minLength(10)]
      )
    );
  }
}
