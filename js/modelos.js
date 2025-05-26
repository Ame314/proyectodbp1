var URL_API = "http://api.openweathermap.org/data/2.5/weather?APPID=1adb13e22f23c3de1ca37f3be90763a9&units=metric&lang=es";
var URL_BASE_ICONO = "http://openweathermap.org/img/w/";

// integración de servicio web
var DatosTiempo = Backbone.Model.extend({
    actualizarTiempo: function() {
        var callback = function(data) {
            this.set('descripcion', data.weather[0].description);
            var icono_url = URL_BASE_ICONO + data.weather[0].icon + ".png";
            this.set('icono', icono_url);
            this.set('dt', data.dt);
            console.log("Datos actualizados: " + this.get('descripcion'));
        };

        // conexión al servicio
        $.getJSON(URL_API, { q: this.get('localidad') }, callback.bind(this));
    }
});
