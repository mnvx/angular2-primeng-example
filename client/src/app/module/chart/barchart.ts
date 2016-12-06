/**
 * Bar Chart adapter
 */
import {Component, Input} from '@angular/core';
import {CourseData} from '../parser/interface';


@Component({
  selector: 'barchart',
  inputs: ['originalData'],
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