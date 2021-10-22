export class Comment {

  private _id : number | null;
  private _date : Date;
  private _author : string;
  private _content : string

  private static _commentCount = 1;


  constructor(date: Date, author: string, content: string) {
    this._id = Comment._commentCount;
    this._date = date;
    this._author = author;
    this._content = content;

    Comment._commentCount++;
  }


  get id(): number | null {
    return this._id;
  }

  set id(value: number | null) {
    this._id = value;
  }


  get date(): Date {
    return this._date;
  }

  set date(value: Date) {
    this._date = value;
  }

  get author(): string {
    return this._author;
  }

  set author(value: string) {
    this._author = value;
  }

  get content(): string {
    return this._content;
  }

  set content(value: string) {
    this._content = value;
  }
}
