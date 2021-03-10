class App {

    constructor() {
        this.getBikeStations();
    }

    getBikeStations() {
        let url = "https://geodata.antwerpen.be/arcgissql/rest/services/P_Portal/portal_publiek1/MapServer/57/query?where=1%3D1&outFields=Straatnaam,Huisnummer,District,Gebruik,Aantal_plaatsen&outSR=4326&f=json";
        fetch(url)
            .then((response) => {
                return response.json();
            })
            .then((json) => {
                console.log(json);
                this.bikeLocations = json.features;
                this.getLocation();
            });
    }

    getLocation() {
        navigator.geolocation.getCurrentPosition((position) => {
            let pos = {
                x: position.coords.longitude,
                y: position.coords.latitude
            }
            console.log("Found location!");
            this.calculateDistances(pos);
        });
    }

    calculateDistances(userPos) {

        this.bikeLocations.forEach((location) => {
            let bikePos = location.geometry;
            let distance = this.getDistance(userPos.y, userPos.x, bikePos.y, bikePos.x);
            location.distance = distance;
            //console.log("User position: " + userPos.x + ", " + userPos.y + " | Bike position: " + bikePos.x + ", " + bikePos.y + " | Distance: " + distance);
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