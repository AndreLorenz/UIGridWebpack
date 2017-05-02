import angular from 'angular';

import {techsModule} from './app/techs/index';
import 'angular-ui-router';
import routesConfig from './routes';
import 'mdbootstrap/css/bootstrap.css';
import 'md-color-picker/dist/mdColorPicker.css';
import 'md-color-picker/dist/mdColorPicker.js';
import 'tinycolor2/dist/tinycolor-min.js';
import 'angular-material/angular-material.js';
import 'angular-animate/angular-animate.js';
import 'angular-aria/angular-aria.js';
import 'angular-cookies/angular-cookies.js';
import 'angular-ui-grid/ui-grid.js';
import 'angular-ui-grid/ui-grid.css';
import 'mdbootstrap/css/mdb.css';
import 'mdbootstrap/js/mdb.js';
import 'mdbootstrap/js/bootstrap.js';
import 'mdbootstrap/js/tether.js';
import 'mdbootstrap/css/style.css';

import {main} from './app/main';
import {header} from './app/header';
import {title} from './app/title';
import {footer} from './app/footer';

import './index.scss';

angular
  .module('app', [techsModule, 'ui.router', 'ngMaterial','ngCookies', 'mdColorPicker', 'ui.grid'])
  .config(routesConfig)
  .component('app', main)
  .component('fountainHeader', header)
  .component('fountainTitle', title)
  .component('fountainFooter', footer);
