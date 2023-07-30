var darkmodeswitch = 1;

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

function page2(){
var element = document.body;
element.classList.toggle("NextPage");


}

function  page3(){
    var element = document.body;
    element.classList.toggle("Page-3")
}

function page4(){
    var element = document.body;
    element.classList.toggle("Submit-form")

}