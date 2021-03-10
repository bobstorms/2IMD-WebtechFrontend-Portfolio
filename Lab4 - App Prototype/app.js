class App {

    constructor() {
        this.getLocation();
    }

    getLocation() {
        navigator.geolocation.getCurrentPosition((position) => {
            let lat = position.coords.latitude;
            let lon = position.coords.longitude;
            console.log(lat + " " + lon);
        });
    }

}

let app = new App();