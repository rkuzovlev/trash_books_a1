/* @ngInject */
export class StoreService {
	constructor($http){
        this.$http = $http;

        this.items = [];
        this.cartItems = Object.create(null);
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
    }

    remove(itemId){
        if (this.cartItems[itemId]){
            this.cartItems[itemId]--;
            if (this.cartItems[itemId] == 0){
                delete this.cartItems[itemId];
            }
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