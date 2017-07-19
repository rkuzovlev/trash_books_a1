/* @ngInject */
export default function($stateProvider, $locationProvider) {
    var homeState = {
        name: 'home',
        url: '/',
        template: '<store-list-page></store-list-page>'
    }

    var homeWithPageState = {
        name: 'homeWithPage',
        url: '/page/:page',
        template: '<store-list-page></store-list-page>'
    }

    var aboutState = {
        name: 'about',
        url: '/about',
        template: '<h3>About TrashBooks!</h3>'
    }

    var cartState = {
        name: 'cart',
        url: '/cart',
        template: '<store-cart></store-cart>'
    }

    $stateProvider.state(homeState);
    $stateProvider.state(homeWithPageState);
    $stateProvider.state(aboutState);
    $stateProvider.state(cartState);

    $locationProvider.html5Mode(true);
}