$(document).ready(function () {
    function getParameterByName(name) {
        return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [, ""])[1].replace(/\+/g, '%20')) || null;
    }
    var url = getParameterByName("url");//window.location.href;
    console.log("url1: " + url);
    //var split = url.split("=");
    //url = split[1]+"="+split[2];
    if (getParameterByName("nombreVideo") != null) {
        localStorage['nombreVideo'] = getParameterByName("nombreVideo");
        localStorage['keywordsVideo'] = getParameterByName("keywordsVideo");
        localStorage['competencias'] = getParameterByName("competencias");
    }
    url = url.replace("watch?v=", "embed/");
    console.log("url2: " + url);
    $("#containerVideo").html('<iframe id="iframe" width="640" height="480" src="' + url + '" allowfullscreen></iframe>');
    console.log("nombre video: " + localStorage['nombreVideo']);
    $("#nombreVid").html(localStorage['nombreVideo']);
    $("#palabras").html("Palabras clave: " + localStorage['keywordsVideo']);
    $("#comp").html("Competencias: " + localStorage['competencias']);

    $("#tabla_emo").on("click", "#btn_like", function () {
        var idUs = localStorage['userId'];
        var idVid = localStorage['videoid'];
        console.log(idUs + "" + idVid);
        $.ajax({
            method: "POST",
            url: "https://enfasiscuatro.herokuapp.com/like",
            data: { "idUsuario": idUs, "idVideo": idVid }
        }).done(function (response) {
            console.log("respuesta");
            console.log(response);
            if (response.success) {
                console.log("success true");
                swal("¡En hora buena!", "Tu valoración ha sido registrada con éxito", "success")
            } else {
                swal("¡Lo sentimos!", "Tu valoración ya habia sido registrada anteriormente", "error")
            }
        });
    });

    $("#tabla_emo").on("click", "#btn_dislike", function () {
        var idUs = localStorage['userId'];
        var idVid = localStorage['videoid'];
        console.log(idUs + "" + idVid);
        $.ajax({
            method: "POST",
            url: "https://enfasiscuatro.herokuapp.com/dislike",
            data: { "idUsuario": idUs, "idVideo": idVid }
        }).done(function (response) {
            console.log("respuesta");
            console.log(response);
            if (response.success) {
                console.log("success true");
                swal("¡En hora buena!", "Tu valoración ha sido registrada con éxito", "success")
            } else {
                swal("¡Lo sentimos!", "Tu valoración ya habia sido registrada anteriormente", "error")
            }
        });
    });
});