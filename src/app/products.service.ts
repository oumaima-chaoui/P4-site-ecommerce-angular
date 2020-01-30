import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }

  
  getBestSellingProducts(){
      return this.http.get("http://localhost:5000/products"); 
  }

  getNewCollection(){
    return this.http.get("http://localhost:5000/products"); 
}

getLatestCollection(){
  return this.http.get("http://localhost:5001/products"); 
}

}
