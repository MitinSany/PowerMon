Ext.define('PowerMon.controller.main.Main', {
    extend: 'Ext.app.Controller',
    requires: ['PowerMon.user.Profile', 'PowerMon.view.main.Toolbar', 'Ext.ux.Spotlight'],
    views: ['main.View'],
    stores: ['TablesRevisions', 'Phones', 'Emails'],

    POLL_INTERVAL: 60 * 1000,
    syncStoresData: {},

    init: function (application) {
        this.listen({
            controller: {
                '*': {
                    createmainwindow: this.createMainWindow,
                    destroymainwindow: this.destroyMainWindow,
                    syncstores: this.syncStores

                }
            }
        });
        this.spot = Ext.create('Ext.ux.Spotlight');
        this.poller = Ext.create('Ext.util.DelayedTask', this.updateStats, this);
    },

    getStoredItem: function (name) {
        return this.syncStoresData[name];
    },

    setStoredItem: function (name, value) {
        return this.syncStoresData[name] = value;
    },

    createMainWindow: function () {
        this.mainview = Ext.widget('mainview');
        this.startPoll(0);
    },

    destroyMainWindow: function () {
        this.stopPoll();
        this.mainview.destroy();
    },

    startPoll: function (seconds) {
        this.stopPoll();
        this.poller.delay(seconds * 1000);
    },

    stopPoll: function () {
        this.poller.cancel();
    },

    syncStoresCallcack: function (records, operation, success) {
        if (!!records) {
            var utils = PowerMon.util.Utilities;
            records.map(function (record) {
                var storeName = utils.ucFirst(record.get('table'));
                var revision = record.get('revision');

                if (this.getStoredItem(storeName) !== revision) {
                    Ext.getStore(storeName).load();
                    this.setStoredItem(storeName, revision);
                }
            }, this);
        }
    },

    syncStores: function () {
        var tablesRevisionsStore = Ext.getStore('TablesRevisions');
        tablesRevisionsStore.read({callback: this.syncStoresCallcack, scope: this});
    },

    updateStats: function () {
        this.syncStores();
        this.poller.delay(this.POLL_INTERVAL);
    }
});


