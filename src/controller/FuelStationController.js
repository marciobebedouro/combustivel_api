const FuelStation = require('../model/FuelStation');
const FuelStationRepository = require('../repository/FuelStationRepository');

class FuelStationController {
    constructor() {
        this.fuelStationRepository = new FuelStationRepository();
    }

    async createFuelStation(request) {
        const {body} = request;
        console.log(body)
        const fuelStation = new FuelStation(body);
        console.log(fuelStation)
        const fuelStationCurrent = await this.fuelStationRepository.save(fuelStation);

        return fuelStationCurrent;
    }
}

module.exports = FuelStationController;