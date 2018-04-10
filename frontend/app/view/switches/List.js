Ext.define('PowerMon.view.switches.List', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.swlist',
    requires: ['Ext.tip.*', 'Ext.grid.column.Action'],
    store: 'Switches',
    border: false,
    loadMask: false,
    itemId: 'switchesList',
    //id: 'swlist',
    viewConfig: {
        loadMask: false
    },
    tbar: [{
        text: 'Добавить',
        itemId: 'addSwitch',
        iconCls: 'btn_add',
        disabled: false
    }, {
        text: 'Удалить',
        itemId: 'deleteSwitch',
        iconCls: 'btn_delete',
        disabled: true
    }, {
        text: 'Редактировать',
        itemId: 'editSwitch',
        iconCls: 'btn_edit',
        disabled: true
    }, {
        text: 'Обновить',
        itemId: 'refreshSwitch',
        iconCls: 'btn_refresh'
    }],
    columns: [{
        header: 'SNMP',
        dataIndex: 'status_snmp',
        align: 'center',
        draggable: false,
        menuDisabled: true,
        width: 50,
        renderer: function (value, metaData, record, row, col, store, gridView) {
            return this.snmpStatusColumnRenderer(value, metaData, record, row, col, store, gridView);
        }
    },
        /*
         * , { header : 'Важность', dataIndex : 'rank',
         * align : 'center', draggable : false,
         * menuDisabled : true }
         */
        {
            header: 'PING',
            dataIndex: 'status_ping',
            align: 'left',
            draggable: false,
            menuDisabled: true,
            width: 70,
            renderer: function (value, metaData, record, row, col, store, gridView) {
                return this.pingColumnRenderer(value, metaData, record, row, col, store, gridView);
            }

        },
        {
            header: 'Техплощадка',
            dataIndex: 'technical_site_name',
            align: 'left',
            draggable: false,
            menuDisabled: true
        },
        {
            header: 'Свитч',
            dataIndex: 'switch_name',
            align: 'left',
            draggable: false,
            menuDisabled: true
        },
        {
            header: 'Порт',
            dataIndex: 'port',
            align: 'center',
            draggable: false,
            menuDisabled: true,
            width: 40,
            renderer: function (value, metaData, record, row, col, store, gridView) {
                return this.portColumnRenderer(value, metaData, record, row, col, store, gridView);
            }
        },
        {
            header: 'IP',
            dataIndex: 'snmp_ip',
            align: 'left',
            draggable: false,
            menuDisabled: true
        },
        {
            header: 'Время',
            dataIndex: 'time',
            align: 'center',
            draggable: false,
            menuDisabled: true
        },
        {
            xtype: 'actioncolumn',
            width: 32,
            header: 'Ж.',
            dataIndex: 'id',
            align: 'center',
            sortable: false,
            draggable: false,
            menuDisabled: true,
            items: [{
                iconCls: 'changelog',
                tooltip: 'Журнал',
                handler: function(view, rowIndex, colIndex, item, e, record, row) {
                    this.fireEvent('actionLog', view, rowIndex, colIndex, item, e, record, row);
                }
            }]
        },
        {
            header: 'URL',
            dataIndex: 'link',
            align: 'center',
            sortable: false,
            draggable: false,
            menuDisabled: true,
            width: 40,
            renderer: function (value, metaData, record, row, col, store, gridView) {
                return this.urlColumnRenderer(value, metaData, record, row, col, store, gridView);
            }
        }
    ],

    snmpStatusColumnRenderer: function (value, metaData, record, row, col, store, gridView) {

        switch (value)
        {
            case 1 :
                return '<div class="bubble_green"></div>';
            case 2 :
                return '<div class="bubble_red_u"></div>'
            case 4 :
                return '';
            default:
                return '<div class="bubble_gray_n"></div>';
        }
    },

    pingColumnRenderer: function (value, metaData, record, row, col, store, gridView) {
        if (value > 0) {
            return '<div class="bubble_green icon-cell">&nbsp;' + value + ' ms.</div>';
        } else {
            return '<div class="bubble_red_u icon-cell"></div>';
        }
    },

    portColumnRenderer: function (value, metaData, record, row, col, store, gridView) {
        return value > 0 ? value : '';
    },

   urlColumnRenderer: function (value, metaData, record, row, col, store, gridView) {
       if (value != '') {
           return '<a href="' +
               value +
               '" target="_blank"><div class="statistics"></div></a>';
       };
    }
});