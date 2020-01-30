import { ProductsService } from './../products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products=[];
  newProducts=[];
  LatestProducts=[];



  constructor(private productsService:ProductsService) { }

  ngOnInit() {

    this.getBestSProducts();
    this.getNewCollections();
    this.getLatestsProducts();

  }

  getBestSProducts(){
    this.productsService.getBestSellingProducts()
    .subscribe((response:any[])=>{
      this.products=response;
      console.log(this.products)
    })
  }


  getNewCollections(){
    this.productsService.getNewCollection()
    .subscribe((response:any[])=>{
      this.newProducts=response;
      console.log(this.newProducts)
      

    })
  }


  getLatestsProducts(){
    this.productsService.getLatestCollection()
    .subscribe((response:any[])=>{
      this.LatestProducts=response;
      console.log(this.LatestProducts)
      

    })
  }




}
