const {
  Schema,
  model,
  Types: { ObjectId },
} = require("mongoose");

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    validate: {
      validator: function () {
        return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(this.email);
      },
      message: "You should fill in a valid email address.",
    },
  },
  username: {
    type: String,
    required: true,
    minLength: [
      4,
      "Your username should be at least four (4) characters long.",
    ],
  },
  password: {
    type: String,
    required: true,
    minLength: [
      4,
      "Your password should be at least four (4) characters long.",
    ],
  },
  hivesCreated: [{ type: ObjectId, ref: "Hive" }],
});

const User = model("User", userSchema);

module.exports = User;
