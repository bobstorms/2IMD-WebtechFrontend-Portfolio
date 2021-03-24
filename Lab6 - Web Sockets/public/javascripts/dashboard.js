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
    }

});