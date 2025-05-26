var TiempoWidget = Backbone.View.extend({
    el: '#tiempo_widget',

    initialize: function() {
        this.listenTo(this.model, 'change:dt', this.renderData);
    },

    render: function() {
        this.$el.html(
            '<input type="text" id="localidad" placeholder="Escribe una localidad">' +
            '<input type="button" value="Ver tiempo" id="ver_tiempo">' +
            '<div><img id="icono" src="" alt="icono del clima"></div>' +
            '<div id="descripcion"></div>'
        );
        return this;
    },

    events: {
        'click #ver_tiempo': 'actualizar'
    },

    actualizar: function() {
        var loc = this.$('#localidad').val();
        this.model.set('localidad', loc);
        this.model.actualizarTiempo();
    },

    renderData: function() {
        this.$('#icono').attr('src', this.model.get('icono'));
        this.$('#descripcion').text(this.model.get('descripcion'));
    },

    ver_tiempo_de: function() {
        this.model.set('localidad', $('#localidad').val());
        this.model.actualizarTiempo();
    }
});

var miTiempo = new DatosTiempo(); // modelo
var miWidget = new TiempoWidget({ model: miTiempo }); // vista
miWidget.render(); // ya está vinculado al #tiempo_widget
