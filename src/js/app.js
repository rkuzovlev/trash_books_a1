import angular from 'angular';
import angularUtilsPagination from 'angular-utils-pagination';
import angularLocalStorage from 'angular-local-storage';
import router from '@uirouter/angularjs';

import storeModule from './app/store/store.module';

import paginationConfig from './pagination.config';
import routerConfig from './router.config';
import localstorageConfig from './localstorage.config';

import MainController from './app/main/main.controller';
import MainDirective from './app/main/main.directive';


var mainModule = angular.module('main', [angularUtilsPagination, router, storeModule, angularLocalStorage])
	.config(paginationConfig)
	.config(routerConfig)
	.config(localstorageConfig)

	.directive('main', MainDirective)
	.controller('MainController', MainController)
;