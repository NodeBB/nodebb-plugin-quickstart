'use strict';

/* globals define, ajaxify */

define('forum/quickstart', function () {
	var quickstart = {};

	quickstart.init = function () {
		/*
			every module that represents a nodebb page must export a "init" function
			this function gets called when a user navigates to this page
		*/
		console.log('You have navigated to ' + ajaxify.data.url, 'Rendered template is ' + ajaxify.data.template.name);
	};

	return quickstart;
});
