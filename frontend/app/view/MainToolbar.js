Ext.define("PowerMon.view.MainToolbar", {
	extend: 'Ext.toolbar.Toolbar',
	alias: 'widget.maintoolbar',
	requires: ['Ext.toolbar.TextItem'],
	
	initComponent: function() {

		var items = [{
			xtype: 'tbtext',
			text: 'Login and Roles-Based Security Simulator'
		}, {
			xtype: 'tbfill'
		}];

		if (PowerMon.User.isUserInRole(["admin"])) {
			items.push({
				xtype: 'button',
				text: 'For Admins'
			});
		}

		if (PowerMon.User.isUserInRole(["admin","users"])) {
			items.push({
				xtype: 'button',
				text: 'For Admins or Users'
			});
		}

		if (PowerMon.User.isUserInRole(["nobody"])) {
			items.push({
				xtype: 'button',
				text: 'For nobody'
			});
		}


		Ext.apply(this, {items: items});

		this.callParent(arguments);
	}
})