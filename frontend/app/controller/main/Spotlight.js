Ext.define('PowerMon.controller.main.Spotlight', {
    extend: 'Ext.app.Controller',
    requires: ['Ext.ux.Spotlight'],

    init: function () {
        this.listen({
            // We are using Controller event domain here
            controller: {
                // This selector matches any originating Controller
                '*': {
                    spotlightshow: this.onSpotlightShow,
                    spotlighthide: this.onSpotlightHide
                }
            }
        });
        this.spotlight = Ext.create('Ext.ux.Spotlight', {animate: false});
    },

    onSpotlightShow: function (el, callback, scope) {
        this.spotlight.show(el, callback, scope);
        this.spotlight.active = true;
    },

    onSpotlightHide: function (callback, scope) {
        if (this.spotlight.active) {
            this.spotlight.hide(callback, scope);
            this.spotlight.active = false;
        }
    }
});


