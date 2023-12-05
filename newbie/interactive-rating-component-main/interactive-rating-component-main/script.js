var current_raiting = 0;

function setRating(rating) {
    var divElement = document.getElementsByClassName("circle");
    if(current_raiting != 0){
        divElement[current_raiting].style.backgroundColor = "hsl(216, 19%, 18%)";
        divElement[current_raiting].style.color = "hsl(217, 12%, 54%)";
    }
    current_raiting = rating;
}

function changeColor(rating){
    var divElement = document.getElementsByClassName("circle");
    
    divElement[rating].style.backgroundColor = "hsl(25, 97%, 53%)";
    divElement[rating].style.color = "hsl(0, 0%, 100%)";

    if(rating > 1){
        divElement[rating - 1].style.color = "hsl(0, 0%, 100%)";
        divElement[rating - 1].style.backgroundColor = "hsl(217, 12%, 54%)";
    }if (rating < 5) {
        divElement[rating + 1].style.color = "hsl(0, 0%, 100%)";
        divElement[rating + 1].style.backgroundColor = "hsl(217, 12%, 54%)";
    }
}

function backColor(rating){
    var divElement = document.getElementsByClassName("circle");
    
    divElement[rating].style.backgroundColor = "hsl(216, 19%, 18%)";
    divElement[rating].style.color = "hsl(217, 12%, 54%)";

    if(rating > 1){
        divElement[rating - 1].style.color = "hsl(217, 12%, 54%)";
        divElement[rating - 1].style.backgroundColor = "hsl(216, 19%, 18%)";
    }if (rating < 5) {
        divElement[rating + 1].style.color = "hsl(217, 12%, 54%)";
        divElement[rating + 1].style.backgroundColor = "hsl(216, 19%, 18%)";
    }if(current_raiting != 0){
        divElement[current_raiting].style.color = "hsl(0, 0%, 100%)";
        divElement[current_raiting].style.backgroundColor = "hsl(25, 97%, 53%)";
    }
}

function openPage(){
    localStorage.setItem("current", current_raiting);
    window.location.href = "./result.html"
}

document.addEventListener("DOMContentLoaded", function(){
    var h3Element = document.getElementsByClassName("Result")[0];
    var number = localStorage.getItem("current");
    h3Element.innerHTML = "You selected " + number + " out of 5";
    console.log("kekw")
});