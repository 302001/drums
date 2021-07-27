var audio1=document.getElementById('audio1');
var audio2=document.getElementById('audio2');
var audio3=document.getElementById('audio3');
var audio4=document.getElementById('audio4');
var audio5=document.getElementById('audio5');
var audio6=document.getElementById('audio6');
var audio7=document.getElementById('audio7');
var audio8=document.getElementById('audio8');
var audio9=document.getElementById('audio9');
document.body.addEventListener('keydown',function(e)
{
    var keyCode=e.keyCode;
    if(keyCode==65)
    audio1.play();
    else if(keyCode==83)
    audio2.play();
    else if(keyCode==68)
    audio3.play();
    else if(keyCode==70)
    audio4.play();
    else if(keyCode==71)
    audio5.play();
    else if(keyCode==72)
    audio6.play();
    else if(keyCode==74)
    audio7.play();
    else if(keyCode==75)
    audio8.play();
    else if(keyCode==76)
    audio9.play();
})
