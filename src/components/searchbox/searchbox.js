class SearchboxController {

  /*@ngInject*/
  constructor() {

    this.brand = 'Synopsis';

    this.items = [{
      href: '#',
      label: 'Home',
      isActive: true
    }, {
      href: '#',
      label: 'About',
      isActive: false
    }, {
      href: '#',
      label: 'Contact',
      isActive: false
    }];

  }

  onItemClicked(clickedItem) {
    this.items = this.items.map((item) => {
      item.isActive = item.label === clickedItem.label;
      return item;
    });
  }
}

const Searchbox = {
  template: require('./searchbox.html'),
  controller: SearchboxController
};

export default Searchbox;
