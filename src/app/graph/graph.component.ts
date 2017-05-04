import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { D3Service, D3, Selection } from 'd3-ng2-service';


@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss', './graph.component.css']
})

export class GraphComponent implements OnInit {
  private d3: D3;
  private parentNativeElement: any;


  constructor(element: ElementRef, d3Service: D3Service) {
    this.d3 = d3Service.getD3();
    this.parentNativeElement = element.nativeElement;
   }

  ngOnInit() {          // was having trouble getting d3.tsv to work
    let d3 = this.d3;
    let d3ParentElement: Selection<any, any, any, any>;

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
    }
  }
}


// var data = [4, 8, 15, 16, 23, 42, 12, 55, 2, 30, 40, 45, 50, 60];

//       var margin = {top: 20, right: 30, bottom: 30, left: 40},
//       width = 960 - margin.left - margin.right,
//       height = 500 - margin.top - margin.bottom;

//       var x = d3.scaleBand()
//                 .rangeRound([0, width])
//                 .padding(0.1);

//       var y = d3.scaleLinear()
//           .range([height, 0]);

//       var xAxis = d3.select(".axis")
//           .call(d3.axisBottom(x))

//       var yAxis = d3.select(".axis")
//           .call(d3.axisLeft(y))

//       var chart = d3.select(".chart")
//           .attr("width", width + margin.left + margin.right)
//           .attr("height", height + margin.top + margin.bottom)
//         .append("g")
//           .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

//       chart.append("g")
//         .attr("class", "x axis")
//         .attr("transform", "translate(0," + height + ")")
//         .call(d3.axisBottom(x));

//       chart.append("g")
//           .attr("class", "y axis")
//           .call(d3.axisTop(y));

//       chart.selectAll(".bar")
//           .data(data)
//         .enter().append("rect")
//           .attr("class", "bar")
//           .attr("x", function(d) { return x(d); })
//           .attr("y", function(d) { return y(d); })
//           .attr("height", function(d) { return height - y(d); })
//           .attr("width", x.rangeBand());