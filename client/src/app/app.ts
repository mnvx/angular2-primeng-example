import {Component} from 'angular2/core';
import {RouteConfig, Router, RouterOutlet} from 'angular2/router';
import {Workspace} from './module/workspace/workspace';

declare var module: any

@Component({
  selector: 'app',
  moduleId: module.id,
  templateUrl: './app.html',
  directives: [ RouterOutlet ]
})
@RouteConfig([
  { path: '/', redirectTo: ['Workspace'] },
  { path: '/workspace/...', component: Workspace, as: 'Workspace' }
])

export class App {
  constructor(public router: Router) {
  }
}