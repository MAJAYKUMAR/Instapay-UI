import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {


    url:string = "http://localhost:9090/instapay" ;


  constructor(private http:HttpClient) { }

    
    addProduct(product:Product){



        this.http.post<Product>(this.url+"/add",product)
        .subscribe(product => alert("Product added successfully "+product.pid) );

       // console.log(this.addedProduct);
    }


    updateProduct(product:Product){
        let updateProduct:Product;

        this.http.put<Product>(this.url+"/update",product)
        .subscribe(product => alert("Product updated successfully "+product.pid));

    }




      deleteProduct(product:Product){


          this.http.delete(this.url+"/delete/"+product.pid).subscribe(data => alert(data));



      }




        getAllProducts():Observable<any>{

         return   this.http.get(this.url+"/products");

        }









}



