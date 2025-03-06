const Religion = require('./religionModel');

const religionServices = {
    createReligion: async (religionData) => {
        return await Religion.create(religionData);
    },

    getAllReligions: async () => {
        return await Religion.find();
    },

    getReligionById: async (id) => {
        return await Religion.findById(id);
    },

    updateReligion: async (id, updateData) => {
        return await Religion.findByIdAndUpdate(id, updateData, { new: true });
    },

    deleteReligion: async (id) => {
        return await Religion.findByIdAndDelete(id);
    },
};

module.exports = religionServices;
