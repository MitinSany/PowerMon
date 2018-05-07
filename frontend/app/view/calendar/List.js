Ext.define('PowerMon.view.calendar.List', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.calendar.list',
    requires: ['Ext.tip.*'],
    border: false,

    itemId: 'CalendarGrid',
    title: 'Календарь',
    store: 'Calendar',
    loadMask: false,
    viewConfig: {
        loadMask: false
    },

    tbar: [/*{
        text: 'Сохранить',
        itemId: 'save',
        iconCls: 'save',
        disabled: true
    }, {
        text: 'Отменить',
        itemId: 'cancel',
        iconCls: 'cancel',
        disabled: true
    },*/{
        text: 'Редактировать',
        itemId: 'editCalendarDay',
        iconCls: 'btn_edit',
        disabled: true
    }, {
        text: 'Обновить',
        itemId: 'refresh',
        iconCls: 'btn_refresh'
    }],

    columns: [{
        header: 'Дата',
        dataIndex: 'date',
        sortable: false,
        draggable: false,
        menuDisabled: true,
        align: 'center',
        width: 65,
        id: 'date',
        renderer: function (value, metaData, record, row, col, store, gridView) {
            return this.dateColumnRenderer(value, metaData, record, row, col, store, gridView);
        }
    }, {
        dataIndex: 'date',
        sortable: false,
        draggable: false,
        menuDisabled: true,
        align: 'center',
        width: 40,
        renderer: function (value, metaData, record, row, col, store, gridView) {
            return this.dayColumnRenderer(value, metaData, record, row, col, store, gridView);
        }
    }, {
        header: 'Номер 1',
        dataIndex: 'n1',
        sortable: false,
        draggable: false,
        menuDisabled: true,
        align: 'center',
        width: 120,
//			vtype: 'phone',
        field: {
            xtype: 'combobox',
            typeAhead: true,
            triggerAction: 'all',
            selectOnTab: true,
            store: 'Phones',
            lazyRender: true,
            displayField: 'phone',
            valueField: 'phone',
            queryMode: 'local',
            allowBlank: true
        }
    }, {
        header: 'Номер 2',
        dataIndex: 'n2',
        sortable: false,
        draggable: false,
        menuDisabled: true,
        align: 'center',
        field: {
            xtype: 'combobox',
            typeAhead: true,
            triggerAction: 'all',
            selectOnTab: true,
            store: 'Phones',
            lazyRender: true,
            displayField: 'phone',
            valueField: 'phone',
            queryMode: 'local',
            allowBlank: true
        }
    }, {
        header: 'Номер 3',
        dataIndex: 'n3',
        sortable: false,
        draggable: false,
        menuDisabled: true,
        align: 'center',
        field: {
            xtype: 'combobox',
            typeAhead: true,
            triggerAction: 'all',
            selectOnTab: true,
            store: 'Phones',
            lazyRender: true,
            displayField: 'phone',
            valueField: 'phone',
            queryMode: 'local',
            allowBlank: true
        }
    }, {
        header: 'Номер 4',
        dataIndex: 'n4',
        sortable: false,
        draggable: false,
        menuDisabled: true,
        align: 'center',
        field: {
            xtype: 'combobox',
            typeAhead: true,
            triggerAction: 'all',
            selectOnTab: true,
            store: 'Phones',
            lazyRender: true,
            displayField: 'phone',
            valueField: 'phone',
            queryMode: 'local',
            allowBlank: true
        }
    }, {
        header: 'Номер 5',
        dataIndex: 'n5',
        sortable: false,
        draggable: false,
        menuDisabled: true,
        align: 'center',
        field: {
            xtype: 'combobox',
            typeAhead: true,
            triggerAction: 'all',
            selectOnTab: true,
            store: 'Phones',
            lazyRender: true,
            displayField: 'phone',
            valueField: 'phone',
            queryMode: 'local',
            allowBlank: true
        }
    }],

    dayColumnRenderer: function (value, metaData, record, row, col, store, gridView) {
        var date = new Date(value);
        var day = date.getDay();
        switch (day) {
            case 1:
                val = 'Пн';
                break;

            case 2:
                val = 'Вт';
                break;

            case 3:
                val = 'Ср';
                break;

            case 4:
                val = 'Чт';
                break;

            case 5:
                val = 'Пт';
                break;

            case 6:
                val = 'Сб';
                metaData.style = 'color: red;';
                break;

            case 0:
                val = 'Вс';
                metaData.style = 'color: red;';
                break;
        }
        return val;
    },

    dateColumnRenderer: function (value, metaData, record, row, col, store, gridView) {
        var format = "d.m.y";
        var date = new Date(value);
        var dateStr = Ext.Date.format(date, format);

        var today = new Date();
        var todayStr = Ext.Date.format(today, format);

        if(dateStr === todayStr) {
            metaData.style = 'font-weight: bold;';
        }

        return dateStr;
    }

});
