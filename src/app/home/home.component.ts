import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  gender: string;

  genders = [
    'Male',
    'Female'
  ];

  constructor() { }

  ngOnInit() {

  }

  submitSearch(name: string, gender: string) {
    // function for searching through db and finding match
    // if match not found, display 'no match'
    // else, call function to gather and format data
    // send data to graph component
  }

  // gather and format data function

  // display error function

}
