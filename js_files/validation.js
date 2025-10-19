const form = document.getElementById("contact");
const name = document.getElementById("name");
const mail = document.getElementById("mail");
const msg = document.getElementById("msg");

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let messages = [];

    if (!name.value || name.value.length > 50) {
        messages.push("Name is required and should be under 50 characters.");
    }

    if (!mail.value || !mail.validity.valid) {
        messages.push("Please enter a valid email address.");
    }

    if (!msg.value || msg.value.length > 500) {
        messages.push("Message is required and should be under 500 characters.");
    }

    if (messages.length > 0) {
        alert(messages.join("\n"));
    } else {
        form.submit();
    }
});
