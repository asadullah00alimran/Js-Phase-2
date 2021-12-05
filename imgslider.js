var photos = ["images/slider/Img-1.jpg","images/slider/Img-2.jpg","images/slider/Img-3.jpg",
"images/slider/Img-4.jpg","images/slider/Img-5.jpg","images/slider/Img-6.jpg"];

var imgTag = document.querySelector("img");

var count = 0;

function previous(){
    count --;
    if(count < 0){
        count = photos.length - 1;
        imgTag.src = photos[count];
    }
    else{
        imgTag.src = photos[count];
    }
}

function next(){
    count++;
    if(count >= photos.length){
        count = 0;
        imgTag.src = photos[count];
    }
    else{
        imgTag.src = photos[count];
    }
}