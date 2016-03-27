import {Component} from 'angular2/core';
import {Router, RouterLink} from 'angular2/router';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/common';

declare var module: any

@Component({
  selector: 'app-menu',
  directives: [ RouterLink, CORE_DIRECTIVES, FORM_DIRECTIVES ],
  moduleId: module.id,
  templateUrl: './menu.html'
})
export class Menu {

  constructor(public router: Router) {
  }

}