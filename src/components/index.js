import angular from 'angular';

import Searchbox from './searchbox/searchbox';
import Results from './results/results';

const module = angular.module('components.module', [])
	.component('searchbox', Searchbox)
	.component('results', Results)
	.name;

export default module;
