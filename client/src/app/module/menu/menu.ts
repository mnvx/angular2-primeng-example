/**
 * Component with top menu
 */

import {Component} from '@angular/core';
import {Router, RouterLink} from '@angular/router';

declare var module: any

@Component({
  selector: 'app-menu',
  moduleId: module.id,
  templateUrl: './menu.html'
})
export class Menu {

  constructor(public router: Router) {
  }

}