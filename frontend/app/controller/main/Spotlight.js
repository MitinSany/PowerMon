Ext.define('PowerMon.controller.main.Spotlight', {
    extend: 'Ext.app.Controller',
    requires: ['Ext.ux.Spotlight'],
    views: ['switches.View', 'switches.Edit'],

    init: function (application) {
        this.control({
            '*': {
                spotlightshow: this.onSpotlightShow,
                spotlighthide: this.onSpotlightHide
            }
        });
        this.spotligth = Ext.create('Ext.ux.Spotlight', {animate: false});
    },

    onSpotlightShow: function (el, callback, scope) {
        this.spotligth.show(el, callback, scope);
        this.spotligth.active = true;
    },

    onSpotlightHide: function (callback, scope) {
        if (this.spotligth.active) {
            this.spotligth.hide(callback, scope);
            this.spotligth.active = false;
        }
    }
});


