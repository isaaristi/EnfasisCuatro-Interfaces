$(document).ready(function(){
    
    $("#table_cont").on("click", "#btn_ingresar", function(){
        var user = $("#user").val();
        var pass = $("#pass").val();
        console.log("user: "+user+" pass: "+pass);

        $.ajax({
            method: "POST",
            url: "https://enfasiscuatro.herokuapp.com/users/login",
            data: {"username":user, "password":pass}
        }).done(function(response){
            console.log("respuesta");
            console.log(response);
            if(response.success){
                console.log("success true");
                localStorage["userId"] = response.users._id;
                console.log("[LOGIN] localStorage['userId']: "+localStorage['userId']);
                if (user == "Admin"){
                    window.location.replace("index1.html");
                }else {
                    window.location.replace("index.html");
                }
                
            } else {
                swal("¡Lo sentimos!", "El usuario o la contraseña que acaba de ingresar es incorrecta", "error")
            }
        });

    });

});