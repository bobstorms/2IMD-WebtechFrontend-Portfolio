class App {

    constructor() {
        this.getBikeStations();
        this.getLocation();
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