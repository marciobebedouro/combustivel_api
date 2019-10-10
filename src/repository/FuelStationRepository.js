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

    async getAll() {
        try {
            const fuelStationAll = await this.fuelStationModel.find({});
            return fuelStationAll;
        } catch (error) {
            throw error;
        }
    }

    async getById(id) {
        try {
            const fuelStation = await this.fuelStationModel.find({_id: id});
            return fuelStation;
        } catch (error) {
            throw error;
        }
    }

    async delete(id) {
        try {
            const fuelStation = await this.fuelStationModel.deleteOne({_id: id});
            return fuelStation;
        } catch (error) {
            throw error;
        }
    }

    async update(id, data) {
        try {
            const fuelStation = this.fuelStationModel.findOneAndUpdate({_id:id}, data,{new: true});
            return fuelStation;
        } catch (error) {
            throw error;
        }
    }
}
module.exports = FuelStationRepository;