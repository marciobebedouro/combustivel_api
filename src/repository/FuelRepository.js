const Fuel = require('../model/Fuel');

class FuelRepository {
    constructor(){
        this.fuelModel = Fuel.getModel();
    }

    async save(fuelModelEntity) {
        const fuel = new this.fuelModel(fuelModelEntity)
        try {
            await fuel.save();
            return fuel;
        } catch (error) {
            throw error;
        }
    }

    async getAll() {
        try {
            const fuelAll = await this.fuelModel.find({});
            return fuelAll;
        } catch (error) {
            throw error;
        }
    }

    async getById(id) {
        try {
            const fuel = await this.fuelModel.find({_id: id});
            return fuel;
        } catch (error) {
            throw error;
        }
    }

    async delete(id) {
        try {
            const fuel = await this.fuelModel.deleteOne({_id: id});
            return fuel;
        } catch (error) {
            throw error;
        }
    }

    async update(id, data) {
        try {
            const fuel = this.fuelModel.findOneAndUpdate({_id:id}, data,{new: true});
            return fuel;
        } catch (error) {
            throw error;
        }
    }

    async getFuelByFuelStationId(fuelStationId) {
        try {
            const fuel = await this.fuelModel.find({fuelStation: fuelStationId});
            return fuel;
        } catch (error) {
            throw error;
        }
    }
}
module.exports = FuelRepository;