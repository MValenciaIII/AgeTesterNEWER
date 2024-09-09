//? How does the data look when I grab a date?
//* YYYY-MM-DD

let grabDate = document.querySelector("#birthDate")
let submitButton = document.querySelector("#submit")
let parsedYear;

let displayMessage = document.querySelector(".displayMessage h1");

// If theres been data added, It will run this eventlistener?
//? USING THIS TO SEE HOW the "date" is outputted
submitButton.addEventListener("click", () => {
    //! THIS IS THE INPUT VALUE FROM HTML DATE
    console.log(grabDate.value);
    //! THIS ALLOWS ME TO PARSE DATES EASILY
    let inputYear = new Date(grabDate.value)
    console.log(inputYear)
    parsedYear = inputYear.getFullYear();
    console.log(parsedYear)


    checkAge()
})



function checkAge() {
    let todaysDate = new Date();
    console.log(todaysDate);
    let currentAge = todaysDate.getFullYear() - parsedYear;

    console.log(currentAge);
    

    if (currentAge < 18 && currentAge > 0) {
        displayMessage.innerHTML = "YOU'RE NOT ALLLOWED HERE. LEAVE!"
    } else if (currentAge >= 18) {
        displayMessage.innerHTML = "WELCOME TO DA COOL KID ZONE!"
    } else {
        //NEGATIVE NUMBERS 
        alert("INVALID YEAR, NO TIME TRAVEL")
    }
}



