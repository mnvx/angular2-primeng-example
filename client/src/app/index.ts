import {bootstrap} from 'angular2/platform/browser'
import {HTTP_PROVIDERS} from 'angular2/http';
import {FORM_PROVIDERS} from 'angular2/common';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {LocationStrategy, HashLocationStrategy} from 'angular2/platform/common';
import {provide} from 'angular2/core';
import {App} from './app'
import {Config} from './config';
//import {enableProdMode} from 'angular2/core';
//enableProdMode();

bootstrap(App, [
  FORM_PROVIDERS,
  ROUTER_PROVIDERS,
  HTTP_PROVIDERS, 
  provide(LocationStrategy, {useClass: HashLocationStrategy}),
  Config
]);
