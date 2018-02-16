Ext.define('PowerMon.controller.SwList', {
    extend: 'Ext.app.Controller',
    stores: [
        'SwListStore', 'Emails', 'Phones'
    ],
    views1: [
        'SwList', 'SwListEdit'
    ],

    init: function (appllication) {
        if (this.inited) {
            return;
        }
        this.inited = true;

        this
            .control({
                'swlist #refresh': {
                    click: function (self) {
                        Ext.getStore('SwListStore').read();
                    }
                },
                'swlist': {
                    selectionchange: function (self, selected, eOpts) {
                        if (selected.length > 0) {
                            self.view.up('swlist').down('#del_sw').setDisabled(
                                false);
                            self.view.up('swlist').down('#edit_sw').setDisabled(
                                false);

                            var form = self.view.up('#card-sw').down('swlistedit')
                                .getForm();
                            form.reset();

                            var rec = self.store.getById(selected[0].getId());
                            for (var key in rec.raw) {
                                var field = form.findField(key);
                                if (field != null) {
                                    field.setValue(rec.raw[key]);
                                }
                            }
                        }

                    },
                    render: function (self) {
                        self.view.up('#maincard').down('#swlistedit')
                            .toggleEditState(false);
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
                                        self.up('#maincard').down('swlist').getView()
                                            .getSelectionModel().deselectAll();
                                        self.up('#maincard').down('swlistedit')
                                            .getForm().reset();
                                        exPmon
                                            .del_sw(
                                                id,
                                                function (ret) {
                                                    if (ret['status'] == false) {
                                                        Ext.MessageBox
                                                            .show({
                                                                title: 'Ошибка',
                                                                msg: 'Во время удаления возникла ошибка.<br/>'
                                                                + ret['msg'],
                                                                buttons: Ext.MessageBox.OK,
                                                                icon: Ext.MessageBox.WARNING
                                                            });
                                                    } else {
                                                        Ext.getStore('SwListStore')
                                                            .reload();
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
                        list.fireEvent('selectionchange', list.getView()
                            .getSelectionModel(), list.getView()
                            .getSelectionModel().getSelection());
                        var edit = self.up('#maincard').down('swlistedit');
                        edit.toggleEditState(true);
                    }
                },
                'swlistedit #edit_cancel': {
                    click: function (self) {
                        self.up('#maincard').down('swlist').fireEvent(
                            'selectionchange',
                            self.up('#maincard').down('swlist').getView()
                                .getSelectionModel(),
                            self.up('#maincard').down('swlist').getView()
                                .getSelectionModel().getSelection());
                        var edit = self.up('#swlistedit');
                        edit.toggleEditState(false);
                    }
                },
                'swlistedit #edit_save': {
                    click: function (self) {
                        var edit = self.up('#swlistedit');
                        edit.toggleEditState(false);

                        var rec = edit.getForm().getFieldValues()
                        exPmon.save_sw(rec, function (ret) {
                            if (ret['status'] == false) {
                                Ext.MessageBox.show({
                                    title: 'Ошибка',
                                    msg: 'Во время сохранения возникла ошибка.<br/>'
                                    + ret['msg'],
                                    buttons: Ext.MessageBox.OK,
                                    icon: Ext.MessageBox.WARNING
                                });
                            } else {
                                Ext.getStore('SwListStore').reload({
                                    callback: function () {
                                        /*var list=Ext.getCmp('swlist');
                                        list.fireEvent(
                                            'selectionchange',
                                            list.getView().getSelectionModel(),
                                            list.getView().getSelectionModel().getSelection());   //*/
                                    }
                                });
                            }

                        });
                    }
                },
                'swlistedit #check_snmp': {
                    click: function (self) {
                        var btn = self.up('#maincard').down('#check_snmp')
                        btn.setDisabled(true);
                        btn.setIcon('res/loading.gif');
                        var form = self.up('#maincard').down('swlistedit')
                            .getForm();
                        var data = {};
                        data['ip'] = form.findField('ip').getValue();
                        data['community'] = form.findField('community')
                            .getValue();
                        data['oid'] = form.findField('oid').getValue();
                        exPmon
                            .check_snmp(
                                data,
                                function (ret) {
                                    if (ret['status'] !== true) {
                                        var text = 'Во время выполнения возникла ошибка возникла ошибка.<br/>'
                                            + ret['msg']
                                        var title = 'Ошибка'
                                        var icon = Ext.MessageBox.WARNING
                                    } else {
                                        var icon = Ext.MessageBox.INFO
                                        var title = 'Выполнено'
                                        switch (ret['result']) {
                                            case 0: {
                                                var icon = Ext.MessageBox.WARNING
                                                var text = 'Не удалось установить связь со свитчем с заданными параметрами'
                                                break
                                            }
                                            case -1: {
                                                var icon = Ext.MessageBox.WARNING
                                                var text = 'Связь со свитчем есть, но не удалось определить состояние порта. Обратитесь к разработчику. Ответ свитча:<br>'
                                                    + ret['msg']
                                                break
                                            }
                                            case 1: {
                                                var text = 'Связь со свитчем есть и состояние порта "ВКЛЮЧЕН"'
                                                break
                                            }
                                            case 2: {
                                                var text = 'Связь со свитчем есть и состояние порта "ВЫКЛЮЧЕН"'
                                                break
                                            }
                                        }
                                    }
                                    btn.setDisabled(false);
                                    btn.setIcon('');
                                    Ext.MessageBox.show({
                                        title: title,
                                        msg: text,
                                        buttons: Ext.MessageBox.OK,
                                        icon: icon
                                    });
                                });
                    }
                },
                'swlistedit #check_snmpwalk': {
                    click: function (self) {
                        var btn = self.up('#maincard').down('#check_snmpwalk')
                        btn.setDisabled(true);
                        btn.setIcon('res/loading.gif');
                        var form = self.up('#maincard').down('swlistedit')
                            .getForm();
                        var data = {};
                        data['ip'] = form.findField('ip').getValue();
                        data['community'] = form.findField('community')
                            .getValue();
                        data['oid'] = form.findField('oid').getValue();
                        exPmon
                            .check_snmpwalk(
                                data,
                                function (ret) {
                                    if (ret['status'] == true) {
                                        var text = ret['msg']
                                        var title = 'Выполнено'
                                        //var icon = Ext.MessageBox.INFO
                                    } else {
                                        var icon = Ext.MessageBox.WARNING
                                        var title = 'Ошибка'
                                        var text = 'Не удалось установить связь со свитчем с заданными параметрами'

                                    }
                                    btn.setDisabled(false);
                                    btn.setIcon('');
                                    Ext.MessageBox.show({
                                        expandOnShow: true,
                                        title: title,
                                        msg: text,
                                        buttons: Ext.MessageBox.OK,
                                        icon: icon
                                    });
                                });
                    }
                }

            });
    }
});
