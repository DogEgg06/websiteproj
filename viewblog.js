var w = 1;
var darkmodeswitch = 1;
var currentpagenum = 1;
var sortByDateCheck = 1


const date = [ 1 , 2, 3, 4, 5, 6      ];
const likes = [   3, 9, 21, 13, 15, 8         ];
var containers1 = { date:date[0], likes:likes[0]      };
var containers2 = {  date:date[1], likes:likes[1]   };
var containers3 = {   date:date[2], likes:likes[2]     };
var containers4 = {    date:date[3], likes:likes[3]     };
var containers5 = {   date:date[4], likes:likes[4]    };
var containers6 = {    date:date[5], likes:likes[5]   };
var containers = [ containers1, containers2, containers3, containers4, containers5, containers6];
var container1 = "0", container2 = "0", container3 = "0", container4 = "0",container5 = "0",container6 ="0";
var container = [container1, container2, container3, container4,container5,container6];
var containers_backup = containers;

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

/*
function sortByLikes(){
    var element = document.body;
    if(sortByLikes == true){
        containers = containers_backup;

        alert(containers);
        container1 = document.getElementById('container1').innerHTML;
        container2 = document.getElementById('container2').innerHTML;
        container3 = document.getElementById('container3').innerHTML;
        container4 = document.getElementById('container4').innerHTML;
        container5 = document.getElementById('container5').innerHTML;
        container6 = document.getElementById('container6').innerHTML;
        for(let i = 0;i < 5;i++){
            containers[i] = container[i];
            
        }
        document.write(containers);
        for(let i = 0;i < 5;i++){
            container[i] = containers[i];
        }
        document.write(containers);
        element.classList.toggle("sortByLikes");
        }
    }
*/
function sortByLikes(){
    var element = document.body;
element.classList.toggle("sortByLikes")
}

function dropdown(){
    var element = document.body;
    element.classList.toggle("dropdownbar");
}


function page_prev() {
    if(currentpagenum>1){
        const pagenum = document.getElementById("index" + currentpagenum).classList;
        pagenum.remove("active");
        currentpagenum -= 1;
        const prevpagenum = document.getElementById("index" + currentpagenum).classList;
        prevpagenum.add("active");
        document.getElementById("current-page").innerHTML = currentpagenum;
    }
    
}

function page_next() {
    if(currentpagenum<2){
        const pagenum = document.getElementById('index'+ currentpagenum).classList;
        pagenum.remove('active');
        currentpagenum += 1;
        const nextpagenum = document.getElementById("index" + currentpagenum).classList;
        nextpagenum.add("active");
        document.getElementById("current-page").innerHTML = currentpagenum;
    }
    
}