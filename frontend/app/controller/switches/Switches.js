Ext.define('PowerMon.controller.switches.Switches', {
    extend: 'Ext.app.Controller',
    requires: ['PowerMon.view.switches.View'],
    stores: ['Switches', 'Emails', 'Phones'],
    views: ['switches.View', 'switches.List'],

    refs: [{
        ref: 'switchesList',
        selector: '#switchesList'
    }],

    init: function (appllication) {
        var me = this;
        this.listen({
            component: {
                '*': {
                    actionLog: me.switchesListActionLog
                }
            }
            /*controller: {
                '*': {
                    selectrecord: function (record) {
                        var view = Ext.getCmp('swlist').getView();
                        view.getSelectionModel().select(record);
                    }

                }
            }*/
        });

        me.control({
            '#switchesList #refreshSwitch': {
                click: me.switchesListRefreshClick
            },
            '#switchesList': {
                selectionchange: me.switchesListselectionChange
            },
            '#switchesList #deleteSwitch': {
                click: me.switchesListDeleteClick
            },
            '#switchesList #addSwitch': {
                click: me.switchesListAddClick
            },
            '#switchesList #editSwitch': {
                click: me.switchesListEditClick
            },
            '#switchesList gridview': {
                //refresh: this.switchesListRefreshSelection

            },
        });
    },

    switchesListRefreshSelection: function () {
        var view = this.down('swlist');
        console.log(view);
        if (this.selectedId !== undefined) {
            record = this.getStore().getById(this.selectedId);
            if (record) {
                this.getSelectionModel().select(record);
            }

            //this.fireEvent('loadrecord', record);
        }

        this.getView().restoreScrollState();
    },

    switchesListselectionChange: function (self, selected, eOpts) {
        var me = this;
        if (selected.length > 0) {
            me.getSwitchesList().down('#deleteSwitch').setDisabled(false);
            self.view.up('swlist').down('#editSwitch').setDisabled(false);
            me.fireEvent('loadrecord', selected[0]);
        }
    },


    switchesListAddClick: function (self, e, eOpts) {
        var me = this;
        me.fireEvent('editformreset');
        me.fireEvent('loadrecord', Ext.create(me.getSwitchesList().getStore().model.modelName));
        me.fireEvent('toggleeditstate', true);
    },


    switchesListEditClick: function (self, e, eOpts) {
        var me = this;
        me.fireEvent('toggleeditstate', true);
        /*var switchesList = this.getSwitchesList();
        switchesList.fireEvent(
            'selectionchange',
            switchesList.getView().getSelectionModel(),
            switchesList.getView().getSelectionModel().getSelection()
        );*/
    },


    switchesListRefreshClick: function (self, e, eOpts) {
        Ext.getStore('Switches').read();
    },

    switchesListDeleteClick: function (self, e, eOpts) {
        var me = this;
        Ext.MessageBox.show({
            title: 'Предупреждение',
            msg: 'Вы точно желаете удалить выбранный свитч?',
            buttons: Ext.MessageBox.YESNO,
            icon: Ext.MessageBox.WARNING,
            fn: function (buttonId, text, opt) {
                if (buttonId === 'yes') {
                   me.fireEvent('editformreset');
                    var list = me.getSwitchesList(),
                        view = list.getView(),
                        store = list.getStore(),
                    selectedRecord = view.getSelectionModel().getSelection()[0];
                    store.remove(selectedRecord);
                }
            }
        });
    },

    switchesListActionLog : function(view, rowIndex, colIndex, item, e, record, row) {
        var id = grid.store.getAt(rowIndex).get('id');
        grid.up('mainview').down('#swid').setValue(id);
        grid.up('mainview').down('toolbar').down('#log').toggle();
        grid.up('mainview').down('#maincard').getLayout().setActiveItem(2);
    }
});
