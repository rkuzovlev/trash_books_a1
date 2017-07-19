import _find from 'lodash/find';


/* @ngInject */
export default class StoreCartLineController {
	constructor($scope, StoreService) {
		let itemId = parseInt($scope.$parent.id);
		$scope.item = _find(StoreService.items, {id: itemId});
	}
}