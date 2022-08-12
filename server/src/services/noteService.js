const Hive = require("../models/HiveModel");
const Note = require("../models/NoteModel");
const User = require("../models/UserModel");

async function getAllNotes() {
  const notes = await Note.find();
  return notes;
}

async function getAllNotesForSpecificHive(hiveId) {
  const specificNotes = await Note.find({ hive: hiveId });

  return specificNotes;
}

async function getSpecificNote(noteId) {
  const specificNote = await Note.find({ _id: noteId });

  return specificNote;
}

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

async function editNote(noteId, data) {
  const { editedDate, editedNote } = { ...data };

  const edited = await Note.findByIdAndUpdate(noteId, {
    date: editedDate,
    note: editedNote,
  });

  return edited;
}

async function removeNote(noteId) {
  const removedNote = await Note.findByIdAndRemove(noteId);

  return removedNote;
}

module.exports = {
  getAllNotes,
  getAllNotesForSpecificHive,
  createNote,
  getSpecificNote,
  editNote,
  removeNote,
};
