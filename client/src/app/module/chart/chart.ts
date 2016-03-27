import {Component, Injectable, Inject} from 'angular2/core';
import {RouterLink} from 'angular2/router';
import {CORE_DIRECTIVES} from 'angular2/common';
import {CourseService} from '../service/course.service';
import {Parser} from '../parser/parser';
import {CourseData} from '../parser/interface';
import {BarChart} from './barchart';

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

  constructor(
    @Inject(CourseService) protected service: CourseService,
    @Inject(Parser) protected parser: Parser
  ) {
    this.originalData = new CourseData();
    service.getData()
      .subscribe((res) => {
        this.originalData = parser.parse(res);
      });
  }

}