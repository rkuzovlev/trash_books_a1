import angular from 'angular';

import StoreListPageController from './listPage/listPage.controller';
import StoreListPageDirective from './listPage/listPage.directive';

import StoreListController from './list/list.controller';
import StoreListDirective from './list/list.directive';

import StoreFilterController from './filter/filter.controller';
import StoreFilterDirective from './filter/filter.directive';

import StoreRatingController from './rating/rating.controller';
import StoreRatingDirective from './rating/rating.directive';

import StoreCartController from './cart/cart.controller';
import StoreCartDirective from './cart/cart.directive';
import StoreCartLineController from './cart/cartLine.controller';
import StoreCartTotalController from './cart/cartTotal.controller';

import StoreCartSmallController from './cartSmall/cartSmall.controller';
import StoreCartSmallDirective from './cartSmall/cartSmall.directive';


import { StoreService } from './service/store.service';

export default angular.module('store', [])
	.service('StoreService', StoreService)
		
	.directive('storeListPage', StoreListPageDirective)
	.controller('StoreListPageController', StoreListPageController)

	.directive('storeCart', StoreCartDirective)
	.controller('StoreCartController', StoreCartController)

	.directive('storeCartSmall', StoreCartSmallDirective)
	.controller('StoreCartSmallController', StoreCartSmallController)
	.controller('StoreCartLineController', StoreCartLineController)
	.controller('StoreCartTotalController', StoreCartTotalController)

	.directive('storeList', StoreListDirective)
	.controller('StoreListController', StoreListController)
	
	.directive('storeFilter', StoreFilterDirective)
	.controller('StoreFilterController', StoreFilterController)

	.directive('storeRating', StoreRatingDirective)
	.controller('StoreRatingController', StoreRatingController)
	.name
;