const BaseRouter = require('./BaseRouter');
const Consts = require('../../Consts');
const FuelStationController = require('../controller/FuelStationController');

class FuelStationRouter extends BaseRouter {
    constructor(api) {
        super(api);

        this.fuelStationController = new FuelStationController();
    }

    configureRoutes() {
        this.addRoute(
            Consts.REQUEST.METHODS.GET,
            '/api',
            this.home.bind(this)
        );

        this.addRoute(
            Consts.REQUEST.METHODS.POST,
            '/fuelstation/',
            this.save.bind(this)
        );

        this.addRoute(
            Consts.REQUEST.METHODS.GET,
            '/fuelstation/',
            this.getAll.bind(this)
        );

        this.addRoute(
            Consts.REQUEST.METHODS.GET,
            '/fuelstation/:id',
            this.getById.bind(this)
        );

        this.addRoute(
            Consts.REQUEST.METHODS.DELETE,
            '/fuelstation/:id',
            this.delete.bind(this)
        );

        this.addRoute(
            Consts.REQUEST.METHODS.PUT,
            '/fuelstation/:id',
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
            const fuelStation = await this.fuelStationController.createFuelStation(req);
            return this.send(fuelStation, res, Const.REQUEST.HTTP.OK, null);
        } catch (error) {
            res.send(error);
        }
    }

    async getAll(req, res, next) {
        try {
            const fuelStationAll = await this.fuelStationController.getAllFuelStation();
            return this.send(fuelStationAll, res, Consts.REQUEST.HTTP.OK, null);
        } catch (error) {
            res.send(error)
        }
    }

    async getById(req, res, next) {
        try {
            const fuelStationAll = await this.fuelStationController.getById(req);
            return this.send(fuelStationAll, res, Consts.REQUEST.HTTP.OK, null);
        } catch (error) {
            res.send(error)
        }
    }

    async delete(req, res, next) {
        try {
            const fuelStationAll = await this.fuelStationController.delete(req);
            return this.send(fuelStationAll, res, Consts.REQUEST.HTTP.OK, null);
        } catch (error) {
            res.send(error)
        }
    }


    async update(req, res, next) {
        try {
            const fuelStationAll = await this.fuelStationController.update(req);
            return this.send(fuelStationAll, res, Consts.REQUEST.HTTP.OK, null);
        } catch (error) {
            res.send(error)
        }
    }

}

module.exports = FuelStationRouter;