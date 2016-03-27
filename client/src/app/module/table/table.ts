/**
 * Page with table
 */

import {Component, Injectable, Inject} from 'angular2/core';
import {CourseService} from '../service/course.service';
import {Parser} from '../parser/parser';
import {CourseData} from '../parser/interface';

declare var module: any

@Component({
  selector: 'table',
  bindings: [Parser, CourseService],
  moduleId: module.id,
  templateUrl: './table.html'
})

@Injectable()

export class Table {
  
  public data: CourseData;

  constructor(
    @Inject(CourseService) protected service: CourseService,
    @Inject(Parser) protected parser: Parser
  ) {
    this.data = new CourseData();
    service.getData()
      .subscribe((res) => {
        this.data = parser.parse(res);
      });
  }
}
