let slides=document.querySelectorAll(`.slide`)
console.log(slides);
let slideArray=Array.from(slides);
console.log(slideArray);
let next=document.querySelector(`.next`)
let prev=document.querySelector(`.prev`)

function prevNext(){
    let activeSlide=document.querySelector(`.slide.active`);
    
     let curentIndex=slideArray.indexOf(activeSlide)
    console.log(curentIndex);

    let prev;
    let next;
    if(curentIndex==0){
        prev= slideArray [slideArray.length-1];
    }else{
        prev=slideArray[curentIndex-1];
    }
    if(curentIndex==slideArray . length -1){
        next=slideArray[0]
    }else{
        next=slideArray[curentIndex+1];
    }
    return[prev,next];
}

 function koiJabo(){
    let activeSlide=document.querySelector(`.slide.active`);

    let currentIndex=slideArray.indexOf(activeSlide);
    let[prev,next]=prevNext();
    slideArray.map((slide,index)=>{
        if(currentIndex==index){
            slide.style.transform = "translateX(0)"
        }else if(slide== prev){
            slide.style.transform = "translateX(-100%)"
        }else if( slide == next ){
            slide.style.transform = "translateX(100%)"
        }
        slides.addEventListener(`transitionend`,()=>{
            slslideside.classList.remove("smoth")
        })
   
        
    })
 }

 next.addEventListener('click',function(){
    let activeSlide=document.querySelector(`.slide.active`);
    let [prev,next] =prevNext();
    activeSlide.classList.add("smoth")
    next.classList.add("smoth")

    activeSlide.classList.remove(`active`)
    activeSlide.style.transform = "translateX(-100%)"
    next.classList.add(`active`)
    next.style.transform = "translateX(0)"
    koiJabo()
 })
 prev.addEventListener('click',function(){
    let activeSlide=document.querySelector(`.slide.active`);
    let [prev,next] =prevNext(); 
  activeSlide.classList.add("smoth")
    next.classList.add("smoth")

    activeSlide.classList.remove(`active`)
    activeSlide.style.transform = "translateX(-100%)"
    prev.classList.add(`active`)
    prev.style.transform ="translate(0)"
    koiJabo()
 })
