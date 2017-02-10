class ItemsService {
	/*@ngInject*/
	constructor($http, $q) {
		this.$http = $http;
		this.$q = $q;
		this.searchResults = [];
	}

	getItems(query, type) {
		console.log(query, type)
		this.searchResults.length = 0
		Array.prototype.push.apply(this.searchResults, [{name: "Loading"}])
		this.$http.get(`https://swapi.co/api/${type}/?search=${query}`)
		.then((results) => {
			const data = results.data.results;
			this.searchResults.length = 0
			Array.prototype.push.apply(this.searchResults, data)
			// _.assign(this.searchResults, data);
		})
		// return this.$q.resolve([
		// 		{ id: 1, title: 'Sports', img: 'http://lorempixel.com/300/300/sports'},
		// 		{ id: 31, title: 'Cute little kitties!', img: 'http://lorempixel.com/300/300/cats'},
		// 		{ id: 15, title: 'Serious business', img: 'http://lorempixel.com/300/300/business'},
		// 		{ id: 125, title: 'The team', img: 'http://lorempixel.com/300/300/people'}
		// 	]);
	}
}

export default ItemsService;
