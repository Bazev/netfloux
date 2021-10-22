import {Component, Input, OnInit} from '@angular/core';
import {Serie} from "../../models/serie";


@Component({
  selector: '[app-comments]',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']

})
export class CommentsComponent implements OnInit {
  serie: Serie | undefined ;

  @Input() author: string | undefined
  @Input() content : string | undefined
  @Input() date : Date | undefined

  constructor() {}

  ngOnInit(): void {
  }

}
