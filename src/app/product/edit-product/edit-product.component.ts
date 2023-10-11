import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css'],
})
export class EditProductComponent implements OnInit {
  productId: any;
  productData: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private dataService: DataService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data: any) => {
      this.productId = data.id;
    });

    this.dataService.viewProduct(this.productId).subscribe((data: any) => {
      this.productData = data;
    });
  }

  updateData(){
    this.dataService.updateProduct(this.productId, this.productData).subscribe(()=>{
      alert("product details updated")
      this.router.navigateByUrl("product/view/"+this.productId)
    })
  }
}
