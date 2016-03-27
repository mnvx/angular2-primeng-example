import {Component, EventEmitter} from 'angular2/core';
import {Router, RouterLink} from 'angular2/router';
import {CORE_DIRECTIVES, FORM_DIRECTIVES, NgClass} from 'angular2/common';
//import {CHART_DIRECTIVES} from 'ng2-charts/ng2-charts';

declare var module: any

@Component({
  selector: 'workspace',
  directives: [RouterLink, CORE_DIRECTIVES, NgClass, FORM_DIRECTIVES],
//  directives: [RouterLink, CORE_DIRECTIVES, CHART_DIRECTIVES, NgClass, FORM_DIRECTIVES],
  moduleId: module.id,
  templateUrl: './chart.html'
})

export class Chart {

  constructor() {
  }

  private barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
    multiTooltipTemplate: '<%if (datasetLabel){%><%=datasetLabel %>: <%}%><%= value %>'
  };

  private barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];

  private barChartSeries = ['Series A', 'Series B'];

  public barChartType = 'Bar';

  private barChartLegend:boolean = true;

  private barChartData = [
    [65, 59, 80, 81, 56, 55, 40],
    [28, 48, 40, 19, 86, 27, 90]
  ];

  // events
  chartClicked(e:any) {
    console.log(e);
  }

  chartHovered(e:any) {
    console.log(e);
  }

}