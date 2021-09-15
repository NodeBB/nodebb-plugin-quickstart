// running "npm test" from NodeBB root folder will run tests in this file
// to run only plugin tests, use "npx mocha test/plugins-installed.js"

'use strict';

/* globals describe, it */

const assert = require('assert');

const db = require.main.require('./test/mocks/databasemock');

describe('nodebb-plugin-quickstart', () => {
	it('should pass', (done) => {
		const actual = 'value';
		const expected = 'value';
		assert.strictEqual(actual, expected);
		done();
	});

	it('should load config object', async () => {
		const config = await db.getObject('config');
		assert(config);
	});
});
