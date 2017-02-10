class HomeController {
	/*@ngInject*/
	constructor() {
	}

	// $onInit() {
	// 	this.itemsService
	// 		.getItems()
	// 		.then((items) => this.items = items);
	// }
}

const homeComponent = {
	template: require('./home.html'),
	controller: HomeController
};

export default homeComponent;
