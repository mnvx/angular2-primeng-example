export class CourseData {
  public columns: string[] = [];
  public courses: any[] = [];
}

export interface ParserInterface {
  parse(data: any): CourseData;
}