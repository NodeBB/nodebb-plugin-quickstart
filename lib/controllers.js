'use strict';

const Controllers = module.exports;

Controllers.renderForumPage = function (req, res) {
	// client side templates should be in `forum/plugins`
	res.render('forum/plugins/quickstart', { data: 1 });
};

Controllers.renderAdminPage = function (req, res) {
	// admin templates should be in `admin/plugins`
	res.render('admin/plugins/quickstart', {});
};
