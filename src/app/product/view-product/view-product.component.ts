import { Component } from '@angular/core';
import { DataService } from '../service/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent {
  id: any;
  productData: any;
  constructor(private dataService: DataService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data: any) => {
      this.id = data.id
      console.log(this.id);
    })

    this.dataService.viewProduct(this.id).subscribe((product) => {
      this.productData = product
      console.log(this.productData);
    })
  }

}
