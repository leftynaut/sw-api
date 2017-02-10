class SearchboxController {

  /*@ngInject*/
  constructor(ItemsService) {

    this.query = '';
    this.itemsService = ItemsService;
    //
    // this.items = [{
    //   href: '#',
    //   label: 'Home',
    //   isActive: true
    // }, {
    //   href: '#',
    //   label: 'About',
    //   isActive: false
    // }, {
    //   href: '#',
    //   label: 'Contact',
    //   isActive: false
    // }];

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
