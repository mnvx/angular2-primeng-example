import {Component, Injectable, Input} from 'angular2/core';
import {RouterLink} from 'angular2/router';
import {CORE_DIRECTIVES} from 'angular2/common';
import {BarChart} from 'primeng/primeng';
import {CourseData} from '../parser/interface';

declare var module: any

@Component({
  selector: 'chart-primeng',
  inputs: ['originalData'],
  directives: [RouterLink, CORE_DIRECTIVES, BarChart],
  bindings: [CourseData],
  moduleId: module.id,
  templateUrl: './chart.primeng.html'
})

@Injectable()

export class ChartPrimeng {

  @Input() public originalData: CourseData;

  public data: any =  {
    labels: [],
    datasets: []
  };
  
  private colors = [
    {
        fillcolor:"#69D2E7"
    },
    {
        fillcolor: "#A7DBDB"
    },
    {
        fillcolor: "#E0E4CC"
    },
    {
        fillcolor: "#F38630"
    },
    {
        fillcolor: "#FA6900"
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