Ext.define('PowerMon.controller.switches.Edit', {
    extend: 'Ext.app.Controller',
    stores: ['Switches', 'Emails', 'Phones'],
    views: ['switches.Edit'],


    refs: [{
        ref: 'editForm',
        selector: 'swlistedit'
    }],

    init: function (appllication) {
        this.listen({
            controller: {
                '*': {
                    toggleeditstate: this.toggleEditState,
                    editformreset: this.editFormReset,
                    loadrecord: this.loadRecord
                }
            }
        });

        this.control({
            'swlistedit': {
                render: function () {
                    this.toggleEditState(false);
                }
            },
            'swlistedit #cancel': {
                click: function (self) {
                    self.up('#maincard').down('swlist').fireEvent(
                        'selectionchange',
                        self.up('#maincard').down('swlist').getView()
                            .getSelectionModel(),
                        self.up('#maincard').down('swlist').getView()
                            .getSelectionModel().getSelection());
                    var edit = self.up('#swlistedit');
                    this.toggleEditState(false);
                }
            },
            'swlistedit #save': {
                click: function (self) {
                    //var edit = self.up('#swlistedit');
                    this.toggleEditState(false);
                    this.saveRecord();
                    //this.getStore('Switches').sync();
                    /*Ext.Ajax.request({
                        url: '/switches/save',
                        method: 'POST',
                        params: values,
                        success: function (response) {
                            var data = Ext.decode(response.responseText);
                            if (data.status === true) {
                                Ext.getStore('Switches').reload({
                                    callback: function () {
                                        /*var list=Ext.getCmp('swlist');
                                        list.fireEvent(
                                            'selectionchange',
                                            list.getView().getSelectionModel(),
                                            list.getView().getSelectionModel().getSelection());   //*
                                    }
                                });
                            }
                        },
                        failure: function () {
                            Ext.MessageBox.show({
                                title: 'Ошибка',
                                msg: 'Во время сохранения возникла ошибка.<br/>'
                                + ret['msg'],
                                buttons: Ext.MessageBox.OK,
                                icon: Ext.MessageBox.WARNING
                            });
                        }
                    });//*/
                }
            },
            'swlistedit #check_snmp': {
                click: function (self) {
                    var btn = self.up('#maincard').down('#check_snmp')
                    btn.setDisabled(true);
                    btn.setIcon('res/loading.gif');
                    var form = self.up('#maincard').down('swlistedit').getForm();
                    var data = {};
                    data['ip'] = form.findField('ip').getValue();
                    data['community'] = form.findField('community')
                        .getValue();
                    data['oid'] = form.findField('oid').getValue();
                    exPmon.check_snmp(
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
                    var form = self.up('#maincard').down('swlistedit').getForm();
                    var data = {};
                    data['ip'] = form.findField('ip').getValue();
                    data['community'] = form.findField('community').getValue();
                    data['oid'] = form.findField('oid').getValue();
                    exPmon.check_snmpwalk(
                        data,
                        function (ret) {
                            if (ret.status == true) {
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
    },

    toggleEditState: function (enable) {

        var form = this.getEditForm();

        if (enable === true) {
            this.fireEvent('spotlightshow', form.id);
        } else {
            this.fireEvent('spotlighthide', form.id);
        }

        form.down('button#save').setDisabled(!form.getForm().isValid() || !enable);
        form.down('button#cancel').setDisabled(!enable);
        form.down('button#check_snmp').setDisabled(!enable);
        form.down('button#check_snmpwalk').setDisabled(!enable);
        form.cascade(function (item) {
            if (typeof item.setReadOnly === 'function') {
                item.setReadOnly(!enable);
            }
        });
    },

    editFormReset: function () {
        this.getEditForm().getForm().reset();
    },

    loadRecordArrayForm: function (recordRaw, key) {
        var editForm = this.getEditForm().getForm();
        var fullKey = key + 's';
        if (typeof recordRaw[fullKey] !== 'undefined' && recordRaw[fullKey].length > 0) {
            for (var i = 0; i < recordRaw[fullKey].length; i++) {
                editForm.findField(key + i).setValue(recordRaw[fullKey][i].id);
            }
        }
    },

    getRecordArrayForm: function (recordRaw, needKey) {
        var result = [];
        for (var key in recordRaw) {
            var value = recordRaw[key];
            if (value != '' && key.indexOf(needKey) === 0) {
                var resultKey = typeof value === 'string' ? needKey : 'id';
                var item = {};
                item[resultKey] = value;
                result.push(item);
            }
        }
        return result;
    },

    loadRecord: function (record) {
        var editForm = this.getEditForm().getForm();
        editForm.loadRecord(record);
        if (typeof record.raw !== 'undefined') {
            this.loadRecordArrayForm(record.raw, 'email');
            this.loadRecordArrayForm(record.raw, 'phone');
        }
    },

    saveRecord: function () {
        var editForm = this.getEditForm();
        var record = editForm.getRecord();
        var formData = editForm.getValues();
        formData.emails = this.getRecordArrayForm(formData, 'email');
        formData.phones = this.getRecordArrayForm(formData, 'phone');
        for (var key in formData) {
            record.set(key, formData[key]);
        }

        var store = Ext.getStore('Switches');
        if (record.stores.length === 0) {
            store.add(record);
        }
        store.sync();
    }
});

