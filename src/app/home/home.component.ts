import { Component, OnInit } from '@angular/core';
declare var localDatabase: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  rank: string = '';
  gender: string;

  genders = [
    'Male',
    'Female'
  ];

  constructor() { }

  ngOnInit() {

  }

  submitSearch(name: string, gender: string, rank: string) {
    // function for searching through db and finding match
    // for each object in localdb array
    // if name matches name && gender matches gender first letter
    // console.log(thatobject)
    // call function to gather and format data
    // send data to graph component

    // parsing string format for values
    // input name formatting
    var firstLetter = name.charAt(0).toUpperCase();
    var restOfName = name.substring(1).toLowerCase();
    var formattedName = firstLetter + restOfName;
    // throwing error after search execution

    let myPromise = new Promise((resolve, reject) => {
      let match: any;
      localDatabase.forEach(element => {
        if (formattedName == element.Name && gender.charAt(0) == element.Gender) {
          match = element;
          // send string of rank to graph component
          this.rank = match.Rank;
          console.log(element.Rank.split(" "));
          resolve(match);
        }
      });

      if (!match)
        reject("No match for name/gender");
    });
    
    myPromise.then((res) => {
      if (res)
        console.log(res);
    });

    myPromise.catch((fromReject) => {
       console.log(fromReject);
     });

  }
    
  // search(name: string, gender: string) {
  //   localDatabase.forEach(element => {
  //       if (name == element.Name && gender.charAt(0) == element.Gender) {
  //         var match = element;
  //         return match;
  //       }
  //     });
  // }
  // gather and format data function
}
