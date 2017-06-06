$(document).ready(function () {
    var idUser = localStorage['userId'];
    var idVideo = "";
    var nombreVideo = "";
    var urlVideo = "";
    var keywordsVideo;
    var competenciasVideo;
    $.getJSON("https://enfasiscuatro.herokuapp.com/recomendaciones/find/all/" + idUser, function (response) {
        console.log(idUser);
        console.log(response[0].idVideo);
        var cadena = "";
        $("#tablaRec").html("");
        for (v in response) {
            idVideo = response[v].idVideo;
            console.log("idVideo: " + idVideo);

            $.getJSON("https://enfasiscuatro.herokuapp.com/videos/findbyid/" + idVideo, function (res) {
                for (i in res) {
                    nombreVideo = res[i].nombre;
                    imagenVideo = res[i].imagen;
                    urlVideo = res[i].URL;
                    keywordsVideo = res[i].keywords;
                    competenciasVideo = res[i].competencias;
                    console.log(i);
                    console.log("nombre: " + nombreVideo);
                    console.log("imagen: " + imagenVideo);
                    console.log("url: " + urlVideo);
                    console.log("palabras: " + keywordsVideo);
                    console.log("competencias: " + competenciasVideo);
                    cadena = cadena + '<td><div class="card contenedor" id="conte"><div class="card-image"><img src="'+imagenVideo+'"><a href="video.html?url='+urlVideo+'&nombreVideo='+nombreVideo+'&keywordsVideo='+keywordsVideo+'&competencias='+competenciasVideo+'" class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">play_arrow</i></a></div><div class="card-content"><p>' + nombreVideo + '</p></div></td>';
                }
                localStorage['nombreVideo'] = nombreVideo;
                localStorage['keywordsVideo'] = keywordsVideo;
                localStorage['competencias'] = competenciasVideo;
                console.log("cadena");
                console.log(cadena);
                $("#tablaRec").html(cadena);
                $("#descrip2").html(nombreVideo);
            });
        }
    });
});