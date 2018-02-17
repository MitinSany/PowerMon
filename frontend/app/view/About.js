Ext.define('PowerMon.view.About', {
    extend: 'Ext.window.Window',
    alias: 'widget.about',
    autoRender: true,
    modal: true,
    width: 340,
    height: 190,
    title: 'О системе...',
    bodyStyle: 'background-color:white;',
    resizable: false,
    buttons: [{
        text: 'OK',
        handler: function () {
            this.up('about').close();
        }
    }],

    html: '<div style="padding: 10px;"><div style="font-size: 18px;" align="center">PowerMON</div><hr/>Система мониторинга питания на техплощадках.<br /><br />Разработчик: Митин Александр<br />Почта: <a href="mailto:vsms@ukr.net">vsms@ukr.net</a></div>'

});