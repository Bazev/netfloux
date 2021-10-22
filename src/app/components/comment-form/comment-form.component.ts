import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Comment} from "../../models/comment";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css']
})
export class CommentFormComponent implements OnInit {
  @Input() submitLabel : string;
  @Output() formSubmitted : EventEmitter<Comment>
  @Input() addComment : Comment | undefined;
  formComment : FormGroup;
  comment : Comment ;

  constructor() {
    this.submitLabel = '';
    this.formSubmitted = new EventEmitter<Comment>()
    this.formComment = new FormGroup({});
    this.comment = new Comment(new Date(), '','')
  }

  ngOnInit(): void {
    if (this.addComment) {
      this.comment = this.addComment
    }
    this.initForm();
    if (this.addComment) {
      this.comment = this.addComment;
    }else {
      this.comment = new Comment(new Date(), '', '')
    }
  }

  onSubmitCommentForm() : void {
    if (this.formComment.valid) {
      this.formSubmitted.emit(this.comment)
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
    this.formComment.addControl(
      'date',
      new FormControl(
        null,
        [Validators.required]
      )
    )

  }
}
