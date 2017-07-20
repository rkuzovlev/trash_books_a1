export default class StoreListController {
	/* @ngInject */
	constructor($scope, StoreService, $stateParams, $filter) {
		let page = parseInt($stateParams.page);
		$scope.page = page ? page : 1;

		$scope.StoreService = StoreService;

		$scope.filter = function(item, index, items){
			let year = (new Date(item.date)).getFullYear();
			
			if (item.cost >= StoreService.filter.cost.from &&
				item.cost <= StoreService.filter.cost.to &&
				
				item.rating >= StoreService.filter.rating.from &&
				item.rating <= StoreService.filter.rating.to &&
				
				year >= StoreService.filter.year.from &&
				year <= StoreService.filter.year.to &&

				(StoreService.filter.lang == 'all' || item.lang == StoreService.filter.lang)
			){
				return true;
			}
			
			return false;
		}

		$scope.itemsFiltered = $filter('filter')(StoreService.items, $scope.filter);
		$scope.$watch('StoreService', function(){
			$scope.itemsFiltered = $filter('filter')(StoreService.items, $scope.filter);
		}, true);
	}
}