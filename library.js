'use strict';

const controllers = require('./lib/controllers');
const helpers = require.main.require('./src/routes/helpers');
const plugin = module.exports;

plugin.init = async function (params) {
	const router = params.router;
	const hostMiddleware = params.middleware;
	// Use helpers from core nodebb to create two routes

	// public route
	helpers.setupPageRoute(router, '/quickstart', hostMiddleware, [] /* your custom middlewares */, controllers.renderForumPage);

	// admin route
	helpers.setupAdminPageRoute(router, '/admin/plugins/quickstart', hostMiddleware, [] /* your custom middlewares */, controllers.renderAdminPage);
};

plugin.addAdminNavigation = function (header, callback) {
	header.plugins.push({
		route: '/plugins/quickstart',
		icon: 'fa-tint',
		name: 'Quickstart',
	});

	callback(null, header);
};
