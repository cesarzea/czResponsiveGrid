Ext.define('examples.model.laureates', {
    extend: 'Ext.data.Model',


    fields: [{
        name: 'born',
        type: 'date',
        dateReadFormat: 'Y-m-d'
    }, {
        name: 'died',
        type: 'date',
        dateReadFormat: 'Y-m-d'
    }]

});