Ext.define('PowerMon.user.Profile', {

    storageKey: 'user-profile',

    config: {
        name: '',
        comment: '',
        roles: []
    },

    constructor: function (config) {
        config = config ? config : this.load();
        this.initConfig(config);
        this.callParent(arguments);
    },

    isUserInRole: function (roles) {
        for (var i = 0; i < roles.length; i++) {
            if (Ext.Array.contains(this.getRoles(), roles[i])) {
                return true
            }
        }
        return false;
    },

    getData: function () {
        return Ext.encode({
            name: this.name,
            comment: this.comment,
            roles: this.roles
        })
    },

    save: function () {
        localStorage.setItem(this.storageKey, this.getData());
    },

    load: function () {
        var data = localStorage.getItem(this.storageKey);
        this.initConfig(data);
    }

});