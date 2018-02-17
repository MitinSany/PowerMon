Ext.define('PowerMon.view.SwListEdit', {
    extend: 'Ext.form.Panel',
    requires: [
        'Ext.ux.Spotlight',
        'Ext.tab.Panel',
        'Ext.form.field.Hidden',
        'Ext.form.field.Number',
        'Ext.form.field.Checkbox',
        'Ext.form.FieldContainer',
        'Ext.form.field.ComboBox'
    ],
    alias: 'widget.swlistedit',
    itemId: 'swlistedit',
    title: 'Настройка свитча',
    //spot: Ext.create('Ext.ux.Spotlight'),
    tbar: [
        {
            text: 'Сохранить',
            itemId: 'edit_save',
            iconCls: 'save',
            disabled: true
        }, {
            text: 'Отменить',
            itemId: 'edit_cancel',
            iconCls: 'cancel',
            disabled: true
        }
    ],
    defaults: {
        labelWidth: 100,
        anchor: '100%',
        labelAlign: 'right'
        // readOnly : true
    },
    items: {
        border: false,
        xtype: 'tabpanel',
        activeTab: 0,
        defaults: {
            bodyStyle: 'padding:10px',
            border: false

        },
        items: [
            {
                title: 'Общие',
                defaultType: 'textfield',
                layout: 'anchor',
                defaults: {
                    anchor: '100%',
                    hideEmptyLabel: false
                },
                items: [
                    {
                        xtype: 'hiddenfield',
                        name: 'id'
                    }, {
                        fieldLabel: 'Имя тп.',
                        name: 'tp',
                        allowBlank: true,
                        width: 360,
                        labelWidth: 80,
                        labelAlign: 'right'
                    }, {
                        fieldLabel: 'Имя свитча',
                        name: 'sw',
                        width: 360,
                        labelWidth: 80,
                        labelAlign: 'right'
                    }, {
                        fieldLabel: 'Порт',
                        xtype: 'numberfield',
                        name: 'port',
                        value: 0,
                        minValue: 0,
                        maxValue: 48,
                        width: 360,
                        labelWidth: 80,
                        labelAlign: 'right'
                    }, {
                        fieldLabel: 'MRTG',
                        name: 'mrtg',
                        xtype: 'textfield',
                        width: 360,
                        labelWidth: 80,
                        labelAlign: 'right'
                    }, {
                        fieldLabel: 'Коммент',
                        name: 'comment',
                        xtype: 'textareafield',
                        width: 360,
                        height: 56,
                        labelWidth: 80,
                        labelAlign: 'right'
                    }
                ]
            }, {
                title: 'Действия',
                layout: 'anchor',
                defaults: {
                    anchor: '100%',
                    hideEmptyLabel: false
                },
                items: [
                    {
                        xtype: 'checkboxfield',
                        name: 'active',
                        fieldLabel: '&nbsp;',
                        labelSeparator: '',
                        boxLabel: 'Опрашивать по SNMP',
                        width: 360,
                        labelWidth: 80,
                        labelAlign: 'right'
                    }, {
                        xtype: 'checkboxfield',
                        name: 'esend',
                        fieldLabel: '&nbsp;',
                        labelSeparator: '',
                        boxLabel: 'Отправлять Email сообщения',
                        width: 360,
                        labelWidth: 80,
                        labelAlign: 'right'
                    }, {
                        xtype: 'checkboxfield',
                        name: 'ssend',
                        fieldLabel: '&nbsp;',
                        labelSeparator: '',
                        boxLabel: 'Отправлять SMS сообщения',
                        width: 360,
                        labelWidth: 80,
                        labelAlign: 'right'
                    }, {
                        xtype: 'checkboxfield',
                        name: 'c1',
                        fieldLabel: '&nbsp;',
                        labelSeparator: '',
                        boxLabel: ' SMS в нерабочее время',
                        width: 360,
                        labelWidth: 80,
                        labelAlign: 'right'
                    }
                ]

            }, {
                title: 'SNMP',
                defaultType: 'textfield',
                layout: 'anchor',
                defaults: {
                    anchor: '100%',
                    hideEmptyLabel: false
                },
                items: [
                    {
                        fieldLabel: 'IP',
                        name: 'ip',
                        width: 360,
                        labelWidth: 80,
                        labelAlign: 'right'
                    }, {
                        fieldLabel: 'Community',
                        name: 'community',
                        width: 360,
                        labelWidth: 80,
                        labelAlign: 'right'
                    }, {
                        fieldLabel: 'OID',
                        name: 'oid',
                        width: 360,
                        labelWidth: 80,
                        labelAlign: 'right'

                    }, {
                        xtype: 'fieldcontainer',
                        layout: 'hbox',
                        labelWidth: 0,
                        items: [
                            {
                                xtype: 'button',
                                text: 'Смотреть список OID',
                                itemId: 'check_snmpwalk',
                                flex: 1,
                                disabled: true

                            }, {
                                xtype: 'button',
                                text: 'Тест SNMP',
                                itemId: 'check_snmp',
                                flex: 1,
                                disabled: true

                            }
                        ]
                    }
                ]
            }, {
                title: 'EMAIL',
                defaultType: 'textfield',
                layout: 'anchor',
                defaults: {
                    anchor: '100%',
                    hideEmptyLabel: false
                },
                items: [
                    {
                        name: 'e1',
                        xtype: 'combobox',
                        fieldLabel: 'Адрес 1',
                        displayField: 'email',
                        valueField: 'email',
                        store: 'Emails',
                        queryMode: 'local',
                        allowBlank: true,
                        typeAhead: false,
                        labelAlign: 'right',
                        labelWidth: 80

                    }, {
                        name: 'e2',
                        xtype: 'combobox',
                        fieldLabel: 'Адрес 2',
                        displayField: 'email',
                        valueField: 'email',
                        store: 'Emails',
                        queryMode: 'local',
                        allowBlank: true,
                        typeAhead: false,
                        labelAlign: 'right',
                        labelWidth: 80

                    }, {
                        name: 'e3',
                        xtype: 'combobox',
                        fieldLabel: 'Адрес 3',
                        displayField: 'email',
                        valueField: 'email',
                        store: 'Emails',
                        queryMode: 'local',
                        allowBlank: true,
                        typeAhead: false,
                        labelAlign: 'right',
                        labelWidth: 80

                    }, {
                        name: 'e4',
                        xtype: 'combobox',
                        fieldLabel: 'Адрес 4',
                        displayField: 'email',
                        valueField: 'email',
                        store: 'Emails',
                        queryMode: 'local',
                        allowBlank: true,
                        typeAhead: false,
                        labelAlign: 'right',
                        labelWidth: 80

                    }
                ]
            }, {
                title: 'SMS',
                defaultType: 'textfield',
                layout: 'anchor',
                defaults: {
                    anchor: '100%',
                    hideEmptyLabel: false
                },
                items: [
                    {
                        name: 'n1',
                        xtype: 'combobox',
                        fieldLabel: 'Номер 1',
                        displayField: 'phone',
                        valueField: 'phone',
                        store: 'Phones',
                        queryMode: 'local',
                        allowBlank: true,
                        typeAhead: false,
                        labelAlign: 'right',
                        labelWidth: 80
                    }, {
                        name: 'n2',
                        xtype: 'combobox',
                        fieldLabel: 'Номер 2',
                        displayField: 'phone',
                        valueField: 'phone',
                        store: 'Phones',
                        queryMode: 'local',
                        allowBlank: true,
                        typeAhead: false,
                        labelAlign: 'right',
                        labelWidth: 80
                    }, {
                        name: 'n3',
                        xtype: 'combobox',
                        fieldLabel: 'Номер 3',
                        displayField: 'phone',
                        valueField: 'phone',
                        store: 'Phones',
                        queryMode: 'local',
                        allowBlank: true,
                        typeAhead: false,
                        labelAlign: 'right',
                        labelWidth: 80
                    }, {
                        name: 'n4',
                        xtype: 'combobox',
                        fieldLabel: 'Номер 4',
                        displayField: 'phone',
                        valueField: 'phone',
                        store: 'Phones',
                        queryMode: 'local',
                        allowBlank: true,
                        typeAhead: false,
                        labelAlign: 'right',
                        labelWidth: 80
                    }
                ]
            }
        ]
    }

    ,

    defaultType: 'textfield',
    initComponent: function () {
        this.callParent(arguments);
        this.spot = Ext.create('Ext.ux.Spotlight');
    },
    toggleEditState: function (enable) {
        this.spot.animate = false;
        if (enable === true) {
            this.spot.show(this.id);
        } else if (this.spot.active) {
            this.spot.hide(this.id);
        }

        var disabled = !enable;
        this.spot.active = enable;

        this.down('button[itemId=edit_save]').setDisabled(
            !this.getForm().isValid() || disabled);
        this.down('button[itemId=edit_cancel]').setDisabled(disabled);
        this.down('button[itemId=check_snmp]').setDisabled(disabled);
        this.down('button[itemId=check_snmpwalk]').setDisabled(disabled);
        this.cascade(function (item) {
            if (typeof item.setReadOnly === 'function') {
                item.setReadOnly(disabled);
            }
        });
    }

});
