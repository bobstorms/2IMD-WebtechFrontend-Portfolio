class App {

    constructor() {
        this.getBikeStations();
    }

    getBikeStations() {
        console.log("test");
        let url = "https://geodata.antwerpen.be/arcgissql/rest/services/P_Portal/portal_publiek1/MapServer/57/query?where=1%3D1&outFields=Straatnaam,Huisnummer,District,Gebruik,Aantal_plaatsen&outSR=4326&f=json";
        fetch(url)
            .then((response) => {
                return response.json();
            })
            .then((json) => {
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
            this.getWeatherInfo(pos);
        });
    }

    calculateDistances(userPos) {

        console.log("Calculating distance for every bike location...");
        // Add distance to every bikeLocation
        this.bikeLocations.forEach((location) => {
            let bikePos = location.geometry;
            let distance = this.getDistance(userPos.y, userPos.x, bikePos.y, bikePos.x);
            location.distance = distance;
        });
        console.log("Done calculating distance!");
        
        console.log("Sorting bike locations...");
        // Sort bikeLocations from closest to furthest
        this.bikeLocations.sort((a, b) => (a.distance > b.distance) ? 1 : -1);
        console.log("Done sorting bike locations!");
        this.showNearestBikeStation();

    }

    showNearestBikeStation() {
        let nearestBikeStation = this.bikeLocations[0];
        console.log("This is the nearest bike station: ", nearestBikeStation);
    }

    getWeatherInfo(pos) {
        console.log("Getting weather info for...");
        let lat = pos.y;
        let lon = pos.x;
        const apiKey = "56b676884dc4e3dae2aa38abcca6b71a";

        let url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
        console.log(url);
        fetch(url)
            .then((response) => {
                return response.json();
            })
            .then((json) => {
                console.log(json);
                let temperature = json.main.temp;
                let weatherParameters = json.weather[0].main;

                this.showWeatherInfo(temperature, weatherParameters);
            });
    }

    showWeatherInfo(temp, param) {
        if(temp > 20) {
            console.log("It's a very nice temperature to bike!");
        } else if(temp > 10) {
            console.log("It's warm enough to bike!");
        } else {
            console.log("Just put on some extra clothes.");
        }

        if(param.toLowerCase().includes("rain")) {
            console.log("It's raining, but you can take an umbrella with you!");
        } else {
            console.log("It's not even raining, what are you waiting for!");
        }
        
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