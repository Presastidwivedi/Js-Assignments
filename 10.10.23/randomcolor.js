const fun1=()=>{
    // Hex code
    const randomno = Math.floor(Math.random()*16777215);
    // console.log(randomno);
    const randomcode = "#" +randomno.toString(16);
    // console.log(randomcode);
    document.body.style.backgroundColor = randomcode;
    document.getElementById("color-code").innerText = randomcode;
    // navigator.clipboard.writeText(randomcode)
}   
//  Event Call
   document.getElementById("btn").addEventListener(
      "click",
      fun1
   )
//    Initial call
   fun1();

   