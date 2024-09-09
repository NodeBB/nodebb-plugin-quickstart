export function renderAdminPage(req, res/* , next */) {
	res.render('admin/plugins/quickstart', {
		title: 'Quick Start',
	});
};
