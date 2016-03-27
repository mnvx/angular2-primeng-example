/**
 * Component with top menu
 */

import {Component} from 'angular2/core';
import {Router, RouterLink} from 'angular2/router';

declare var module: any

@Component({
  selector: 'app-menu',
  directives: [ RouterLink ],
  moduleId: module.id,
  templateUrl: './menu.html'
})
export class Menu {

  constructor(public router: Router) {
  }

}