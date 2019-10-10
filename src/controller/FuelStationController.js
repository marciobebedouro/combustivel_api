const FuelStation = require('../model/FuelStation');
const FuelStationRepository = require('../repository/FuelStationRepository');

class FuelStationController {
    constructor() {
        this.fuelStationRepository = new FuelStationRepository();
    }

    async createFuelStation(request) {
        const fuelStation = new FuelStation(request.body);
        const fuelStationCurrent = await this.fuelStationRepository.save(fuelStation);

        return fuelStationCurrent;
    }
}

module.exports = FuelStationController;