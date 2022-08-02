const Hive = require("../models/HiveModel");
const User = require("../models/UserModel");

async function getAll(query) {
 let furnitures;

  if (query.where) {
    const userId = Object.entries(query)[0][1].split("=")[1].split('"')[1];

    return (furnitures = await Hive.find({ _ownerId: userId }));
  }

  return (furnitures = await Hive.find());
}

async function getOne(id) {
  return (furniture = await Hive.findById(id));
}

async function create(data, user) {
  const created = await Hive.create({ ...data });
  const creator = await User.findById(user._id);

  created._ownerId = user._id;
  creator.furnituresCreated.push(created);

  created.save();
  creator.save();

  return created;
}

async function edit(furnitureId, data) {
  const edited = await Hive.findByIdAndUpdate(furnitureId, data);

  return edited;
}

async function remove(furnitureId) {
  const removed = await Hive.findByIdAndRemove(furnitureId);

  return removed;
}

module.exports = {
  getAll,
  getOne,
  create,
  edit,
  remove,
};
