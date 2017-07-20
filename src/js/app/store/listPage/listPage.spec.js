describe('StorelistPage', () => {

	describe('StoreListPageController', () => {
        let ctrl, result;
        let $scope = {};
        let $state = {
            go: function(page, opt){
                result = {page, opt};
            }
        };

		beforeEach(() => {
			angular.mock.module("store");

			angular.mock.inject(($controller) => {
				ctrl = $controller('StoreListPageController', {$scope, $state});
			});
		});

        it('$scope.onPageChange should redirect to homeWithPage route', () => {
            $scope.onPageChange(5);
            expect(result.page).toBe('homeWithPage');
            expect(result.opt.page).toBe(5);
		});
	});
});