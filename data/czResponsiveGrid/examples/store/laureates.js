Ext.define('examples.store.laureates', {

    extend: 'Ext.data.Store',
    model: 'examples.model.laureates',

    alias: 'store.examples.laureates',

    requires: [
        'examples.model.laureates'
    ],

    storeId: 'examples.laureates',

    autoLoad: true,

    proxy: {
        type: 'ajax',
        url: '../data/czResponsiveGrid/examples/data/data1.json',
        reader: {
            rootProperty: 'data'
        }
    }
});
