const FuelStation = require('../model/FuelStation');

class FuelStationRepository {
    constructor() {
        this.fuelStationModel = FuelStation.getModel();
    }

    async save(fuelStationModelEntity) {
        const fuelStation = new this.fuelStationModel(fuelStationModelEntity)
        try {
            await fuelStation.save();
            return fuelStation;
        } catch (error) {
            throw error;
        }
    }
}
module.exports = FuelStationRepository;