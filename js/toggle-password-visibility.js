function togglePassword() {
	const passwordField = document.getElementById("floatingPassword");
	const toggleIcon = document.getElementById("togglePasswordIcon");

	if (passwordField.type === "password") {
		passwordField.type = "text";
		toggleIcon.classList.remove("bi-eye");
		toggleIcon.classList.add("bi-eye-slash");
	} else {
		passwordField.type = "password";
		toggleIcon.classList.remove("bi-eye-slash");
		toggleIcon.classList.add("bi-eye");
	}
}