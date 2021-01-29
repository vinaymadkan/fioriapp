/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"GR/POST/FOR/PO/GR/POST/FOR/PO/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});