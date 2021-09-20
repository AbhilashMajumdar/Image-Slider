let num=0;
let slide = document.getElementsByClassName("slide");

function controller(x){
    num = num + x;
    if(num == slide.length)
    {
        num=0;
    }
    if(num < 0)
    {
        num = slide.length - 1;
    }
    slideshow(num);
}

slideshow(num);



function slideshow(pos)
{
    for(let i of slide)
    {
        i.style.display = "none";
    }

    slide[pos].style.display = "block";
}

