let submitButton = document.getElementById("submit-button");
let password = document.getElementById("password");
let confirmPassword = document.getElementById("confirm-password");
let form = document.getElementById("registration-form");
let errorMessage = document.getElementById("password-error");

const validatePassword = (password, confirmPassword) => {
	if (password.value === confirmPassword.value) form.submit();
	else {
		password.value = "";
		confirmPassword.value = "";

		password.classList.add("password-error");
		confirmPassword.classList.add("password-error");

		errorMessage.style.display = "block";
	}
};

submitButton.addEventListener("click", function (e) {
	e.preventDefault();
	validatePassword(password, confirmPassword);
});
