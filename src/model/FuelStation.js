const moongoose = require('mongoose');

let model = null;
let schemaFuelStation = null;

class FuelStation {
    constructor({_id, id, name, active, updatedAt, address}) {
        this.id = _id || id || null;
        this.name = name || null;
        this.active = active;
        this.updatedAt = updatedAt;
        this.address = address
    }

    setId(id) {
        this.id = id;
        return this;
    }

    setName(name) {
        this.neme = name;
        return this;
    }

    setActive(active) {
        this.active = active;
        return this;
    }

    setUpdatedAt(updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    }

    setAddress(address) {
        this.address = address;
        return this;
    }

    static getModel(){
        if (model === null && schemaFuelStation === null){
            const {Schema} = moongoose;

            schemaFuelStation = new Schema({
                createdAt: {type: Date, default: Date.now},
                updatedAt: {type: Date},
                name: {type: String, required: [true, '{PATH} is required!']},
                active: {type: Boolean, required: [true, '{PATH} is required!']},
                address: {type: Object, required: [true, '{PATH} is required!']}
            })

            schemaFuelStation.index({name: 1}, {unique: true});
            model = moongoose.model('FuelStatiton', schemaFuelStation);
        }

        return model;
    }

}

module.exports = FuelStation;