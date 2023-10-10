import { Component } from '@angular/core';
import { DataService } from 'src/app/product/service/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})

export class HeaderComponent {
  searchData: any;
  constructor(private ds: DataService){}

  search(event: any) {
    this.searchData = event.target.value;
    console.log(this.searchData);

    //to send the string data(stream) to object of behavior subject data
    //next() is used to send data to behavioral subject
    this.ds.searchInput.next(this.searchData)
  }
}
