import angular from 'angular';

import Searchbox from './searchbox/searchbox';

const module = angular.module('components.module', [])
	.component('searchbox', Searchbox)
	.name;

export default module;
