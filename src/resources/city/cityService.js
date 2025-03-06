const City = require('./cityModel');

const cityServices = {
    createCity: async (cityData) => {
        return await City.create(cityData);
    },

    getAllCities: async () => {
        return await City.find();
    },

    getCityById: async (id) => {
        return await City.findById(id);
    },

    updateCity: async (id, updateData) => {
        return await City.findByIdAndUpdate(id, updateData, { new: true });
    },

    deleteCity: async (id) => {
        return await City.findByIdAndDelete(id);
    },
};

module.exports = cityServices;
