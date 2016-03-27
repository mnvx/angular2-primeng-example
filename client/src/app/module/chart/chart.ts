import {Component, Injectable, Inject} from 'angular2/core';
import {RouterLink} from 'angular2/router';
import {CORE_DIRECTIVES} from 'angular2/common';
import {BarChart} from 'primeng/primeng';
import {CourseService} from '../service/course.service';
import {Parser} from '../parser/parser';
import {CourseData} from '../parser/interface';

declare var module: any

@Component({
  selector: 'chart',
  directives: [RouterLink, CORE_DIRECTIVES, BarChart],
  bindings: [Parser, CourseService],
  moduleId: module.id,
  templateUrl: './chart.html'
})

@Injectable()

export class Chart {

  public originalData: CourseData;
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

  constructor(
    @Inject(CourseService) protected service: CourseService,
    @Inject(Parser) protected parser: Parser
  ) {
    this.originalData = new CourseData();
    service.getData()
      .subscribe((res) => {
        this.originalData = parser.parse(res);
        this.data.labels = this.originalData.columns;
        this.data.datasets = [];
        for (let i = 0; i < this.originalData.courses.length; i++) {
          this.courses.push({
            number: i,
            name: this.originalData.courses[i].name,
            color: this.colors[i % this.colors.length].fillcolor
          });
        }
        this.showCourse(0);
      });
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