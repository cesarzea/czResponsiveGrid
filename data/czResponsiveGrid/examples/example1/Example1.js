/**
 * Created by cesarzea on 5/4/21.
 */
Ext.define('examples.Example1', {
    extend: 'Ext.Panel',

    requires: [
        'Ext.field.Display',
        'Ext.layout.HBox',
        'Ext.layout.VBox',
        'examples.Example1Controller',
        'examples.Example1Model',
        'examples.components.example1Grid'
    ],

    xtype: 'examples.example1',

    viewModel: {
        type: 'examples.example1'
    },

    minHeight: 400,
    padding: 20,

    controller: 'examples.example1',

    layout: {
        type: 'vbox'
    },

    items: [
        {
            xtype: 'panel',
            layout: {
                type: 'hbox'
            },
            flex: 1,
            items: [
                {
                    xtype: 'panel',

                    itemId: 'resizerLeft',
                    listeners: {
                        resize: 'onResizerLeft'
                    },

                    layout: {
                        type: 'vbox',
                        pack: 'center',
                        align: 'end'
                    },
                    items: [{
                        xtype: 'displayfield',
                        value: '<div style="font-size: 1.5em;white-space: nowrap;transform: rotate(-90deg);">Resize Me</div>',
                        encodeHtml: false,
                        //height: '5em',
                        height: 100,
                        width: 75,
                        //style: 'transform: rotate(-90deg);'
                    }],

                    resizable: {
                        dynamic: true,
                        edges: 'e',
                        split: true
                    }
                },
                {
                    xtype: 'examples.example1Grid',
                    itemId: 'mainGrid',
                    border: true,
                    title: 'czResponsiveGrid Grid Example',
                    style: 'border: 1px solid #025b80;',

                    flex: 1,
                    listeners: {
                        responsiveResize: 'onMainGridResize'
                    }

                },
                {
                    xtype: 'panel',

                    itemId: 'resizerRight',
                    listeners: {
                        resize: 'onResizerRight'
                    },

                    layout: {
                        type: 'vbox',
                        align: 'start',
                        pack: 'center'
                    },
                    padding: 10,
                    items: [{
                        xtype: 'container',
                        html: '<div style="text-align: center; font-size: 1.5em;white-space: nowrap;transform-origin: bottom left; transform: rotate(90deg);">Resize Me</div>',
                        encodeHtml: false,
                        height: 120,
                        //width: 90,
                        //style: 'background-color: blue;'
                    }],


                    resizable: {
                        dynamic: true,
                        edges: 'w',
                        split: true
                    }
                }
            ]
        }
    ]
});