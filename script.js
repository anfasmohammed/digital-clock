const clock=document.querySelector("#clock")
const hours = document.querySelector("#hours")
const minutes = document.querySelector("#minutes")
const seconds = document.querySelector("#seconds")
const section = document.querySelector("#section")
clock.innerHTML=new Date()

let displaTime=()=>{
    let hrs=new Date().getHours()
    let min=new Date().getMinutes()
    let sec=new Date().getSeconds()
    if (hrs>=12) {
        section.innerHTML="PM"
        
    } else {
       section.innerHTML="AM" 
    }
    if (hrs>12) {
        hrs=hrs-12
        
    }
    if (sec<10) {
        sec="0"+sec
    }
    if (min<10) {
        min="0"+min
    }
    hours.innerHTML=hrs
minutes.innerHTML=min
seconds.innerHTML=sec

}
setInterval(displaTime,10)
