import { Component, OnInit } from '@angular/core';
import { QuoteService } from './services/quote.service'
@Component({
  selector: 'my-app',
  templateUrl: 'app/views/component.html',
  styleUrls: [ 'app/css/component.css']
})
export class AppComponent  { 
  
  constructor(public quoteService: QuoteService ) {}
  
  public quoteReceived: Object;
  
  public testQuote: Object = [ 
    { 
      "ID": 2130, 
      "title": "Tom Bissel", 
      "content": "<p>To create anything&#8211;whether a short story or a magazine profile or a film or a sitcom&#8211;is to believe, if only momentarily, you are capable of magic.</p>\n", 
      "link": "https://quotesondesign.com/tom-bissel/", 
      "custom_meta": { 
        "Source": "<a href=\"http://www.brainpickings.org/index.php/2012/04/13/magic-hours-tom-bissell/\">article</a>" 
      } 
    }
    ];
  ngOnInit() { 
    //this.getQuote()

    // For testing:
    this.setQuote(this.testQuote);
  }

  getQuote () { 
    var quote;
    this.quoteService.getQuote()
      .then(
        quote => this.setQuote(quote),
        error => console.log(error)
      );
    
  }

  getNewQuote() {
    this.getQuote();
  }
  setQuote (quote:any) { 
    this.quoteReceived = quote;
    console.log(quote)
    console.dir(quote);
  }
}
