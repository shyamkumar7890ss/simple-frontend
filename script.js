function register() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;

    fetch("https://simple-backend-as7j.onrender.com/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: name,
            email: email
        })
    })
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        document.getElementById("result").innerText = data.message;
    })
    .catch(function (error) {
        document.getElementById("result").innerText = "Backend not responding";
        console.log(error);
    });
}
