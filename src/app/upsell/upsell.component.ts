import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upsell',
  templateUrl: './upsell.component.html',
  styleUrls: ['./upsell.component.css']
})
export class UpsellComponent implements OnInit {

  
  cards = [
    {
      title: 'Title 1',
      description: '	Herschel supply co 25l',
      buttonText: 'Add to cart',
      img: './assets/images/720-960.jpg'
    },
    {
      title: 'Title 2',
      description: '	Herschel supply co 25l',
      buttonText: 'Add to cart',
      img: './assets/images/720-960.jpg'
    },
    {
      title: ' Title 3',
      description: '	Herschel supply co 25l',
      buttonText: 'Add to cart',
      img: './assets/images/720-960.jpg'
    },
    {
      title: 'Title 4',
      description: '	Herschel supply co 25l',
      buttonText: 'Add to cart',
      img: './assets/images/720-960.jpg'
    },
    {
      title: ' Title 5',
      description: '	Herschel supply co 25l',
      buttonText: 'Add to cart',
      img: './assets/images/720-960.jpg'
    },
    {
      title: 'Title 6',
      description: '	Herschel supply co 25l',
      buttonText: 'Add to cart',
      img: './assets/images/720-960.jpg'
    },
    {
      title: 'Title 7',
      description: '	Herschel supply co 25l',
      buttonText: 'Add to cart',
      img: './assets/images/720-960.jpg'
    },
    {
      title: 'Title 8',
      description: '	Herschel supply co 25l',
      buttonText: 'Add to cart',
      img: './assets/images/720-960.jpg'
    },
    {
      title: 'Title 9',
      description: '	Herschel supply co 25l',
      buttonText: 'Add to cart',
      img: './assets/images/720-960.jpg'
    },
    {
      title: 'Title 10',
      description: '	Herschel supply co 25l',
      buttonText: 'Add to cart',
      img: './assets/images/720-960.jpg'
    },
    {
      title: ' Title 11',
      description: '	Herschel supply co 25l',
      buttonText: 'Add to cart',
      img: './assets/images/720-960.jpg'
    },
    {
      title: 'Title 12',
      description: '	Herschel supply co 25l',
      buttonText: 'Add to cart',
      img: './assets/images/720-960.jpg'
    },
    {
      title: ' Title 13',
      description: '	Herschel supply co 25l',
      buttonText: 'Add to cart',
      img: './assets/images/720-960.jpg'
    },
    {
      title: 'Title 14',
      description: '	Herschel supply co 25l',
      buttonText: 'Add to cart',
      img: './assets/images/720-960.jpg'
    },
    {
      title: 'Title 15',
      description: '	Herschel supply co 25l',
      buttonText: 'Add to cart',
      img: './assets/images/720-960.jpg'
    },
    
    
    
  ];
  slides: any = [[]];
  chunk(arr, chunkSize) {
    let R = [];
    for (let i = 0, len = arr.length; i < len; i += chunkSize) {
      R.push(arr.slice(i, i + chunkSize));
    }
    return R;
  }
  ngOnInit() {
    this.slides = this.chunk(this.cards, 5);
  }
}