import {Component} from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';

declare var module: any

@Component({
  selector: 'app',
  moduleId: module.id,
  templateUrl: './app.html'
})
export class App {
  constructor(public router: Router) {
  }
}