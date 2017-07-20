import _find from 'lodash/find';

export default class StoreCartLineController {
	/* @ngInject */
	constructor($scope, StoreService) {
		this.StoreService = StoreService;
		let itemId = parseInt($scope.$parent.id);
		
		$scope.items = StoreService.items;
		$scope.onItemDelete = this.onItemDelete.bind(this);

		let findItem = function(){
			$scope.item = _find(StoreService.items, {id: itemId});
		}

		findItem();

		$scope.$watch('items', findItem, true);
	}

	onItemDelete (cartId) {
		this.StoreService.removeCartPosition(cartId);
	}
}