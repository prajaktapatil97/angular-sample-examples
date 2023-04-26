import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-two',
  templateUrl: './child-two.component.html',
  styleUrls: ['./child-two.component.css']
})
export class ChildTwoComponent implements OnInit {
  @Output() filterProduct = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  filterProductList(value : string){
    console.log("second",value);
    this.filterProduct.emit(value);
  }
}
