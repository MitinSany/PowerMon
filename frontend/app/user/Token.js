Ext.define('PowerMon.user.Token', {

    mixins: {
        observable: 'Ext.util.Observable'
    },

    storageKey: 'user-token',

    saveToken: function (token) {
        localStorage.setItem(this.storageKey, token);
        this.fireEvent('tokenmodified');
    },

    getToken: function() {
        return localStorage.getItem(this.storageKey);
    },

    clearToken: function () {
        localStorage.removeItem(this.storageKey);
        Ext.Ajax.defaultHeaders = {};
    },

    setTokenHeader: function (token) {
        Ext.Ajax.defaultHeaders = {
            'Authorization': 'Bearer ' + token,
            'Accept': 'application/json'
        };
    },

    cleanTokenHeader: function () {
        Ext.Ajax.defaultHeaders = {};
    }
});