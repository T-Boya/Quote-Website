import { Component, OnInit, Input, Output, HostBinding, EventEmitter } from '@angular/core';
import { Quote } from './quote.model';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
@HostBinding('attr.class') cssClass = 'row';
@Input() quote: Quote;

// @Output() delete:EventEmitter<any> = new EventEmitter<any>();
// onDeleteButtonClick() {
// delete.emit();
// }

constructor() {

  }
  delete(): boolean {
    return false;
  }

  voteUp(): boolean {
    this.quote.voteUp();
    return false;
  }

  voteDown(): boolean {
    this.quote.voteDown();
    return false;
  }

ngOnInit() {
}
}