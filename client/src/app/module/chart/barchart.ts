/**
 * Bar Chart adapter
 */
import {Component, Input/*, ElementRef, DynamicComponentLoader, ComponentMetadata, ViewMetadata*/} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
import {CourseData} from '../parser/interface';

import {ChartPrimeng} from './chart.primeng';
import {ChartOther} from './chart.other';


@Component({
  selector: 'barchart',
  inputs: ['originalData'],
  directives: [
    CORE_DIRECTIVES, 
    // Select chart library automatically
    localStorage.getItem('chartService') === 'primeng' ? ChartPrimeng : ChartOther
  ],
  template: '<chart [originalData]="originalData"></chart>'
})

export class BarChart {
  @Input() public originalData: CourseData;

//  @todo: try to change chart library on fly
//  
//  constructor(dcl: DynamicComponentLoader, elementRef: ElementRef) {
//    let Chart = localStorage.getItem('chartService') === 'primeng' ? ChartPrimeng : ChartOther;
//    dcl.loadIntoLocation(Chart, elementRef, 'child');
//  }

//  static get annotations() {
//    return [
//      new ComponentMetadata({
//        selector: 'barchart',
//        directives: [
//          CORE_DIRECTIVES,
//          localStorage.getItem('chartService') === 'primeng' ? ChartPrimeng : ChartOther
//        ],
//        inputs: ['originalData'],
//        template: '<chart #child [originalData]="originalData"></chart>'
//      })
//    ];
//  }
//
//  static get parameters() {
//    return [[DynamicComponentLoader],[ElementRef]];  
//  }

  
}