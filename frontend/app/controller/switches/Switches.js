Ext.define('PowerMon.controller.switches.Switches', {
    extend: 'Ext.app.Controller',
    requires: ['PowerMon.view.switches.View'],
    stores: ['Switches', 'Emails', 'Phones'],
    views: ['switches.View', 'switches.List', 'switches.Edit'],

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

                        var form = self.view.up('#card-switch').down('swlistedit').getForm();
                        form.reset();

                        var rec = self.store.getById(selected[0].getId());
                        //form.loadRecord(selected[0]);
                        for (var key in rec.raw) {
                            var field = form.findField(key);
                            if (field != null) {
                                field.setValue(rec.raw[key]);
                            }
                        }//*/
                    }

                },
                render: function (self) {
                    self.view.up('#maincard').down('#swlistedit').toggleEditState(false);
                }
            },
            'swlist #del_sw': {
                click: function (self) {
                    var id = self.up('#maincard').down('swlistedit')
                        .getForm().findField('id').getValue();
                    Ext.MessageBox
                        .show({
                            title: 'Предупреждение',
                            msg: 'Вы точно желаете удалить выбранный свитч?',
                            buttons: Ext.MessageBox.YESNO,
                            icon: Ext.MessageBox.QUESTION,
                            fn: function (buttonId, text, opt) {
                                if (buttonId == 'yes') {
                                    self.up('#maincard').down('swlist').getView().getSelectionModel().deselectAll();
                                    self.up('#maincard').down('swlistedit').getForm().reset();
                                    exPmon.del_sw(
                                        id,
                                        function (ret) {
                                            if (ret.status == false) {
                                                Ext.MessageBox.show({
                                                    title: 'Ошибка',
                                                    msg: 'Во время удаления возникла ошибка.<br/>'
                                                    + ret['msg'],
                                                    buttons: Ext.MessageBox.OK,
                                                    icon: Ext.MessageBox.WARNING
                                                });
                                            } else {
                                                Ext.getStore('Switches').reload();
                                            }
                                        });
                                }
                            }
                        });
                }
            },
            'swlist #add_sw': {
                click: function (self) {
                    var edit = self.up('#maincard').down('#swlistedit');
                    var form = edit.getForm();
                    form.reset();
                    edit.toggleEditState(true);
                }
            },
            'swlist #edit_sw': {
                click: function (self) {
                    var list = self.up('#maincard').down('swlist');
                    //console.log(list.getView().getSelectionModel(),list.getView().getSelectionModel().getSelection());
                    list.fireEvent(
                        'selectionchange',
                        list.getView().getSelectionModel(),
                        list.getView().getSelectionModel().getSelection()
                    );
                    var edit = self.up('#maincard').down('swlistedit');
                    edit.toggleEditState(true);
                }
            }
        });
    }
});
