const endDate = "01 January 2025 12:00 AM"
document.getElementById("endDate").innerText = endDate;
const input = document.querySelectorAll('input');


function clock(){
    const end = new Date(endDate);
    const now = new Date();
    let diff = (end - now)/1000;
   if (diff<0) return
    input[0].value = Math.floor((diff/3600)/24);
    input[1].value = Math.floor((diff/3600)% 24);
    input[2].value = Math.floor((diff/60)%60);
    input[3].value = Math.floor((diff % 60));
}

setInterval(() => {
    clock()
}, 1000);