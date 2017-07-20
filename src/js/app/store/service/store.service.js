export class StoreService {
    /* @ngInject */
	constructor($http, localStorageService){
        this.$http = $http;
        this.localStorageService = localStorageService;

        this.cartItems = Object.create(null);
        let cartItemsFromStorage = this.localStorageService.get('cartItems');
        if (cartItemsFromStorage != null){
            this.cartItems = Object.assign(this.cartItems, cartItemsFromStorage);
        }

        this.items = [];
        this.error = null;
        this.fetch();
        this.filter = {
            cost: {
                from: 0,
                to: 10
            },
            year: {
                from: 1970,
                to: 2000
            },
            rating: {
                from: 0,
                to: 5
            },
            lang: 'all'
        };
    }

    add(itemId){
        this.cartItems[itemId] = this.cartItems[itemId] || 0;
        this.cartItems[itemId]++;
        this.localStorageService.set('cartItems', this.cartItems);
    }

    remove(itemId){
        if (this.cartItems[itemId]){
            this.cartItems[itemId]--;
            if (this.cartItems[itemId] == 0){
                delete this.cartItems[itemId];
            }
            this.localStorageService.set('cartItems', this.cartItems);
        }
    }

    removeCartPosition(cartId){
        if (this.cartItems[cartId]){
            delete this.cartItems[cartId];
            this.localStorageService.set('cartItems', this.cartItems);
        }
    }

    getCount(itemId){
        return this.cartItems[itemId];
    }

    fetch(){
        return this.$http.get('/items.json')
            .then(response => response.data)
            .then((items) => { this.items.length = 0; this.items.push(...items); })
            .catch(e => this.itemsError = e);
    }
}