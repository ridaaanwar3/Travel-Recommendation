function showMessage(destination) {

    alert(
        "You selected " +
        destination +
        ". Get ready for an amazing travel experience!"
    );

}


function submitForm(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;

    alert(
        "Thank you, " +
        name +
        "! Your message has been submitted."
    );

    document.querySelector("form").reset();

}
