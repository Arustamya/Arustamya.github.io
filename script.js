// let inp_year = document.getElementById("inp_year")
let year = document.getElementById("year")
let month = document.getElementById("month")
let day = document.getElementById("day")
let btn = document.querySelector("button")
let h1 = document.querySelector("h1")


// console.log(btn ,"<=====");

// console.log(h1);


// btn.addEventListenner("click", ()=>{
//     console.log(inp_year.value)
// })
btn.addEventListener("click", ()=>{
    let newYear = new Date( +year.value , +month.value , +day.value  );
    let currentDate = new Date();
    let interval = newYear-currentDate
    console.log(newYear)
    console.log(currentDate)
    console.log(interval)

    let outDay = Math.floor(interval/1000/60/60/24);
    let outHour = Math.floor(interval % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    let outMinutes = Math.floor(interval % (1000 * 60 *60) / (1000*60));
    let outSeconds =Math.floor(interval % (1000 * 60) / (1000))

    console.log(outDay,outHour, outMinutes,outSeconds );

    
    h1.innerHTML =` ${outDay} Day  ${outHour} Hour ${outMinutes} Minutes ${outSeconds} Seconds`
    
    // console.log(Math.floor(interval/1000/60/60/24));
    // console.log(Math.floor(interval % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
    // console.log(Math.floor(interval % (1000 * 60 *60) / (1000*60)))
    // console.log(Math.floor(interval % (1000 * 60) / (1000)))
})
