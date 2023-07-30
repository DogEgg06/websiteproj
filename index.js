var w = 1;
var darkmodeswitch = 1;
function Event_click(){
    document.getElementById("register").innerHTML = "Registered!";
}

function Event_clicked(){
    document.getElementById("registered").innerHTML = "Registered!";
}

function myFunction() {
    var element = document.body;
    element.classList.toggle("darkmode");
    if(darkmodeswitch == 1){
        document.getElementById("darkmodetext").innerHTML = "Light Mode";
        darkmodeswitch -= 1;
    }
    else if (darkmodeswitch == 0){
        document.getElementById("darkmodetext").innerHTML = "Dark Mode";
        darkmodeswitch += 1;
    }
}