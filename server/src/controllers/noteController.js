const router = require("express").Router();

const { authorization } = require("../middlewares/authMiddleware");

const noteService = require("../services/noteService");
const { errorMapper } = require("../utils/errorMapper");

router.post("/", authorization, async (req, res) => {
  let inputErrors = inputErrorChecker(req.body);

  try {
    if (inputErrors.length !== 0) {
      inputErrors = inputErrors.join("\n");
      throw new Error(inputErrors);
    }

    const createdNote = await noteService.createNote(req.body);
    res.status(200).json(createdNote);
  } catch (error) {
    let message = errorMapper(error);
    res.status(400).json({ message });
  }
});

function inputErrorChecker(data) {
  let inputErrors = [];

  if (data.date.length < 10) {
    inputErrors.push("Please choose a valid date for the note.");
  }

  if (data.note.length < 12) {
    inputErrors.push("The note must be at least twelve (12) characters long.");
  }
  return inputErrors;
}

module.exports = router;
