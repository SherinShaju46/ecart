import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css'],
})
export class DeleteProductComponent implements OnInit {
  productId: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private dataService: DataService,
    private router: Router
  ) {}
  ngOnInit() {
    this.activatedRoute.params.subscribe((data: any) => {
      console.log(data.id);
      this.productId = data.id;
      this.deleteProduct();
    });
  }

  deleteProduct() {
    this.dataService.deleteProduct(this.productId).subscribe(() => {
      alert('product removed successfully');
      this.router.navigateByUrl('product');
    });
  }
}
