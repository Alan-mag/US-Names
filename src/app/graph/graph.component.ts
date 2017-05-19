import { Component, OnInit, Input, ViewChild, ElementRef, OnChanges, ChangeDetectionStrategy} from '@angular/core';
import { D3Service, D3, Selection } from 'd3-ng2-service';


@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss', './graph.component.css']
})

export class GraphComponent implements OnInit {
  @Input('rank') nameRank: any;

  private d3: D3;
  private parentNativeElement: any;


  constructor(element: ElementRef, d3Service: D3Service) {
    this.d3 = d3Service.getD3();
    this.parentNativeElement = element.nativeElement;
   }

  ngOnInit() {         
    // console.log(this.nameRank + " in graph component");
    
    // let d3 = this.d3;
    // let d3ParentElement: Selection<any, any, any, any>;

  }

  makeGraph(rankArray) {         // call this function once data is sent and received

    let d3 = this.d3;                                    //  // create variable assign to private member that holds d3 reference
    let d3ParentElement: Selection<any, any, any, any>;  //  // selection interface
    
    let data: number[] = [];
    data = rankArray;                                // gets data from rankArray which is data from parent component
    //data.unshift(0);
    console.log("data in graph = " + data);              // console log data 

    var width = 960,                                       // set width 
        height = 400;                                    // set height
   
   var x = d3.scaleBand()
        .rangeRound([0, width])
        //.domain(["1880","1890","1900","1910","1920","1930","1940","1950","1960","1970","1980","1990","2000","2010"])
        .round(true)
        .padding(0.1);
        
  
   //x.domain(data.map(function(d) { return d; }));

    var y = d3.scaleLinear()                             //  /// constructs a new continuous scale with a unit domain of [0,1] and range [0,1] - range height, 0
        //.domain([0, d3.max(data, function(d: number): number { return data; })])
        .range([height, 0]);



    var chart = d3.select(".chart")                      // d3 selector for chart div in html
        .attr("width", width)                              // set width of chart
        .attr("height", height);                         // set chart height equal to height variable value
    
    var barWidth = width / data.length - 20;                  // specify individual bar width by dividing width by data.length

    var bar = chart.selectAll("g")                       // create bar element and g class inside of svg element for bar
        .data(data)                                      //  // joins specified array of data with elements (in this case g I believe)
      .enter().append("g")                               // enter d3 g class element within bar
        .attr("transform", function(d, i) { return "translate(" + i * 50 + "," + 0 + ")"; }); // transform from origin [at top left] not sure what i is - think i is y value of transform
        //.call(d3.axisLeft(y));

    bar.append("rect")                                   // append a class rect to each g element inside of bar
        .attr("y", function(d: number): number {return height - d; })       // set y attribute for new bar in rect class
        //.attr("height", function(d: number): number { return (height - y(d)); })  // calculate height of rect element
        .attr("height", function(d: number): number { return d; })
        .attr("width", barWidth);                    // calculate width of bar element 
  }

  ngOnChanges(nameRank: string) {
    console.log(this.nameRank);
    var arrayOfRanks = this.nameRank.split(" ");
    console.log(arrayOfRanks);
    this.makeGraph(arrayOfRanks);
    return arrayOfRanks;
  }

  // need function to gather data and use with d3
}

