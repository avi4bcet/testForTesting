import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homecomp',
  templateUrl: './homecomp.component.html',
  styleUrls: ['./homecomp.component.css']
})
export class HomecompComponent implements OnInit {

  number1:number = 10;
  number2: number = 20;
Total:number;
  constructor() { }

  ngOnInit() {
  }

  myFunction() {

    this.Total =this.number1+this.number2; 

  }

}
