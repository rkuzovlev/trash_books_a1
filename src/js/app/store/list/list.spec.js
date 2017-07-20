describe('StoreList', () => {

	describe('StoreListController', () => {
        let ctrl, result, $scope, $rootScope, $filter, $stateParams, $controller, StoreService;

		beforeEach(() => {
            angular.mock.module("store");
            
            $stateParams = {page: 2};

			angular.mock.inject((_$controller_, _$filter_, _$rootScope_, _StoreService_) => {
                $filter = _$filter_;
                $rootScope = _$rootScope_;
                $scope = $rootScope.$new();
                $controller = _$controller_;
                StoreService = _StoreService_;
				ctrl = $controller('StoreListController', {$scope, StoreService, $stateParams, $filter});
			});
		});

        it('should contain same StoreService', () => {
            expect($scope.StoreService).toBe(StoreService);
        });
        
        it('should contain right page number', () =>{
            expect($scope.page).toBe(2);
            $stateParams.page = undefined;
            ctrl = $controller('StoreListController', {$scope, StoreService, $stateParams, $filter});
            expect($scope.page).toBe(1);
        });

        it('should contain filter function', () => {
            expect($scope.filter).toBeDefined();
        });

        it('should contain filter function', () => {
            expect($scope.filter).toBeDefined();
        });

        it('should filter items', () => {
            let items = [];
            expect($filter('filter')(items, $scope.filter)).toEqual(items);

            items = [
                { "id": 1, "title": "test1", "img": "img1", "rating": 1.7, "date": 400547931000, "cost": 1.7, "lang": "rus"},
                { "id": 2, "title": "test2", "img": "img2", "rating": 3.3, "date": 674775035000, "cost": 2.5, "lang": "eng"}
            ];
            expect($filter('filter')(items, $scope.filter)).toEqual(items);
            
            StoreService.filter.cost.from = 2;
            StoreService.filter.cost.to = 10;
            expect($filter('filter')(items, $scope.filter)).toEqual( [items[1]] );

            StoreService.filter.cost.from = 1;
            StoreService.filter.cost.to = 2;
            expect($filter('filter')(items, $scope.filter)).toEqual( [items[0]] );

            StoreService.filter.cost.from = 1;
            StoreService.filter.cost.to = 10;
            StoreService.filter.rating.from = 2;
            StoreService.filter.rating.to = 10;
            expect($filter('filter')(items, $scope.filter)).toEqual( [items[1]] );

            StoreService.filter.rating.from = 0;
            StoreService.filter.rating.to = 2;
            expect($filter('filter')(items, $scope.filter)).toEqual( [items[0]] );

            StoreService.filter.cost.from = 2;
            StoreService.filter.cost.to = 10;
            StoreService.filter.rating.from = 0;
            StoreService.filter.rating.to = 2;
            expect($filter('filter')(items, $scope.filter)).toEqual( [] );

            StoreService.filter.cost.from = 0;
            StoreService.filter.cost.to = 10;
            StoreService.filter.rating.from = 0;
            StoreService.filter.rating.to = 10;
            StoreService.filter.lang = 'rus';
            expect($filter('filter')(items, $scope.filter)).toEqual( [items[0]] );

            StoreService.filter.lang = 'eng';
            expect($filter('filter')(items, $scope.filter)).toEqual( [items[1]] );

            StoreService.filter.lang = 'all';
            StoreService.filter.year.from = 1970;
            StoreService.filter.year.to = 2000;
            expect($filter('filter')(items, $scope.filter)).toEqual( items );

            StoreService.filter.year.from = 1983;
            StoreService.filter.year.to = 2000;
            expect($filter('filter')(items, $scope.filter)).toEqual( [items[1]] );

            StoreService.filter.year.from = 1980;
            StoreService.filter.year.to = 1985;
            expect($filter('filter')(items, $scope.filter)).toEqual( [items[0]] );
        });

        it('$watch should filter results', () => {
            StoreService.items = [
                { "id": 1, "title": "test1", "img": "img1", "rating": 1.7, "date": 400547931000, "cost": 1.7, "lang": "rus"},
                { "id": 2, "title": "test2", "img": "img2", "rating": 3.3, "date": 674775035000, "cost": 2.5, "lang": "eng"}
            ];

            $rootScope.$digest();

            expect($scope.itemsFiltered).toEqual( StoreService.items );

            StoreService.filter.year.from = 1980;
            StoreService.filter.year.to = 1985;

            $rootScope.$digest();

            expect($scope.itemsFiltered).toEqual( [StoreService.items[0]] );
        });
    });
    
    

	describe('StoreListDirective', () => {
        let ctrl, result, $scope, $rootScope, $filter, $stateParams, $controller, StoreService, $compile;

		beforeEach(() => {
            angular.mock.module("store");
            
            $stateParams = {page: 2};

			angular.mock.inject((_$compile_, _$controller_, _$filter_, _$rootScope_, _StoreService_) => {
				$compile = _$compile_;
                $filter = _$filter_;
                $rootScope = _$rootScope_;
                $scope = $rootScope.$new();
                $controller = _$controller_;
                StoreService = _StoreService_;
				ctrl = $controller('StoreListController', {$scope, StoreService, $stateParams, $filter});
			});
		});

		it('should contain no results', () => {
            let element = $compile("<store-list></store-list>")($scope);
            
			$rootScope.$digest();

            let firstElement = element.children().eq(0);
            let h4 = firstElement.children().eq(0)[0];

			expect(h4.tagName).toEqual('H4');
			expect(h4.textContent).toEqual('No results');
		});
	});
});