const { Router } = require("express");
const router = Router();
const itensController = require("../controllers/itensController");

router.get("/itens", itensController.read);

router.post("/itens", itensController.create);

router.put("/itens/:id", itensController.update);

router.delete("/itens/:id", itensController.delete);

module.exports = router;