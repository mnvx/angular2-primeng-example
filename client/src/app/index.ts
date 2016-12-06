import {NgModule} from '@angular/core';
import {RouterLink, RouterOutlet, RouterModule} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import {App} from './app'
import {Config} from './config';
import {RadioButton} from 'primeng/primeng';
import {ChartPrimeng} from './module/chart/chart.primeng';
import {BarChart} from './module/chart/barchart';
import {ChartOther} from './module/chart/chart.other';
import {CourseData} from './module/parser/interface';
import {CourseService} from './module/service/course.service';
import {Parser} from './module/parser/parser';
import {Menu} from './module/menu/menu';
import {Workspace} from './module/workspace/workspace';
import {Chart} from './module/chart/chart';
import {Table} from './module/table/table';
import {Settings} from './module/settings/settings';

declare var module: any;

var ROUTES = [
  //{ path: '/', redirectTo: ['Workspace'] },
  { path: 'workspace', component: Workspace, as: 'Workspace', children: [
      { path: '/mychart', component: Chart, as: 'Chart', useAsDefault: true },
      { path: '/table', component: Table, as: 'Table' },
      { path: '/settings', component: Settings, as: 'Settings' }
    ]
  }
];

@NgModule({
  imports: [ // import Angular's modules
    BrowserModule,
    FormsModule,
    // HttpModule,
    RouterModule.forRoot(ROUTES, { useHash: true }),
  ],
  declarations: [
    BarChart,
    RadioButton,
    RouterLink,
    RouterOutlet,
    Menu,
    localStorage.getItem('chartService') === 'primeng' ? ChartPrimeng : ChartOther
  ],
  bootstrap:    [ App ],
  providers:    [
    //FORM_PROVIDERS,
    //ROUTER_PROVIDERS,
    //HTTP_PROVIDERS,
    { provide: LocationStrategy, useValue: HashLocationStrategy },
    Config,
    CourseData,
    Parser,
    CourseService
  ]
})
export class AppModule {
}
