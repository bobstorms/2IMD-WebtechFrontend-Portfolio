primus = Primus.connect("http://localhost:3000", {
    reconnect: {
        max: Infinity // Number: The max delay before we try to reconnect.
        , min: 500 // Number: The minimum delay before we try reconnect.
        , retries: 10 // Number: How many times we should try to reconnect.
    }
});

primus.on("data", (json) => {

    if(json.action === "updateStats") {
        let id = json.data.id;
        let score = json.data.score;
        let scoreText = document.querySelector(`#${id} > .score`);
        
        scoreText.innerText = score;
        let row = document.getElementById(id);
        row.style.animation = "scaleEffect 1s ease-in-out 2";

        setTimeout(() => {
            row.style.animation = "none";
        }, 2000);
    }

});