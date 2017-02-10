class ResultsController {

  /*@ngInject*/
  constructor(ItemsService) {

    this.dataOutput = ItemsService.searchResults;
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

  // onItemClicked(clickedItem) {
  //   this.items = this.items.map((item) => {
  //     item.isActive = item.label === clickedItem.label;
  //     return item;
  //   });
  // }
}

const Results = {
  template: require('./results.html'),
  controller: ResultsController
};

export default Results;
