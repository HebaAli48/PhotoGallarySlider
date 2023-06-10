
var btn=document.querySelectorAll("button");
var body=document.body;
var image=document.querySelector("img");
var images=["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg"];
console.log(images);
var index=0;    
var interval;
function nextPic() {
    index=index<6?index+1:1;
    image.src=index+".jpg";
    console.log(image.src);
    }
    function prevPic() {
        index=index>1?index-1:6;
        image.src=index+".jpg";
        console.log(image.src);
        }

        btn[0].addEventListener("click",nextPic);
            
    btn[3].addEventListener("click",prevPic);

    btn[1].addEventListener("click",function(){
        interval=setInterval(function(){
            index=index<6?index+1:1;
            image.src=index+".jpg";
            console.log(image.src);
        },1000)
    });
    btn[2].addEventListener("click",function(){
       clearInterval(interval)
    });
