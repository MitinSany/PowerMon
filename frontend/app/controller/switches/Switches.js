Ext.define('PowerMon.controller.switches.Switches', {
    extend: 'Ext.app.Controller',
    requires: ['PowerMon.view.switches.View'],
    stores: ['Switches', 'Emails', 'Phones'],
    views: ['switches.View', 'switches.List'],

    refs: [{
        ref: 'switchesList',
        selector: 'swlist'
    }],

    init: function (appllication) {

        this.control({
            'swlist #refresh': {
                click: function (self) {
                    Ext.getStore('Switches').read();
                }
            },
            'swlist': {
                selectionchange: function (self, selected, eOpts) {
                    if (selected.length > 0) {
                        self.view.up('swlist').down('#del_sw').setDisabled(false);
                        self.view.up('swlist').down('#edit_sw').setDisabled(false);
                        this.fireEvent('loadrecord', selected[0]);
                    }
                }
            },
            'swlist #del_sw': {
                click: function (self) {
                    Ext.MessageBox.show({
                        title: 'Предупреждение',
                        msg: 'Вы точно желаете удалить выбранный свитч?',
                        buttons: Ext.MessageBox.YESNO,
                        icon: Ext.MessageBox.QUESTION,
                        fn: function (buttonId, text, opt) {
                            if (buttonId === 'yes') {
                                self.up('#maincard').down('swlistedit').getForm().reset();
                                var id = self.up('#maincard').down('swlistedit').getForm().findField('id').getValue();
                                var list = self.up('#maincard').down('swlist');
                                var selectedRecord = list.getView().getSelectionModel().getSelection()[0];
                                list.getView().getSelectionModel().deselectAll();
                                list.getStore().remove(selectedRecord);
                            }
                        }
                    });
                }
            },
            'swlist #add_sw': {
                click: function () {
                    this.fireEvent('editformreset');
                    this.fireEvent('loadrecord', Ext.create(this.getSwitchesList().getStore().model.modelName));
                    this.fireEvent('toggleeditstate', true);
                }
            },
            'swlist #edit_sw': {
                click: function () {
                    this.fireEvent('toggleeditstate', true);
                    var switchesList = this.getSwitchesList();
                    switchesList.fireEvent(
                        'selectionchange',
                        switchesList.getView().getSelectionModel(),
                        switchesList.getView().getSelectionModel().getSelection()
                    );
                }
            }
        });
    }
});
