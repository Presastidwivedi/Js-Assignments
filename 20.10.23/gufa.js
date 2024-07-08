var j=0;
function fun1()
{
    j++;

    document.getElementById('m1').innerHTML=j;
}
var i=60;
function fun2()
    {
    i--;
    if(i===0)
    {
        clearInterval(m);
    }
    document.getElementById('m2').innerHTML="Time Left:"+i;
}

var m=setInterval("fun2()",1000);

function moving(){
    var s1 = parseInt(Math.random()*700);
    var s2 = parseInt(Math.random()*700);
    document.getElementById("pic").style.top = s1+"px"
    document.getElementById("pic").style.left = s2+"px"

}
setInterval("moving()",1000);