/**
 * Layout
 */

import {Component} from '@angular/core';
import {Routes, Router, RouterLink, RouterOutlet} from '@angular/router';
import {Menu} from '../menu/menu';
import {Table} from '../table/table';
import {Chart} from '../chart/chart';
import {Settings} from '../settings/settings';

declare var module: any

@Component({
  selector: 'workspace',
  moduleId: module.id,
  templateUrl: './workspace.html'
})
export class Workspace {
  constructor(public router: Router) {
  }
}