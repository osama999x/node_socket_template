const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const religionSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true,
        }
    },
    { timestamps: true }
);

const Religion = mongoose.model('Religion', religionSchema);

module.exports = Religion;
