'use strict';

var controllers = require('./lib/controllers');

var plugin = {};

plugin.init = function (params, callback) {
	var router = params.router;
	var hostMiddleware = params.middleware;
	var hostControllers = params.controllers;

	router.get('/admin/plugins/quickstart', hostMiddleware.admin.buildHeader, controllers.renderAdminPage);
	router.get('/api/admin/plugins/quickstart', controllers.renderAdminPage);

	callback();
};

plugin.addAdminNavigation = function (header, callback) {
	header.plugins.push({
		route: '/plugins/quickstart',
		icon: 'fa-tint',
		name: 'Quickstart',
	});

	callback(null, header);
};

module.exports = plugin;
