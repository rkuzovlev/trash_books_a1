// describe('BookStore', () => {

// 	describe('bookStoreController', () => {
// 		let ctrl;

// 		beforeEach(() => {
// 			angular.mock.module("bookStore");

// 			angular.mock.inject(($controller) => {
// 				ctrl = $controller('bookStoreController', {});
// 			});
// 		});

// 		it('should contain the starter url', () => {
// 			expect(ctrl.url).toBe('https://github.com/preboot/angular-webpack');
// 		});

// 		it('should contain test message', () => {
// 			expect(ctrl.test).toBe('Hello man!');
// 		});
// 	});

// 	describe('bookStoreDirective', () => {
// 		let $compile, $rootScope;

// 		beforeEach(() => {
// 			angular.mock.module("bookStore");

// 			angular.mock.inject((_$compile_, _$rootScope_) => {
// 				$compile = _$compile_;
//     			$rootScope = _$rootScope_;
// 			});
// 		});

// 		it('should contain main and footer', () => {
// 			let element = $compile("<book-store></book-store>")($rootScope);
// 			// fire all the watches, evaluate all expressions
// 			$rootScope.$digest();

// 			let mainElem = element.children().eq(0)
// 			let footerElem = element.children().eq(1)

// 			expect(mainElem[0].tagName).toEqual('MAIN');
// 			expect(footerElem[0].tagName).toEqual('FOOTER');
// 		});
// 	});
// });