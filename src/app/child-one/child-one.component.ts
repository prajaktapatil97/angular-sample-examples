import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-one',
  templateUrl: './child-one.component.html',
  styleUrls: ['./child-one.component.css']
})
export class ChildOneComponent implements OnInit {
 @Input() title = 'string'
 @Output() newProduct = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  addNewProduct(value : string){
    console.log("value",value)
    this.newProduct.emit(value)
  }
}
