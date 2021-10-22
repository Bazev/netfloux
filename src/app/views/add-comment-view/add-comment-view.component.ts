import {Component, OnInit} from '@angular/core';

import {Comment} from "../../models/comment";
import {CommentService} from "../../services/comments/comment.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ifStmt} from "@angular/compiler/src/output/output_ast";
import {Serie} from "../../models/serie";
import {SerieService} from "../../services/serie/serie.service";


@Component({
  selector: 'app-add-comment-view',
  templateUrl: './add-comment-view.component.html',
  styleUrls: ['./add-comment-view.component.css']
})
export class AddCommentViewComponent implements OnInit {

  comment : Comment | undefined;
  serie : Serie | undefined;

  constructor(private serieService:SerieService, private router:Router, private route:ActivatedRoute) {
  }

  ngOnInit(): void {
    const id = parseInt(this.route.snapshot.params.id);
    this.serieService
      .getSerieById(id)
      .then((serieFound : Serie) => {
        this.serie = serieFound;
      })

  }

  submitAddComment(commentToAdd: Comment) : void {
    this.serieService
      .addCom(commentToAdd, this.serie)
      .then(()=>{
        this.router.navigateByUrl('series')
      })

  }
}
