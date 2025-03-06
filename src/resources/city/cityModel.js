const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const citySchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true,
        },
        state: {
            type: String,
            required: true,
        },
        country: {
            type: String,
            required: true,
        }
    },
    { timestamps: true }
);

const City = mongoose.model('City', citySchema);

module.exports = City;
