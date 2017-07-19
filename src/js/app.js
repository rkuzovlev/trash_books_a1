import angular from 'angular';
import angularUtilsPagination from 'angular-utils-pagination';
import router from '@uirouter/angularjs';

import storeModule from './app/store/store.module';

import paginationConfig from './pagination.config';
import routerConfig from './router.config';

import mainController from './app/main/main.controller';
import mainDirective from './app/main/main.directive';


var mainModule = angular.module('main', [angularUtilsPagination, router, storeModule])
	.config(paginationConfig)
	.config(routerConfig)

	.directive('main', mainDirective)
	.controller('mainController', mainController)
;