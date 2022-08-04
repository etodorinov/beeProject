const Hive = require("../models/HiveModel");
const User = require("../models/UserModel");

async function getAll(query) {
 let hives;

  if (query.where) {
    const userId = Object.entries(query)[0][1].split("=")[1].split('"')[1];

    return (hives = await Hive.find({ _ownerId: userId }));
  }

  return (hives = await Hive.find());
}

async function getOne(id) {
  return (hive = await Hive.findById(id));
}

async function create(data, user) {
  const created = await Hive.create({ ...data });
  const creator = await User.findById(user._id);

  created._ownerId = user._id;
  creator.hivesCreated.push(created);

  created.save();
  creator.save();

  return created;
}

async function edit(hiveId, data) {
  const edited = await Hive.findByIdAndUpdate(hiveId, data);

  return edited;
}

async function remove(hiveId) {
  const removed = await Hive.findByIdAndRemove(hiveId);

  return removed;
}

module.exports = {
  getAll,
  getOne,
  create,
  edit,
  remove,
};
