class SearchboxController {

  /*@ngInject*/
  constructor(ItemsService) {

    this.query = '';
    this.itemsService = ItemsService;

  }

  searchSwapi() {
    this.itemsService
    .getItems(this.query)
  }
}

const Searchbox = {
  template: require('./searchbox.html'),
  controller: SearchboxController
};

export default Searchbox;
