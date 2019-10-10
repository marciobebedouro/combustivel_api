const BaseRouter = require('./BaseRouter');
const Const = require('../../Consts');
const FuelStationController = require('../controller/FuelStationController');

class FuelStationRouter extends BaseRouter {
    constructor(api) {
        super(api);

        this.fuelStationController = new FuelStationController();
    }

    configureRoutes() {
        this.addRoute(
            Const.REQUEST.METHODS.GET,
            '/api',
            this.home.bind(this)
        );

        this.addRoute(
            Const.REQUEST.METHODS.POST,
            '/fuelstation/',
            this.save.bind(this)
        );
    }

    async home(req, res, next) {
        const app = {app: 'combustivel', versao: '1.0'};
        try {
            return this.send(app, res, Const.REQUEST.HTTP.OK, null);
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
}

module.exports = FuelStationRouter;