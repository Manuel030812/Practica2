$(document).ready(function() {
    $("#Generar").click(function() {
        var nombre = $("#nombre").val();
        var apellidoPaterno = $("#apellidop").val();
        var apellidoMaterno = $("#apellidom").val();
        var fechaNacimiento = $("#fechan").val();

        
        nombre = nombre.substring(0,1);
        apellidoPaterno = apellidoPaterno.substring(0,2);
        apellidoMaterno = apellidoMaterno.substring(0,1);

        
        // Formatear la fecha de nacimiento (año, mes, día)
        var fecha = new Date(fechaNacimiento);
        var año = fecha.getFullYear().toString().substring(2, 4);
        var mes = ("0" + (fecha.getMonth() + 1)).slice(-2);
        var dia = ("0" + fecha.getDate()).slice(-2);

        var rfc = apellidoPaterno+apellidoMaterno+nombre+año+mes+dia;
        
        $("#RFC").val(rfc)
    });
});

$(document).ready(function() {
    $("#bconsulta").click(function() {
        var userId = $("#idusuario").val();
        var apiUrl = "https://jsonplaceholder.typicode.com/users/" + userId;

        $.ajax({
            url: apiUrl,
            method: "GET",
            success: function(data) {
                $("#nombreUsuario").val(data.name);
                $("#email").val(data.email);
            },
            error: function() {
                alert("Error al obtener los datos del usuario.");
            }
        });
    });
});
