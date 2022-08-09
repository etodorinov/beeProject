const {
  Schema,
  model,
  Types: { ObjectId },
} = require("mongoose");

const noteSchema = new Schema({
  date: {
    type: String,
    required: true,
    minLength: [1, "You must type a name or number for the hive."],
  },
  note: {
    type: String,
    required: true,
    minLength: [
      12,
      "The note must be at least twelve (12) characters long.",
    ],
  },
  _ownerId: { type: ObjectId, ref: "User" },
  hive: { type: ObjectId, ref: "Hive" },
});

const Note = model("Note", noteSchema);

module.exports = Note;
