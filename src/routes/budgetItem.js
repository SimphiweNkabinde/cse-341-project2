const router = require("express").Router();
const {
  validateCreate,
  validateUpdate,
} = require("../middleware/validators/budgetItemValidator");
const controller = require("./../controllers/budgetItem");

router.get("/", controller.getAll);
router.get("/:id", controller.getOne);
router.post("/", validateCreate, controller.create);
router.put("/:id", validateUpdate, controller.update);
router.delete("/:id", controller.remove);

module.exports = router;
