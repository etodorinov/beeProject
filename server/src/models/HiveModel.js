const {
  Schema,
  model,
  Types: { ObjectId },
} = require("mongoose");

const hiveSchema = new Schema({
  number: {
    type: String || Number,
    required: true,
    minLength: [1, "You must type a name or number for the hive."],
  },
  location: {
    type: String,
    required: true,
    minLength: [3, "The location must be at least three (3) characters long."],
  },
  description: {
    type: String,
    required: true,
    minLength: [
      12,
      "The description must be at least twelve (12) characters long.",
    ],
  },
  condition: {
    type: String,
    required: true,
  },
  _ownerId: { type: ObjectId, ref: "User" },
  notes: [{ type: ObjectId, ref: "Note" }],
});

const Hive = model("Hive", hiveSchema);

module.exports = Hive;
