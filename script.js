function register() 
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    fetch("https://simple-backend-as7j.onrender.com/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, email })
    })
    .then(res => res.json())
    .then(data => {
        document.getElementById("result").innerText = data.message;
    })
    .catch(err => {
        document.getElementById("result").innerText = "Error connecting to server";
    });
}




