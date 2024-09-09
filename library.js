import * as controllers from './lib/controllers.js';

const nconf = nodebb.require('nconf');
const winston = nodebb.require('winston');
const meta = nodebb.require('./src/meta');
const routeHelpers = nodebb.require('./src/routes/helpers');


export async function init(params) {
	const { router /* , middleware , controllers */ } = params;

	routeHelpers.setupAdminPageRoute(router, '/admin/plugins/quickstart', controllers.renderAdminPage);
};

export async function addRoutes({ router, middleware, helpers }) {
	const middlewares = [
		middleware.ensureLoggedIn,
		// middleware.admin.checkPrivileges,
	];

	routeHelpers.setupApiRoute(router, 'get', '/quickstart/:param1', middlewares, (req, res) => {
		helpers.formatApiResponse(200, res, {
			foobar: req.params.param1,
		});
	});
};

export function addAdminNavigation(header) {
	header.plugins.push({
		route: '/plugins/quickstart',
		icon: 'fa-tint',
		name: 'Quickstart',
	});

	return header;
};

