/**
 * Parser of data from datasource
 */

import {ParserInterface, CourseData} from './interface';

export class Parser implements ParserInterface {
  parse(data: any): CourseData {
    let result = new CourseData();

    result.columns = data.Columns;
    result.courses = [];
    for (let course in data.Rows) {
      result.courses.push({
        'name': course,
        'orders': data.Rows[course]
      });
    }

    return result;
  }
}