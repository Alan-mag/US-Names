import { Component, OnInit, Input, ViewChild, ElementRef,OnChanges } from '@angular/core';
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
    
    let d3 = this.d3;
    let d3ParentElement: Selection<any, any, any, any>;

    /*
    if (this.parentNativeElement != null) {
      d3ParentElement = d3.select(this.parentNativeElement);

      
    var data = [4, 8, 15, 16, 23, 42, 12, 33, 14, 2, 4, 5, 7];

    var margin = {top: 20, right: 30, bottom: 30, left: 40},
        width = 864 - margin.left - margin.right,
        height = 400 - margin.top - margin.bottom;

    var y = d3.scaleLinear()
        .domain([0, d3.max(data)])
        .range([height, 0]);

    var chart = d3.select(".chart")
        .attr("width", width)
        .attr("height", height);

    var barWidth = width / data.length;

    var bar = chart.selectAll("g")
        .data(data)
      .enter().append("g")
        .attr("transform", function(d, i) { return "translate(" + i * barWidth + ")"; });

    bar.append("rect")
      .attr("y", function(d) { return y(d); })
      .attr("height", function(d) { return height - y(d); })
      .attr("width", barWidth - 1);

  bar.append("text")
      .attr("x", barWidth / 2)
      .attr("y", function(d) { return y(d) + 3; })
      .attr("dy", ".75em")
      .text(function(d) { return d; });
    }*/
  }

  makeGraph(rankArray) {         // call this function once data is sent and received

    let d3 = this.d3;
    let d3ParentElement: Selection<any, any, any, any>;
    
    let data = rankArray;
    console.log("data in graph = " + data);
    
    var width = 1,
    barHeight = 20;

    var x = d3.scaleLinear()
        //.domain([0, d3.max(data)])
        .range([0, width]);

    var chart = d3.select(".chart")
        .attr("width", 800)
        .attr("height", barHeight * data.length);

    var bar = chart.selectAll("g")
        .data(data)
      .enter().append("g")
        .attr("transform", function(d, i) { return "translate(0," + i * barHeight + ")"; });

    bar.append("rect")
        .attr("width", x)
        .attr("height", barHeight - 1);

    bar.append("text")
        //.attr("x", function(d) { return x(d) - 3; })
        .attr("y", barHeight / 2)
        .attr("dy", ".35em")
        //.text(function(d) { return d; });
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

