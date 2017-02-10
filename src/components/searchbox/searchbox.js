class SearchboxController {

  /*@ngInject*/
  constructor(ItemsService) {

    this.query = '';
    this.itemsService = ItemsService;
    this.selectedType = 'people';

  }

  searchType(type) {
    this.selectedType = type;
  }

  searchSwapi() {
    this.itemsService
    .getItems(this.query, this.selectedType)
  }
}

const Searchbox = {
  template: require('./searchbox.html'),
  controller: SearchboxController
};

export default Searchbox;
