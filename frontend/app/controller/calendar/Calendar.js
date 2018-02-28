Ext.define('PowerMon.controller.calendar.Calendar', {
    extend: 'Ext.app.Controller',
    stores: ['Calendar'],
    views: ['calendar.Calendar'],

    init: function (appllication) {
        if (this.inited) {
            return;
        }
        this.inited = true;

        this.control({
            '#CalendarGrid': {
                edit: function (self, e, eOpts) {
                    if (e['originalValue'] != e['value']) {
                        self.cmp.down('#save').setDisabled(false);
                        self.cmp.down('#cancel_edit').setDisabled(false);

                    }
                },
                beforeedit: function (plugin, edit) {
                    return edit.record.get('editable');
                }
            },
            '#CalendarGrid #cancel_edit': {
                click: function (self) {
                    Ext.getStore('Calendar').rejectChanges();
                    self.setDisabled(true);
                    self.up().down('#save').setDisabled(true);
                }
            },
            '#CalendarGrid #refresh': {
                click: function (self) {
                    Ext.getStore('Calendar').reload();
                }
            },
            '#CalendarGrid #save': {
                click: function (self) {
                    var recs = Ext.getStore('Calendar').getModifiedRecords();
                    var data = [];
                    for (i in recs) {
                        data.push(recs[i]['data']);
                    }
                    exPmon.save_calendar(data, function (ret) {
                        if (ret['status'] == false) {
                            Ext.MessageBox
                                .show({
                                    title: 'Ошибка',
                                    msg: 'Во время сохранения возникла ошибка.<br/>'
                                    + ret['msg'],
                                    buttons: Ext.MessageBox.OK,
                                    icon: Ext.MessageBox.WARNING
                                });
                        } else if (ret['status'] == true) {
                            Ext.getStore('Calendar').commitChanges();
                            self.setDisabled(true);
                            self.up().down('#cancel_edit').setDisabled(true);
                        }

                    });
                    /*
                     * Ext.getStore('Calendar').reload();
                     * self.setDisabled(true);
                     * self.up().down('#save').setDisabled(true);
                     */
                }
            }
        });
    }
});
