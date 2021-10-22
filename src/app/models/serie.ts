import {Comment} from "./comment";
import {formatDate} from '@angular/common';

export class Serie {

  private _id: number;
  private _name: string;
  private _dateFirstSaison: Date;
  private _numberOfSaisons: number;
  private _description: string;
  private _review: string;
  private _urlPicture: string;
  private _comments: Array<Comment>;

  private static _serieCount = 1;

  constructor(name: string, dateFirstSaison: Date, numberOfSaisons: number, description: string, review: string, urlPicture: string, comments: Array<Comment>) {
    this._id = Serie._serieCount;
    this._name = name;
    this._dateFirstSaison = dateFirstSaison;
    this._numberOfSaisons = numberOfSaisons;
    this._description = description;
    this._review = review;
    this._urlPicture = urlPicture;
    this._comments = comments

    Serie._serieCount++;
  }




  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get dateFirstSaison(): Date {
    return this._dateFirstSaison;
  }

  set dateFirstSaison(value: Date) {
    this._dateFirstSaison = value;
  }

  get numberOfSaisons(): number {
    return this._numberOfSaisons;
  }

  set numberOfSaisons(value: number) {
    this._numberOfSaisons = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get review(): string {
    return this._review;
  }

  set review(value: string) {
    this._review = value;
  }

  get urlPicture(): string {
    return this._urlPicture;
  }

  set urlPicture(value: string) {
    this._urlPicture = value;
  }

  get comments(): Array<Comment> {
    return this._comments;
  }

  set comments(value: Array<Comment>) {
    this._comments = value;
  }

  static get serieCount(): number {
    return this._serieCount;
  }

  static set serieCount(value: number) {
    this._serieCount = value;
  }
}
