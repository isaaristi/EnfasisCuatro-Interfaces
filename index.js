$(document).ready(function(){
    console.log("[INDEX] localStorage['userId']: "+localStorage['userId']);
    var idUser = localStorage['userId'];
    var idVideo = "";
    var nombreVideo = "";
    var urlVideo = "";
    var keywordsVideo;
    var competenciasVideo;
    $.getJSON("https://enfasiscuatro.herokuapp.com/recomendaciones/"+idUser+"/directa", function(response){
        idVideo = response[0].idVideo;
        localStorage['videoid'] = idVideo;
        console.log("idVideo: "+idVideo);
        $.getJSON("https://enfasiscuatro.herokuapp.com/videos/findbyid/"+idVideo, function(res){
            nombreVideo = res[0].nombre;
            imagenVideo = res[0].imagen;
            urlVideo = res[0].URL;
            keywordsVideo = res[0].keywords;
            competenciasVideo = res[0].competencias;
            $("#imagen1").prop("src",imagenVideo);
            $("#descrip1").html(nombreVideo);
            $("#id1").html(idVideo);
            $("#btn1").prop("href","video.html?url="+urlVideo);
            localStorage['nombreVideo'] = nombreVideo;
            localStorage['keywordsVideo'] = keywordsVideo;
            localStorage['competencias'] = competenciasVideo;
            localStorage['idVideo'] = idVideo;
            localStorage['imagenVideo'] = imagenVideo;
        });
    });
    $("#cerrar").on("click", "#btn_cerrar", function(){
        localStorage.clear();
    } );
});