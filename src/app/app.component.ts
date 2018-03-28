import { Component } from '@angular/core';
import { Quote } from './quote/quote.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes: Quote[];

  constructor() {
    this.quotes = [
      new Quote('"It is the fox with the longest neck that can reach the grass on the highest branches"', 'http://wikipedia.com', 10),
      new Quote('"Only by looking deep within themselves can one truly realize hunger"', 'http://nih.gov', 5),
      new Quote('"Orang is a color"', 'http://quotes.com', -10),
    ];
  }

  addQuote(title: HTMLInputElement, link: HTMLInputElement): boolean {
    console.log(`Adding quote title: ${title.value} and link: ${link.value}`);
    this.quotes.push(new Quote(title.value, link.value, 0));
    title.value = '';
    link.value = '';
    return false;
  }
  // deleteQuote(event:T,i:T) {
  // }

  
//   delete(isComplete,index){
//     if (isComplete){
//         let toDelete=confirm(`Are you sure you want to delete ${this.quotes[index]}`)
        
//         if(toDelete){
//             this.quotes.splice(index,1)
//         }
//     }
// }

  // delete(quote, i) {
  //   console.log(`Deleting quote title: ${title.value} and link: ${link.value}`);
  //   // this.quotes.splice(i, 1);
  //       this.quotes.splice(this.quotes.indexOf(quote), 1);
  //   return false;
  // }

  sortedQuotes(): Quote[] {
    return this.quotes.sort((a: Quote, b: Quote) => b.votes - a.votes);
  } 
}