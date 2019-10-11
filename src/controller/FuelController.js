const Fuel = require('../model/Fuel');
const FuelRepository = require('../repository/FuelRepository');

class FuelController {
    constructor() {
        this.fuelRepository = new FuelRepository();
    }

    async createFuel(request) {
        const {body} = request;
        const fuel = new Fuel(body);
        const fuelCurrent = await this.fuelRepository.save(fuel);

        return fuelCurrent;
    }

    async getAllFuel() {
        const fuelAll = await this.fuelRepository.getAll();
        return fuelAll;
    }

    async getById(req) {
        const {params} = req;
        const fuel = await this.fuelRepository.getById(params.id);
        return fuel;
    }

    async delete(req) {
        const {params} = req;
        const fuel = await this.fuelRepository.delete(params.id);
        return fuel;
    }

    async update(req) {
        const {params, body} = req;
        const fuel = await this.fuelRepository.update(params.id, body);
        return fuel;
    }

    async getFuelByFuelStationId(req) {
        const {params} = req;
        const fuel = await this.fuelRepository.getFuelByFuelStationId(params.id);
        return fuel;
    }


}

module.exports = FuelController;