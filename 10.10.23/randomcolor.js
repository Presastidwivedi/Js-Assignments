const fun1=()=>{
    // Hex code
    const randomNo = Math.floor(Math.random()*16777215);
    // console.log(randomno);
    const randomCode = "#" +randomNo.toString(16);
    // console.log(randomcode);
    document.body.style.backgroundColor = randomCode;
    document.getElementById("color-code").innerText = randomCode;
    // navigator.clipboard.writeText(randomcode)
}   
//  Event Call
   document.getElementById("btn").addEventListener(
      "click",
      fun1
   )
//    Initial call
   fun1();

   