const mongoose = require('mongoose');

let model = null;
let schemaFuel = null;

class Fuel {
    constructor ({_id, id, price, active, updateAt, fuelStation}) {
        this.id = _id || id || null;
        this.price = price || null;
        this.active = active;
        this.updateAt = updateAt || null;
        this.fuelStation = fuelStation;
    }

    setId(id) {
        this.id = id;
        return this;
    }

    setPrice(price) {
        this.price = price;
        return this;
    }

    setActive(active) {
        this.active = active;
        return this;
    }

    setUpdateAt(updateAt) {
        this.updateAt = updateAt;
        return this;
    }

    setFuelStation(fuelStation) {
        this.fuelStation = fuelStation;
        return this;
    }

    static getModel() {
        if(model === null && schemaFuel === null) {
            const { Schema } = mongoose;

            schemaFuel = new Schema({
                createdAt: { type: Date, default: Date.now},
                updateAt: {type: Date},
                price: {type: Number, required:[true, '{PATH} is required!']},
                active: {type: Boolean, required:[true, '{PATH} is required!']},
                fuelStation: {type: Schema.Types.ObjectId, required:[true, '{PATH} is required!']}
            });

            model = mongoose.model('Fuel', schemaFuel);
        }

        return model;
    }
}

module.exports = Fuel;