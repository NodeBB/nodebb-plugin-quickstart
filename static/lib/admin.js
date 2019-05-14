'use strict';

/* globals $, app, socket, define */

define('admin/plugins/quickstart', ['settings', 'admin/modules/colorpicker'], function (settings, colorpicker) {
	var ACP = {};

	ACP.init = function () {
		setupColorInputs();
		settings.load('quickstart', $('.quickstart-settings'));
		$('#save').on('click', saveSettings);
	};

	function saveSettings() {
		settings.save('quickstart', $('.quickstart-settings'), function () {
			app.alert({
				type: 'success',
				alert_id: 'quickstart-saved',
				title: 'Settings Saved',
				message: 'Please reload your NodeBB to apply these settings',
				clickfn: function () {
					socket.emit('admin.reload');
				},
			});
		});
	}

	function setupColorInputs() {
		var colorInputs = $('[data-settings="colorpicker"]');
		colorpicker.enable(colorInputs, updateColors);
		colorInputs.on('change', updateColors);
		updateColors();
	}

	function updateColors() {
		$('#preview').css({
			color: $('#color').val(),
			'background-color': $('#bgColor').val(),
		});
	}

	return ACP;
});
