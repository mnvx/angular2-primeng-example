/**
 * Component for other chart library
 */

import {Component, Injectable, Input} from 'angular2/core';
import {BarChart} from 'primeng/primeng';
import {CourseData} from '../parser/interface';

declare var module: any

@Component({
  selector: 'chart',
  inputs: ['originalData'],
  directives: [BarChart],
  bindings: [CourseData],
  moduleId: module.id,
  templateUrl: './chart.other.html'
})

@Injectable()

export class ChartOther {

  @Input() public originalData: CourseData;

  public data: any =  {
    labels: [],
    datasets: []
  };
  
  private colors = [
    {
        fillcolor:"#AAAAAA"
    },
    {
        fillcolor: "#BBBBBB"
    },
    {
        fillcolor: "#CCCCCC"
    },
    {
        fillcolor: "#DDDDDD"
    },
    {
        fillcolor: "#EEEEEE"
    }
  ];
  
  public courses = [];

  ngOnChanges(...args: any[]) {
    this.data.labels = this.originalData.columns;
    this.data.datasets = [];
    for (let i = 0; i < this.originalData.courses.length; i++) {
      this.courses.push({
        number: i,
        name: this.originalData.courses[i].name,
        color: this.colors[i % this.colors.length].fillcolor
      });
    }
    if (this.originalData.courses.length > 0) {
      this.showCourse(0);
    }
  }

  public onSelect(course) {
    this.data.datasets = [];
    this.showCourse(course.number);
  }

  public onSelectAll() {
    this.data.datasets = [];
    for (let i = 0; i < this.originalData.courses.length; i++) {
      this.showCourse(i);
    }
  }
  
  private showCourse(i)
  {
    this.data.datasets.push({
      label: this.originalData.courses[i].name,
      data: this.originalData.courses[i].orders,
      fillColor: this.colors[i % this.colors.length].fillcolor
    });
  }

}