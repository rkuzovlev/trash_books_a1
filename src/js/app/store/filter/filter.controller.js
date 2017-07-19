/* @ngInject */
export default class StoreFilterController {
	constructor($scope, StoreService) {
		this.StoreService = StoreService;

		$scope.StoreService = this.StoreService;
	}
}