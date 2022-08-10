const Hive = require("../models/HiveModel");
const Note = require("../models/NoteModel");
const User = require("../models/UserModel");

async function createNote(data) {
  const { hiveId, date, note } = { ...data };

  const hive = await Hive.findById(hiveId);
  const user = await User.findById(hive._ownerId);

  const createdNote = await Note.create({
    date,
    note,
    hive: hive._id,
    _ownerId: hive._ownerId,
  });

  hive.notes.push(createdNote);
  hive.save();

  user.notesCreated.push(createdNote);
  user.save();

  return createdNote;
}

module.exports = { createNote };
