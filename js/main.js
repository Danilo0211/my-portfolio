document.getElementById("html-checker").setAttribute(
    "href",
    "https://validator.w3.org/nu/?doc=" + location.href
);

document.getElementById("css-checker").setAttribute(
    "href",
    "https://jigsaw.w3.org/css-validator/validator?uri=" + location.href
);

// Set current year
let d = new Date();
let thisYear = d.getFullYear();

document.getElementById("this-year").innerHTML = thisYear;


// Manages mobile navigation
function myFunction() {

    let x = document.getElementById("myTopnav");

    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
