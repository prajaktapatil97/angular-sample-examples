import { Component } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';

  items = ['item1', 'item2', 'item3', 'item4'];

  constructor(private formBuilder : FormBuilder){
  }
  userForm = this.formBuilder.group({
    userName : ''
  });
  addItem(newItem: string) {
    this.items.push(newItem);
  };
  onSubmit(){
    console.log("form data",this.userForm.value)
  }
}
