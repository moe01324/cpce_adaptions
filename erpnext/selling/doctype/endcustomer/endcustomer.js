// Copyright (c) 2015, Frappe Technologies Pvt. Ltd. and Contributors
// License: GNU General Public License v3. See license.txt

frappe.ui.form.on("EndCustomer", {
	setup: function (frm) {
		
	},
	refresh: function (frm) {
		frappe.dynamic_link = { doc: frm.doc, fieldname: 'name', doctype: 'EndCustomer' }

		if (frappe.defaults.get_default("supp_master_name") != "Naming Series") {
			frm.toggle_display("naming_series", false);
		} else {
			erpnext.toggle_naming_series();
		}

		if (frm.doc.__islocal) {
			hide_field(['address_html','contact_html']);
			frappe.contacts.clear_address_and_contact(frm);
		}
		else {
			unhide_field(['address_html','contact_html']);
			frappe.contacts.render_address_and_contact(frm);
		}
	},

});
