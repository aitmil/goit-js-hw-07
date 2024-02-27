const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);
function handleSubmit(evt) {
  evt.preventDefault();

  const elements = evt.currentTarget.elements;
  const emailValue = elements.email.value.trim();
  const passValue = elements.password.value.trim();
  const info = {
    email: emailValue,
    password: passValue,
  };

  if (emailValue === "" || passValue === "") {
    return alert("All form fields must be filled in");
  } else {
    console.log(info);
  }

  evt.currentTarget.reset();
}
