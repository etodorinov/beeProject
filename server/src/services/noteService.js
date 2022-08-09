const Hive = require("../models/HiveModel");
const Note = require("../models/NoteModel");

async function createNote(data) {
  const { hiveId, date, note } = { ...data };

  const hive = await Hive.findById(hiveId);

  const createdNote = await Note.create({
    date,
    note,
    hive: hive._id,
    _ownerId: hive._ownerId,
  });

  hive.notes.push(createdNote);
  hive.save();

  return createdNote;
}

module.exports = { createNote };
