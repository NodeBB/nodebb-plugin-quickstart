import * as controllers from './lib/controllers.js';
import { Router, RequestHandler, Request, Response } from 'express';

const nconf = nodebb.require<typeof import ('nconf')>('nconf');
const winston = nodebb.require<typeof import('winston')>('winston');
const meta = nodebb.require<SrcMeta>('./src/meta');

const routeHelpers: RouteHelpers = nodebb.require('./src/routes/helpers');

interface NbbMiddleware {
	ensureLoggedIn: RequestHandler,
}

interface AdminNavObject {
	route: string,
	icon: string,
	name: string,
}

interface RouteHelpers {
	setupPageRoute: {
		(router: Router, name: string, middlewares: RequestHandler[], controller: RequestHandler): void;
		(router: Router, name: string, controller: RequestHandler): void;
	},
	setupAdminPageRoute: {
		(router: Router, name: string, middlewares: RequestHandler[], controller: RequestHandler): void;
		(router: Router, name: string, controller: RequestHandler): void;
	},
	setupApiRoute: {
		(router: Router, verb: 'get', name: string, middlewares: RequestHandler[], controller: RequestHandler): void;
		(router: Router, verb: 'get', name: string, controller: RequestHandler): void;
	}
}

interface ControllerHelpers {
	formatApiResponse: <T>(statusCode: number, res: Response, payload?: T | Error | string) => Promise<void>;
}

interface SrcMeta {
	settings: {
		get: (hash: string) => Promise<Record<string, string>>
	}
}

export async function init(params: {
	router: Router,
}) {
	const { router /* , middleware , controllers */ } = params;

	// Settings saved in the plugin settings can be retrieved via settings methods
	const { setting1, setting2 } = await meta.settings.get('quickstart');
	if (setting1) {
		console.log(setting2);
	}

	/**
	 * We create two routes for every view. One API call, and the actual route itself.
	 * Use the `setupPageRoute` helper and NodeBB will take care of everything for you.
	 *
	 * Other helpers include `setupAdminPageRoute` and `setupAPIRoute`
	 * */
	routeHelpers.setupPageRoute(router, '/quickstart', [(req, res, next) => {
		winston.info(`[plugins/quickstart] In middleware. This argument can be either a single middleware or an array of middlewares`);
		setImmediate(() => next);
	}], (req, res) => {
		winston.info(`[plugins/quickstart] Navigated to ${nconf.get('relative_path')}/quickstart`);
		res.render('quickstart', { uid: req.uid });
	});

	routeHelpers.setupAdminPageRoute(router, '/admin/plugins/quickstart', controllers.renderAdminPage);
};

/**
 * If you wish to add routes to NodeBB's RESTful API, listen to the `static:api.routes` hook.
 * Define your routes similarly to above, and allow core to handle the response via the
 * built-in helpers.formatApiResponse() method.
 *
 * In this example route, the `ensureLoggedIn` middleware is added, which means a valid login
 * session or bearer token (which you can create via ACP > Settings > API Access) needs to be
 * passed in.
 *
 * To call this example route:
 *   curl -X GET \
 *     http://example.org/api/v3/plugins/quickstart/test \
 *     -H "Authorization: Bearer some_valid_bearer_token"
 *
 * Will yield the following response JSON:
 * {
 *  "status": {
 *    "code": "ok",
 *    "message": "OK"
 *  },
 *  "response": {
 *    "foobar": "test"
 *  }
 * }
 */
export async function addRoutes({ router, middleware, helpers }: {
	router: Router,
	middleware: NbbMiddleware,
	helpers: ControllerHelpers,
}) {
	const middlewares = [
		middleware.ensureLoggedIn, // use this if you want only registered users to call this route
		// middleware.admin.checkPrivileges, // use this to restrict the route to administrators
	];

	routeHelpers.setupApiRoute(router, 'get', '/quickstart/:param1', middlewares, (req: Request, res: Response) => {
		helpers.formatApiResponse(200, res, {
			foobar: req.params.param1,
		});
	});
};

export function addAdminNavigation(header: {
	plugins: AdminNavObject[],
	authentication: AdminNavObject[],
}) {
	header.plugins.push({
		route: '/plugins/quickstart',
		icon: 'fa-tint',
		name: 'Quickstart',
	});

	return header;
};