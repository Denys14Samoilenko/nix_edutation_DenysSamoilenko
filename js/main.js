document.forms.submitForm.addEventListener('submit', event => {
	if (!event.target.reportValidity()) {
		if (event.target.name.validity.valueMissing) alert('Name field is empty');
		if (event.target.name.validity.tooShort) alert('Name too short');
	}
	if (event.target.password.value !== event.target.confirmPassword) {
		alert('Invalid password');
	}
	event.preventDefault();
});
