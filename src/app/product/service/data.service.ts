import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  //object to store the incoming data
  searchInput= new BehaviorSubject('')

  constructor(private http: HttpClient) { }

  //api call to access all product data
  viewAllProducts(){
    return this.http.get('http://localhost:3000/products')
  }

  //api to access single product data
  viewProduct(id: any){
    return this.http.get('http://localhost:3000/products/'+id)
  }

  addProduct(product: any){
    return this.http.post('http://localhost:3000/products/', product)
  }

  deleteProduct(productId: any){
    return this.http.delete('http://localhost:3000/products/'+ productId)
  }

  updateProduct(id: any, pdata: any){
    return this.http.patch('http://localhost:3000/products/'+id, pdata)
  }
}
