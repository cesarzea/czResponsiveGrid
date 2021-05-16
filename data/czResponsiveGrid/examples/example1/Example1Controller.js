/**
 * Created by cesarzea on 5/4/21.
 */
Ext.define('examples.Example1Controller', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.examples.example1',

    view: null,

    init: function (view) {
        this.view = view;
    },

    onResizerLeft: function (cmp) {
        let width = cmp.getSize().width;
        this.view.down('#resizerRight').setWidth(width);
    },

    onResizerRight: function (cmp) {
        let width = cmp.getSize().width;
        this.view.down('#resizerLeft').setWidth(width);
    },

    onMainGridResize: function (grid, plugIn) {

        this.view.fireEvent('czGridResize', grid, plugIn);

    }

});