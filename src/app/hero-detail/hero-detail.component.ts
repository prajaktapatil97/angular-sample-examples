import { Component, OnInit,Input, EventEmitter, Output } from '@angular/core';
import { Hero } from '../heroes/hero'
@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  // In this case we utilize the ! , ? symbol to indicate that we are aware that hero is not initialized
  // in the constructor and we will handle it elsewhere.
@Input() hero?: Hero;
@Output() data : EventEmitter <string>  = new EventEmitter();
// @Input() hero ? : String
  constructor() { }

  ngOnInit(): void {
    this.data.emit();
  }

}
