Ext.define('PowerMon.view.calendar.Edit', {
    extend: 'Ext.form.Panel',
    requires: [
        'Ext.form.field.Checkbox',
        'Ext.form.FieldContainer',
        'Ext.form.field.ComboBox'
    ],
    alias: 'widget.calendar.edit',
    itemId: 'calendar.edit',
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
    defaults: {
        bodyStyle: 'padding:10px',
        border: false

    },
    items: {
        defaultType: 'combobox',
        layout: 'anchor',
        defaults: {
            anchor: '100%',
            hideEmptyLabel: false,
            boxLabel: ''
        },
        items: [
            {
                name: 'phone0',
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
});
