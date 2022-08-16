const router = require("express").Router();

const { authorization } = require("../middlewares/authMiddleware");

const hiveService = require("../services/hiveService");
const { errorMapper } = require("../utils/errorMapper");

router.get("/", async (req, res) => {
  try {
    const hive = await hiveService.getAll(req.query);
    res.status(200).json(hive);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const hive = await hiveService.getOne(req.params.id);
    res.status(200).json(hive);
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: "error.message" });
  }
});

router.get("/userId/:id", async (req, res) => {
  try {
    const userHives = await hiveService.getAllByUser(req.params.id);
    res.status(200).json(userHives);
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: "error.message" });
  }
});

router.post("/search", async (req, res) => {
  let inputErrors = inputErrorChecker(req.body);

  try {
    if (inputErrors.length !== 0) {
      inputErrors = inputErrors.join("\n");
      throw new Error(inputErrors);
    }

    const allByLocation = await hiveService.getAllByLocation(req.body);
    res.status(200).json(allByLocation);
  } catch (error) {
    let message = errorMapper(error);
    res.status(400).json({ message });
  }
});

router.post("/", authorization, async (req, res) => {
  let inputErrors = inputErrorChecker(req.body);

  try {
    if (inputErrors.length !== 0) {
      inputErrors = inputErrors.join("\n");
      throw new Error(inputErrors);
    }

    const created = await hiveService.create(req.body, res.user);
    res.status(200).json(created);
  } catch (error) {
    let message = errorMapper(error);
    res.status(400).json({ message });
  }
});

router.put("/:id", authorization, async (req, res) => {
  let inputErrors = inputErrorChecker(req.body);

  try {
    if (inputErrors.length !== 0) {
      inputErrors = inputErrors.join("\n");
      throw new Error(inputErrors);
    }

    const edited = await hiveService.edit(req.params.id, req.body);
    res.status(200).json(edited);
  } catch (error) {
    let message = errorMapper(error);
    res.status(400).json({ message });
  }
});

router.delete("/:id", authorization, async (req, res) => {
  try {
    const removed = await hiveService.remove(req.params.id);
    res.status(200).json(removed);
  } catch (error) {
    let message = errorMapper(error);
    res.status(400).json({ message });
  }
});

module.exports = router;

function inputErrorChecker(data) {
  let inputErrors = [];

  if (data.number?.length < 1) {
    inputErrors.push("You must type a name or number for the hive.");
  }

  if (data.location?.length < 3) {
    inputErrors.push(
      "The location must be at least three (3) characters long."
    );
  }

  if (data.description?.length < 12) {
    inputErrors.push(
      "The description must be at least twelve (12) characters long."
    );
  }

  return inputErrors;
}
