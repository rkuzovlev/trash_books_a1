import _find from 'lodash/find';
import _forEach from 'lodash/forEach';

/* @ngInject */
export default class StoreCartSmallController {
	constructor($scope, StoreService) {
		$scope.items = StoreService.items;
		$scope.cartItems = StoreService.cartItems;

		$scope.test = "hahahahhahahah!";

		$scope.total = 0;
		$scope.count = 0;

		let fillItems = () => {
			$scope.total = 0;
			$scope.count = 0;

			_forEach($scope.cartItems, function(count, key){
				let itemId = parseInt(key);
				let item = _find($scope.items, {id: itemId});

				$scope.total += item.cost * count;
				$scope.count += count
				
				return { item, count }
			});
		};

		fillItems();

		$scope.$watch('items', fillItems, true);
		$scope.$watch('cartItems', fillItems, true);
	}
}