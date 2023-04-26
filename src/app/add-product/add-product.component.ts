import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  @Output() newProductAdded = new EventEmitter <string>();
  productName = '';
  constructor() { }

  ngOnInit(): void {
  }

  addNewProduct(value : string){
    console.log("child",value);
    this.newProductAdded.emit(value)
  }
}
