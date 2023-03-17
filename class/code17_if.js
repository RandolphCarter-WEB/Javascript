let rg1 = /[0-9]{3}/;
let sample = "123";

console.log(rg1.test(sample));

document.getElementById("button01").addEventListener("click", () => {
    let val01 = document.getElementById("val01");

    console.log("EX01");
    (val01.value > 5) ? 
        console.log(`value(${val01.value}) is bigger then 5.`)
        : console.log(`value(${val01.value}) is smaller then 5.`);

    console.log("EX02");
    if(val01.value > 5) {
        console.log(`value(${val01.value}) is bigger then 5.`);
    }
    else if (val01.value < 5) {
        console.log(`value(${val01.value}) is smaller then 5.`);
    }
    else {
        console.log(`value(${val01.value}) is 5.`)
    }
    console.log("Event Finish");

    val01.value = "";
})