const passwordServices = require('../../utils/passwordServices');
const appUserModel = require('./appUserModel');

const adminUserServices = {
    create: async (data) => {
        data.password = await passwordServices.hash(data.password, 12);
        return await appUserModel.create(data);
    },
    update: async (_id, data) => {
        delete data.userId;
        if (data.password)
            data.password = await passwordServices.hash(data.password, 12);
        else delete data.password;
        return await appUserModel.findOneAndUpdate({ _id }, data, { new: true });
    },
    getAll: async () => {
        return await appUserModel
            .find({ password: 0 })
    },
    getByEmail: async (email) => {
        const user = await appUserModel
            .findOne({ email })
            .lean();

        return user;
    },
    getByMobile: async (mobile) => {
        return await appUserModel.findOne({ mobile }).lean();
    },
    getById: async (id) => {
        return await appUserModel.findById(id);
    },
    updateStatus: async (id, isActive) => {
        return await appUserModel.findOneAndUpdate({ _id: id }, { isActive });
    },
    deleteAdmin: async (id) => {
        const result = await appUserModel.findByIdAndUpdate(
            id,
            { isDeleted: true },
            { new: true }
        );
        return result;
    },
};

module.exports = adminUserServices;