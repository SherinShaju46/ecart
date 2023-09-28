import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(productArray: any[], filterString: string, productName: string): any {
    let result: any[] = []
    if (!productArray || filterString == "" || productName == "") {
      return productArray
    }
    else {
      result = productArray.filter((item: any) => item.propName.trim().toLowerCase().includes(filterString.trim().toLowerCase()))
      
    }
    return result
  }

}
