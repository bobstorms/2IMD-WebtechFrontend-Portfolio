class App {

    constructor() {
        this.getBikeStations();
        this.getLocation();
    }

    getBikeStations() {
        let url = "https://geodata.antwerpen.be/arcgissql/rest/services/P_Portal/portal_publiek1/MapServer/57/query?where=1%3D1&outFields=Straatnaam,Huisnummer,District,Gebruik,Aantal_plaatsen&outSR=4326&f=json";
        fetch(url)
            .then((response) => {
                return response.json();
            })
            .then((json) => {
                console.log(json);
                let bikeLocations = json.features;
                bikeLocations.forEach(location => console.log(location));

                this.getLocation();
            });
    }

    getLocation() {
        navigator.geolocation.getCurrentPosition((position) => {
            let pos = {
                x: position.coords.latitude,
                y: position.coords.longitude
            }
            return pos;
        });
    }

}

let app = new App();