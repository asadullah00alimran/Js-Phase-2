function myMessage(){
    alert("Hello !");
}
function button1(){
    alert("Button 1 is clicked");
}
function button2(){
    alert("Button 2 is clicked");
}
function paraMessage(){
    alert("Paragraph text is clicked");
}
function demoPara1(){
    var myVar = document.querySelector("#para");
    myVar.innerHTML = "You have clicked para1 button";
}
function demoPara2(){
    var myVar = document.querySelector("#para");
    myVar.innerHTML = "You have clicked para2 button";
}
function img1(){
    var myImg = document.querySelector("#imgID");
    myImg.src = "images/potato.jpg";
}
function img2(){
    var myImg = document.querySelector("#imgID");
    myImg.src = "images/tomato.jpg";
}