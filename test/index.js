// running "npm test" will run tests in this file
// to run only plugin tests use "mocha test/plugins-installed.js"
'use strict';

const assert = require('assert');

const db = require.main.require('./test/mocks/databasemock');

describe('nodebb-plugin-quickstart', function () {
	it('should pass', function (done) {
		const actual = 'value';
		const expected = 'value';
		assert.strictEqual(actual, expected);
		done();
	});

	it('should load config object', async function () {
		const config = await db.getObject('config');
		assert(config);
	});
});
