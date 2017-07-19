export default class StoreListPageController {
	/* @ngInject */
	constructor($scope, $state) {
		$scope.onPageChange = function(newPage) {
			$state.go('homeWithPage', { page: newPage });
		};
	}
}