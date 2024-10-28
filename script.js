const passOne = document.querySelector("#password");
const passTwo = document.querySelector("#confirmPassword");
const passMatch = document.querySelector(".passMatch");

function validateForm() {

    if (passOne.value !== passTwo.value) {
        passMatch.textContent = "* Passwords do not match"
        return false;
    }
}