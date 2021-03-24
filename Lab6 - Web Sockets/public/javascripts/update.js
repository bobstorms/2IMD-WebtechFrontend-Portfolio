primus = Primus.connect("http://localhost:3000", {
    reconnect: {
        max: Infinity // Number: The max delay before we try to reconnect.
        , min: 500 // Number: The minimum delay before we try reconnect.
        , retries: 10 // Number: How many times we should try to reconnect.
    }
});

document.querySelector(".submit-button").addEventListener("click", (evt) => {
    evt.preventDefault();
    let id = document.querySelector("#team").value;
    let score = document.querySelector("#score").value;
    document.querySelector("#score").value = "";

    let error = document.querySelector(".error");

    if(score == "") {
        error.style.display = "block";
        error.innerText = "Please enter a score.";
    } else {
        error.style.display = "none";
        error.innerText = "";

        primus.write({
            "action": "updateStats",
            "data": {
                "id": id,
                "score": score
            }
        })
    }

});