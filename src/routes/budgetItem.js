const router = require("express").Router();
const validator = require("../middleware/validators/budgetItemValidator");
const controller = require("./../controllers/budgetItem");

router.get("/", controller.getAll);
router.get("/:id", validator.validateGetOne, controller.getOne);
router.post("/", validator.validateCreate, controller.create);
router.put("/:id", validator.validateUpdate, controller.update);
router.delete("/:id", validator.validateDeleteOne, controller.remove);

module.exports = router;
