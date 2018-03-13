Ext.define('PowerMon.view.switches.List', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.swlist',
    requires: ['Ext.tip.*', 'Ext.grid.column.Action'],
    store: 'Switches',
    border: false,
    loadMask: false,
    itemId: 'grid1',
    id: 'swlist',
    viewConfig: {
        loadMask: false
    },
    tbar: [{
        text: 'Добавить',
        itemId: 'add_sw',
        iconCls: 'add_sw',
        disabled: false
    }, {
        text: 'Удалить',
        itemId: 'del_sw',
        iconCls: 'del_sw',
        disabled: true
    }, {
        text: 'Редактировать',
        itemId: 'edit_sw',
        iconCls: 'edit_sw',
        disabled: true
    }, {
        text: 'Обновить',
        itemId: 'refresh',
        iconCls: 'refresh'
    }],
    columns: [{
        header: 'SNMP',
        dataIndex: 'snmp_status',
        align: 'center',
        draggable: false,
        menuDisabled: true,
        width: 50,
        renderer: function (value) {
            if (value == '1') {
                return '<div class="buble_green"></div>';
            } else if (value == '2') {
                return '<div class="buble_red_u"></div>';
            } else if (value == '4') {
                return '';
            }
            return '<div class="buble_gray_n"></div>';
        }
    },
        /*
         * , { header : 'Важность', dataIndex : 'rank',
         * align : 'center', draggable : false,
         * menuDisabled : true }
         */
        {
            header: 'PING',
            dataIndex: 'ping',
            align: 'left',
            draggable: false,
            menuDisabled: true,
            width: 70,
            renderer: function (value) {
                if (value > 0) {
                    return '<div class="buble_green"></div> ' + value + ' ms.';
                } else {
                    return '<div class="buble_gray_n"></div>';
                }
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
            renderer: function (value) {
                return value > 0 ? value : '';
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
                icon: 'resources/images/app/text-x-changelog16.png',
                tooltip: 'Журнал',
                handler: function (grid, rowIndex, colIndex) {
                    var id = grid.store.getAt(rowIndex).get('id');
                    grid.up('mainview').down('#swid').setValue(id);
                    grid.up('mainview').down('toolbar').down('#log').toggle();
                    grid.up('mainview').down('#maincard').getLayout()
                        .setActiveItem(2);

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
            renderer: function (value) {
                if (value != '') {
                    return '<a href="' +
                        value +
                        '" target="_blank"><div class=".statistics"></div></a>';
                }
            }
        }
    ],

    initComponent: function () {
        this.callParent(arguments);
        this.getStore().on('beforeload', this.rememberSelection, this);
        this.getView().on('refresh', this.refreshSelection, this);
    },

    rememberSelection: function (selModel, selectedRecords) {
        if (!this.rendered || Ext.isEmpty(this.el)) {
            return;
        }
        var selected = this.getSelectionModel().getSelection();
        if (selected.length > 0) {
            this.selectedId = selected[0].getId();
        }
        this.getView().saveScrollState();
    },

    refreshSelection: function () {
        if (this.selectedId !== undefined) {
            record = this.getStore().getById(this.selectedId);
            this.getSelectionModel().select(record);
        }

        this.getView().restoreScrollState();
    }
});