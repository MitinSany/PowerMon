Ext.define('PowerMon.util.Utilities', {
    singleton: true,
    ucFirst: function (value) {
        var f = value.charAt(0).toUpperCase();
        return f + value.substr(1, value.length - 1);
    },

    trim: function (value) {
        return String(value).replace(/^\s+|\s+$/gm, '');
    }
});