const BaseRouter = require('./BaseRouter');
const Consts = require('../../Consts');
const FuelController = require('../controller/FuelController');

class FuelRouter extends BaseRouter {
    constructor(api) {
        super(api);

        this.fuelController = new FuelController();
    }

    configureRoutes() {
        this.addRoute(
            Consts.REQUEST.METHODS.GET,
            '/api',
            this.home.bind(this)
        );

        this.addRoute(
            Consts.REQUEST.METHODS.POST,
            '/fuel/',
            this.save.bind(this)
        );

        this.addRoute(
            Consts.REQUEST.METHODS.GET,
            '/fuel/',
            this.getAll.bind(this)
        );

        this.addRoute(
            Consts.REQUEST.METHODS.GET,
            '/fuel/:id',
            this.getById.bind(this)
        );

        this.addRoute(
            Consts.REQUEST.METHODS.DELETE,
            '/fuel/:id',
            this.delete.bind(this)
        );

        this.addRoute(
            Consts.REQUEST.METHODS.PUT,
            '/fuel/:id',
            this.update.bind(this)
        );
    }

    async home(req, res, next) {
        const app = {app: 'combustivel', versao: '1.0'};
        try {
            return this.send(app, res, Consts.REQUEST.HTTP.OK, null);
        } catch (error) {
            res.send(error)
        }
    }

    async save(req, res, next) {
        try {
            const fuel = await this.fuelController.createFuel(req);
            return this.send(fuel, res, Const.REQUEST.HTTP.OK, null);
        } catch (error) {
            res.send(error);
        }
    }

    async getAll(req, res, next) {
        try {
            const fuelAll = await this.fuelController.getAllFuel();
            return this.send(fuelAll, res, Consts.REQUEST.HTTP.OK, null);
        } catch (error) {
            res.send(error)
        }
    }

    async getById(req, res, next) {
        try {
            const fuelAll = await this.fuelController.getById(req);
            return this.send(fuelAll, res, Consts.REQUEST.HTTP.OK, null);
        } catch (error) {
            res.send(error)
        }
    }

    async delete(req, res, next) {
        try {
            const fuelAll = await this.fuelController.delete(req);
            return this.send(fuelAll, res, Consts.REQUEST.HTTP.OK, null);
        } catch (error) {
            res.send(error)
        }
    }


    async update(req, res, next) {
        try {
            const fuelAll = await this.fuelController.update(req);
            return this.send(fuelAll, res, Consts.REQUEST.HTTP.OK, null);
        } catch (error) {
            res.send(error)
        }
    }

    async getFuelByStationId(req, res, next) {
        try {
            const fuel = await this.fuelController.getFuelByFuelStationId(req);
            return this.send(fuel, res, Consts.REQUEST.HTTP.OK, null);
        } catch (error) {
            res.send(error)
        }
    }

}

module.exports = FuelRouter;