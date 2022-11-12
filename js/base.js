function animateSlogan(){
    document.getElementById("slogan").style.display = "block";
    animate.addAndReset(document.getElementById("slogan"),"animate fadeIn");
}
function animateSloganDelay(delay){
    if(delay<100){delay*=1000;}
    //console.log(delay);
    document.getElementById("slogan").style.display="none";
    window.setTimeout(function(){ animateSlogan(); }, delay);
}