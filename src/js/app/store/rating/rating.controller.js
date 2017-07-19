export default class StoreRatingController {
	/* @ngInject */
	constructor($scope) {
		$scope.star = Math.trunc($scope.rating);

		let d = $scope.rating - $scope.star

		$scope.halfStar = d >= 0.5 ? true : false;
		$scope.noStar = Math.trunc(5 - $scope.rating) + ($scope.halfStar ? 0 : 1);

		$scope.range = function(n) {
			return new Array(n);
		};
	}
}