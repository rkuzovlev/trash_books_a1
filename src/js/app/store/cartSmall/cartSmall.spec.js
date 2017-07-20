describe('StoreCartSmall', () => {

	describe('StoreCartSmallController', () => {
        let ctrl, result, $scope, $rootScope, $controller, StoreService;

		beforeEach(() => {
            angular.mock.module("store");

			angular.mock.inject((_$controller_, _$rootScope_, _StoreService_) => {
                $rootScope = _$rootScope_;
                $scope = $rootScope.$new();
                $controller = _$controller_;
                StoreService = _StoreService_;

                StoreService.items = [
                    { "id": 1, "title": "test1", "img": "img1", "rating": 1.7, "date": 400547931000, "cost": 1.7, "lang": "rus"},
                    { "id": 2, "title": "test2", "img": "img2", "rating": 3.3, "date": 674775035000, "cost": 2.5, "lang": "eng"}
                ];

                StoreService.cartItems = { "1": 1, "2": 3 };
                
				ctrl = $controller('StoreCartSmallController', {$scope, StoreService});
			});
		});

        it('should contain right init values', () => {
            expect($scope.items).toBe(StoreService.items);
            expect($scope.cartItems).toBe(StoreService.cartItems);

            expect($scope.total).toBe(9.2);
            expect($scope.count).toBe(4);
        });

        it('$watch should recount values', () => {
            expect($scope.items).toBe(StoreService.items);
            expect($scope.cartItems).toBe(StoreService.cartItems);

            expect($scope.total).toBe(9.2);
            expect($scope.count).toBe(4);

            $rootScope.$digest();

            expect($scope.total).toBe(9.2);
            expect($scope.count).toBe(4);

            StoreService.cartItems['1'] = 2;

            $rootScope.$digest();

            expect($scope.total).toBe(10.9);
            expect($scope.count).toBe(5);

            StoreService.items[0].cost = 1;

            $rootScope.$digest();

            expect($scope.total).toBe(9.5);
            expect($scope.count).toBe(5);
        });
    });
});