Ext.define('examples.components.example1Grid', {

    extend: 'Ext.grid.Grid',
    xtype: 'examples.example1Grid',

    requires: [
        'Ext.layout.Fit',
        'examples.store.laureates'
    ],

    layout: 'fit',
    panel: true,

    variableHeights: true,
    columnLines: true,

    store: {
        type: 'examples.laureates'
    },

    plugins: {

        czresponsivegrid: {

            splits: [
                ['born'],
                ['born', 'died'],
                ['born', 'bornCountry', '|', 'died', 'diedCountry'],
                [
                    ['born', 'bornCountry', 'bornCountryCode'],
                    '-',
                    ['died', 'diedCountry', 'diedCountryCode']
                ],
                [
                    ['born', 'bornCountry'],
                    ['bornCountryCode', 'bornCity'],
                    '-',
                    ['died', 'diedCountry'],
                    ['diedCountryCode', 'diedCity']
                ],
                [
                    ['born', 'bornCountryCode'],
                    ['bornCountry'],
                    ['bornCity'],
                    '-',
                    ['died', 'diedCountryCode'],
                    ['diedCountry'],
                    ['diedCity']
                ],
                [
                    ['gender'],
                    '-',
                    ['born'],
                    ['bornCountryCode'],
                    ['bornCountry'],
                    ['bornCity'],
                    '-',
                    ['died'],
                    ['diedCountryCode'],
                    ['diedCountry'],
                    ['diedCity']
                ],
                [
                    ['firstname'],
                    '-',
                    ['gender'],
                    '-',
                    ['born'],
                    ['bornCountryCode'],
                    ['bornCountry'],
                    ['bornCity'],
                    '-',
                    ['died'],
                    ['diedCountryCode'],
                    ['diedCountry'],
                    ['diedCity']
                ]
            ],

            regularizeLabelWidths: true,
            regularizeValueWidths: true,
            voidInheritBorders: true
        }

    },


    columns: [
        //Name
        {
            text: 'First Name',
            dataIndex: 'firstname',
            flex: 1,
            minWidth: "10em"
        }, {
            text: 'Surname',
            dataIndex: 'surname',
            flex: 1,
            minWidth: "10em"
        },
        //Born

        {
            xtype: 'datecolumn',
            text: "Born",
            dataIndex: "born",
            align: 'center',
            width: '7.5em',
            czresponsive: {
                value: '{born:date("m-d-Y")}'
            }
        },
        {
            text: 'Country',
            dataIndex: 'bornCountry',
            flex: 1,
            minWidth: '13em'
        },
        {
            text: 'Country<br/>Code',
            width: '7em',
            align: 'center',
            dataIndex: "bornCountryCode",
            czresponsive: {
                label: 'C. Code'
            }
        },
        {
            text: 'City',
            dataIndex: "bornCity",
            flex: 1,
            minWidth: '13em'
        },

        {
            xtype: 'datecolumn',
            text: 'Died',
            dataIndex: "died",
            align: 'center',
            width: '7.5em',
            czresponsive: {
                value: '{died:date("m-d-Y")}'
            }
        }, {
            text: ' Country',
            dataIndex: "diedCountry",
            flex: 1,
            minWidth: '13em'
        }, {
            text: 'Country<br/>Code',
            dataIndex: "diedCountryCode",
            width: '7em',
            align: 'center',
            czresponsive: {
                label: 'C. Code'
            }

        }, {
            text: 'City',
            dataIndex: "diedCity",
            flex: 1,
            minWidth: '13em'
        },

        //Others
        {
            text: 'Gender',
            dataIndex: "gender",
            width: '7em',
            align: 'center'
        }
    ]

})