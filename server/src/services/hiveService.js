const mongoose = require("mongoose");

const Hive = require("../models/HiveModel");
const User = require("../models/UserModel");
const Note = require("../models/NoteModel");

async function getAll(query) {
  let hives;

  if (query.where) {
    const userId = Object.entries(query)[0][1].split("=")[1].split('"')[1];

    return (hives = await Hive.find({ _ownerId: userId }).populate("_ownerId"));
  }

  return (hives = await Hive.find().populate("_ownerId"));
}

async function getOne(id) {
  return (hive = await Hive.findById(id).populate("_ownerId"));
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

  await Note.deleteMany({ hive: removed._id });

  return removed;
}

async function getAllByLocation(search) {
  const town = Object.values(search)[0];

  // const allByLocation = await (await Hive.find({ location: town }).populate('_ownerId'))
  let allByLocation = await Hive.find().populate("_ownerId");

  allByLocation = allByLocation.filter(
    (x) => x.location.toLowerCase() === town.toLowerCase()
  );

  return allByLocation;
}

async function getAllByUser(userId) {
  const allByUser = await Hive.find({
    _ownerId: mongoose.Types.ObjectId(userId),
  }).populate("_ownerId");

  return allByUser;
}

module.exports = {
  getAll,
  getOne,
  create,
  edit,
  remove,
  getAllByLocation,
  getAllByUser,
};
