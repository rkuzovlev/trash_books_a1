/* @ngInject */
export default class StoreListPageController {
	constructor($scope, $state) {
		$scope.onPageChange = function(newPage) {
			$state.go('homeWithPage', { page: newPage });
		};
	}
}