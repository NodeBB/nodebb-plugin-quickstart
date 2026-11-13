import { Request, Response } from 'express';

export function renderAdminPage(req: Request, res: Response/* , next */) {
	res.render('admin/plugins/quickstart', {
		title: 'Quick Start',
		ip: req.ip,
	});
};
