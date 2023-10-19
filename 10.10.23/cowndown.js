const endDate = "17 October 2023 2:00 PM"

document.getElementById("end-date").innerText = endDate;

const input = document.querySelectorAll("input")
const clock=()=>{
    const end = new Date(endDate);
    const now = new Date()
    // console.log(end,now);
    const diff = (end - now) / 1000;
    if(diff < 0)return;
   
    // console.log(diff);
    input[0].value=Math.floor(diff/ 3600 / 24);
    // console.log(Math.floor(diff/24/60)%60);
    input[1].value=Math.floor(diff/3600)%24;
    input[2].value=Math.floor(diff/60)%60;
    input[3].value=Math.floor(diff)%60;

    // Conver into days

}
// initial call
clock()


setInterval(
    ()=>{
        clock()
    },
    1000
)