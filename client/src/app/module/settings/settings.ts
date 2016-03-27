/**
 * Page with settings
 */

import {Component, Injectable, Inject} from 'angular2/core';
import {RadioButton} from 'primeng/primeng';
import {Config} from '../../config';

declare var module: any

@Component({
  selector: 'settings',
  directives: [RadioButton],
  moduleId: module.id,
  templateUrl: './settings.html'
})

@Injectable()

export class Settings {
  
  public source: string;
  public chart: string;

  constructor(@Inject(Config) private config: Config) {
    for (let source of config.sources) {
      if (source.url === config.dataSource) {
        this.source = source.name;
        break;
      }
    }
    this.chart = config.chartService;
  }

  /**
   * Select data source
   */
  public onSourceSelect(source: string) {
    this.source = source;
    for (let item of this.config.sources) {
      if (item.name === source) {
        this.config.dataSource = item.url;
        localStorage.setItem('dataSource', item.url);
        break;
      }
    }
  }

  /**
   * Select chart library
   */
  public onChartSelect(chart: string) {
    this.chart = chart;
    this.config.chartService = chart;
    localStorage.setItem('chartService', chart);
  }
  
}
