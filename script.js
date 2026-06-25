let participants = [];

const form = document.getElementById("registrationForm");
const message = document.getElementById("message");
const list = document.getElementById("participantsList");
const count = document.getElementById("count");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    let fullName =
        document.getElementById("fullName").value;

    let email =
        document.getElementById("email").value;

    let age =
        document.getElementById("age").value;

    let technology =
        document.getElementById("technology").value;

    let terms =
        document.getElementById("terms").checked;

    if (fullName === "") {
        message.innerHTML =
            "Full name is required.";
        message.className = "error";
        return;
    }

    if (!email.includes("@")) {
        message.innerHTML =
            "Email is invalid.";
        message.className = "error";
        return;
    }

    if (age < 18) {
        message.innerHTML =
            "Age must be at least 18.";
        message.className = "error";
        return;
    }

    if (technology === "") {
        message.innerHTML =
            "Select technology.";
        message.className = "error";
        return;
    }

    if (!terms) {
        message.innerHTML =
            "Accept the terms.";
        message.className = "error";
        return;
    }

    let participant = {
        fullName,
        email,
        age,
        technology
    };

    participants.push(participant);

    renderParticipants();

    message.innerHTML =
        fullName + " registered successfully.";

    message.className = "success";

    form.reset();
});

function renderParticipants() {

    list.innerHTML = "";

    participants.forEach(function(participant) {

        let li =
            document.createElement("li");

        li.innerHTML =
            participant.fullName +
            " - " +
            participant.technology;

        list.appendChild(li);
    });

    count.innerHTML =
        participants.length;
}