alert("Świeżak Siara wita!");
const firstName = "Łukasz";
const age = 39;

const heading = document.querySelector(".main__heading--js");
heading.innerHTML = `Witaj Drogi Odwiedzający, nazywam się ${firstName} i mam ${age}lat.`;


console.log("Witaj. Mam na imię Łukasz i mam 39 lat");

function greet (age, firstName) {
    console.log(
        `Witaj drogi odwiedzający,nazywam się ${firstName} i mam ${age} lat.`
    );
}

greet (age, firstName)

