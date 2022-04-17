function convertToFaranheit() {
    let celciusVal = document.querySelector(".celcius1").value;
    let convertToFaranheit = (celciusVal * 9 / 5) + 32;
    convertToFaranheit = parseFloat(convertToFaranheit).toFixed(2);
    document.querySelector(".faranheit1").value = convertToFaranheit + "°F";
}

function convertToCelcius() {
    let faranheitVal = document.querySelector(".faranheit2").value;
    let convertToCelcius = (faranheitVal - 32) * 5 / 9;
    convertToCelcius = parseFloat(convertToCelcius).toFixed(2);
    document.querySelector(".celcius2").value = convertToCelcius + "°C";
}

function reset1_1() {
    document.querySelector(".celcius1").value = "";
    document.querySelector(".faranheit1").value = "";
}
function reset1_2() {
    document.querySelector(".celcius2").value = "";
    document.querySelector(".faranheit2").value = "";
}


function convertToKilometers() {
    let milesVal = document.querySelector(".miles1").value;
    let convertToKilometers = milesVal * 1.609;
    convertToKilometers = parseFloat(convertToKilometers).toFixed(2);
    document.querySelector(".kilometers1").value = convertToKilometers + " KM";
}

function convertToMiles() {
    let kilometersVal = document.querySelector(".kilometers2").value;
    let convertToMiles = Math.round(kilometersVal / 1.609);
    convertToMiles = parseFloat(convertToMiles).toFixed(2);
    document.querySelector(".miles2").value = convertToMiles + " M";
}

function reset2_1() {
    document.querySelector(".kilometers1").value = "";
    document.querySelector(".miles1").value = "";
}

function reset2_2() {
    document.querySelector(".kilometers2").value = "";
    document.querySelector(".miles2").value = "";
}