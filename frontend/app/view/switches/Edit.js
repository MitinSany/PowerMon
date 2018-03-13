Ext.define('PowerMon.view.switches.Edit', {
    extend: 'Ext.form.Panel',
    requires: [
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
    tbar: [
        {
            text: 'Сохранить',
            itemId: 'save',
            iconCls: 'save',
            disabled: true
        }, {
            text: 'Отменить',
            itemId: 'cancel',
            iconCls: 'cancel',
            disabled: true
        }
    ],
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
                    hideEmptyLabel: false,
                    boxLabel: ''
                },
                items: [
                    {
                        xtype: 'hiddenfield',
                        name: 'id'
                    }, {
                        fieldLabel: 'Имя тп.',
                        name: 'technical_site_name',
                        allowBlank: true,
                        width: 360,
                        labelWidth: 80,
                        labelAlign: 'right'
                    }, {
                        fieldLabel: 'Имя свитча',
                        name: 'switch_name',
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
                        fieldLabel: 'LINK',
                        name: 'link',
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
                    hideEmptyLabel: false,
                    boxLabel: ''
                },
                items: [
                    {
                        xtype: 'checkboxfield',
                        name: 'check_snmp',
                        fieldLabel: '',
                        labelSeparator: '',
                        boxLabel: 'Опрашивать по SNMP',
                        width: 360,
                        labelWidth: 80,
                        labelAlign: 'right'
                    }, {
                        xtype: 'checkboxfield',
                        name: 'email_send',
                        fieldLabel: '',
                        labelSeparator: '',
                        boxLabel: 'Отправлять Email сообщения',
                        width: 360,
                        labelWidth: 80,
                        labelAlign: 'right'
                    }, {
                        xtype: 'checkboxfield',
                        name: 'sms_send',
                        fieldLabel: '',
                        labelSeparator: '',
                        boxLabel: 'Отправлять SMS сообщения',
                        width: 360,
                        labelWidth: 80,
                        labelAlign: 'right'
                    }, {
                        xtype: 'checkboxfield',
                        name: 'sms_night',
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
                    hideEmptyLabel: false,
                    boxLabel: ''
                },
                items: [
                    {
                        fieldLabel: 'IP',
                        name: 'snmp_ip',
                        width: 360,
                        labelWidth: 80,
                        labelAlign: 'right'
                    }, {
                        fieldLabel: 'Community',
                        name: 'snmp_community',
                        width: 360,
                        labelWidth: 80,
                        labelAlign: 'right'
                    }, {
                        fieldLabel: 'OID',
                        name: 'snmp_oid',
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
                    hideEmptyLabel: false,
                    boxLabel: ''
                },
                items: [
                    {
                        name: 'email0',
                        xtype: 'combobox',
                        fieldLabel: 'Адрес 1',
                        displayField: 'email',
                        valueField: 'id',
                        store: 'Emails',
                        queryMode: 'local',
                        allowBlank: true,
                        typeAhead: true,
                        labelAlign: 'right',
                        labelWidth: 80

                    }, {
                        name: 'email1',
                        xtype: 'combobox',
                        fieldLabel: 'Адрес 2',
                        displayField: 'email',
                        valueField: 'id',
                        store: 'Emails',
                        queryMode: 'local',
                        allowBlank: true,
                        typeAhead: false,
                        labelAlign: 'right',
                        labelWidth: 80

                    }, {
                        name: 'email2',
                        xtype: 'combobox',
                        fieldLabel: 'Адрес 3',
                        displayField: 'email',
                        valueField: 'id',
                        store: 'Emails',
                        queryMode: 'local',
                        allowBlank: true,
                        typeAhead: false,
                        labelAlign: 'right',
                        labelWidth: 80

                    }, {
                        name: 'email3',
                        xtype: 'combobox',
                        fieldLabel: 'Адрес 4',
                        displayField: 'email',
                        valueField: 'id',
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
                    hideEmptyLabel: false,
                    boxLabel: ''
                },
                items: [
                    {
                        name: 'phone0',
                        xtype: 'combobox',
                        fieldLabel: 'Номер 1',
                        displayField: 'phone',
                        valueField: 'id',
                        store: 'Phones',
                        queryMode: 'local',
                        allowBlank: true,
                        typeAhead: false,
                        labelAlign: 'right',
                        labelWidth: 80
                    }, {
                        name: 'phone1',
                        xtype: 'combobox',
                        fieldLabel: 'Номер 2',
                        displayField: 'phone',
                        valueField: 'id',
                        store: 'Phones',
                        queryMode: 'local',
                        allowBlank: true,
                        typeAhead: false,
                        labelAlign: 'right',
                        labelWidth: 80
                    }, {
                        name: 'phone2',
                        xtype: 'combobox',
                        fieldLabel: 'Номер 3',
                        displayField: 'phone',
                        valueField: 'id',
                        store: 'Phones',
                        queryMode: 'local',
                        allowBlank: true,
                        typeAhead: false,
                        labelAlign: 'right',
                        labelWidth: 80
                    }, {
                        name: 'phone3',
                        xtype: 'combobox',
                        fieldLabel: 'Номер 4',
                        displayField: 'phone',
                        valueField: 'id',
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
});
