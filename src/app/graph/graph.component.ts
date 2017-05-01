import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { D3Service, D3, Selection, ScaleLinear, ScalePoint } from 'd3-ng2-service';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})

export class GraphComponent implements OnInit {
  private d3: D3;
  private parentNativeElement: any;


  constructor(element: ElementRef, d3Service: D3Service) {
    this.d3 = d3Service.getD3();
    this.parentNativeElement = element.nativeElement;
   }

  ngOnInit() {
    let d3 = this.d3;
    let d3ParentElement: Selection<any, any, any, any>;

    if (this.parentNativeElement != null) {
      d3ParentElement = d3.select(this.parentNativeElement);

      var data = [4, 8, 15, 16, 23, 42, 12, 55, 2, 30, 40, 45, 50, 60];
      var x = d3.scaleLinear()
        .domain([0, d3.max(data)])
        .range([0, 420]);

      d3.select(".chart")
        .selectAll("div")
          .data(data)
        .enter().append("div")
          .style("width", function(d) { return x(d) + "px"; })
          .style("background-color", function(d, i) {
            return i % 2 ? "#00BCD4" : "rgba(0, 188, 212, 0.25)";
          })
          .style("margin", "1px")
          .style("color", "green")
          .text(function(d) { return d;});
    }
  }
}
