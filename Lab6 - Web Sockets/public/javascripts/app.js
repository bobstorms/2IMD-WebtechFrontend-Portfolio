primus = Primus.connect("http://localhost:3000", {
    reconnect: {
        max: Infinity // Number: The max delay before we try to reconnect.
        , min: 500 // Number: The minimum delay before we try reconnect.
        , retries: 10 // Number: How many times we should try to reconnect.
    }
});

if(document.querySelector(".update-form")) {

    document.querySelector(".submit-button").addEventListener("click", (evt) => {
        evt.preventDefault();
        let team = document.querySelector("#team").value;
        let score = document.querySelector("#score").value;
        document.querySelector("#score").value = "";
        
        primus.write({
            "action": "Updated stats",
            "data": {
                "team": team,
                "score": score
            }
        })
    });

}