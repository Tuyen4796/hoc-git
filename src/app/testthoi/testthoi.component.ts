import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testthoi',
  templateUrl: './testthoi.component.html',
  styleUrls: ['./testthoi.component.css']
})
export class TestthoiComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  commit(){
    console.log("test ở đay");

  }
}
