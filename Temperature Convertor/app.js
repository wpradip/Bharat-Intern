//accessing all the required elements
let degree = document.querySelector("#degree");
let type = document.querySelector("#temp-type");
let result2 = document.querySelector("#result-box2");
let result1 = document.querySelector("#result-box1");
let resLabel1 = document.querySelector("#result-label1");
let resLabel2 = document.querySelector("#result-label2");
let convertBtn = document.querySelector("#convert");

//adding event listener to the convert button
convertBtn.addEventListener("click",()=>{
    //getting conversion for celcius
    if (type.value == "Celcius"){
        result1.value = (degree.value * 1) + 273.15;
        result2.value = ((degree.value) * (9/5)) + 32;
    }
    //getting conversions for farehnite
    if (type.value == "Farehnite"){
        resLabel2.innerHTML = "In Celcius";
        result1.value = ((degree.value) - 32) * (5/9) + 273.15;
        result2.value = ((degree.value) - 32) * (5/9);
    }
    //getting conversions for kelvin
    if (type.value == "Kelvin"){
        resLabel1.innerHTML = "In Celcius";
        resLabel2.innerHTML = "In Farehnite";
        result1.value = (degree.value * 1) - 273.15;
        result2.value = ((degree.value) - 273.15) * (9/5) + 32;
    }
});
