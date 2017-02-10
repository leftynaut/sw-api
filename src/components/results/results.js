class ResultsController {

  /*@ngInject*/
  constructor(ItemsService) {
    this.dataOutput = ItemsService.searchResults;

  }

  testTheThing(){
    console.log(this.dataOutput)
  }

}

const Results = {
  template: require('./results.html'),
  controller: ResultsController,
  bindings: { results: '<' }
};

export default Results;
