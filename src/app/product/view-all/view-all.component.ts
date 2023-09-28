import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-view-all',
  templateUrl: './view-all.component.html',
  styleUrls: ['./view-all.component.css']
})
export class ViewAllComponent implements OnInit {
  allProductArray: any
  filterProductsData: any
  isFilter: boolean = false;
  constructor(private dataService: DataService) { }
  ngOnInit(): void {
    this.dataService.viewAllProducts().subscribe((products: any) => {
      this.allProductArray = products
      this.filterProductsData = this.allProductArray
      // console.log(this.allProductArray);
    })
  }

  filterProducts(catId: any) {
    this.isFilter=true
    this.filterProductsData = this.allProductArray.filter((item: any) => 
       item.categoryId==catId || catId==''
    )
    console.log(this.filterProductsData);
    
  }
}
