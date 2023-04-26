import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Child Component One';
  products = ['Product1','Product2','Product3']
  filterList = '';
  constructor(){

  }

  ngOnInit(): void {

  }
  showProductList(value :string){
    this.products.push(value)
  }

  showProductFilterList(value :string){
    this.filterList = value
    console.log("this.products filter",this.filterList)
    let filteredArray = this.products.filter((item) => {
      return item == value ;
  });
  console.log("filteredArray",filteredArray);
  }
}
