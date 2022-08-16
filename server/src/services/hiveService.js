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

async function getAllByCondition(searchData) {
  let allByCondition = await Hive.find().populate("_ownerId");

  if (searchData.searchCriteria === "number") {
    allByCondition = allByCondition.filter((x) =>
      x.number.toLowerCase().includes(searchData.search.toLowerCase())
    );
  }

  if (searchData.searchCriteria === "location") {
    allByCondition = allByCondition.filter((x) =>
      x.location.toLowerCase().includes(searchData.search.toLowerCase())
    );
  }

  if (searchData.searchCriteria === "description") {
    allByCondition = allByCondition.filter((x) =>
      x.description.toLowerCase().includes(searchData.search.toLowerCase())
    );
  }

  if (searchData.searchCriteria === "owner") {
    allByCondition = allByCondition.filter((x) =>
      x._ownerId.username
        .toLowerCase()
        .includes(searchData.search.toLowerCase())
    );
  }

  return allByCondition;
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
  getAllByCondition,
  getAllByUser,
};
