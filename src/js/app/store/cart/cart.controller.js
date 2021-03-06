export default class StoreCartController {
	/* @ngInject */
	constructor($scope, StoreService) {		
		$scope.items = StoreService.items;
		$scope.cartItems = StoreService.cartItems;
		$scope.count = 0;
		$scope.count2 = 0;

		let recount = function(){
			$scope.count = 0;
			$scope.count2 = 0;
			for (let i in $scope.cartItems){
				$scope.count += $scope.cartItems[i];
				$scope.count2++;
			}
			StoreService.saveCart();
		};

		recount();

		$scope.$watch('cartItems', recount, true);
	}
}