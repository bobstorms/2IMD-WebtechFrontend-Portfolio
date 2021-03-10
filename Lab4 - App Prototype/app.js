class App {

    constructor() {
        this.getBikeStations();
        this.getLocation();
    }

    getBikeStations() {
        /*
        let url = "https://geodata.antwerpen.be/arcgissql/rest/services/P_Portal/portal_publiek1/MapServer/57/query?where=1%3D1&outFields=Straatnaam,Huisnummer,District,Gebruik,Aantal_plaatsen&outSR=4326&f=json";
        fetch(url)
            .then((response) => {
                return response.json();
            })
            .then((json) => {
                console.log(json);
                let bikeLocations = json.features;

                bikeLocations.forEach((location) => {
                    console.log(location)
                });

                this.getLocation();
            });
        */
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

    getDistance(lat1, lon1, lat2, lon2) {
        const R = 6371;
        let dLat = this.degToRad(lat1-lat2);
        let dLon = this.degToRad(lon1-lon2);
        lat1 = this.degToRad(lat1);
        lat2 = this.degToRad(lat2);

        let a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2);
        let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
        let distance = R * c; // Distance in km
        return distance;
    }

    degToRad(deg) {
        return deg * Math.PI / 180;
    }

}

let app = new App();