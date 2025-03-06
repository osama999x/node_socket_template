const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema(
    {
        name: {
            type: String,

        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,

        },
        mobile: {
            type: String,
            unique: true,
        },
        gender: {
            type: String,
            enum: ['Male', 'Female', 'Other']

        },
        maritalStatus: {
            type: String,
            enum: ['Married', 'Divorcee', 'Unmarried',],

        },
        dob: {
            type: Date,

        },
        religion: {
            type: Schema.Types.ObjectId,
            ref: 'Religion',

        },
        city: {
            type: Schema.Types.ObjectId,
            ref: 'City',

        },
        isActive: {
            type: Boolean,
            default: true,
        },
        isPasswordSecure: {
            type: Boolean,
            default: false,
        },
        isDeleted: {
            type: Boolean,
            default: false,
        },
        profileType: {
            type: String,
            enum: ['Sibling', 'Friend', 'Child', 'Parent', 'Relative', 'Self'],
        }
    },
    { timestamps: true }
);

const appUserModel = mongoose.model('AppUser', schema);

module.exports = appUserModel;
