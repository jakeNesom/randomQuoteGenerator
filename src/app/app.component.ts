import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

import { QuoteService } from './services/quote.service';

@Component({
  selector: 'my-app',
  templateUrl: 'app/views/component.html',
  styleUrls: [ 'app/css/component.css'],
  animations: [
    trigger('fade', [
      state('0', style({
        backgroundColor: '#eee',
        transform: 'scale(1)'
      })),
      state('1',   style({
        backgroundColor: '#cfd8dc',
        transform: 'scale(1.1)'
      })),
      transition('0 => 1', animate('100ms ease-in')),
      transition('1 => 0', animate('100ms ease-out'))
    ])
  ]
})
export class AppComponent  { 
  
  constructor(public quoteService: QuoteService ) {}
  public clicked: boolean = false;
  public quoteReceived: Object;
  public fontSize:number = 30;
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
    this.toggleClicked();
    let length = quote[0].content.length;
    if(length > 250 ) { this.getQuote();}
    else {
      if(length > 200) { this.fontSize = 18; }
      else if(length > 150) { this.fontSize = 20;}
      else if(length > 100)  { this.fontSize = 25; }
      else  { this.fontSize = 30; }

      this.quoteReceived = quote;
    }
  }

  toggleClicked() {
    if(this.clicked == false) { 
      let _this = this;
      this.clicked = true;

      setTimeout(function() {
        this.clicked = false;
      }, 5000);
    }
  }
}
