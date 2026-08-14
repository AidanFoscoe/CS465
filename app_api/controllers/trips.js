const mongoose = require('mongoose');
const Trip = require('../models/travlr');
const Model = mongoose.model('trips');

// GET: /trips - lists all thye trips
// Regardless of outcome, response must include HTML status code
// and JSON message to the requesting client
const tripsList = async(req, res) => {
    const q = await Model
        .find({}) //No filter, return all records
        .exec();

        // Uncomment the following line to show results of querey
        // on the console
        // console.log(q);

    if(!q)
    { //Database returned no data
        return res
                .status(404)
                .json(err);
    } else { //return resulting trip list
        return res
            .status(200)
            .json(q);
    }
};

// GET: /trips/:tripCode - lists a single trip
// regardless of outcome, response must include HTML status code
// and JSON message to the requresting client
const tripsFindByCode = async(req, res) => {
    const q = await Model
        .find({'code' : req.params.tripCode }) //return single record
        .exec();

        // Uncomment the following line to show results of querey
        // on the console
        // console.log(q);

    if(!q)
    { //Database returned no data
        return res
                .status(404)
                .json(err);
    } else { //return resulting trip list
        return res
            .status(200)
            .json(q);
    }
};

const tripsAddTrip = async(req, res) => {
    const newTrip = new Trip({
        code: req.body.code,
        name: req.body.name,
        length: req.body.length,
        start: req.body.start,
        resort: req.body.resort,
        perPerson: req.body.perPerson,
        image: req.body.image,
        description: req.body.description
    });

    const q = await newTrip.save();
        if(!q)
        { //database returned no data
            return res
                .status(400)
                .json(err);
            } else {
                return res
                    .status(201)
                    .json(q);
            }

            //Uncomment the following lines to show results of operation
            //on console
            //console.log(q);
};

module.exports = {
    tripsList, 
    tripsFindByCode,
    tripsAddTrip
};