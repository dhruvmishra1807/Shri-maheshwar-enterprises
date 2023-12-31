let slides=document.getElementsByClassName("slides");
let navlinks=document.getElementsByClassName("dot");
let currslide=0;


const changeslide= (moveto)=>{
    if(moveto>=slides.length){
        moveto=0;
    }
    if(moveto<0){
        moveto=slides.length-1;
    }
    slides[currslide].classList.remove("active");
    navlinks[currslide].classList.remove("activedot");
    slides[moveto].classList.add("active");
    navlinks[moveto].classList.add("activedot");
    currslide=moveto;
}

document.getElementById("prev").addEventListener("click",()=>{
    changeslide(currslide-1);
})

document.getElementById("next").addEventListener("click",()=>{
    changeslide(currslide+ 1);
})

 document.querySelectorAll(".dot").forEach((radio,index)=>{
     radio.addEventListener("click",()=>{
         if(currslide!=index){
             changeslide(index);
         }
     })
 })
 window.onload=setInterval(()=>{
    changeslide(currslide+1)
 },3000)

function showsidebar(){
    let sidebar=document.querySelector(".sidebar");
    sidebar.style.display='flex';
}
function hidesidebar(){
    let sidebar=document.querySelector(".sidebar");
    sidebar.style.display='none';
}