const FuelStation = require('../model/FuelStation');
const FuelStationRepository = require('../repository/FuelStationRepository');

class FuelStationController {
    constructor() {
        this.fuelStationRepository = new FuelStationRepository();
    }

    async createFuelStation(request) {
        const {body} = request;
        const fuelStation = new FuelStation(body);
        const fuelStationCurrent = await this.fuelStationRepository.save(fuelStation);

        return fuelStationCurrent;
    }

    async getAllFuelStation() {
        const fuelStationAll = await this.fuelStationRepository.getAll();
        return fuelStationAll;
    }

    async getById(req) {
        const {params} = req;
        const fuelStation = await this.fuelStationRepository.getById(params.id);
        return fuelStation;
    }

    async delete(req) {
        const {params} = req;
        const fuelStation = await this.fuelStationRepository.delete(params.id);
        return fuelStation;
    }

    async update(req) {
        const {params, body} = req;
        const fuelStation = await this.fuelStationRepository.update(params.id, body);
        return fuelStation;
    }


}

module.exports = FuelStationController;