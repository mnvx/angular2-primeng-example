/**
 * Service for loading data from server
 */
 
import {Injectable, Inject} from 'angular2/core';
import {Http} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/share';
import {Config} from '../../config';

@Injectable()
export class CourseService {

  public data: any = undefined;

  constructor(
    @Inject(Http) protected http: Http, 
    @Inject(Config) protected config: Config
  ) {
  }
  
  public getData(): Observable<any>
  {
    if (this.data !== undefined) {
      console.log('second');
      return Observable.create(function (observer) {
        observer.onNext(this.data);
      });
    }
    this.data = null;
    let result = this.http
      .get(this.config.dataSource)
      .map(res => res.json());
    result.share();
    result.subscribe((res) => {
        this.data = res;
      });
    return result;
  }
  
}