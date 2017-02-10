class ResultsController {

  /*@ngInject*/
  constructor(ItemsService) {
    this.dataOutput = ItemsService.searchResults;

  }

}

const Results = {
  template: require('./results.html'),
  controller: ResultsController,
  bindings: { results: '<' }
};

export default Results;
