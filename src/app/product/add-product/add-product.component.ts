import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../service/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  constructor(private fb: FormBuilder, private ds: DataService, private router: Router) { }
  addProductForm = this.fb.group({
    id: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    pname: ['', [Validators.required, Validators.pattern('[a-zA-Z]+')]],
    categoryId: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    description: ['', [Validators.required, Validators.pattern('[0-9a-zA-Z]+')]],
    price: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    isAvailable: ['', [Validators.required, Validators.pattern('[a-zA-Z]+')]],
    productImage: ['', [Validators.required, Validators.pattern('[0-9a-zA-Z]+')]],
    rating: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    review: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    vendorName: ['', [Validators.required, Validators.pattern('[0-9a-zA-Z]+')]],
    warranty: ['', [Validators.required, Validators.pattern('[0-9a-z]+')]],
  })

  addProduct() {
    console.log("form submits");
    let path = this.addProductForm.value
    const newData = {
      id: path.id,
      productName: path.pname,
      categoryId: path.categoryId,
      description: path.description,
      price: path.price,
      isAvailable: path.isAvailable,
      productImage: path.productImage,
      rating: path.rating,
      review: path.review,
      vendorName: path.vendorName,
      warranty: path.warranty,
    }
    console.log(newData);

    this.ds.addProduct(newData).subscribe(() => {
      alert('added new product')
      this.router.navigateByUrl('product')
    })
  }
}
