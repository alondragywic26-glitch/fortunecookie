// fortunes array
const fortunes_array = [

    "Great things are coming your way!",

    "Today is your lucky day.",

    "A surprise awaits you soon.",

    "Be bold. Take the leap.",

    "Your hard work will pay off.",

    "Adventure is just around the corner.",

    "Good things come to those who wait.",

    "Believe in yourself and magic happens.",

];

// define variables
const crackButton = document.getElementById("crackButton");
const fortune = document.getElementById("fortune");
const cookie = document.getElementById("cookie");

// random generator
async function crackTheCookie(){

    cookie.classList.add('shaking');
    fortune.classList.remove("visible");

    cookie.addEventListener('animationend', function(){
        cookie.classList.remove('shaking');
    }, {once:true});


    try{
        const response = await fetch(
            "https://api.adviceslip.com/advice"
        );
        const data = await response.json();
        fortune.textContent = data.slip.advice
    } catch(error){
    const index = Math.floor(Math.random() * fortunes_array.length);
    fortune.textContent = fortunes_array[index];

    }

    
    
    setTimeout(function (){
        fortune.classList.add("visible");
    }, 300);
}

crackButton.addEventListener("click", crackTheCookie);

