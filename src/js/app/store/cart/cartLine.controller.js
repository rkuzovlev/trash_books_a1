import _find from 'lodash/find';


export default class StoreCartLineController {
	/* @ngInject */
	constructor($scope, StoreService) {
		let itemId = parseInt($scope.$parent.id);
		$scope.item = _find(StoreService.items, {id: itemId});
	}
}